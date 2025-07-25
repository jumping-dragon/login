// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/session/v2/challenge.proto (package zitadel.session.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { JsonObject, Message } from "@bufbuild/protobuf";
import type { StructJson } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file zitadel/session/v2/challenge.proto.
 */
export declare const file_zitadel_session_v2_challenge: GenFile;

/**
 * @generated from message zitadel.session.v2.RequestChallenges
 */
export declare type RequestChallenges = Message<"zitadel.session.v2.RequestChallenges"> & {
  /**
   * @generated from field: optional zitadel.session.v2.RequestChallenges.WebAuthN web_auth_n = 1;
   */
  webAuthN?: RequestChallenges_WebAuthN;

  /**
   * @generated from field: optional zitadel.session.v2.RequestChallenges.OTPSMS otp_sms = 2;
   */
  otpSms?: RequestChallenges_OTPSMS;

  /**
   * @generated from field: optional zitadel.session.v2.RequestChallenges.OTPEmail otp_email = 3;
   */
  otpEmail?: RequestChallenges_OTPEmail;
};

/**
 * @generated from message zitadel.session.v2.RequestChallenges
 */
export declare type RequestChallengesJson = {
  /**
   * @generated from field: optional zitadel.session.v2.RequestChallenges.WebAuthN web_auth_n = 1;
   */
  webAuthN?: RequestChallenges_WebAuthNJson;

  /**
   * @generated from field: optional zitadel.session.v2.RequestChallenges.OTPSMS otp_sms = 2;
   */
  otpSms?: RequestChallenges_OTPSMSJson;

  /**
   * @generated from field: optional zitadel.session.v2.RequestChallenges.OTPEmail otp_email = 3;
   */
  otpEmail?: RequestChallenges_OTPEmailJson;
};

/**
 * Describes the message zitadel.session.v2.RequestChallenges.
 * Use `create(RequestChallengesSchema)` to create a new message.
 */
export declare const RequestChallengesSchema: GenMessage<RequestChallenges, {jsonType: RequestChallengesJson}>;

/**
 * @generated from message zitadel.session.v2.RequestChallenges.WebAuthN
 */
export declare type RequestChallenges_WebAuthN = Message<"zitadel.session.v2.RequestChallenges.WebAuthN"> & {
  /**
   * @generated from field: string domain = 1;
   */
  domain: string;

  /**
   * @generated from field: zitadel.session.v2.UserVerificationRequirement user_verification_requirement = 2;
   */
  userVerificationRequirement: UserVerificationRequirement;
};

/**
 * @generated from message zitadel.session.v2.RequestChallenges.WebAuthN
 */
export declare type RequestChallenges_WebAuthNJson = {
  /**
   * @generated from field: string domain = 1;
   */
  domain?: string;

  /**
   * @generated from field: zitadel.session.v2.UserVerificationRequirement user_verification_requirement = 2;
   */
  userVerificationRequirement?: UserVerificationRequirementJson;
};

/**
 * Describes the message zitadel.session.v2.RequestChallenges.WebAuthN.
 * Use `create(RequestChallenges_WebAuthNSchema)` to create a new message.
 */
export declare const RequestChallenges_WebAuthNSchema: GenMessage<RequestChallenges_WebAuthN, {jsonType: RequestChallenges_WebAuthNJson}>;

/**
 * @generated from message zitadel.session.v2.RequestChallenges.OTPSMS
 */
export declare type RequestChallenges_OTPSMS = Message<"zitadel.session.v2.RequestChallenges.OTPSMS"> & {
  /**
   * @generated from field: bool return_code = 1;
   */
  returnCode: boolean;
};

/**
 * @generated from message zitadel.session.v2.RequestChallenges.OTPSMS
 */
export declare type RequestChallenges_OTPSMSJson = {
  /**
   * @generated from field: bool return_code = 1;
   */
  returnCode?: boolean;
};

/**
 * Describes the message zitadel.session.v2.RequestChallenges.OTPSMS.
 * Use `create(RequestChallenges_OTPSMSSchema)` to create a new message.
 */
