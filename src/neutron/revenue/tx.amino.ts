//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../helpers";
import { MsgUpdateParams, MsgFundTreasury } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "revenue/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      reward_asset: string;
      reward_quote: {
        amount: string;
        asset: string;
      };
      blocks_performance_requirement: {
        allowed_to_miss: string;
        required_at_least: string;
      };
      oracle_votes_performance_requirement: {
        allowed_to_miss: string;
        required_at_least: string;
      };
      payment_schedule_type: {
        monthly_payment_schedule_type: {};
        block_based_payment_schedule_type: {
          blocks_per_period: string;
        };
        empty_payment_schedule_type: {};
      };
      twap_window: string;
    };
  };
}
export interface MsgFundTreasuryAminoType extends AminoMsg {
  type: "revenue/MsgFundTreasury";
  value: {
    sender: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/neutron.revenue.MsgUpdateParams": {
    aminoType: "revenue/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          reward_asset: params.rewardAsset,
          reward_quote: {
            amount: omitDefault(params.rewardQuote.amount)?.toString?.(),
            asset: params.rewardQuote.asset,
          },
          blocks_performance_requirement: {
            allowed_to_miss: params.blocksPerformanceRequirement.allowedToMiss,
            required_at_least: params.blocksPerformanceRequirement.requiredAtLeast,
          },
          oracle_votes_performance_requirement: {
            allowed_to_miss: params.oracleVotesPerformanceRequirement.allowedToMiss,
            required_at_least: params.oracleVotesPerformanceRequirement.requiredAtLeast,
          },
          payment_schedule_type: {
            monthly_payment_schedule_type: {},
            block_based_payment_schedule_type: {
              blocks_per_period: omitDefault(
                params.paymentScheduleType.blockBasedPaymentScheduleType.blocksPerPeriod,
              )?.toString?.(),
            },
            empty_payment_schedule_type: {},
          },
          twap_window: omitDefault(params.twapWindow)?.toString?.(),
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
                rewardAsset: params.reward_asset,
                rewardQuote:
                  params.reward_quote == null
                    ? params.reward_quote
                    : {
                        amount:
                          params.reward_quote.amount == null
                            ? params.reward_quote.amount
                            : BigInt(params.reward_quote.amount),
                        asset: params.reward_quote.asset,
                      },
                blocksPerformanceRequirement:
                  params.blocks_performance_requirement == null
                    ? params.blocks_performance_requirement
                    : {
                        allowedToMiss: params.blocks_performance_requirement.allowed_to_miss,
                        requiredAtLeast: params.blocks_performance_requirement.required_at_least,
                      },
                oracleVotesPerformanceRequirement:
                  params.oracle_votes_performance_requirement == null
                    ? params.oracle_votes_performance_requirement
                    : {
                        allowedToMiss: params.oracle_votes_performance_requirement.allowed_to_miss,
                        requiredAtLeast: params.oracle_votes_performance_requirement.required_at_least,
                      },
                paymentScheduleType:
                  params.payment_schedule_type == null
                    ? params.payment_schedule_type
                    : {
                        monthlyPaymentScheduleType:
                          params.payment_schedule_type.monthly_payment_schedule_type == null
                            ? params.payment_schedule_type.monthly_payment_schedule_type
                            : {},
                        blockBasedPaymentScheduleType:
                          params.payment_schedule_type.block_based_payment_schedule_type == null
                            ? params.payment_schedule_type.block_based_payment_schedule_type
                            : {
                                blocksPerPeriod:
                                  params.payment_schedule_type.block_based_payment_schedule_type
                                    .blocks_per_period == null
                                    ? params.payment_schedule_type.block_based_payment_schedule_type
                                        .blocks_per_period
                                    : BigInt(
                                        params.payment_schedule_type.block_based_payment_schedule_type
                                          .blocks_per_period,
                                      ),
                              },
                        emptyPaymentScheduleType:
                          params.payment_schedule_type.empty_payment_schedule_type == null
                            ? params.payment_schedule_type.empty_payment_schedule_type
                            : {},
                      },
                twapWindow: params.twap_window == null ? params.twap_window : BigInt(params.twap_window),
              },
      };
    },
  },
  "/neutron.revenue.MsgFundTreasury": {
    aminoType: "revenue/MsgFundTreasury",
    toAmino: ({ sender, amount }: MsgFundTreasury): MsgFundTreasuryAminoType["value"] => {
      return {
        sender,
        amount: amount.map((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
      };
    },
    fromAmino: ({ sender, amount }: MsgFundTreasuryAminoType["value"]): MsgFundTreasury => {
      return {
        sender,
        amount: amount.map?.((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
      };
    },
  },
};
