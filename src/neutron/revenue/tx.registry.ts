//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../types.js";
import { MsgUpdateParams, MsgFundTreasury } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/neutron.revenue.MsgUpdateParams", MsgUpdateParams],
  ["/neutron.revenue.MsgFundTreasury", MsgFundTreasury],
];
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.revenue.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
    fundTreasury(value: MsgFundTreasury) {
      return {
        typeUrl: "/neutron.revenue.MsgFundTreasury",
        value: MsgFundTreasury.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.revenue.MsgUpdateParams",
        value,
      };
    },
    fundTreasury(value: MsgFundTreasury) {
      return {
        typeUrl: "/neutron.revenue.MsgFundTreasury",
        value,
      };
    },
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.revenue.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
    fundTreasury(value: MsgFundTreasury) {
      return {
        typeUrl: "/neutron.revenue.MsgFundTreasury",
        value: MsgFundTreasury.toJSON(value),
      };
    },
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/neutron.revenue.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
    fundTreasury(value: any) {
      return {
        typeUrl: "/neutron.revenue.MsgFundTreasury",
        value: MsgFundTreasury.fromJSON(value),
      };
    },
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.revenue.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
    fundTreasury(value: MsgFundTreasury) {
      return {
        typeUrl: "/neutron.revenue.MsgFundTreasury",
        value: MsgFundTreasury.fromPartial(value),
      };
    },
  },
};
