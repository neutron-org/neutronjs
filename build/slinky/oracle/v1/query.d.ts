import { CurrencyPair } from "../../types/v1/currency_pair.js";
import { QuotePrice } from "./genesis.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "slinky.oracle.v1";
export interface GetAllCurrencyPairsRequest {
}
/**
 * GetAllCurrencyPairsResponse returns all CurrencyPairs that the module is
 * currently tracking.
 */
export interface GetAllCurrencyPairsResponse {
    currencyPairs: CurrencyPair[];
}
/**
 * GetPriceRequest either takes a CurrencyPair, or an identifier for the
 * CurrencyPair in the format base/quote.
 */
export interface GetPriceRequest {
    /** CurrencyPair represents the pair that the user wishes to query. */
    currencyPair: CurrencyPair;
}
/**
 * GetPriceResponse is the response from the GetPrice grpc method exposed from
 * the x/oracle query service.
 */
export interface GetPriceResponse {
    /**
     * QuotePrice represents the quote-price for the CurrencyPair given in
     * GetPriceRequest (possibly nil if no update has been made)
     */
    price?: QuotePrice;
    /** nonce represents the nonce for the CurrencyPair if it exists in state */
    nonce: bigint;
    /**
     * decimals represents the number of decimals that the quote-price is
     * represented in. For Pairs where ETHEREUM is the quote this will be 18,
     * otherwise it will be 8.
     */
    decimals: bigint;
    /** ID represents the identifier for the CurrencyPair. */
    id: bigint;
}
/**
 * GetPricesRequest takes an identifier for the CurrencyPair
 * in the format base/quote.
 */
export interface GetPricesRequest {
    currencyPairIds: string[];
}
/**
 * GetPricesResponse is the response from the GetPrices grpc method exposed from
 * the x/oracle query service.
 */
