//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { Decimal } from "@interchainjs/math";
import { omitDefault } from "../../../helpers.js";
import { MsgUpdateParams } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cosmos-sdk/x/mint/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      mint_denom: string;
      inflation_rate_change: string;
      inflation_max: string;
      inflation_min: string;
      goal_bonded: string;
      blocks_per_year: string;
    };
  };
}
export const AminoConverter = {
  "/cosmos.mint.v1beta1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/x/mint/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          mint_denom: params.mintDenom,
          inflation_rate_change: Decimal.fromUserInput(params.inflationRateChange, 18).atomics,
          inflation_max: Decimal.fromUserInput(params.inflationMax, 18).atomics,
          inflation_min: Decimal.fromUserInput(params.inflationMin, 18).atomics,
          goal_bonded: Decimal.fromUserInput(params.goalBonded, 18).atomics,
          blocks_per_year: omitDefault(params.blocksPerYear)?.toString?.(),
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
                mintDenom: params.mint_denom,
                inflationRateChange: params.inflation_rate_change,
                inflationMax: params.inflation_max,
                inflationMin: params.inflation_min,
                goalBonded: params.goal_bonded,
                blocksPerYear:
                  params.blocks_per_year == null ? params.blocks_per_year : BigInt(params.blocks_per_year),
              },
      };
    },
  },
};
