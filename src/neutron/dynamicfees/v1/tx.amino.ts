//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
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
            amount: el0.amount,
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
