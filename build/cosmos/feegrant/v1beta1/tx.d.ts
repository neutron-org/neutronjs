import { Any } from "../../../google/protobuf/any.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "cosmos.feegrant.v1beta1";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: Any;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
}
/** MsgPruneAllowances prunes expired fee allowances. */
export interface MsgPruneAllowances {
    /** pruner is the address of the user pruning expired allowances. */
    pruner: string;
}
/** MsgPruneAllowancesResponse defines the Msg/PruneAllowancesResponse response type. */
export interface MsgPruneAllowancesResponse {
}
export declare const MsgGrantAllowance: {
    typeUrl: string;
    encode(message: MsgGrantAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowance;
    fromJSON(object: any): MsgGrantAllowance;
    toJSON(message: MsgGrantAllowance): JsonSafe<MsgGrantAllowance>;
    fromPartial<I extends Exact<DeepPartial<MsgGrantAllowance>, I>>(object: I): MsgGrantAllowance;
};
export declare const MsgGrantAllowanceResponse: {
    typeUrl: string;
    encode(_: MsgGrantAllowanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowanceResponse;
    fromJSON(_: any): MsgGrantAllowanceResponse;
    toJSON(_: MsgGrantAllowanceResponse): JsonSafe<MsgGrantAllowanceResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgGrantAllowanceResponse>, I>>(_: I): MsgGrantAllowanceResponse;
};
export declare const MsgRevokeAllowance: {
    typeUrl: string;
    encode(message: MsgRevokeAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowance;
    fromJSON(object: any): MsgRevokeAllowance;
    toJSON(message: MsgRevokeAllowance): JsonSafe<MsgRevokeAllowance>;
    fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowance>, I>>(object: I): MsgRevokeAllowance;
};
export declare const MsgRevokeAllowanceResponse: {
    typeUrl: string;
    encode(_: MsgRevokeAllowanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowanceResponse;
    fromJSON(_: any): MsgRevokeAllowanceResponse;
    toJSON(_: MsgRevokeAllowanceResponse): JsonSafe<MsgRevokeAllowanceResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowanceResponse>, I>>(_: I): MsgRevokeAllowanceResponse;
};
export declare const MsgPruneAllowances: {
    typeUrl: string;
    encode(message: MsgPruneAllowances, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAllowances;
    fromJSON(object: any): MsgPruneAllowances;
    toJSON(message: MsgPruneAllowances): JsonSafe<MsgPruneAllowances>;
    fromPartial<I extends Exact<DeepPartial<MsgPruneAllowances>, I>>(object: I): MsgPruneAllowances;
};
export declare const MsgPruneAllowancesResponse: {
    typeUrl: string;
    encode(_: MsgPruneAllowancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAllowancesResponse;
    fromJSON(_: any): MsgPruneAllowancesResponse;
    toJSON(_: MsgPruneAllowancesResponse): JsonSafe<MsgPruneAllowancesResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgPruneAllowancesResponse>, I>>(_: I): MsgPruneAllowancesResponse;
};
