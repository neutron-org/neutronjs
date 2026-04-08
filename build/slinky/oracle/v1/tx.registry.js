"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/slinky.oracle.v1.MsgAddCurrencyPairs", tx_js_1.MsgAddCurrencyPairs],
    ["/slinky.oracle.v1.MsgRemoveCurrencyPairs", tx_js_1.MsgRemoveCurrencyPairs],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        addCurrencyPairs(value) {
            return {
                typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
                value: tx_js_1.MsgAddCurrencyPairs.encode(value).finish(),
            };
        },
        removeCurrencyPairs(value) {
            return {
                typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
                value: tx_js_1.MsgRemoveCurrencyPairs.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        addCurrencyPairs(value) {
            return {
                typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
                value,
            };
        },
        removeCurrencyPairs(value) {
            return {
                typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
                value,
            };
        },
    },
    toJSON: {
        addCurrencyPairs(value) {
            return {
                typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
                value: tx_js_1.MsgAddCurrencyPairs.toJSON(value),
            };
        },
        removeCurrencyPairs(value) {
            return {
                typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
                value: tx_js_1.MsgRemoveCurrencyPairs.toJSON(value),
            };
        },
    },
    fromJSON: {
        addCurrencyPairs(value) {
            return {
                typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
                value: tx_js_1.MsgAddCurrencyPairs.fromJSON(value),
            };
        },
        removeCurrencyPairs(value) {
            return {
                typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
                value: tx_js_1.MsgRemoveCurrencyPairs.fromJSON(value),
            };
        },
    },
    fromPartial: {
        addCurrencyPairs(value) {
            return {
                typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
                value: tx_js_1.MsgAddCurrencyPairs.fromPartial(value),
            };
        },
        removeCurrencyPairs(value) {
            return {
                typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
                value: tx_js_1.MsgRemoveCurrencyPairs.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map