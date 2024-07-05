//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "neutron.dex.v2";
/** Params defines the parameters for the module. */
export interface Params {
  feeTiers: bigint[];
  maxTrueTakerSpread: string;
}
function createBaseParams(): Params {
  return {
    feeTiers: [],
    maxTrueTakerSpread: "",
  };
}
export const Params = {
  typeUrl: "/neutron.dex.v2.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.feeTiers) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.maxTrueTakerSpread !== "") {
      writer.uint32(18).string(message.maxTrueTakerSpread);
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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.feeTiers.push(reader.uint64());
            }
          } else {
            message.feeTiers.push(reader.uint64());
          }
          break;
        case 2:
          message.maxTrueTakerSpread = reader.string();
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
    if (Array.isArray(object?.feeTiers)) obj.feeTiers = object.feeTiers.map((e: any) => BigInt(e.toString()));
    if (isSet(object.maxTrueTakerSpread)) obj.maxTrueTakerSpread = String(object.maxTrueTakerSpread);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.feeTiers) {
      obj.feeTiers = message.feeTiers.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.feeTiers = [];
    }
    message.maxTrueTakerSpread !== undefined && (obj.maxTrueTakerSpread = message.maxTrueTakerSpread);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.feeTiers = object.feeTiers?.map((e) => BigInt(e.toString())) || [];
    message.maxTrueTakerSpread = object.maxTrueTakerSpread ?? "";
    return message;
  },
};
