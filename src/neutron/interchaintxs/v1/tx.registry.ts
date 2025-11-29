//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types.js";
import { MsgRegisterInterchainAccount, MsgSubmitTx, MsgUpdateParams } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/neutron.interchaintxs.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount],
  ["/neutron.interchaintxs.v1.MsgSubmitTx", MsgSubmitTx],
  ["/neutron.interchaintxs.v1.MsgUpdateParams", MsgUpdateParams],
];
export const MessageComposer = {
  encoded: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.encode(value).finish(),
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
        value: MsgSubmitTx.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
        value,
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.toJSON(value),
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
        value: MsgSubmitTx.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    registerInterchainAccount(value: any) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.fromJSON(value),
      };
    },
    submitTx(value: any) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
        value: MsgSubmitTx.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    registerInterchainAccount(value: MsgRegisterInterchainAccount) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
        value: MsgRegisterInterchainAccount.fromPartial(value),
      };
    },
    submitTx(value: MsgSubmitTx) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
        value: MsgSubmitTx.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
