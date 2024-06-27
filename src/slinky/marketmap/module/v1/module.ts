/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "slinky.marketmap.module.v1";
/** Module is the config object of the builder module. */
export interface Module {
  /**
   * Authority defines the custom module authority. If not set, defaults to the
   * governance module.
   */
  authority: string;
  /**
   * HooksOrder specifies the order of marketmap hooks and should be a list
   * of module names which provide a marketmap hooks instance. If no order is
   * provided, then hooks will be applied in alphabetical order of module names.
   */
  hooksOrder: string[];
}
function createBaseModule(): Module {
  return {
    authority: "",
    hooksOrder: [],
  };
}
export const Module = {
  typeUrl: "/slinky.marketmap.module.v1.Module",
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.hooksOrder) {
      writer.uint32(18).string(v!);
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
          message.hooksOrder.push(reader.string());
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
    if (Array.isArray(object?.hooksOrder)) obj.hooksOrder = object.hooksOrder.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Module): JsonSafe<Module> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.hooksOrder) {
      obj.hooksOrder = message.hooksOrder.map((e) => e);
    } else {
      obj.hooksOrder = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.authority = object.authority ?? "";
    message.hooksOrder = object.hooksOrder?.map((e) => e) || [];
    return message;
  },
};
