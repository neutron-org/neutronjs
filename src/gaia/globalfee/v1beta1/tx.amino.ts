//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "globalfee/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      minimum_gas_prices: {
        denom: string;
        amount: string;
      }[];
      bypass_min_fee_msg_types: string[];
      max_total_bypass_min_fee_msg_gas_usage: string;
    };
  };
}
export const AminoConverter = {
  "/gaia.globalfee.v1beta1.MsgUpdateParams": {
    aminoType: "globalfee/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          minimum_gas_prices: params.minimumGasPrices.map((el0) => ({
            denom: el0.denom,
            amount: el0.amount,
          })),
          bypass_min_fee_msg_types: params.bypassMinFeeMsgTypes,
          max_total_bypass_min_fee_msg_gas_usage: omitDefault(
            params.maxTotalBypassMinFeeMsgGasUsage,
          )?.toString?.(),
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
                minimumGasPrices: params.minimum_gas_prices.map?.((el1) => ({
                  denom: el1.denom,
                  amount: el1.amount,
                })),
                bypassMinFeeMsgTypes: params.bypass_min_fee_msg_types,
                maxTotalBypassMinFeeMsgGasUsage:
                  params.max_total_bypass_min_fee_msg_gas_usage == null
                    ? params.max_total_bypass_min_fee_msg_gas_usage
                    : BigInt(params.max_total_bypass_min_fee_msg_gas_usage),
              },
      };
    },
  },
};
