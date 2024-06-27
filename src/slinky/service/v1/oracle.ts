/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { MarketMap } from "../../marketmap/v1/market";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, isObject, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
export const protobufPackage = "slinky.service.v1";
/** QueryPricesRequest defines the request type for the the Prices method. */
export interface QueryPricesRequest {}
export interface QueryPricesResponse_PricesEntry {
  key: string;
  value: string;
}
/** QueryPricesResponse defines the response type for the Prices method. */
export interface QueryPricesResponse {
  /** prices defines the list of prices. */
  prices: {
    [key: string]: string;
  };
  timestamp: Timestamp;
}
/** QueryMarketMapRequest defines the request type for the MarketMap method. */
export interface QueryMarketMapRequest {}
/** QueryMarketMapResponse defines the response type for the MarketMap method. */
export interface QueryMarketMapResponse {
  /** market_map defines the current market map configuration. */
  marketMap?: MarketMap;
}
function createBaseQueryPricesRequest(): QueryPricesRequest {
  return {};
}
export const QueryPricesRequest = {
  typeUrl: "/slinky.service.v1.QueryPricesRequest",
  encode(_: QueryPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesRequest();
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
  fromJSON(_: any): QueryPricesRequest {
    const obj = createBaseQueryPricesRequest();
    return obj;
  },
  toJSON(_: QueryPricesRequest): JsonSafe<QueryPricesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPricesRequest>, I>>(_: I): QueryPricesRequest {
    const message = createBaseQueryPricesRequest();
    return message;
  },
};
function createBaseQueryPricesResponse_PricesEntry(): QueryPricesResponse_PricesEntry {
  return {
    key: "",
    value: "",
  };
}
export const QueryPricesResponse_PricesEntry = {
  encode(
    message: QueryPricesResponse_PricesEntry,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPricesResponse_PricesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesResponse_PricesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPricesResponse_PricesEntry {
    const obj = createBaseQueryPricesResponse_PricesEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: QueryPricesResponse_PricesEntry): JsonSafe<QueryPricesResponse_PricesEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPricesResponse_PricesEntry>, I>>(
    object: I,
  ): QueryPricesResponse_PricesEntry {
    const message = createBaseQueryPricesResponse_PricesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};
function createBaseQueryPricesResponse(): QueryPricesResponse {
  return {
    prices: {},
    timestamp: Timestamp.fromPartial({}),
  };
}
export const QueryPricesResponse = {
  typeUrl: "/slinky.service.v1.QueryPricesResponse",
  encode(message: QueryPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.prices).forEach(([key, value]) => {
      QueryPricesResponse_PricesEntry.encode(
        {
          key: key as any,
          value,
        },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryPricesResponse_PricesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.prices[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPricesResponse {
    const obj = createBaseQueryPricesResponse();
    if (isObject(object.prices))
      obj.prices = Object.entries(object.prices).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {});
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(message: QueryPricesResponse): JsonSafe<QueryPricesResponse> {
    const obj: any = {};
    obj.prices = {};
    if (message.prices) {
      Object.entries(message.prices).forEach(([k, v]) => {
        obj.prices[k] = v;
      });
    }
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPricesResponse>, I>>(object: I): QueryPricesResponse {
    const message = createBaseQueryPricesResponse();
    message.prices = Object.entries(object.prices ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
};
function createBaseQueryMarketMapRequest(): QueryMarketMapRequest {
  return {};
}
export const QueryMarketMapRequest = {
  typeUrl: "/slinky.service.v1.QueryMarketMapRequest",
  encode(_: QueryMarketMapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketMapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketMapRequest();
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
  fromJSON(_: any): QueryMarketMapRequest {
    const obj = createBaseQueryMarketMapRequest();
    return obj;
  },
  toJSON(_: QueryMarketMapRequest): JsonSafe<QueryMarketMapRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMarketMapRequest>, I>>(_: I): QueryMarketMapRequest {
    const message = createBaseQueryMarketMapRequest();
    return message;
  },
};
function createBaseQueryMarketMapResponse(): QueryMarketMapResponse {
  return {
    marketMap: undefined,
  };
}
export const QueryMarketMapResponse = {
  typeUrl: "/slinky.service.v1.QueryMarketMapResponse",
  encode(message: QueryMarketMapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketMap !== undefined) {
      MarketMap.encode(message.marketMap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketMapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketMap = MarketMap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMarketMapResponse {
    const obj = createBaseQueryMarketMapResponse();
    if (isSet(object.marketMap)) obj.marketMap = MarketMap.fromJSON(object.marketMap);
    return obj;
  },
  toJSON(message: QueryMarketMapResponse): JsonSafe<QueryMarketMapResponse> {
    const obj: any = {};
    message.marketMap !== undefined &&
      (obj.marketMap = message.marketMap ? MarketMap.toJSON(message.marketMap) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMarketMapResponse>, I>>(object: I): QueryMarketMapResponse {
    const message = createBaseQueryMarketMapResponse();
    if (object.marketMap !== undefined && object.marketMap !== null) {
      message.marketMap = MarketMap.fromPartial(object.marketMap);
    }
    return message;
  },
};
