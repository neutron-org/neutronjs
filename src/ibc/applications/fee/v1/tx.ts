//@ts-nocheck
/* eslint-disable */
import { Fee, PacketFee } from "./fee";
import { PacketId } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.applications.fee.v1";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
  /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
  fee: Fee;
  /** the source port unique identifier */
  sourcePortId: string;
  /** the source channel unique identifer */
  sourceChannelId: string;
  /** account address to refund fee if necessary */
  signer: string;
  /** optional list of relayers permitted to the receive packet fees */
  relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
  /** unique packet identifier comprised of the channel ID, port ID and sequence */
  packetId: PacketId;
  /** the packet fee associated with a particular IBC packet */
  packetFee: PacketFee;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {}
function createBaseMsgRegisterPayee(): MsgRegisterPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    payee: "",
  };
}
export const MsgRegisterPayee = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayee",
  encode(message: MsgRegisterPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(34).string(message.payee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterPayee {
    const obj = createBaseMsgRegisterPayee();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    if (isSet(object.payee)) obj.payee = String(object.payee);
    return obj;
  },
  toJSON(message: MsgRegisterPayee): JsonSafe<MsgRegisterPayee> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterPayee>, I>>(object: I): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterPayeeAmino): MsgRegisterPayee {
    const message = createBaseMsgRegisterPayee();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.payee !== undefined && object.payee !== null) {
      message.payee = object.payee;
    }
    return message;
  },
  toAmino(message: MsgRegisterPayee): MsgRegisterPayeeAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.payee = message.payee === "" ? undefined : message.payee;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPayeeAminoMsg): MsgRegisterPayee {
    return MsgRegisterPayee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPayee): MsgRegisterPayeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterPayee",
      value: MsgRegisterPayee.toAmino(message),
    };
  },
};
function createBaseMsgRegisterPayeeResponse(): MsgRegisterPayeeResponse {
  return {};
}
export const MsgRegisterPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterPayeeResponse",
  encode(_: MsgRegisterPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterPayeeResponse();
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
  fromJSON(_: any): MsgRegisterPayeeResponse {
    const obj = createBaseMsgRegisterPayeeResponse();
    return obj;
  },
  toJSON(_: MsgRegisterPayeeResponse): JsonSafe<MsgRegisterPayeeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterPayeeResponse>, I>>(_: I): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  fromAmino(_: MsgRegisterPayeeResponseAmino): MsgRegisterPayeeResponse {
    const message = createBaseMsgRegisterPayeeResponse();
    return message;
  },
  toAmino(_: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterPayeeResponseAminoMsg): MsgRegisterPayeeResponse {
    return MsgRegisterPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterPayeeResponse): MsgRegisterPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterPayeeResponse",
      value: MsgRegisterPayeeResponse.toAmino(message),
    };
  },
};
function createBaseMsgRegisterCounterpartyPayee(): MsgRegisterCounterpartyPayee {
  return {
    portId: "",
    channelId: "",
    relayer: "",
    counterpartyPayee: "",
  };
}
export const MsgRegisterCounterpartyPayee = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
  encode(message: MsgRegisterCounterpartyPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(26).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(34).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.relayer = reader.string();
          break;
        case 4:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterCounterpartyPayee {
    const obj = createBaseMsgRegisterCounterpartyPayee();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    if (isSet(object.counterpartyPayee)) obj.counterpartyPayee = String(object.counterpartyPayee);
    return obj;
  },
  toJSON(message: MsgRegisterCounterpartyPayee): JsonSafe<MsgRegisterCounterpartyPayee> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterpartyPayee>, I>>(
    object: I,
  ): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterCounterpartyPayeeAmino): MsgRegisterCounterpartyPayee {
    const message = createBaseMsgRegisterCounterpartyPayee();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
      message.counterpartyPayee = object.counterparty_payee;
    }
    return message;
  },
  toAmino(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.counterparty_payee = message.counterpartyPayee === "" ? undefined : message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyPayeeAminoMsg): MsgRegisterCounterpartyPayee {
    return MsgRegisterCounterpartyPayee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyPayee): MsgRegisterCounterpartyPayeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayee",
      value: MsgRegisterCounterpartyPayee.toAmino(message),
    };
  },
};
function createBaseMsgRegisterCounterpartyPayeeResponse(): MsgRegisterCounterpartyPayeeResponse {
  return {};
}
export const MsgRegisterCounterpartyPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse",
  encode(
    _: MsgRegisterCounterpartyPayeeResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
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
  fromJSON(_: any): MsgRegisterCounterpartyPayeeResponse {
    const obj = createBaseMsgRegisterCounterpartyPayeeResponse();
    return obj;
  },
  toJSON(_: MsgRegisterCounterpartyPayeeResponse): JsonSafe<MsgRegisterCounterpartyPayeeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterCounterpartyPayeeResponse>, I>>(
    _: I,
  ): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  fromAmino(_: MsgRegisterCounterpartyPayeeResponseAmino): MsgRegisterCounterpartyPayeeResponse {
    const message = createBaseMsgRegisterCounterpartyPayeeResponse();
    return message;
  },
  toAmino(_: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyPayeeResponseAminoMsg): MsgRegisterCounterpartyPayeeResponse {
    return MsgRegisterCounterpartyPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyPayeeResponse): MsgRegisterCounterpartyPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyPayeeResponse",
      value: MsgRegisterCounterpartyPayeeResponse.toAmino(message),
    };
  },
};
function createBaseMsgPayPacketFee(): MsgPayPacketFee {
  return {
    fee: Fee.fromPartial({}),
    sourcePortId: "",
    sourceChannelId: "",
    signer: "",
    relayers: [],
  };
}
export const MsgPayPacketFee = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFee",
  encode(message: MsgPayPacketFee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    if (message.sourcePortId !== "") {
      writer.uint32(18).string(message.sourcePortId);
    }
    if (message.sourceChannelId !== "") {
      writer.uint32(26).string(message.sourceChannelId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        case 2:
          message.sourcePortId = reader.string();
          break;
        case 3:
          message.sourceChannelId = reader.string();
          break;
        case 4:
          message.signer = reader.string();
          break;
        case 5:
          message.relayers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPayPacketFee {
    const obj = createBaseMsgPayPacketFee();
    if (isSet(object.fee)) obj.fee = Fee.fromJSON(object.fee);
    if (isSet(object.sourcePortId)) obj.sourcePortId = String(object.sourcePortId);
    if (isSet(object.sourceChannelId)) obj.sourceChannelId = String(object.sourceChannelId);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (Array.isArray(object?.relayers)) obj.relayers = object.relayers.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MsgPayPacketFee): JsonSafe<MsgPayPacketFee> {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    message.sourcePortId !== undefined && (obj.sourcePortId = message.sourcePortId);
    message.sourceChannelId !== undefined && (obj.sourceChannelId = message.sourceChannelId);
    message.signer !== undefined && (obj.signer = message.signer);
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFee>, I>>(object: I): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromPartial(object.fee);
    }
    message.sourcePortId = object.sourcePortId ?? "";
    message.sourceChannelId = object.sourceChannelId ?? "";
    message.signer = object.signer ?? "";
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: MsgPayPacketFeeAmino): MsgPayPacketFee {
    const message = createBaseMsgPayPacketFee();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    if (object.source_port_id !== undefined && object.source_port_id !== null) {
      message.sourcePortId = object.source_port_id;
    }
    if (object.source_channel_id !== undefined && object.source_channel_id !== null) {
      message.sourceChannelId = object.source_channel_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    message.relayers = object.relayers?.map((e) => e) || [];
    return message;
  },
  toAmino(message: MsgPayPacketFee): MsgPayPacketFeeAmino {
    const obj: any = {};
    obj.fee = message.fee ? Fee.toAmino(message.fee) : Fee.toAmino(Fee.fromPartial({}));
    obj.source_port_id = message.sourcePortId === "" ? undefined : message.sourcePortId;
    obj.source_channel_id = message.sourceChannelId === "" ? undefined : message.sourceChannelId;
    obj.signer = message.signer === "" ? undefined : message.signer;
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => e);
    } else {
      obj.relayers = message.relayers;
    }
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAminoMsg): MsgPayPacketFee {
    return MsgPayPacketFee.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFee): MsgPayPacketFeeAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFee",
      value: MsgPayPacketFee.toAmino(message),
    };
  },
};
function createBaseMsgPayPacketFeeResponse(): MsgPayPacketFeeResponse {
  return {};
}
export const MsgPayPacketFeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeResponse",
  encode(_: MsgPayPacketFeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeResponse();
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
  fromJSON(_: any): MsgPayPacketFeeResponse {
    const obj = createBaseMsgPayPacketFeeResponse();
    return obj;
  },
  toJSON(_: MsgPayPacketFeeResponse): JsonSafe<MsgPayPacketFeeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeResponse>, I>>(_: I): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  fromAmino(_: MsgPayPacketFeeResponseAmino): MsgPayPacketFeeResponse {
    const message = createBaseMsgPayPacketFeeResponse();
    return message;
  },
  toAmino(_: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeResponseAminoMsg): MsgPayPacketFeeResponse {
    return MsgPayPacketFeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeResponse): MsgPayPacketFeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeResponse",
      value: MsgPayPacketFeeResponse.toAmino(message),
    };
  },
};
function createBaseMsgPayPacketFeeAsync(): MsgPayPacketFeeAsync {
  return {
    packetId: PacketId.fromPartial({}),
    packetFee: PacketFee.fromPartial({}),
  };
}
export const MsgPayPacketFeeAsync = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
  encode(message: MsgPayPacketFeeAsync, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetFee !== undefined) {
      PacketFee.encode(message.packetFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeAsync {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsync();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetFee = PacketFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPayPacketFeeAsync {
    const obj = createBaseMsgPayPacketFeeAsync();
    if (isSet(object.packetId)) obj.packetId = PacketId.fromJSON(object.packetId);
    if (isSet(object.packetFee)) obj.packetFee = PacketFee.fromJSON(object.packetFee);
    return obj;
  },
  toJSON(message: MsgPayPacketFeeAsync): JsonSafe<MsgPayPacketFeeAsync> {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    message.packetFee !== undefined &&
      (obj.packetFee = message.packetFee ? PacketFee.toJSON(message.packetFee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeAsync>, I>>(object: I): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    }
    if (object.packetFee !== undefined && object.packetFee !== null) {
      message.packetFee = PacketFee.fromPartial(object.packetFee);
    }
    return message;
  },
  fromAmino(object: MsgPayPacketFeeAsyncAmino): MsgPayPacketFeeAsync {
    const message = createBaseMsgPayPacketFeeAsync();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    if (object.packet_fee !== undefined && object.packet_fee !== null) {
      message.packetFee = PacketFee.fromAmino(object.packet_fee);
    }
    return message;
  },
  toAmino(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAmino {
    const obj: any = {};
    obj.packet_id = message.packetId
      ? PacketId.toAmino(message.packetId)
      : PacketId.toAmino(PacketId.fromPartial({}));
    obj.packet_fee = message.packetFee
      ? PacketFee.toAmino(message.packetFee)
      : PacketFee.toAmino(PacketFee.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAsyncAminoMsg): MsgPayPacketFeeAsync {
    return MsgPayPacketFeeAsync.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeAsync): MsgPayPacketFeeAsyncAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsync",
      value: MsgPayPacketFeeAsync.toAmino(message),
    };
  },
};
function createBaseMsgPayPacketFeeAsyncResponse(): MsgPayPacketFeeAsyncResponse {
  return {};
}
export const MsgPayPacketFeeAsyncResponse = {
  typeUrl: "/ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse",
  encode(_: MsgPayPacketFeeAsyncResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPayPacketFeeAsyncResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPayPacketFeeAsyncResponse();
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
  fromJSON(_: any): MsgPayPacketFeeAsyncResponse {
    const obj = createBaseMsgPayPacketFeeAsyncResponse();
    return obj;
  },
  toJSON(_: MsgPayPacketFeeAsyncResponse): JsonSafe<MsgPayPacketFeeAsyncResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPayPacketFeeAsyncResponse>, I>>(
    _: I,
  ): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  fromAmino(_: MsgPayPacketFeeAsyncResponseAmino): MsgPayPacketFeeAsyncResponse {
    const message = createBaseMsgPayPacketFeeAsyncResponse();
    return message;
  },
  toAmino(_: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPayPacketFeeAsyncResponseAminoMsg): MsgPayPacketFeeAsyncResponse {
    return MsgPayPacketFeeAsyncResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPayPacketFeeAsyncResponse): MsgPayPacketFeeAsyncResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPayPacketFeeAsyncResponse",
      value: MsgPayPacketFeeAsyncResponse.toAmino(message),
    };
  },
};
