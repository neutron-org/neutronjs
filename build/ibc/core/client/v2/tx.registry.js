"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/ibc.core.client.v2.MsgRegisterCounterparty", tx_js_1.MsgRegisterCounterparty],
    ["/ibc.core.client.v2.MsgUpdateClientConfig", tx_js_1.MsgUpdateClientConfig],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        registerCounterparty(value) {
            return {
                typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
                value: tx_js_1.MsgRegisterCounterparty.encode(value).finish(),
            };
        },
        updateClientConfig(value) {
            return {
                typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
                value: tx_js_1.MsgUpdateClientConfig.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        registerCounterparty(value) {
            return {
                typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
                value,
            };
        },
        updateClientConfig(value) {
            return {
                typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
                value,
            };
        },
    },
    toJSON: {
        registerCounterparty(value) {
            return {
                typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
                value: tx_js_1.MsgRegisterCounterparty.toJSON(value),
            };
        },
        updateClientConfig(value) {
            return {
                typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
                value: tx_js_1.MsgUpdateClientConfig.toJSON(value),
            };
        },
    },
    fromJSON: {
        registerCounterparty(value) {
            return {
                typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
                value: tx_js_1.MsgRegisterCounterparty.fromJSON(value),
            };
        },
        updateClientConfig(value) {
            return {
                typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
                value: tx_js_1.MsgUpdateClientConfig.fromJSON(value),
            };
        },
    },
    fromPartial: {
        registerCounterparty(value) {
            return {
                typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
                value: tx_js_1.MsgRegisterCounterparty.fromPartial(value),
            };
        },
        updateClientConfig(value) {
            return {
                typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
                value: tx_js_1.MsgUpdateClientConfig.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map