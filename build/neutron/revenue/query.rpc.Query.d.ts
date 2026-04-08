import { Rpc } from "../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryPaymentInfoRequest, QueryPaymentInfoResponse, QueryValidatorStatsRequest, QueryValidatorStatsResponse, QueryValidatorsStatsRequest, QueryValidatorsStatsResponse } from "./query.js";
/** Defines the Query interface of the module. */
export interface Query {
    /** Fetches the current parameters of the revenue module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Fetches the current payment info of the module such as payment schedule and revenue details. */
    paymentInfo(request?: QueryPaymentInfoRequest): Promise<QueryPaymentInfoResponse>;
    /** Fetches a given validator's stats from the revenue module's state. */
    validatorStats(request: QueryValidatorStatsRequest): Promise<QueryValidatorStatsResponse>;
    /** Fetches all validators' stats from the revenue module's state. */
    validatorsStats(request?: QueryValidatorsStatsRequest): Promise<QueryValidatorsStatsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    paymentInfo(request?: QueryPaymentInfoRequest): Promise<QueryPaymentInfoResponse>;
    validatorStats(request: QueryValidatorStatsRequest): Promise<QueryValidatorStatsResponse>;
    validatorsStats(request?: QueryValidatorsStatsRequest): Promise<QueryValidatorsStatsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    paymentInfo(request?: QueryPaymentInfoRequest): Promise<QueryPaymentInfoResponse>;
    validatorStats(request: QueryValidatorStatsRequest): Promise<QueryValidatorStatsResponse>;
    validatorsStats(request?: QueryValidatorsStatsRequest): Promise<QueryValidatorsStatsResponse>;
};
