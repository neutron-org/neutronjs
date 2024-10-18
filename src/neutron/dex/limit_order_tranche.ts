/* eslint-disable */
import { TradePairID } from "./trade_pair_id";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export interface LimitOrderTrancheKey {
  tradePairId?: TradePairID;
  tickIndexTakerToMaker: bigint;
  trancheKey: string;
}
export interface LimitOrderTranche {
  key?: LimitOrderTrancheKey;
  reservesMakerDenom: string;
  reservesTakerDenom: string;
  totalMakerDenom: string;
  totalTakerDenom: string;
  /**
   * JIT orders also use expiration_time to handle deletion but represent a special case
   * All JIT orders have a expiration_time of 0 and an exception is made to still treat these orders as live
   * Order deletion still functions the same and the orders will be deleted at the end of the block
   */
  expirationTime?: Timestamp;
  /** DEPRECATED: price_taker_to_maker will be removed in future release, `maker_price` should always be used. */
  /** @deprecated */
  priceTakerToMaker: string;
  /** This is the price of the LimitOrder denominated in the opposite token. (ie. 1 TokenA with a maker_price of 10 is worth 10 TokenB ) */
  makerPrice: string;
}
function createBaseLimitOrderTrancheKey(): LimitOrderTrancheKey {
  return {
    tradePairId: undefined,
    tickIndexTakerToMaker: BigInt(0),
    trancheKey: "",
  };
}
export const LimitOrderTrancheKey = {
  typeUrl: "/neutron.dex.LimitOrderTrancheKey",
  encode(message: LimitOrderTrancheKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradePairId !== undefined) {
      TradePairID.encode(message.tradePairId, writer.uint32(10).fork()).ldelim();
    }
    if (message.tickIndexTakerToMaker !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.trancheKey !== "") {
      writer.uint32(26).string(message.trancheKey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LimitOrderTrancheKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderTrancheKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradePairId = TradePairID.decode(reader, reader.uint32());
          break;
        case 2:
          message.tickIndexTakerToMaker = reader.int64();
          break;
        case 3:
          message.trancheKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LimitOrderTrancheKey {
    const obj = createBaseLimitOrderTrancheKey();
    if (isSet(object.tradePairId)) obj.tradePairId = TradePairID.fromJSON(object.tradePairId);
    if (isSet(object.tickIndexTakerToMaker))
      obj.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
    if (isSet(object.trancheKey)) obj.trancheKey = String(object.trancheKey);
    return obj;
  },
  toJSON(message: LimitOrderTrancheKey): JsonSafe<LimitOrderTrancheKey> {
    const obj: any = {};
    message.tradePairId !== undefined &&
      (obj.tradePairId = message.tradePairId ? TradePairID.toJSON(message.tradePairId) : undefined);
    message.tickIndexTakerToMaker !== undefined &&
      (obj.tickIndexTakerToMaker = (message.tickIndexTakerToMaker || BigInt(0)).toString());
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LimitOrderTrancheKey>, I>>(object: I): LimitOrderTrancheKey {
    const message = createBaseLimitOrderTrancheKey();
    if (object.tradePairId !== undefined && object.tradePairId !== null) {
      message.tradePairId = TradePairID.fromPartial(object.tradePairId);
    }
    if (object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null) {
      message.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
    }
    message.trancheKey = object.trancheKey ?? "";
    return message;
  },
};
function createBaseLimitOrderTranche(): LimitOrderTranche {
  return {
    key: undefined,
    reservesMakerDenom: "",
    reservesTakerDenom: "",
    totalMakerDenom: "",
    totalTakerDenom: "",
    expirationTime: undefined,
    priceTakerToMaker: "",
    makerPrice: "",
  };
}
export const LimitOrderTranche = {
  typeUrl: "/neutron.dex.LimitOrderTranche",
  encode(message: LimitOrderTranche, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      LimitOrderTrancheKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservesMakerDenom !== "") {
      writer.uint32(18).string(message.reservesMakerDenom);
    }
    if (message.reservesTakerDenom !== "") {
      writer.uint32(26).string(message.reservesTakerDenom);
    }
    if (message.totalMakerDenom !== "") {
      writer.uint32(34).string(message.totalMakerDenom);
    }
    if (message.totalTakerDenom !== "") {
      writer.uint32(42).string(message.totalTakerDenom);
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(message.expirationTime, writer.uint32(50).fork()).ldelim();
    }
    if (message.priceTakerToMaker !== "") {
      writer.uint32(58).string(message.priceTakerToMaker);
    }
    if (message.makerPrice !== "") {
      writer.uint32(66).string(message.makerPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LimitOrderTranche {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderTranche();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = LimitOrderTrancheKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.reservesMakerDenom = reader.string();
          break;
        case 3:
          message.reservesTakerDenom = reader.string();
          break;
        case 4:
          message.totalMakerDenom = reader.string();
          break;
        case 5:
          message.totalTakerDenom = reader.string();
          break;
        case 6:
          message.expirationTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.priceTakerToMaker = reader.string();
          break;
        case 8:
          message.makerPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LimitOrderTranche {
    const obj = createBaseLimitOrderTranche();
    if (isSet(object.key)) obj.key = LimitOrderTrancheKey.fromJSON(object.key);
    if (isSet(object.reservesMakerDenom)) obj.reservesMakerDenom = String(object.reservesMakerDenom);
    if (isSet(object.reservesTakerDenom)) obj.reservesTakerDenom = String(object.reservesTakerDenom);
    if (isSet(object.totalMakerDenom)) obj.totalMakerDenom = String(object.totalMakerDenom);
    if (isSet(object.totalTakerDenom)) obj.totalTakerDenom = String(object.totalTakerDenom);
    if (isSet(object.expirationTime)) obj.expirationTime = fromJsonTimestamp(object.expirationTime);
    if (isSet(object.priceTakerToMaker)) obj.priceTakerToMaker = String(object.priceTakerToMaker);
    if (isSet(object.makerPrice)) obj.makerPrice = String(object.makerPrice);
    return obj;
  },
  toJSON(message: LimitOrderTranche): JsonSafe<LimitOrderTranche> {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = message.key ? LimitOrderTrancheKey.toJSON(message.key) : undefined);
    message.reservesMakerDenom !== undefined && (obj.reservesMakerDenom = message.reservesMakerDenom);
    message.reservesTakerDenom !== undefined && (obj.reservesTakerDenom = message.reservesTakerDenom);
    message.totalMakerDenom !== undefined && (obj.totalMakerDenom = message.totalMakerDenom);
    message.totalTakerDenom !== undefined && (obj.totalTakerDenom = message.totalTakerDenom);
    message.expirationTime !== undefined &&
      (obj.expirationTime = fromTimestamp(message.expirationTime).toISOString());
    message.priceTakerToMaker !== undefined && (obj.priceTakerToMaker = message.priceTakerToMaker);
    message.makerPrice !== undefined && (obj.makerPrice = message.makerPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LimitOrderTranche>, I>>(object: I): LimitOrderTranche {
    const message = createBaseLimitOrderTranche();
    if (object.key !== undefined && object.key !== null) {
      message.key = LimitOrderTrancheKey.fromPartial(object.key);
    }
    message.reservesMakerDenom = object.reservesMakerDenom ?? "";
    message.reservesTakerDenom = object.reservesTakerDenom ?? "";
    message.totalMakerDenom = object.totalMakerDenom ?? "";
    message.totalTakerDenom = object.totalTakerDenom ?? "";
    if (object.expirationTime !== undefined && object.expirationTime !== null) {
      message.expirationTime = Timestamp.fromPartial(object.expirationTime);
    }
    message.priceTakerToMaker = object.priceTakerToMaker ?? "";
    message.makerPrice = object.makerPrice ?? "";
    return message;
  },
};
