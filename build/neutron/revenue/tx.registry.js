"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/neutron.revenue.MsgUpdateParams", tx_js_1.MsgUpdateParams],
    ["/neutron.revenue.MsgFundTreasury", tx_js_1.MsgFundTreasury],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        updateParams(value) {
            return {
                typeUrl: "/neutron.revenue.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
        fundTreasury(value) {
            return {
                typeUrl: "/neutron.revenue.MsgFundTreasury",
                value: tx_js_1.MsgFundTreasury.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        updateParams(value) {
            return {
                typeUrl: "/neutron.revenue.MsgUpdateParams",
                value,
            };
        },
        fundTreasury(value) {
            return {
                typeUrl: "/neutron.revenue.MsgFundTreasury",
                value,
            };
        },
    },
    toJSON: {
        updateParams(value) {
            return {
                typeUrl: "/neutron.revenue.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
        fundTreasury(value) {
            return {
                typeUrl: "/neutron.revenue.MsgFundTreasury",
                value: tx_js_1.MsgFundTreasury.toJSON(value),
            };
        },
    },
    fromJSON: {
        updateParams(value) {
            return {
                typeUrl: "/neutron.revenue.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
        fundTreasury(value) {
            return {
                typeUrl: "/neutron.revenue.MsgFundTreasury",
                value: tx_js_1.MsgFundTreasury.fromJSON(value),
            };
        },
    },
    fromPartial: {
        updateParams(value) {
            return {
                typeUrl: "/neutron.revenue.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
        fundTreasury(value) {
            return {
                typeUrl: "/neutron.revenue.MsgFundTreasury",
                value: tx_js_1.MsgFundTreasury.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map