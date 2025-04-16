//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgAddCurrencyPairs, MsgRemoveCurrencyPairs } from "./tx";
export interface MsgAddCurrencyPairsAminoType extends AminoMsg {
  type: "slinky/x/oracle/MsgAddCurrencyPairs";
  value: {
    authority: string;
    currency_pairs: {
      Base: string;
      Quote: string;
    }[];
  };
}
export interface MsgRemoveCurrencyPairsAminoType extends AminoMsg {
  type: "slinky/x/oracle/MsgSetCurrencyPairs";
  value: {
    authority: string;
    currency_pair_ids: string[];
  };
}
export const AminoConverter = {
  "/slinky.oracle.v1.MsgAddCurrencyPairs": {
    aminoType: "slinky/x/oracle/MsgAddCurrencyPairs",
    toAmino: ({ authority, currencyPairs }: MsgAddCurrencyPairs): MsgAddCurrencyPairsAminoType["value"] => {
      return {
        authority,
        currency_pairs: currencyPairs.map((el0) => ({
          Base: el0.base,
          Quote: el0.quote,
        })),
      };
    },
    fromAmino: ({
      authority,
      currency_pairs,
    }: MsgAddCurrencyPairsAminoType["value"]): MsgAddCurrencyPairs => {
      return {
        authority,
        currencyPairs: currency_pairs.map((el0) => ({
          base: el0.Base,
          quote: el0.Quote,
        })),
      };
    },
  },
  "/slinky.oracle.v1.MsgRemoveCurrencyPairs": {
    aminoType: "slinky/x/oracle/MsgSetCurrencyPairs",
    toAmino: ({
      authority,
      currencyPairIds,
    }: MsgRemoveCurrencyPairs): MsgRemoveCurrencyPairsAminoType["value"] => {
      return {
        authority,
        currency_pair_ids: currencyPairIds,
      };
    },
    fromAmino: ({
      authority,
      currency_pair_ids,
    }: MsgRemoveCurrencyPairsAminoType["value"]): MsgRemoveCurrencyPairs => {
      return {
        authority,
        currencyPairIds: currency_pair_ids,
      };
    },
  },
};
