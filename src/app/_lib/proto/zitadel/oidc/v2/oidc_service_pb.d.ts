// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/oidc/v2/oidc_service.proto (package zitadel.oidc.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { AuthorizationError, AuthorizationErrorJson, AuthRequest, AuthRequestJson, DeviceAuthorizationRequest, DeviceAuthorizationRequestJson } from "./authorization_pb.js";
import type { Details, DetailsJson } from "../../object/v2/object_pb.js";

/**
 * Describes the file zitadel/oidc/v2/oidc_service.proto.
 */
export declare const file_zitadel_oidc_v2_oidc_service: GenFile;

/**
 * @generated from message zitadel.oidc.v2.GetAuthRequestRequest
 */
export declare type GetAuthRequestRequest = Message<"zitadel.oidc.v2.GetAuthRequestRequest"> & {
  /**
   * @generated from field: string auth_request_id = 1;
   */
  authRequestId: string;
};

/**
 * @generated from message zitadel.oidc.v2.GetAuthRequestRequest
 */
export declare type GetAuthRequestRequestJson = {
  /**
   * @generated from field: string auth_request_id = 1;
   */
  authRequestId?: string;
};

/**
 * Describes the message zitadel.oidc.v2.GetAuthRequestRequest.
 * Use `create(GetAuthRequestRequestSchema)` to create a new message.
 */
export declare const GetAuthRequestRequestSchema: GenMessage<GetAuthRequestRequest, {jsonType: GetAuthRequestRequestJson}>;

/**
 * @generated from message zitadel.oidc.v2.GetAuthRequestResponse
 */
export declare type GetAuthRequestResponse = Message<"zitadel.oidc.v2.GetAuthRequestResponse"> & {
  /**
   * @generated from field: zitadel.oidc.v2.AuthRequest auth_request = 1;
   */
  authRequest?: AuthRequest;
};

/**
 * @generated from message zitadel.oidc.v2.GetAuthRequestResponse
 */
export declare type GetAuthRequestResponseJson = {
  /**
   * @generated from field: zitadel.oidc.v2.AuthRequest auth_request = 1;
   */
  authRequest?: AuthRequestJson;
};

/**
 * Describes the message zitadel.oidc.v2.GetAuthRequestResponse.
 * Use `create(GetAuthRequestResponseSchema)` to create a new message.
 */
export declare const GetAuthRequestResponseSchema: GenMessage<GetAuthRequestResponse, {jsonType: GetAuthRequestResponseJson}>;

/**
 * @generated from message zitadel.oidc.v2.CreateCallbackRequest
 */
