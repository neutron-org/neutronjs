//@ts-nocheck
/* eslint-disable */
import { TxRpc } from "../../types.js";
import { BinaryReader } from "../../binary.js";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QuerySubscribedContractsRequest, QuerySubscribedContractsResponse } from "./query.js";
/** Defines the Query interface of the module. */
export interface Query {
  /** Retrieves contracts subscribed to a specific hook type. */
  subscribedContracts(request: QuerySubscribedContractsRequest): Promise<QuerySubscribedContractsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.subscribedContracts = this.subscribedContracts.bind(this);
  }
  subscribedContracts(request: QuerySubscribedContractsRequest): Promise<QuerySubscribedContractsResponse> {
    const data = QuerySubscribedContractsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.harpoon.Query", "SubscribedContracts", data);
    return promise.then((data) => QuerySubscribedContractsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    subscribedContracts(request: QuerySubscribedContractsRequest): Promise<QuerySubscribedContractsResponse> {
      return queryService.subscribedContracts(request);
    },
  };
};
