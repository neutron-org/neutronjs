//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.types.v1";
/**
 * CurrencyPair is the standard representation of a pair of assets, where one
 * (Base) is priced in terms of the other (Quote)
 */
export interface CurrencyPair {
  base: string;
  quote: string;
}
function createBaseCurrencyPair(): CurrencyPair {
  return {
    base: "",
    quote: "",
  };
}
export const CurrencyPair = {
  typeUrl: "/slinky.types.v1.CurrencyPair",
  encode(message: CurrencyPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurrencyPair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.string();
          break;
        case 2:
          message.quote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CurrencyPair {
    const obj = createBaseCurrencyPair();
    if (isSet(object.base)) obj.base = String(object.base);
    if (isSet(object.quote)) obj.quote = String(object.quote);
    return obj;
  },
  toJSON(message: CurrencyPair): JsonSafe<CurrencyPair> {
    const obj: any = {};
    message.base !== undefined && (obj.base = message.base);
    message.quote !== undefined && (obj.quote = message.quote);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CurrencyPair>, I>>(object: I): CurrencyPair {
    const message = createBaseCurrencyPair();
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    return message;
  },
  fromAmino(object: CurrencyPairAmino): CurrencyPair {
    const message = createBaseCurrencyPair();
    if (object.Base !== undefined && object.Base !== null) {
      message.base = object.Base;
    }
    if (object.Quote !== undefined && object.Quote !== null) {
      message.quote = object.Quote;
    }
    return message;
  },
  toAmino(message: CurrencyPair): CurrencyPairAmino {
    const obj: any = {};
    obj.Base = message.base === "" ? undefined : message.base;
    obj.Quote = message.quote === "" ? undefined : message.quote;
    return obj;
  },
  fromAminoMsg(object: CurrencyPairAminoMsg): CurrencyPair {
    return CurrencyPair.fromAmino(object.value);
  },
};
