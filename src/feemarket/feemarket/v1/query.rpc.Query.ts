/* eslint-disable */
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import {
  ParamsRequest,
  ParamsResponse,
  StateRequest,
  StateResponse,
  GasPriceRequest,
  GasPriceResponse,
  GasPricesRequest,
  GasPricesResponse,
} from "./query";
/** Query Service for the feemarket module. */
export interface Query {
  /** Params returns the current feemarket module parameters. */
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** State returns the current feemarket module state. */
  state(request?: StateRequest): Promise<StateResponse>;
  /**
   * GasPrice returns the current feemarket module gas price
   * for specified denom.
   */
  gasPrice(request: GasPriceRequest): Promise<GasPriceResponse>;
  /**
   * GasPrices returns the current feemarket module list of gas prices
   * in all available denoms.
   */
  gasPrices(request?: GasPricesRequest): Promise<GasPricesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.state = this.state.bind(this);
    this.gasPrice = this.gasPrice.bind(this);
    this.gasPrices = this.gasPrices.bind(this);
  }
  params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("feemarket.feemarket.v1.Query", "Params", data);
    return promise.then((data) => ParamsResponse.decode(new BinaryReader(data)));
  }
  state(request: StateRequest = {}): Promise<StateResponse> {
    const data = StateRequest.encode(request).finish();
    const promise = this.rpc.request("feemarket.feemarket.v1.Query", "State", data);
    return promise.then((data) => StateResponse.decode(new BinaryReader(data)));
  }
  gasPrice(request: GasPriceRequest): Promise<GasPriceResponse> {
    const data = GasPriceRequest.encode(request).finish();
    const promise = this.rpc.request("feemarket.feemarket.v1.Query", "GasPrice", data);
    return promise.then((data) => GasPriceResponse.decode(new BinaryReader(data)));
  }
  gasPrices(request: GasPricesRequest = {}): Promise<GasPricesResponse> {
    const data = GasPricesRequest.encode(request).finish();
    const promise = this.rpc.request("feemarket.feemarket.v1.Query", "GasPrices", data);
    return promise.then((data) => GasPricesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    state(request?: StateRequest): Promise<StateResponse> {
      return queryService.state(request);
    },
    gasPrice(request: GasPriceRequest): Promise<GasPriceResponse> {
      return queryService.gasPrice(request);
    },
    gasPrices(request?: GasPricesRequest): Promise<GasPricesResponse> {
      return queryService.gasPrices(request);
    },
  };
};
