import { Rpc } from "../../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryCounterpartyInfoRequest, QueryCounterpartyInfoResponse, QueryConfigRequest, QueryConfigResponse } from "./query.js";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** CounterpartyInfo queries an IBC light counter party info. */
    counterpartyInfo(request: QueryCounterpartyInfoRequest): Promise<QueryCounterpartyInfoResponse>;
    /** Config queries the IBC client v2 configuration for a given client. */
    config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    counterpartyInfo(request: QueryCounterpartyInfoRequest): Promise<QueryCounterpartyInfoResponse>;
    config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    counterpartyInfo(request: QueryCounterpartyInfoRequest): Promise<QueryCounterpartyInfoResponse>;
    config(request: QueryConfigRequest): Promise<QueryConfigResponse>;
};
