//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.crisis.v1beta1";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
  /** sender is the account address of private key to send coins to fee collector account. */
  sender: string;
  /** name of the invariant module. */
  invariantModuleName: string;
  /** invariant_route is the msg's invariant route. */
  invariantRoute: string;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** constant_fee defines the x/crisis parameter. */
  constantFee: Coin;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
function createBaseMsgVerifyInvariant(): MsgVerifyInvariant {
  return {
    sender: "",
    invariantModuleName: "",
    invariantRoute: "",
  };
}
export const MsgVerifyInvariant = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
  encode(message: MsgVerifyInvariant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }
    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyInvariant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariantModuleName = reader.string();
          break;
        case 3:
          message.invariantRoute = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVerifyInvariant {
    const obj = createBaseMsgVerifyInvariant();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.invariantModuleName)) obj.invariantModuleName = String(object.invariantModuleName);
    if (isSet(object.invariantRoute)) obj.invariantRoute = String(object.invariantRoute);
    return obj;
  },
  toJSON(message: MsgVerifyInvariant): JsonSafe<MsgVerifyInvariant> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invariantModuleName !== undefined && (obj.invariantModuleName = message.invariantModuleName);
    message.invariantRoute !== undefined && (obj.invariantRoute = message.invariantRoute);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgVerifyInvariant>, I>>(object: I): MsgVerifyInvariant {
    const message = createBaseMsgVerifyInvariant();
    message.sender = object.sender ?? "";
    message.invariantModuleName = object.invariantModuleName ?? "";
    message.invariantRoute = object.invariantRoute ?? "";
    return message;
  },
  fromAmino(object: MsgVerifyInvariantAmino): MsgVerifyInvariant {
    const message = createBaseMsgVerifyInvariant();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.invariant_module_name !== undefined && object.invariant_module_name !== null) {
      message.invariantModuleName = object.invariant_module_name;
    }
    if (object.invariant_route !== undefined && object.invariant_route !== null) {
      message.invariantRoute = object.invariant_route;
    }
    return message;
  },
  toAmino(message: MsgVerifyInvariant): MsgVerifyInvariantAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.invariant_module_name = message.invariantModuleName === "" ? undefined : message.invariantModuleName;
    obj.invariant_route = message.invariantRoute === "" ? undefined : message.invariantRoute;
    return obj;
  },
  fromAminoMsg(object: MsgVerifyInvariantAminoMsg): MsgVerifyInvariant {
    return MsgVerifyInvariant.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVerifyInvariant): MsgVerifyInvariantAminoMsg {
    return {
      type: "cosmos-sdk/MsgVerifyInvariant",
      value: MsgVerifyInvariant.toAmino(message),
    };
  },
};
function createBaseMsgVerifyInvariantResponse(): MsgVerifyInvariantResponse {
  return {};
}
export const MsgVerifyInvariantResponse = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
  encode(_: MsgVerifyInvariantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyInvariantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();
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
  fromJSON(_: any): MsgVerifyInvariantResponse {
    const obj = createBaseMsgVerifyInvariantResponse();
    return obj;
  },
  toJSON(_: MsgVerifyInvariantResponse): JsonSafe<MsgVerifyInvariantResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgVerifyInvariantResponse>, I>>(_: I): MsgVerifyInvariantResponse {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  },
  fromAmino(_: MsgVerifyInvariantResponseAmino): MsgVerifyInvariantResponse {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  },
  toAmino(_: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVerifyInvariantResponseAminoMsg): MsgVerifyInvariantResponse {
    return MsgVerifyInvariantResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVerifyInvariantResponse",
      value: MsgVerifyInvariantResponse.toAmino(message),
    };
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    constantFee: Coin.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.constantFee !== undefined) {
      Coin.encode(message.constantFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.constantFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.constantFee)) obj.constantFee = Coin.fromJSON(object.constantFee);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.constantFee !== undefined &&
      (obj.constantFee = message.constantFee ? Coin.toJSON(message.constantFee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.constantFee !== undefined && object.constantFee !== null) {
      message.constantFee = Coin.fromPartial(object.constantFee);
    }
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.constant_fee !== undefined && object.constant_fee !== null) {
      message.constantFee = Coin.fromAmino(object.constant_fee);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.constant_fee = message.constantFee
      ? Coin.toAmino(message.constantFee)
      : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/crisis/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message),
    };
  },
};
