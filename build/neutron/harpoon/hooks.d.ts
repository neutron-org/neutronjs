import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.harpoon";
/** Hook types that can be subscribed to. */
export declare enum HookType {
    HOOK_TYPE_UNSPECIFIED = 0,
    /** HOOK_TYPE_AFTER_VALIDATOR_CREATED - Triggered after validator is created */
    HOOK_TYPE_AFTER_VALIDATOR_CREATED = 1,
    /** HOOK_TYPE_BEFORE_VALIDATOR_MODIFIED - Triggered before validator is modified */
    HOOK_TYPE_BEFORE_VALIDATOR_MODIFIED = 2,
    /** HOOK_TYPE_AFTER_VALIDATOR_REMOVED - Triggered after validator is removed */
    HOOK_TYPE_AFTER_VALIDATOR_REMOVED = 3,
    /** HOOK_TYPE_AFTER_VALIDATOR_BONDED - Triggered after validator is bonded */
    HOOK_TYPE_AFTER_VALIDATOR_BONDED = 4,
    /** HOOK_TYPE_AFTER_VALIDATOR_BEGIN_UNBONDING - Triggered after validator begins unbonding */
    HOOK_TYPE_AFTER_VALIDATOR_BEGIN_UNBONDING = 5,
    /** HOOK_TYPE_BEFORE_DELEGATION_CREATED - Triggered before delegation is created */
    HOOK_TYPE_BEFORE_DELEGATION_CREATED = 6,
    /** HOOK_TYPE_BEFORE_DELEGATION_SHARES_MODIFIED - Triggered before delegation's shares are modified */
    HOOK_TYPE_BEFORE_DELEGATION_SHARES_MODIFIED = 7,
    /** HOOK_TYPE_BEFORE_DELEGATION_REMOVED - Triggered before delegation is removed */
    HOOK_TYPE_BEFORE_DELEGATION_REMOVED = 8,
    /** HOOK_TYPE_AFTER_DELEGATION_MODIFIED - Triggered after delegation is modified */
    HOOK_TYPE_AFTER_DELEGATION_MODIFIED = 9,
    /** HOOK_TYPE_BEFORE_VALIDATOR_SLASHED - Triggered before validator is slashed */
    HOOK_TYPE_BEFORE_VALIDATOR_SLASHED = 10,
    /** HOOK_TYPE_AFTER_UNBONDING_INITIATED - Triggered after unbonding is initiated */
    HOOK_TYPE_AFTER_UNBONDING_INITIATED = 11,
    UNRECOGNIZED = -1
}
export declare function hookTypeFromJSON(object: any): HookType;
export declare function hookTypeToJSON(object: HookType): string;
/** Specifies how subscribed contract_addresses are stored in the KV store for each hook type. */
export interface HookSubscriptions {
    /** The hook type being subscribed to. */
    hookType: HookType;
    /** Contract addresses subscribed to this hook type. */
    contractAddresses: string[];
}
export declare const HookSubscriptions: {
    typeUrl: string;
    encode(message: HookSubscriptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): HookSubscriptions;
    fromJSON(object: any): HookSubscriptions;
    toJSON(message: HookSubscriptions): JsonSafe<HookSubscriptions>;
    fromPartial<I extends Exact<DeepPartial<HookSubscriptions>, I>>(object: I): HookSubscriptions;
};
