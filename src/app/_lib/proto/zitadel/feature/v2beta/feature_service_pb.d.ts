// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/feature/v2beta/feature_service.proto (package zitadel.feature.v2beta, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv2";
import type { GetSystemFeaturesRequestSchema, GetSystemFeaturesResponseSchema, ResetSystemFeaturesRequestSchema, ResetSystemFeaturesResponseSchema, SetSystemFeaturesRequestSchema, SetSystemFeaturesResponseSchema } from "./system_pb.js";
import type { GetInstanceFeaturesRequestSchema, GetInstanceFeaturesResponseSchema, ResetInstanceFeaturesRequestSchema, ResetInstanceFeaturesResponseSchema, SetInstanceFeaturesRequestSchema, SetInstanceFeaturesResponseSchema } from "./instance_pb.js";
import type { GetOrganizationFeaturesRequestSchema, GetOrganizationFeaturesResponseSchema, ResetOrganizationFeaturesRequestSchema, ResetOrganizationFeaturesResponseSchema, SetOrganizationFeaturesRequestSchema, SetOrganizationFeaturesResponseSchema } from "./organization_pb.js";
import type { GetUserFeaturesRequestSchema, GetUserFeaturesResponseSchema, ResetUserFeaturesRequestSchema, ResetUserFeaturesResponseSchema, SetUserFeatureRequestSchema, SetUserFeaturesResponseSchema } from "./user_pb.js";

/**
 * Describes the file zitadel/feature/v2beta/feature_service.proto.
 */
export declare const file_zitadel_feature_v2beta_feature_service: GenFile;

/**
 * FeatureService is intended to manage features for ZITADEL.
 *
 * Feature settings that are available on multiple "levels", such as instance and organization.
 * The higher level (instance) acts as a default for the lower level (organization).
 * When a feature is set on multiple levels, the lower level takes precedence.
 *
 * Features can be experimental where ZITADEL will assume a sane default, such as disabled.
 * When over time confidence in such a feature grows, ZITADEL can default to enabling the feature.
 * As a final step we might choose to always enable a feature and remove the setting from this API,
 * reserving the proto field number. Such removal is not considered a breaking change.
 * Setting a removed field will effectively result in a no-op.
 *
 * @generated from service zitadel.feature.v2beta.FeatureService
 */
export declare const FeatureService: GenService<{
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.SetSystemFeatures
   */
  setSystemFeatures: {
    methodKind: "unary";
    input: typeof SetSystemFeaturesRequestSchema;
    output: typeof SetSystemFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.ResetSystemFeatures
   */
  resetSystemFeatures: {
    methodKind: "unary";
    input: typeof ResetSystemFeaturesRequestSchema;
    output: typeof ResetSystemFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.GetSystemFeatures
   */
  getSystemFeatures: {
    methodKind: "unary";
    input: typeof GetSystemFeaturesRequestSchema;
    output: typeof GetSystemFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.SetInstanceFeatures
   */
  setInstanceFeatures: {
    methodKind: "unary";
    input: typeof SetInstanceFeaturesRequestSchema;
    output: typeof SetInstanceFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.ResetInstanceFeatures
   */
  resetInstanceFeatures: {
    methodKind: "unary";
    input: typeof ResetInstanceFeaturesRequestSchema;
    output: typeof ResetInstanceFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.GetInstanceFeatures
   */
  getInstanceFeatures: {
    methodKind: "unary";
    input: typeof GetInstanceFeaturesRequestSchema;
    output: typeof GetInstanceFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.SetOrganizationFeatures
   */
  setOrganizationFeatures: {
    methodKind: "unary";
    input: typeof SetOrganizationFeaturesRequestSchema;
    output: typeof SetOrganizationFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.ResetOrganizationFeatures
   */
  resetOrganizationFeatures: {
    methodKind: "unary";
    input: typeof ResetOrganizationFeaturesRequestSchema;
    output: typeof ResetOrganizationFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.GetOrganizationFeatures
   */
  getOrganizationFeatures: {
    methodKind: "unary";
    input: typeof GetOrganizationFeaturesRequestSchema;
    output: typeof GetOrganizationFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.SetUserFeatures
   */
  setUserFeatures: {
    methodKind: "unary";
    input: typeof SetUserFeatureRequestSchema;
    output: typeof SetUserFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.ResetUserFeatures
   */
  resetUserFeatures: {
    methodKind: "unary";
    input: typeof ResetUserFeaturesRequestSchema;
    output: typeof ResetUserFeaturesResponseSchema;
  },
  /**
   * @generated from rpc zitadel.feature.v2beta.FeatureService.GetUserFeatures
   */
  getUserFeatures: {
    methodKind: "unary";
    input: typeof GetUserFeaturesRequestSchema;
    output: typeof GetUserFeaturesResponseSchema;
  },
}>;

