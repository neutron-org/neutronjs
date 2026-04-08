import { Rpc } from "../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryVerifyStateValuesRequest, QueryVerifyStateValuesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse } from "./query.js";
export interface Query {
    /** Verifies the values and returns an error if values cannot be verified. The query returns `QueryVerifyStateValuesResponse` response. */
    verifyStateValues(request: QueryVerifyStateValuesRequest): Promise<QueryVerifyStateValuesResponse>;
    /** Queries saved consensus state by the height. The query returns `QueryConsensusStateResponse` response. */
    queryConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    verifyStateValues(request: QueryVerifyStateValuesRequest): Promise<QueryVerifyStateValuesResponse>;
    queryConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    verifyStateValues(request: QueryVerifyStateValuesRequest): Promise<QueryVerifyStateValuesResponse>;
    queryConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
};
