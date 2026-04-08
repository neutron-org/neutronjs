import { Params } from "./params.js";
import { TotalBurnedNeutronsAmount } from "./total_burned_neutrons_amount.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { JsonSafe } from "../../json-safe.js";
import { DeepPartial, Exact } from "../../helpers.js";
export declare const protobufPackage = "neutron.feeburner";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequest {
}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponse {
    totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse;
};
export declare const QueryTotalBurnedNeutronsAmountRequest: {
    typeUrl: string;
    encode(_: QueryTotalBurnedNeutronsAmountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalBurnedNeutronsAmountRequest;
    fromJSON(_: any): QueryTotalBurnedNeutronsAmountRequest;
    toJSON(_: QueryTotalBurnedNeutronsAmountRequest): JsonSafe<QueryTotalBurnedNeutronsAmountRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryTotalBurnedNeutronsAmountRequest>, I>>(_: I): QueryTotalBurnedNeutronsAmountRequest;
};
export declare const QueryTotalBurnedNeutronsAmountResponse: {
    typeUrl: string;
    encode(message: QueryTotalBurnedNeutronsAmountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalBurnedNeutronsAmountResponse;
    fromJSON(object: any): QueryTotalBurnedNeutronsAmountResponse;
    toJSON(message: QueryTotalBurnedNeutronsAmountResponse): JsonSafe<QueryTotalBurnedNeutronsAmountResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryTotalBurnedNeutronsAmountResponse>, I>>(object: I): QueryTotalBurnedNeutronsAmountResponse;
};
