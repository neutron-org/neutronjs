//@ts-nocheck
/* eslint-disable */
import { Fee } from "./fee";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.feerefunder";
/** Params defines the parameters for the module. */
export interface Params {
  minFee: Fee;
}
function createBaseParams(): Params {
  return {
    minFee: Fee.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/neutron.feerefunder.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minFee !== undefined) {
      Fee.encode(message.minFee, writer.uint32(10).fork()).ldelim();
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
          message.minFee = Fee.decode(reader, reader.uint32());
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
    if (isSet(object.minFee)) obj.minFee = Fee.fromJSON(object.minFee);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.minFee !== undefined && (obj.minFee = message.minFee ? Fee.toJSON(message.minFee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.minFee !== undefined && object.minFee !== null) {
      message.minFee = Fee.fromPartial(object.minFee);
    }
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_fee !== undefined && object.min_fee !== null) {
      message.minFee = Fee.fromAmino(object.min_fee);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_fee = message.minFee ? Fee.toAmino(message.minFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
};
