/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.cron";
export interface Schedule {
  /** Name of schedule */
  name: string;
  /** Period in blocks */
  period: bigint;
  /** Msgs that will be executed every period amount of time */
  msgs: MsgExecuteContract[];
  /** Last execution's block height */
  lastExecuteHeight: bigint;
}
export interface MsgExecuteContract {
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg is json encoded message to be passed to the contract */
  msg: string;
}
export interface ScheduleCount {
  /** Count is the number of current schedules */
  count: number;
}
function createBaseSchedule(): Schedule {
  return {
    name: "",
    period: BigInt(0),
    msgs: [],
    lastExecuteHeight: BigInt(0),
  };
}
export const Schedule = {
  typeUrl: "/neutron.cron.Schedule",
  encode(message: Schedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    for (const v of message.msgs) {
      MsgExecuteContract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastExecuteHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.lastExecuteHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Schedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.msgs.push(MsgExecuteContract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastExecuteHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Schedule {
    const obj = createBaseSchedule();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.period)) obj.period = BigInt(object.period.toString());
    if (Array.isArray(object?.msgs)) obj.msgs = object.msgs.map((e: any) => MsgExecuteContract.fromJSON(e));
    if (isSet(object.lastExecuteHeight)) obj.lastExecuteHeight = BigInt(object.lastExecuteHeight.toString());
    return obj;
  },
  toJSON(message: Schedule): JsonSafe<Schedule> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => (e ? MsgExecuteContract.toJSON(e) : undefined));
    } else {
      obj.msgs = [];
    }
    message.lastExecuteHeight !== undefined &&
      (obj.lastExecuteHeight = (message.lastExecuteHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Schedule>, I>>(object: I): Schedule {
    const message = createBaseSchedule();
    message.name = object.name ?? "";
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period.toString());
    }
    message.msgs = object.msgs?.map((e) => MsgExecuteContract.fromPartial(e)) || [];
    if (object.lastExecuteHeight !== undefined && object.lastExecuteHeight !== null) {
      message.lastExecuteHeight = BigInt(object.lastExecuteHeight.toString());
    }
    return message;
  },
};
function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    contract: "",
    msg: "",
  };
}
export const MsgExecuteContract = {
  typeUrl: "/neutron.cron.MsgExecuteContract",
  encode(message: MsgExecuteContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecuteContract {
    const obj = createBaseMsgExecuteContract();
    if (isSet(object.contract)) obj.contract = String(object.contract);
    if (isSet(object.msg)) obj.msg = String(object.msg);
    return obj;
  },
  toJSON(message: MsgExecuteContract): JsonSafe<MsgExecuteContract> {
    const obj: any = {};
    message.contract !== undefined && (obj.contract = message.contract);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(object: I): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};
function createBaseScheduleCount(): ScheduleCount {
  return {
    count: 0,
  };
}
export const ScheduleCount = {
  typeUrl: "/neutron.cron.ScheduleCount",
  encode(message: ScheduleCount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.count !== 0) {
      writer.uint32(8).int32(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ScheduleCount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduleCount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ScheduleCount {
    const obj = createBaseScheduleCount();
    if (isSet(object.count)) obj.count = Number(object.count);
    return obj;
  },
  toJSON(message: ScheduleCount): JsonSafe<ScheduleCount> {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ScheduleCount>, I>>(object: I): ScheduleCount {
    const message = createBaseScheduleCount();
    message.count = object.count ?? 0;
    return message;
  },
};
