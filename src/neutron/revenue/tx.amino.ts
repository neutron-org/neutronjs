//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
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
            amount: params.rewardQuote.amount.toString(),
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
              blocks_per_period:
                params.paymentScheduleType.blockBasedPaymentScheduleType.blocksPerPeriod.toString(),
            },
            empty_payment_schedule_type: {},
          },
          twap_window: params.twapWindow.toString(),
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          rewardAsset: params.reward_asset,
          rewardQuote: {
            amount: BigInt(params.reward_quote.amount),
            asset: params.reward_quote.asset,
          },
          blocksPerformanceRequirement: {
            allowedToMiss: params.blocks_performance_requirement.allowed_to_miss,
            requiredAtLeast: params.blocks_performance_requirement.required_at_least,
          },
          oracleVotesPerformanceRequirement: {
            allowedToMiss: params.oracle_votes_performance_requirement.allowed_to_miss,
            requiredAtLeast: params.oracle_votes_performance_requirement.required_at_least,
          },
          paymentScheduleType: {
            monthlyPaymentScheduleType: {},
            blockBasedPaymentScheduleType: {
              blocksPerPeriod: BigInt(
                params.payment_schedule_type.block_based_payment_schedule_type.blocks_per_period,
              ),
            },
            emptyPaymentScheduleType: {},
          },
          twapWindow: BigInt(params.twap_window),
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
        amount: amount.map((el0) => ({
          denom: el0.denom,
          amount: el0.amount,
        })),
      };
    },
  },
};
