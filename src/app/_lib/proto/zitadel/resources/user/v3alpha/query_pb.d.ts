// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/resources/user/v3alpha/query.proto (package zitadel.resources.user.v3alpha, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { TextFilterMethod, TextFilterMethodJson } from "../../object/v3alpha/object_pb.js";
import type { State, StateJson } from "./user_pb.js";

/**
 * Describes the file zitadel/resources/user/v3alpha/query.proto.
 */
export declare const file_zitadel_resources_user_v3alpha_query: GenFile;

/**
 * @generated from message zitadel.resources.user.v3alpha.SearchFilter
 */
export declare type SearchFilter = Message<"zitadel.resources.user.v3alpha.SearchFilter"> & {
  /**
   * @generated from oneof zitadel.resources.user.v3alpha.SearchFilter.Filter
   */
  Filter: {
    /**
     * Union the results of each sub filter ('OR').
     *
     * @generated from field: zitadel.resources.user.v3alpha.OrFilter or_filter = 1;
     */
    value: OrFilter;
    case: "orFilter";
  } | {
    /**
     * Limit the result to match all sub queries ('AND').
     * Note that if you specify multiple queries, they will be implicitly used as andQueries.
     * Use the andFilter in combination with orFilter and notFilter.
     *
     * @generated from field: zitadel.resources.user.v3alpha.AndFilter and_filter = 2;
     */
    value: AndFilter;
    case: "andFilter";
  } | {
    /**
     * Exclude / Negate the result of the sub query ('NOT').
     *
     * @generated from field: zitadel.resources.user.v3alpha.NotFilter not_filter = 3;
     */
    value: NotFilter;
    case: "notFilter";
  } | {
    /**
     * Limit the result to a specific user ID.
     *
     * @generated from field: zitadel.resources.user.v3alpha.UserIDFilter user_id_filter = 4;
     */
    value: UserIDFilter;
    case: "userIdFilter";
  } | {
    /**
     * Limit the result to a specific organization.
     *
     * @generated from field: zitadel.resources.user.v3alpha.OrganizationIDFilter organization_id_filter = 5;
     */
    value: OrganizationIDFilter;
    case: "organizationIdFilter";
  } | {
    /**
     * Limit the result to a specific username.
     *
     * @generated from field: zitadel.resources.user.v3alpha.UsernameFilter username_filter = 6;
     */
    value: UsernameFilter;
    case: "usernameFilter";
  } | {
    /**
     * Limit the result to a specific contact email.
     *
     * @generated from field: zitadel.resources.user.v3alpha.EmailFilter email_filter = 7;
     */
    value: EmailFilter;
    case: "emailFilter";
  } | {
    /**
     * Limit the result to a specific contact phone.
     *
     * @generated from field: zitadel.resources.user.v3alpha.PhoneFilter phone_filter = 8;
     */
    value: PhoneFilter;
    case: "phoneFilter";
  } | {
    /**
     * Limit the result to a specific state of the user.
     *
     * @generated from field: zitadel.resources.user.v3alpha.StateFilter state_filter = 9;
     */
    value: StateFilter;
    case: "stateFilter";
  } | {
    /**
     * Limit the result to a specific schema ID.
     *
     * @generated from field: zitadel.resources.user.v3alpha.SchemaIDFilter schema_id_filter = 10;
     */
    value: SchemaIDFilter;
    case: "schemaIdFilter";
  } | {
    /**
     * Limit the result to a specific schema type.
     *
     * @generated from field: zitadel.resources.user.v3alpha.SchemaTypeFilter schema_type_filter = 11;
     */
    value: SchemaTypeFilter;
    case: "schemaTypeFilter";
  } | { case: undefined; value?: undefined };
};

/**
 * @generated from message zitadel.resources.user.v3alpha.SearchFilter
 */
