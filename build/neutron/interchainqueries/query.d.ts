import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination.js";
import { Params } from "./params.js";
import { RegisteredQuery } from "./genesis.js";
import { QueryResult } from "./tx.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { JsonSafe } from "../../json-safe.js";
import { DeepPartial, Exact } from "../../helpers.js";
export declare const protobufPackage = "neutron.interchainqueries";
/** Request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** Response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** Contains all parameters of the module. */
    params: Params;
}
/** Request type for the Query/RegisteredQueries RPC method. */
export interface QueryRegisteredQueriesRequest {
    /**
     * A list of owners of Interchain Queries. Query response will contain only Interchain Queries
     * that are owned by one of the owners in the list. If none, Interchain Queries are not filtered
     * out by the owner field.
     */
    owners: string[];
    /**
     * IBC connection ID. Query response will contain only Interchain Queries that have the same IBC
     * connection ID parameter. If none, Interchain Queries are not filtered out by the connection ID
     * field.
     */
    connectionId: string;
    /**
     * Pagination parameters for the request. Use values from previous response in the next request
     * in consecutive requests with paginated responses.
     */
    pagination?: PageRequest;
}
/** Response type for the Query/RegisteredQueries RPC method. */
export interface QueryRegisteredQueriesResponse {
    /** A list of registered Interchain Queries. */
    registeredQueries: RegisteredQuery[];
    /**
     * Current page information. Use values from previous response in the next request in consecutive
     * requests with paginated responses.
     */
    pagination?: PageResponse;
}
/** Request type for the Query/RegisteredQuery RPC method. */
export interface QueryRegisteredQueryRequest {
    /** ID of an Interchain Query. */
    queryId: bigint;
}
/** Response type for the Query/RegisteredQuery RPC method. */
export interface QueryRegisteredQueryResponse {
    /** A registered Interchain Query. */
    registeredQuery?: RegisteredQuery;
}
/** Request type for the Query/QueryResult RPC method. */
export interface QueryRegisteredQueryResultRequest {
    /** ID of an Interchain Query. */
    queryId: bigint;
}
/** Response type for the Query/QueryResult RPC method. */
export interface QueryRegisteredQueryResultResponse {
    /** The last successfully submitted result of an Interchain Query. */
    result?: QueryResult;
}
export interface Transaction {
    id: bigint;
    height: bigint;
    data: Uint8Array;
}
/** Request type for the Query/LastRemoteHeight RPC method. */
export interface QueryLastRemoteHeight {
    /**
     * Connection ID of an IBC connection to a remote chain. Determines the IBC client used in query
     * handling.
     */
    connectionId: string;
}
/** Response type for the Query/LastRemoteHeight RPC method. */
export interface QueryLastRemoteHeightResponse {
    /** The height of the chain that the IBC client is currently on. */
    height: bigint;
    /** The revision of the chain that the IBC client is currently on. */
    revision: bigint;
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
export declare const QueryRegisteredQueriesRequest: {
    typeUrl: string;
    encode(message: QueryRegisteredQueriesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueriesRequest;
    fromJSON(object: any): QueryRegisteredQueriesRequest;
    toJSON(message: QueryRegisteredQueriesRequest): JsonSafe<QueryRegisteredQueriesRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueriesRequest>, I>>(object: I): QueryRegisteredQueriesRequest;
};
export declare const QueryRegisteredQueriesResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredQueriesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueriesResponse;
    fromJSON(object: any): QueryRegisteredQueriesResponse;
    toJSON(message: QueryRegisteredQueriesResponse): JsonSafe<QueryRegisteredQueriesResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueriesResponse>, I>>(object: I): QueryRegisteredQueriesResponse;
};
export declare const QueryRegisteredQueryRequest: {
    typeUrl: string;
    encode(message: QueryRegisteredQueryRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueryRequest;
    fromJSON(object: any): QueryRegisteredQueryRequest;
    toJSON(message: QueryRegisteredQueryRequest): JsonSafe<QueryRegisteredQueryRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryRequest>, I>>(object: I): QueryRegisteredQueryRequest;
};
export declare const QueryRegisteredQueryResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredQueryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueryResponse;
    fromJSON(object: any): QueryRegisteredQueryResponse;
    toJSON(message: QueryRegisteredQueryResponse): JsonSafe<QueryRegisteredQueryResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryResponse>, I>>(object: I): QueryRegisteredQueryResponse;
};
export declare const QueryRegisteredQueryResultRequest: {
    typeUrl: string;
    encode(message: QueryRegisteredQueryResultRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueryResultRequest;
    fromJSON(object: any): QueryRegisteredQueryResultRequest;
    toJSON(message: QueryRegisteredQueryResultRequest): JsonSafe<QueryRegisteredQueryResultRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryResultRequest>, I>>(object: I): QueryRegisteredQueryResultRequest;
};
export declare const QueryRegisteredQueryResultResponse: {
    typeUrl: string;
    encode(message: QueryRegisteredQueryResultResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueryResultResponse;
    fromJSON(object: any): QueryRegisteredQueryResultResponse;
    toJSON(message: QueryRegisteredQueryResultResponse): JsonSafe<QueryRegisteredQueryResultResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryResultResponse>, I>>(object: I): QueryRegisteredQueryResultResponse;
};
export declare const Transaction: {
    typeUrl: string;
    encode(message: Transaction, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Transaction;
    fromJSON(object: any): Transaction;
    toJSON(message: Transaction): JsonSafe<Transaction>;
    fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction;
};
export declare const QueryLastRemoteHeight: {
    typeUrl: string;
    encode(message: QueryLastRemoteHeight, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastRemoteHeight;
    fromJSON(object: any): QueryLastRemoteHeight;
    toJSON(message: QueryLastRemoteHeight): JsonSafe<QueryLastRemoteHeight>;
    fromPartial<I extends Exact<DeepPartial<QueryLastRemoteHeight>, I>>(object: I): QueryLastRemoteHeight;
};
export declare const QueryLastRemoteHeightResponse: {
    typeUrl: string;
    encode(message: QueryLastRemoteHeightResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryLastRemoteHeightResponse;
    fromJSON(object: any): QueryLastRemoteHeightResponse;
    toJSON(message: QueryLastRemoteHeightResponse): JsonSafe<QueryLastRemoteHeightResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryLastRemoteHeightResponse>, I>>(object: I): QueryLastRemoteHeightResponse;
};
