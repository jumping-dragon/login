// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/filter/v2beta/filter.proto (package zitadel.filter.v2beta, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { Timestamp, TimestampJson } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file zitadel/filter/v2beta/filter.proto.
 */
export declare const file_zitadel_filter_v2beta_filter: GenFile;

/**
 * @generated from message zitadel.filter.v2beta.PaginationRequest
 */
export declare type PaginationRequest = Message<"zitadel.filter.v2beta.PaginationRequest"> & {
  /**
   * Starting point for retrieval, in combination of offset used to query a set list of objects.
   *
   * @generated from field: uint64 offset = 1;
   */
  offset: bigint;

  /**
   * limit is the maximum amount of objects returned. The default is set to 100
   * with a maximum of 1000 in the runtime configuration.
   * If the limit exceeds the maximum configured ZITADEL will throw an error.
   * If no limit is present the default is taken.
   *
   * @generated from field: uint32 limit = 2;
   */
  limit: number;

  /**
   * Asc is the sorting order. If true the list is sorted ascending, if false
   * the list is sorted descending. The default is descending.
   *
   * @generated from field: bool asc = 3;
   */
  asc: boolean;
};

/**
 * @generated from message zitadel.filter.v2beta.PaginationRequest
 */
export declare type PaginationRequestJson = {
  /**
   * Starting point for retrieval, in combination of offset used to query a set list of objects.
   *
   * @generated from field: uint64 offset = 1;
   */
  offset?: string;

  /**
   * limit is the maximum amount of objects returned. The default is set to 100
   * with a maximum of 1000 in the runtime configuration.
   * If the limit exceeds the maximum configured ZITADEL will throw an error.
   * If no limit is present the default is taken.
   *
   * @generated from field: uint32 limit = 2;
   */
  limit?: number;

  /**
   * Asc is the sorting order. If true the list is sorted ascending, if false
   * the list is sorted descending. The default is descending.
   *
   * @generated from field: bool asc = 3;
   */
  asc?: boolean;
};

/**
 * Describes the message zitadel.filter.v2beta.PaginationRequest.
 * Use `create(PaginationRequestSchema)` to create a new message.
 */
export declare const PaginationRequestSchema: GenMessage<PaginationRequest, {jsonType: PaginationRequestJson}>;

/**
 * @generated from message zitadel.filter.v2beta.PaginationResponse
 */
export declare type PaginationResponse = Message<"zitadel.filter.v2beta.PaginationResponse"> & {
  /**
   * Absolute number of objects matching the query, regardless of applied limit.
   *
   * @generated from field: uint64 total_result = 1;
   */
  totalResult: bigint;

  /**
   * Applied limit from query, defines maximum amount of objects per request, to compare if all objects are returned.
   *
   * @generated from field: uint64 applied_limit = 2;
   */
  appliedLimit: bigint;
};

/**
 * @generated from message zitadel.filter.v2beta.PaginationResponse
 */
export declare type PaginationResponseJson = {
  /**
   * Absolute number of objects matching the query, regardless of applied limit.
   *
   * @generated from field: uint64 total_result = 1;
   */
  totalResult?: string;

  /**
   * Applied limit from query, defines maximum amount of objects per request, to compare if all objects are returned.
   *
   * @generated from field: uint64 applied_limit = 2;
   */
  appliedLimit?: string;
};

/**
 * Describes the message zitadel.filter.v2beta.PaginationResponse.
 * Use `create(PaginationResponseSchema)` to create a new message.
 */
export declare const PaginationResponseSchema: GenMessage<PaginationResponse, {jsonType: PaginationResponseJson}>;

/**
 * @generated from message zitadel.filter.v2beta.IDFilter
 */
