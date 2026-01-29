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
  feeEnabled: boolean;
}
function createBaseParams(): Params {
  return {
    minFee: Fee.fromPartial({}),
    feeEnabled: false,
  };
}
export const Params = {
  typeUrl: "/neutron.feerefunder.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minFee !== undefined) {
      Fee.encode(message.minFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.feeEnabled === true) {
      writer.uint32(16).bool(message.feeEnabled);
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
        case 2:
          message.feeEnabled = reader.bool();
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
    if (isSet(object.feeEnabled)) obj.feeEnabled = Boolean(object.feeEnabled);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.minFee !== undefined && (obj.minFee = message.minFee ? Fee.toJSON(message.minFee) : undefined);
    message.feeEnabled !== undefined && (obj.feeEnabled = message.feeEnabled);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.minFee !== undefined && object.minFee !== null) {
      message.minFee = Fee.fromPartial(object.minFee);
    }
    message.feeEnabled = object.feeEnabled ?? false;
    return message;
  },
};
