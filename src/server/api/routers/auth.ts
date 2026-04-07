import { create } from "@bufbuild/protobuf";
import type { Duration } from "@bufbuild/protobuf/wkt";
import type { Client } from "@connectrpc/connect";
import { TRPCError } from "@trpc/server";
import {
	createServiceForHost,
	createServiceForHostWithUserToken,
} from "lib/service";
import { getServiceUrlFromHeaders } from "lib/service-url";
import { headers } from "next/headers";
import { z } from "zod";
import { getUserAgent } from "~/app/_lib/fingerprint";
import { RequestContextSchema } from "~/app/_lib/proto/zitadel/object/v2/object_pb.js";
import { TextQueryMethod } from "~/app/_lib/proto/zitadel/object/v2/object_pb.js";
import { OIDCService } from "~/app/_lib/proto/zitadel/oidc/v2/oidc_service_pb";
import {
	RequestChallengesSchema,
	RequestChallenges_OTPEmailSchema,
	RequestChallenges_OTPEmail_SendCodeSchema,
} from "~/app/_lib/proto/zitadel/session/v2/challenge_pb.js";
import {
	CheckOTPSchema,
	ChecksSchema,
	SessionService,
} from "~/app/_lib/proto/zitadel/session/v2/session_service_pb";
import { SettingsService } from "~/app/_lib/proto/zitadel/settings/v2/settings_service_pb";
import {
	LoginNameQuerySchema,
	SearchQuerySchema,
} from "~/app/_lib/proto/zitadel/user/v2/query_pb.js";
import { UserService } from "~/app/_lib/proto/zitadel/user/v2/user_service_pb";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export function makeReqCtx(orgId: string | undefined) {
	return create(RequestContextSchema, {
		resourceOwner: orgId
			? { case: "orgId", value: orgId }
			: { case: "instance", value: true },
	});
}

