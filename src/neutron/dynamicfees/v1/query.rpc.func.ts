//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import { QueryParamsRequest, QueryParamsResponse } from "./query.js";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package neutron.dynamicfees.v1
 * @see proto service: neutron.dynamicfees.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "neutron.dynamicfees.v1.Query",
  method: "Params",
});
