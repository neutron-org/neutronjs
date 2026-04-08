import { Params } from "../params.js";
import { DenomAuthorityMetadata } from "./authorityMetadata.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
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
 * QueryDenomsFromCreatorResponse defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
    denoms: string[];
}
/**
 * QueryBeforeSendHookAddressRequest defines the request structure for the
 * BeforeSendHookAddress gRPC query.
 */
export interface QueryBeforeSendHookAddressRequest {
    creator: string;
    subdenom: string;
}
/**
 * QueryBeforeSendHookAddressResponse defines the response structure for the
 * BeforeSendHookAddress gRPC query.
 */
export interface QueryBeforeSendHookAddressResponse {
    contractAddr: string;
}
/**
 * QueryFullDenomRequest defines the request structure for the
 * FullDenom gRPC query.
 */
export interface QueryFullDenomRequest {
    creator: string;
    subdenom: string;
}
/**
 * QueryFullDenomResponse defines the response structure for the
 * FullDenom gRPC query.
 */
export interface QueryFullDenomResponse {
    fullDenom: string;
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
export declare const QueryDenomAuthorityMetadataRequest: {
    typeUrl: string;
    encode(message: QueryDenomAuthorityMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest;
    fromJSON(object: any): QueryDenomAuthorityMetadataRequest;
    toJSON(message: QueryDenomAuthorityMetadataRequest): JsonSafe<QueryDenomAuthorityMetadataRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryDenomAuthorityMetadataRequest>, I>>(object: I): QueryDenomAuthorityMetadataRequest;
};
export declare const QueryDenomAuthorityMetadataResponse: {
    typeUrl: string;
    encode(message: QueryDenomAuthorityMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse;
    fromJSON(object: any): QueryDenomAuthorityMetadataResponse;
    toJSON(message: QueryDenomAuthorityMetadataResponse): JsonSafe<QueryDenomAuthorityMetadataResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryDenomAuthorityMetadataResponse>, I>>(object: I): QueryDenomAuthorityMetadataResponse;
};
export declare const QueryDenomsFromCreatorRequest: {
    typeUrl: string;
    encode(message: QueryDenomsFromCreatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest;
    fromJSON(object: any): QueryDenomsFromCreatorRequest;
    toJSON(message: QueryDenomsFromCreatorRequest): JsonSafe<QueryDenomsFromCreatorRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryDenomsFromCreatorRequest>, I>>(object: I): QueryDenomsFromCreatorRequest;
};
export declare const QueryDenomsFromCreatorResponse: {
    typeUrl: string;
    encode(message: QueryDenomsFromCreatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse;
    fromJSON(object: any): QueryDenomsFromCreatorResponse;
    toJSON(message: QueryDenomsFromCreatorResponse): JsonSafe<QueryDenomsFromCreatorResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryDenomsFromCreatorResponse>, I>>(object: I): QueryDenomsFromCreatorResponse;
};
export declare const QueryBeforeSendHookAddressRequest: {
    typeUrl: string;
    encode(message: QueryBeforeSendHookAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeforeSendHookAddressRequest;
    fromJSON(object: any): QueryBeforeSendHookAddressRequest;
    toJSON(message: QueryBeforeSendHookAddressRequest): JsonSafe<QueryBeforeSendHookAddressRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryBeforeSendHookAddressRequest>, I>>(object: I): QueryBeforeSendHookAddressRequest;
};
export declare const QueryBeforeSendHookAddressResponse: {
    typeUrl: string;
    encode(message: QueryBeforeSendHookAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBeforeSendHookAddressResponse;
    fromJSON(object: any): QueryBeforeSendHookAddressResponse;
    toJSON(message: QueryBeforeSendHookAddressResponse): JsonSafe<QueryBeforeSendHookAddressResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryBeforeSendHookAddressResponse>, I>>(object: I): QueryBeforeSendHookAddressResponse;
};
export declare const QueryFullDenomRequest: {
    typeUrl: string;
    encode(message: QueryFullDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFullDenomRequest;
    fromJSON(object: any): QueryFullDenomRequest;
    toJSON(message: QueryFullDenomRequest): JsonSafe<QueryFullDenomRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryFullDenomRequest>, I>>(object: I): QueryFullDenomRequest;
};
export declare const QueryFullDenomResponse: {
    typeUrl: string;
    encode(message: QueryFullDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFullDenomResponse;
    fromJSON(object: any): QueryFullDenomResponse;
    toJSON(message: QueryFullDenomResponse): JsonSafe<QueryFullDenomResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryFullDenomResponse>, I>>(object: I): QueryFullDenomResponse;
};
