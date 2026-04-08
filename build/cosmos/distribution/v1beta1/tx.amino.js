"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
        aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
        toAmino: ({ delegatorAddress, withdrawAddress, }) => {
            return {
                delegator_address: delegatorAddress,
                withdraw_address: withdrawAddress,
            };
        },
        fromAmino: ({ delegator_address, withdraw_address, }) => {
            return {
                delegatorAddress: delegator_address,
                withdrawAddress: withdraw_address,
            };
        },
    },
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
        aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
        toAmino: ({ delegatorAddress, validatorAddress, }) => {
            return {
                delegator_address: delegatorAddress,
                validator_address: validatorAddress,
            };
        },
        fromAmino: ({ delegator_address, validator_address, }) => {
            return {
                delegatorAddress: delegator_address,
                validatorAddress: validator_address,
            };
        },
    },
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
        aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
        toAmino: ({ validatorAddress, }) => {
            return {
                validator_address: validatorAddress,
            };
        },
        fromAmino: ({ validator_address, }) => {
            return {
                validatorAddress: validator_address,
            };
        },
    },
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
        aminoType: "cosmos-sdk/MsgFundCommunityPool",
        toAmino: ({ amount, depositor }) => {
            return {
                amount: amount.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                depositor,
            };
        },
        fromAmino: ({ amount, depositor }) => {
            return {
                amount: amount.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                depositor,
            };
        },
    },
    "/cosmos.distribution.v1beta1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/distribution/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    community_tax: params.communityTax,
                    base_proposer_reward: params.baseProposerReward,
                    bonus_proposer_reward: params.bonusProposerReward,
                    withdraw_addr_enabled: (0, helpers_js_1.omitDefault)(params.withdrawAddrEnabled),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        communityTax: params.community_tax,
                        baseProposerReward: params.base_proposer_reward,
                        bonusProposerReward: params.bonus_proposer_reward,
                        withdrawAddrEnabled: params.withdraw_addr_enabled,
                    },
            };
        },
    },
    "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
        aminoType: "cosmos-sdk/distr/MsgCommunityPoolSpend",
        toAmino: ({ authority, recipient, amount, }) => {
            return {
                authority,
                recipient,
                amount: amount.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
        fromAmino: ({ authority, recipient, amount, }) => {
            return {
                authority,
                recipient,
                amount: amount.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
    },
    "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool": {
        aminoType: "cosmos-sdk/distr/MsgDepositValRewards",
        toAmino: ({ depositor, validatorAddress, amount, }) => {
            return {
                depositor,
                validator_address: validatorAddress,
                amount: amount.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
        fromAmino: ({ depositor, validator_address, amount, }) => {
            return {
                depositor,
                validatorAddress: validator_address,
                amount: amount.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map