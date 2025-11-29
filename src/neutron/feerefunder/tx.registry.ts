//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../types.js";
import { MsgUpdateParams } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/neutron.feerefunder.MsgUpdateParams", MsgUpdateParams],
];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.feerefunder.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.feerefunder.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.feerefunder.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/neutron.feerefunder.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.feerefunder.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
