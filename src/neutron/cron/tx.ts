/* eslint-disable */
import { MsgExecuteContract, ExecutionStage, executionStageFromJSON, executionStageToJSON } from "./schedule";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.cron";
/** The MsgAddSchedule request type. */
export interface MsgAddSchedule {
  /** The address of the governance account. */
  authority: string;
  /** Name of the schedule */
  name: string;
  /** Period in blocks */
  period: bigint;
  /** Msgs that will be executed every certain number of blocks, specified in the `period` field */
  msgs: MsgExecuteContract[];
  /** Stage when messages will be executed */
  executionStage: ExecutionStage;
}
/** Defines the response structure for executing a MsgAddSchedule message. */
export interface MsgAddScheduleResponse {}
/** The MsgRemoveSchedule request type. */
export interface MsgRemoveSchedule {
  /** The address of the governance account. */
  authority: string;
  /** Name of the schedule */
  name: string;
}
/** Defines the response structure for executing a MsgRemoveSchedule message. */
export interface MsgRemoveScheduleResponse {}
/**
 * The MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParams {
  /** The address of the governance account. */
  authority: string;
  /**
   * Defines the x/cron parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * Defines the response structure for executing a MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {}
function createBaseMsgAddSchedule(): MsgAddSchedule {
  return {
    authority: "",
    name: "",
    period: BigInt(0),
    msgs: [],
    executionStage: 0,
  };
}
export const MsgAddSchedule = {
  typeUrl: "/neutron.cron.MsgAddSchedule",
  encode(message: MsgAddSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(24).uint64(message.period);
    }
    for (const v of message.msgs) {
      MsgExecuteContract.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.executionStage !== 0) {
      writer.uint32(40).int32(message.executionStage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.period = reader.uint64();
          break;
        case 4:
          message.msgs.push(MsgExecuteContract.decode(reader, reader.uint32()));
          break;
        case 5:
          message.executionStage = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddSchedule {
    const obj = createBaseMsgAddSchedule();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.period)) obj.period = BigInt(object.period.toString());
    if (Array.isArray(object?.msgs)) obj.msgs = object.msgs.map((e: any) => MsgExecuteContract.fromJSON(e));
    if (isSet(object.executionStage)) obj.executionStage = executionStageFromJSON(object.executionStage);
    return obj;
  },
  toJSON(message: MsgAddSchedule): JsonSafe<MsgAddSchedule> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.name !== undefined && (obj.name = message.name);
    message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => (e ? MsgExecuteContract.toJSON(e) : undefined));
    } else {
      obj.msgs = [];
    }
    message.executionStage !== undefined &&
      (obj.executionStage = executionStageToJSON(message.executionStage));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddSchedule>, I>>(object: I): MsgAddSchedule {
    const message = createBaseMsgAddSchedule();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    if (object.period !== undefined && object.period !== null) {
      message.period = BigInt(object.period.toString());
    }
    message.msgs = object.msgs?.map((e) => MsgExecuteContract.fromPartial(e)) || [];
    message.executionStage = object.executionStage ?? 0;
    return message;
  },
};
function createBaseMsgAddScheduleResponse(): MsgAddScheduleResponse {
  return {};
}
export const MsgAddScheduleResponse = {
  typeUrl: "/neutron.cron.MsgAddScheduleResponse",
  encode(_: MsgAddScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddScheduleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddScheduleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAddScheduleResponse {
    const obj = createBaseMsgAddScheduleResponse();
    return obj;
  },
  toJSON(_: MsgAddScheduleResponse): JsonSafe<MsgAddScheduleResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddScheduleResponse>, I>>(_: I): MsgAddScheduleResponse {
    const message = createBaseMsgAddScheduleResponse();
    return message;
  },
};
function createBaseMsgRemoveSchedule(): MsgRemoveSchedule {
  return {
    authority: "",
    name: "",
  };
}
export const MsgRemoveSchedule = {
  typeUrl: "/neutron.cron.MsgRemoveSchedule",
  encode(message: MsgRemoveSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveSchedule {
    const obj = createBaseMsgRemoveSchedule();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: MsgRemoveSchedule): JsonSafe<MsgRemoveSchedule> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveSchedule>, I>>(object: I): MsgRemoveSchedule {
    const message = createBaseMsgRemoveSchedule();
    message.authority = object.authority ?? "";
    message.name = object.name ?? "";
    return message;
  },
};
function createBaseMsgRemoveScheduleResponse(): MsgRemoveScheduleResponse {
  return {};
}
export const MsgRemoveScheduleResponse = {
  typeUrl: "/neutron.cron.MsgRemoveScheduleResponse",
  encode(_: MsgRemoveScheduleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveScheduleResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveScheduleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRemoveScheduleResponse {
    const obj = createBaseMsgRemoveScheduleResponse();
    return obj;
  },
  toJSON(_: MsgRemoveScheduleResponse): JsonSafe<MsgRemoveScheduleResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveScheduleResponse>, I>>(_: I): MsgRemoveScheduleResponse {
    const message = createBaseMsgRemoveScheduleResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/neutron.cron.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/neutron.cron.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
