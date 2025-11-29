//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import { QueryParamsRequest, QueryParamsResponse } from "./query.js";
/**
 * Params queries the parameters of the x/auction module.
 * @name getParams
 * @package sdk.auction.v1
 * @see proto service: sdk.auction.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "sdk.auction.v1.Query",
  method: "Params",
});
