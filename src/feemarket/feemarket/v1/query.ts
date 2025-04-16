//@ts-nocheck
/* eslint-disable */
import { Params } from "./params";
import { State } from "./genesis";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../helpers";
export const protobufPackage = "feemarket.feemarket.v1";
/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {}
/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
  params: Params;
}
/** StateRequest is the request type for the Query/State RPC method. */
export interface StateRequest {}
/** StateResponse is the response type for the Query/State RPC method. */
export interface StateResponse {
  state: State;
}
/** GasPriceRequest is the request type for the Query/GasPrice RPC method. */
export interface GasPriceRequest {
  /** denom we are querying gas price in */
  denom: string;
}
/**
 * GasPriceResponse is the response type for the Query/GasPrice RPC method.
 * Returns a gas price in specified denom.
 */
export interface GasPriceResponse {
  price: DecCoin;
}
/** GasPriceRequest is the request type for the Query/GasPrices RPC method. */
export interface GasPricesRequest {}
/**
 * GasPricesResponse is the response type for the Query/GasPrices RPC method.
 * Returns a gas price in all available denoms.
 */
export interface GasPricesResponse {
  prices: DecCoin[];
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/feemarket.feemarket.v1.ParamsRequest",
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromJSON(_: any): ParamsRequest {
    const obj = createBaseParamsRequest();
    return obj;
  },
  toJSON(_: ParamsRequest): JsonSafe<ParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const ParamsResponse = {
  typeUrl: "/feemarket.feemarket.v1.ParamsResponse",
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
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
  fromJSON(object: any): ParamsResponse {
    const obj = createBaseParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: ParamsResponse): JsonSafe<ParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
};
function createBaseStateRequest(): StateRequest {
  return {};
}
export const StateRequest = {
  typeUrl: "/feemarket.feemarket.v1.StateRequest",
  encode(_: StateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateRequest();
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
  fromJSON(_: any): StateRequest {
    const obj = createBaseStateRequest();
    return obj;
  },
  toJSON(_: StateRequest): JsonSafe<StateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StateRequest>, I>>(_: I): StateRequest {
    const message = createBaseStateRequest();
    return message;
  },
  fromAmino(_: StateRequestAmino): StateRequest {
    const message = createBaseStateRequest();
    return message;
  },
  toAmino(_: StateRequest): StateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StateRequestAminoMsg): StateRequest {
    return StateRequest.fromAmino(object.value);
  },
};
function createBaseStateResponse(): StateResponse {
  return {
    state: State.fromPartial({}),
  };
}
export const StateResponse = {
  typeUrl: "/feemarket.feemarket.v1.StateResponse",
  encode(message: StateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = State.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StateResponse {
    const obj = createBaseStateResponse();
    if (isSet(object.state)) obj.state = State.fromJSON(object.state);
    return obj;
  },
  toJSON(message: StateResponse): JsonSafe<StateResponse> {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? State.toJSON(message.state) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StateResponse>, I>>(object: I): StateResponse {
    const message = createBaseStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    }
    return message;
  },
  fromAmino(object: StateResponseAmino): StateResponse {
    const message = createBaseStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: StateResponse): StateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? State.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: StateResponseAminoMsg): StateResponse {
    return StateResponse.fromAmino(object.value);
  },
};
function createBaseGasPriceRequest(): GasPriceRequest {
  return {
    denom: "",
  };
}
export const GasPriceRequest = {
  typeUrl: "/feemarket.feemarket.v1.GasPriceRequest",
  encode(message: GasPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasPriceRequest {
    const obj = createBaseGasPriceRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: GasPriceRequest): JsonSafe<GasPriceRequest> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GasPriceRequest>, I>>(object: I): GasPriceRequest {
    const message = createBaseGasPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: GasPriceRequestAmino): GasPriceRequest {
    const message = createBaseGasPriceRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: GasPriceRequest): GasPriceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: GasPriceRequestAminoMsg): GasPriceRequest {
    return GasPriceRequest.fromAmino(object.value);
  },
};
function createBaseGasPriceResponse(): GasPriceResponse {
  return {
    price: DecCoin.fromPartial({}),
  };
}
export const GasPriceResponse = {
  typeUrl: "/feemarket.feemarket.v1.GasPriceResponse",
  encode(message: GasPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasPriceResponse {
    const obj = createBaseGasPriceResponse();
    if (isSet(object.price)) obj.price = DecCoin.fromJSON(object.price);
    return obj;
  },
  toJSON(message: GasPriceResponse): JsonSafe<GasPriceResponse> {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GasPriceResponse>, I>>(object: I): GasPriceResponse {
    const message = createBaseGasPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromPartial(object.price);
    }
    return message;
  },
  fromAmino(object: GasPriceResponseAmino): GasPriceResponse {
    const message = createBaseGasPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: GasPriceResponse): GasPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GasPriceResponseAminoMsg): GasPriceResponse {
    return GasPriceResponse.fromAmino(object.value);
  },
};
function createBaseGasPricesRequest(): GasPricesRequest {
  return {};
}
export const GasPricesRequest = {
  typeUrl: "/feemarket.feemarket.v1.GasPricesRequest",
  encode(_: GasPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPricesRequest();
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
  fromJSON(_: any): GasPricesRequest {
    const obj = createBaseGasPricesRequest();
    return obj;
  },
  toJSON(_: GasPricesRequest): JsonSafe<GasPricesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GasPricesRequest>, I>>(_: I): GasPricesRequest {
    const message = createBaseGasPricesRequest();
    return message;
  },
  fromAmino(_: GasPricesRequestAmino): GasPricesRequest {
    const message = createBaseGasPricesRequest();
    return message;
  },
  toAmino(_: GasPricesRequest): GasPricesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GasPricesRequestAminoMsg): GasPricesRequest {
    return GasPricesRequest.fromAmino(object.value);
  },
};
function createBaseGasPricesResponse(): GasPricesResponse {
  return {
    prices: [],
  };
}
export const GasPricesResponse = {
  typeUrl: "/feemarket.feemarket.v1.GasPricesResponse",
  encode(message: GasPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasPricesResponse {
    const obj = createBaseGasPricesResponse();
    if (Array.isArray(object?.prices)) obj.prices = object.prices.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: GasPricesResponse): JsonSafe<GasPricesResponse> {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.prices = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GasPricesResponse>, I>>(object: I): GasPricesResponse {
    const message = createBaseGasPricesResponse();
    message.prices = object.prices?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GasPricesResponseAmino): GasPricesResponse {
    const message = createBaseGasPricesResponse();
    message.prices = object.prices?.map((e) => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GasPricesResponse): GasPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) => (e ? DecCoin.toAmino(e) : undefined));
    } else {
      obj.prices = message.prices;
    }
    return obj;
  },
  fromAminoMsg(object: GasPricesResponseAminoMsg): GasPricesResponse {
    return GasPricesResponse.fromAmino(object.value);
  },
};
