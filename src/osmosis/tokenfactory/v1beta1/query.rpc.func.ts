//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../../helper-func-types.js";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryDenomAuthorityMetadataRequest,
  QueryDenomAuthorityMetadataResponse,
  QueryDenomsFromCreatorRequest,
  QueryDenomsFromCreatorResponse,
  QueryBeforeSendHookAddressRequest,
  QueryBeforeSendHookAddressResponse,
  QueryFullDenomRequest,
  QueryFullDenomResponse,
} from "./query.js";
/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 * @name getParams
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "Params",
});
/**
 * DenomAuthorityMetadata defines a gRPC query method for fetching
 * DenomAuthorityMetadata for a particular denom.
 * @name getDenomAuthorityMetadata
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata
 */
export const getDenomAuthorityMetadata = buildQuery<
  QueryDenomAuthorityMetadataRequest,
  QueryDenomAuthorityMetadataResponse
>({
  encode: QueryDenomAuthorityMetadataRequest.encode,
  decode: QueryDenomAuthorityMetadataResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "DenomAuthorityMetadata",
});
/**
 * DenomsFromCreator defines a gRPC query method for fetching all
 * denominations created by a specific admin/creator.
 * @name getDenomsFromCreator
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.DenomsFromCreator
 */
export const getDenomsFromCreator = buildQuery<QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse>(
  {
    encode: QueryDenomsFromCreatorRequest.encode,
    decode: QueryDenomsFromCreatorResponse.decode,
    service: "osmosis.tokenfactory.v1beta1.Query",
    method: "DenomsFromCreator",
  },
);
/**
 * BeforeSendHookAddress defines a gRPC query method for
 * getting the address registered for the before send hook.
 * @name getBeforeSendHookAddress
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.BeforeSendHookAddress
 */
export const getBeforeSendHookAddress = buildQuery<
  QueryBeforeSendHookAddressRequest,
  QueryBeforeSendHookAddressResponse
>({
  encode: QueryBeforeSendHookAddressRequest.encode,
  decode: QueryBeforeSendHookAddressResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "BeforeSendHookAddress",
});
/**
 * FullDenom defines a gRPC query method for getting full denom name
 * from the creator and subdenom strings.
 * @name getFullDenom
 * @package osmosis.tokenfactory.v1beta1
 * @see proto service: osmosis.tokenfactory.v1beta1.FullDenom
 */
export const getFullDenom = buildQuery<QueryFullDenomRequest, QueryFullDenomResponse>({
  encode: QueryFullDenomRequest.encode,
  decode: QueryFullDenomResponse.decode,
  service: "osmosis.tokenfactory.v1beta1.Query",
  method: "FullDenom",
});
