//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../helper-func-types.js";
import { QueryParamsRequest, QueryParamsResponse, FeeInfoRequest, FeeInfoResponse } from "./query.js";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package neutron.feerefunder
 * @see proto service: neutron.feerefunder.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "neutron.feerefunder.Query",
  method: "Params",
});
/**
 * @name getFeeInfo
 * @package neutron.feerefunder
 * @see proto service: neutron.feerefunder.FeeInfo
 */
export const getFeeInfo = buildQuery<FeeInfoRequest, FeeInfoResponse>({
  encode: FeeInfoRequest.encode,
  decode: FeeInfoResponse.decode,
  service: "neutron.feerefunder.Query",
  method: "FeeInfo",
});
