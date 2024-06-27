/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.feeburner";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * Defines Neutron denom, which will be burned during fee processing, any
   * other denom will be sent to Treasury
   */
  neutronDenom: string;
  /** Deprecated in v0.4.4. Is not used anymore */
  reserveAddress: string;
  /** Defines treasury address */
  treasuryAddress: string;
}
function createBaseParams(): Params {
  return {
    neutronDenom: "",
    reserveAddress: "",
    treasuryAddress: "",
  };
}
export const Params = {
  typeUrl: "/neutron.feeburner.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.neutronDenom !== "") {
      writer.uint32(10).string(message.neutronDenom);
    }
    if (message.reserveAddress !== "") {
      writer.uint32(18).string(message.reserveAddress);
    }
    if (message.treasuryAddress !== "") {
      writer.uint32(26).string(message.treasuryAddress);
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
          message.neutronDenom = reader.string();
          break;
        case 2:
          message.reserveAddress = reader.string();
          break;
        case 3:
          message.treasuryAddress = reader.string();
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
    if (isSet(object.neutronDenom)) obj.neutronDenom = String(object.neutronDenom);
    if (isSet(object.reserveAddress)) obj.reserveAddress = String(object.reserveAddress);
    if (isSet(object.treasuryAddress)) obj.treasuryAddress = String(object.treasuryAddress);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.neutronDenom !== undefined && (obj.neutronDenom = message.neutronDenom);
    message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
    message.treasuryAddress !== undefined && (obj.treasuryAddress = message.treasuryAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.neutronDenom = object.neutronDenom ?? "";
    message.reserveAddress = object.reserveAddress ?? "";
    message.treasuryAddress = object.treasuryAddress ?? "";
    return message;
  },
};
