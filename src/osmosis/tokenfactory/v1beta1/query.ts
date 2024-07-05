//@ts-nocheck
/* eslint-disable */
import { Params } from "../params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
export const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
  creator: string;
  subdenom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
  authorityMetadata: DenomAuthorityMetadata;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
  creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
  denoms: string[];
}
export interface QueryBeforeSendHookAddressRequest {
  creator: string;
  subdenom: string;
}
/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * DenomBeforeSendHook gRPC query.
 */
export interface QueryBeforeSendHookAddressResponse {
  contractAddr: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
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
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
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
function createBaseQueryDenomAuthorityMetadataRequest(): QueryDenomAuthorityMetadataRequest {
  return {
    creator: "",
    subdenom: "",
  };
}
export const QueryDenomAuthorityMetadataRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
  encode(
    message: QueryDenomAuthorityMetadataRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subdenom !== "") {
      writer.uint32(18).string(message.subdenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subdenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomAuthorityMetadataRequest {
    const obj = createBaseQueryDenomAuthorityMetadataRequest();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.subdenom)) obj.subdenom = String(object.subdenom);
    return obj;
  },
  toJSON(message: QueryDenomAuthorityMetadataRequest): JsonSafe<QueryDenomAuthorityMetadataRequest> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.subdenom !== undefined && (obj.subdenom = message.subdenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomAuthorityMetadataRequest>, I>>(
    object: I,
  ): QueryDenomAuthorityMetadataRequest {
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    message.creator = object.creator ?? "";
    message.subdenom = object.subdenom ?? "";
    return message;
  },
};
function createBaseQueryDenomAuthorityMetadataResponse(): QueryDenomAuthorityMetadataResponse {
  return {
    authorityMetadata: DenomAuthorityMetadata.fromPartial({}),
  };
}
export const QueryDenomAuthorityMetadataResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
  encode(
    message: QueryDenomAuthorityMetadataResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomAuthorityMetadataResponse {
    const obj = createBaseQueryDenomAuthorityMetadataResponse();
    if (isSet(object.authorityMetadata))
      obj.authorityMetadata = DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
    return obj;
  },
  toJSON(message: QueryDenomAuthorityMetadataResponse): JsonSafe<QueryDenomAuthorityMetadataResponse> {
    const obj: any = {};
    message.authorityMetadata !== undefined &&
      (obj.authorityMetadata = message.authorityMetadata
        ? DenomAuthorityMetadata.toJSON(message.authorityMetadata)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomAuthorityMetadataResponse>, I>>(
    object: I,
  ): QueryDenomAuthorityMetadataResponse {
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
      message.authorityMetadata = DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
    }
    return message;
  },
};
function createBaseQueryDenomsFromCreatorRequest(): QueryDenomsFromCreatorRequest {
  return {
    creator: "",
  };
}
export const QueryDenomsFromCreatorRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
  encode(message: QueryDenomsFromCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomsFromCreatorRequest {
    const obj = createBaseQueryDenomsFromCreatorRequest();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    return obj;
  },
  toJSON(message: QueryDenomsFromCreatorRequest): JsonSafe<QueryDenomsFromCreatorRequest> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomsFromCreatorRequest>, I>>(
    object: I,
  ): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    message.creator = object.creator ?? "";
    return message;
  },
};
function createBaseQueryDenomsFromCreatorResponse(): QueryDenomsFromCreatorResponse {
  return {
    denoms: [],
  };
}
export const QueryDenomsFromCreatorResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
  encode(
    message: QueryDenomsFromCreatorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomsFromCreatorResponse {
    const obj = createBaseQueryDenomsFromCreatorResponse();
    if (Array.isArray(object?.denoms)) obj.denoms = object.denoms.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryDenomsFromCreatorResponse): JsonSafe<QueryDenomsFromCreatorResponse> {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomsFromCreatorResponse>, I>>(
    object: I,
  ): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryBeforeSendHookAddressRequest(): QueryBeforeSendHookAddressRequest {
  return {
    creator: "",
    subdenom: "",
  };
}
export const QueryBeforeSendHookAddressRequest = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest",
  encode(
    message: QueryBeforeSendHookAddressRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.subdenom !== "") {
      writer.uint32(18).string(message.subdenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeforeSendHookAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeforeSendHookAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.subdenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBeforeSendHookAddressRequest {
    const obj = createBaseQueryBeforeSendHookAddressRequest();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    if (isSet(object.subdenom)) obj.subdenom = String(object.subdenom);
    return obj;
  },
  toJSON(message: QueryBeforeSendHookAddressRequest): JsonSafe<QueryBeforeSendHookAddressRequest> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.subdenom !== undefined && (obj.subdenom = message.subdenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeforeSendHookAddressRequest>, I>>(
    object: I,
  ): QueryBeforeSendHookAddressRequest {
    const message = createBaseQueryBeforeSendHookAddressRequest();
    message.creator = object.creator ?? "";
    message.subdenom = object.subdenom ?? "";
    return message;
  },
};
function createBaseQueryBeforeSendHookAddressResponse(): QueryBeforeSendHookAddressResponse {
  return {
    contractAddr: "",
  };
}
export const QueryBeforeSendHookAddressResponse = {
  typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse",
  encode(
    message: QueryBeforeSendHookAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBeforeSendHookAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBeforeSendHookAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBeforeSendHookAddressResponse {
    const obj = createBaseQueryBeforeSendHookAddressResponse();
    if (isSet(object.contractAddr)) obj.contractAddr = String(object.contractAddr);
    return obj;
  },
  toJSON(message: QueryBeforeSendHookAddressResponse): JsonSafe<QueryBeforeSendHookAddressResponse> {
    const obj: any = {};
    message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBeforeSendHookAddressResponse>, I>>(
    object: I,
  ): QueryBeforeSendHookAddressResponse {
    const message = createBaseQueryBeforeSendHookAddressResponse();
    message.contractAddr = object.contractAddr ?? "";
    return message;
  },
};
