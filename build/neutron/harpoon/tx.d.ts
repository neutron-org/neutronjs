import { HookType } from "./hooks.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.harpoon";
/** Defines the Msg/ManageHookSubscription request type. */
export interface MsgManageHookSubscription {
    /** Address of the governance account. */
    authority: string;
    /** Hook subscription to be updated. */
    hookSubscription?: HookSubscription;
}
/** Defines the response structure for executing a MsgManageHookSubscription message. */
export interface MsgManageHookSubscriptionResponse {
}
/** Specifies new hook subscriptions for the contract_address. */
export interface HookSubscription {
    /** Contract address to update subscriptions for. */
    contractAddress: string;
    /** List of hooks to subscribe to. Hooks not listed here will be removed. */
    hooks: HookType[];
}
export declare const MsgManageHookSubscription: {
    typeUrl: string;
    encode(message: MsgManageHookSubscription, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgManageHookSubscription;
    fromJSON(object: any): MsgManageHookSubscription;
    toJSON(message: MsgManageHookSubscription): JsonSafe<MsgManageHookSubscription>;
    fromPartial<I extends Exact<DeepPartial<MsgManageHookSubscription>, I>>(object: I): MsgManageHookSubscription;
};
export declare const MsgManageHookSubscriptionResponse: {
    typeUrl: string;
    encode(_: MsgManageHookSubscriptionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgManageHookSubscriptionResponse;
    fromJSON(_: any): MsgManageHookSubscriptionResponse;
    toJSON(_: MsgManageHookSubscriptionResponse): JsonSafe<MsgManageHookSubscriptionResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgManageHookSubscriptionResponse>, I>>(_: I): MsgManageHookSubscriptionResponse;
};
export declare const HookSubscription: {
    typeUrl: string;
    encode(message: HookSubscription, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HookSubscription;
    fromJSON(object: any): HookSubscription;
    toJSON(message: HookSubscription): JsonSafe<HookSubscription>;
    fromPartial<I extends Exact<DeepPartial<HookSubscription>, I>>(object: I): HookSubscription;
};
