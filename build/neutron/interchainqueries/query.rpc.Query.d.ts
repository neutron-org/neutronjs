import { Rpc } from "../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRegisteredQueriesRequest, QueryRegisteredQueriesResponse, QueryRegisteredQueryRequest, QueryRegisteredQueryResponse, QueryRegisteredQueryResultRequest, QueryRegisteredQueryResultResponse, QueryLastRemoteHeight, QueryLastRemoteHeightResponse } from "./query.js";
/** Defines the Query interface of the module. */
export interface Query {
    /** Fetches the current parameters of the interchainqueries module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * Retrieves all registered Interchain Queries in the module, with optional filtering by owner
     * and/or connection ID.
     */
    registeredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse>;
    /** Fetches details of a registered Interchain Query using its ID. */
    registeredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse>;
    /**
     * Retrieves the most recent successfully submitted result of an Interchain Query. This is only
     * applicable for KV Interchain Queries.
     */
    queryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse>;
    /**
     * Retrieves the most recent height of a remote chain as known by the IBC client associated with
     * a given connection ID.
     */
    lastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    registeredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse>;
    registeredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse>;
    queryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse>;
    lastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    registeredQueries(request: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponse>;
    registeredQuery(request: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponse>;
    queryResult(request: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponse>;
    lastRemoteHeight(request: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponse>;
};
