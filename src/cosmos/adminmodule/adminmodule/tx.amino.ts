//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgDeleteAdmin, MsgAddAdmin, MsgSubmitProposal, MsgSubmitProposalLegacy } from "./tx";
export interface MsgDeleteAdminAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgDeleteAdmin";
  value: {
    creator: string;
    admin: string;
  };
}
export interface MsgAddAdminAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgAddAdmin";
  value: {
    creator: string;
    admin: string;
  };
}
export interface MsgSubmitProposalAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSubmitProposal";
  value: {
    messages: {
      type_url: string;
      value: Uint8Array;
    }[];
    proposer: string;
  };
}
export interface MsgSubmitProposalLegacyAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgSubmitProposalLegacy";
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
    aminoType: "cosmos-sdk/MsgDeleteAdmin",
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
    aminoType: "cosmos-sdk/MsgAddAdmin",
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
    aminoType: "cosmos-sdk/MsgSubmitProposal",
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
        messages: messages.map((el0) => ({
          typeUrl: el0.type_url,
          value: el0.value,
        })),
        proposer,
      };
    },
  },
  "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy": {
    aminoType: "cosmos-sdk/MsgSubmitProposalLegacy",
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
        content: {
          typeUrl: content.type_url,
          value: content.value,
        },
        proposer,
      };
    },
  },
};
