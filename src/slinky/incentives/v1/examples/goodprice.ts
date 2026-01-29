//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "slinky.incentives.v1";
/**
 * GoodPriceIncentive is a message that contains the information about a good
 * price that was submitted by a validator.
 *
 * NOTE: This is an example of a good price incentive. It is not used in
 * production.
 */
export interface GoodPriceIncentive {
  /** Validator is the address of the validator that submitted the good price. */
  validator: string;
  /** Amount is the amount to reward. */
  amount: string;
}
function createBaseGoodPriceIncentive(): GoodPriceIncentive {
  return {
    validator: "",
    amount: "",
  };
}
export const GoodPriceIncentive = {
  typeUrl: "/slinky.incentives.v1.GoodPriceIncentive",
  encode(message: GoodPriceIncentive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GoodPriceIncentive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGoodPriceIncentive();
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
  fromJSON(object: any): GoodPriceIncentive {
    const obj = createBaseGoodPriceIncentive();
    if (isSet(object.validator)) obj.validator = String(object.validator);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    return obj;
  },
  toJSON(message: GoodPriceIncentive): JsonSafe<GoodPriceIncentive> {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GoodPriceIncentive>, I>>(object: I): GoodPriceIncentive {
    const message = createBaseGoodPriceIncentive();
    message.validator = object.validator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};
