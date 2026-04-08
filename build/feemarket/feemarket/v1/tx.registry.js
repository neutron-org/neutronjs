"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/feemarket.feemarket.v1.MsgParams", tx_js_1.MsgParams],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        params(value) {
            return {
                typeUrl: "/feemarket.feemarket.v1.MsgParams",
                value: tx_js_1.MsgParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        params(value) {
            return {
                typeUrl: "/feemarket.feemarket.v1.MsgParams",
                value,
            };
        },
    },
    toJSON: {
        params(value) {
            return {
                typeUrl: "/feemarket.feemarket.v1.MsgParams",
                value: tx_js_1.MsgParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        params(value) {
            return {
                typeUrl: "/feemarket.feemarket.v1.MsgParams",
                value: tx_js_1.MsgParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        params(value) {
            return {
                typeUrl: "/feemarket.feemarket.v1.MsgParams",
                value: tx_js_1.MsgParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map