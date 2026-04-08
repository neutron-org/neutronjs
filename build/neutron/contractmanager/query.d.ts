import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination.js";
import { Params } from "./params.js";
import { Failure } from "./failure.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { JsonSafe } from "../../json-safe.js";
import { DeepPartial, Exact } from "../../helpers.js";
export declare const protobufPackage = "neutron.contractmanager";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
/** QueryFailuresRequest is request type for the Query/Failures RPC method. */
export interface QueryFailuresRequest {
    /** address of the contract which Sudo call failed. */
    address: string;
    pagination?: PageRequest;
}
/** QueryFailureRequest is request type for the Query/Failures RPC method. */
export interface QueryFailureRequest {
    /** address of the contract which Sudo call failed. */
    address: string;
    /** ID of the failure for the given contract. */
    failureId: bigint;
}
/** QueryFailureResponse is response type for the Query/Failure RPC method. */
export interface QueryFailureResponse {
    failure: Failure;
}
/** QueryFailuresResponse is response type for the Query/Failures RPC method. */
export interface QueryFailuresResponse {
    failures: Failure[];
    pagination?: PageResponse;
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
export declare const QueryFailuresRequest: {
    typeUrl: string;
    encode(message: QueryFailuresRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFailuresRequest;
    fromJSON(object: any): QueryFailuresRequest;
    toJSON(message: QueryFailuresRequest): JsonSafe<QueryFailuresRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryFailuresRequest>, I>>(object: I): QueryFailuresRequest;
};
export declare const QueryFailureRequest: {
    typeUrl: string;
    encode(message: QueryFailureRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFailureRequest;
    fromJSON(object: any): QueryFailureRequest;
    toJSON(message: QueryFailureRequest): JsonSafe<QueryFailureRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryFailureRequest>, I>>(object: I): QueryFailureRequest;
};
export declare const QueryFailureResponse: {
    typeUrl: string;
    encode(message: QueryFailureResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFailureResponse;
    fromJSON(object: any): QueryFailureResponse;
    toJSON(message: QueryFailureResponse): JsonSafe<QueryFailureResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryFailureResponse>, I>>(object: I): QueryFailureResponse;
};
export declare const QueryFailuresResponse: {
    typeUrl: string;
    encode(message: QueryFailuresResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFailuresResponse;
    fromJSON(object: any): QueryFailuresResponse;
    toJSON(message: QueryFailuresResponse): JsonSafe<QueryFailuresResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryFailuresResponse>, I>>(object: I): QueryFailuresResponse;
};
