//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import {
  ParamsRequest,
  ParamsResponse,
  StateRequest,
  StateResponse,
  GasPriceRequest,
  GasPriceResponse,
  GasPricesRequest,
  GasPricesResponse,
} from "./query.js";
/**
 * Params returns the current feemarket module parameters.
 * @name getParams
 * @package feemarket.feemarket.v1
 * @see proto service: feemarket.feemarket.v1.Params
 */
export const getParams = buildQuery<ParamsRequest, ParamsResponse>({
  encode: ParamsRequest.encode,
  decode: ParamsResponse.decode,
  service: "feemarket.feemarket.v1.Query",
  method: "Params",
});
/**
 * State returns the current feemarket module state.
 * @name getState
 * @package feemarket.feemarket.v1
 * @see proto service: feemarket.feemarket.v1.State
 */
export const getState = buildQuery<StateRequest, StateResponse>({
  encode: StateRequest.encode,
  decode: StateResponse.decode,
  service: "feemarket.feemarket.v1.Query",
  method: "State",
});
/**
 * GasPrice returns the current feemarket module gas price
 * for specified denom.
 * @name getGasPrice
 * @package feemarket.feemarket.v1
 * @see proto service: feemarket.feemarket.v1.GasPrice
 */
export const getGasPrice = buildQuery<GasPriceRequest, GasPriceResponse>({
  encode: GasPriceRequest.encode,
  decode: GasPriceResponse.decode,
  service: "feemarket.feemarket.v1.Query",
  method: "GasPrice",
});
/**
 * GasPrices returns the current feemarket module list of gas prices
 * in all available denoms.
 * @name getGasPrices
 * @package feemarket.feemarket.v1
 * @see proto service: feemarket.feemarket.v1.GasPrices
 */
export const getGasPrices = buildQuery<GasPricesRequest, GasPricesResponse>({
  encode: GasPricesRequest.encode,
  decode: GasPricesResponse.decode,
  service: "feemarket.feemarket.v1.Query",
  method: "GasPrices",
});
