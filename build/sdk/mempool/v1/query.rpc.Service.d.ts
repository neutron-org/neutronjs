import { Rpc } from "../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { GetTxDistributionRequest, GetTxDistributionResponse } from "./query.js";
/** Service defines the gRPC querier service for the Block SDK mempool. */
export interface Service {
    /** GetTxDistribution returns the distribution of transactions in the mempool. */
    getTxDistribution(request?: GetTxDistributionRequest): Promise<GetTxDistributionResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    getTxDistribution(request?: GetTxDistributionRequest): Promise<GetTxDistributionResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    getTxDistribution(request?: GetTxDistributionRequest): Promise<GetTxDistributionResponse>;
};
