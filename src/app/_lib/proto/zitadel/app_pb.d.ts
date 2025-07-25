// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/app.proto (package zitadel.app.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { ObjectDetails, ObjectDetailsJson, TextQueryMethod, TextQueryMethodJson } from "./object_pb.js";
import type { LocalizedMessage, LocalizedMessageJson } from "./message_pb.js";
import type { Duration, DurationJson } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file zitadel/app.proto.
 */
export declare const file_zitadel_app: GenFile;

/**
 * @generated from message zitadel.app.v1.App
 */
export declare type App = Message<"zitadel.app.v1.App"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 2;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: zitadel.app.v1.AppState state = 3;
   */
  state: AppState;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from oneof zitadel.app.v1.App.config
   */
  config: {
    /**
     * @generated from field: zitadel.app.v1.OIDCConfig oidc_config = 5;
     */
    value: OIDCConfig;
    case: "oidcConfig";
  } | {
    /**
     * @generated from field: zitadel.app.v1.APIConfig api_config = 6;
     */
    value: APIConfig;
    case: "apiConfig";
  } | {
    /**
     * @generated from field: zitadel.app.v1.SAMLConfig saml_config = 7;
     */
    value: SAMLConfig;
    case: "samlConfig";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.app.v1.App
 */
export declare type AppJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 2;
   */
  details?: ObjectDetailsJson;

  /**
   * @generated from field: zitadel.app.v1.AppState state = 3;
   */
  state?: AppStateJson;

  /**
   * @generated from field: string name = 4;
   */
  name?: string;

  /**
   * @generated from field: zitadel.app.v1.OIDCConfig oidc_config = 5;
   */
  oidcConfig?: OIDCConfigJson;

  /**
   * @generated from field: zitadel.app.v1.APIConfig api_config = 6;
   */
  apiConfig?: APIConfigJson;

  /**
   * @generated from field: zitadel.app.v1.SAMLConfig saml_config = 7;
   */
  samlConfig?: SAMLConfigJson;
};

/**
 * Describes the message zitadel.app.v1.App.
 * Use `create(AppSchema)` to create a new message.
 */
export declare const AppSchema: GenMessage<App, {jsonType: AppJson}>;

/**
 * @generated from message zitadel.app.v1.AppQuery
 */
export declare type AppQuery = Message<"zitadel.app.v1.AppQuery"> & {
  /**
   * @generated from oneof zitadel.app.v1.AppQuery.query
   */
  query: {
    /**
     * @generated from field: zitadel.app.v1.AppNameQuery name_query = 1;
     */
    value: AppNameQuery;
    case: "nameQuery";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.app.v1.AppQuery
 */
export declare type AppQueryJson = {
  /**
   * @generated from field: zitadel.app.v1.AppNameQuery name_query = 1;
   */
  nameQuery?: AppNameQueryJson;
};

/**
 * Describes the message zitadel.app.v1.AppQuery.
 * Use `create(AppQuerySchema)` to create a new message.
 */
export declare const AppQuerySchema: GenMessage<AppQuery, {jsonType: AppQueryJson}>;

/**
 * @generated from message zitadel.app.v1.AppNameQuery
 */
export declare type AppNameQuery = Message<"zitadel.app.v1.AppNameQuery"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;
};

/**
 * @generated from message zitadel.app.v1.AppNameQuery
 */
export declare type AppNameQueryJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method?: TextQueryMethodJson;
};

/**
 * Describes the message zitadel.app.v1.AppNameQuery.
 * Use `create(AppNameQuerySchema)` to create a new message.
 */
export declare const AppNameQuerySchema: GenMessage<AppNameQuery, {jsonType: AppNameQueryJson}>;

/**
 * @generated from message zitadel.app.v1.OIDCConfig
 */
