//@ts-nocheck
/* eslint-disable */
import { PairID } from "./pair_id";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export interface PoolMetadata {
  id: bigint;
  tick: bigint;
  fee: bigint;
  pairId?: PairID;
}
function createBasePoolMetadata(): PoolMetadata {
  return {
    id: BigInt(0),
    tick: BigInt(0),
    fee: BigInt(0),
    pairId: undefined,
  };
}
export const PoolMetadata = {
  typeUrl: "/neutron.dex.PoolMetadata",
  encode(message: PoolMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.tick !== BigInt(0)) {
      writer.uint32(16).int64(message.tick);
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(24).uint64(message.fee);
    }
    if (message.pairId !== undefined) {
      PairID.encode(message.pairId, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.tick = reader.int64();
          break;
        case 3:
          message.fee = reader.uint64();
          break;
        case 4:
          message.pairId = PairID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolMetadata {
    const obj = createBasePoolMetadata();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.tick)) obj.tick = BigInt(object.tick.toString());
    if (isSet(object.fee)) obj.fee = BigInt(object.fee.toString());
    if (isSet(object.pairId)) obj.pairId = PairID.fromJSON(object.pairId);
    return obj;
  },
  toJSON(message: PoolMetadata): JsonSafe<PoolMetadata> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.tick !== undefined && (obj.tick = (message.tick || BigInt(0)).toString());
    message.fee !== undefined && (obj.fee = (message.fee || BigInt(0)).toString());
    message.pairId !== undefined && (obj.pairId = message.pairId ? PairID.toJSON(message.pairId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolMetadata>, I>>(object: I): PoolMetadata {
    const message = createBasePoolMetadata();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.tick !== undefined && object.tick !== null) {
      message.tick = BigInt(object.tick.toString());
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee.toString());
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = PairID.fromPartial(object.pairId);
    }
    return message;
  },
};
