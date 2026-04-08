import { Any } from "../../../google/protobuf/any.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "cosmos.adminmodule.adminmodule";
export interface MsgDeleteAdmin {
    creator: string;
    admin: string;
}
export interface MsgDeleteAdminResponse {
}
export interface MsgAddAdmin {
    creator: string;
    admin: string;
}
export interface MsgAddAdminResponse {
}
/**
 * MsgSubmitProposalLegacy defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalLegacy {
    content?: Any;
    proposer: string;
}
/** MsgSubmitProposalLegacyResponse defines the Msg/SubmitProposalLegacy response type. */
export interface MsgSubmitProposalLegacyResponse {
    proposalId: bigint;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
    /** messages are the arbitrary messages to be executed if proposal passes. */
    messages: Any[];
    proposer: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
    proposalId: bigint;
}
export declare const MsgDeleteAdmin: {
    typeUrl: string;
    encode(message: MsgDeleteAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAdmin;
    fromJSON(object: any): MsgDeleteAdmin;
    toJSON(message: MsgDeleteAdmin): JsonSafe<MsgDeleteAdmin>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteAdmin>, I>>(object: I): MsgDeleteAdmin;
};
export declare const MsgDeleteAdminResponse: {
    typeUrl: string;
    encode(_: MsgDeleteAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteAdminResponse;
    fromJSON(_: any): MsgDeleteAdminResponse;
    toJSON(_: MsgDeleteAdminResponse): JsonSafe<MsgDeleteAdminResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgDeleteAdminResponse>, I>>(_: I): MsgDeleteAdminResponse;
};
export declare const MsgAddAdmin: {
    typeUrl: string;
    encode(message: MsgAddAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAdmin;
    fromJSON(object: any): MsgAddAdmin;
    toJSON(message: MsgAddAdmin): JsonSafe<MsgAddAdmin>;
    fromPartial<I extends Exact<DeepPartial<MsgAddAdmin>, I>>(object: I): MsgAddAdmin;
};
export declare const MsgAddAdminResponse: {
    typeUrl: string;
    encode(_: MsgAddAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddAdminResponse;
    fromJSON(_: any): MsgAddAdminResponse;
    toJSON(_: MsgAddAdminResponse): JsonSafe<MsgAddAdminResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgAddAdminResponse>, I>>(_: I): MsgAddAdminResponse;
};
export declare const MsgSubmitProposalLegacy: {
    typeUrl: string;
    encode(message: MsgSubmitProposalLegacy, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalLegacy;
    fromJSON(object: any): MsgSubmitProposalLegacy;
    toJSON(message: MsgSubmitProposalLegacy): JsonSafe<MsgSubmitProposalLegacy>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalLegacy>, I>>(object: I): MsgSubmitProposalLegacy;
};
export declare const MsgSubmitProposalLegacyResponse: {
    typeUrl: string;
    encode(message: MsgSubmitProposalLegacyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalLegacyResponse;
    fromJSON(object: any): MsgSubmitProposalLegacyResponse;
    toJSON(message: MsgSubmitProposalLegacyResponse): JsonSafe<MsgSubmitProposalLegacyResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalLegacyResponse>, I>>(object: I): MsgSubmitProposalLegacyResponse;
};
export declare const MsgSubmitProposal: {
    typeUrl: string;
    encode(message: MsgSubmitProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal;
    fromJSON(object: any): MsgSubmitProposal;
    toJSON(message: MsgSubmitProposal): JsonSafe<MsgSubmitProposal>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitProposal>, I>>(object: I): MsgSubmitProposal;
};
export declare const MsgSubmitProposalResponse: {
    typeUrl: string;
    encode(message: MsgSubmitProposalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse;
    fromJSON(object: any): MsgSubmitProposalResponse;
    toJSON(message: MsgSubmitProposalResponse): JsonSafe<MsgSubmitProposalResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitProposalResponse>, I>>(object: I): MsgSubmitProposalResponse;
};
