import { Rpc } from "../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QuerySubscribedContractsRequest, QuerySubscribedContractsResponse } from "./query.js";
/** Defines the Query interface of the module. */
export interface Query {
    /** Retrieves contracts subscribed to a specific hook type. */
    subscribedContracts(request: QuerySubscribedContractsRequest): Promise<QuerySubscribedContractsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    subscribedContracts(request: QuerySubscribedContractsRequest): Promise<QuerySubscribedContractsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    subscribedContracts(request: QuerySubscribedContractsRequest): Promise<QuerySubscribedContractsResponse>;
};
