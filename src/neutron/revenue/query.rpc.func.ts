//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../helper-func-types.js";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryPaymentInfoRequest,
  QueryPaymentInfoResponse,
  QueryValidatorStatsRequest,
  QueryValidatorStatsResponse,
  QueryValidatorsStatsRequest,
  QueryValidatorsStatsResponse,
} from "./query.js";
/**
 * Fetches the current parameters of the revenue module.
 * @name getParams
 * @package neutron.revenue
 * @see proto service: neutron.revenue.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "neutron.revenue.Query",
  method: "Params",
});
/**
 * Fetches the current payment info of the module such as payment schedule and revenue details.
 * @name getPaymentInfo
 * @package neutron.revenue
 * @see proto service: neutron.revenue.PaymentInfo
 */
export const getPaymentInfo = buildQuery<QueryPaymentInfoRequest, QueryPaymentInfoResponse>({
  encode: QueryPaymentInfoRequest.encode,
  decode: QueryPaymentInfoResponse.decode,
  service: "neutron.revenue.Query",
  method: "PaymentInfo",
});
/**
 * Fetches a given validator's stats from the revenue module's state.
 * @name getValidatorStats
 * @package neutron.revenue
 * @see proto service: neutron.revenue.ValidatorStats
 */
export const getValidatorStats = buildQuery<QueryValidatorStatsRequest, QueryValidatorStatsResponse>({
  encode: QueryValidatorStatsRequest.encode,
  decode: QueryValidatorStatsResponse.decode,
  service: "neutron.revenue.Query",
  method: "ValidatorStats",
});
/**
 * Fetches all validators' stats from the revenue module's state.
 * @name getValidatorsStats
 * @package neutron.revenue
 * @see proto service: neutron.revenue.ValidatorsStats
 */
export const getValidatorsStats = buildQuery<QueryValidatorsStatsRequest, QueryValidatorsStatsResponse>({
  encode: QueryValidatorsStatsRequest.encode,
  decode: QueryValidatorsStatsResponse.decode,
  service: "neutron.revenue.Query",
  method: "ValidatorsStats",
});
