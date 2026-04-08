import { Rpc } from "../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryFailureRequest, QueryFailureResponse, QueryFailuresRequest, QueryFailuresResponse } from "./query.js";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Failure by contract address and failure ID. */
    addressFailure(request: QueryFailureRequest): Promise<QueryFailureResponse>;
    /** Queries Failures by contract address. */
    addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    /** Queries a list of Failures occurred on the network. */
    failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    addressFailure(request: QueryFailureRequest): Promise<QueryFailureResponse>;
    addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    addressFailure(request: QueryFailureRequest): Promise<QueryFailureResponse>;
    addressFailures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
    failures(request: QueryFailuresRequest): Promise<QueryFailuresResponse>;
};
