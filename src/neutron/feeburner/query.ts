//@ts-nocheck
/* eslint-disable */
import { Params } from "./params";
import { TotalBurnedNeutronsAmount } from "./total_burned_neutrons_amount";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet } from "../../helpers";
export const protobufPackage = "neutron.feeburner";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/**
 * QueryTotalBurnedNeutronsAmountRequest is request type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountRequest {}
/**
 * QueryTotalBurnedNeutronsAmountResponse is response type for the
 * Query/QueryTotalBurnedNeutronsAmount method.
 */
export interface QueryTotalBurnedNeutronsAmountResponse {
  totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.feeburner.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/neutron.feeburner.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
};
function createBaseQueryTotalBurnedNeutronsAmountRequest(): QueryTotalBurnedNeutronsAmountRequest {
  return {};
}
export const QueryTotalBurnedNeutronsAmountRequest = {
  typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountRequest",
  encode(
    _: QueryTotalBurnedNeutronsAmountRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalBurnedNeutronsAmountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBurnedNeutronsAmountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryTotalBurnedNeutronsAmountRequest {
    const obj = createBaseQueryTotalBurnedNeutronsAmountRequest();
    return obj;
  },
  toJSON(_: QueryTotalBurnedNeutronsAmountRequest): JsonSafe<QueryTotalBurnedNeutronsAmountRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalBurnedNeutronsAmountRequest>, I>>(
    _: I,
  ): QueryTotalBurnedNeutronsAmountRequest {
    const message = createBaseQueryTotalBurnedNeutronsAmountRequest();
    return message;
  },
  fromAmino(_: QueryTotalBurnedNeutronsAmountRequestAmino): QueryTotalBurnedNeutronsAmountRequest {
    const message = createBaseQueryTotalBurnedNeutronsAmountRequest();
    return message;
  },
  toAmino(_: QueryTotalBurnedNeutronsAmountRequest): QueryTotalBurnedNeutronsAmountRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalBurnedNeutronsAmountRequestAminoMsg): QueryTotalBurnedNeutronsAmountRequest {
    return QueryTotalBurnedNeutronsAmountRequest.fromAmino(object.value);
  },
};
function createBaseQueryTotalBurnedNeutronsAmountResponse(): QueryTotalBurnedNeutronsAmountResponse {
  return {
    totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount.fromPartial({}),
  };
}
export const QueryTotalBurnedNeutronsAmountResponse = {
  typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountResponse",
  encode(
    message: QueryTotalBurnedNeutronsAmountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.totalBurnedNeutronsAmount !== undefined) {
      TotalBurnedNeutronsAmount.encode(message.totalBurnedNeutronsAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalBurnedNeutronsAmountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBurnedNeutronsAmountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBurnedNeutronsAmount = TotalBurnedNeutronsAmount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalBurnedNeutronsAmountResponse {
    const obj = createBaseQueryTotalBurnedNeutronsAmountResponse();
    if (isSet(object.totalBurnedNeutronsAmount))
      obj.totalBurnedNeutronsAmount = TotalBurnedNeutronsAmount.fromJSON(object.totalBurnedNeutronsAmount);
    return obj;
  },
  toJSON(message: QueryTotalBurnedNeutronsAmountResponse): JsonSafe<QueryTotalBurnedNeutronsAmountResponse> {
    const obj: any = {};
    message.totalBurnedNeutronsAmount !== undefined &&
      (obj.totalBurnedNeutronsAmount = message.totalBurnedNeutronsAmount
        ? TotalBurnedNeutronsAmount.toJSON(message.totalBurnedNeutronsAmount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalBurnedNeutronsAmountResponse>, I>>(
    object: I,
  ): QueryTotalBurnedNeutronsAmountResponse {
    const message = createBaseQueryTotalBurnedNeutronsAmountResponse();
    if (object.totalBurnedNeutronsAmount !== undefined && object.totalBurnedNeutronsAmount !== null) {
      message.totalBurnedNeutronsAmount = TotalBurnedNeutronsAmount.fromPartial(
        object.totalBurnedNeutronsAmount,
      );
    }
    return message;
  },
  fromAmino(object: QueryTotalBurnedNeutronsAmountResponseAmino): QueryTotalBurnedNeutronsAmountResponse {
    const message = createBaseQueryTotalBurnedNeutronsAmountResponse();
    if (object.total_burned_neutrons_amount !== undefined && object.total_burned_neutrons_amount !== null) {
      message.totalBurnedNeutronsAmount = TotalBurnedNeutronsAmount.fromAmino(
        object.total_burned_neutrons_amount,
      );
    }
    return message;
  },
  toAmino(message: QueryTotalBurnedNeutronsAmountResponse): QueryTotalBurnedNeutronsAmountResponseAmino {
    const obj: any = {};
    obj.total_burned_neutrons_amount = message.totalBurnedNeutronsAmount
      ? TotalBurnedNeutronsAmount.toAmino(message.totalBurnedNeutronsAmount)
      : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryTotalBurnedNeutronsAmountResponseAminoMsg,
  ): QueryTotalBurnedNeutronsAmountResponse {
    return QueryTotalBurnedNeutronsAmountResponse.fromAmino(object.value);
  },
};
