//@ts-nocheck
/* eslint-disable */
import { Params } from "./controller.js";
import { BinaryReader, BinaryWriter } from "../../../../../binary.js";
import { isSet, DeepPartial, Exact } from "../../../../../helpers.js";
import { JsonSafe } from "../../../../../json-safe.js";
export const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
/**
 * QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method.
 * @name QueryInterchainAccountRequest
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest
 */
export interface QueryInterchainAccountRequest {
  owner: string;
  connectionId: string;
}
/**
 * QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method.
 * @name QueryInterchainAccountResponse
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse
 */
export interface QueryInterchainAccountResponse {
  address: string;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params?: Params;
}
function createBaseQueryInterchainAccountRequest(): QueryInterchainAccountRequest {
  return {
    owner: "",
    connectionId: "",
  };
}
/**
 * QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method.
 * @name QueryInterchainAccountRequest
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest
 */
export const QueryInterchainAccountRequest = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest",
  encode(message: QueryInterchainAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInterchainAccountRequest {
    const obj = createBaseQueryInterchainAccountRequest();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    return obj;
  },
  toJSON(message: QueryInterchainAccountRequest): JsonSafe<QueryInterchainAccountRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountRequest>, I>>(
    object: I,
  ): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};
function createBaseQueryInterchainAccountResponse(): QueryInterchainAccountResponse {
  return {
    address: "",
  };
}
/**
 * QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method.
 * @name QueryInterchainAccountResponse
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse
 */
export const QueryInterchainAccountResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse",
  encode(
    message: QueryInterchainAccountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInterchainAccountResponse {
    const obj = createBaseQueryInterchainAccountResponse();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryInterchainAccountResponse): JsonSafe<QueryInterchainAccountResponse> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountResponse>, I>>(
    object: I,
  ): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest",
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
    params: undefined,
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse",
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
