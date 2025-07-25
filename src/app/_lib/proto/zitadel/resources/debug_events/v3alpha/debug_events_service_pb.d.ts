// @generated by protoc-gen-es v2.6.0 with parameter "json_types=true,import_extension=js"
// @generated from file zitadel/resources/debug_events/v3alpha/debug_events_service.proto (package zitadel.resources.debug_events.v3alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { Instance, InstanceJson } from "../../../object/v3alpha/object_pb.js";
import type { Event, EventJson } from "./event_pb.js";
import type { Details, DetailsJson } from "../../object/v3alpha/object_pb.js";
import type { State, StateJson } from "./state_pb.js";

/**
 * Describes the file zitadel/resources/debug_events/v3alpha/debug_events_service.proto.
 */
export declare const file_zitadel_resources_debug_events_v3alpha_debug_events_service: GenFile;

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.CreateDebugEventsRequest
 */
export declare type CreateDebugEventsRequest = Message<"zitadel.resources.debug_events.v3alpha.CreateDebugEventsRequest"> & {
  /**
   * @generated from field: optional zitadel.object.v3alpha.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * unique identifier for the aggregate we want to push events to.
   *
   * @generated from field: string aggregate_id = 2;
   */
  aggregateId: string;

  /**
   * @generated from field: repeated zitadel.resources.debug_events.v3alpha.Event events = 3;
   */
  events: Event[];
};

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.CreateDebugEventsRequest
 */
export declare type CreateDebugEventsRequestJson = {
  /**
   * @generated from field: optional zitadel.object.v3alpha.Instance instance = 1;
   */
  instance?: InstanceJson;

  /**
   * unique identifier for the aggregate we want to push events to.
   *
   * @generated from field: string aggregate_id = 2;
   */
  aggregateId?: string;

  /**
   * @generated from field: repeated zitadel.resources.debug_events.v3alpha.Event events = 3;
   */
  events?: EventJson[];
};

/**
 * Describes the message zitadel.resources.debug_events.v3alpha.CreateDebugEventsRequest.
 * Use `create(CreateDebugEventsRequestSchema)` to create a new message.
 */
export declare const CreateDebugEventsRequestSchema: GenMessage<CreateDebugEventsRequest, {jsonType: CreateDebugEventsRequestJson}>;

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.CreateDebugEventsResponse
 */
export declare type CreateDebugEventsResponse = Message<"zitadel.resources.debug_events.v3alpha.CreateDebugEventsResponse"> & {
  /**
   * @generated from field: zitadel.resources.object.v3alpha.Details details = 1;
   */
  details?: Details;
};

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.CreateDebugEventsResponse
 */
export declare type CreateDebugEventsResponseJson = {
  /**
   * @generated from field: zitadel.resources.object.v3alpha.Details details = 1;
   */
  details?: DetailsJson;
};

/**
 * Describes the message zitadel.resources.debug_events.v3alpha.CreateDebugEventsResponse.
 * Use `create(CreateDebugEventsResponseSchema)` to create a new message.
 */
export declare const CreateDebugEventsResponseSchema: GenMessage<CreateDebugEventsResponse, {jsonType: CreateDebugEventsResponseJson}>;

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.GetDebugEventsStateByIdRequest
 */
export declare type GetDebugEventsStateByIdRequest = Message<"zitadel.resources.debug_events.v3alpha.GetDebugEventsStateByIdRequest"> & {
  /**
   * unique identifier of the aggregate.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: bool trigger_bulk = 2;
   */
  triggerBulk: boolean;
};

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.GetDebugEventsStateByIdRequest
 */
export declare type GetDebugEventsStateByIdRequestJson = {
  /**
   * unique identifier of the aggregate.
   *
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: bool trigger_bulk = 2;
   */
  triggerBulk?: boolean;
};

/**
 * Describes the message zitadel.resources.debug_events.v3alpha.GetDebugEventsStateByIdRequest.
 * Use `create(GetDebugEventsStateByIdRequestSchema)` to create a new message.
 */
export declare const GetDebugEventsStateByIdRequestSchema: GenMessage<GetDebugEventsStateByIdRequest, {jsonType: GetDebugEventsStateByIdRequestJson}>;

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.GetDebugEventsStateByIdResponse
 */
