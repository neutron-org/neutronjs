/* eslint-disable */
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryStateRequest,
  QueryStateResponse,
  QueryValidatorStatsRequest,
  QueryValidatorStatsResponse,
  QueryValidatorsStatsRequest,
  QueryValidatorsStatsResponse,
} from "./query";
/** Defines the Query interface of the module. */
export interface Query {
  /** Fetches the current parameters of the revenue module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Fetches the current state of the revenue module. */
  state(request?: QueryStateRequest): Promise<QueryStateResponse>;
  /** Fetches a given validator's stats from the revenue module's state. */
  validatorStats(request: QueryValidatorStatsRequest): Promise<QueryValidatorStatsResponse>;
  /** Fetches all validators' stats from the revenue module's state. */
  validatorsStats(request?: QueryValidatorsStatsRequest): Promise<QueryValidatorsStatsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.state = this.state.bind(this);
    this.validatorStats = this.validatorStats.bind(this);
    this.validatorsStats = this.validatorsStats.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.revenue.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  state(request: QueryStateRequest = {}): Promise<QueryStateResponse> {
    const data = QueryStateRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.revenue.Query", "State", data);
    return promise.then((data) => QueryStateResponse.decode(new BinaryReader(data)));
  }
  validatorStats(request: QueryValidatorStatsRequest): Promise<QueryValidatorStatsResponse> {
    const data = QueryValidatorStatsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.revenue.Query", "ValidatorStats", data);
    return promise.then((data) => QueryValidatorStatsResponse.decode(new BinaryReader(data)));
  }
  validatorsStats(request: QueryValidatorsStatsRequest = {}): Promise<QueryValidatorsStatsResponse> {
    const data = QueryValidatorsStatsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.revenue.Query", "ValidatorsStats", data);
    return promise.then((data) => QueryValidatorsStatsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    state(request?: QueryStateRequest): Promise<QueryStateResponse> {
      return queryService.state(request);
    },
    validatorStats(request: QueryValidatorStatsRequest): Promise<QueryValidatorStatsResponse> {
      return queryService.validatorStats(request);
    },
    validatorsStats(request?: QueryValidatorsStatsRequest): Promise<QueryValidatorsStatsResponse> {
      return queryService.validatorsStats(request);
    },
  };
};
