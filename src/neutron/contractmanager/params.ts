/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.contractmanager";
/** Params defines the parameters for the module. */
export interface Params {
  sudoCallGasLimit: bigint;
}
function createBaseParams(): Params {
  return {
    sudoCallGasLimit: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/neutron.contractmanager.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sudoCallGasLimit !== BigInt(0)) {
      writer.uint32(8).uint64(message.sudoCallGasLimit);
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
          message.sudoCallGasLimit = reader.uint64();
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
    if (isSet(object.sudoCallGasLimit)) obj.sudoCallGasLimit = BigInt(object.sudoCallGasLimit.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.sudoCallGasLimit !== undefined &&
      (obj.sudoCallGasLimit = (message.sudoCallGasLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.sudoCallGasLimit !== undefined && object.sudoCallGasLimit !== null) {
      message.sudoCallGasLimit = BigInt(object.sudoCallGasLimit.toString());
    }
    return message;
  },
};
