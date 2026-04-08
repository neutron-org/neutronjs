import { Rpc } from "../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryGetCountRequest, QueryGetCountResponse } from "./query.js";
/** Query defines the gRPC querier service. */
export interface Query {
    /** GetCount queries the parameters of x/Counter module. */
    getCount(request?: QueryGetCountRequest): Promise<QueryGetCountResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    getCount(request?: QueryGetCountRequest): Promise<QueryGetCountResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    getCount(request?: QueryGetCountRequest): Promise<QueryGetCountResponse>;
};
