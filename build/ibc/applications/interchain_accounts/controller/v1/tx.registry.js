"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    [
        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
        tx_js_1.MsgRegisterInterchainAccount,
    ],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgSendTx", tx_js_1.MsgSendTx],
    ["/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams", tx_js_1.MsgUpdateParams],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
                value: tx_js_1.MsgRegisterInterchainAccount.encode(value).finish(),
            };
        },
        sendTx(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
                value: tx_js_1.MsgSendTx.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
                value,
            };
        },
        sendTx(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
                value,
            };
        },
    },
    toJSON: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
                value: tx_js_1.MsgRegisterInterchainAccount.toJSON(value),
            };
        },
        sendTx(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
                value: tx_js_1.MsgSendTx.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
                value: tx_js_1.MsgRegisterInterchainAccount.fromJSON(value),
            };
        },
        sendTx(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
                value: tx_js_1.MsgSendTx.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
                value: tx_js_1.MsgRegisterInterchainAccount.fromPartial(value),
            };
        },
        sendTx(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
                value: tx_js_1.MsgSendTx.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map