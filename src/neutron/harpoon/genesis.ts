//@ts-nocheck
/* eslint-disable */
import { HookSubscriptions } from "./hooks";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact } from "../../helpers";
export const protobufPackage = "neutron.harpoon";
/** Harpoon module genesis state. */
export interface GenesisState {
  /** List of hooks */
  hookSubscriptions: HookSubscriptions[];
}
function createBaseGenesisState(): GenesisState {
  return {
    hookSubscriptions: [],
  };
}
export const GenesisState = {
  typeUrl: "/neutron.harpoon.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.hookSubscriptions) {
      HookSubscriptions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hookSubscriptions.push(HookSubscriptions.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.hookSubscriptions))
      obj.hookSubscriptions = object.hookSubscriptions.map((e: any) => HookSubscriptions.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.hookSubscriptions) {
      obj.hookSubscriptions = message.hookSubscriptions.map((e) =>
        e ? HookSubscriptions.toJSON(e) : undefined,
      );
    } else {
      obj.hookSubscriptions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.hookSubscriptions = object.hookSubscriptions?.map((e) => HookSubscriptions.fromPartial(e)) || [];
    return message;
  },
};
