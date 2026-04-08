import { Rpc } from "../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query.js";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Allowance returns granted allwance to the grantee by the granter. */
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
    /** Allowances returns all the grants for the given grantee address. */
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
    /** AllowancesByGranter returns all the grants given by an address */
    allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
    allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    allowance(request: QueryAllowanceRequest): Promise<QueryAllowanceResponse>;
    allowances(request: QueryAllowancesRequest): Promise<QueryAllowancesResponse>;
    allowancesByGranter(request: QueryAllowancesByGranterRequest): Promise<QueryAllowancesByGranterResponse>;
};
