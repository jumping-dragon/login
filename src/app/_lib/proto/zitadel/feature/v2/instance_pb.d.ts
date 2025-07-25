// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/feature/v2/instance.proto (package zitadel.feature.v2, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { FeatureFlag, FeatureFlagJson, ImprovedPerformance, ImprovedPerformanceFeatureFlag, ImprovedPerformanceFeatureFlagJson, ImprovedPerformanceJson, LoginV2, LoginV2FeatureFlag, LoginV2FeatureFlagJson, LoginV2Json } from "./feature_pb.js";
import type { Details, DetailsJson } from "../../object/v2/object_pb.js";

/**
 * Describes the file zitadel/feature/v2/instance.proto.
 */
export declare const file_zitadel_feature_v2_instance: GenFile;

/**
 * @generated from message zitadel.feature.v2.SetInstanceFeaturesRequest
 */
export declare type SetInstanceFeaturesRequest = Message<"zitadel.feature.v2.SetInstanceFeaturesRequest"> & {
  /**
   * @generated from field: optional bool login_default_org = 1;
   */
  loginDefaultOrg?: boolean;

  /**
   * @generated from field: optional bool user_schema = 4;
   */
  userSchema?: boolean;

  /**
   * @generated from field: optional bool oidc_token_exchange = 5;
   */
  oidcTokenExchange?: boolean;

  /**
   * @generated from field: repeated zitadel.feature.v2.ImprovedPerformance improved_performance = 7;
   */
  improvedPerformance: ImprovedPerformance[];

  /**
   * @generated from field: optional bool debug_oidc_parent_error = 9;
   */
  debugOidcParentError?: boolean;

  /**
   * @generated from field: optional bool oidc_single_v1_session_termination = 10;
   */
  oidcSingleV1SessionTermination?: boolean;

  /**
   * @generated from field: optional bool disable_user_token_event = 11;
   */
  disableUserTokenEvent?: boolean;

  /**
   * @generated from field: optional bool enable_back_channel_logout = 12;
   */
  enableBackChannelLogout?: boolean;

  /**
   * @generated from field: optional zitadel.feature.v2.LoginV2 login_v2 = 13;
   */
  loginV2?: LoginV2;

  /**
   * @generated from field: optional bool permission_check_v2 = 14;
   */
  permissionCheckV2?: boolean;

  /**
   * @generated from field: optional bool console_use_v2_user_api = 15;
   */
  consoleUseV2UserApi?: boolean;
};

/**
 * @generated from message zitadel.feature.v2.SetInstanceFeaturesRequest
 */
export declare type SetInstanceFeaturesRequestJson = {
  /**
   * @generated from field: optional bool login_default_org = 1;
   */
  loginDefaultOrg?: boolean;

  /**
   * @generated from field: optional bool user_schema = 4;
   */
  userSchema?: boolean;

  /**
   * @generated from field: optional bool oidc_token_exchange = 5;
   */
  oidcTokenExchange?: boolean;

  /**
   * @generated from field: repeated zitadel.feature.v2.ImprovedPerformance improved_performance = 7;
   */
  improvedPerformance?: ImprovedPerformanceJson[];

  /**
   * @generated from field: optional bool debug_oidc_parent_error = 9;
   */
  debugOidcParentError?: boolean;

  /**
   * @generated from field: optional bool oidc_single_v1_session_termination = 10;
   */
  oidcSingleV1SessionTermination?: boolean;

  /**
   * @generated from field: optional bool disable_user_token_event = 11;
   */
  disableUserTokenEvent?: boolean;

  /**
   * @generated from field: optional bool enable_back_channel_logout = 12;
   */
  enableBackChannelLogout?: boolean;

  /**
   * @generated from field: optional zitadel.feature.v2.LoginV2 login_v2 = 13;
   */
  loginV2?: LoginV2Json;

  /**
   * @generated from field: optional bool permission_check_v2 = 14;
   */
  permissionCheckV2?: boolean;

  /**
   * @generated from field: optional bool console_use_v2_user_api = 15;
   */
  consoleUseV2UserApi?: boolean;
};

/**
 * Describes the message zitadel.feature.v2.SetInstanceFeaturesRequest.
 * Use `create(SetInstanceFeaturesRequestSchema)` to create a new message.
 */
export declare const SetInstanceFeaturesRequestSchema: GenMessage<SetInstanceFeaturesRequest, {jsonType: SetInstanceFeaturesRequestJson}>;

/**
 * @generated from message zitadel.feature.v2.SetInstanceFeaturesResponse
 */
export declare type SetInstanceFeaturesResponse = Message<"zitadel.feature.v2.SetInstanceFeaturesResponse"> & {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: Details;
};

/**
 * @generated from message zitadel.feature.v2.SetInstanceFeaturesResponse
 */
export declare type SetInstanceFeaturesResponseJson = {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: DetailsJson;
};

/**
 * Describes the message zitadel.feature.v2.SetInstanceFeaturesResponse.
 * Use `create(SetInstanceFeaturesResponseSchema)` to create a new message.
 */
export declare const SetInstanceFeaturesResponseSchema: GenMessage<SetInstanceFeaturesResponse, {jsonType: SetInstanceFeaturesResponseJson}>;

/**
 * @generated from message zitadel.feature.v2.ResetInstanceFeaturesRequest
 */
export declare type ResetInstanceFeaturesRequest = Message<"zitadel.feature.v2.ResetInstanceFeaturesRequest"> & {
};

