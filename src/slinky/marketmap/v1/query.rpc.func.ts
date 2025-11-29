//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import {
  MarketMapRequest,
  MarketMapResponse,
  MarketsRequest,
  MarketsResponse,
  MarketRequest,
  MarketResponse,
  LastUpdatedRequest,
  LastUpdatedResponse,
  ParamsRequest,
  ParamsResponse,
} from "./query.js";
/**
 * MarketMap returns the full market map stored in the x/marketmap
 * module.  NOTE: the value returned by this query is not safe for on-chain
 * code.
 * @name getMarketMap
 * @package slinky.marketmap.v1
 * @see proto service: slinky.marketmap.v1.MarketMap
 */
export const getMarketMap = buildQuery<MarketMapRequest, MarketMapResponse>({
  encode: MarketMapRequest.encode,
  decode: MarketMapResponse.decode,
  service: "slinky.marketmap.v1.Query",
  method: "MarketMap",
});
/**
 * Market returns all stored in the x/marketmap
 * module as a sorted list.
 * @name getMarkets
 * @package slinky.marketmap.v1
 * @see proto service: slinky.marketmap.v1.Markets
 */
export const getMarkets = buildQuery<MarketsRequest, MarketsResponse>({
  encode: MarketsRequest.encode,
  decode: MarketsResponse.decode,
  service: "slinky.marketmap.v1.Query",
  method: "Markets",
});
/**
 * Market returns a market stored in the x/marketmap
 * module.
 * @name getMarket
 * @package slinky.marketmap.v1
 * @see proto service: slinky.marketmap.v1.Market
 */
export const getMarket = buildQuery<MarketRequest, MarketResponse>({
  encode: MarketRequest.encode,
  decode: MarketResponse.decode,
  service: "slinky.marketmap.v1.Query",
  method: "Market",
});
/**
 * LastUpdated returns the last height the market map was updated at.
 * @name getLastUpdated
 * @package slinky.marketmap.v1
 * @see proto service: slinky.marketmap.v1.LastUpdated
 */
export const getLastUpdated = buildQuery<LastUpdatedRequest, LastUpdatedResponse>({
  encode: LastUpdatedRequest.encode,
  decode: LastUpdatedResponse.decode,
  service: "slinky.marketmap.v1.Query",
  method: "LastUpdated",
});
/**
 * Params returns the current x/marketmap module parameters.
 * @name getParams
 * @package slinky.marketmap.v1
 * @see proto service: slinky.marketmap.v1.Params
 */
export const getParams = buildQuery<ParamsRequest, ParamsResponse>({
  encode: ParamsRequest.encode,
  decode: ParamsResponse.decode,
  service: "slinky.marketmap.v1.Query",
  method: "Params",
});
