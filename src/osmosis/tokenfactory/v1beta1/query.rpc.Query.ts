/* eslint-disable */
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
} from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Params defines a gRPC query method that returns the tokenfactory module's
   * parameters.
   */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * DenomAuthorityMetadata defines a gRPC query method for fetching
   * DenomAuthorityMetadata for a particular denom.
   */
  denomAuthorityMetadata(
    request: QueryDenomAuthorityMetadataRequest,
  ): Promise<QueryDenomAuthorityMetadataResponse>;
  /**
   * DenomsFromCreator defines a gRPC query method for fetching all
   * denominations created by a specific admin/creator.
   */
  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
  /**
   * BeforeSendHookAddress defines a gRPC query method for
   * getting the address registered for the before send hook.
   */
  beforeSendHookAddress(
    request: QueryBeforeSendHookAddressRequest,
  ): Promise<QueryBeforeSendHookAddressResponse>;
  /**
   * FullDenom defines a gRPC query method for getting full denom name
   * from the creator and subdenom strings.
   */
  fullDenom(request: QueryFullDenomRequest): Promise<QueryFullDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
    this.beforeSendHookAddress = this.beforeSendHookAddress.bind(this);
    this.fullDenom = this.fullDenom.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  denomAuthorityMetadata(
    request: QueryDenomAuthorityMetadataRequest,
  ): Promise<QueryDenomAuthorityMetadataResponse> {
    const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomAuthorityMetadata", data);
    return promise.then((data) => QueryDenomAuthorityMetadataResponse.decode(new BinaryReader(data)));
  }
  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
    const data = QueryDenomsFromCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomsFromCreator", data);
    return promise.then((data) => QueryDenomsFromCreatorResponse.decode(new BinaryReader(data)));
  }
  beforeSendHookAddress(
    request: QueryBeforeSendHookAddressRequest,
  ): Promise<QueryBeforeSendHookAddressResponse> {
    const data = QueryBeforeSendHookAddressRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "BeforeSendHookAddress", data);
    return promise.then((data) => QueryBeforeSendHookAddressResponse.decode(new BinaryReader(data)));
  }
  fullDenom(request: QueryFullDenomRequest): Promise<QueryFullDenomResponse> {
    const data = QueryFullDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "FullDenom", data);
    return promise.then((data) => QueryFullDenomResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    denomAuthorityMetadata(
      request: QueryDenomAuthorityMetadataRequest,
    ): Promise<QueryDenomAuthorityMetadataResponse> {
      return queryService.denomAuthorityMetadata(request);
    },
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
      return queryService.denomsFromCreator(request);
    },
    beforeSendHookAddress(
      request: QueryBeforeSendHookAddressRequest,
    ): Promise<QueryBeforeSendHookAddressResponse> {
      return queryService.beforeSendHookAddress(request);
    },
    fullDenom(request: QueryFullDenomRequest): Promise<QueryFullDenomResponse> {
      return queryService.fullDenom(request);
    },
  };
};
