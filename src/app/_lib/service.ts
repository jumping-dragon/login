import { IdentityProviderService } from "lib/proto/zitadel/idp/v2/idp_service_pb";
import { OIDCService } from "lib/proto/zitadel/oidc/v2/oidc_service_pb";
import { OrganizationService } from "lib/proto/zitadel/org/v2/org_service_pb";
import { SAMLService } from "lib/proto/zitadel/saml/v2/saml_service_pb";
import { SessionService } from "lib/proto/zitadel/session/v2/session_service_pb";
import { SettingsService } from "lib/proto/zitadel/settings/v2/settings_service_pb";
import { UserService } from "lib/proto/zitadel/user/v2/user_service_pb";

import type { DescService } from "@bufbuild/protobuf";
import { createClient, type Transport } from "@connectrpc/connect";

export function createClientFor<TService extends DescService>(
  service: TService
) {
  return (transport: Transport) => createClient(service, transport);
}
import {
  createGrpcTransport,
  type GrpcTransportOptions,
} from "@connectrpc/connect-node";
import { importPKCS8, SignJWT } from "jose";

import type { Interceptor } from "@connectrpc/connect";

/**
 * Creates an interceptor that adds an Authorization header with a Bearer token.
 * @param token
 */
export function NewAuthorizationBearerInterceptor(token: string): Interceptor {
  return (next) => (req) => {
    // TODO: I am not what is the intent of checking for the Authorization header
    //  and setting it if it is not present.
    if (!req.header.get("Authorization")) {
      req.header.set("Authorization", `Bearer ${token}`);
    }
    return next(req);
  };
}

/**
 * Create a server transport using grpc with the given token and configuration options.
 * @param token
 * @param opts
 */
export function createServerTransport(
  token: string,
  opts: GrpcTransportOptions
) {
  return createGrpcTransport({
    ...opts,
    interceptors: [
      ...(opts.interceptors || []),
      NewAuthorizationBearerInterceptor(token),
    ],
  });
}

export async function newSystemToken({
  audience,
  subject,
  key,
  expirationTime,
}: {
  audience: string;
  subject: string;
  key: string;
  expirationTime?: number | string | Date;
}) {
  return await new SignJWT({})
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt()
    .setExpirationTime(expirationTime ?? "1h")
    .setIssuer(subject)
    .setSubject(subject)
    .setAudience(audience)
    .sign(await importPKCS8(key, "RS256"));
}

type ServiceClass =
  | typeof IdentityProviderService
  | typeof UserService
  | typeof OrganizationService
  | typeof SessionService
  | typeof OIDCService
  | typeof SettingsService
  | typeof SAMLService;

export async function createServiceForHost<T extends ServiceClass>(
  service: T,
  serviceUrl: string
) {
  const token = process.env.ZITADEL_SERVICE_USER_TOKEN;

  if (!serviceUrl) {
    throw new Error("No instance url found");
  }

  if (!token) {
    throw new Error("No token found");
  }

  const transport = createServerTransport(token, {
    baseUrl: serviceUrl,
    interceptors: !process.env.CUSTOM_REQUEST_HEADERS
      ? undefined
      : [
          (next) => {
            return (req) => {
              process.env.CUSTOM_REQUEST_HEADERS?.split(",").forEach(
                (header) => {
                  const kv = header.split(":");
                  if (kv[0] && kv[1] !== undefined) {
                    req.header.set(kv[0], kv[1]);
                  }
                }
              );
              return next(req);
            };
          },
        ],
  });

  return createClientFor<T>(service)(transport);
}

export async function createServiceForHostWithUserToken<T extends ServiceClass>(
  service: T,
  serviceUrl: string,
  token: string
) {
  if (!serviceUrl) {
    throw new Error("No instance url found");
  }

  if (!token) {
    throw new Error("No token found");
  }

  const transport = createServerTransport(token, {
    baseUrl: serviceUrl,
    interceptors: !process.env.CUSTOM_REQUEST_HEADERS
      ? undefined
      : [
          (next) => {
            return (req) => {
              process.env.CUSTOM_REQUEST_HEADERS?.split(",").forEach(
                (header) => {
                  const kv = header.split(":");
                  if (kv[0] && kv[1] !== undefined) {
                    req.header.set(kv[0], kv[1]);
                  }
                }
              );
              return next(req);
            };
          },
        ],
  });

  return createClientFor<T>(service)(transport);
}
