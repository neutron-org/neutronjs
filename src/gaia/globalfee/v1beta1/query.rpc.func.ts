//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import { QueryParamsRequest, QueryParamsResponse } from "./query.js";
/**
 * @name getParams
 * @package gaia.globalfee.v1beta1
 * @see proto service: gaia.globalfee.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "gaia.globalfee.v1beta1.Query",
  method: "Params",
});
