/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Schedule } from "./schedule";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet } from "../../helpers";
export const protobufPackage = "neutron.cron";
/** The request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** The response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** The request type for the Query/Schedule RPC method. */
export interface QueryGetScheduleRequest {
  name: string;
}
/** The response type for the Query/Params RPC method. */
export interface QueryGetScheduleResponse {
  schedule: Schedule;
}
/** The request type for the Query/Schedules RPC method. */
export interface QuerySchedulesRequest {
  pagination?: PageRequest;
}
/** The response type for the Query/Params RPC method. */
export interface QuerySchedulesResponse {
  schedules: Schedule[];
  pagination?: PageResponse;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.cron.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/neutron.cron.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryGetScheduleRequest(): QueryGetScheduleRequest {
  return {
    name: "",
  };
}
export const QueryGetScheduleRequest = {
  typeUrl: "/neutron.cron.QueryGetScheduleRequest",
  encode(message: QueryGetScheduleRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetScheduleRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetScheduleRequest {
    const obj = createBaseQueryGetScheduleRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: QueryGetScheduleRequest): JsonSafe<QueryGetScheduleRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetScheduleRequest>, I>>(object: I): QueryGetScheduleRequest {
    const message = createBaseQueryGetScheduleRequest();
    message.name = object.name ?? "";
    return message;
  },
};
function createBaseQueryGetScheduleResponse(): QueryGetScheduleResponse {
  return {
    schedule: Schedule.fromPartial({}),
  };
}
export const QueryGetScheduleResponse = {
  typeUrl: "/neutron.cron.QueryGetScheduleResponse",
  encode(message: QueryGetScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetScheduleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetScheduleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedule = Schedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGetScheduleResponse {
    const obj = createBaseQueryGetScheduleResponse();
    if (isSet(object.schedule)) obj.schedule = Schedule.fromJSON(object.schedule);
    return obj;
  },
  toJSON(message: QueryGetScheduleResponse): JsonSafe<QueryGetScheduleResponse> {
    const obj: any = {};
    message.schedule !== undefined &&
      (obj.schedule = message.schedule ? Schedule.toJSON(message.schedule) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryGetScheduleResponse>, I>>(
    object: I,
  ): QueryGetScheduleResponse {
    const message = createBaseQueryGetScheduleResponse();
    if (object.schedule !== undefined && object.schedule !== null) {
      message.schedule = Schedule.fromPartial(object.schedule);
    }
    return message;
  },
};
function createBaseQuerySchedulesRequest(): QuerySchedulesRequest {
  return {
    pagination: undefined,
  };
}
export const QuerySchedulesRequest = {
  typeUrl: "/neutron.cron.QuerySchedulesRequest",
  encode(message: QuerySchedulesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySchedulesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchedulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySchedulesRequest {
    const obj = createBaseQuerySchedulesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QuerySchedulesRequest): JsonSafe<QuerySchedulesRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySchedulesRequest>, I>>(object: I): QuerySchedulesRequest {
    const message = createBaseQuerySchedulesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQuerySchedulesResponse(): QuerySchedulesResponse {
  return {
    schedules: [],
    pagination: undefined,
  };
}
export const QuerySchedulesResponse = {
  typeUrl: "/neutron.cron.QuerySchedulesResponse",
  encode(message: QuerySchedulesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.schedules) {
      Schedule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySchedulesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchedulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schedules.push(Schedule.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySchedulesResponse {
    const obj = createBaseQuerySchedulesResponse();
    if (Array.isArray(object?.schedules))
      obj.schedules = object.schedules.map((e: any) => Schedule.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QuerySchedulesResponse): JsonSafe<QuerySchedulesResponse> {
    const obj: any = {};
    if (message.schedules) {
      obj.schedules = message.schedules.map((e) => (e ? Schedule.toJSON(e) : undefined));
    } else {
      obj.schedules = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySchedulesResponse>, I>>(object: I): QuerySchedulesResponse {
    const message = createBaseQuerySchedulesResponse();
    message.schedules = object.schedules?.map((e) => Schedule.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
