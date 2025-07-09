import { z } from "zod";
import { headers } from "next/headers";
import { getServiceUrlFromHeaders } from "lib/service-url";
import { createServiceForHost, createServiceForHostWithUserToken } from "lib/service";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { Client } from "@connectrpc/connect";
import { ChecksSchema, SessionService } from "~/app/_lib/proto/zitadel/session/v2/session_service_pb";
import type { Duration } from "@bufbuild/protobuf/wkt";
import { SettingsService } from "~/app/_lib/proto/zitadel/settings/v2/settings_service_pb";
import { create } from "@bufbuild/protobuf";
import { RequestContextSchema } from "~/app/_lib/proto/zitadel/object/v2/object_pb.js";
import { getUserAgent } from "~/app/_lib/fingerprint";
import { OIDCService } from "~/app/_lib/proto/zitadel/oidc/v2/oidc_service_pb";

export function makeReqCtx(orgId: string | undefined) {
	return create(RequestContextSchema, {
		resourceOwner: orgId
			? { case: "orgId", value: orgId }
			: { case: "instance", value: true },
	});
}

// Mocked DB
interface Post {
	id: number;
	name: string;
}
const posts: Post[] = [
	{
		id: 1,
		name: "Hello World",
	},
];

export const postRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(({ input }) => {
			return {
				greeting: `Hello ${input.text}`,
			};
		}),

	create: publicProcedure
		.input(z.object({ name: z.string().min(1) }))
		.mutation(async ({ input }) => {
			const post: Post = {
				id: posts.length + 1,
				name: input.name,
			};
			posts.push(post);
			return post;
		}),

	getLatest: publicProcedure.query(() => {
		return posts.at(-1) ?? null;
	}),

	login: publicProcedure
		.input(
			z.object({ username: z.string().min(1), password: z.string().min(1), authRequestId: z.string() }),
		)
		.mutation(async ({ ctx, input }) => {
			const { serviceUrl } = getServiceUrlFromHeaders(await headers());

			const settingsService: Client<typeof SettingsService> =
				await createServiceForHost(SettingsService, serviceUrl);

			const resp = await settingsService.getLoginSettings({ ctx: makeReqCtx(undefined) }, {})
			const settings = resp?.settings

			const sessionService: Client<typeof SessionService> =
				await createServiceForHost(SessionService, serviceUrl);


			const checks = create(ChecksSchema, {
				user: { search: { case: "loginName", value: input.username } },
				password: { password: input.password },
			});

			const userAgent = await getUserAgent();
			const lifetime = settings?.externalLoginCheckLifetime

			const session = await sessionService.createSession(
				{
					checks,
					lifetime,
					userAgent
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
				await createServiceForHost(
					OIDCService,
					serviceUrl
				);
			const oidcResp = await oidcService.getAuthRequest({
				authRequestId: input.authRequestId,				
			})
			console.log("OIDC Auth Request usertoken", oidcResp);

			const oidcFinalizeResp = await oidcService.createCallback(
				{
					authRequestId: input.authRequestId,
					callbackKind: {
						value: {
							sessionId: session.sessionId,
							sessionToken: session.sessionToken,
						},
						case: "session"
					}
				}
			)
			console.log("OIDC finalize", oidcFinalizeResp);

			return oidcFinalizeResp
		}),
});