export declare type OIDCConfig = Message<"zitadel.app.v1.OIDCConfig"> & {
  /**
   * @generated from field: repeated string redirect_uris = 1;
   */
  redirectUris: string[];

  /**
   * @generated from field: repeated zitadel.app.v1.OIDCResponseType response_types = 2;
   */
  responseTypes: OIDCResponseType[];

  /**
   * @generated from field: repeated zitadel.app.v1.OIDCGrantType grant_types = 3;
   */
  grantTypes: OIDCGrantType[];

  /**
   * @generated from field: zitadel.app.v1.OIDCAppType app_type = 4;
   */
  appType: OIDCAppType;

  /**
   * @generated from field: string client_id = 5;
   */
  clientId: string;

  /**
   * @generated from field: zitadel.app.v1.OIDCAuthMethodType auth_method_type = 7;
   */
  authMethodType: OIDCAuthMethodType;

  /**
   * @generated from field: repeated string post_logout_redirect_uris = 8;
   */
  postLogoutRedirectUris: string[];

  /**
   * @generated from field: zitadel.app.v1.OIDCVersion version = 9;
   */
  version: OIDCVersion;

  /**
   * @generated from field: bool none_compliant = 10;
   */
  noneCompliant: boolean;

  /**
   * @generated from field: repeated zitadel.v1.LocalizedMessage compliance_problems = 11;
   */
  complianceProblems: LocalizedMessage[];

  /**
   * @generated from field: bool dev_mode = 12;
   */
  devMode: boolean;

  /**
   * @generated from field: zitadel.app.v1.OIDCTokenType access_token_type = 13;
   */
  accessTokenType: OIDCTokenType;

  /**
   * @generated from field: bool access_token_role_assertion = 14;
   */
  accessTokenRoleAssertion: boolean;

  /**
   * @generated from field: bool id_token_role_assertion = 15;
   */
  idTokenRoleAssertion: boolean;

  /**
   * @generated from field: bool id_token_userinfo_assertion = 16;
   */
  idTokenUserinfoAssertion: boolean;

  /**
   * @generated from field: google.protobuf.Duration clock_skew = 17;
   */
  clockSkew?: Duration;

  /**
   * @generated from field: repeated string additional_origins = 18;
   */
  additionalOrigins: string[];

  /**
   * @generated from field: repeated string allowed_origins = 19;
   */
  allowedOrigins: string[];

  /**
   * @generated from field: bool skip_native_app_success_page = 20;
   */
  skipNativeAppSuccessPage: boolean;

  /**
   * @generated from field: string back_channel_logout_uri = 21;
   */
  backChannelLogoutUri: string;

  /**
   * @generated from field: zitadel.app.v1.LoginVersion login_version = 22;
   */
  loginVersion?: LoginVersion;
};

/**
 * @generated from message zitadel.app.v1.OIDCConfig
 */
export declare type OIDCConfigJson = {
  /**
   * @generated from field: repeated string redirect_uris = 1;
   */
  redirectUris?: string[];

  /**
   * @generated from field: repeated zitadel.app.v1.OIDCResponseType response_types = 2;
   */
  responseTypes?: OIDCResponseTypeJson[];

  /**
   * @generated from field: repeated zitadel.app.v1.OIDCGrantType grant_types = 3;
   */
  grantTypes?: OIDCGrantTypeJson[];

  /**
   * @generated from field: zitadel.app.v1.OIDCAppType app_type = 4;
   */
  appType?: OIDCAppTypeJson;

  /**
   * @generated from field: string client_id = 5;
   */
  clientId?: string;

  /**
   * @generated from field: zitadel.app.v1.OIDCAuthMethodType auth_method_type = 7;
   */
  authMethodType?: OIDCAuthMethodTypeJson;

  /**
   * @generated from field: repeated string post_logout_redirect_uris = 8;
   */
  postLogoutRedirectUris?: string[];

  /**
   * @generated from field: zitadel.app.v1.OIDCVersion version = 9;
   */
  version?: OIDCVersionJson;

  /**
   * @generated from field: bool none_compliant = 10;
   */
  noneCompliant?: boolean;

  /**
   * @generated from field: repeated zitadel.v1.LocalizedMessage compliance_problems = 11;
   */
  complianceProblems?: LocalizedMessageJson[];

  /**
   * @generated from field: bool dev_mode = 12;
   */
  devMode?: boolean;

  /**
   * @generated from field: zitadel.app.v1.OIDCTokenType access_token_type = 13;
   */
  accessTokenType?: OIDCTokenTypeJson;

  /**
   * @generated from field: bool access_token_role_assertion = 14;
   */
  accessTokenRoleAssertion?: boolean;

  /**
   * @generated from field: bool id_token_role_assertion = 15;
   */
  idTokenRoleAssertion?: boolean;

  /**
   * @generated from field: bool id_token_userinfo_assertion = 16;
   */
  idTokenUserinfoAssertion?: boolean;

  /**
   * @generated from field: google.protobuf.Duration clock_skew = 17;
   */
  clockSkew?: DurationJson;

  /**
   * @generated from field: repeated string additional_origins = 18;
   */
  additionalOrigins?: string[];

  /**
   * @generated from field: repeated string allowed_origins = 19;
   */
  allowedOrigins?: string[];

  /**
   * @generated from field: bool skip_native_app_success_page = 20;
   */
  skipNativeAppSuccessPage?: boolean;

  /**
   * @generated from field: string back_channel_logout_uri = 21;
   */
  backChannelLogoutUri?: string;

  /**
   * @generated from field: zitadel.app.v1.LoginVersion login_version = 22;
   */
  loginVersion?: LoginVersionJson;
};