export declare type GetDebugEventsStateByIdResponse = Message<"zitadel.resources.debug_events.v3alpha.GetDebugEventsStateByIdResponse"> & {
  /**
   * @generated from field: zitadel.resources.debug_events.v3alpha.State state = 1;
   */
  state?: State;
};

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.GetDebugEventsStateByIdResponse
 */
export declare type GetDebugEventsStateByIdResponseJson = {
  /**
   * @generated from field: zitadel.resources.debug_events.v3alpha.State state = 1;
   */
  state?: StateJson;
};

/**
 * Describes the message zitadel.resources.debug_events.v3alpha.GetDebugEventsStateByIdResponse.
 * Use `create(GetDebugEventsStateByIdResponseSchema)` to create a new message.
 */
export declare const GetDebugEventsStateByIdResponseSchema: GenMessage<GetDebugEventsStateByIdResponse, {jsonType: GetDebugEventsStateByIdResponseJson}>;

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.ListDebugEventsStatesRequest
 */
export declare type ListDebugEventsStatesRequest = Message<"zitadel.resources.debug_events.v3alpha.ListDebugEventsStatesRequest"> & {
  /**
   * @generated from field: bool trigger_bulk = 1;
   */
  triggerBulk: boolean;
};

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.ListDebugEventsStatesRequest
 */
export declare type ListDebugEventsStatesRequestJson = {
  /**
   * @generated from field: bool trigger_bulk = 1;
   */
  triggerBulk?: boolean;
};

/**
 * Describes the message zitadel.resources.debug_events.v3alpha.ListDebugEventsStatesRequest.
 * Use `create(ListDebugEventsStatesRequestSchema)` to create a new message.
 */
export declare const ListDebugEventsStatesRequestSchema: GenMessage<ListDebugEventsStatesRequest, {jsonType: ListDebugEventsStatesRequestJson}>;

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.ListDebugEventsStatesResponse
 */
export declare type ListDebugEventsStatesResponse = Message<"zitadel.resources.debug_events.v3alpha.ListDebugEventsStatesResponse"> & {
  /**
   * @generated from field: repeated zitadel.resources.debug_events.v3alpha.State states = 1;
   */
  states: State[];
};

/**
 * @generated from message zitadel.resources.debug_events.v3alpha.ListDebugEventsStatesResponse
 */
export declare type ListDebugEventsStatesResponseJson = {
  /**
   * @generated from field: repeated zitadel.resources.debug_events.v3alpha.State states = 1;
   */
  states?: StateJson[];
};

/**
 * Describes the message zitadel.resources.debug_events.v3alpha.ListDebugEventsStatesResponse.
 * Use `create(ListDebugEventsStatesResponseSchema)` to create a new message.
 */
export declare const ListDebugEventsStatesResponseSchema: GenMessage<ListDebugEventsStatesResponse, {jsonType: ListDebugEventsStatesResponseJson}>;

/**
 * @generated from service zitadel.resources.debug_events.v3alpha.ZITADELDebugEvents
 */
export declare const ZITADELDebugEvents: GenService<{
  /**
   * @generated from rpc zitadel.resources.debug_events.v3alpha.ZITADELDebugEvents.CreateDebugEvents
   */
  createDebugEvents: {
    methodKind: "unary";
    input: typeof CreateDebugEventsRequestSchema;
    output: typeof CreateDebugEventsResponseSchema;
  },
  /**
   * @generated from rpc zitadel.resources.debug_events.v3alpha.ZITADELDebugEvents.GetDebugEventsStateById
   */
  getDebugEventsStateById: {
    methodKind: "unary";
    input: typeof GetDebugEventsStateByIdRequestSchema;
    output: typeof GetDebugEventsStateByIdResponseSchema;
  },
  /**
   * @generated from rpc zitadel.resources.debug_events.v3alpha.ZITADELDebugEvents.ListDebugEventsStates
   */
  listDebugEventsStates: {
    methodKind: "unary";
    input: typeof ListDebugEventsStatesRequestSchema;
    output: typeof ListDebugEventsStatesResponseSchema;
  },
}>;

