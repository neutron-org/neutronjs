"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/neutron.dex.MsgDeposit", tx_js_1.MsgDeposit],
    ["/neutron.dex.MsgWithdrawal", tx_js_1.MsgWithdrawal],
    ["/neutron.dex.MsgWithdrawalWithShares", tx_js_1.MsgWithdrawalWithShares],
    ["/neutron.dex.MsgPlaceLimitOrder", tx_js_1.MsgPlaceLimitOrder],
    ["/neutron.dex.MsgWithdrawFilledLimitOrder", tx_js_1.MsgWithdrawFilledLimitOrder],
    ["/neutron.dex.MsgCancelLimitOrder", tx_js_1.MsgCancelLimitOrder],
    ["/neutron.dex.MsgMultiHopSwap", tx_js_1.MsgMultiHopSwap],
    ["/neutron.dex.MsgUpdateParams", tx_js_1.MsgUpdateParams],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        deposit(value) {
            return {
                typeUrl: "/neutron.dex.MsgDeposit",
                value: tx_js_1.MsgDeposit.encode(value).finish(),
            };
        },
        withdrawal(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawal",
                value: tx_js_1.MsgWithdrawal.encode(value).finish(),
            };
        },
        withdrawalWithShares(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawalWithShares",
                value: tx_js_1.MsgWithdrawalWithShares.encode(value).finish(),
            };
        },
        placeLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgPlaceLimitOrder",
                value: tx_js_1.MsgPlaceLimitOrder.encode(value).finish(),
            };
        },
        withdrawFilledLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrder",
                value: tx_js_1.MsgWithdrawFilledLimitOrder.encode(value).finish(),
            };
        },
        cancelLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgCancelLimitOrder",
                value: tx_js_1.MsgCancelLimitOrder.encode(value).finish(),
            };
        },
        multiHopSwap(value) {
            return {
                typeUrl: "/neutron.dex.MsgMultiHopSwap",
                value: tx_js_1.MsgMultiHopSwap.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.dex.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        deposit(value) {
            return {
                typeUrl: "/neutron.dex.MsgDeposit",
                value,
            };
        },
        withdrawal(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawal",
                value,
            };
        },
        withdrawalWithShares(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawalWithShares",
                value,
            };
        },
        placeLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgPlaceLimitOrder",
                value,
            };
        },
        withdrawFilledLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrder",
                value,
            };
        },
        cancelLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgCancelLimitOrder",
                value,
            };
        },
        multiHopSwap(value) {
            return {
                typeUrl: "/neutron.dex.MsgMultiHopSwap",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.dex.MsgUpdateParams",
                value,
            };
        },
    },
    toJSON: {
        deposit(value) {
            return {
                typeUrl: "/neutron.dex.MsgDeposit",
                value: tx_js_1.MsgDeposit.toJSON(value),
            };
        },
        withdrawal(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawal",
                value: tx_js_1.MsgWithdrawal.toJSON(value),
            };
        },
        withdrawalWithShares(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawalWithShares",
                value: tx_js_1.MsgWithdrawalWithShares.toJSON(value),
            };
        },
        placeLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgPlaceLimitOrder",
                value: tx_js_1.MsgPlaceLimitOrder.toJSON(value),
            };
        },
        withdrawFilledLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrder",
                value: tx_js_1.MsgWithdrawFilledLimitOrder.toJSON(value),
            };
        },
        cancelLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgCancelLimitOrder",
                value: tx_js_1.MsgCancelLimitOrder.toJSON(value),
            };
        },
        multiHopSwap(value) {
            return {
                typeUrl: "/neutron.dex.MsgMultiHopSwap",
                value: tx_js_1.MsgMultiHopSwap.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.dex.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        deposit(value) {
            return {
                typeUrl: "/neutron.dex.MsgDeposit",
                value: tx_js_1.MsgDeposit.fromJSON(value),
            };
        },
        withdrawal(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawal",
                value: tx_js_1.MsgWithdrawal.fromJSON(value),
            };
        },
        withdrawalWithShares(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawalWithShares",
                value: tx_js_1.MsgWithdrawalWithShares.fromJSON(value),
            };
        },
        placeLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgPlaceLimitOrder",
                value: tx_js_1.MsgPlaceLimitOrder.fromJSON(value),
            };
        },
        withdrawFilledLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrder",
                value: tx_js_1.MsgWithdrawFilledLimitOrder.fromJSON(value),
            };
        },
        cancelLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgCancelLimitOrder",
                value: tx_js_1.MsgCancelLimitOrder.fromJSON(value),
            };
        },
        multiHopSwap(value) {
            return {
                typeUrl: "/neutron.dex.MsgMultiHopSwap",
                value: tx_js_1.MsgMultiHopSwap.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.dex.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        deposit(value) {
            return {
                typeUrl: "/neutron.dex.MsgDeposit",
                value: tx_js_1.MsgDeposit.fromPartial(value),
            };
        },
        withdrawal(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawal",
                value: tx_js_1.MsgWithdrawal.fromPartial(value),
            };
        },
        withdrawalWithShares(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawalWithShares",
                value: tx_js_1.MsgWithdrawalWithShares.fromPartial(value),
            };
        },
        placeLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgPlaceLimitOrder",
                value: tx_js_1.MsgPlaceLimitOrder.fromPartial(value),
            };
        },
        withdrawFilledLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrder",
                value: tx_js_1.MsgWithdrawFilledLimitOrder.fromPartial(value),
            };
        },
        cancelLimitOrder(value) {
            return {
                typeUrl: "/neutron.dex.MsgCancelLimitOrder",
                value: tx_js_1.MsgCancelLimitOrder.fromPartial(value),
            };
        },
        multiHopSwap(value) {
            return {
                typeUrl: "/neutron.dex.MsgMultiHopSwap",
                value: tx_js_1.MsgMultiHopSwap.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.dex.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map