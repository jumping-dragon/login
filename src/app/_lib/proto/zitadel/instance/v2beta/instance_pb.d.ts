// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/instance/v2beta/instance.proto (package zitadel.instance.v2beta, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { Timestamp, TimestampJson } from "@bufbuild/protobuf/wkt";
import type { TextQueryMethod, TextQueryMethodJson } from "../../object/v2/object_pb.js";

/**
 * Describes the file zitadel/instance/v2beta/instance.proto.
 */
export declare const file_zitadel_instance_v2beta_instance: GenFile;

/**
 * @generated from message zitadel.instance.v2beta.Instance
 */
export declare type Instance = Message<"zitadel.instance.v2beta.Instance"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * change_date is the timestamp when the object was changed
   *
   * on read: the timestamp of the last event reduced by the projection
   *
   * on manipulation: the timestamp of the event(s) added by the manipulation
   *
   * @generated from field: google.protobuf.Timestamp change_date = 2;
   */
  changeDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp creation_date = 3;
   */
  creationDate?: Timestamp;

  /**
   * @generated from field: zitadel.instance.v2beta.State state = 4;
   */
  state: State;

  /**
   * @generated from field: string name = 5;
   */
  name: string;

  /**
   * @generated from field: string version = 6;
   */
  version: string;

  /**
   * @generated from field: repeated zitadel.instance.v2beta.Domain domains = 7;
   */
  domains: Domain[];
};

/**
 * @generated from message zitadel.instance.v2beta.Instance
 */
export declare type InstanceJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * change_date is the timestamp when the object was changed
   *
   * on read: the timestamp of the last event reduced by the projection
   *
   * on manipulation: the timestamp of the event(s) added by the manipulation
   *
   * @generated from field: google.protobuf.Timestamp change_date = 2;
   */
  changeDate?: TimestampJson;

  /**
   * @generated from field: google.protobuf.Timestamp creation_date = 3;
   */
  creationDate?: TimestampJson;

  /**
   * @generated from field: zitadel.instance.v2beta.State state = 4;
   */
  state?: StateJson;

  /**
   * @generated from field: string name = 5;
   */
  name?: string;

  /**
   * @generated from field: string version = 6;
   */
  version?: string;

  /**
   * @generated from field: repeated zitadel.instance.v2beta.Domain domains = 7;
   */
  domains?: DomainJson[];
};

/**
 * Describes the message zitadel.instance.v2beta.Instance.
 * Use `create(InstanceSchema)` to create a new message.
 */
export declare const InstanceSchema: GenMessage<Instance, {jsonType: InstanceJson}>;

/**
 * @generated from message zitadel.instance.v2beta.Domain
 */
export declare type Domain = Message<"zitadel.instance.v2beta.Domain"> & {
  /**
   * @generated from field: string instance_id = 1;
   */
  instanceId: string;

  /**
   * @generated from field: google.protobuf.Timestamp creation_date = 2;
   */
  creationDate?: Timestamp;

  /**
   * @generated from field: string domain = 3;
   */
  domain: string;

  /**
   * @generated from field: bool primary = 4;
   */
  primary: boolean;

  /**
   * @generated from field: bool generated = 5;
   */
  generated: boolean;
};

/**
 * @generated from message zitadel.instance.v2beta.Domain
 */
export declare type DomainJson = {
  /**
   * @generated from field: string instance_id = 1;
   */
  instanceId?: string;

  /**
   * @generated from field: google.protobuf.Timestamp creation_date = 2;
   */
  creationDate?: TimestampJson;

  /**
   * @generated from field: string domain = 3;
   */
  domain?: string;

  /**
   * @generated from field: bool primary = 4;
   */
  primary?: boolean;

  /**
   * @generated from field: bool generated = 5;
   */
  generated?: boolean;
};

/**
 * Describes the message zitadel.instance.v2beta.Domain.
 * Use `create(DomainSchema)` to create a new message.
 */
export declare const DomainSchema: GenMessage<Domain, {jsonType: DomainJson}>;

/**
 * @generated from message zitadel.instance.v2beta.Query
 */