export declare type SearchFilterJson = {
  /**
   * Union the results of each sub filter ('OR').
   *
   * @generated from field: zitadel.resources.user.v3alpha.OrFilter or_filter = 1;
   */
  orFilter?: OrFilterJson;

  /**
   * Limit the result to match all sub queries ('AND').
   * Note that if you specify multiple queries, they will be implicitly used as andQueries.
   * Use the andFilter in combination with orFilter and notFilter.
   *
   * @generated from field: zitadel.resources.user.v3alpha.AndFilter and_filter = 2;
   */
  andFilter?: AndFilterJson;

  /**
   * Exclude / Negate the result of the sub query ('NOT').
   *
   * @generated from field: zitadel.resources.user.v3alpha.NotFilter not_filter = 3;
   */
  notFilter?: NotFilterJson;

  /**
   * Limit the result to a specific user ID.
   *
   * @generated from field: zitadel.resources.user.v3alpha.UserIDFilter user_id_filter = 4;
   */
  userIdFilter?: UserIDFilterJson;

  /**
   * Limit the result to a specific organization.
   *
   * @generated from field: zitadel.resources.user.v3alpha.OrganizationIDFilter organization_id_filter = 5;
   */
  organizationIdFilter?: OrganizationIDFilterJson;

  /**
   * Limit the result to a specific username.
   *
   * @generated from field: zitadel.resources.user.v3alpha.UsernameFilter username_filter = 6;
   */
  usernameFilter?: UsernameFilterJson;

  /**
   * Limit the result to a specific contact email.
   *
   * @generated from field: zitadel.resources.user.v3alpha.EmailFilter email_filter = 7;
   */
  emailFilter?: EmailFilterJson;

  /**
   * Limit the result to a specific contact phone.
   *
   * @generated from field: zitadel.resources.user.v3alpha.PhoneFilter phone_filter = 8;
   */
  phoneFilter?: PhoneFilterJson;

  /**
   * Limit the result to a specific state of the user.
   *
   * @generated from field: zitadel.resources.user.v3alpha.StateFilter state_filter = 9;
   */
  stateFilter?: StateFilterJson;

  /**
   * Limit the result to a specific schema ID.
   *
   * @generated from field: zitadel.resources.user.v3alpha.SchemaIDFilter schema_id_filter = 10;
   */
  schemaIdFilter?: SchemaIDFilterJson;

  /**
   * Limit the result to a specific schema type.
   *
   * @generated from field: zitadel.resources.user.v3alpha.SchemaTypeFilter schema_type_filter = 11;
   */
  schemaTypeFilter?: SchemaTypeFilterJson;
};

/**
 * Describes the message zitadel.resources.user.v3alpha.SearchFilter.
 * Use `create(SearchFilterSchema)` to create a new message.
 */
