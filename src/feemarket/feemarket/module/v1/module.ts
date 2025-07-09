//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "feemarket.feemarket.module.v1";
/** Module is the config object of the builder module. */
export interface Module {
  /**
   * Authority defines the custom module authority. If not set, defaults to the
   * governance module.
   */
  authority: string;
  /** FeeRecipientModule defines the custom module account that the fee will be sent to. */
  feeRecipientModule: string;
}
function createBaseModule(): Module {
  return {
    authority: "",
    feeRecipientModule: "",
  };
}
export const Module = {
  typeUrl: "/feemarket.feemarket.module.v1.Module",
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.feeRecipientModule !== "") {
      writer.uint32(18).string(message.feeRecipientModule);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.feeRecipientModule = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    const obj = createBaseModule();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.feeRecipientModule)) obj.feeRecipientModule = String(object.feeRecipientModule);
    return obj;
  },
  toJSON(message: Module): JsonSafe<Module> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.feeRecipientModule !== undefined && (obj.feeRecipientModule = message.feeRecipientModule);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.authority = object.authority ?? "";
    message.feeRecipientModule = object.feeRecipientModule ?? "";
    return message;
  },
};
