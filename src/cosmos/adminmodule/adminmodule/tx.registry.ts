//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types.js";
import { MsgDeleteAdmin, MsgAddAdmin, MsgSubmitProposal, MsgSubmitProposalLegacy } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/cosmos.adminmodule.adminmodule.MsgDeleteAdmin", MsgDeleteAdmin],
  ["/cosmos.adminmodule.adminmodule.MsgAddAdmin", MsgAddAdmin],
  ["/cosmos.adminmodule.adminmodule.MsgSubmitProposal", MsgSubmitProposal],
  ["/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy", MsgSubmitProposalLegacy],
];
export const MessageComposer = {
  encoded: {
    deleteAdmin(value: MsgDeleteAdmin) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
        value: MsgDeleteAdmin.encode(value).finish(),
      };
    },
    addAdmin(value: MsgAddAdmin) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
        value: MsgAddAdmin.encode(value).finish(),
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish(),
      };
    },
    submitProposalLegacy(value: MsgSubmitProposalLegacy) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
        value: MsgSubmitProposalLegacy.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    deleteAdmin(value: MsgDeleteAdmin) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
        value,
      };
    },
    addAdmin(value: MsgAddAdmin) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
        value,
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
        value,
      };
    },
    submitProposalLegacy(value: MsgSubmitProposalLegacy) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
        value,
      };
    },
  },
  toJSON: {
    deleteAdmin(value: MsgDeleteAdmin) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
        value: MsgDeleteAdmin.toJSON(value),
      };
    },
    addAdmin(value: MsgAddAdmin) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
        value: MsgAddAdmin.toJSON(value),
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
        value: MsgSubmitProposal.toJSON(value),
      };
    },
    submitProposalLegacy(value: MsgSubmitProposalLegacy) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
        value: MsgSubmitProposalLegacy.toJSON(value),
      };
    },
  },
  fromJSON: {
    deleteAdmin(value: any) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
        value: MsgDeleteAdmin.fromJSON(value),
      };
    },
    addAdmin(value: any) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
        value: MsgAddAdmin.fromJSON(value),
      };
    },
    submitProposal(value: any) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON(value),
      };
    },
    submitProposalLegacy(value: any) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
        value: MsgSubmitProposalLegacy.fromJSON(value),
      };
    },
  },
  fromPartial: {
    deleteAdmin(value: MsgDeleteAdmin) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
        value: MsgDeleteAdmin.fromPartial(value),
      };
    },
    addAdmin(value: MsgAddAdmin) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
        value: MsgAddAdmin.fromPartial(value),
      };
    },
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value),
      };
    },
    submitProposalLegacy(value: MsgSubmitProposalLegacy) {
      return {
        typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
        value: MsgSubmitProposalLegacy.fromPartial(value),
      };
    },
  },
};