export interface GetPricesResponse {
    prices: GetPriceResponse[];
}
/** GetCurrencyPairMappingRequest is the GetCurrencyPairMapping request type. */
export interface GetCurrencyPairMappingRequest {
}
export interface GetCurrencyPairMappingResponse_CurrencyPairMappingEntry {
    key: bigint;
    value?: CurrencyPair;
}
/** GetCurrencyPairMappingResponse is the GetCurrencyPairMapping response type. */
export interface GetCurrencyPairMappingResponse {
    /**
     * currency_pair_mapping is a mapping of the id representing the currency pair
     * to the currency pair itself.
     */
    currencyPairMapping: {
        [key: bigint]: CurrencyPair;
    };
}
/** GetCurrencyPairMappingRequest is the GetCurrencyPairMapping request type. */
export interface GetCurrencyPairMappingListRequest {
}
export interface CurrencyPairMapping {
    /** ID is the unique identifier for this currency pair string. */
    id: bigint;
    /** CurrencyPair is the human-readable representation of the currency pair. */
    currencyPair: CurrencyPair;
}
/** GetCurrencyPairMappingResponse is the GetCurrencyPairMapping response type. */
export interface GetCurrencyPairMappingListResponse {
    /**
     * mappings is a list of the id representing the currency pair
     * to the currency pair itself.
     */
    mappings: CurrencyPairMapping[];
}
export declare const GetAllCurrencyPairsRequest: {
    typeUrl: string;
    encode(_: GetAllCurrencyPairsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetAllCurrencyPairsRequest;
    fromJSON(_: any): GetAllCurrencyPairsRequest;
    toJSON(_: GetAllCurrencyPairsRequest): JsonSafe<GetAllCurrencyPairsRequest>;
    fromPartial<I extends Exact<DeepPartial<GetAllCurrencyPairsRequest>, I>>(_: I): GetAllCurrencyPairsRequest;
};
export declare const GetAllCurrencyPairsResponse: {
    typeUrl: string;
    encode(message: GetAllCurrencyPairsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetAllCurrencyPairsResponse;
    fromJSON(object: any): GetAllCurrencyPairsResponse;
    toJSON(message: GetAllCurrencyPairsResponse): JsonSafe<GetAllCurrencyPairsResponse>;
    fromPartial<I extends Exact<DeepPartial<GetAllCurrencyPairsResponse>, I>>(object: I): GetAllCurrencyPairsResponse;
};
export declare const GetPriceRequest: {
    typeUrl: string;
    encode(message: GetPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetPriceRequest;
    fromJSON(object: any): GetPriceRequest;
    toJSON(message: GetPriceRequest): JsonSafe<GetPriceRequest>;
    fromPartial<I extends Exact<DeepPartial<GetPriceRequest>, I>>(object: I): GetPriceRequest;
};
export declare const GetPriceResponse: {
    typeUrl: string;
    encode(message: GetPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetPriceResponse;
    fromJSON(object: any): GetPriceResponse;
    toJSON(message: GetPriceResponse): JsonSafe<GetPriceResponse>;
    fromPartial<I extends Exact<DeepPartial<GetPriceResponse>, I>>(object: I): GetPriceResponse;
};
export declare const GetPricesRequest: {
    typeUrl: string;
    encode(message: GetPricesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetPricesRequest;
    fromJSON(object: any): GetPricesRequest;
    toJSON(message: GetPricesRequest): JsonSafe<GetPricesRequest>;
    fromPartial<I extends Exact<DeepPartial<GetPricesRequest>, I>>(object: I): GetPricesRequest;
};
export declare const GetPricesResponse: {
    typeUrl: string;
    encode(message: GetPricesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetPricesResponse;
    fromJSON(object: any): GetPricesResponse;
    toJSON(message: GetPricesResponse): JsonSafe<GetPricesResponse>;
    fromPartial<I extends Exact<DeepPartial<GetPricesResponse>, I>>(object: I): GetPricesResponse;
};
export declare const GetCurrencyPairMappingRequest: {
    typeUrl: string;
    encode(_: GetCurrencyPairMappingRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetCurrencyPairMappingRequest;
    fromJSON(_: any): GetCurrencyPairMappingRequest;
    toJSON(_: GetCurrencyPairMappingRequest): JsonSafe<GetCurrencyPairMappingRequest>;
    fromPartial<I extends Exact<DeepPartial<GetCurrencyPairMappingRequest>, I>>(_: I): GetCurrencyPairMappingRequest;
};
export declare const GetCurrencyPairMappingResponse_CurrencyPairMappingEntry: {
    encode(message: GetCurrencyPairMappingResponse_CurrencyPairMappingEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetCurrencyPairMappingResponse_CurrencyPairMappingEntry;
    fromJSON(object: any): GetCurrencyPairMappingResponse_CurrencyPairMappingEntry;
    toJSON(message: GetCurrencyPairMappingResponse_CurrencyPairMappingEntry): JsonSafe<GetCurrencyPairMappingResponse_CurrencyPairMappingEntry>;
    fromPartial<I extends Exact<DeepPartial<GetCurrencyPairMappingResponse_CurrencyPairMappingEntry>, I>>(object: I): GetCurrencyPairMappingResponse_CurrencyPairMappingEntry;
};
export declare const GetCurrencyPairMappingResponse: {
    typeUrl: string;
    encode(message: GetCurrencyPairMappingResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetCurrencyPairMappingResponse;
    fromJSON(object: any): GetCurrencyPairMappingResponse;
    toJSON(message: GetCurrencyPairMappingResponse): JsonSafe<GetCurrencyPairMappingResponse>;
    fromPartial<I extends Exact<DeepPartial<GetCurrencyPairMappingResponse>, I>>(object: I): GetCurrencyPairMappingResponse;
};
export declare const GetCurrencyPairMappingListRequest: {
    typeUrl: string;
    encode(_: GetCurrencyPairMappingListRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetCurrencyPairMappingListRequest;
    fromJSON(_: any): GetCurrencyPairMappingListRequest;
    toJSON(_: GetCurrencyPairMappingListRequest): JsonSafe<GetCurrencyPairMappingListRequest>;
    fromPartial<I extends Exact<DeepPartial<GetCurrencyPairMappingListRequest>, I>>(_: I): GetCurrencyPairMappingListRequest;
};
export declare const CurrencyPairMapping: {
    typeUrl: string;
    encode(message: CurrencyPairMapping, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CurrencyPairMapping;
    fromJSON(object: any): CurrencyPairMapping;
    toJSON(message: CurrencyPairMapping): JsonSafe<CurrencyPairMapping>;
    fromPartial<I extends Exact<DeepPartial<CurrencyPairMapping>, I>>(object: I): CurrencyPairMapping;
};
export declare const GetCurrencyPairMappingListResponse: {
    typeUrl: string;
    encode(message: GetCurrencyPairMappingListResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetCurrencyPairMappingListResponse;
    fromJSON(object: any): GetCurrencyPairMappingListResponse;
    toJSON(message: GetCurrencyPairMappingListResponse): JsonSafe<GetCurrencyPairMappingListResponse>;
    fromPartial<I extends Exact<DeepPartial<GetCurrencyPairMappingListResponse>, I>>(object: I): GetCurrencyPairMappingListResponse;
};
