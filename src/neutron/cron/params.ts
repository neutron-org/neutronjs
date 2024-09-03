/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.cron";
/** Defines the parameters for the module. */
export interface Params {
  /** Security address that can remove schedules */
  securityAddress: string;
  /** Limit of schedules executed in one block */
  limit: bigint;
}
function createBaseParams(): Params {
  return {
    securityAddress: "",
    limit: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/neutron.cron.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.securityAddress !== "") {
      writer.uint32(10).string(message.securityAddress);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(16).uint64(message.limit);
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
          message.securityAddress = reader.string();
          break;
        case 2:
          message.limit = reader.uint64();
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
    if (isSet(object.securityAddress)) obj.securityAddress = String(object.securityAddress);
    if (isSet(object.limit)) obj.limit = BigInt(object.limit.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.securityAddress !== undefined && (obj.securityAddress = message.securityAddress);
    message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.securityAddress = object.securityAddress ?? "";
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit.toString());
    }
    return message;
  },
};
