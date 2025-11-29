//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import { GetTxDistributionRequest, GetTxDistributionResponse } from "./query.js";
/**
 * GetTxDistribution returns the distribution of transactions in the mempool.
 * @name getGetTxDistribution
 * @package sdk.mempool.v1
 * @see proto service: sdk.mempool.v1.GetTxDistribution
 */
export const getGetTxDistribution = buildQuery<GetTxDistributionRequest, GetTxDistributionResponse>({
  encode: GetTxDistributionRequest.encode,
  decode: GetTxDistributionResponse.decode,
  service: "sdk.mempool.v1.Service",
  method: "GetTxDistribution",
});
