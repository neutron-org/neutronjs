/* eslint-disable */
import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import {
  QueryNextFeeDistributionEstimateRequest,
  QueryNextFeeDistributionEstimateResponse,
  QueryParamsRequest,
  QueryParamsResponse,
  QueryProviderInfoRequest,
  QueryProviderInfoResponse,
  QueryThrottleStateRequest,
  QueryThrottleStateResponse,
} from "./query";
export interface Query {
  /**
   * ConsumerGenesis queries the genesis state needed to start a consumer chain
   * whose proposal has been accepted
   */
  queryNextFeeDistribution(
    request?: QueryNextFeeDistributionEstimateRequest,
  ): Promise<QueryNextFeeDistributionEstimateResponse>;
  /** QueryParams queries the ccv/consumer module parameters. */
  queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  queryProviderInfo(request?: QueryProviderInfoRequest): Promise<QueryProviderInfoResponse>;
  /** QueryThrottleState returns on-chain state relevant to throttled consumer packets */
  queryThrottleState(request?: QueryThrottleStateRequest): Promise<QueryThrottleStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.queryNextFeeDistribution = this.queryNextFeeDistribution.bind(this);
    this.queryParams = this.queryParams.bind(this);
    this.queryProviderInfo = this.queryProviderInfo.bind(this);
    this.queryThrottleState = this.queryThrottleState.bind(this);
  }
  queryNextFeeDistribution(
    request: QueryNextFeeDistributionEstimateRequest = {},
  ): Promise<QueryNextFeeDistributionEstimateResponse> {
    const data = QueryNextFeeDistributionEstimateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "interchain_security.ccv.consumer.v1.Query",
      "QueryNextFeeDistribution",
      data,
    );
    return promise.then((data) => QueryNextFeeDistributionEstimateResponse.decode(new BinaryReader(data)));
  }
  queryParams(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.consumer.v1.Query", "QueryParams", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  queryProviderInfo(request: QueryProviderInfoRequest = {}): Promise<QueryProviderInfoResponse> {
    const data = QueryProviderInfoRequest.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.consumer.v1.Query", "QueryProviderInfo", data);
    return promise.then((data) => QueryProviderInfoResponse.decode(new BinaryReader(data)));
  }
  queryThrottleState(request: QueryThrottleStateRequest = {}): Promise<QueryThrottleStateResponse> {
    const data = QueryThrottleStateRequest.encode(request).finish();
    const promise = this.rpc.request("interchain_security.ccv.consumer.v1.Query", "QueryThrottleState", data);
    return promise.then((data) => QueryThrottleStateResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    queryNextFeeDistribution(
      request?: QueryNextFeeDistributionEstimateRequest,
    ): Promise<QueryNextFeeDistributionEstimateResponse> {
      return queryService.queryNextFeeDistribution(request);
    },
    queryParams(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.queryParams(request);
    },
    queryProviderInfo(request?: QueryProviderInfoRequest): Promise<QueryProviderInfoResponse> {
      return queryService.queryProviderInfo(request);
    },
    queryThrottleState(request?: QueryThrottleStateRequest): Promise<QueryThrottleStateResponse> {
      return queryService.queryThrottleState(request);
    },
  };
};
