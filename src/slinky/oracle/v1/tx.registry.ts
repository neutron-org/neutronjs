//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types.js";
import { MsgAddCurrencyPairs, MsgRemoveCurrencyPairs } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/slinky.oracle.v1.MsgAddCurrencyPairs", MsgAddCurrencyPairs],
  ["/slinky.oracle.v1.MsgRemoveCurrencyPairs", MsgRemoveCurrencyPairs],
];
export const MessageComposer = {
  encoded: {
    addCurrencyPairs(value: MsgAddCurrencyPairs) {
      return {
        typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
        value: MsgAddCurrencyPairs.encode(value).finish(),
      };
    },
    removeCurrencyPairs(value: MsgRemoveCurrencyPairs) {
      return {
        typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
        value: MsgRemoveCurrencyPairs.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    addCurrencyPairs(value: MsgAddCurrencyPairs) {
      return {
        typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
        value,
      };
    },
    removeCurrencyPairs(value: MsgRemoveCurrencyPairs) {
      return {
        typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
        value,
      };
    },
  },
  toJSON: {
    addCurrencyPairs(value: MsgAddCurrencyPairs) {
      return {
        typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
        value: MsgAddCurrencyPairs.toJSON(value),
      };
    },
    removeCurrencyPairs(value: MsgRemoveCurrencyPairs) {
      return {
        typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
        value: MsgRemoveCurrencyPairs.toJSON(value),
      };
    },
  },
  fromJSON: {
    addCurrencyPairs(value: any) {
      return {
        typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
        value: MsgAddCurrencyPairs.fromJSON(value),
      };
    },
    removeCurrencyPairs(value: any) {
      return {
        typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
        value: MsgRemoveCurrencyPairs.fromJSON(value),
      };
    },
  },
  fromPartial: {
    addCurrencyPairs(value: MsgAddCurrencyPairs) {
      return {
        typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
        value: MsgAddCurrencyPairs.fromPartial(value),
      };
    },
    removeCurrencyPairs(value: MsgRemoveCurrencyPairs) {
      return {
        typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
        value: MsgRemoveCurrencyPairs.fromPartial(value),
      };
    },
  },
};
