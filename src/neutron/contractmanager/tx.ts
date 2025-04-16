//@ts-nocheck
/* eslint-disable */
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.contractmanager";
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParams {
  /** Authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/contractmanager parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {}
/** MsgResubmitFailure - contract that has failed acknowledgement can resubmit its failure */
export interface MsgResubmitFailure {
  /** sender is the contract which failure to acknowledge is resubmitted. */
  sender: string;
  /** failure_id is id of failure to resubmit */
  failureId: bigint;
}
export interface MsgResubmitFailureResponse {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/neutron.contractmanager.MsgUpdateParams",
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
      type: "contractmanager/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/neutron.contractmanager.MsgUpdateParamsResponse",
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
};
function createBaseMsgResubmitFailure(): MsgResubmitFailure {
  return {
    sender: "",
    failureId: BigInt(0),
  };
}
export const MsgResubmitFailure = {
  typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
  encode(message: MsgResubmitFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.failureId !== BigInt(0)) {
      writer.uint32(16).uint64(message.failureId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResubmitFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResubmitFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.failureId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgResubmitFailure {
    const obj = createBaseMsgResubmitFailure();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.failureId)) obj.failureId = BigInt(object.failureId.toString());
    return obj;
  },
  toJSON(message: MsgResubmitFailure): JsonSafe<MsgResubmitFailure> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.failureId !== undefined && (obj.failureId = (message.failureId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgResubmitFailure>, I>>(object: I): MsgResubmitFailure {
    const message = createBaseMsgResubmitFailure();
    message.sender = object.sender ?? "";
    if (object.failureId !== undefined && object.failureId !== null) {
      message.failureId = BigInt(object.failureId.toString());
    }
    return message;
  },
  fromAmino(object: MsgResubmitFailureAmino): MsgResubmitFailure {
    const message = createBaseMsgResubmitFailure();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.failure_id !== undefined && object.failure_id !== null) {
      message.failureId = BigInt(object.failure_id);
    }
    return message;
  },
  toAmino(message: MsgResubmitFailure): MsgResubmitFailureAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.failure_id = message.failureId !== BigInt(0) ? message.failureId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgResubmitFailureAminoMsg): MsgResubmitFailure {
    return MsgResubmitFailure.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResubmitFailure): MsgResubmitFailureAminoMsg {
    return {
      type: "contractmanager/MsgResubmitFailure",
      value: MsgResubmitFailure.toAmino(message),
    };
  },
};
function createBaseMsgResubmitFailureResponse(): MsgResubmitFailureResponse {
  return {};
}
export const MsgResubmitFailureResponse = {
  typeUrl: "/neutron.contractmanager.MsgResubmitFailureResponse",
  encode(_: MsgResubmitFailureResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResubmitFailureResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResubmitFailureResponse();
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
  fromJSON(_: any): MsgResubmitFailureResponse {
    const obj = createBaseMsgResubmitFailureResponse();
    return obj;
  },
  toJSON(_: MsgResubmitFailureResponse): JsonSafe<MsgResubmitFailureResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgResubmitFailureResponse>, I>>(_: I): MsgResubmitFailureResponse {
    const message = createBaseMsgResubmitFailureResponse();
    return message;
  },
  fromAmino(_: MsgResubmitFailureResponseAmino): MsgResubmitFailureResponse {
    const message = createBaseMsgResubmitFailureResponse();
    return message;
  },
  toAmino(_: MsgResubmitFailureResponse): MsgResubmitFailureResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgResubmitFailureResponseAminoMsg): MsgResubmitFailureResponse {
    return MsgResubmitFailureResponse.fromAmino(object.value);
  },
};
