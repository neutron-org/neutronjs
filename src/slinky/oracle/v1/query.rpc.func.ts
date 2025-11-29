//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import {
  GetAllCurrencyPairsRequest,
  GetAllCurrencyPairsResponse,
  GetPriceRequest,
  GetPriceResponse,
  GetPricesRequest,
  GetPricesResponse,
  GetCurrencyPairMappingRequest,
  GetCurrencyPairMappingResponse,
  GetCurrencyPairMappingListRequest,
  GetCurrencyPairMappingListResponse,
} from "./query.js";
/**
 * Get all the currency pairs the x/oracle module is tracking price-data for.
 * @name getGetAllCurrencyPairs
 * @package slinky.oracle.v1
 * @see proto service: slinky.oracle.v1.GetAllCurrencyPairs
 */
export const getGetAllCurrencyPairs = buildQuery<GetAllCurrencyPairsRequest, GetAllCurrencyPairsResponse>({
  encode: GetAllCurrencyPairsRequest.encode,
  decode: GetAllCurrencyPairsResponse.decode,
  service: "slinky.oracle.v1.Query",
  method: "GetAllCurrencyPairs",
});
/**
 * Given a CurrencyPair (or its identifier) return the latest QuotePrice for
 * that CurrencyPair.
 * @name getGetPrice
 * @package slinky.oracle.v1
 * @see proto service: slinky.oracle.v1.GetPrice
 */
export const getGetPrice = buildQuery<GetPriceRequest, GetPriceResponse>({
  encode: GetPriceRequest.encode,
  decode: GetPriceResponse.decode,
  service: "slinky.oracle.v1.Query",
  method: "GetPrice",
});
/**
 * @name getGetPrices
 * @package slinky.oracle.v1
 * @see proto service: slinky.oracle.v1.GetPrices
 */
export const getGetPrices = buildQuery<GetPricesRequest, GetPricesResponse>({
  encode: GetPricesRequest.encode,
  decode: GetPricesResponse.decode,
  service: "slinky.oracle.v1.Query",
  method: "GetPrices",
});
/**
 * Get the mapping of currency pair ID -> currency pair. This is useful for
 * indexers that have access to the ID of a currency pair, but no way to get
 * the underlying currency pair from it.
 * @name getGetCurrencyPairMapping
 * @package slinky.oracle.v1
 * @see proto service: slinky.oracle.v1.GetCurrencyPairMapping
 */
export const getGetCurrencyPairMapping = buildQuery<
  GetCurrencyPairMappingRequest,
  GetCurrencyPairMappingResponse
>({
  encode: GetCurrencyPairMappingRequest.encode,
  decode: GetCurrencyPairMappingResponse.decode,
  service: "slinky.oracle.v1.Query",
  method: "GetCurrencyPairMapping",
});
/**
 * Get the mapping of currency pair ID <-> currency pair as a list. This is
 * useful for indexers that have access to the ID of a currency pair, but no
 * way to get the underlying currency pair from it.
 * @name getGetCurrencyPairMappingList
 * @package slinky.oracle.v1
 * @see proto service: slinky.oracle.v1.GetCurrencyPairMappingList
 */
export const getGetCurrencyPairMappingList = buildQuery<
  GetCurrencyPairMappingListRequest,
  GetCurrencyPairMappingListResponse
>({
  encode: GetCurrencyPairMappingListRequest.encode,
  decode: GetCurrencyPairMappingListResponse.decode,
  service: "slinky.oracle.v1.Query",
  method: "GetCurrencyPairMappingList",
});
