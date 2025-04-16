//@ts-nocheck
/* eslint-disable */
import { TradePairID } from "./trade_pair_id";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export interface PoolReservesKey {
  tradePairId?: TradePairID;
  tickIndexTakerToMaker: bigint;
  fee: bigint;
}
export interface PoolReserves {
  key?: PoolReservesKey;
  reservesMakerDenom: string;
  /** DEPRECATED: price_taker_to_maker will be removed in future release, `maker_price` should always be used. */
  /** @deprecated */
  priceTakerToMaker: string;
  /**
   * DEPRECATED: price_opposite_taker_maker was an internal implementation detail and will be removed in a future release.
   * It is being kept strictly for backwards compatibility. The actual field value is unused.
   */
  /** @deprecated */
  priceOppositeTakerToMaker: string;
  /** This is the price of the PoolReserves denominated in the opposite token. (ie. 1 TokenA with a maker_price of 10 is worth 10 TokenB ) */
  makerPrice: string;
}
function createBasePoolReservesKey(): PoolReservesKey {
  return {
    tradePairId: undefined,
    tickIndexTakerToMaker: BigInt(0),
    fee: BigInt(0),
  };
}
export const PoolReservesKey = {
  typeUrl: "/neutron.dex.PoolReservesKey",
  encode(message: PoolReservesKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradePairId !== undefined) {
      TradePairID.encode(message.tradePairId, writer.uint32(10).fork()).ldelim();
    }
    if (message.tickIndexTakerToMaker !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.fee !== BigInt(0)) {
      writer.uint32(24).uint64(message.fee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolReservesKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolReservesKey();
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
          message.fee = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolReservesKey {
    const obj = createBasePoolReservesKey();
    if (isSet(object.tradePairId)) obj.tradePairId = TradePairID.fromJSON(object.tradePairId);
    if (isSet(object.tickIndexTakerToMaker))
      obj.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
    if (isSet(object.fee)) obj.fee = BigInt(object.fee.toString());
    return obj;
  },
  toJSON(message: PoolReservesKey): JsonSafe<PoolReservesKey> {
    const obj: any = {};
    message.tradePairId !== undefined &&
      (obj.tradePairId = message.tradePairId ? TradePairID.toJSON(message.tradePairId) : undefined);
    message.tickIndexTakerToMaker !== undefined &&
      (obj.tickIndexTakerToMaker = (message.tickIndexTakerToMaker || BigInt(0)).toString());
    message.fee !== undefined && (obj.fee = (message.fee || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolReservesKey>, I>>(object: I): PoolReservesKey {
    const message = createBasePoolReservesKey();
    if (object.tradePairId !== undefined && object.tradePairId !== null) {
      message.tradePairId = TradePairID.fromPartial(object.tradePairId);
    }
    if (object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null) {
      message.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee.toString());
    }
    return message;
  },
  fromAmino(object: PoolReservesKeyAmino): PoolReservesKey {
    const message = createBasePoolReservesKey();
    if (object.trade_pair_id !== undefined && object.trade_pair_id !== null) {
      message.tradePairId = TradePairID.fromAmino(object.trade_pair_id);
    }
    if (object.tick_index_taker_to_maker !== undefined && object.tick_index_taker_to_maker !== null) {
      message.tickIndexTakerToMaker = BigInt(object.tick_index_taker_to_maker);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = BigInt(object.fee);
    }
    return message;
  },
  toAmino(message: PoolReservesKey): PoolReservesKeyAmino {
    const obj: any = {};
    obj.trade_pair_id = message.tradePairId ? TradePairID.toAmino(message.tradePairId) : undefined;
    obj.tick_index_taker_to_maker =
      message.tickIndexTakerToMaker !== BigInt(0) ? message.tickIndexTakerToMaker?.toString() : undefined;
    obj.fee = message.fee !== BigInt(0) ? message.fee?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolReservesKeyAminoMsg): PoolReservesKey {
    return PoolReservesKey.fromAmino(object.value);
  },
};
function createBasePoolReserves(): PoolReserves {
  return {
    key: undefined,
    reservesMakerDenom: "",
    priceTakerToMaker: "",
    priceOppositeTakerToMaker: "",
    makerPrice: "",
  };
}
export const PoolReserves = {
  typeUrl: "/neutron.dex.PoolReserves",
  encode(message: PoolReserves, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      PoolReservesKey.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.reservesMakerDenom !== "") {
      writer.uint32(18).string(message.reservesMakerDenom);
    }
    if (message.priceTakerToMaker !== "") {
      writer.uint32(26).string(message.priceTakerToMaker);
    }
    if (message.priceOppositeTakerToMaker !== "") {
      writer.uint32(34).string(message.priceOppositeTakerToMaker);
    }
    if (message.makerPrice !== "") {
      writer.uint32(42).string(message.makerPrice);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolReserves {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolReserves();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = PoolReservesKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.reservesMakerDenom = reader.string();
          break;
        case 3:
          message.priceTakerToMaker = reader.string();
          break;
        case 4:
          message.priceOppositeTakerToMaker = reader.string();
          break;
        case 5:
          message.makerPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolReserves {
    const obj = createBasePoolReserves();
    if (isSet(object.key)) obj.key = PoolReservesKey.fromJSON(object.key);
    if (isSet(object.reservesMakerDenom)) obj.reservesMakerDenom = String(object.reservesMakerDenom);
    if (isSet(object.priceTakerToMaker)) obj.priceTakerToMaker = String(object.priceTakerToMaker);
    if (isSet(object.priceOppositeTakerToMaker))
      obj.priceOppositeTakerToMaker = String(object.priceOppositeTakerToMaker);
    if (isSet(object.makerPrice)) obj.makerPrice = String(object.makerPrice);
    return obj;
  },
  toJSON(message: PoolReserves): JsonSafe<PoolReserves> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? PoolReservesKey.toJSON(message.key) : undefined);
    message.reservesMakerDenom !== undefined && (obj.reservesMakerDenom = message.reservesMakerDenom);
    message.priceTakerToMaker !== undefined && (obj.priceTakerToMaker = message.priceTakerToMaker);
    message.priceOppositeTakerToMaker !== undefined &&
      (obj.priceOppositeTakerToMaker = message.priceOppositeTakerToMaker);
    message.makerPrice !== undefined && (obj.makerPrice = message.makerPrice);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PoolReserves>, I>>(object: I): PoolReserves {
    const message = createBasePoolReserves();
    if (object.key !== undefined && object.key !== null) {
      message.key = PoolReservesKey.fromPartial(object.key);
    }
    message.reservesMakerDenom = object.reservesMakerDenom ?? "";
    message.priceTakerToMaker = object.priceTakerToMaker ?? "";
    message.priceOppositeTakerToMaker = object.priceOppositeTakerToMaker ?? "";
    message.makerPrice = object.makerPrice ?? "";
    return message;
  },
  fromAmino(object: PoolReservesAmino): PoolReserves {
    const message = createBasePoolReserves();
    if (object.key !== undefined && object.key !== null) {
      message.key = PoolReservesKey.fromAmino(object.key);
    }
    if (object.reserves_maker_denom !== undefined && object.reserves_maker_denom !== null) {
      message.reservesMakerDenom = object.reserves_maker_denom;
    }
    if (object.price_taker_to_maker !== undefined && object.price_taker_to_maker !== null) {
      message.priceTakerToMaker = object.price_taker_to_maker;
    }
    if (object.price_opposite_taker_to_maker !== undefined && object.price_opposite_taker_to_maker !== null) {
      message.priceOppositeTakerToMaker = object.price_opposite_taker_to_maker;
    }
    if (object.maker_price !== undefined && object.maker_price !== null) {
      message.makerPrice = object.maker_price;
    }
    return message;
  },
  toAmino(message: PoolReserves): PoolReservesAmino {
    const obj: any = {};
    obj.key = message.key ? PoolReservesKey.toAmino(message.key) : undefined;
    obj.reserves_maker_denom = message.reservesMakerDenom ?? "";
    obj.price_taker_to_maker = message.priceTakerToMaker ?? "";
    obj.price_opposite_taker_to_maker = message.priceOppositeTakerToMaker ?? "";
    obj.maker_price = message.makerPrice ?? "";
    return obj;
  },
  fromAminoMsg(object: PoolReservesAminoMsg): PoolReserves {
    return PoolReserves.fromAmino(object.value);
  },
};
