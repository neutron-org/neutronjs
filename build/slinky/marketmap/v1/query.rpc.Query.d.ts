import { Rpc } from "../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { MarketMapRequest, MarketMapResponse, MarketsRequest, MarketsResponse, MarketRequest, MarketResponse, LastUpdatedRequest, LastUpdatedResponse, ParamsRequest, ParamsResponse } from "./query.js";
/** Query is the query service for the x/marketmap module. */
export interface Query {
    /**
     * MarketMap returns the full market map stored in the x/marketmap
     * module.  NOTE: the value returned by this query is not safe for on-chain
     * code.
     */
    marketMap(request?: MarketMapRequest): Promise<MarketMapResponse>;
    /**
     * Market returns all stored in the x/marketmap
     * module as a sorted list.
     */
    markets(request?: MarketsRequest): Promise<MarketsResponse>;
    /**
     * Market returns a market stored in the x/marketmap
     * module.
     */
    market(request: MarketRequest): Promise<MarketResponse>;
    /** LastUpdated returns the last height the market map was updated at. */
    lastUpdated(request?: LastUpdatedRequest): Promise<LastUpdatedResponse>;
    /** Params returns the current x/marketmap module parameters. */
    params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    marketMap(request?: MarketMapRequest): Promise<MarketMapResponse>;
    markets(request?: MarketsRequest): Promise<MarketsResponse>;
    market(request: MarketRequest): Promise<MarketResponse>;
    lastUpdated(request?: LastUpdatedRequest): Promise<LastUpdatedResponse>;
    params(request?: ParamsRequest): Promise<ParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    marketMap(request?: MarketMapRequest): Promise<MarketMapResponse>;
    markets(request?: MarketsRequest): Promise<MarketsResponse>;
    market(request: MarketRequest): Promise<MarketResponse>;
    lastUpdated(request?: LastUpdatedRequest): Promise<LastUpdatedResponse>;
    params(request?: ParamsRequest): Promise<ParamsResponse>;
};
