//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../helper-func-types.js";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryTotalBurnedNeutronsAmountRequest,
  QueryTotalBurnedNeutronsAmountResponse,
} from "./query.js";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package neutron.feeburner
 * @see proto service: neutron.feeburner.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "neutron.feeburner.Query",
  method: "Params",
});
/**
 * TotalBurnedNeutronsAmount queries total amount of burned neutron fees.
 * @name getTotalBurnedNeutronsAmount
 * @package neutron.feeburner
 * @see proto service: neutron.feeburner.TotalBurnedNeutronsAmount
 */
export const getTotalBurnedNeutronsAmount = buildQuery<
  QueryTotalBurnedNeutronsAmountRequest,
  QueryTotalBurnedNeutronsAmountResponse
>({
  encode: QueryTotalBurnedNeutronsAmountRequest.encode,
  decode: QueryTotalBurnedNeutronsAmountResponse.decode,
  service: "neutron.feeburner.Query",
  method: "TotalBurnedNeutronsAmount",
});
