//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { MsgParams } from "./tx";
export interface MsgParamsAminoType extends AminoMsg {
  type: "/feemarket.feemarket.v1.MsgParams";
  value: {
    params: {
      alpha: string;
      beta: string;
      gamma: string;
      delta: string;
      min_base_gas_price: string;
      min_learning_rate: string;
      max_learning_rate: string;
      max_block_utilization: string;
      window: string;
      fee_denom: string;
      enabled: boolean;
      distribute_fees: boolean;
      send_tip_to_proposer: boolean;
    };
    authority: string;
  };
}
export const AminoConverter = {
  "/feemarket.feemarket.v1.MsgParams": {
    aminoType: "/feemarket.feemarket.v1.MsgParams",
    toAmino: ({ params, authority }: MsgParams): MsgParamsAminoType["value"] => {
      return {
        params: {
          alpha: params.alpha,
          beta: params.beta,
          gamma: params.gamma,
          delta: params.delta,
          min_base_gas_price: params.minBaseGasPrice,
          min_learning_rate: params.minLearningRate,
          max_learning_rate: params.maxLearningRate,
          max_block_utilization: omitDefault(params.maxBlockUtilization)?.toString?.(),
          window: omitDefault(params.window)?.toString?.(),
          fee_denom: params.feeDenom,
          enabled: omitDefault(params.enabled),
          distribute_fees: omitDefault(params.distributeFees),
          send_tip_to_proposer: omitDefault(params.sendTipToProposer),
        },
        authority,
      };
    },
    fromAmino: ({ params, authority }: MsgParamsAminoType["value"]): MsgParams => {
      return {
        params:
          params == null
            ? params
            : {
                alpha: params.alpha,
                beta: params.beta,
                gamma: params.gamma,
                delta: params.delta,
                minBaseGasPrice: params.min_base_gas_price,
                minLearningRate: params.min_learning_rate,
                maxLearningRate: params.max_learning_rate,
                maxBlockUtilization:
                  params.max_block_utilization == null
                    ? params.max_block_utilization
                    : BigInt(params.max_block_utilization),
                window: params.window == null ? params.window : BigInt(params.window),
                feeDenom: params.fee_denom,
                enabled: params.enabled,
                distributeFees: params.distribute_fees,
                sendTipToProposer: params.send_tip_to_proposer,
              },
        authority,
      };
    },
  },
};
