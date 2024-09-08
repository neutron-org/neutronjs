/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Failure } from "./failure";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet } from "../../helpers";
export const protobufPackage = "neutron.contractmanager";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryFailuresRequest is request type for the Query/Failures RPC method. */
export interface QueryFailuresRequest {
  /** address of the contract which Sudo call failed. */
  address: string;
  pagination?: PageRequest;
}
/** QueryFailureRequest is request type for the Query/Failures RPC method. */
export interface QueryFailureRequest {
  /** address of the contract which Sudo call failed. */
  address: string;
  /** ID of the failure for the given contract. */
  failureId: bigint;
}
/** QueryFailureResponse is response type for the Query/Failure RPC method. */
export interface QueryFailureResponse {
  failure: Failure;
}
/** QueryFailuresResponse is response type for the Query/Failures RPC method. */
export interface QueryFailuresResponse {
  failures: Failure[];
  pagination?: PageResponse;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.contractmanager.QueryParamsRequest",
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
  typeUrl: "/neutron.contractmanager.QueryParamsResponse",
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
function createBaseQueryFailuresRequest(): QueryFailuresRequest {
  return {
    address: "",
    pagination: undefined,
  };
}
export const QueryFailuresRequest = {
  typeUrl: "/neutron.contractmanager.QueryFailuresRequest",
  encode(message: QueryFailuresRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFailuresRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFailuresRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFailuresRequest {
    const obj = createBaseQueryFailuresRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryFailuresRequest): JsonSafe<QueryFailuresRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFailuresRequest>, I>>(object: I): QueryFailuresRequest {
    const message = createBaseQueryFailuresRequest();
    message.address = object.address ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryFailureRequest(): QueryFailureRequest {
  return {
    address: "",
    failureId: BigInt(0),
  };
}
export const QueryFailureRequest = {
  typeUrl: "/neutron.contractmanager.QueryFailureRequest",
  encode(message: QueryFailureRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.failureId !== BigInt(0)) {
      writer.uint32(16).uint64(message.failureId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFailureRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFailureRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.failureId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFailureRequest {
    const obj = createBaseQueryFailureRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.failureId)) obj.failureId = BigInt(object.failureId.toString());
    return obj;
  },
  toJSON(message: QueryFailureRequest): JsonSafe<QueryFailureRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.failureId !== undefined && (obj.failureId = (message.failureId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFailureRequest>, I>>(object: I): QueryFailureRequest {
    const message = createBaseQueryFailureRequest();
    message.address = object.address ?? "";
    if (object.failureId !== undefined && object.failureId !== null) {
      message.failureId = BigInt(object.failureId.toString());
    }
    return message;
  },
};
function createBaseQueryFailureResponse(): QueryFailureResponse {
  return {
    failure: Failure.fromPartial({}),
  };
}
export const QueryFailureResponse = {
  typeUrl: "/neutron.contractmanager.QueryFailureResponse",
  encode(message: QueryFailureResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.failure !== undefined) {
      Failure.encode(message.failure, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFailureResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFailureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.failure = Failure.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFailureResponse {
    const obj = createBaseQueryFailureResponse();
    if (isSet(object.failure)) obj.failure = Failure.fromJSON(object.failure);
    return obj;
  },
  toJSON(message: QueryFailureResponse): JsonSafe<QueryFailureResponse> {
    const obj: any = {};
    message.failure !== undefined &&
      (obj.failure = message.failure ? Failure.toJSON(message.failure) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFailureResponse>, I>>(object: I): QueryFailureResponse {
    const message = createBaseQueryFailureResponse();
    if (object.failure !== undefined && object.failure !== null) {
      message.failure = Failure.fromPartial(object.failure);
    }
    return message;
  },
};
function createBaseQueryFailuresResponse(): QueryFailuresResponse {
  return {
    failures: [],
    pagination: undefined,
  };
}
export const QueryFailuresResponse = {
  typeUrl: "/neutron.contractmanager.QueryFailuresResponse",
  encode(message: QueryFailuresResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.failures) {
      Failure.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFailuresResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFailuresResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.failures.push(Failure.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryFailuresResponse {
    const obj = createBaseQueryFailuresResponse();
    if (Array.isArray(object?.failures)) obj.failures = object.failures.map((e: any) => Failure.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryFailuresResponse): JsonSafe<QueryFailuresResponse> {
    const obj: any = {};
    if (message.failures) {
      obj.failures = message.failures.map((e) => (e ? Failure.toJSON(e) : undefined));
    } else {
      obj.failures = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFailuresResponse>, I>>(object: I): QueryFailuresResponse {
    const message = createBaseQueryFailuresResponse();
    message.failures = object.failures?.map((e) => Failure.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
