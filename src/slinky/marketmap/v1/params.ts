//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.marketmap.v1";
/** Params defines the parameters for the x/marketmap module. */
export interface Params {
  /**
   * MarketAuthorities is the list of authority accounts that are able to
   * control updating the marketmap.
   */
  marketAuthorities: string[];
  /**
   * Admin is an address that can remove addresses from the MarketAuthorities
   * list. Only governance can add to the MarketAuthorities or change the Admin.
   */
  admin: string;
}
function createBaseParams(): Params {
  return {
    marketAuthorities: [],
    admin: "",
  };
}
export const Params = {
  typeUrl: "/slinky.marketmap.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.marketAuthorities) {
      writer.uint32(10).string(v!);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketAuthorities.push(reader.string());
          break;
        case 2:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (Array.isArray(object?.marketAuthorities))
      obj.marketAuthorities = object.marketAuthorities.map((e: any) => String(e));
    if (isSet(object.admin)) obj.admin = String(object.admin);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.marketAuthorities) {
      obj.marketAuthorities = message.marketAuthorities.map((e) => e);
    } else {
      obj.marketAuthorities = [];
    }
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.marketAuthorities = object.marketAuthorities?.map((e) => e) || [];
    message.admin = object.admin ?? "";
    return message;
  },
};
