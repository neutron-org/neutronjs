import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgDeleteAdmin, MsgAddAdmin, MsgSubmitProposal, MsgSubmitProposalLegacy } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        deleteAdmin(value: MsgDeleteAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        addAdmin(value: MsgAddAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        submitProposalLegacy(value: MsgSubmitProposalLegacy): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        deleteAdmin(value: MsgDeleteAdmin): {
            typeUrl: string;
            value: MsgDeleteAdmin;
        };
        addAdmin(value: MsgAddAdmin): {
            typeUrl: string;
            value: MsgAddAdmin;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        submitProposalLegacy(value: MsgSubmitProposalLegacy): {
            typeUrl: string;
            value: MsgSubmitProposalLegacy;
        };
    };
    toJSON: {
        deleteAdmin(value: MsgDeleteAdmin): {
            typeUrl: string;
            value: {
                creator: string;
                admin: string;
            };
        };
        addAdmin(value: MsgAddAdmin): {
            typeUrl: string;
            value: {
                creator: string;
                admin: string;
            };
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: {
                messages: {
                    typeUrl: string;
                    value: string;
                }[];
                proposer: string;
            };
        };
        submitProposalLegacy(value: MsgSubmitProposalLegacy): {
            typeUrl: string;
            value: {
                content?: {
                    typeUrl: string;
                    value: string;
                };
                proposer: string;
            };
        };
    };
    fromJSON: {
        deleteAdmin(value: any): {
            typeUrl: string;
            value: MsgDeleteAdmin;
        };
        addAdmin(value: any): {
            typeUrl: string;
            value: MsgAddAdmin;
        };
        submitProposal(value: any): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        submitProposalLegacy(value: any): {
            typeUrl: string;
            value: MsgSubmitProposalLegacy;
        };
    };
    fromPartial: {
        deleteAdmin(value: MsgDeleteAdmin): {
            typeUrl: string;
            value: MsgDeleteAdmin;
        };
        addAdmin(value: MsgAddAdmin): {
            typeUrl: string;
            value: MsgAddAdmin;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        submitProposalLegacy(value: MsgSubmitProposalLegacy): {
            typeUrl: string;
            value: MsgSubmitProposalLegacy;
        };
    };
};
