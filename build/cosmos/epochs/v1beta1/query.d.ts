import { EpochInfo } from "./genesis.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "cosmos.epochs.v1beta1";
/**
 * QueryEpochInfosRequest defines the gRPC request structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosRequest {
}
/**
 * QueryEpochInfosRequest defines the gRPC response structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosResponse {
    epochs: EpochInfo[];
}
/**
 * QueryCurrentEpochRequest defines the gRPC request structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochRequest {
    identifier: string;
}
/**
 * QueryCurrentEpochResponse defines the gRPC response structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochResponse {
    currentEpoch: bigint;
}
export declare const QueryEpochInfosRequest: {
    typeUrl: string;
    encode(_: QueryEpochInfosRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochInfosRequest;
    fromJSON(_: any): QueryEpochInfosRequest;
    toJSON(_: QueryEpochInfosRequest): JsonSafe<QueryEpochInfosRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryEpochInfosRequest>, I>>(_: I): QueryEpochInfosRequest;
};
export declare const QueryEpochInfosResponse: {
    typeUrl: string;
    encode(message: QueryEpochInfosResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochInfosResponse;
    fromJSON(object: any): QueryEpochInfosResponse;
    toJSON(message: QueryEpochInfosResponse): JsonSafe<QueryEpochInfosResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryEpochInfosResponse>, I>>(object: I): QueryEpochInfosResponse;
};
export declare const QueryCurrentEpochRequest: {
    typeUrl: string;
    encode(message: QueryCurrentEpochRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochRequest;
    fromJSON(object: any): QueryCurrentEpochRequest;
    toJSON(message: QueryCurrentEpochRequest): JsonSafe<QueryCurrentEpochRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryCurrentEpochRequest>, I>>(object: I): QueryCurrentEpochRequest;
};
export declare const QueryCurrentEpochResponse: {
    typeUrl: string;
    encode(message: QueryCurrentEpochResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochResponse;
    fromJSON(object: any): QueryCurrentEpochResponse;
    toJSON(message: QueryCurrentEpochResponse): JsonSafe<QueryCurrentEpochResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryCurrentEpochResponse>, I>>(object: I): QueryCurrentEpochResponse;
};
