//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../helper-func-types.js";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryFailureRequest,
  QueryFailureResponse,
  QueryFailuresRequest,
  QueryFailuresResponse,
} from "./query.js";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package neutron.contractmanager
 * @see proto service: neutron.contractmanager.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "neutron.contractmanager.Query",
  method: "Params",
});
/**
 * Queries a Failure by contract address and failure ID.
 * @name getAddressFailure
 * @package neutron.contractmanager
 * @see proto service: neutron.contractmanager.AddressFailure
 */
export const getAddressFailure = buildQuery<QueryFailureRequest, QueryFailureResponse>({
  encode: QueryFailureRequest.encode,
  decode: QueryFailureResponse.decode,
  service: "neutron.contractmanager.Query",
  method: "AddressFailure",
});
/**
 * Queries Failures by contract address.
 * @name getAddressFailures
 * @package neutron.contractmanager
 * @see proto service: neutron.contractmanager.AddressFailures
 */
export const getAddressFailures = buildQuery<QueryFailuresRequest, QueryFailuresResponse>({
  encode: QueryFailuresRequest.encode,
  decode: QueryFailuresResponse.decode,
  service: "neutron.contractmanager.Query",
  method: "AddressFailures",
});
/**
 * Queries a list of Failures occurred on the network.
 * @name getFailures
 * @package neutron.contractmanager
 * @see proto service: neutron.contractmanager.Failures
 */
export const getFailures = buildQuery<QueryFailuresRequest, QueryFailuresResponse>({
  encode: QueryFailuresRequest.encode,
  decode: QueryFailuresResponse.decode,
  service: "neutron.contractmanager.Query",
  method: "Failures",
});
