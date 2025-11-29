//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import { QueryGetCountRequest, QueryGetCountResponse } from "./query.js";
/**
 * GetCount queries the parameters of x/Counter module.
 * @name getGetCount
 * @package cosmos.counter.v1
 * @see proto service: cosmos.counter.v1.GetCount
 */
export const getGetCount = buildQuery<QueryGetCountRequest, QueryGetCountResponse>({
  encode: QueryGetCountRequest.encode,
  decode: QueryGetCountResponse.decode,
  service: "cosmos.counter.v1.Query",
  method: "GetCount",
});
