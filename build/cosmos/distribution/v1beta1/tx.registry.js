"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", tx_js_1.MsgSetWithdrawAddress],
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", tx_js_1.MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", tx_js_1.MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", tx_js_1.MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.MsgUpdateParams", tx_js_1.MsgUpdateParams],
    ["/cosmos.distribution.v1beta1.MsgCommunityPoolSpend", tx_js_1.MsgCommunityPoolSpend],
    ["/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool", tx_js_1.MsgDepositValidatorRewardsPool],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        setWithdrawAddress(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: tx_js_1.MsgSetWithdrawAddress.encode(value).finish(),
            };
        },
        withdrawDelegatorReward(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: tx_js_1.MsgWithdrawDelegatorReward.encode(value).finish(),
            };
        },
        withdrawValidatorCommission(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: tx_js_1.MsgWithdrawValidatorCommission.encode(value).finish(),
            };
        },
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: tx_js_1.MsgFundCommunityPool.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
        communityPoolSpend(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
                value: tx_js_1.MsgCommunityPoolSpend.encode(value).finish(),
            };
        },
        depositValidatorRewardsPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
                value: tx_js_1.MsgDepositValidatorRewardsPool.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        setWithdrawAddress(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value,
            };
        },
        withdrawDelegatorReward(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value,
            };
        },
        withdrawValidatorCommission(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value,
            };
        },
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
                value,
            };
        },
        communityPoolSpend(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
                value,
            };
        },
        depositValidatorRewardsPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
                value,
            };
        },
    },
    toJSON: {
        setWithdrawAddress(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: tx_js_1.MsgSetWithdrawAddress.toJSON(value),
            };
        },
        withdrawDelegatorReward(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: tx_js_1.MsgWithdrawDelegatorReward.toJSON(value),
            };
        },
        withdrawValidatorCommission(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: tx_js_1.MsgWithdrawValidatorCommission.toJSON(value),
            };
        },
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: tx_js_1.MsgFundCommunityPool.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
        communityPoolSpend(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
                value: tx_js_1.MsgCommunityPoolSpend.toJSON(value),
            };
        },
        depositValidatorRewardsPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
                value: tx_js_1.MsgDepositValidatorRewardsPool.toJSON(value),
            };
        },
    },
    fromJSON: {
        setWithdrawAddress(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: tx_js_1.MsgSetWithdrawAddress.fromJSON(value),
            };
        },
        withdrawDelegatorReward(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: tx_js_1.MsgWithdrawDelegatorReward.fromJSON(value),
            };
        },
        withdrawValidatorCommission(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: tx_js_1.MsgWithdrawValidatorCommission.fromJSON(value),
            };
        },
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: tx_js_1.MsgFundCommunityPool.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
        communityPoolSpend(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
                value: tx_js_1.MsgCommunityPoolSpend.fromJSON(value),
            };
        },
        depositValidatorRewardsPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
                value: tx_js_1.MsgDepositValidatorRewardsPool.fromJSON(value),
            };
        },
    },
    fromPartial: {
        setWithdrawAddress(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: tx_js_1.MsgSetWithdrawAddress.fromPartial(value),
            };
        },
        withdrawDelegatorReward(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: tx_js_1.MsgWithdrawDelegatorReward.fromPartial(value),
            };
        },
        withdrawValidatorCommission(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: tx_js_1.MsgWithdrawValidatorCommission.fromPartial(value),
            };
        },
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: tx_js_1.MsgFundCommunityPool.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
        communityPoolSpend(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
                value: tx_js_1.MsgCommunityPoolSpend.fromPartial(value),
            };
        },
        depositValidatorRewardsPool(value) {
            return {
                typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
                value: tx_js_1.MsgDepositValidatorRewardsPool.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map