/**
 * Describes the message zitadel.app.v1.OIDCConfig.
 * Use `create(OIDCConfigSchema)` to create a new message.
 */
export declare const OIDCConfigSchema: GenMessage<OIDCConfig, {jsonType: OIDCConfigJson}>;

/**
 * @generated from message zitadel.app.v1.SAMLConfig
 */
export declare type SAMLConfig = Message<"zitadel.app.v1.SAMLConfig"> & {
  /**
   * @generated from oneof zitadel.app.v1.SAMLConfig.metadata
   */
  metadata: {
    /**
     * @generated from field: bytes metadata_xml = 1;
     */
    value: Uint8Array;
    case: "metadataXml";
  } | {
    /**
     * @generated from field: string metadata_url = 2;
     */
    value: string;
    case: "metadataUrl";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: zitadel.app.v1.LoginVersion login_version = 3;
   */
  loginVersion?: LoginVersion;
};

/**
 * @generated from message zitadel.app.v1.SAMLConfig
 */
export declare type SAMLConfigJson = {
  /**
   * @generated from field: bytes metadata_xml = 1;
   */
  metadataXml?: string;

  /**
   * @generated from field: string metadata_url = 2;
   */
  metadataUrl?: string;

  /**
   * @generated from field: zitadel.app.v1.LoginVersion login_version = 3;
   */
  loginVersion?: LoginVersionJson;
};

/**
 * Describes the message zitadel.app.v1.SAMLConfig.
 * Use `create(SAMLConfigSchema)` to create a new message.
 */
export declare const SAMLConfigSchema: GenMessage<SAMLConfig, {jsonType: SAMLConfigJson}>;

/**
 * @generated from message zitadel.app.v1.APIConfig
 */
export declare type APIConfig = Message<"zitadel.app.v1.APIConfig"> & {
  /**
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * @generated from field: zitadel.app.v1.APIAuthMethodType auth_method_type = 3;
   */
  authMethodType: APIAuthMethodType;
};

/**
 * @generated from message zitadel.app.v1.APIConfig
 */
export declare type APIConfigJson = {
  /**
   * @generated from field: string client_id = 1;
   */
  clientId?: string;

  /**
   * @generated from field: zitadel.app.v1.APIAuthMethodType auth_method_type = 3;
   */
  authMethodType?: APIAuthMethodTypeJson;
};

/**
 * Describes the message zitadel.app.v1.APIConfig.
 * Use `create(APIConfigSchema)` to create a new message.
 */
export declare const APIConfigSchema: GenMessage<APIConfig, {jsonType: APIConfigJson}>;

/**
 * @generated from message zitadel.app.v1.LoginVersion
 */
export declare type LoginVersion = Message<"zitadel.app.v1.LoginVersion"> & {
  /**
   * @generated from oneof zitadel.app.v1.LoginVersion.version
   */
  version: {
    /**
     * @generated from field: zitadel.app.v1.LoginV1 login_v1 = 1;
     */
    value: LoginV1;
    case: "loginV1";
  } | {
    /**
     * @generated from field: zitadel.app.v1.LoginV2 login_v2 = 2;
     */
    value: LoginV2;
    case: "loginV2";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.app.v1.LoginVersion
 */
export declare type LoginVersionJson = {
  /**
   * @generated from field: zitadel.app.v1.LoginV1 login_v1 = 1;
   */
  loginV1?: LoginV1Json;

  /**
   * @generated from field: zitadel.app.v1.LoginV2 login_v2 = 2;
   */
  loginV2?: LoginV2Json;
};

/**
 * Describes the message zitadel.app.v1.LoginVersion.
 * Use `create(LoginVersionSchema)` to create a new message.
 */
export declare const LoginVersionSchema: GenMessage<LoginVersion, {jsonType: LoginVersionJson}>;

/**
 * @generated from message zitadel.app.v1.LoginV1
 */
export declare type LoginV1 = Message<"zitadel.app.v1.LoginV1"> & {
};

/**
 * @generated from message zitadel.app.v1.LoginV1
 */
export declare type LoginV1Json = {
};

/**
 * Describes the message zitadel.app.v1.LoginV1.
 * Use `create(LoginV1Schema)` to create a new message.
 */
export declare const LoginV1Schema: GenMessage<LoginV1, {jsonType: LoginV1Json}>;

/**
 * @generated from message zitadel.app.v1.LoginV2
 */
export declare type LoginV2 = Message<"zitadel.app.v1.LoginV2"> & {
  /**
   * Optionally specify a base uri of the login UI. If unspecified the default URI will be used.
   *
   * @generated from field: optional string base_uri = 1;
   */
  baseUri?: string;
};

/**
 * @generated from message zitadel.app.v1.LoginV2
 */
export declare type LoginV2Json = {
  /**
   * Optionally specify a base uri of the login UI. If unspecified the default URI will be used.
   *
   * @generated from field: optional string base_uri = 1;
   */
  baseUri?: string;
};

/**
 * Describes the message zitadel.app.v1.LoginV2.
 * Use `create(LoginV2Schema)` to create a new message.
 */
export declare const LoginV2Schema: GenMessage<LoginV2, {jsonType: LoginV2Json}>;

/**
 * @generated from enum zitadel.app.v1.AppState
 */
export enum AppState {
  /**
   * @generated from enum value: APP_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: APP_STATE_ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * @generated from enum value: APP_STATE_INACTIVE = 2;
   */
  INACTIVE = 2,
}

/**
 * @generated from enum zitadel.app.v1.AppState
 */
export declare type AppStateJson = "APP_STATE_UNSPECIFIED" | "APP_STATE_ACTIVE" | "APP_STATE_INACTIVE";

/**
 * Describes the enum zitadel.app.v1.AppState.
 */
export declare const AppStateSchema: GenEnum<AppState, AppStateJson>;

/**
 * @generated from enum zitadel.app.v1.OIDCResponseType
 */
export enum OIDCResponseType {
  /**
   * @generated from enum value: OIDC_RESPONSE_TYPE_CODE = 0;
   */
  OIDC_RESPONSE_TYPE_CODE = 0,

  /**
   * @generated from enum value: OIDC_RESPONSE_TYPE_ID_TOKEN = 1;
   */
  OIDC_RESPONSE_TYPE_ID_TOKEN = 1,

  /**
   * @generated from enum value: OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN = 2;
   */
  OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN = 2,
}

/**
 * @generated from enum zitadel.app.v1.OIDCResponseType
 */
export declare type OIDCResponseTypeJson = "OIDC_RESPONSE_TYPE_CODE" | "OIDC_RESPONSE_TYPE_ID_TOKEN" | "OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN";

/**
 * Describes the enum zitadel.app.v1.OIDCResponseType.
 */
export declare const OIDCResponseTypeSchema: GenEnum<OIDCResponseType, OIDCResponseTypeJson>;

/**
 * @generated from enum zitadel.app.v1.OIDCGrantType
 */
export enum OIDCGrantType {
  /**
   * @generated from enum value: OIDC_GRANT_TYPE_AUTHORIZATION_CODE = 0;
   */
  OIDC_GRANT_TYPE_AUTHORIZATION_CODE = 0,

  /**
   * @generated from enum value: OIDC_GRANT_TYPE_IMPLICIT = 1;
   */
  OIDC_GRANT_TYPE_IMPLICIT = 1,

  /**
   * @generated from enum value: OIDC_GRANT_TYPE_REFRESH_TOKEN = 2;
   */
  OIDC_GRANT_TYPE_REFRESH_TOKEN = 2,

  /**
   * @generated from enum value: OIDC_GRANT_TYPE_DEVICE_CODE = 3;
   */
  OIDC_GRANT_TYPE_DEVICE_CODE = 3,

  /**
   * @generated from enum value: OIDC_GRANT_TYPE_TOKEN_EXCHANGE = 4;
   */
  OIDC_GRANT_TYPE_TOKEN_EXCHANGE = 4,
}

/**
 * @generated from enum zitadel.app.v1.OIDCGrantType
 */
export declare type OIDCGrantTypeJson = "OIDC_GRANT_TYPE_AUTHORIZATION_CODE" | "OIDC_GRANT_TYPE_IMPLICIT" | "OIDC_GRANT_TYPE_REFRESH_TOKEN" | "OIDC_GRANT_TYPE_DEVICE_CODE" | "OIDC_GRANT_TYPE_TOKEN_EXCHANGE";

/**
 * Describes the enum zitadel.app.v1.OIDCGrantType.
 */
export declare const OIDCGrantTypeSchema: GenEnum<OIDCGrantType, OIDCGrantTypeJson>;

/**
 * @generated from enum zitadel.app.v1.OIDCAppType
 */
export enum OIDCAppType {
  /**
   * @generated from enum value: OIDC_APP_TYPE_WEB = 0;
   */
  OIDC_APP_TYPE_WEB = 0,

  /**
   * @generated from enum value: OIDC_APP_TYPE_USER_AGENT = 1;
   */
  OIDC_APP_TYPE_USER_AGENT = 1,

  /**
   * @generated from enum value: OIDC_APP_TYPE_NATIVE = 2;
   */
  OIDC_APP_TYPE_NATIVE = 2,
}

/**
 * @generated from enum zitadel.app.v1.OIDCAppType
 */
export declare type OIDCAppTypeJson = "OIDC_APP_TYPE_WEB" | "OIDC_APP_TYPE_USER_AGENT" | "OIDC_APP_TYPE_NATIVE";

/**
 * Describes the enum zitadel.app.v1.OIDCAppType.
 */
export declare const OIDCAppTypeSchema: GenEnum<OIDCAppType, OIDCAppTypeJson>;

/**
 * @generated from enum zitadel.app.v1.OIDCAuthMethodType
 */
export enum OIDCAuthMethodType {
  /**
   * @generated from enum value: OIDC_AUTH_METHOD_TYPE_BASIC = 0;
   */
  OIDC_AUTH_METHOD_TYPE_BASIC = 0,

  /**
   * @generated from enum value: OIDC_AUTH_METHOD_TYPE_POST = 1;
   */
  OIDC_AUTH_METHOD_TYPE_POST = 1,

  /**
   * @generated from enum value: OIDC_AUTH_METHOD_TYPE_NONE = 2;
   */
  OIDC_AUTH_METHOD_TYPE_NONE = 2,

  /**
   * @generated from enum value: OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 3;
   */
  OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 3,
}

/**
 * @generated from enum zitadel.app.v1.OIDCAuthMethodType
 */
export declare type OIDCAuthMethodTypeJson = "OIDC_AUTH_METHOD_TYPE_BASIC" | "OIDC_AUTH_METHOD_TYPE_POST" | "OIDC_AUTH_METHOD_TYPE_NONE" | "OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT";

/**
 * Describes the enum zitadel.app.v1.OIDCAuthMethodType.
 */
export declare const OIDCAuthMethodTypeSchema: GenEnum<OIDCAuthMethodType, OIDCAuthMethodTypeJson>;

/**
 * @generated from enum zitadel.app.v1.OIDCVersion
 */
export enum OIDCVersion {
  /**
   * @generated from enum value: OIDC_VERSION_1_0 = 0;
   */
  OIDC_VERSION_1_0 = 0,
}

/**
 * @generated from enum zitadel.app.v1.OIDCVersion
 */
export declare type OIDCVersionJson = "OIDC_VERSION_1_0";

/**
 * Describes the enum zitadel.app.v1.OIDCVersion.
 */
export declare const OIDCVersionSchema: GenEnum<OIDCVersion, OIDCVersionJson>;

/**
 * @generated from enum zitadel.app.v1.OIDCTokenType
 */
export enum OIDCTokenType {
  /**
   * @generated from enum value: OIDC_TOKEN_TYPE_BEARER = 0;
   */
  OIDC_TOKEN_TYPE_BEARER = 0,

  /**
   * @generated from enum value: OIDC_TOKEN_TYPE_JWT = 1;
   */
  OIDC_TOKEN_TYPE_JWT = 1,
}

/**
 * @generated from enum zitadel.app.v1.OIDCTokenType
 */
export declare type OIDCTokenTypeJson = "OIDC_TOKEN_TYPE_BEARER" | "OIDC_TOKEN_TYPE_JWT";

/**
 * Describes the enum zitadel.app.v1.OIDCTokenType.
 */
export declare const OIDCTokenTypeSchema: GenEnum<OIDCTokenType, OIDCTokenTypeJson>;

/**
 * @generated from enum zitadel.app.v1.APIAuthMethodType
 */
export enum APIAuthMethodType {
  /**
   * @generated from enum value: API_AUTH_METHOD_TYPE_BASIC = 0;
   */
  API_AUTH_METHOD_TYPE_BASIC = 0,

  /**
   * @generated from enum value: API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 1;
   */
  API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 1,
}

/**
 * @generated from enum zitadel.app.v1.APIAuthMethodType
 */
export declare type APIAuthMethodTypeJson = "API_AUTH_METHOD_TYPE_BASIC" | "API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT";

/**
 * Describes the enum zitadel.app.v1.APIAuthMethodType.
 */
export declare const APIAuthMethodTypeSchema: GenEnum<APIAuthMethodType, APIAuthMethodTypeJson>;

