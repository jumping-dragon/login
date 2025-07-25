// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/user/v2beta/email.proto (package zitadel.user.v2beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/user/v2beta/email.proto.
 */
export declare const file_zitadel_user_v2beta_email: GenFile;

/**
 * @generated from message zitadel.user.v2beta.SetHumanEmail
 */
export declare type SetHumanEmail = Message<"zitadel.user.v2beta.SetHumanEmail"> & {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * if no verification is specified, an email is sent with the default url
   *
   * @generated from oneof zitadel.user.v2beta.SetHumanEmail.verification
   */
  verification: {
    /**
     * @generated from field: zitadel.user.v2beta.SendEmailVerificationCode send_code = 2;
     */
    value: SendEmailVerificationCode;
    case: "sendCode";
  } | {
    /**
     * @generated from field: zitadel.user.v2beta.ReturnEmailVerificationCode return_code = 3;
     */
    value: ReturnEmailVerificationCode;
    case: "returnCode";
  } | {
    /**
     * @generated from field: bool is_verified = 4;
     */
    value: boolean;
    case: "isVerified";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.user.v2beta.SetHumanEmail
 */
export declare type SetHumanEmailJson = {
  /**
   * @generated from field: string email = 1;
   */
  email?: string;

  /**
   * @generated from field: zitadel.user.v2beta.SendEmailVerificationCode send_code = 2;
   */
  sendCode?: SendEmailVerificationCodeJson;

  /**
   * @generated from field: zitadel.user.v2beta.ReturnEmailVerificationCode return_code = 3;
   */
  returnCode?: ReturnEmailVerificationCodeJson;

  /**
   * @generated from field: bool is_verified = 4;
   */
  isVerified?: boolean;
};

/**
 * Describes the message zitadel.user.v2beta.SetHumanEmail.
 * Use `create(SetHumanEmailSchema)` to create a new message.
 */
export declare const SetHumanEmailSchema: GenMessage<SetHumanEmail, {jsonType: SetHumanEmailJson}>;

/**
 * @generated from message zitadel.user.v2beta.HumanEmail
 */
export declare type HumanEmail = Message<"zitadel.user.v2beta.HumanEmail"> & {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * @generated from field: bool is_verified = 2;
   */
  isVerified: boolean;
};

/**
 * @generated from message zitadel.user.v2beta.HumanEmail
 */
export declare type HumanEmailJson = {
  /**
   * @generated from field: string email = 1;
   */
  email?: string;

  /**
   * @generated from field: bool is_verified = 2;
   */
  isVerified?: boolean;
};

/**
 * Describes the message zitadel.user.v2beta.HumanEmail.
 * Use `create(HumanEmailSchema)` to create a new message.
 */
export declare const HumanEmailSchema: GenMessage<HumanEmail, {jsonType: HumanEmailJson}>;

/**
 * @generated from message zitadel.user.v2beta.SendEmailVerificationCode
 */
export declare type SendEmailVerificationCode = Message<"zitadel.user.v2beta.SendEmailVerificationCode"> & {
  /**
   * @generated from field: optional string url_template = 1;
   */
  urlTemplate?: string;
};

/**
 * @generated from message zitadel.user.v2beta.SendEmailVerificationCode
 */
export declare type SendEmailVerificationCodeJson = {
  /**
   * @generated from field: optional string url_template = 1;
   */
  urlTemplate?: string;
};

/**
 * Describes the message zitadel.user.v2beta.SendEmailVerificationCode.
 * Use `create(SendEmailVerificationCodeSchema)` to create a new message.
 */
export declare const SendEmailVerificationCodeSchema: GenMessage<SendEmailVerificationCode, {jsonType: SendEmailVerificationCodeJson}>;

/**
 * @generated from message zitadel.user.v2beta.ReturnEmailVerificationCode
 */
export declare type ReturnEmailVerificationCode = Message<"zitadel.user.v2beta.ReturnEmailVerificationCode"> & {
};

/**
 * @generated from message zitadel.user.v2beta.ReturnEmailVerificationCode
 */
export declare type ReturnEmailVerificationCodeJson = {
};

/**
 * Describes the message zitadel.user.v2beta.ReturnEmailVerificationCode.
 * Use `create(ReturnEmailVerificationCodeSchema)` to create a new message.
 */
export declare const ReturnEmailVerificationCodeSchema: GenMessage<ReturnEmailVerificationCode, {jsonType: ReturnEmailVerificationCodeJson}>;

