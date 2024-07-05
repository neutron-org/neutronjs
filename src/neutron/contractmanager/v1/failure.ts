//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "neutron.contractmanager.v1";
/** Deprecated. Used only for migration purposes. */
export interface Failure {
  /** ChannelId */
  channelId: string;
  /** Address of the failed contract */
  address: string;
  /** id of the failure under specific address */
  id: bigint;
  /** ACK id to restore */
  ackId: bigint;
  /** Acknowledgement type */
  ackType: string;
}
function createBaseFailure(): Failure {
  return {
    channelId: "",
    address: "",
    id: BigInt(0),
    ackId: BigInt(0),
    ackType: "",
  };
}
export const Failure = {
  typeUrl: "/neutron.contractmanager.v1.Failure",
  encode(message: Failure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.ackId !== BigInt(0)) {
      writer.uint32(32).uint64(message.ackId);
    }
    if (message.ackType !== "") {
      writer.uint32(42).string(message.ackType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Failure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.id = reader.uint64();
          break;
        case 4:
          message.ackId = reader.uint64();
          break;
        case 5:
          message.ackType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Failure {
    const obj = createBaseFailure();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.ackId)) obj.ackId = BigInt(object.ackId.toString());
    if (isSet(object.ackType)) obj.ackType = String(object.ackType);
    return obj;
  },
  toJSON(message: Failure): JsonSafe<Failure> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.address !== undefined && (obj.address = message.address);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.ackId !== undefined && (obj.ackId = (message.ackId || BigInt(0)).toString());
    message.ackType !== undefined && (obj.ackType = message.ackType);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Failure>, I>>(object: I): Failure {
    const message = createBaseFailure();
    message.channelId = object.channelId ?? "";
    message.address = object.address ?? "";
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.ackId !== undefined && object.ackId !== null) {
      message.ackId = BigInt(object.ackId.toString());
    }
    message.ackType = object.ackType ?? "";
    return message;
  },
};
