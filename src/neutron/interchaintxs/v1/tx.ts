//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Fee } from "../../feerefunder/fee";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "neutron.interchaintxs.v1";
/** MsgRegisterInterchainAccount is used to register an account on a remote zone. */
export interface MsgRegisterInterchainAccount {
  fromAddress: string;
  connectionId: string;
  interchainAccountId: string;
  registerFee: Coin[];
}
/**
 * MsgRegisterInterchainAccountResponse is the response type for
 * MsgRegisterInterchainAccount.
 */
export interface MsgRegisterInterchainAccountResponse {
  channelId: string;
  portId: string;
}
/** MsgSubmitTx defines the payload for Msg/SubmitTx */
export interface MsgSubmitTx {
  fromAddress: string;
  /**
   * interchain_account_id is supposed to be the unique identifier, e.g.,
   * lido/kava. This allows contracts to have more than one interchain accounts
   * on remote zone This identifier will be a part of the portID that we'll
   * claim our capability for.
   */
  interchainAccountId: string;
  connectionId: string;
  msgs: Any[];
  memo: string;
  /** timeout in seconds after which the packet times out */
  timeout: bigint;
  fee: Fee;
}
/** MsgSubmitTxResponse defines the response for Msg/SubmitTx */
export interface MsgSubmitTxResponse {
  /** channel's sequence_id for outgoing ibc packet. Unique per a channel. */
  sequenceId: bigint;
  /** channel src channel on neutron side transaction was submitted from */
  channel: string;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParams {
  /** Authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/interchaintxs parameters to update.
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
function createBaseMsgRegisterInterchainAccount(): MsgRegisterInterchainAccount {
  return {
    fromAddress: "",
    connectionId: "",
    interchainAccountId: "",
    registerFee: [],
  };
}
export const MsgRegisterInterchainAccount = {
  typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
  encode(message: MsgRegisterInterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.interchainAccountId !== "") {
      writer.uint32(26).string(message.interchainAccountId);
    }
    for (const v of message.registerFee) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.interchainAccountId = reader.string();
          break;
        case 4:
          message.registerFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterInterchainAccount {
    const obj = createBaseMsgRegisterInterchainAccount();
    if (isSet(object.fromAddress)) obj.fromAddress = String(object.fromAddress);
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.interchainAccountId)) obj.interchainAccountId = String(object.interchainAccountId);
    if (Array.isArray(object?.registerFee))
      obj.registerFee = object.registerFee.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgRegisterInterchainAccount): JsonSafe<MsgRegisterInterchainAccount> {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.interchainAccountId !== undefined && (obj.interchainAccountId = message.interchainAccountId);
    if (message.registerFee) {
      obj.registerFee = message.registerFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.registerFee = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainAccount>, I>>(
    object: I,
  ): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    message.fromAddress = object.fromAddress ?? "";
    message.connectionId = object.connectionId ?? "";
    message.interchainAccountId = object.interchainAccountId ?? "";
    message.registerFee = object.registerFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgRegisterInterchainAccountResponse(): MsgRegisterInterchainAccountResponse {
  return {
    channelId: "",
    portId: "",
  };
}
export const MsgRegisterInterchainAccountResponse = {
  typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccountResponse",
  encode(
    message: MsgRegisterInterchainAccountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterInterchainAccountResponse {
    const obj = createBaseMsgRegisterInterchainAccountResponse();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.portId)) obj.portId = String(object.portId);
    return obj;
  },
  toJSON(message: MsgRegisterInterchainAccountResponse): JsonSafe<MsgRegisterInterchainAccountResponse> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.portId !== undefined && (obj.portId = message.portId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainAccountResponse>, I>>(
    object: I,
  ): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    return message;
  },
};
function createBaseMsgSubmitTx(): MsgSubmitTx {
  return {
    fromAddress: "",
    interchainAccountId: "",
    connectionId: "",
    msgs: [],
    memo: "",
    timeout: BigInt(0),
    fee: Fee.fromPartial({}),
  };
}
export const MsgSubmitTx = {
  typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
  encode(message: MsgSubmitTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.interchainAccountId !== "") {
      writer.uint32(18).string(message.interchainAccountId);
    }
    if (message.connectionId !== "") {
      writer.uint32(26).string(message.connectionId);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    if (message.timeout !== BigInt(0)) {
      writer.uint32(48).uint64(message.timeout);
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitTx {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fromAddress = reader.string();
          break;
        case 2:
          message.interchainAccountId = reader.string();
          break;
        case 3:
          message.connectionId = reader.string();
          break;
        case 4:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        case 5:
          message.memo = reader.string();
          break;
        case 6:
          message.timeout = reader.uint64();
          break;
        case 7:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitTx {
    const obj = createBaseMsgSubmitTx();
    if (isSet(object.fromAddress)) obj.fromAddress = String(object.fromAddress);
    if (isSet(object.interchainAccountId)) obj.interchainAccountId = String(object.interchainAccountId);
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (Array.isArray(object?.msgs)) obj.msgs = object.msgs.map((e: any) => Any.fromJSON(e));
    if (isSet(object.memo)) obj.memo = String(object.memo);
    if (isSet(object.timeout)) obj.timeout = BigInt(object.timeout.toString());
    if (isSet(object.fee)) obj.fee = Fee.fromJSON(object.fee);
    return obj;
  },
  toJSON(message: MsgSubmitTx): JsonSafe<MsgSubmitTx> {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.interchainAccountId !== undefined && (obj.interchainAccountId = message.interchainAccountId);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.msgs = [];
    }
    message.memo !== undefined && (obj.memo = message.memo);
    message.timeout !== undefined && (obj.timeout = (message.timeout || BigInt(0)).toString());
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitTx>, I>>(object: I): MsgSubmitTx {
    const message = createBaseMsgSubmitTx();
    message.fromAddress = object.fromAddress ?? "";
    message.interchainAccountId = object.interchainAccountId ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msgs = object.msgs?.map((e) => Any.fromPartial(e)) || [];
    message.memo = object.memo ?? "";
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = BigInt(object.timeout.toString());
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromPartial(object.fee);
    }
    return message;
  },
};
function createBaseMsgSubmitTxResponse(): MsgSubmitTxResponse {
  return {
    sequenceId: BigInt(0),
    channel: "",
  };
}
export const MsgSubmitTxResponse = {
  typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTxResponse",
  encode(message: MsgSubmitTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequenceId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequenceId);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequenceId = reader.uint64();
          break;
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitTxResponse {
    const obj = createBaseMsgSubmitTxResponse();
    if (isSet(object.sequenceId)) obj.sequenceId = BigInt(object.sequenceId.toString());
    if (isSet(object.channel)) obj.channel = String(object.channel);
    return obj;
  },
  toJSON(message: MsgSubmitTxResponse): JsonSafe<MsgSubmitTxResponse> {
    const obj: any = {};
    message.sequenceId !== undefined && (obj.sequenceId = (message.sequenceId || BigInt(0)).toString());
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitTxResponse>, I>>(object: I): MsgSubmitTxResponse {
    const message = createBaseMsgSubmitTxResponse();
    if (object.sequenceId !== undefined && object.sequenceId !== null) {
      message.sequenceId = BigInt(object.sequenceId.toString());
    }
    message.channel = object.channel ?? "";
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
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
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParamsResponse",
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
};