export declare type CreateCallbackRequest = Message<"zitadel.oidc.v2.CreateCallbackRequest"> & {
  /**
   * @generated from field: string auth_request_id = 1;
   */
  authRequestId: string;

  /**
   * @generated from oneof zitadel.oidc.v2.CreateCallbackRequest.callback_kind
   */
  callbackKind: {
    /**
     * @generated from field: zitadel.oidc.v2.Session session = 2;
     */
    value: Session;
    case: "session";
  } | {
    /**
     * @generated from field: zitadel.oidc.v2.AuthorizationError error = 3;
     */
    value: AuthorizationError;
    case: "error";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.oidc.v2.CreateCallbackRequest
 */
export declare type CreateCallbackRequestJson = {
  /**
   * @generated from field: string auth_request_id = 1;
   */
  authRequestId?: string;

  /**
   * @generated from field: zitadel.oidc.v2.Session session = 2;
   */
  session?: SessionJson;

  /**
   * @generated from field: zitadel.oidc.v2.AuthorizationError error = 3;
   */
  error?: AuthorizationErrorJson;
};

/**
 * Describes the message zitadel.oidc.v2.CreateCallbackRequest.
 * Use `create(CreateCallbackRequestSchema)` to create a new message.
 */
export declare const CreateCallbackRequestSchema: GenMessage<CreateCallbackRequest, {jsonType: CreateCallbackRequestJson}>;

/**
 * @generated from message zitadel.oidc.v2.Session
 */
export declare type Session = Message<"zitadel.oidc.v2.Session"> & {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  /**
   * @generated from field: string session_token = 2;
   */
  sessionToken: string;
};

/**
 * @generated from message zitadel.oidc.v2.Session
 */
export declare type SessionJson = {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId?: string;

  /**
   * @generated from field: string session_token = 2;
   */
  sessionToken?: string;
};

/**
 * Describes the message zitadel.oidc.v2.Session.
 * Use `create(SessionSchema)` to create a new message.
 */
export declare const SessionSchema: GenMessage<Session, {jsonType: SessionJson}>;

/**
 * @generated from message zitadel.oidc.v2.CreateCallbackResponse
 */
export declare type CreateCallbackResponse = Message<"zitadel.oidc.v2.CreateCallbackResponse"> & {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: string callback_url = 2;
   */
  callbackUrl: string;
};

/**
 * @generated from message zitadel.oidc.v2.CreateCallbackResponse
 */
export declare type CreateCallbackResponseJson = {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: DetailsJson;

  /**
   * @generated from field: string callback_url = 2;
   */
  callbackUrl?: string;
};

/**
 * Describes the message zitadel.oidc.v2.CreateCallbackResponse.
 * Use `create(CreateCallbackResponseSchema)` to create a new message.
 */
export declare const CreateCallbackResponseSchema: GenMessage<CreateCallbackResponse, {jsonType: CreateCallbackResponseJson}>;

/**
 * @generated from message zitadel.oidc.v2.GetDeviceAuthorizationRequestRequest
 */
export declare type GetDeviceAuthorizationRequestRequest = Message<"zitadel.oidc.v2.GetDeviceAuthorizationRequestRequest"> & {
  /**
   * The user_code returned by the device authorization request and provided to the user by the device.
   *
   * @generated from field: string user_code = 1;
   */
  userCode: string;
};

/**
 * @generated from message zitadel.oidc.v2.GetDeviceAuthorizationRequestRequest
 */
export declare type GetDeviceAuthorizationRequestRequestJson = {
  /**
   * The user_code returned by the device authorization request and provided to the user by the device.
   *
   * @generated from field: string user_code = 1;
   */
  userCode?: string;
};

/**
 * Describes the message zitadel.oidc.v2.GetDeviceAuthorizationRequestRequest.
 * Use `create(GetDeviceAuthorizationRequestRequestSchema)` to create a new message.
 */
export declare const GetDeviceAuthorizationRequestRequestSchema: GenMessage<GetDeviceAuthorizationRequestRequest, {jsonType: GetDeviceAuthorizationRequestRequestJson}>;

/**
 * @generated from message zitadel.oidc.v2.GetDeviceAuthorizationRequestResponse
 */
export declare type GetDeviceAuthorizationRequestResponse = Message<"zitadel.oidc.v2.GetDeviceAuthorizationRequestResponse"> & {
  /**
   * @generated from field: zitadel.oidc.v2.DeviceAuthorizationRequest device_authorization_request = 1;
   */
  deviceAuthorizationRequest?: DeviceAuthorizationRequest;
};

/**
 * @generated from message zitadel.oidc.v2.GetDeviceAuthorizationRequestResponse
 */
export declare type GetDeviceAuthorizationRequestResponseJson = {
  /**
   * @generated from field: zitadel.oidc.v2.DeviceAuthorizationRequest device_authorization_request = 1;
   */
  deviceAuthorizationRequest?: DeviceAuthorizationRequestJson;
};

/**
 * Describes the message zitadel.oidc.v2.GetDeviceAuthorizationRequestResponse.
 * Use `create(GetDeviceAuthorizationRequestResponseSchema)` to create a new message.
 */
export declare const GetDeviceAuthorizationRequestResponseSchema: GenMessage<GetDeviceAuthorizationRequestResponse, {jsonType: GetDeviceAuthorizationRequestResponseJson}>;

/**
 * @generated from message zitadel.oidc.v2.AuthorizeOrDenyDeviceAuthorizationRequest
 */
export declare type AuthorizeOrDenyDeviceAuthorizationRequest = Message<"zitadel.oidc.v2.AuthorizeOrDenyDeviceAuthorizationRequest"> & {
  /**
   * The device authorization id returned when submitting the user code.
   *
   * @generated from field: string device_authorization_id = 1;
   */
  deviceAuthorizationId: string;

  /**
   * The decision of the user to authorize or deny the device authorization request.
   *
   * @generated from oneof zitadel.oidc.v2.AuthorizeOrDenyDeviceAuthorizationRequest.decision
   */
  decision: {
    /**
     * To authorize the device authorization request, the user's session must be provided.
     *
     * @generated from field: zitadel.oidc.v2.Session session = 2;
     */
    value: Session;
    case: "session";
  } | {
    /**
     * Deny the device authorization request.
     *
     * @generated from field: zitadel.oidc.v2.Deny deny = 3;
     */
    value: Deny;
    case: "deny";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.oidc.v2.AuthorizeOrDenyDeviceAuthorizationRequest
 */
export declare type AuthorizeOrDenyDeviceAuthorizationRequestJson = {
  /**
   * The device authorization id returned when submitting the user code.
   *
   * @generated from field: string device_authorization_id = 1;
   */
  deviceAuthorizationId?: string;

  /**
   * To authorize the device authorization request, the user's session must be provided.
   *
   * @generated from field: zitadel.oidc.v2.Session session = 2;
   */
  session?: SessionJson;

  /**
   * Deny the device authorization request.
   *
   * @generated from field: zitadel.oidc.v2.Deny deny = 3;
   */
  deny?: DenyJson;
};

/**
 * Describes the message zitadel.oidc.v2.AuthorizeOrDenyDeviceAuthorizationRequest.
 * Use `create(AuthorizeOrDenyDeviceAuthorizationRequestSchema)` to create a new message.
 */
export declare const AuthorizeOrDenyDeviceAuthorizationRequestSchema: GenMessage<AuthorizeOrDenyDeviceAuthorizationRequest, {jsonType: AuthorizeOrDenyDeviceAuthorizationRequestJson}>;

/**
 * @generated from message zitadel.oidc.v2.Deny
 */
export declare type Deny = Message<"zitadel.oidc.v2.Deny"> & {
};

/**
 * @generated from message zitadel.oidc.v2.Deny
 */
export declare type DenyJson = {
};

/**
 * Describes the message zitadel.oidc.v2.Deny.
 * Use `create(DenySchema)` to create a new message.
 */
export declare const DenySchema: GenMessage<Deny, {jsonType: DenyJson}>;

/**
 * @generated from message zitadel.oidc.v2.AuthorizeOrDenyDeviceAuthorizationResponse
 */
export declare type AuthorizeOrDenyDeviceAuthorizationResponse = Message<"zitadel.oidc.v2.AuthorizeOrDenyDeviceAuthorizationResponse"> & {
};

/**
 * @generated from message zitadel.oidc.v2.AuthorizeOrDenyDeviceAuthorizationResponse
 */
export declare type AuthorizeOrDenyDeviceAuthorizationResponseJson = {
};

/**
 * Describes the message zitadel.oidc.v2.AuthorizeOrDenyDeviceAuthorizationResponse.
 * Use `create(AuthorizeOrDenyDeviceAuthorizationResponseSchema)` to create a new message.
 */
export declare const AuthorizeOrDenyDeviceAuthorizationResponseSchema: GenMessage<AuthorizeOrDenyDeviceAuthorizationResponse, {jsonType: AuthorizeOrDenyDeviceAuthorizationResponseJson}>;

/**
 * @generated from service zitadel.oidc.v2.OIDCService
 */
export declare const OIDCService: GenService<{
  /**
   * @generated from rpc zitadel.oidc.v2.OIDCService.GetAuthRequest
   */
  getAuthRequest: {
    methodKind: "unary";
    input: typeof GetAuthRequestRequestSchema;
    output: typeof GetAuthRequestResponseSchema;
  },
  /**
   * @generated from rpc zitadel.oidc.v2.OIDCService.CreateCallback
   */
  createCallback: {
    methodKind: "unary";
    input: typeof CreateCallbackRequestSchema;
    output: typeof CreateCallbackResponseSchema;
  },
  /**
   * Get device authorization request
   *
   * Get the device authorization based on the provided "user code".
   * This will return the device authorization request, which contains the device authorization id
   * that is required to authorize the request once the user signed in or to deny it.
   *
   * @generated from rpc zitadel.oidc.v2.OIDCService.GetDeviceAuthorizationRequest
   */
  getDeviceAuthorizationRequest: {
    methodKind: "unary";
    input: typeof GetDeviceAuthorizationRequestRequestSchema;
    output: typeof GetDeviceAuthorizationRequestResponseSchema;
  },
  /**
   * Authorize or deny device authorization
   *
   * Authorize or deny the device authorization request based on the provided device authorization id.
   *
   * @generated from rpc zitadel.oidc.v2.OIDCService.AuthorizeOrDenyDeviceAuthorization
   */
  authorizeOrDenyDeviceAuthorization: {
    methodKind: "unary";
    input: typeof AuthorizeOrDenyDeviceAuthorizationRequestSchema;
    output: typeof AuthorizeOrDenyDeviceAuthorizationResponseSchema;
  },
}>;

