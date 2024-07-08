/* eslint-disable */
import { PriceFeedSLA, PriceFeed, Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
export const protobufPackage = "slinky.sla.v1";
/** QueryAllSLAsRequest is the request type for the Query/GetAllSLAs RPC method. */
export interface GetAllSLAsRequest {}
/**
 * QueryAllSLAsResponse is the response type for the Query/GetAllSLAs RPC
 * method.
 */
export interface GetAllSLAsResponse {
  slas: PriceFeedSLA[];
}
/**
 * QueryGetPriceFeedsRequest is the request type for the Query/GetPriceFeeds RPC
 * method.
 */
export interface GetPriceFeedsRequest {
  /** ID defines the SLA to query price feeds for. */
  id: string;
}
/**
 * QueryGetPriceFeedsResponse is the response type for the Query/GetPriceFeeds
 * RPC method.
 */
export interface GetPriceFeedsResponse {
  /** PriceFeeds defines the price feeds for the given SLA. */
  priceFeeds: PriceFeed[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
  params: Params;
}
function createBaseGetAllSLAsRequest(): GetAllSLAsRequest {
  return {};
}
export const GetAllSLAsRequest = {
  typeUrl: "/slinky.sla.v1.GetAllSLAsRequest",
  encode(_: GetAllSLAsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAllSLAsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllSLAsRequest();
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
  fromJSON(_: any): GetAllSLAsRequest {
    const obj = createBaseGetAllSLAsRequest();
    return obj;
  },
  toJSON(_: GetAllSLAsRequest): JsonSafe<GetAllSLAsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAllSLAsRequest>, I>>(_: I): GetAllSLAsRequest {
    const message = createBaseGetAllSLAsRequest();
    return message;
  },
};
function createBaseGetAllSLAsResponse(): GetAllSLAsResponse {
  return {
    slas: [],
  };
}
export const GetAllSLAsResponse = {
  typeUrl: "/slinky.sla.v1.GetAllSLAsResponse",
  encode(message: GetAllSLAsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.slas) {
      PriceFeedSLA.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAllSLAsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllSLAsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slas.push(PriceFeedSLA.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetAllSLAsResponse {
    const obj = createBaseGetAllSLAsResponse();
    if (Array.isArray(object?.slas)) obj.slas = object.slas.map((e: any) => PriceFeedSLA.fromJSON(e));
    return obj;
  },
  toJSON(message: GetAllSLAsResponse): JsonSafe<GetAllSLAsResponse> {
    const obj: any = {};
    if (message.slas) {
      obj.slas = message.slas.map((e) => (e ? PriceFeedSLA.toJSON(e) : undefined));
    } else {
      obj.slas = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAllSLAsResponse>, I>>(object: I): GetAllSLAsResponse {
    const message = createBaseGetAllSLAsResponse();
    message.slas = object.slas?.map((e) => PriceFeedSLA.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGetPriceFeedsRequest(): GetPriceFeedsRequest {
  return {
    id: "",
  };
}
export const GetPriceFeedsRequest = {
  typeUrl: "/slinky.sla.v1.GetPriceFeedsRequest",
  encode(message: GetPriceFeedsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetPriceFeedsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPriceFeedsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetPriceFeedsRequest {
    const obj = createBaseGetPriceFeedsRequest();
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: GetPriceFeedsRequest): JsonSafe<GetPriceFeedsRequest> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetPriceFeedsRequest>, I>>(object: I): GetPriceFeedsRequest {
    const message = createBaseGetPriceFeedsRequest();
    message.id = object.id ?? "";
    return message;
  },
};
function createBaseGetPriceFeedsResponse(): GetPriceFeedsResponse {
  return {
    priceFeeds: [],
  };
}
export const GetPriceFeedsResponse = {
  typeUrl: "/slinky.sla.v1.GetPriceFeedsResponse",
  encode(message: GetPriceFeedsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceFeeds) {
      PriceFeed.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetPriceFeedsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPriceFeedsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceFeeds.push(PriceFeed.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetPriceFeedsResponse {
    const obj = createBaseGetPriceFeedsResponse();
    if (Array.isArray(object?.priceFeeds))
      obj.priceFeeds = object.priceFeeds.map((e: any) => PriceFeed.fromJSON(e));
    return obj;
  },
  toJSON(message: GetPriceFeedsResponse): JsonSafe<GetPriceFeedsResponse> {
    const obj: any = {};
    if (message.priceFeeds) {
      obj.priceFeeds = message.priceFeeds.map((e) => (e ? PriceFeed.toJSON(e) : undefined));
    } else {
      obj.priceFeeds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetPriceFeedsResponse>, I>>(object: I): GetPriceFeedsResponse {
    const message = createBaseGetPriceFeedsResponse();
    message.priceFeeds = object.priceFeeds?.map((e) => PriceFeed.fromPartial(e)) || [];
    return message;
  },
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/slinky.sla.v1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromJSON(_: any): ParamsRequest {
    const obj = createBaseParamsRequest();
    return obj;
  },
  toJSON(_: ParamsRequest): JsonSafe<ParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const ParamsResponse = {
  typeUrl: "/slinky.sla.v1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
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
  fromJSON(object: any): ParamsResponse {
    const obj = createBaseParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: ParamsResponse): JsonSafe<ParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
