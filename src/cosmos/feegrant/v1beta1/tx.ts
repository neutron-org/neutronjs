//@ts-nocheck
/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.feegrant.v1beta1";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance?: Any;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {}
/**
 * MsgPruneAllowances prunes expired fee allowances.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowances {
  /** pruner is the address of the user pruning expired allowances. */
  pruner: string;
}
/**
 * MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type.
 *
 * Since cosmos-sdk 0.50
 */
export interface MsgPruneAllowancesResponse {}
function createBaseMsgGrantAllowance(): MsgGrantAllowance {
  return {
    granter: "",
    grantee: "",
    allowance: undefined,
  };
}
export const MsgGrantAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
  encode(message: MsgGrantAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGrantAllowance {
    const obj = createBaseMsgGrantAllowance();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.allowance)) obj.allowance = Any.fromJSON(object.allowance);
    return obj;
  },
  toJSON(message: MsgGrantAllowance): JsonSafe<MsgGrantAllowance> {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined &&
      (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrantAllowance>, I>>(object: I): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Any.fromPartial(object.allowance);
    }
    return message;
  },
  fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance {
    const message = createBaseMsgGrantAllowance();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Any.fromAmino(object.allowance);
    }
    return message;
  },
  toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.allowance = message.allowance ? Any.toAmino(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGrantAllowanceAminoMsg): MsgGrantAllowance {
    return MsgGrantAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantAllowance): MsgGrantAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantAllowance",
      value: MsgGrantAllowance.toAmino(message),
    };
  },
};
function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
  return {};
}
export const MsgGrantAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
  encode(_: MsgGrantAllowanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantAllowanceResponse();
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
  fromJSON(_: any): MsgGrantAllowanceResponse {
    const obj = createBaseMsgGrantAllowanceResponse();
    return obj;
  },
  toJSON(_: MsgGrantAllowanceResponse): JsonSafe<MsgGrantAllowanceResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgGrantAllowanceResponse>, I>>(_: I): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse {
    const message = createBaseMsgGrantAllowanceResponse();
    return message;
  },
  toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGrantAllowanceResponseAminoMsg): MsgGrantAllowanceResponse {
    return MsgGrantAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantAllowanceResponse",
      value: MsgGrantAllowanceResponse.toAmino(message),
    };
  },
};
function createBaseMsgRevokeAllowance(): MsgRevokeAllowance {
  return {
    granter: "",
    grantee: "",
  };
}
export const MsgRevokeAllowance = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
  encode(message: MsgRevokeAllowance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRevokeAllowance {
    const obj = createBaseMsgRevokeAllowance();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    return obj;
  },
  toJSON(message: MsgRevokeAllowance): JsonSafe<MsgRevokeAllowance> {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowance>, I>>(object: I): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance {
    const message = createBaseMsgRevokeAllowance();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    return message;
  },
  toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAllowanceAminoMsg): MsgRevokeAllowance {
    return MsgRevokeAllowance.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeAllowance",
      value: MsgRevokeAllowance.toAmino(message),
    };
  },
};
function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
  return {};
}
export const MsgRevokeAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
  encode(_: MsgRevokeAllowanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAllowanceResponse();
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
  fromJSON(_: any): MsgRevokeAllowanceResponse {
    const obj = createBaseMsgRevokeAllowanceResponse();
    return obj;
  },
  toJSON(_: MsgRevokeAllowanceResponse): JsonSafe<MsgRevokeAllowanceResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowanceResponse>, I>>(_: I): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse {
    const message = createBaseMsgRevokeAllowanceResponse();
    return message;
  },
  toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAllowanceResponseAminoMsg): MsgRevokeAllowanceResponse {
    return MsgRevokeAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeAllowanceResponse",
      value: MsgRevokeAllowanceResponse.toAmino(message),
    };
  },
};
function createBaseMsgPruneAllowances(): MsgPruneAllowances {
  return {
    pruner: "",
  };
}
export const MsgPruneAllowances = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
  encode(message: MsgPruneAllowances, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pruner !== "") {
      writer.uint32(10).string(message.pruner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAllowances {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAllowances();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pruner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPruneAllowances {
    const obj = createBaseMsgPruneAllowances();
    if (isSet(object.pruner)) obj.pruner = String(object.pruner);
    return obj;
  },
  toJSON(message: MsgPruneAllowances): JsonSafe<MsgPruneAllowances> {
    const obj: any = {};
    message.pruner !== undefined && (obj.pruner = message.pruner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPruneAllowances>, I>>(object: I): MsgPruneAllowances {
    const message = createBaseMsgPruneAllowances();
    message.pruner = object.pruner ?? "";
    return message;
  },
  fromAmino(object: MsgPruneAllowancesAmino): MsgPruneAllowances {
    const message = createBaseMsgPruneAllowances();
    if (object.pruner !== undefined && object.pruner !== null) {
      message.pruner = object.pruner;
    }
    return message;
  },
  toAmino(message: MsgPruneAllowances): MsgPruneAllowancesAmino {
    const obj: any = {};
    obj.pruner = message.pruner === "" ? undefined : message.pruner;
    return obj;
  },
  fromAminoMsg(object: MsgPruneAllowancesAminoMsg): MsgPruneAllowances {
    return MsgPruneAllowances.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneAllowances): MsgPruneAllowancesAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneAllowances",
      value: MsgPruneAllowances.toAmino(message),
    };
  },
};
function createBaseMsgPruneAllowancesResponse(): MsgPruneAllowancesResponse {
  return {};
}
export const MsgPruneAllowancesResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse",
  encode(_: MsgPruneAllowancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAllowancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAllowancesResponse();
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
  fromJSON(_: any): MsgPruneAllowancesResponse {
    const obj = createBaseMsgPruneAllowancesResponse();
    return obj;
  },
  toJSON(_: MsgPruneAllowancesResponse): JsonSafe<MsgPruneAllowancesResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPruneAllowancesResponse>, I>>(_: I): MsgPruneAllowancesResponse {
    const message = createBaseMsgPruneAllowancesResponse();
    return message;
  },
  fromAmino(_: MsgPruneAllowancesResponseAmino): MsgPruneAllowancesResponse {
    const message = createBaseMsgPruneAllowancesResponse();
    return message;
  },
  toAmino(_: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPruneAllowancesResponseAminoMsg): MsgPruneAllowancesResponse {
    return MsgPruneAllowancesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneAllowancesResponse): MsgPruneAllowancesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneAllowancesResponse",
      value: MsgPruneAllowancesResponse.toAmino(message),
    };
  },
};