export const authRouter = createTRPCRouter({
	login: publicProcedure
		.input(
			z.object({
				username: z.string().min(1),
				password: z.string().min(1),
				authRequestId: z.string(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { serviceUrl } = getServiceUrlFromHeaders(await headers());

			const settingsService: Client<typeof SettingsService> =
				await createServiceForHost(SettingsService, serviceUrl);

			const resp = await settingsService.getLoginSettings(
				{ ctx: makeReqCtx(undefined) },
				{},
			);
			const settings = resp?.settings;

			const sessionService: Client<typeof SessionService> =
				await createServiceForHost(SessionService, serviceUrl);

			const checks = create(ChecksSchema, {
				user: { search: { case: "loginName", value: input.username } },
				password: { password: input.password },
			});

			const userAgent = await getUserAgent();
			const lifetime = settings?.externalLoginCheckLifetime;

			const session = await sessionService.createSession(
				{
					checks,
					lifetime,
					userAgent,
				},
				{},
			);
			console.log("Session created", session);

			const sessionServiceWithUserToken: Client<typeof SessionService> =
				await createServiceForHostWithUserToken(
					SessionService,
					serviceUrl,
					session.sessionToken,
				);

			const sessionDetails = await sessionServiceWithUserToken.getSession(
				{
					sessionId: session.sessionId,
					sessionToken: session.sessionToken,
				},
				{},
			);
			console.log("Session details with user token", sessionDetails);

			const oidcService: Client<typeof OIDCService> =
				await createServiceForHost(OIDCService, serviceUrl);
			const oidcResp = await oidcService.getAuthRequest({
				authRequestId: input.authRequestId,
			});
			console.log("OIDC Auth Request usertoken", oidcResp);

			const oidcFinalizeResp = await oidcService.createCallback({
				authRequestId: input.authRequestId,
				callbackKind: {
					value: {
						sessionId: session.sessionId,
						sessionToken: session.sessionToken,
					},
					case: "session",
				},
			});
			console.log("OIDC finalize", oidcFinalizeResp);

			return oidcFinalizeResp;
		}),

	requestOTP: publicProcedure
		.input(
			z.object({
				loginName: z.string().min(1),
				authRequestId: z.string(),
			}),
		)
		.mutation(async ({ input }) => {
			const { serviceUrl } = getServiceUrlFromHeaders(await headers());

			const settingsService: Client<typeof SettingsService> =
				await createServiceForHost(SettingsService, serviceUrl);
			const resp = await settingsService.getLoginSettings(
				{ ctx: makeReqCtx(undefined) },
				{},
			);
			const lifetime = resp?.settings?.externalLoginCheckLifetime;

			const sessionService: Client<typeof SessionService> =
				await createServiceForHost(SessionService, serviceUrl);

			const checks = create(ChecksSchema, {
				user: { search: { case: "loginName", value: input.loginName } },
			});

			const challenges = create(RequestChallengesSchema, {
				otpEmail: create(RequestChallenges_OTPEmailSchema, {
					deliveryType: {
						case: "sendCode",
						value: create(RequestChallenges_OTPEmail_SendCodeSchema, {}),
					},
				}),
			});

			const userAgent = await getUserAgent();

			try {
				const session = await sessionService.createSession(
					{ checks, challenges, userAgent, lifetime },
					{},
				);
				return {
					sessionId: session.sessionId,
					sessionToken: session.sessionToken,
				};
			} catch (err) {
				// Auto-register OTP Email if not configured for this user
				const errMsg = err instanceof Error ? err.message : String(err);
				const isOtpNotConfigured =
					errMsg.includes("otp") ||
					errMsg.includes("OTP") ||
					errMsg.includes("precondition") ||
					errMsg.includes("PRECONDITION");

				if (isOtpNotConfigured) {
					try {
						// Look up userId by loginName
						const userService: Client<typeof UserService> =
							await createServiceForHost(UserService, serviceUrl);

						const listResp = await userService.listUsers({
							queries: [
								create(SearchQuerySchema, {
									query: {
										case: "loginNameQuery",
										value: create(LoginNameQuerySchema, {
											loginName: input.loginName,
											method: TextQueryMethod.EQUALS,
										}),
									},
								}),
							],
						});

						const user = listResp.result[0];
						if (!user) {
							throw new TRPCError({
								code: "NOT_FOUND",
								message: "No account found with this email.",
							});
						}

						// Register OTP Email for this user
						await userService.addOTPEmail({ userId: user.userId });

						// Retry createSession with OTP challenge
						const session = await sessionService.createSession(
							{ checks, challenges, userAgent, lifetime },
							{},
						);
						return {
							sessionId: session.sessionId,
							sessionToken: session.sessionToken,
						};
					} catch (retryErr) {
						if (retryErr instanceof TRPCError) throw retryErr;
						throw new TRPCError({
							code: "BAD_REQUEST",
							message:
								retryErr instanceof Error
									? retryErr.message
									: "Failed to send verification code. Please try again.",
						});
					}
				}

				throw new TRPCError({
					code: "BAD_REQUEST",
					message: errMsg,
				});
			}
		}),

	verifyOTP: publicProcedure
		.input(
			z.object({
				sessionId: z.string().min(1),
				sessionToken: z.string().min(1),
				otpCode: z.string().min(1),
				authRequestId: z.string(),
			}),
		)
		.mutation(async ({ input }) => {
			const { serviceUrl } = getServiceUrlFromHeaders(await headers());

			const sessionService: Client<typeof SessionService> =
				await createServiceForHost(SessionService, serviceUrl);

			const checks = create(ChecksSchema, {
				otpEmail: create(CheckOTPSchema, { code: input.otpCode }),
			});

			try {
				const setSessionResp = await sessionService.setSession(
					{
						sessionId: input.sessionId,
						sessionToken: input.sessionToken,
						checks,
					},
					{},
				);

				const oidcService: Client<typeof OIDCService> =
					await createServiceForHost(OIDCService, serviceUrl);

				await oidcService.getAuthRequest({
					authRequestId: input.authRequestId,
				});

				const oidcFinalizeResp = await oidcService.createCallback({
					authRequestId: input.authRequestId,
					callbackKind: {
						value: {
							sessionId: input.sessionId,
							sessionToken: setSessionResp.sessionToken,
						},
						case: "session",
					},
				});

				return oidcFinalizeResp;
			} catch (err) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					message:
						err instanceof Error
							? err.message
							: "Invalid or expired code. Please try again.",
				});
			}
		}),

	resendOTP: publicProcedure
		.input(
			z.object({
				sessionId: z.string().min(1),
				sessionToken: z.string().min(1),
			}),
		)
		.mutation(async ({ input }) => {
			const { serviceUrl } = getServiceUrlFromHeaders(await headers());

			const sessionService: Client<typeof SessionService> =
				await createServiceForHost(SessionService, serviceUrl);

			const challenges = create(RequestChallengesSchema, {
				otpEmail: create(RequestChallenges_OTPEmailSchema, {
					deliveryType: {
						case: "sendCode",
						value: create(RequestChallenges_OTPEmail_SendCodeSchema, {}),
					},
				}),
			});

			try {
				const setSessionResp = await sessionService.setSession(
					{
						sessionId: input.sessionId,
						sessionToken: input.sessionToken,
						challenges,
					},
					{},
				);
				return { sessionToken: setSessionResp.sessionToken };
			} catch (err) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					message:
						err instanceof Error
							? err.message
							: "Failed to resend code. Please try again.",
				});
			}
		}),
});
