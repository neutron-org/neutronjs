import { Rpc } from "../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { GetAllCurrencyPairsRequest, GetAllCurrencyPairsResponse, GetPriceRequest, GetPriceResponse, GetPricesRequest, GetPricesResponse, GetCurrencyPairMappingRequest, GetCurrencyPairMappingResponse, GetCurrencyPairMappingListRequest, GetCurrencyPairMappingListResponse } from "./query.js";
/** Query is the query service for the x/oracle module. */
export interface Query {
    /** Get all the currency pairs the x/oracle module is tracking price-data for. */
    getAllCurrencyPairs(request?: GetAllCurrencyPairsRequest): Promise<GetAllCurrencyPairsResponse>;
    /**
     * Given a CurrencyPair (or its identifier) return the latest QuotePrice for
     * that CurrencyPair.
     */
    getPrice(request: GetPriceRequest): Promise<GetPriceResponse>;
    getPrices(request: GetPricesRequest): Promise<GetPricesResponse>;
    /**
     * Get the mapping of currency pair ID -> currency pair. This is useful for
     * indexers that have access to the ID of a currency pair, but no way to get
     * the underlying currency pair from it.
     */
    getCurrencyPairMapping(request?: GetCurrencyPairMappingRequest): Promise<GetCurrencyPairMappingResponse>;
    /**
     * Get the mapping of currency pair ID <-> currency pair as a list. This is
     * useful for indexers that have access to the ID of a currency pair, but no
     * way to get the underlying currency pair from it.
     */
    getCurrencyPairMappingList(request?: GetCurrencyPairMappingListRequest): Promise<GetCurrencyPairMappingListResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    getAllCurrencyPairs(request?: GetAllCurrencyPairsRequest): Promise<GetAllCurrencyPairsResponse>;
    getPrice(request: GetPriceRequest): Promise<GetPriceResponse>;
    getPrices(request: GetPricesRequest): Promise<GetPricesResponse>;
    getCurrencyPairMapping(request?: GetCurrencyPairMappingRequest): Promise<GetCurrencyPairMappingResponse>;
    getCurrencyPairMappingList(request?: GetCurrencyPairMappingListRequest): Promise<GetCurrencyPairMappingListResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    getAllCurrencyPairs(request?: GetAllCurrencyPairsRequest): Promise<GetAllCurrencyPairsResponse>;
    getPrice(request: GetPriceRequest): Promise<GetPriceResponse>;
    getPrices(request: GetPricesRequest): Promise<GetPricesResponse>;
    getCurrencyPairMapping(request?: GetCurrencyPairMappingRequest): Promise<GetCurrencyPairMappingResponse>;
    getCurrencyPairMappingList(request?: GetCurrencyPairMappingListRequest): Promise<GetCurrencyPairMappingListResponse>;
};
