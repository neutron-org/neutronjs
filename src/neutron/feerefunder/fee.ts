/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet } from "../../helpers";
export const protobufPackage = "neutron.feerefunder";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
  /** the packet receive fee */
  recvFee: Coin[];
  /** the packet acknowledgement fee */
  ackFee: Coin[];
  /** the packet timeout fee */
  timeoutFee: Coin[];
}
export interface PacketID {
  channelId: string;
  portId: string;
  sequence: bigint;
}
function createBaseFee(): Fee {
  return {
    recvFee: [],
    ackFee: [],
    timeoutFee: [],
  };
}
export const Fee = {
  typeUrl: "/neutron.feerefunder.Fee",
  encode(message: Fee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.recvFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ackFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.timeoutFee) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Fee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.ackFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.timeoutFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Fee {
    const obj = createBaseFee();
    if (Array.isArray(object?.recvFee)) obj.recvFee = object.recvFee.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.ackFee)) obj.ackFee = object.ackFee.map((e: any) => Coin.fromJSON(e));
    if (Array.isArray(object?.timeoutFee))
      obj.timeoutFee = object.timeoutFee.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Fee): JsonSafe<Fee> {
    const obj: any = {};
    if (message.recvFee) {
      obj.recvFee = message.recvFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.recvFee = [];
    }
    if (message.ackFee) {
      obj.ackFee = message.ackFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.ackFee = [];
    }
    if (message.timeoutFee) {
      obj.timeoutFee = message.timeoutFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.timeoutFee = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee {
    const message = createBaseFee();
    message.recvFee = object.recvFee?.map((e) => Coin.fromPartial(e)) || [];
    message.ackFee = object.ackFee?.map((e) => Coin.fromPartial(e)) || [];
    message.timeoutFee = object.timeoutFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBasePacketID(): PacketID {
  return {
    channelId: "",
    portId: "",
    sequence: BigInt(0),
  };
}
export const PacketID = {
  typeUrl: "/neutron.feerefunder.PacketID",
  encode(message: PacketID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketID {
    const obj = createBasePacketID();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    return obj;
  },
  toJSON(message: PacketID): JsonSafe<PacketID> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.portId !== undefined && (obj.portId = message.portId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PacketID>, I>>(object: I): PacketID {
    const message = createBasePacketID();
    message.channelId = object.channelId ?? "";
    message.portId = object.portId ?? "";
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    return message;
  },
};
