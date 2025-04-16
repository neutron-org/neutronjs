//@ts-nocheck
/* eslint-disable */
import { TradePairID } from "./trade_pair_id";
import { LimitOrderType, limitOrderTypeFromJSON, limitOrderTypeToJSON } from "./tx";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export interface LimitOrderTrancheUser {
  tradePairId?: TradePairID;
  tickIndexTakerToMaker: bigint;
  trancheKey: string;
  address: string;
  sharesOwned: string;
  sharesWithdrawn: string;
  /** TODO: remove this in next release. It is no longer used */
  sharesCancelled: string;
  orderType: LimitOrderType;
}
function createBaseLimitOrderTrancheUser(): LimitOrderTrancheUser {
  return {
    tradePairId: undefined,
    tickIndexTakerToMaker: BigInt(0),
    trancheKey: "",
    address: "",
    sharesOwned: "",
    sharesWithdrawn: "",
    sharesCancelled: "",
    orderType: 0,
  };
}
export const LimitOrderTrancheUser = {
  typeUrl: "/neutron.dex.LimitOrderTrancheUser",
  encode(message: LimitOrderTrancheUser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tradePairId !== undefined) {
      TradePairID.encode(message.tradePairId, writer.uint32(10).fork()).ldelim();
    }
    if (message.tickIndexTakerToMaker !== BigInt(0)) {
      writer.uint32(16).int64(message.tickIndexTakerToMaker);
    }
    if (message.trancheKey !== "") {
      writer.uint32(26).string(message.trancheKey);
    }
    if (message.address !== "") {
      writer.uint32(34).string(message.address);
    }
    if (message.sharesOwned !== "") {
      writer.uint32(42).string(message.sharesOwned);
    }
    if (message.sharesWithdrawn !== "") {
      writer.uint32(50).string(message.sharesWithdrawn);
    }
    if (message.sharesCancelled !== "") {
      writer.uint32(58).string(message.sharesCancelled);
    }
    if (message.orderType !== 0) {
      writer.uint32(64).int32(message.orderType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LimitOrderTrancheUser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLimitOrderTrancheUser();
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
        case 4:
          message.address = reader.string();
          break;
        case 5:
          message.sharesOwned = reader.string();
          break;
        case 6:
          message.sharesWithdrawn = reader.string();
          break;
        case 7:
          message.sharesCancelled = reader.string();
          break;
        case 8:
          message.orderType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LimitOrderTrancheUser {
    const obj = createBaseLimitOrderTrancheUser();
    if (isSet(object.tradePairId)) obj.tradePairId = TradePairID.fromJSON(object.tradePairId);
    if (isSet(object.tickIndexTakerToMaker))
      obj.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
    if (isSet(object.trancheKey)) obj.trancheKey = String(object.trancheKey);
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.sharesOwned)) obj.sharesOwned = String(object.sharesOwned);
    if (isSet(object.sharesWithdrawn)) obj.sharesWithdrawn = String(object.sharesWithdrawn);
    if (isSet(object.sharesCancelled)) obj.sharesCancelled = String(object.sharesCancelled);
    if (isSet(object.orderType)) obj.orderType = limitOrderTypeFromJSON(object.orderType);
    return obj;
  },
  toJSON(message: LimitOrderTrancheUser): JsonSafe<LimitOrderTrancheUser> {
    const obj: any = {};
    message.tradePairId !== undefined &&
      (obj.tradePairId = message.tradePairId ? TradePairID.toJSON(message.tradePairId) : undefined);
    message.tickIndexTakerToMaker !== undefined &&
      (obj.tickIndexTakerToMaker = (message.tickIndexTakerToMaker || BigInt(0)).toString());
    message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
    message.address !== undefined && (obj.address = message.address);
    message.sharesOwned !== undefined && (obj.sharesOwned = message.sharesOwned);
    message.sharesWithdrawn !== undefined && (obj.sharesWithdrawn = message.sharesWithdrawn);
    message.sharesCancelled !== undefined && (obj.sharesCancelled = message.sharesCancelled);
    message.orderType !== undefined && (obj.orderType = limitOrderTypeToJSON(message.orderType));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LimitOrderTrancheUser>, I>>(object: I): LimitOrderTrancheUser {
    const message = createBaseLimitOrderTrancheUser();
    if (object.tradePairId !== undefined && object.tradePairId !== null) {
      message.tradePairId = TradePairID.fromPartial(object.tradePairId);
    }
    if (object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null) {
      message.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
    }
    message.trancheKey = object.trancheKey ?? "";
    message.address = object.address ?? "";
    message.sharesOwned = object.sharesOwned ?? "";
    message.sharesWithdrawn = object.sharesWithdrawn ?? "";
    message.sharesCancelled = object.sharesCancelled ?? "";
    message.orderType = object.orderType ?? 0;
    return message;
  },
  fromAmino(object: LimitOrderTrancheUserAmino): LimitOrderTrancheUser {
    const message = createBaseLimitOrderTrancheUser();
    if (object.trade_pair_id !== undefined && object.trade_pair_id !== null) {
      message.tradePairId = TradePairID.fromAmino(object.trade_pair_id);
    }
    if (object.tick_index_taker_to_maker !== undefined && object.tick_index_taker_to_maker !== null) {
      message.tickIndexTakerToMaker = BigInt(object.tick_index_taker_to_maker);
    }
    if (object.tranche_key !== undefined && object.tranche_key !== null) {
      message.trancheKey = object.tranche_key;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.shares_owned !== undefined && object.shares_owned !== null) {
      message.sharesOwned = object.shares_owned;
    }
    if (object.shares_withdrawn !== undefined && object.shares_withdrawn !== null) {
      message.sharesWithdrawn = object.shares_withdrawn;
    }
    if (object.shares_cancelled !== undefined && object.shares_cancelled !== null) {
      message.sharesCancelled = object.shares_cancelled;
    }
    if (object.order_type !== undefined && object.order_type !== null) {
      message.orderType = object.order_type;
    }
    return message;
  },
  toAmino(message: LimitOrderTrancheUser): LimitOrderTrancheUserAmino {
    const obj: any = {};
    obj.trade_pair_id = message.tradePairId ? TradePairID.toAmino(message.tradePairId) : undefined;
    obj.tick_index_taker_to_maker =
      message.tickIndexTakerToMaker !== BigInt(0) ? message.tickIndexTakerToMaker?.toString() : undefined;
    obj.tranche_key = message.trancheKey === "" ? undefined : message.trancheKey;
    obj.address = message.address === "" ? undefined : message.address;
    obj.shares_owned = message.sharesOwned ?? "";
    obj.shares_withdrawn = message.sharesWithdrawn ?? "";
    obj.shares_cancelled = message.sharesCancelled ?? "";
    obj.order_type = message.orderType === 0 ? undefined : message.orderType;
    return obj;
  },
  fromAminoMsg(object: LimitOrderTrancheUserAminoMsg): LimitOrderTrancheUser {
    return LimitOrderTrancheUser.fromAmino(object.value);
  },
};
