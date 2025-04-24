//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export interface PairID {
  token0: string;
  token1: string;
}
function createBasePairID(): PairID {
  return {
    token0: "",
    token1: "",
  };
}
export const PairID = {
  typeUrl: "/neutron.dex.PairID",
  encode(message: PairID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token0 !== "") {
      writer.uint32(10).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(18).string(message.token1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PairID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token0 = reader.string();
          break;
        case 2:
          message.token1 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PairID {
    const obj = createBasePairID();
    if (isSet(object.token0)) obj.token0 = String(object.token0);
    if (isSet(object.token1)) obj.token1 = String(object.token1);
    return obj;
  },
  toJSON(message: PairID): JsonSafe<PairID> {
    const obj: any = {};
    message.token0 !== undefined && (obj.token0 = message.token0);
    message.token1 !== undefined && (obj.token1 = message.token1);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PairID>, I>>(object: I): PairID {
    const message = createBasePairID();
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    return message;
  },
};
