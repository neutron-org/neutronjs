//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types.js";
import { MsgParams } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/feemarket.feemarket.v1.MsgParams", MsgParams],
];
export const MessageComposer = {
  encoded: {
    params(value: MsgParams) {
      return {
        typeUrl: "/feemarket.feemarket.v1.MsgParams",
        value: MsgParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    params(value: MsgParams) {
      return {
        typeUrl: "/feemarket.feemarket.v1.MsgParams",
        value,
      };
    },
  },
  toJSON: {
    params(value: MsgParams) {
      return {
        typeUrl: "/feemarket.feemarket.v1.MsgParams",
        value: MsgParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    params(value: any) {
      return {
        typeUrl: "/feemarket.feemarket.v1.MsgParams",
        value: MsgParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    params(value: MsgParams) {
      return {
        typeUrl: "/feemarket.feemarket.v1.MsgParams",
        value: MsgParams.fromPartial(value),
      };
    },
  },
};