export declare const SearchFilterSchema: GenMessage<SearchFilter, {jsonType: SearchFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.OrFilter
 */
export declare type OrFilter = Message<"zitadel.resources.user.v3alpha.OrFilter"> & {
  /**
   * @generated from field: repeated zitadel.resources.user.v3alpha.SearchFilter queries = 1;
   */
  queries: SearchFilter[];
};

/**
 * @generated from message zitadel.resources.user.v3alpha.OrFilter
 */
export declare type OrFilterJson = {
  /**
   * @generated from field: repeated zitadel.resources.user.v3alpha.SearchFilter queries = 1;
   */
  queries?: SearchFilterJson[];
};

/**
 * Describes the message zitadel.resources.user.v3alpha.OrFilter.
 * Use `create(OrFilterSchema)` to create a new message.
 */
export declare const OrFilterSchema: GenMessage<OrFilter, {jsonType: OrFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.AndFilter
 */
export declare type AndFilter = Message<"zitadel.resources.user.v3alpha.AndFilter"> & {
  /**
   * @generated from field: repeated zitadel.resources.user.v3alpha.SearchFilter queries = 1;
   */
  queries: SearchFilter[];
};

/**
 * @generated from message zitadel.resources.user.v3alpha.AndFilter
 */
export declare type AndFilterJson = {
  /**
   * @generated from field: repeated zitadel.resources.user.v3alpha.SearchFilter queries = 1;
   */
  queries?: SearchFilterJson[];
};

/**
 * Describes the message zitadel.resources.user.v3alpha.AndFilter.
 * Use `create(AndFilterSchema)` to create a new message.
 */
export declare const AndFilterSchema: GenMessage<AndFilter, {jsonType: AndFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.NotFilter
 */
export declare type NotFilter = Message<"zitadel.resources.user.v3alpha.NotFilter"> & {
  /**
   * @generated from field: zitadel.resources.user.v3alpha.SearchFilter query = 1;
   */
  query?: SearchFilter;
};

/**
 * @generated from message zitadel.resources.user.v3alpha.NotFilter
 */
export declare type NotFilterJson = {
  /**
   * @generated from field: zitadel.resources.user.v3alpha.SearchFilter query = 1;
   */
  query?: SearchFilterJson;
};

/**
 * Describes the message zitadel.resources.user.v3alpha.NotFilter.
 * Use `create(NotFilterSchema)` to create a new message.
 */
export declare const NotFilterSchema: GenMessage<NotFilter, {jsonType: NotFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.UserIDFilter
 */
export declare type UserIDFilter = Message<"zitadel.resources.user.v3alpha.UserIDFilter"> & {
  /**
   * Defines the ID of the user to query for.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Defines which text comparison method used for the id query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method: TextFilterMethod;
};

/**
 * @generated from message zitadel.resources.user.v3alpha.UserIDFilter
 */
export declare type UserIDFilterJson = {
  /**
   * Defines the ID of the user to query for.
   *
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * Defines which text comparison method used for the id query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method?: TextFilterMethodJson;
};

/**
 * Describes the message zitadel.resources.user.v3alpha.UserIDFilter.
 * Use `create(UserIDFilterSchema)` to create a new message.
 */
export declare const UserIDFilterSchema: GenMessage<UserIDFilter, {jsonType: UserIDFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.OrganizationIDFilter
 */
export declare type OrganizationIDFilter = Message<"zitadel.resources.user.v3alpha.OrganizationIDFilter"> & {
  /**
   * Defines the ID of the organization to query for.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Defines which text comparison method used for the id query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method: TextFilterMethod;
};

/**
 * @generated from message zitadel.resources.user.v3alpha.OrganizationIDFilter
 */
export declare type OrganizationIDFilterJson = {
  /**
   * Defines the ID of the organization to query for.
   *
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * Defines which text comparison method used for the id query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method?: TextFilterMethodJson;
};

/**
 * Describes the message zitadel.resources.user.v3alpha.OrganizationIDFilter.
 * Use `create(OrganizationIDFilterSchema)` to create a new message.
 */
export declare const OrganizationIDFilterSchema: GenMessage<OrganizationIDFilter, {jsonType: OrganizationIDFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.UsernameFilter
 */
export declare type UsernameFilter = Message<"zitadel.resources.user.v3alpha.UsernameFilter"> & {
  /**
   * Defines the username to query for.
   *
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * Defines which text comparison method used for the username query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method: TextFilterMethod;

  /**
   * Defines that the username must only be unique in the organisation.
   *
   * @generated from field: bool is_organization_specific = 3;
   */
  isOrganizationSpecific: boolean;
};

/**
 * @generated from message zitadel.resources.user.v3alpha.UsernameFilter
 */
export declare type UsernameFilterJson = {
  /**
   * Defines the username to query for.
   *
   * @generated from field: string username = 1;
   */
  username?: string;

  /**
   * Defines which text comparison method used for the username query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method?: TextFilterMethodJson;

  /**
   * Defines that the username must only be unique in the organisation.
   *
   * @generated from field: bool is_organization_specific = 3;
   */
  isOrganizationSpecific?: boolean;
};

/**
 * Describes the message zitadel.resources.user.v3alpha.UsernameFilter.
 * Use `create(UsernameFilterSchema)` to create a new message.
 */
export declare const UsernameFilterSchema: GenMessage<UsernameFilter, {jsonType: UsernameFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.EmailFilter
 */
export declare type EmailFilter = Message<"zitadel.resources.user.v3alpha.EmailFilter"> & {
  /**
   * Defines the email of the user to query for.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * Defines which text comparison method used for the email query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method: TextFilterMethod;
};

/**
 * @generated from message zitadel.resources.user.v3alpha.EmailFilter
 */
export declare type EmailFilterJson = {
  /**
   * Defines the email of the user to query for.
   *
   * @generated from field: string address = 1;
   */
  address?: string;

  /**
   * Defines which text comparison method used for the email query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method?: TextFilterMethodJson;
};

/**
 * Describes the message zitadel.resources.user.v3alpha.EmailFilter.
 * Use `create(EmailFilterSchema)` to create a new message.
 */
export declare const EmailFilterSchema: GenMessage<EmailFilter, {jsonType: EmailFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.PhoneFilter
 */
export declare type PhoneFilter = Message<"zitadel.resources.user.v3alpha.PhoneFilter"> & {
  /**
   * Defines the phone of the user to query for.
   *
   * @generated from field: string number = 1;
   */
  number: string;

  /**
   * Defines which text comparison method used for the phone query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method: TextFilterMethod;
};

/**
 * @generated from message zitadel.resources.user.v3alpha.PhoneFilter
 */
export declare type PhoneFilterJson = {
  /**
   * Defines the phone of the user to query for.
   *
   * @generated from field: string number = 1;
   */
  number?: string;

  /**
   * Defines which text comparison method used for the phone query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method?: TextFilterMethodJson;
};

/**
 * Describes the message zitadel.resources.user.v3alpha.PhoneFilter.
 * Use `create(PhoneFilterSchema)` to create a new message.
 */
export declare const PhoneFilterSchema: GenMessage<PhoneFilter, {jsonType: PhoneFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.StateFilter
 */
export declare type StateFilter = Message<"zitadel.resources.user.v3alpha.StateFilter"> & {
  /**
   * Defines the state to query for.
   *
   * @generated from field: zitadel.resources.user.v3alpha.State state = 1;
   */
  state: State;
};

/**
 * @generated from message zitadel.resources.user.v3alpha.StateFilter
 */
export declare type StateFilterJson = {
  /**
   * Defines the state to query for.
   *
   * @generated from field: zitadel.resources.user.v3alpha.State state = 1;
   */
  state?: StateJson;
};

/**
 * Describes the message zitadel.resources.user.v3alpha.StateFilter.
 * Use `create(StateFilterSchema)` to create a new message.
 */
export declare const StateFilterSchema: GenMessage<StateFilter, {jsonType: StateFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.SchemaIDFilter
 */
export declare type SchemaIDFilter = Message<"zitadel.resources.user.v3alpha.SchemaIDFilter"> & {
  /**
   * Defines the ID of the schema to query for.
   *
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * @generated from message zitadel.resources.user.v3alpha.SchemaIDFilter
 */
export declare type SchemaIDFilterJson = {
  /**
   * Defines the ID of the schema to query for.
   *
   * @generated from field: string id = 1;
   */
  id?: string;
};

/**
 * Describes the message zitadel.resources.user.v3alpha.SchemaIDFilter.
 * Use `create(SchemaIDFilterSchema)` to create a new message.
 */
export declare const SchemaIDFilterSchema: GenMessage<SchemaIDFilter, {jsonType: SchemaIDFilterJson}>;

/**
 * @generated from message zitadel.resources.user.v3alpha.SchemaTypeFilter
 */
export declare type SchemaTypeFilter = Message<"zitadel.resources.user.v3alpha.SchemaTypeFilter"> & {
  /**
   * Defines which type to query for.
   *
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * Defines which text comparison method used for the type query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method: TextFilterMethod;
};

/**
 * @generated from message zitadel.resources.user.v3alpha.SchemaTypeFilter
 */
export declare type SchemaTypeFilterJson = {
  /**
   * Defines which type to query for.
   *
   * @generated from field: string type = 1;
   */
  type?: string;

  /**
   * Defines which text comparison method used for the type query.
   *
   * @generated from field: zitadel.resources.object.v3alpha.TextFilterMethod method = 2;
   */
  method?: TextFilterMethodJson;
};

/**
 * Describes the message zitadel.resources.user.v3alpha.SchemaTypeFilter.
 * Use `create(SchemaTypeFilterSchema)` to create a new message.
 */
export declare const SchemaTypeFilterSchema: GenMessage<SchemaTypeFilter, {jsonType: SchemaTypeFilterJson}>;

/**
 * @generated from enum zitadel.resources.user.v3alpha.FieldName
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
   * @generated from enum value: FIELD_NAME_CREATION_DATE = 2;
   */
  CREATION_DATE = 2,

  /**
   * @generated from enum value: FIELD_NAME_CHANGE_DATE = 3;
   */
  CHANGE_DATE = 3,

  /**
   * @generated from enum value: FIELD_NAME_EMAIL = 4;
   */
  EMAIL = 4,

  /**
   * @generated from enum value: FIELD_NAME_PHONE = 5;
   */
  PHONE = 5,

  /**
   * @generated from enum value: FIELD_NAME_STATE = 6;
   */
  STATE = 6,

  /**
   * @generated from enum value: FIELD_NAME_SCHEMA_ID = 7;
   */
  SCHEMA_ID = 7,

  /**
   * @generated from enum value: FIELD_NAME_SCHEMA_TYPE = 8;
   */
  SCHEMA_TYPE = 8,
}

/**
 * @generated from enum zitadel.resources.user.v3alpha.FieldName
 */
export declare type FieldNameJson = "FIELD_NAME_UNSPECIFIED" | "FIELD_NAME_ID" | "FIELD_NAME_CREATION_DATE" | "FIELD_NAME_CHANGE_DATE" | "FIELD_NAME_EMAIL" | "FIELD_NAME_PHONE" | "FIELD_NAME_STATE" | "FIELD_NAME_SCHEMA_ID" | "FIELD_NAME_SCHEMA_TYPE";

/**
 * Describes the enum zitadel.resources.user.v3alpha.FieldName.
 */
export declare const FieldNameSchema: GenEnum<FieldName, FieldNameJson>;

