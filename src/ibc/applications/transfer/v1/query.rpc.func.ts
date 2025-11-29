//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../../helper-func-types.js";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryDenomsRequest,
  QueryDenomsResponse,
  QueryDenomRequest,
  QueryDenomResponse,
  QueryDenomHashRequest,
  QueryDenomHashResponse,
  QueryEscrowAddressRequest,
  QueryEscrowAddressResponse,
  QueryTotalEscrowForDenomRequest,
  QueryTotalEscrowForDenomResponse,
} from "./query.js";
/**
 * Params queries all parameters of the ibc-transfer module.
 * @name getParams
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "Params",
});
/**
 * Denoms queries all denominations
 * @name getDenoms
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Denoms
 */
export const getDenoms = buildQuery<QueryDenomsRequest, QueryDenomsResponse>({
  encode: QueryDenomsRequest.encode,
  decode: QueryDenomsResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "Denoms",
});
/**
 * Denom queries a denomination
 * @name getDenom
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Denom
 */
export const getDenom = buildQuery<QueryDenomRequest, QueryDenomResponse>({
  encode: QueryDenomRequest.encode,
  decode: QueryDenomResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "Denom",
});
/**
 * DenomHash queries a denomination hash information.
 * @name getDenomHash
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.DenomHash
 */
export const getDenomHash = buildQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  encode: QueryDenomHashRequest.encode,
  decode: QueryDenomHashResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "DenomHash",
});
/**
 * EscrowAddress returns the escrow address for a particular port and channel id.
 * @name getEscrowAddress
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.EscrowAddress
 */
export const getEscrowAddress = buildQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  encode: QueryEscrowAddressRequest.encode,
  decode: QueryEscrowAddressResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "EscrowAddress",
});
/**
 * TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom.
 * @name getTotalEscrowForDenom
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.TotalEscrowForDenom
 */
export const getTotalEscrowForDenom = buildQuery<
  QueryTotalEscrowForDenomRequest,
  QueryTotalEscrowForDenomResponse
>({
  encode: QueryTotalEscrowForDenomRequest.encode,
  decode: QueryTotalEscrowForDenomResponse.decode,
  service: "ibc.applications.transfer.v1.Query",
  method: "TotalEscrowForDenom",
});
