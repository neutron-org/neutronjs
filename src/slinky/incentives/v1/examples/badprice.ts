//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "slinky.incentives.v1";
/**
 * BadPriceIncentive is a message that contains the information about a bad
 * price that was submitted by a validator.
 *
 * NOTE: This is an example of a bad price incentive. It is not used in
 * production.
 */
export interface BadPriceIncentive {
  /** Validator is the address of the validator that submitted the bad price. */
  validator: string;
  /** Amount is the amount to slash. */
  amount: string;
}
function createBaseBadPriceIncentive(): BadPriceIncentive {
  return {
    validator: "",
    amount: "",
  };
}
export const BadPriceIncentive = {
  typeUrl: "/slinky.incentives.v1.BadPriceIncentive",
  encode(message: BadPriceIncentive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BadPriceIncentive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadPriceIncentive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BadPriceIncentive {
    const obj = createBaseBadPriceIncentive();
    if (isSet(object.validator)) obj.validator = String(object.validator);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: BadPriceIncentive): JsonSafe<BadPriceIncentive> {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BadPriceIncentive>, I>>(object: I): BadPriceIncentive {
    const message = createBaseBadPriceIncentive();
    message.validator = object.validator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};
