//@ts-nocheck
/* eslint-disable */
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import {
  QueryVerifyStateValuesRequest,
  QueryVerifyStateValuesResponse,
  QueryConsensusStateRequest,
  QueryConsensusStateResponse,
} from "./query";
export interface Query {
  /** Verifies the values and returns an error if values cannot be verified. The query returns `QueryVerifyStateValuesResponse` response. */
  verifyStateValues(request: QueryVerifyStateValuesRequest): Promise<QueryVerifyStateValuesResponse>;
  /** Queries saved consensus state by the height. The query returns `QueryConsensusStateResponse` response. */
  queryConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.verifyStateValues = this.verifyStateValues.bind(this);
    this.queryConsensusState = this.queryConsensusState.bind(this);
  }
  verifyStateValues(request: QueryVerifyStateValuesRequest): Promise<QueryVerifyStateValuesResponse> {
    const data = QueryVerifyStateValuesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.state_verifier.v1.Query", "VerifyStateValues", data);
    return promise.then((data) => QueryVerifyStateValuesResponse.decode(new BinaryReader(data)));
  }
  queryConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> {
    const data = QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.state_verifier.v1.Query", "QueryConsensusState", data);
    return promise.then((data) => QueryConsensusStateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    verifyStateValues(request: QueryVerifyStateValuesRequest): Promise<QueryVerifyStateValuesResponse> {
      return queryService.verifyStateValues(request);
    },
    queryConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> {
      return queryService.queryConsensusState(request);
    },
  };
};
