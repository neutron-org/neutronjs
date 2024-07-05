//@ts-nocheck
/* eslint-disable */
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { GetTxDistributionRequest, GetTxDistributionResponse } from "./query";
/** Service defines the gRPC querier service for the Block SDK mempool. */
export interface Service {
  /** GetTxDistribution returns the distribution of transactions in the mempool. */
  getTxDistribution(request?: GetTxDistributionRequest): Promise<GetTxDistributionResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.getTxDistribution = this.getTxDistribution.bind(this);
  }
  getTxDistribution(request: GetTxDistributionRequest = {}): Promise<GetTxDistributionResponse> {
    const data = GetTxDistributionRequest.encode(request).finish();
    const promise = this.rpc.request("sdk.mempool.v1.Service", "GetTxDistribution", data);
    return promise.then((data) => GetTxDistributionResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    getTxDistribution(request?: GetTxDistributionRequest): Promise<GetTxDistributionResponse> {
      return queryService.getTxDistribution(request);
    },
  };
};
