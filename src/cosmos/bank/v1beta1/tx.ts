//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../base/v1beta1/coin";
import { Input, Output, Params, SendEnabled } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.bank.v1beta1";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
  fromAddress: string;
  toAddress: string;
  amount: Coin[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
  /**
   * Inputs, despite being `repeated`, only allows one sender input. This is
   * checked in MsgMultiSend's ValidateBasic.
   */
  inputs: Input[];
  outputs: Output[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/bank parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
/**
 * MsgSetSendEnabled is the Msg/SetSendEnabled request type.
 *
 * Only entries to add/update/delete need to be included.
 * Existing SendEnabled entries that are not included in this
 * message are left unchanged.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgSetSendEnabled {
  /** authority is the address that controls the module. */
  authority: string;
  /** send_enabled is the list of entries to add or update. */
  sendEnabled: SendEnabled[];
  /**
   * use_default_for is a list of denoms that should use the params.default_send_enabled value.
   * Denoms listed here will have their SendEnabled entries deleted.
   * If a denom is included that doesn't have a SendEnabled entry,
   * it will be ignored.
   */
  useDefaultFor: string[];
}
/**
 * MsgSetSendEnabledResponse defines the Msg/SetSendEnabled response type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgSetSendEnabledResponse {}
function createBaseMsgSend(): MsgSend {
  return {
    fromAddress: "",
    toAddress: "",
    amount: [],
  };
}
export const MsgSend = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
  encode(message: MsgSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.toAddress = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSend {
    const obj = createBaseMsgSend();
    if (isSet(object.fromAddress)) obj.fromAddress = String(object.fromAddress);
    if (isSet(object.toAddress)) obj.toAddress = String(object.toAddress);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgSend): JsonSafe<MsgSend> {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
    const message = createBaseMsgSend();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgSendAmino): MsgSend {
    const message = createBaseMsgSend();
    if (object.from_address !== undefined && object.from_address !== null) {
      message.fromAddress = object.from_address;
    }
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    message.amount = object.amount?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSend): MsgSendAmino {
    const obj: any = {};
    obj.from_address = message.fromAddress === "" ? undefined : message.fromAddress;
    obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSendAminoMsg): MsgSend {
    return MsgSend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSend): MsgSendAminoMsg {
    return {
      type: "cosmos-sdk/MsgSend",
      value: MsgSend.toAmino(message),
    };
  },
};
function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}
export const MsgSendResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse",
  encode(_: MsgSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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
  fromJSON(_: any): MsgSendResponse {
    const obj = createBaseMsgSendResponse();
    return obj;
  },
  toJSON(_: MsgSendResponse): JsonSafe<MsgSendResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(_: I): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
  fromAmino(_: MsgSendResponseAmino): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  },
  toAmino(_: MsgSendResponse): MsgSendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse {
    return MsgSendResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSendResponse): MsgSendResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSendResponse",
      value: MsgSendResponse.toAmino(message),
    };
  },
};
function createBaseMsgMultiSend(): MsgMultiSend {
  return {
    inputs: [],
    outputs: [],
  };
}
export const MsgMultiSend = {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend",
  encode(message: MsgMultiSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.inputs) {
      Input.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      Output.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inputs.push(Input.decode(reader, reader.uint32()));
          break;
        case 2:
          message.outputs.push(Output.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMultiSend {
    const obj = createBaseMsgMultiSend();
    if (Array.isArray(object?.inputs)) obj.inputs = object.inputs.map((e: any) => Input.fromJSON(e));
    if (Array.isArray(object?.outputs)) obj.outputs = object.outputs.map((e: any) => Output.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgMultiSend): JsonSafe<MsgMultiSend> {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => (e ? Input.toJSON(e) : undefined));
    } else {
      obj.inputs = [];
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) => (e ? Output.toJSON(e) : undefined));
    } else {
      obj.outputs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMultiSend>, I>>(object: I): MsgMultiSend {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map((e) => Input.fromPartial(e)) || [];
    message.outputs = object.outputs?.map((e) => Output.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMultiSendAmino): MsgMultiSend {
    const message = createBaseMsgMultiSend();
    message.inputs = object.inputs?.map((e) => Input.fromAmino(e)) || [];
    message.outputs = object.outputs?.map((e) => Output.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMultiSend): MsgMultiSendAmino {
    const obj: any = {};
    if (message.inputs) {
      obj.inputs = message.inputs.map((e) => (e ? Input.toAmino(e) : undefined));
    } else {
      obj.inputs = message.inputs;
    }
    if (message.outputs) {
      obj.outputs = message.outputs.map((e) => (e ? Output.toAmino(e) : undefined));
    } else {
      obj.outputs = message.outputs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMultiSendAminoMsg): MsgMultiSend {
    return MsgMultiSend.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMultiSend): MsgMultiSendAminoMsg {
    return {
      type: "cosmos-sdk/MsgMultiSend",
      value: MsgMultiSend.toAmino(message),
    };
  },
};
function createBaseMsgMultiSendResponse(): MsgMultiSendResponse {
  return {};
}
export const MsgMultiSendResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse",
  encode(_: MsgMultiSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendResponse();
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
  fromJSON(_: any): MsgMultiSendResponse {
    const obj = createBaseMsgMultiSendResponse();
    return obj;
  },
  toJSON(_: MsgMultiSendResponse): JsonSafe<MsgMultiSendResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMultiSendResponse>, I>>(_: I): MsgMultiSendResponse {
    const message = createBaseMsgMultiSendResponse();
    return message;
  },
  fromAmino(_: MsgMultiSendResponseAmino): MsgMultiSendResponse {
    const message = createBaseMsgMultiSendResponse();
    return message;
  },
  toAmino(_: MsgMultiSendResponse): MsgMultiSendResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMultiSendResponseAminoMsg): MsgMultiSendResponse {
    return MsgMultiSendResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMultiSendResponse): MsgMultiSendResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgMultiSendResponse",
      value: MsgMultiSendResponse.toAmino(message),
    };
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
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
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/bank/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgUpdateParamsResponse",
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
function createBaseMsgSetSendEnabled(): MsgSetSendEnabled {
  return {
    authority: "",
    sendEnabled: [],
    useDefaultFor: [],
  };
}
export const MsgSetSendEnabled = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabled",
  encode(message: MsgSetSendEnabled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.useDefaultFor) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSendEnabled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSendEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 3:
          message.useDefaultFor.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetSendEnabled {
    const obj = createBaseMsgSetSendEnabled();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (Array.isArray(object?.sendEnabled))
      obj.sendEnabled = object.sendEnabled.map((e: any) => SendEnabled.fromJSON(e));
    if (Array.isArray(object?.useDefaultFor))
      obj.useDefaultFor = object.useDefaultFor.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MsgSetSendEnabled): JsonSafe<MsgSetSendEnabled> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.sendEnabled) {
      obj.sendEnabled = message.sendEnabled.map((e) => (e ? SendEnabled.toJSON(e) : undefined));
    } else {
      obj.sendEnabled = [];
    }
    if (message.useDefaultFor) {
      obj.useDefaultFor = message.useDefaultFor.map((e) => e);
    } else {
      obj.useDefaultFor = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetSendEnabled>, I>>(object: I): MsgSetSendEnabled {
    const message = createBaseMsgSetSendEnabled();
    message.authority = object.authority ?? "";
    message.sendEnabled = object.sendEnabled?.map((e) => SendEnabled.fromPartial(e)) || [];
    message.useDefaultFor = object.useDefaultFor?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: MsgSetSendEnabledAmino): MsgSetSendEnabled {
    const message = createBaseMsgSetSendEnabled();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.sendEnabled = object.send_enabled?.map((e) => SendEnabled.fromAmino(e)) || [];
    message.useDefaultFor = object.use_default_for?.map((e) => e) || [];
    return message;
  },
  toAmino(message: MsgSetSendEnabled): MsgSetSendEnabledAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map((e) => (e ? SendEnabled.toAmino(e) : undefined));
    } else {
      obj.send_enabled = message.sendEnabled;
    }
    if (message.useDefaultFor) {
      obj.use_default_for = message.useDefaultFor.map((e) => e);
    } else {
      obj.use_default_for = message.useDefaultFor;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetSendEnabledAminoMsg): MsgSetSendEnabled {
    return MsgSetSendEnabled.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetSendEnabled): MsgSetSendEnabledAminoMsg {
    return {
      type: "cosmos-sdk/MsgSetSendEnabled",
      value: MsgSetSendEnabled.toAmino(message),
    };
  },
};
function createBaseMsgSetSendEnabledResponse(): MsgSetSendEnabledResponse {
  return {};
}
export const MsgSetSendEnabledResponse = {
  typeUrl: "/cosmos.bank.v1beta1.MsgSetSendEnabledResponse",
  encode(_: MsgSetSendEnabledResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetSendEnabledResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSendEnabledResponse();
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
  fromJSON(_: any): MsgSetSendEnabledResponse {
    const obj = createBaseMsgSetSendEnabledResponse();
    return obj;
  },
  toJSON(_: MsgSetSendEnabledResponse): JsonSafe<MsgSetSendEnabledResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetSendEnabledResponse>, I>>(_: I): MsgSetSendEnabledResponse {
    const message = createBaseMsgSetSendEnabledResponse();
    return message;
  },
  fromAmino(_: MsgSetSendEnabledResponseAmino): MsgSetSendEnabledResponse {
    const message = createBaseMsgSetSendEnabledResponse();
    return message;
  },
  toAmino(_: MsgSetSendEnabledResponse): MsgSetSendEnabledResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetSendEnabledResponseAminoMsg): MsgSetSendEnabledResponse {
    return MsgSetSendEnabledResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetSendEnabledResponse): MsgSetSendEnabledResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSetSendEnabledResponse",
      value: MsgSetSendEnabledResponse.toAmino(message),
    };
  },
};