export declare type Query = Message<"zitadel.instance.v2beta.Query"> & {
  /**
   * @generated from oneof zitadel.instance.v2beta.Query.query
   */
  query: {
    /**
     * @generated from field: zitadel.instance.v2beta.IdsQuery id_query = 1;
     */
    value: IdsQuery;
    case: "idQuery";
  } | {
    /**
     * @generated from field: zitadel.instance.v2beta.DomainsQuery domain_query = 2;
     */
    value: DomainsQuery;
    case: "domainQuery";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.instance.v2beta.Query
 */
export declare type QueryJson = {
  /**
   * @generated from field: zitadel.instance.v2beta.IdsQuery id_query = 1;
   */
  idQuery?: IdsQueryJson;

  /**
   * @generated from field: zitadel.instance.v2beta.DomainsQuery domain_query = 2;
   */
  domainQuery?: DomainsQueryJson;
};

/**
 * Describes the message zitadel.instance.v2beta.Query.
 * Use `create(QuerySchema)` to create a new message.
 */
export declare const QuerySchema: GenMessage<Query, {jsonType: QueryJson}>;

/**
 * @generated from message zitadel.instance.v2beta.IdsQuery
 */
export declare type IdsQuery = Message<"zitadel.instance.v2beta.IdsQuery"> & {
  /**
   * @generated from field: repeated string ids = 1;
   */
  ids: string[];
};

/**
 * @generated from message zitadel.instance.v2beta.IdsQuery
 */
export declare type IdsQueryJson = {
  /**
   * @generated from field: repeated string ids = 1;
   */
  ids?: string[];
};

/**
 * Describes the message zitadel.instance.v2beta.IdsQuery.
 * Use `create(IdsQuerySchema)` to create a new message.
 */
export declare const IdsQuerySchema: GenMessage<IdsQuery, {jsonType: IdsQueryJson}>;

/**
 * @generated from message zitadel.instance.v2beta.DomainsQuery
 */
export declare type DomainsQuery = Message<"zitadel.instance.v2beta.DomainsQuery"> & {
  /**
   * @generated from field: repeated string domains = 1;
   */
  domains: string[];
};

/**
 * @generated from message zitadel.instance.v2beta.DomainsQuery
 */
export declare type DomainsQueryJson = {
  /**
   * @generated from field: repeated string domains = 1;
   */
  domains?: string[];
};

/**
 * Describes the message zitadel.instance.v2beta.DomainsQuery.
 * Use `create(DomainsQuerySchema)` to create a new message.
 */
export declare const DomainsQuerySchema: GenMessage<DomainsQuery, {jsonType: DomainsQueryJson}>;

/**
 * @generated from message zitadel.instance.v2beta.DomainSearchQuery
 */
export declare type DomainSearchQuery = Message<"zitadel.instance.v2beta.DomainSearchQuery"> & {
  /**
   * @generated from oneof zitadel.instance.v2beta.DomainSearchQuery.query
   */
  query: {
    /**
     * @generated from field: zitadel.instance.v2beta.DomainQuery domain_query = 1;
     */
    value: DomainQuery;
    case: "domainQuery";
  } | {
    /**
     * @generated from field: zitadel.instance.v2beta.DomainGeneratedQuery generated_query = 2;
     */
    value: DomainGeneratedQuery;
    case: "generatedQuery";
  } | {
    /**
     * @generated from field: zitadel.instance.v2beta.DomainPrimaryQuery primary_query = 3;
     */
    value: DomainPrimaryQuery;
    case: "primaryQuery";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.instance.v2beta.DomainSearchQuery
 */
export declare type DomainSearchQueryJson = {
  /**
   * @generated from field: zitadel.instance.v2beta.DomainQuery domain_query = 1;
   */
  domainQuery?: DomainQueryJson;

  /**
   * @generated from field: zitadel.instance.v2beta.DomainGeneratedQuery generated_query = 2;
   */
  generatedQuery?: DomainGeneratedQueryJson;

  /**
   * @generated from field: zitadel.instance.v2beta.DomainPrimaryQuery primary_query = 3;
   */
  primaryQuery?: DomainPrimaryQueryJson;
};

/**
 * Describes the message zitadel.instance.v2beta.DomainSearchQuery.
 * Use `create(DomainSearchQuerySchema)` to create a new message.
 */
export declare const DomainSearchQuerySchema: GenMessage<DomainSearchQuery, {jsonType: DomainSearchQueryJson}>;

/**
 * @generated from message zitadel.instance.v2beta.DomainQuery
 */
export declare type DomainQuery = Message<"zitadel.instance.v2beta.DomainQuery"> & {
  /**
   * @generated from field: string domain = 1;
   */
  domain: string;

  /**
   * @generated from field: zitadel.object.v2.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;
};

/**
 * @generated from message zitadel.instance.v2beta.DomainQuery
 */
export declare type DomainQueryJson = {
  /**
   * @generated from field: string domain = 1;
   */
  domain?: string;

  /**
   * @generated from field: zitadel.object.v2.TextQueryMethod method = 2;
   */
  method?: TextQueryMethodJson;
};

/**
 * Describes the message zitadel.instance.v2beta.DomainQuery.
 * Use `create(DomainQuerySchema)` to create a new message.
 */
export declare const DomainQuerySchema: GenMessage<DomainQuery, {jsonType: DomainQueryJson}>;

/**
 * @generated from message zitadel.instance.v2beta.DomainGeneratedQuery
 */
export declare type DomainGeneratedQuery = Message<"zitadel.instance.v2beta.DomainGeneratedQuery"> & {
  /**
   * @generated from field: bool generated = 1;
   */
  generated: boolean;
};

/**
 * @generated from message zitadel.instance.v2beta.DomainGeneratedQuery
 */
export declare type DomainGeneratedQueryJson = {
  /**
   * @generated from field: bool generated = 1;
   */
  generated?: boolean;
};

/**
 * Describes the message zitadel.instance.v2beta.DomainGeneratedQuery.
 * Use `create(DomainGeneratedQuerySchema)` to create a new message.
 */
export declare const DomainGeneratedQuerySchema: GenMessage<DomainGeneratedQuery, {jsonType: DomainGeneratedQueryJson}>;

/**
 * @generated from message zitadel.instance.v2beta.DomainPrimaryQuery
 */
export declare type DomainPrimaryQuery = Message<"zitadel.instance.v2beta.DomainPrimaryQuery"> & {
  /**
   * @generated from field: bool primary = 1;
   */
  primary: boolean;
};

/**
 * @generated from message zitadel.instance.v2beta.DomainPrimaryQuery
 */
export declare type DomainPrimaryQueryJson = {
  /**
   * @generated from field: bool primary = 1;
   */
  primary?: boolean;
};

/**
 * Describes the message zitadel.instance.v2beta.DomainPrimaryQuery.
 * Use `create(DomainPrimaryQuerySchema)` to create a new message.
 */
export declare const DomainPrimaryQuerySchema: GenMessage<DomainPrimaryQuery, {jsonType: DomainPrimaryQueryJson}>;

/**
 * @generated from message zitadel.instance.v2beta.TrustedDomain
 */
export declare type TrustedDomain = Message<"zitadel.instance.v2beta.TrustedDomain"> & {
  /**
   * @generated from field: string instance_id = 1;
   */
  instanceId: string;

  /**
   * @generated from field: google.protobuf.Timestamp creation_date = 2;
   */
  creationDate?: Timestamp;

  /**
   * @generated from field: string domain = 3;
   */
  domain: string;
};

/**
 * @generated from message zitadel.instance.v2beta.TrustedDomain
 */
export declare type TrustedDomainJson = {
  /**
   * @generated from field: string instance_id = 1;
   */
  instanceId?: string;

  /**
   * @generated from field: google.protobuf.Timestamp creation_date = 2;
   */
  creationDate?: TimestampJson;

  /**
   * @generated from field: string domain = 3;
   */
  domain?: string;
};

/**
 * Describes the message zitadel.instance.v2beta.TrustedDomain.
 * Use `create(TrustedDomainSchema)` to create a new message.
 */
export declare const TrustedDomainSchema: GenMessage<TrustedDomain, {jsonType: TrustedDomainJson}>;

/**
 * @generated from message zitadel.instance.v2beta.TrustedDomainSearchQuery
 */
export declare type TrustedDomainSearchQuery = Message<"zitadel.instance.v2beta.TrustedDomainSearchQuery"> & {
  /**
   * @generated from oneof zitadel.instance.v2beta.TrustedDomainSearchQuery.query
   */
  query: {
    /**
     * @generated from field: zitadel.instance.v2beta.DomainQuery domain_query = 1;
     */
    value: DomainQuery;
    case: "domainQuery";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.instance.v2beta.TrustedDomainSearchQuery
 */
export declare type TrustedDomainSearchQueryJson = {
  /**
   * @generated from field: zitadel.instance.v2beta.DomainQuery domain_query = 1;
   */
  domainQuery?: DomainQueryJson;
};

/**
 * Describes the message zitadel.instance.v2beta.TrustedDomainSearchQuery.
 * Use `create(TrustedDomainSearchQuerySchema)` to create a new message.
 */
export declare const TrustedDomainSearchQuerySchema: GenMessage<TrustedDomainSearchQuery, {jsonType: TrustedDomainSearchQueryJson}>;

/**
 * @generated from enum zitadel.instance.v2beta.State
 */
export enum State {
  /**
   * @generated from enum value: STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: STATE_CREATING = 1;
   */
  CREATING = 1,

  /**
   * @generated from enum value: STATE_RUNNING = 2;
   */
  RUNNING = 2,

  /**
   * @generated from enum value: STATE_STOPPING = 3;
   */
  STOPPING = 3,

  /**
   * @generated from enum value: STATE_STOPPED = 4;
   */
  STOPPED = 4,
}

/**
 * @generated from enum zitadel.instance.v2beta.State
 */
export declare type StateJson = "STATE_UNSPECIFIED" | "STATE_CREATING" | "STATE_RUNNING" | "STATE_STOPPING" | "STATE_STOPPED";

/**
 * Describes the enum zitadel.instance.v2beta.State.
 */
export declare const StateSchema: GenEnum<State, StateJson>;

/**
 * @generated from enum zitadel.instance.v2beta.FieldName
 */
export enum FieldName {
  /**
   * @generated from enum value: FIELD_NAME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: FIELD_NAME_ID = 1;
   */
  ID = 1,

  /**
   * @generated from enum value: FIELD_NAME_NAME = 2;
   */
  NAME = 2,

  /**
   * @generated from enum value: FIELD_NAME_CREATION_DATE = 3;
   */
  CREATION_DATE = 3,
}

/**
 * @generated from enum zitadel.instance.v2beta.FieldName
 */
export declare type FieldNameJson = "FIELD_NAME_UNSPECIFIED" | "FIELD_NAME_ID" | "FIELD_NAME_NAME" | "FIELD_NAME_CREATION_DATE";

/**
 * Describes the enum zitadel.instance.v2beta.FieldName.
 */
export declare const FieldNameSchema: GenEnum<FieldName, FieldNameJson>;

/**
 * @generated from enum zitadel.instance.v2beta.DomainFieldName
 */
export enum DomainFieldName {
  /**
   * @generated from enum value: DOMAIN_FIELD_NAME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: DOMAIN_FIELD_NAME_DOMAIN = 1;
   */
  DOMAIN = 1,

  /**
   * @generated from enum value: DOMAIN_FIELD_NAME_PRIMARY = 2;
   */
  PRIMARY = 2,

  /**
   * @generated from enum value: DOMAIN_FIELD_NAME_GENERATED = 3;
   */
  GENERATED = 3,

  /**
   * @generated from enum value: DOMAIN_FIELD_NAME_CREATION_DATE = 4;
   */
  CREATION_DATE = 4,
}

/**
 * @generated from enum zitadel.instance.v2beta.DomainFieldName
 */
export declare type DomainFieldNameJson = "DOMAIN_FIELD_NAME_UNSPECIFIED" | "DOMAIN_FIELD_NAME_DOMAIN" | "DOMAIN_FIELD_NAME_PRIMARY" | "DOMAIN_FIELD_NAME_GENERATED" | "DOMAIN_FIELD_NAME_CREATION_DATE";

/**
 * Describes the enum zitadel.instance.v2beta.DomainFieldName.
 */
export declare const DomainFieldNameSchema: GenEnum<DomainFieldName, DomainFieldNameJson>;

/**
 * @generated from enum zitadel.instance.v2beta.TrustedDomainFieldName
 */
export enum TrustedDomainFieldName {
  /**
   * @generated from enum value: TRUSTED_DOMAIN_FIELD_NAME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TRUSTED_DOMAIN_FIELD_NAME_DOMAIN = 1;
   */
  DOMAIN = 1,

  /**
   * @generated from enum value: TRUSTED_DOMAIN_FIELD_NAME_CREATION_DATE = 2;
   */
  CREATION_DATE = 2,
}

/**
 * @generated from enum zitadel.instance.v2beta.TrustedDomainFieldName
 */
export declare type TrustedDomainFieldNameJson = "TRUSTED_DOMAIN_FIELD_NAME_UNSPECIFIED" | "TRUSTED_DOMAIN_FIELD_NAME_DOMAIN" | "TRUSTED_DOMAIN_FIELD_NAME_CREATION_DATE";

/**
 * Describes the enum zitadel.instance.v2beta.TrustedDomainFieldName.
 */
export declare const TrustedDomainFieldNameSchema: GenEnum<TrustedDomainFieldName, TrustedDomainFieldNameJson>;

