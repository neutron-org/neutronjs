/* eslint-disable */
import { CurrencyPair } from "../../types/v1/currency_pair";
import { MarketMap, Market } from "./market";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "slinky.marketmap.v1";
/**
 * MarketMapRequest is the query request for the MarketMap query.
 * It takes no arguments.
 */
export interface MarketMapRequest {}
/** MarketMapResponse is the query response for the MarketMap query. */
export interface MarketMapResponse {
  /**
   * MarketMap defines the global set of market configurations for all providers
   * and markets.
   */
  marketMap: MarketMap;
  /**
   * LastUpdated is the last block height that the market map was updated.
   * This field can be used as an optimization for clients checking if there
   * is a new update to the map.
   */
  lastUpdated: bigint;
  /** ChainId is the chain identifier for the market map. */
  chainId: string;
}
/**
 * MarketRequest is the query request for the Market query.
 * It takes the currency pair of the market as an argument.
 */
export interface MarketRequest {
  /**
   * CurrencyPair is the currency pair associated with the market being
   * requested.
   */
  currencyPair: CurrencyPair;
}
/** MarketResponse is the query response for the Market query. */
export interface MarketResponse {
  /** Market is the configuration of a single market to be price-fetched for. */
  market: Market;
}
/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {}
/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
  params: Params;
}
/**
 * LastUpdatedRequest is the request type for the Query/LastUpdated RPC
 * method.
 */
export interface LastUpdatedRequest {}
/**
 * LastUpdatedResponse is the response type for the Query/LastUpdated RPC
 * method.
 */
