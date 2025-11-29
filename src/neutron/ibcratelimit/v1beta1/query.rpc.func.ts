//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import { QueryParamsRequest, QueryParamsResponse } from "./query.js";
/**
 * Params defines a gRPC query method that returns the ibc-rate-limit module's
 * parameters.
 * @name getParams
 * @package neutron.ibcratelimit.v1beta1
 * @see proto service: neutron.ibcratelimit.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "neutron.ibcratelimit.v1beta1.Query",
  method: "Params",
});
