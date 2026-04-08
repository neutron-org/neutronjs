import { Rpc } from "../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsResponse, StateRequest, StateResponse, GasPriceRequest, GasPriceResponse, GasPricesRequest, GasPricesResponse } from "./query.js";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    state(request?: StateRequest): Promise<StateResponse>;
    gasPrice(request: GasPriceRequest): Promise<GasPriceResponse>;
    gasPrices(request?: GasPricesRequest): Promise<GasPricesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: ParamsRequest): Promise<ParamsResponse>;
    state(request?: StateRequest): Promise<StateResponse>;
    gasPrice(request: GasPriceRequest): Promise<GasPriceResponse>;
    gasPrices(request?: GasPricesRequest): Promise<GasPricesResponse>;
};
