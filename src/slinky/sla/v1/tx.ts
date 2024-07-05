/* eslint-disable */
import { PriceFeedSLA, Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.sla.v1";
/**
 * MsgAddSLAs defines the Msg/AddSLAs request type. It contains the
 * SLAs to be added to the store.
 */
export interface MsgAddSLAs {
  /** SLAs defines the SLAs to be added to the store. */
  slas: PriceFeedSLA[];
  /** Authority defines the authority that is adding the SLAs. */
  authority: string;
}
/** MsgAddSLAsResponse defines the Msg/AddSLAs response type. */
export interface MsgAddSLAsResponse {}
/**
 * MsgRemoveSLAs defines the Msg/RemoveSLAs request type. It contains the
 * IDs of the SLAs to be removed from the store.
 */
export interface MsgRemoveSLAs {
  /** IDs defines the IDs of the SLAs to be removed from the store. */
  ids: string[];
  /** Authority defines the authority that is removing the SLAs. */
  authority: string;
}
/** MsgRemoveSLAsResponse defines the Msg/RemoveSLAs response type. */
export interface MsgRemoveSLAsResponse {}
/**
 * MsgParams defines the Msg/Params request type. It contains the
 * new parameters for the SLA module.
 */
export interface MsgParams {
  /** Params defines the new parameters for the SLA module. */
  params: Params;
  /** Authority defines the authority that is updating the SLA module parameters. */
  authority: string;
}
/** MsgParamsResponse defines the Msg/Params response type. */
export interface MsgParamsResponse {}
function createBaseMsgAddSLAs(): MsgAddSLAs {
  return {
    slas: [],
    authority: "",
  };
}
export const MsgAddSLAs = {
  typeUrl: "/slinky.sla.v1.MsgAddSLAs",
  encode(message: MsgAddSLAs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.slas) {
      PriceFeedSLA.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddSLAs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSLAs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slas.push(PriceFeedSLA.decode(reader, reader.uint32()));
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddSLAs {
    const obj = createBaseMsgAddSLAs();
    if (Array.isArray(object?.slas)) obj.slas = object.slas.map((e: any) => PriceFeedSLA.fromJSON(e));
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgAddSLAs): JsonSafe<MsgAddSLAs> {
    const obj: any = {};
    if (message.slas) {
      obj.slas = message.slas.map((e) => (e ? PriceFeedSLA.toJSON(e) : undefined));
    } else {
      obj.slas = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddSLAs>, I>>(object: I): MsgAddSLAs {
    const message = createBaseMsgAddSLAs();
    message.slas = object.slas?.map((e) => PriceFeedSLA.fromPartial(e)) || [];
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseMsgAddSLAsResponse(): MsgAddSLAsResponse {
  return {};
}
export const MsgAddSLAsResponse = {
  typeUrl: "/slinky.sla.v1.MsgAddSLAsResponse",
  encode(_: MsgAddSLAsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddSLAsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSLAsResponse();
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
  fromJSON(_: any): MsgAddSLAsResponse {
    const obj = createBaseMsgAddSLAsResponse();
    return obj;
  },
  toJSON(_: MsgAddSLAsResponse): JsonSafe<MsgAddSLAsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddSLAsResponse>, I>>(_: I): MsgAddSLAsResponse {
    const message = createBaseMsgAddSLAsResponse();
    return message;
  },
};
function createBaseMsgRemoveSLAs(): MsgRemoveSLAs {
  return {
    ids: [],
    authority: "",
  };
}
export const MsgRemoveSLAs = {
  typeUrl: "/slinky.sla.v1.MsgRemoveSLAs",
  encode(message: MsgRemoveSLAs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveSLAs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveSLAs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveSLAs {
    const obj = createBaseMsgRemoveSLAs();
    if (Array.isArray(object?.ids)) obj.ids = object.ids.map((e: any) => String(e));
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgRemoveSLAs): JsonSafe<MsgRemoveSLAs> {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveSLAs>, I>>(object: I): MsgRemoveSLAs {
    const message = createBaseMsgRemoveSLAs();
    message.ids = object.ids?.map((e) => e) || [];
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseMsgRemoveSLAsResponse(): MsgRemoveSLAsResponse {
  return {};
}
export const MsgRemoveSLAsResponse = {
  typeUrl: "/slinky.sla.v1.MsgRemoveSLAsResponse",
  encode(_: MsgRemoveSLAsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveSLAsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveSLAsResponse();
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
  fromJSON(_: any): MsgRemoveSLAsResponse {
    const obj = createBaseMsgRemoveSLAsResponse();
    return obj;
  },
  toJSON(_: MsgRemoveSLAsResponse): JsonSafe<MsgRemoveSLAsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveSLAsResponse>, I>>(_: I): MsgRemoveSLAsResponse {
    const message = createBaseMsgRemoveSLAsResponse();
    return message;
  },
};
function createBaseMsgParams(): MsgParams {
  return {
    params: Params.fromPartial({}),
    authority: "",
  };
}
export const MsgParams = {
  typeUrl: "/slinky.sla.v1.MsgParams",
  encode(message: MsgParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgParams {
    const obj = createBaseMsgParams();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgParams): JsonSafe<MsgParams> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgParams>, I>>(object: I): MsgParams {
    const message = createBaseMsgParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseMsgParamsResponse(): MsgParamsResponse {
  return {};
}
export const MsgParamsResponse = {
  typeUrl: "/slinky.sla.v1.MsgParamsResponse",
  encode(_: MsgParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgParamsResponse();
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
  fromJSON(_: any): MsgParamsResponse {
    const obj = createBaseMsgParamsResponse();
    return obj;
  },
  toJSON(_: MsgParamsResponse): JsonSafe<MsgParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgParamsResponse>, I>>(_: I): MsgParamsResponse {
    const message = createBaseMsgParamsResponse();
    return message;
  },
};
