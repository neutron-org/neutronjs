import { Rpc } from "../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryCommunityPoolRequest, QueryCommunityPoolResponse, QueryContinuousFundRequest, QueryContinuousFundResponse, QueryContinuousFundsRequest, QueryContinuousFundsResponse, QueryParamsRequest, QueryParamsResponse } from "./query.js";
/** Query defines the gRPC querier service for community pool module. */
export interface Query {
    /** CommunityPool queries the community pool coins. */
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
    /** ContinuousFund queries a continuous fund by the recipient is is associated with. */
    continuousFund(request: QueryContinuousFundRequest): Promise<QueryContinuousFundResponse>;
    /** ContinuousFunds queries all continuous funds in the store. */
    continuousFunds(request?: QueryContinuousFundsRequest): Promise<QueryContinuousFundsResponse>;
    /** Params returns the total set of x/protocolpool parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
    continuousFund(request: QueryContinuousFundRequest): Promise<QueryContinuousFundResponse>;
    continuousFunds(request?: QueryContinuousFundsRequest): Promise<QueryContinuousFundsResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
    continuousFund(request: QueryContinuousFundRequest): Promise<QueryContinuousFundResponse>;
    continuousFunds(request?: QueryContinuousFundsRequest): Promise<QueryContinuousFundsResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