export interface LastUpdatedResponse {
  lastUpdated: bigint;
}
function createBaseMarketMapRequest(): MarketMapRequest {
  return {};
}
export const MarketMapRequest = {
  typeUrl: "/slinky.marketmap.v1.MarketMapRequest",
  encode(_: MarketMapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketMapRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketMapRequest();
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
  fromJSON(_: any): MarketMapRequest {
    const obj = createBaseMarketMapRequest();
    return obj;
  },
  toJSON(_: MarketMapRequest): JsonSafe<MarketMapRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MarketMapRequest>, I>>(_: I): MarketMapRequest {
    const message = createBaseMarketMapRequest();
    return message;
  },
};
function createBaseMarketMapResponse(): MarketMapResponse {
  return {
    marketMap: MarketMap.fromPartial({}),
    lastUpdated: BigInt(0),
    chainId: "",
  };
}
export const MarketMapResponse = {
  typeUrl: "/slinky.marketmap.v1.MarketMapResponse",
  encode(message: MarketMapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketMap !== undefined) {
      MarketMap.encode(message.marketMap, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastUpdated !== BigInt(0)) {
      writer.uint32(16).uint64(message.lastUpdated);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketMapResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketMapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketMap = MarketMap.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastUpdated = reader.uint64();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MarketMapResponse {
    const obj = createBaseMarketMapResponse();
    if (isSet(object.marketMap)) obj.marketMap = MarketMap.fromJSON(object.marketMap);
    if (isSet(object.lastUpdated)) obj.lastUpdated = BigInt(object.lastUpdated.toString());
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: MarketMapResponse): JsonSafe<MarketMapResponse> {
    const obj: any = {};
    message.marketMap !== undefined &&
      (obj.marketMap = message.marketMap ? MarketMap.toJSON(message.marketMap) : undefined);
    message.lastUpdated !== undefined && (obj.lastUpdated = (message.lastUpdated || BigInt(0)).toString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MarketMapResponse>, I>>(object: I): MarketMapResponse {
    const message = createBaseMarketMapResponse();
    if (object.marketMap !== undefined && object.marketMap !== null) {
      message.marketMap = MarketMap.fromPartial(object.marketMap);
    }
    if (object.lastUpdated !== undefined && object.lastUpdated !== null) {
      message.lastUpdated = BigInt(object.lastUpdated.toString());
    }
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseMarketRequest(): MarketRequest {
  return {
    currencyPair: CurrencyPair.fromPartial({}),
  };
}
export const MarketRequest = {
  typeUrl: "/slinky.marketmap.v1.MarketRequest",
  encode(message: MarketRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currencyPair !== undefined) {
      CurrencyPair.encode(message.currencyPair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currencyPair = CurrencyPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MarketRequest {
    const obj = createBaseMarketRequest();
    if (isSet(object.currencyPair)) obj.currencyPair = CurrencyPair.fromJSON(object.currencyPair);
    return obj;
  },
  toJSON(message: MarketRequest): JsonSafe<MarketRequest> {
    const obj: any = {};
    message.currencyPair !== undefined &&
      (obj.currencyPair = message.currencyPair ? CurrencyPair.toJSON(message.currencyPair) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MarketRequest>, I>>(object: I): MarketRequest {
    const message = createBaseMarketRequest();
    if (object.currencyPair !== undefined && object.currencyPair !== null) {
      message.currencyPair = CurrencyPair.fromPartial(object.currencyPair);
    }
    return message;
  },
};
function createBaseMarketResponse(): MarketResponse {
  return {
    market: Market.fromPartial({}),
  };
}
export const MarketResponse = {
  typeUrl: "/slinky.marketmap.v1.MarketResponse",
  encode(message: MarketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.market !== undefined) {
      Market.encode(message.market, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MarketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.market = Market.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MarketResponse {
    const obj = createBaseMarketResponse();
    if (isSet(object.market)) obj.market = Market.fromJSON(object.market);
    return obj;
  },
  toJSON(message: MarketResponse): JsonSafe<MarketResponse> {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market ? Market.toJSON(message.market) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MarketResponse>, I>>(object: I): MarketResponse {
    const message = createBaseMarketResponse();
    if (object.market !== undefined && object.market !== null) {
      message.market = Market.fromPartial(object.market);
    }
    return message;
  },
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/slinky.marketmap.v1.ParamsRequest",
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
  typeUrl: "/slinky.marketmap.v1.ParamsResponse",
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
function createBaseLastUpdatedRequest(): LastUpdatedRequest {
  return {};
}
export const LastUpdatedRequest = {
  typeUrl: "/slinky.marketmap.v1.LastUpdatedRequest",
  encode(_: LastUpdatedRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastUpdatedRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastUpdatedRequest();
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
  fromJSON(_: any): LastUpdatedRequest {
    const obj = createBaseLastUpdatedRequest();
    return obj;
  },
  toJSON(_: LastUpdatedRequest): JsonSafe<LastUpdatedRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LastUpdatedRequest>, I>>(_: I): LastUpdatedRequest {
    const message = createBaseLastUpdatedRequest();
    return message;
  },
};
function createBaseLastUpdatedResponse(): LastUpdatedResponse {
  return {
    lastUpdated: BigInt(0),
  };
}
export const LastUpdatedResponse = {
  typeUrl: "/slinky.marketmap.v1.LastUpdatedResponse",
  encode(message: LastUpdatedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastUpdated !== BigInt(0)) {
      writer.uint32(8).uint64(message.lastUpdated);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastUpdatedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastUpdatedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastUpdated = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LastUpdatedResponse {
    const obj = createBaseLastUpdatedResponse();
    if (isSet(object.lastUpdated)) obj.lastUpdated = BigInt(object.lastUpdated.toString());
    return obj;
  },
  toJSON(message: LastUpdatedResponse): JsonSafe<LastUpdatedResponse> {
    const obj: any = {};
    message.lastUpdated !== undefined && (obj.lastUpdated = (message.lastUpdated || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LastUpdatedResponse>, I>>(object: I): LastUpdatedResponse {
    const message = createBaseLastUpdatedResponse();
    if (object.lastUpdated !== undefined && object.lastUpdated !== null) {
      message.lastUpdated = BigInt(object.lastUpdated.toString());
    }
    return message;
  },
};
/** Query is the query service for the x/marketmap module. */
export interface Query {
  /**
   * MarketMap returns the full market map stored in the x/marketmap
   * module.
   */
  MarketMap(request?: MarketMapRequest): Promise<MarketMapResponse>;
  /**
   * Market returns a market stored in the x/marketmap
   * module.
   */
  Market(request: MarketRequest): Promise<MarketResponse>;
  /** LastUpdated returns the last height the market map was updated at. */
  LastUpdated(request?: LastUpdatedRequest): Promise<LastUpdatedResponse>;
  /** Params returns the current x/marketmap module parameters. */
  Params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MarketMap = this.MarketMap.bind(this);
    this.Market = this.Market.bind(this);
    this.LastUpdated = this.LastUpdated.bind(this);
    this.Params = this.Params.bind(this);
  }
  MarketMap(request: MarketMapRequest = {}): Promise<MarketMapResponse> {
    const data = MarketMapRequest.encode(request).finish();
    const promise = this.rpc.request("slinky.marketmap.v1.Query", "MarketMap", data);
    return promise.then((data) => MarketMapResponse.decode(new BinaryReader(data)));
  }
  Market(request: MarketRequest): Promise<MarketResponse> {
    const data = MarketRequest.encode(request).finish();
    const promise = this.rpc.request("slinky.marketmap.v1.Query", "Market", data);
    return promise.then((data) => MarketResponse.decode(new BinaryReader(data)));
  }
  LastUpdated(request: LastUpdatedRequest = {}): Promise<LastUpdatedResponse> {
    const data = LastUpdatedRequest.encode(request).finish();
    const promise = this.rpc.request("slinky.marketmap.v1.Query", "LastUpdated", data);
    return promise.then((data) => LastUpdatedResponse.decode(new BinaryReader(data)));
  }
  Params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("slinky.marketmap.v1.Query", "Params", data);
    return promise.then((data) => ParamsResponse.decode(new BinaryReader(data)));
  }
}
