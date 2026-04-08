"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../helpers.js");
exports.AminoConverter = {
    "/neutron.revenue.MsgUpdateParams": {
        aminoType: "revenue/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    reward_asset: params.rewardAsset,
                    reward_quote: {
                        amount: (0, helpers_js_1.omitDefault)(params.rewardQuote.amount)?.toString?.(),
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
                            blocks_per_period: (0, helpers_js_1.omitDefault)(params.paymentScheduleType.blockBasedPaymentScheduleType.blocksPerPeriod)?.toString?.(),
                        },
                        empty_payment_schedule_type: {},
                    },
                    twap_window: (0, helpers_js_1.omitDefault)(params.twapWindow)?.toString?.(),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        rewardAsset: params.reward_asset,
                        rewardQuote: params.reward_quote == null
                            ? params.reward_quote
                            : {
                                amount: params.reward_quote.amount == null
                                    ? params.reward_quote.amount
                                    : BigInt(params.reward_quote.amount),
                                asset: params.reward_quote.asset,
                            },
                        blocksPerformanceRequirement: params.blocks_performance_requirement == null
                            ? params.blocks_performance_requirement
                            : {
                                allowedToMiss: params.blocks_performance_requirement.allowed_to_miss,
                                requiredAtLeast: params.blocks_performance_requirement.required_at_least,
                            },
                        oracleVotesPerformanceRequirement: params.oracle_votes_performance_requirement == null
                            ? params.oracle_votes_performance_requirement
                            : {
                                allowedToMiss: params.oracle_votes_performance_requirement.allowed_to_miss,
                                requiredAtLeast: params.oracle_votes_performance_requirement.required_at_least,
                            },
                        paymentScheduleType: params.payment_schedule_type == null
                            ? params.payment_schedule_type
                            : {
                                monthlyPaymentScheduleType: params.payment_schedule_type.monthly_payment_schedule_type == null
                                    ? params.payment_schedule_type.monthly_payment_schedule_type
                                    : {},
                                blockBasedPaymentScheduleType: params.payment_schedule_type.block_based_payment_schedule_type == null
                                    ? params.payment_schedule_type.block_based_payment_schedule_type
                                    : {
                                        blocksPerPeriod: params.payment_schedule_type.block_based_payment_schedule_type
                                            .blocks_per_period == null
                                            ? params.payment_schedule_type.block_based_payment_schedule_type
                                                .blocks_per_period
                                            : BigInt(params.payment_schedule_type.block_based_payment_schedule_type
                                                .blocks_per_period),
                                    },
                                emptyPaymentScheduleType: params.payment_schedule_type.empty_payment_schedule_type == null
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
        toAmino: ({ sender, amount }) => {
            return {
                sender,
                amount: amount.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
        fromAmino: ({ sender, amount }) => {
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
//# sourceMappingURL=tx.amino.js.map