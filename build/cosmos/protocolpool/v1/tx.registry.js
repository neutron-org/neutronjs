"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/cosmos.protocolpool.v1.MsgFundCommunityPool", tx_js_1.MsgFundCommunityPool],
    ["/cosmos.protocolpool.v1.MsgCommunityPoolSpend", tx_js_1.MsgCommunityPoolSpend],
    ["/cosmos.protocolpool.v1.MsgCreateContinuousFund", tx_js_1.MsgCreateContinuousFund],
    ["/cosmos.protocolpool.v1.MsgCancelContinuousFund", tx_js_1.MsgCancelContinuousFund],
    ["/cosmos.protocolpool.v1.MsgUpdateParams", tx_js_1.MsgUpdateParams],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
                value: tx_js_1.MsgFundCommunityPool.encode(value).finish(),
            };
        },
        communityPoolSpend(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
                value: tx_js_1.MsgCommunityPoolSpend.encode(value).finish(),
            };
        },
        createContinuousFund(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
                value: tx_js_1.MsgCreateContinuousFund.encode(value).finish(),
            };
        },
        cancelContinuousFund(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
                value: tx_js_1.MsgCancelContinuousFund.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
                value,
            };
        },
        communityPoolSpend(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
                value,
            };
        },
        createContinuousFund(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
                value,
            };
        },
        cancelContinuousFund(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
                value,
            };
        },
    },
    toJSON: {
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
                value: tx_js_1.MsgFundCommunityPool.toJSON(value),
            };
        },
        communityPoolSpend(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
                value: tx_js_1.MsgCommunityPoolSpend.toJSON(value),
            };
        },
        createContinuousFund(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
                value: tx_js_1.MsgCreateContinuousFund.toJSON(value),
            };
        },
        cancelContinuousFund(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
                value: tx_js_1.MsgCancelContinuousFund.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
                value: tx_js_1.MsgFundCommunityPool.fromJSON(value),
            };
        },
        communityPoolSpend(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
                value: tx_js_1.MsgCommunityPoolSpend.fromJSON(value),
            };
        },
        createContinuousFund(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
                value: tx_js_1.MsgCreateContinuousFund.fromJSON(value),
            };
        },
        cancelContinuousFund(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
                value: tx_js_1.MsgCancelContinuousFund.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        fundCommunityPool(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgFundCommunityPool",
                value: tx_js_1.MsgFundCommunityPool.fromPartial(value),
            };
        },
        communityPoolSpend(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCommunityPoolSpend",
                value: tx_js_1.MsgCommunityPoolSpend.fromPartial(value),
            };
        },
        createContinuousFund(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCreateContinuousFund",
                value: tx_js_1.MsgCreateContinuousFund.fromPartial(value),
            };
        },
        cancelContinuousFund(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgCancelContinuousFund",
                value: tx_js_1.MsgCancelContinuousFund.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.protocolpool.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map