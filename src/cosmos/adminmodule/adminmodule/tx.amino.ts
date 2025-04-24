//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgDeleteAdmin, MsgAddAdmin, MsgSubmitProposal, MsgSubmitProposalLegacy } from "./tx";
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
export const AminoConverter = {
  "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin": {
    aminoType: "adminmodule/MsgDeleteAdmin",
    toAmino: ({ creator, admin }: MsgDeleteAdmin): MsgDeleteAdminAminoType["value"] => {
      return {
        creator,
        admin,
      };
    },
    fromAmino: ({ creator, admin }: MsgDeleteAdminAminoType["value"]): MsgDeleteAdmin => {
      return {
        creator,
        admin,
      };
    },
  },
  "/cosmos.adminmodule.adminmodule.MsgAddAdmin": {
    aminoType: "adminmodule/MsgAddAdmin",
    toAmino: ({ creator, admin }: MsgAddAdmin): MsgAddAdminAminoType["value"] => {
      return {
        creator,
        admin,
      };
    },
    fromAmino: ({ creator, admin }: MsgAddAdminAminoType["value"]): MsgAddAdmin => {
      return {
        creator,
        admin,
      };
    },
  },
  "/cosmos.adminmodule.adminmodule.MsgSubmitProposal": {
    aminoType: "adminmodule/MsgSubmitProposal",
    toAmino: ({ messages, proposer }: MsgSubmitProposal): MsgSubmitProposalAminoType["value"] => {
      return {
        messages: messages.map((el0) => ({
          type_url: el0.typeUrl,
          value: el0.value,
        })),
        proposer,
      };
    },
    fromAmino: ({ messages, proposer }: MsgSubmitProposalAminoType["value"]): MsgSubmitProposal => {
      return {
        messages: messages.map?.((el0) => ({
          typeUrl: el0.type_url,
          value: el0.value,
        })),
        proposer,
      };
    },
  },
  "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy": {
    aminoType: "adminmodule/MsgSubmitProposalLegacy",
    toAmino: ({ content, proposer }: MsgSubmitProposalLegacy): MsgSubmitProposalLegacyAminoType["value"] => {
      return {
        content: {
          type_url: content.typeUrl,
          value: content.value,
        },
        proposer,
      };
    },
    fromAmino: ({
      content,
      proposer,
    }: MsgSubmitProposalLegacyAminoType["value"]): MsgSubmitProposalLegacy => {
      return {
        content:
          content == null
            ? content
            : {
                typeUrl: content.type_url,
                value: content.value,
              },
        proposer,
      };
    },
  },
};