/**
 * @generated from message zitadel.feature.v2.ResetInstanceFeaturesRequest
 */
export declare type ResetInstanceFeaturesRequestJson = {
};

/**
 * Describes the message zitadel.feature.v2.ResetInstanceFeaturesRequest.
 * Use `create(ResetInstanceFeaturesRequestSchema)` to create a new message.
 */
export declare const ResetInstanceFeaturesRequestSchema: GenMessage<ResetInstanceFeaturesRequest, {jsonType: ResetInstanceFeaturesRequestJson}>;

/**
 * @generated from message zitadel.feature.v2.ResetInstanceFeaturesResponse
 */
export declare type ResetInstanceFeaturesResponse = Message<"zitadel.feature.v2.ResetInstanceFeaturesResponse"> & {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: Details;
};

/**
 * @generated from message zitadel.feature.v2.ResetInstanceFeaturesResponse
 */
export declare type ResetInstanceFeaturesResponseJson = {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: DetailsJson;
};

/**
 * Describes the message zitadel.feature.v2.ResetInstanceFeaturesResponse.
 * Use `create(ResetInstanceFeaturesResponseSchema)` to create a new message.
 */
export declare const ResetInstanceFeaturesResponseSchema: GenMessage<ResetInstanceFeaturesResponse, {jsonType: ResetInstanceFeaturesResponseJson}>;

/**
 * @generated from message zitadel.feature.v2.GetInstanceFeaturesRequest
 */
export declare type GetInstanceFeaturesRequest = Message<"zitadel.feature.v2.GetInstanceFeaturesRequest"> & {
  /**
   * @generated from field: bool inheritance = 1;
   */
  inheritance: boolean;
};

/**
 * @generated from message zitadel.feature.v2.GetInstanceFeaturesRequest
 */
export declare type GetInstanceFeaturesRequestJson = {
  /**
   * @generated from field: bool inheritance = 1;
   */
  inheritance?: boolean;
};

/**
 * Describes the message zitadel.feature.v2.GetInstanceFeaturesRequest.
 * Use `create(GetInstanceFeaturesRequestSchema)` to create a new message.
 */
export declare const GetInstanceFeaturesRequestSchema: GenMessage<GetInstanceFeaturesRequest, {jsonType: GetInstanceFeaturesRequestJson}>;

/**
 * @generated from message zitadel.feature.v2.GetInstanceFeaturesResponse
 */
export declare type GetInstanceFeaturesResponse = Message<"zitadel.feature.v2.GetInstanceFeaturesResponse"> & {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag login_default_org = 2;
   */
  loginDefaultOrg?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag user_schema = 5;
   */
  userSchema?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag oidc_token_exchange = 6;
   */
  oidcTokenExchange?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2.ImprovedPerformanceFeatureFlag improved_performance = 8;
   */
  improvedPerformance?: ImprovedPerformanceFeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag debug_oidc_parent_error = 10;
   */
  debugOidcParentError?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag oidc_single_v1_session_termination = 11;
   */
  oidcSingleV1SessionTermination?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag disable_user_token_event = 12;
   */
  disableUserTokenEvent?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag enable_back_channel_logout = 13;
   */
  enableBackChannelLogout?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2.LoginV2FeatureFlag login_v2 = 14;
   */
  loginV2?: LoginV2FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag permission_check_v2 = 15;
   */
  permissionCheckV2?: FeatureFlag;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag console_use_v2_user_api = 16;
   */
  consoleUseV2UserApi?: FeatureFlag;
};

/**
 * @generated from message zitadel.feature.v2.GetInstanceFeaturesResponse
 */
export declare type GetInstanceFeaturesResponseJson = {
  /**
   * @generated from field: zitadel.object.v2.Details details = 1;
   */
  details?: DetailsJson;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag login_default_org = 2;
   */
  loginDefaultOrg?: FeatureFlagJson;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag user_schema = 5;
   */
  userSchema?: FeatureFlagJson;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag oidc_token_exchange = 6;
   */
  oidcTokenExchange?: FeatureFlagJson;

  /**
   * @generated from field: zitadel.feature.v2.ImprovedPerformanceFeatureFlag improved_performance = 8;
   */
  improvedPerformance?: ImprovedPerformanceFeatureFlagJson;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag debug_oidc_parent_error = 10;
   */
  debugOidcParentError?: FeatureFlagJson;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag oidc_single_v1_session_termination = 11;
   */
  oidcSingleV1SessionTermination?: FeatureFlagJson;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag disable_user_token_event = 12;
   */
  disableUserTokenEvent?: FeatureFlagJson;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag enable_back_channel_logout = 13;
   */
  enableBackChannelLogout?: FeatureFlagJson;

  /**
   * @generated from field: zitadel.feature.v2.LoginV2FeatureFlag login_v2 = 14;
   */
  loginV2?: LoginV2FeatureFlagJson;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag permission_check_v2 = 15;
   */
  permissionCheckV2?: FeatureFlagJson;

  /**
   * @generated from field: zitadel.feature.v2.FeatureFlag console_use_v2_user_api = 16;
   */
  consoleUseV2UserApi?: FeatureFlagJson;
};

/**
 * Describes the message zitadel.feature.v2.GetInstanceFeaturesResponse.
 * Use `create(GetInstanceFeaturesResponseSchema)` to create a new message.
 */
export declare const GetInstanceFeaturesResponseSchema: GenMessage<GetInstanceFeaturesResponse, {jsonType: GetInstanceFeaturesResponseJson}>;

