// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/message.proto (package zitadel.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/message.proto.
 */
export declare const file_zitadel_message: GenFile;

/**
 * @generated from message zitadel.v1.ErrorDetail
 */
export declare type ErrorDetail = Message<"zitadel.v1.ErrorDetail"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string message = 2;
   */
  message: string;
};

/**
 * @generated from message zitadel.v1.ErrorDetail
 */
export declare type ErrorDetailJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: string message = 2;
   */
  message?: string;
};

/**
 * Describes the message zitadel.v1.ErrorDetail.
 * Use `create(ErrorDetailSchema)` to create a new message.
 */
export declare const ErrorDetailSchema: GenMessage<ErrorDetail, {jsonType: ErrorDetailJson}>;

/**
 * @generated from message zitadel.v1.CredentialsCheckError
 */
export declare type CredentialsCheckError = Message<"zitadel.v1.CredentialsCheckError"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string message = 2;
   */
  message: string;

  /**
   * @generated from field: int32 failed_attempts = 3;
   */
  failedAttempts: number;
};

/**
 * @generated from message zitadel.v1.CredentialsCheckError
 */
export declare type CredentialsCheckErrorJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: string message = 2;
   */
  message?: string;

  /**
   * @generated from field: int32 failed_attempts = 3;
   */
  failedAttempts?: number;
};

/**
 * Describes the message zitadel.v1.CredentialsCheckError.
 * Use `create(CredentialsCheckErrorSchema)` to create a new message.
 */
export declare const CredentialsCheckErrorSchema: GenMessage<CredentialsCheckError, {jsonType: CredentialsCheckErrorJson}>;

/**
 * @generated from message zitadel.v1.LocalizedMessage
 */
export declare type LocalizedMessage = Message<"zitadel.v1.LocalizedMessage"> & {
  /**
   * @generated from field: string key = 1;
   */
  key: string;

  /**
   * @generated from field: string localized_message = 2;
   */
  localizedMessage: string;
};

/**
 * @generated from message zitadel.v1.LocalizedMessage
 */
export declare type LocalizedMessageJson = {
  /**
   * @generated from field: string key = 1;
   */
  key?: string;

  /**
   * @generated from field: string localized_message = 2;
   */
  localizedMessage?: string;
};

/**
 * Describes the message zitadel.v1.LocalizedMessage.
 * Use `create(LocalizedMessageSchema)` to create a new message.
 */
export declare const LocalizedMessageSchema: GenMessage<LocalizedMessage, {jsonType: LocalizedMessageJson}>;

