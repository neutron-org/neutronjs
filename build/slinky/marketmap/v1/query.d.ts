import { CurrencyPair } from "../../types/v1/currency_pair.js";
import { MarketMap, Market } from "./market.js";
import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "slinky.marketmap.v1";
/**
 * MarketMapRequest is the query request for the MarketMap query.
 * It takes no arguments.
 */
export interface MarketMapRequest {
}
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
/** MarketsRequest is the query request for the Market query. */
export interface MarketsRequest {
}
/** MarketsResponse is the query response for the Markets query. */
export interface MarketsResponse {
    /** Markets is a sorted list of all markets in the module. */
    markets: Market[];
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
export interface ParamsRequest {
}
/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
    params: Params;
}
/**
 * LastUpdatedRequest is the request type for the Query/LastUpdated RPC
 * method.
 */
export interface LastUpdatedRequest {
}
/**
 * LastUpdatedResponse is the response type for the Query/LastUpdated RPC
 * method.
 */
export interface LastUpdatedResponse {
    lastUpdated: bigint;
}
export declare const MarketMapRequest: {
    typeUrl: string;
    encode(_: MarketMapRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MarketMapRequest;
    fromJSON(_: any): MarketMapRequest;
    toJSON(_: MarketMapRequest): JsonSafe<MarketMapRequest>;
    fromPartial<I extends Exact<DeepPartial<MarketMapRequest>, I>>(_: I): MarketMapRequest;
};
export declare const MarketMapResponse: {
    typeUrl: string;
    encode(message: MarketMapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MarketMapResponse;
    fromJSON(object: any): MarketMapResponse;
    toJSON(message: MarketMapResponse): JsonSafe<MarketMapResponse>;
    fromPartial<I extends Exact<DeepPartial<MarketMapResponse>, I>>(object: I): MarketMapResponse;
};
export declare const MarketsRequest: {
    typeUrl: string;
    encode(_: MarketsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MarketsRequest;
    fromJSON(_: any): MarketsRequest;
    toJSON(_: MarketsRequest): JsonSafe<MarketsRequest>;
    fromPartial<I extends Exact<DeepPartial<MarketsRequest>, I>>(_: I): MarketsRequest;
};
export declare const MarketsResponse: {
    typeUrl: string;
    encode(message: MarketsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MarketsResponse;
    fromJSON(object: any): MarketsResponse;
    toJSON(message: MarketsResponse): JsonSafe<MarketsResponse>;
    fromPartial<I extends Exact<DeepPartial<MarketsResponse>, I>>(object: I): MarketsResponse;
};
export declare const MarketRequest: {
    typeUrl: string;
    encode(message: MarketRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MarketRequest;
    fromJSON(object: any): MarketRequest;
    toJSON(message: MarketRequest): JsonSafe<MarketRequest>;
    fromPartial<I extends Exact<DeepPartial<MarketRequest>, I>>(object: I): MarketRequest;
};
export declare const MarketResponse: {
    typeUrl: string;
    encode(message: MarketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MarketResponse;
    fromJSON(object: any): MarketResponse;
    toJSON(message: MarketResponse): JsonSafe<MarketResponse>;
    fromPartial<I extends Exact<DeepPartial<MarketResponse>, I>>(object: I): MarketResponse;
};
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): JsonSafe<ParamsRequest>;
    fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): JsonSafe<ParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse;
};
export declare const LastUpdatedRequest: {
    typeUrl: string;
    encode(_: LastUpdatedRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LastUpdatedRequest;
    fromJSON(_: any): LastUpdatedRequest;
    toJSON(_: LastUpdatedRequest): JsonSafe<LastUpdatedRequest>;
    fromPartial<I extends Exact<DeepPartial<LastUpdatedRequest>, I>>(_: I): LastUpdatedRequest;
};
export declare const LastUpdatedResponse: {
    typeUrl: string;
    encode(message: LastUpdatedResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LastUpdatedResponse;
    fromJSON(object: any): LastUpdatedResponse;
    toJSON(message: LastUpdatedResponse): JsonSafe<LastUpdatedResponse>;
    fromPartial<I extends Exact<DeepPartial<LastUpdatedResponse>, I>>(object: I): LastUpdatedResponse;
};
