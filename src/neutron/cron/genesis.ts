//@ts-nocheck
/* eslint-disable */
import { Schedule } from "./schedule";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.cron";
/** Defines the cron module's genesis state. */
export interface GenesisState {
  scheduleList: Schedule[];
  params: Params;
}
function createBaseGenesisState(): GenesisState {
  return {
    scheduleList: [],
    params: Params.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/neutron.cron.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.scheduleList) {
      Schedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
        case 2:
          message.scheduleList.push(Schedule.decode(reader, reader.uint32()));
          break;
        case 1:
          message.params = Params.decode(reader, reader.uint32());
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
    if (Array.isArray(object?.scheduleList))
      obj.scheduleList = object.scheduleList.map((e: any) => Schedule.fromJSON(e));
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.scheduleList) {
      obj.scheduleList = message.scheduleList.map((e) => (e ? Schedule.toJSON(e) : undefined));
    } else {
      obj.scheduleList = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.scheduleList = object.scheduleList?.map((e) => Schedule.fromPartial(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
