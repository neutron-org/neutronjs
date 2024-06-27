/* eslint-disable */
import { PairID } from "./pair_id";
import { Pool } from "./pool";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export interface DepositRecord {
  pairId?: PairID;
  sharesOwned: string;
  centerTickIndex: bigint;
  lowerTickIndex: bigint;
  upperTickIndex: bigint;
  fee: bigint;
  totalShares?: string;
  pool?: Pool;
}
function createBaseDepositRecord(): DepositRecord {
  return {
    pairId: undefined,
    sharesOwned: "",
    centerTickIndex: BigInt(0),
    lowerTickIndex: BigInt(0),
    upperTickIndex: BigInt(0),
    fee: BigInt(0),
    totalShares: undefined,
    pool: undefined,
  };
}
export const DepositRecord = {
  typeUrl: "/neutron.dex.DepositRecord",
  encode(message: DepositRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pairId !== undefined) {
      PairID.encode(message.pairId, writer.uint32(10).fork()).ldelim();
    }
    if (message.sharesOwned !== "") {
      writer.uint32(18).string(message.sharesOwned);
    }
    if (message.centerTickIndex !== BigInt(0)) {
      writer.uint32(24).int64(message.centerTickIndex);
    }
    if (message.lowerTickIndex !== BigInt(0)) {
      writer.uint32(32).int64(message.lowerTickIndex);
    }
    if (message.upperTickIndex !== BigInt(0)) {
      writer.uint32(40).int64(message.upperTickIndex);
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(48).uint64(message.fee);
    }
    if (message.totalShares !== undefined) {
      writer.uint32(58).string(message.totalShares);
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairId = PairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.sharesOwned = reader.string();
          break;
        case 3:
          message.centerTickIndex = reader.int64();
          break;
        case 4:
          message.lowerTickIndex = reader.int64();
          break;
        case 5:
          message.upperTickIndex = reader.int64();
          break;
        case 6:
          message.fee = reader.uint64();
          break;
        case 7:
          message.totalShares = reader.string();
          break;
        case 8:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositRecord {
    const obj = createBaseDepositRecord();
    if (isSet(object.pairId)) obj.pairId = PairID.fromJSON(object.pairId);
    if (isSet(object.sharesOwned)) obj.sharesOwned = String(object.sharesOwned);
    if (isSet(object.centerTickIndex)) obj.centerTickIndex = BigInt(object.centerTickIndex.toString());
    if (isSet(object.lowerTickIndex)) obj.lowerTickIndex = BigInt(object.lowerTickIndex.toString());
    if (isSet(object.upperTickIndex)) obj.upperTickIndex = BigInt(object.upperTickIndex.toString());
    if (isSet(object.fee)) obj.fee = BigInt(object.fee.toString());
    if (isSet(object.totalShares)) obj.totalShares = String(object.totalShares);
    if (isSet(object.pool)) obj.pool = Pool.fromJSON(object.pool);
    return obj;
  },
  toJSON(message: DepositRecord): JsonSafe<DepositRecord> {
    const obj: any = {};
    message.pairId !== undefined && (obj.pairId = message.pairId ? PairID.toJSON(message.pairId) : undefined);
    message.sharesOwned !== undefined && (obj.sharesOwned = message.sharesOwned);
    message.centerTickIndex !== undefined &&
      (obj.centerTickIndex = (message.centerTickIndex || BigInt(0)).toString());
    message.lowerTickIndex !== undefined &&
      (obj.lowerTickIndex = (message.lowerTickIndex || BigInt(0)).toString());
    message.upperTickIndex !== undefined &&
      (obj.upperTickIndex = (message.upperTickIndex || BigInt(0)).toString());
    message.fee !== undefined && (obj.fee = (message.fee || BigInt(0)).toString());
    message.totalShares !== undefined && (obj.totalShares = message.totalShares);
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DepositRecord>, I>>(object: I): DepositRecord {
    const message = createBaseDepositRecord();
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = PairID.fromPartial(object.pairId);
    }
    message.sharesOwned = object.sharesOwned ?? "";
    if (object.centerTickIndex !== undefined && object.centerTickIndex !== null) {
      message.centerTickIndex = BigInt(object.centerTickIndex.toString());
    }
    if (object.lowerTickIndex !== undefined && object.lowerTickIndex !== null) {
      message.lowerTickIndex = BigInt(object.lowerTickIndex.toString());
    }
    if (object.upperTickIndex !== undefined && object.upperTickIndex !== null) {
      message.upperTickIndex = BigInt(object.upperTickIndex.toString());
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee.toString());
    }
    message.totalShares = object.totalShares ?? undefined;
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromPartial(object.pool);
    }
    return message;
  },
};
