import { Params } from "./params.js";
import { State } from "./genesis.js";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "feemarket.feemarket.v1";
/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {
}
/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
    params: Params;
}
/** StateRequest is the request type for the Query/State RPC method. */
export interface StateRequest {
}
/** StateResponse is the response type for the Query/State RPC method. */
export interface StateResponse {
    state: State;
}
/** GasPriceRequest is the request type for the Query/GasPrice RPC method. */
export interface GasPriceRequest {
    /** denom we are querying gas price in */
    denom: string;
}
/**
 * GasPriceResponse is the response type for the Query/GasPrice RPC method.
 * Returns a gas price in specified denom.
 */
export interface GasPriceResponse {
    price: DecCoin;
}
/** GasPriceRequest is the request type for the Query/GasPrices RPC method. */
export interface GasPricesRequest {
}
/**
 * GasPricesResponse is the response type for the Query/GasPrices RPC method.
 * Returns a gas price in all available denoms.
 */
export interface GasPricesResponse {
    prices: DecCoin[];
}
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
export declare const StateRequest: {
    typeUrl: string;
    encode(_: StateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StateRequest;
    fromJSON(_: any): StateRequest;
    toJSON(_: StateRequest): JsonSafe<StateRequest>;
    fromPartial<I extends Exact<DeepPartial<StateRequest>, I>>(_: I): StateRequest;
};
export declare const StateResponse: {
    typeUrl: string;
    encode(message: StateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StateResponse;
    fromJSON(object: any): StateResponse;
    toJSON(message: StateResponse): JsonSafe<StateResponse>;
    fromPartial<I extends Exact<DeepPartial<StateResponse>, I>>(object: I): StateResponse;
};
export declare const GasPriceRequest: {
    typeUrl: string;
    encode(message: GasPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GasPriceRequest;
    fromJSON(object: any): GasPriceRequest;
    toJSON(message: GasPriceRequest): JsonSafe<GasPriceRequest>;
    fromPartial<I extends Exact<DeepPartial<GasPriceRequest>, I>>(object: I): GasPriceRequest;
};
export declare const GasPriceResponse: {
    typeUrl: string;
    encode(message: GasPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GasPriceResponse;
    fromJSON(object: any): GasPriceResponse;
    toJSON(message: GasPriceResponse): JsonSafe<GasPriceResponse>;
    fromPartial<I extends Exact<DeepPartial<GasPriceResponse>, I>>(object: I): GasPriceResponse;
};
export declare const GasPricesRequest: {
    typeUrl: string;
    encode(_: GasPricesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GasPricesRequest;
    fromJSON(_: any): GasPricesRequest;
    toJSON(_: GasPricesRequest): JsonSafe<GasPricesRequest>;
    fromPartial<I extends Exact<DeepPartial<GasPricesRequest>, I>>(_: I): GasPricesRequest;
};
export declare const GasPricesResponse: {
    typeUrl: string;
    encode(message: GasPricesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GasPricesResponse;
    fromJSON(object: any): GasPricesResponse;
    toJSON(message: GasPricesResponse): JsonSafe<GasPricesResponse>;
    fromPartial<I extends Exact<DeepPartial<GasPricesResponse>, I>>(object: I): GasPricesResponse;
};
