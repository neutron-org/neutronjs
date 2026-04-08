"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.protocolpool.v1.MsgFundCommunityPool": {
        aminoType: "cosmos-sdk/MsgFundCommunityPool",
        toAmino: ({ depositor, amount }) => {
            return {
                depositor,
                amount: amount.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
        fromAmino: ({ depositor, amount }) => {
            return {
                depositor,
                amount: amount.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
    },
    "/cosmos.protocolpool.v1.MsgCommunityPoolSpend": {
        aminoType: "cosmos-sdk/MsgCommunityPoolSpend",
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
    "/cosmos.protocolpool.v1.MsgCreateContinuousFund": {
        aminoType: "cosmos-sdk/MsgCreateContinuousFund",
        toAmino: ({ authority, recipient, percentage, expiry, }) => {
            return {
                authority,
                recipient,
                percentage,
                expiry,
            };
        },
        fromAmino: ({ authority, recipient, percentage, expiry, }) => {
            return {
                authority,
                recipient,
                percentage,
                expiry,
            };
        },
    },
    "/cosmos.protocolpool.v1.MsgCancelContinuousFund": {
        aminoType: "cosmos-sdk/MsgCancelContinuousFund",
        toAmino: ({ authority, recipient, }) => {
            return {
                authority,
                recipient,
            };
        },
        fromAmino: ({ authority, recipient, }) => {
            return {
                authority,
                recipient,
            };
        },
    },
    "/cosmos.protocolpool.v1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    enabled_distribution_denoms: params.enabledDistributionDenoms,
                    distribution_frequency: (0, helpers_js_1.omitDefault)(params.distributionFrequency)?.toString?.(),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        enabledDistributionDenoms: params.enabled_distribution_denoms,
                        distributionFrequency: params.distribution_frequency == null
                            ? params.distribution_frequency
                            : BigInt(params.distribution_frequency),
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map