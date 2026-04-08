import { Timestamp } from "../../../google/protobuf/timestamp.js";
import { MarketMap } from "../../marketmap/v1/market.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "slinky.service.v1";
/** QueryPricesRequest defines the request type for the the Prices method. */
export interface QueryPricesRequest {
}
export interface QueryPricesResponse_PricesEntry {
    key: string;
    value: string;
}
/** QueryPricesResponse defines the response type for the Prices method. */
export interface QueryPricesResponse {
    /** Prices defines the list of prices. */
    prices: {
        [key: string]: string;
    };
    /** Timestamp defines the timestamp of the prices. */
    timestamp: Timestamp;
    /** Version defines the version of the oracle service that provided the prices. */
    version: string;
}
/** QueryMarketMapRequest defines the request type for the MarketMap method. */
export interface QueryMarketMapRequest {
}
/** QueryMarketMapResponse defines the response type for the MarketMap method. */
export interface QueryMarketMapResponse {
    /** MarketMap defines the current market map configuration. */
    marketMap?: MarketMap;
}
/** QueryVersionRequest defines the request type for the Version method. */
export interface QueryVersionRequest {
}
/** QueryVersionResponse defines the response type for the Version method. */
export interface QueryVersionResponse {
    /** Version defines the current version of the oracle service. */
    version: string;
}
export declare const QueryPricesRequest: {
    typeUrl: string;
    encode(_: QueryPricesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPricesRequest;
    fromJSON(_: any): QueryPricesRequest;
    toJSON(_: QueryPricesRequest): JsonSafe<QueryPricesRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryPricesRequest>, I>>(_: I): QueryPricesRequest;
};
export declare const QueryPricesResponse_PricesEntry: {
    encode(message: QueryPricesResponse_PricesEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPricesResponse_PricesEntry;
    fromJSON(object: any): QueryPricesResponse_PricesEntry;
    toJSON(message: QueryPricesResponse_PricesEntry): JsonSafe<QueryPricesResponse_PricesEntry>;
    fromPartial<I extends Exact<DeepPartial<QueryPricesResponse_PricesEntry>, I>>(object: I): QueryPricesResponse_PricesEntry;
};
export declare const QueryPricesResponse: {
    typeUrl: string;
    encode(message: QueryPricesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPricesResponse;
    fromJSON(object: any): QueryPricesResponse;
    toJSON(message: QueryPricesResponse): JsonSafe<QueryPricesResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryPricesResponse>, I>>(object: I): QueryPricesResponse;
};
export declare const QueryMarketMapRequest: {
    typeUrl: string;
    encode(_: QueryMarketMapRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketMapRequest;
    fromJSON(_: any): QueryMarketMapRequest;
    toJSON(_: QueryMarketMapRequest): JsonSafe<QueryMarketMapRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryMarketMapRequest>, I>>(_: I): QueryMarketMapRequest;
};
export declare const QueryMarketMapResponse: {
    typeUrl: string;
    encode(message: QueryMarketMapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryMarketMapResponse;
    fromJSON(object: any): QueryMarketMapResponse;
    toJSON(message: QueryMarketMapResponse): JsonSafe<QueryMarketMapResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryMarketMapResponse>, I>>(object: I): QueryMarketMapResponse;
};
export declare const QueryVersionRequest: {
    typeUrl: string;
    encode(_: QueryVersionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVersionRequest;
    fromJSON(_: any): QueryVersionRequest;
    toJSON(_: QueryVersionRequest): JsonSafe<QueryVersionRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryVersionRequest>, I>>(_: I): QueryVersionRequest;
};
export declare const QueryVersionResponse: {
    typeUrl: string;
    encode(message: QueryVersionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVersionResponse;
    fromJSON(object: any): QueryVersionResponse;
    toJSON(message: QueryVersionResponse): JsonSafe<QueryVersionResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryVersionResponse>, I>>(object: I): QueryVersionResponse;
};
