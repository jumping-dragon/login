// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/org/v2/org.proto (package zitadel.org.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { Details, DetailsJson } from "../../object/v2/object_pb.js";

/**
 * Describes the file zitadel/org/v2/org.proto.
 */
export declare const file_zitadel_org_v2_org: GenFile;

/**
 * @generated from message zitadel.org.v2.Organization
 */
export declare type Organization = Message<"zitadel.org.v2.Organization"> & {
  /**
   * Unique identifier of the organization.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: zitadel.object.v2.Details details = 2;
   */
  details?: Details;

  /**
   * Current state of the organization, for example active, inactive and deleted.
   *
   * @generated from field: zitadel.org.v2.OrganizationState state = 3;
   */
  state: OrganizationState;

  /**
   * Name of the organization.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * Primary domain used in the organization.
   *
   * @generated from field: string primary_domain = 5;
   */
  primaryDomain: string;
};

/**
 * @generated from message zitadel.org.v2.Organization
 */
export declare type OrganizationJson = {
  /**
   * Unique identifier of the organization.
   *
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: zitadel.object.v2.Details details = 2;
   */
  details?: DetailsJson;

  /**
   * Current state of the organization, for example active, inactive and deleted.
   *
   * @generated from field: zitadel.org.v2.OrganizationState state = 3;
   */
  state?: OrganizationStateJson;

  /**
   * Name of the organization.
   *
   * @generated from field: string name = 4;
   */
  name?: string;

  /**
   * Primary domain used in the organization.
   *
   * @generated from field: string primary_domain = 5;
   */
  primaryDomain?: string;
};

/**
 * Describes the message zitadel.org.v2.Organization.
 * Use `create(OrganizationSchema)` to create a new message.
 */
export declare const OrganizationSchema: GenMessage<Organization, {jsonType: OrganizationJson}>;

/**
 * @generated from enum zitadel.org.v2.OrganizationState
 */
export enum OrganizationState {
  /**
   * @generated from enum value: ORGANIZATION_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ORGANIZATION_STATE_ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * @generated from enum value: ORGANIZATION_STATE_INACTIVE = 2;
   */
  INACTIVE = 2,

  /**
   * @generated from enum value: ORGANIZATION_STATE_REMOVED = 3;
   */
  REMOVED = 3,
}

/**
 * @generated from enum zitadel.org.v2.OrganizationState
 */
export declare type OrganizationStateJson = "ORGANIZATION_STATE_UNSPECIFIED" | "ORGANIZATION_STATE_ACTIVE" | "ORGANIZATION_STATE_INACTIVE" | "ORGANIZATION_STATE_REMOVED";

/**
 * Describes the enum zitadel.org.v2.OrganizationState.
 */
export declare const OrganizationStateSchema: GenEnum<OrganizationState, OrganizationStateJson>;

