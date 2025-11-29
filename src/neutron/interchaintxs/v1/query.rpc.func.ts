//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryInterchainAccountAddressRequest,
  QueryInterchainAccountAddressResponse,
} from "./query.js";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package neutron.interchaintxs.v1
 * @see proto service: neutron.interchaintxs.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "neutron.interchaintxs.v1.Query",
  method: "Params",
});
/**
 * @name getInterchainAccountAddress
 * @package neutron.interchaintxs.v1
 * @see proto service: neutron.interchaintxs.v1.InterchainAccountAddress
 */
export const getInterchainAccountAddress = buildQuery<
  QueryInterchainAccountAddressRequest,
  QueryInterchainAccountAddressResponse
>({
  encode: QueryInterchainAccountAddressRequest.encode,
  decode: QueryInterchainAccountAddressResponse.decode,
  service: "neutron.interchaintxs.v1.Query",
  method: "InterchainAccountAddress",
});