export declare type IDFilter = Message<"zitadel.filter.v2beta.IDFilter"> & {
  /**
   * Only return resources that belong to this id.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * @generated from message zitadel.filter.v2beta.IDFilter
 */
export declare type IDFilterJson = {
  /**
   * Only return resources that belong to this id.
   *
   * @generated from field: string id = 1;
   */
  id?: string;
};

/**
 * Describes the message zitadel.filter.v2beta.IDFilter.
 * Use `create(IDFilterSchema)` to create a new message.
 */
export declare const IDFilterSchema: GenMessage<IDFilter, {jsonType: IDFilterJson}>;

/**
 * @generated from message zitadel.filter.v2beta.TimestampFilter
 */
export declare type TimestampFilter = Message<"zitadel.filter.v2beta.TimestampFilter"> & {
  /**
   * Filter resources by timestamp.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: Timestamp;

  /**
   * Defines the condition (e.g., equals, before, after) that the timestamp of the retrieved resources should match.
   *
   * @generated from field: zitadel.filter.v2beta.TimestampFilterMethod method = 2;
   */
  method: TimestampFilterMethod;
};

/**
 * @generated from message zitadel.filter.v2beta.TimestampFilter
 */
export declare type TimestampFilterJson = {
  /**
   * Filter resources by timestamp.
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 1;
   */
  timestamp?: TimestampJson;

  /**
   * Defines the condition (e.g., equals, before, after) that the timestamp of the retrieved resources should match.
   *
   * @generated from field: zitadel.filter.v2beta.TimestampFilterMethod method = 2;
   */
  method?: TimestampFilterMethodJson;
};

/**
 * Describes the message zitadel.filter.v2beta.TimestampFilter.
 * Use `create(TimestampFilterSchema)` to create a new message.
 */
export declare const TimestampFilterSchema: GenMessage<TimestampFilter, {jsonType: TimestampFilterJson}>;

/**
 * @generated from message zitadel.filter.v2beta.InIDsFilter
 */
export declare type InIDsFilter = Message<"zitadel.filter.v2beta.InIDsFilter"> & {
  /**
   * Defines the ids to query for.
   *
   * @generated from field: repeated string ids = 1;
   */
  ids: string[];
};

/**
 * @generated from message zitadel.filter.v2beta.InIDsFilter
 */
export declare type InIDsFilterJson = {
  /**
   * Defines the ids to query for.
   *
   * @generated from field: repeated string ids = 1;
   */
  ids?: string[];
};

/**
 * Describes the message zitadel.filter.v2beta.InIDsFilter.
 * Use `create(InIDsFilterSchema)` to create a new message.
 */
export declare const InIDsFilterSchema: GenMessage<InIDsFilter, {jsonType: InIDsFilterJson}>;

/**
 * @generated from enum zitadel.filter.v2beta.TextFilterMethod
 */
export enum TextFilterMethod {
  /**
   * @generated from enum value: TEXT_FILTER_METHOD_EQUALS = 0;
   */
  EQUALS = 0,

  /**
   * @generated from enum value: TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE = 1;
   */
  EQUALS_IGNORE_CASE = 1,

  /**
   * @generated from enum value: TEXT_FILTER_METHOD_STARTS_WITH = 2;
   */
  STARTS_WITH = 2,

  /**
   * @generated from enum value: TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE = 3;
   */
  STARTS_WITH_IGNORE_CASE = 3,

  /**
   * @generated from enum value: TEXT_FILTER_METHOD_CONTAINS = 4;
   */
  CONTAINS = 4,

  /**
   * @generated from enum value: TEXT_FILTER_METHOD_CONTAINS_IGNORE_CASE = 5;
   */
  CONTAINS_IGNORE_CASE = 5,

  /**
   * @generated from enum value: TEXT_FILTER_METHOD_ENDS_WITH = 6;
   */
  ENDS_WITH = 6,

  /**
   * @generated from enum value: TEXT_FILTER_METHOD_ENDS_WITH_IGNORE_CASE = 7;
   */
  ENDS_WITH_IGNORE_CASE = 7,
}

/**
 * @generated from enum zitadel.filter.v2beta.TextFilterMethod
 */
export declare type TextFilterMethodJson = "TEXT_FILTER_METHOD_EQUALS" | "TEXT_FILTER_METHOD_EQUALS_IGNORE_CASE" | "TEXT_FILTER_METHOD_STARTS_WITH" | "TEXT_FILTER_METHOD_STARTS_WITH_IGNORE_CASE" | "TEXT_FILTER_METHOD_CONTAINS" | "TEXT_FILTER_METHOD_CONTAINS_IGNORE_CASE" | "TEXT_FILTER_METHOD_ENDS_WITH" | "TEXT_FILTER_METHOD_ENDS_WITH_IGNORE_CASE";

/**
 * Describes the enum zitadel.filter.v2beta.TextFilterMethod.
 */
export declare const TextFilterMethodSchema: GenEnum<TextFilterMethod, TextFilterMethodJson>;

/**
 * @generated from enum zitadel.filter.v2beta.ListFilterMethod
 */
export enum ListFilterMethod {
  /**
   * @generated from enum value: LIST_FILTER_METHOD_IN = 0;
   */
  IN = 0,
}

/**
 * @generated from enum zitadel.filter.v2beta.ListFilterMethod
 */
export declare type ListFilterMethodJson = "LIST_FILTER_METHOD_IN";

/**
 * Describes the enum zitadel.filter.v2beta.ListFilterMethod.
 */
export declare const ListFilterMethodSchema: GenEnum<ListFilterMethod, ListFilterMethodJson>;

/**
 * @generated from enum zitadel.filter.v2beta.TimestampFilterMethod
 */
export enum TimestampFilterMethod {
  /**
   * @generated from enum value: TIMESTAMP_FILTER_METHOD_EQUALS = 0;
   */
  EQUALS = 0,

  /**
   * @generated from enum value: TIMESTAMP_FILTER_METHOD_GREATER = 1;
   */
  GREATER = 1,

  /**
   * @generated from enum value: TIMESTAMP_FILTER_METHOD_GREATER_OR_EQUALS = 2;
   */
  GREATER_OR_EQUALS = 2,

  /**
   * @generated from enum value: TIMESTAMP_FILTER_METHOD_LESS = 3;
   */
  LESS = 3,

  /**
   * @generated from enum value: TIMESTAMP_FILTER_METHOD_LESS_OR_EQUALS = 4;
   */
  LESS_OR_EQUALS = 4,
}

/**
 * @generated from enum zitadel.filter.v2beta.TimestampFilterMethod
 */
export declare type TimestampFilterMethodJson = "TIMESTAMP_FILTER_METHOD_EQUALS" | "TIMESTAMP_FILTER_METHOD_GREATER" | "TIMESTAMP_FILTER_METHOD_GREATER_OR_EQUALS" | "TIMESTAMP_FILTER_METHOD_LESS" | "TIMESTAMP_FILTER_METHOD_LESS_OR_EQUALS";

/**
 * Describes the enum zitadel.filter.v2beta.TimestampFilterMethod.
 */
export declare const TimestampFilterMethodSchema: GenEnum<TimestampFilterMethod, TimestampFilterMethodJson>;

