import { AminoMsg } from "@cosmjs/amino";
import { MsgDeleteAdmin, MsgAddAdmin, MsgSubmitProposal, MsgSubmitProposalLegacy } from "./tx.js";
export interface MsgDeleteAdminAminoType extends AminoMsg {
    type: "adminmodule/MsgDeleteAdmin";
    value: {
        creator: string;
        admin: string;
    };
}
export interface MsgAddAdminAminoType extends AminoMsg {
    type: "adminmodule/MsgAddAdmin";
    value: {
        creator: string;
        admin: string;
    };
}
export interface MsgSubmitProposalAminoType extends AminoMsg {
    type: "adminmodule/MsgSubmitProposal";
    value: {
        messages: {
            type_url: string;
            value: Uint8Array;
        }[];
        proposer: string;
    };
}
export interface MsgSubmitProposalLegacyAminoType extends AminoMsg {
    type: "adminmodule/MsgSubmitProposalLegacy";
    value: {
        content: {
            type_url: string;
            value: Uint8Array;
        };
        proposer: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin": {
        aminoType: string;
        toAmino: ({ creator, admin }: MsgDeleteAdmin) => MsgDeleteAdminAminoType["value"];
        fromAmino: ({ creator, admin }: MsgDeleteAdminAminoType["value"]) => MsgDeleteAdmin;
    };
    "/cosmos.adminmodule.adminmodule.MsgAddAdmin": {
        aminoType: string;
        toAmino: ({ creator, admin }: MsgAddAdmin) => MsgAddAdminAminoType["value"];
        fromAmino: ({ creator, admin }: MsgAddAdminAminoType["value"]) => MsgAddAdmin;
    };
    "/cosmos.adminmodule.adminmodule.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ messages, proposer }: MsgSubmitProposal) => MsgSubmitProposalAminoType["value"];
        fromAmino: ({ messages, proposer }: MsgSubmitProposalAminoType["value"]) => MsgSubmitProposal;
    };
    "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy": {
        aminoType: string;
        toAmino: ({ content, proposer }: MsgSubmitProposalLegacy) => MsgSubmitProposalLegacyAminoType["value"];
        fromAmino: ({ content, proposer, }: MsgSubmitProposalLegacyAminoType["value"]) => MsgSubmitProposalLegacy;
    };
};
