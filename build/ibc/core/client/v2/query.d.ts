import { CounterpartyInfo } from "./counterparty.js";
import { Config } from "./config.js";
import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { DeepPartial, Exact } from "../../../../helpers.js";
import { JsonSafe } from "../../../../json-safe.js";
export declare const protobufPackage = "ibc.core.client.v2";
/**
 * QueryCounterpartyInfoRequest is the request type for the Query/CounterpartyInfo RPC
 * method
 */
export interface QueryCounterpartyInfoRequest {
    /** client state unique identifier */
    clientId: string;
}
/**
 * QueryCounterpartyInfoResponse is the response type for the
 * Query/CounterpartyInfo RPC method.
 */
export interface QueryCounterpartyInfoResponse {
    counterpartyInfo?: CounterpartyInfo;
}
/** QueryConfigRequest is the request type for the Query/Config RPC method */
export interface QueryConfigRequest {
    /** client state unique identifier */
    clientId: string;
}
/** QueryConfigResponse is the response type for the Query/Config RPC method */
export interface QueryConfigResponse {
    config?: Config;
}
export declare const QueryCounterpartyInfoRequest: {
    typeUrl: string;
    encode(message: QueryCounterpartyInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyInfoRequest;
    fromJSON(object: any): QueryCounterpartyInfoRequest;
    toJSON(message: QueryCounterpartyInfoRequest): JsonSafe<QueryCounterpartyInfoRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryCounterpartyInfoRequest>, I>>(object: I): QueryCounterpartyInfoRequest;
};
export declare const QueryCounterpartyInfoResponse: {
    typeUrl: string;
    encode(message: QueryCounterpartyInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyInfoResponse;
    fromJSON(object: any): QueryCounterpartyInfoResponse;
    toJSON(message: QueryCounterpartyInfoResponse): JsonSafe<QueryCounterpartyInfoResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryCounterpartyInfoResponse>, I>>(object: I): QueryCounterpartyInfoResponse;
};
export declare const QueryConfigRequest: {
    typeUrl: string;
    encode(message: QueryConfigRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConfigRequest;
    fromJSON(object: any): QueryConfigRequest;
    toJSON(message: QueryConfigRequest): JsonSafe<QueryConfigRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryConfigRequest>, I>>(object: I): QueryConfigRequest;
};
export declare const QueryConfigResponse: {
    typeUrl: string;
    encode(message: QueryConfigResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConfigResponse;
    fromJSON(object: any): QueryConfigResponse;
    toJSON(message: QueryConfigResponse): JsonSafe<QueryConfigResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryConfigResponse>, I>>(object: I): QueryConfigResponse;
};