export declare const RequestChallenges_OTPSMSSchema: GenMessage<RequestChallenges_OTPSMS, {jsonType: RequestChallenges_OTPSMSJson}>;

/**
 * @generated from message zitadel.session.v2.RequestChallenges.OTPEmail
 */
export declare type RequestChallenges_OTPEmail = Message<"zitadel.session.v2.RequestChallenges.OTPEmail"> & {
  /**
   * if no delivery_type is specified, an email is sent with the default url
   *
   * @generated from oneof zitadel.session.v2.RequestChallenges.OTPEmail.delivery_type
   */
  deliveryType: {
    /**
     * @generated from field: zitadel.session.v2.RequestChallenges.OTPEmail.SendCode send_code = 2;
     */
    value: RequestChallenges_OTPEmail_SendCode;
    case: "sendCode";
  } | {
    /**
     * @generated from field: zitadel.session.v2.RequestChallenges.OTPEmail.ReturnCode return_code = 3;
     */
    value: RequestChallenges_OTPEmail_ReturnCode;
    case: "returnCode";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.session.v2.RequestChallenges.OTPEmail
 */
export declare type RequestChallenges_OTPEmailJson = {
  /**
   * @generated from field: zitadel.session.v2.RequestChallenges.OTPEmail.SendCode send_code = 2;
   */
  sendCode?: RequestChallenges_OTPEmail_SendCodeJson;

  /**
   * @generated from field: zitadel.session.v2.RequestChallenges.OTPEmail.ReturnCode return_code = 3;
   */
  returnCode?: RequestChallenges_OTPEmail_ReturnCodeJson;
};

/**
 * Describes the message zitadel.session.v2.RequestChallenges.OTPEmail.
 * Use `create(RequestChallenges_OTPEmailSchema)` to create a new message.
 */
export declare const RequestChallenges_OTPEmailSchema: GenMessage<RequestChallenges_OTPEmail, {jsonType: RequestChallenges_OTPEmailJson}>;

/**
 * @generated from message zitadel.session.v2.RequestChallenges.OTPEmail.SendCode
 */
export declare type RequestChallenges_OTPEmail_SendCode = Message<"zitadel.session.v2.RequestChallenges.OTPEmail.SendCode"> & {
  /**
   * Optionally set a url_template, which will be used in the mail sent by ZITADEL to guide the user to your verification page.
   * If no template is set, the default ZITADEL url will be used.
   *
   * The following placeholders can be used: Code, UserID, LoginName, DisplayName, PreferredLanguage, SessionID
   *
   * @generated from field: optional string url_template = 1;
   */
  urlTemplate?: string;
};

/**
 * @generated from message zitadel.session.v2.RequestChallenges.OTPEmail.SendCode
 */
export declare type RequestChallenges_OTPEmail_SendCodeJson = {
  /**
   * Optionally set a url_template, which will be used in the mail sent by ZITADEL to guide the user to your verification page.
   * If no template is set, the default ZITADEL url will be used.
   *
   * The following placeholders can be used: Code, UserID, LoginName, DisplayName, PreferredLanguage, SessionID
   *
   * @generated from field: optional string url_template = 1;
   */
  urlTemplate?: string;
};

/**
 * Describes the message zitadel.session.v2.RequestChallenges.OTPEmail.SendCode.
 * Use `create(RequestChallenges_OTPEmail_SendCodeSchema)` to create a new message.
 */
export declare const RequestChallenges_OTPEmail_SendCodeSchema: GenMessage<RequestChallenges_OTPEmail_SendCode, {jsonType: RequestChallenges_OTPEmail_SendCodeJson}>;

/**
 * @generated from message zitadel.session.v2.RequestChallenges.OTPEmail.ReturnCode
 */
export declare type RequestChallenges_OTPEmail_ReturnCode = Message<"zitadel.session.v2.RequestChallenges.OTPEmail.ReturnCode"> & {
};

/**
 * @generated from message zitadel.session.v2.RequestChallenges.OTPEmail.ReturnCode
 */
export declare type RequestChallenges_OTPEmail_ReturnCodeJson = {
};

/**
 * Describes the message zitadel.session.v2.RequestChallenges.OTPEmail.ReturnCode.
 * Use `create(RequestChallenges_OTPEmail_ReturnCodeSchema)` to create a new message.
 */
export declare const RequestChallenges_OTPEmail_ReturnCodeSchema: GenMessage<RequestChallenges_OTPEmail_ReturnCode, {jsonType: RequestChallenges_OTPEmail_ReturnCodeJson}>;

/**
 * @generated from message zitadel.session.v2.Challenges
 */
export declare type Challenges = Message<"zitadel.session.v2.Challenges"> & {
  /**
   * @generated from field: optional zitadel.session.v2.Challenges.WebAuthN web_auth_n = 1;
   */
  webAuthN?: Challenges_WebAuthN;

  /**
   * @generated from field: optional string otp_sms = 2;
   */
  otpSms?: string;

  /**
   * @generated from field: optional string otp_email = 3;
   */
  otpEmail?: string;
};

/**
 * @generated from message zitadel.session.v2.Challenges
 */
export declare type ChallengesJson = {
  /**
   * @generated from field: optional zitadel.session.v2.Challenges.WebAuthN web_auth_n = 1;
   */
  webAuthN?: Challenges_WebAuthNJson;

  /**
   * @generated from field: optional string otp_sms = 2;
   */
  otpSms?: string;

  /**
   * @generated from field: optional string otp_email = 3;
   */
  otpEmail?: string;
};

/**
 * Describes the message zitadel.session.v2.Challenges.
 * Use `create(ChallengesSchema)` to create a new message.
 */
export declare const ChallengesSchema: GenMessage<Challenges, {jsonType: ChallengesJson}>;

/**
 * @generated from message zitadel.session.v2.Challenges.WebAuthN
 */
export declare type Challenges_WebAuthN = Message<"zitadel.session.v2.Challenges.WebAuthN"> & {
  /**
   * @generated from field: google.protobuf.Struct public_key_credential_request_options = 1;
   */
  publicKeyCredentialRequestOptions?: JsonObject;
};

/**
 * @generated from message zitadel.session.v2.Challenges.WebAuthN
 */
export declare type Challenges_WebAuthNJson = {
  /**
   * @generated from field: google.protobuf.Struct public_key_credential_request_options = 1;
   */
  publicKeyCredentialRequestOptions?: StructJson;
};

/**
 * Describes the message zitadel.session.v2.Challenges.WebAuthN.
 * Use `create(Challenges_WebAuthNSchema)` to create a new message.
 */
export declare const Challenges_WebAuthNSchema: GenMessage<Challenges_WebAuthN, {jsonType: Challenges_WebAuthNJson}>;

/**
 * @generated from enum zitadel.session.v2.UserVerificationRequirement
 */
export enum UserVerificationRequirement {
  /**
   * @generated from enum value: USER_VERIFICATION_REQUIREMENT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: USER_VERIFICATION_REQUIREMENT_REQUIRED = 1;
   */
  REQUIRED = 1,

  /**
   * @generated from enum value: USER_VERIFICATION_REQUIREMENT_PREFERRED = 2;
   */
  PREFERRED = 2,

  /**
   * @generated from enum value: USER_VERIFICATION_REQUIREMENT_DISCOURAGED = 3;
   */
  DISCOURAGED = 3,
}

/**
 * @generated from enum zitadel.session.v2.UserVerificationRequirement
 */
export declare type UserVerificationRequirementJson = "USER_VERIFICATION_REQUIREMENT_UNSPECIFIED" | "USER_VERIFICATION_REQUIREMENT_REQUIRED" | "USER_VERIFICATION_REQUIREMENT_PREFERRED" | "USER_VERIFICATION_REQUIREMENT_DISCOURAGED";

/**
 * Describes the enum zitadel.session.v2.UserVerificationRequirement.
 */
export declare const UserVerificationRequirementSchema: GenEnum<UserVerificationRequirement, UserVerificationRequirementJson>;

