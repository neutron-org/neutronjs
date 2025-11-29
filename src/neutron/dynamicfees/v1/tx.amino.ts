//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { Decimal } from "@interchainjs/math";
import { MsgUpdateParams } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "dynamicfees/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      ntrn_prices: {
        denom: string;
        amount: string;
      }[];
    };
  };
}
export const AminoConverter = {
  "/neutron.dynamicfees.v1.MsgUpdateParams": {
    aminoType: "dynamicfees/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          ntrn_prices: params.ntrnPrices.map((el0) => ({
            denom: el0.denom,
            amount: Decimal.fromUserInput(el0.amount, 18).atomics,
          })),
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params:
          params == null
            ? params
            : {
                ntrnPrices: params.ntrn_prices.map?.((el1) => ({
                  denom: el1.denom,
                  amount: el1.amount,
                })),
              },
      };
    },
  },
};
