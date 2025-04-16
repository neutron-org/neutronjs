//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export interface TradePairID {
  makerDenom: string;
  takerDenom: string;
}
function createBaseTradePairID(): TradePairID {
  return {
    makerDenom: "",
    takerDenom: "",
  };
}
export const TradePairID = {
  typeUrl: "/neutron.dex.TradePairID",
  encode(message: TradePairID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.makerDenom !== "") {
      writer.uint32(18).string(message.makerDenom);
    }
    if (message.takerDenom !== "") {
      writer.uint32(26).string(message.takerDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TradePairID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradePairID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.makerDenom = reader.string();
          break;
        case 3:
          message.takerDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TradePairID {
    const obj = createBaseTradePairID();
    if (isSet(object.makerDenom)) obj.makerDenom = String(object.makerDenom);
    if (isSet(object.takerDenom)) obj.takerDenom = String(object.takerDenom);
    return obj;
  },
  toJSON(message: TradePairID): JsonSafe<TradePairID> {
    const obj: any = {};
    message.makerDenom !== undefined && (obj.makerDenom = message.makerDenom);
    message.takerDenom !== undefined && (obj.takerDenom = message.takerDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TradePairID>, I>>(object: I): TradePairID {
    const message = createBaseTradePairID();
    message.makerDenom = object.makerDenom ?? "";
    message.takerDenom = object.takerDenom ?? "";
    return message;
  },
  fromAmino(object: TradePairIDAmino): TradePairID {
    const message = createBaseTradePairID();
    if (object.maker_denom !== undefined && object.maker_denom !== null) {
      message.makerDenom = object.maker_denom;
    }
    if (object.taker_denom !== undefined && object.taker_denom !== null) {
      message.takerDenom = object.taker_denom;
    }
    return message;
  },
  toAmino(message: TradePairID): TradePairIDAmino {
    const obj: any = {};
    obj.maker_denom = message.makerDenom === "" ? undefined : message.makerDenom;
    obj.taker_denom = message.takerDenom === "" ? undefined : message.takerDenom;
    return obj;
  },
  fromAminoMsg(object: TradePairIDAminoMsg): TradePairID {
    return TradePairID.fromAmino(object.value);
  },
};
