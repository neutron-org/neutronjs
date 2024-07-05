//@ts-nocheck
/* eslint-disable */
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
export const protobufPackage = "neutron.interchaintxs.v1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryInterchainAccountAddressRequest {
  /**
   * owner_address is the owner of the interchain account on the controller
   * chain
   */
  ownerAddress: string;
  /**
   * interchain_account_id is an identifier of your interchain account from
   * which you want to execute msgs
   */
  interchainAccountId: string;
  /**
   * connection_id is an IBC connection identifier between Neutron and remote
   * chain
   */
  connectionId: string;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponse {
  /** The corresponding interchain account address on the host chain */
  interchainAccountAddress: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.interchaintxs.v1.QueryParamsRequest",
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
  typeUrl: "/neutron.interchaintxs.v1.QueryParamsResponse",
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
function createBaseQueryInterchainAccountAddressRequest(): QueryInterchainAccountAddressRequest {
  return {
    ownerAddress: "",
    interchainAccountId: "",
    connectionId: "",
  };
}
export const QueryInterchainAccountAddressRequest = {
  typeUrl: "/neutron.interchaintxs.v1.QueryInterchainAccountAddressRequest",
  encode(
    message: QueryInterchainAccountAddressRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.ownerAddress !== "") {
      writer.uint32(10).string(message.ownerAddress);
    }
    if (message.interchainAccountId !== "") {
      writer.uint32(18).string(message.interchainAccountId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownerAddress = reader.string();
          break;
        case 2:
          message.interchainAccountId = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInterchainAccountAddressRequest {
    const obj = createBaseQueryInterchainAccountAddressRequest();
    if (isSet(object.ownerAddress)) obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.interchainAccountId)) obj.interchainAccountId = String(object.interchainAccountId);
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    return obj;
  },
  toJSON(message: QueryInterchainAccountAddressRequest): JsonSafe<QueryInterchainAccountAddressRequest> {
    const obj: any = {};
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.interchainAccountId !== undefined && (obj.interchainAccountId = message.interchainAccountId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountAddressRequest>, I>>(
    object: I,
  ): QueryInterchainAccountAddressRequest {
    const message = createBaseQueryInterchainAccountAddressRequest();
    message.ownerAddress = object.ownerAddress ?? "";
    message.interchainAccountId = object.interchainAccountId ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};
function createBaseQueryInterchainAccountAddressResponse(): QueryInterchainAccountAddressResponse {
  return {
    interchainAccountAddress: "",
  };
}
export const QueryInterchainAccountAddressResponse = {
  typeUrl: "/neutron.interchaintxs.v1.QueryInterchainAccountAddressResponse",
  encode(
    message: QueryInterchainAccountAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.interchainAccountAddress !== "") {
      writer.uint32(10).string(message.interchainAccountAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interchainAccountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryInterchainAccountAddressResponse {
    const obj = createBaseQueryInterchainAccountAddressResponse();
    if (isSet(object.interchainAccountAddress))
      obj.interchainAccountAddress = String(object.interchainAccountAddress);
    return obj;
  },
  toJSON(message: QueryInterchainAccountAddressResponse): JsonSafe<QueryInterchainAccountAddressResponse> {
    const obj: any = {};
    message.interchainAccountAddress !== undefined &&
      (obj.interchainAccountAddress = message.interchainAccountAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountAddressResponse>, I>>(
    object: I,
  ): QueryInterchainAccountAddressResponse {
    const message = createBaseQueryInterchainAccountAddressResponse();
    message.interchainAccountAddress = object.interchainAccountAddress ?? "";
    return message;
  },
};
