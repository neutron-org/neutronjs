//@ts-nocheck
/* eslint-disable */
import { HookType, hookTypeFromJSON, hookTypeToJSON } from "./hooks";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.harpoon";
/** Defines the Msg/ManageHookSubscription request type. */
export interface MsgManageHookSubscription {
  /** Address of the governance account. */
  authority: string;
  /** Hook subscription to be updated. */
  hookSubscription?: HookSubscription;
}
/** Defines the response structure for executing a MsgManageHookSubscription message. */
export interface MsgManageHookSubscriptionResponse {}
/** Specifies new hook subscriptions for the contract_address. */
export interface HookSubscription {
  /** Contract address to update subscriptions for. */
  contractAddress: string;
  /** List of hooks to subscribe to. Hooks not listed here will be removed. */
  hooks: HookType[];
}
function createBaseMsgManageHookSubscription(): MsgManageHookSubscription {
  return {
    authority: "",
    hookSubscription: undefined,
  };
}
export const MsgManageHookSubscription = {
  typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
  encode(message: MsgManageHookSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.hookSubscription !== undefined) {
      HookSubscription.encode(message.hookSubscription, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgManageHookSubscription {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgManageHookSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.hookSubscription = HookSubscription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgManageHookSubscription {
    const obj = createBaseMsgManageHookSubscription();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.hookSubscription))
      obj.hookSubscription = HookSubscription.fromJSON(object.hookSubscription);
    return obj;
  },
  toJSON(message: MsgManageHookSubscription): JsonSafe<MsgManageHookSubscription> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.hookSubscription !== undefined &&
      (obj.hookSubscription = message.hookSubscription
        ? HookSubscription.toJSON(message.hookSubscription)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgManageHookSubscription>, I>>(
    object: I,
  ): MsgManageHookSubscription {
    const message = createBaseMsgManageHookSubscription();
    message.authority = object.authority ?? "";
    if (object.hookSubscription !== undefined && object.hookSubscription !== null) {
      message.hookSubscription = HookSubscription.fromPartial(object.hookSubscription);
    }
    return message;
  },
};
function createBaseMsgManageHookSubscriptionResponse(): MsgManageHookSubscriptionResponse {
  return {};
}
export const MsgManageHookSubscriptionResponse = {
  typeUrl: "/neutron.harpoon.MsgManageHookSubscriptionResponse",
  encode(_: MsgManageHookSubscriptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgManageHookSubscriptionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgManageHookSubscriptionResponse();
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
  fromJSON(_: any): MsgManageHookSubscriptionResponse {
    const obj = createBaseMsgManageHookSubscriptionResponse();
    return obj;
  },
  toJSON(_: MsgManageHookSubscriptionResponse): JsonSafe<MsgManageHookSubscriptionResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgManageHookSubscriptionResponse>, I>>(
    _: I,
  ): MsgManageHookSubscriptionResponse {
    const message = createBaseMsgManageHookSubscriptionResponse();
    return message;
  },
};
function createBaseHookSubscription(): HookSubscription {
  return {
    contractAddress: "",
    hooks: [],
  };
}
export const HookSubscription = {
  typeUrl: "/neutron.harpoon.HookSubscription",
  encode(message: HookSubscription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    writer.uint32(26).fork();
    for (const v of message.hooks) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HookSubscription {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHookSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.hooks.push(reader.int32() as any);
            }
          } else {
            message.hooks.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HookSubscription {
    const obj = createBaseHookSubscription();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    if (Array.isArray(object?.hooks)) obj.hooks = object.hooks.map((e: any) => hookTypeFromJSON(e));
    return obj;
  },
  toJSON(message: HookSubscription): JsonSafe<HookSubscription> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    if (message.hooks) {
      obj.hooks = message.hooks.map((e) => hookTypeToJSON(e));
    } else {
      obj.hooks = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<HookSubscription>, I>>(object: I): HookSubscription {
    const message = createBaseHookSubscription();
    message.contractAddress = object.contractAddress ?? "";
    message.hooks = object.hooks?.map((e) => e) || [];
    return message;
  },
};
