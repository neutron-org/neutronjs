//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types.js";
import { MsgTransfer, MsgUpdateParams } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/neutron.transfer.MsgTransfer", MsgTransfer],
  ["/neutron.transfer.MsgUpdateParams", MsgUpdateParams],
];
export const MessageComposer = {
  encoded: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/neutron.transfer.MsgTransfer",
        value: MsgTransfer.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.transfer.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/neutron.transfer.MsgTransfer",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.transfer.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/neutron.transfer.MsgTransfer",
        value: MsgTransfer.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.transfer.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    transfer(value: any) {
      return {
        typeUrl: "/neutron.transfer.MsgTransfer",
        value: MsgTransfer.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/neutron.transfer.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    transfer(value: MsgTransfer) {
      return {
        typeUrl: "/neutron.transfer.MsgTransfer",
        value: MsgTransfer.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.transfer.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
