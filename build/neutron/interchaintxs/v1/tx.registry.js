"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/neutron.interchaintxs.v1.MsgRegisterInterchainAccount", tx_js_1.MsgRegisterInterchainAccount],
    ["/neutron.interchaintxs.v1.MsgSubmitTx", tx_js_1.MsgSubmitTx],
    ["/neutron.interchaintxs.v1.MsgUpdateParams", tx_js_1.MsgUpdateParams],
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
                typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
                value: tx_js_1.MsgRegisterInterchainAccount.encode(value).finish(),
            };
        },
        submitTx(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
                value: tx_js_1.MsgSubmitTx.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
                value,
            };
        },
        submitTx(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
                value,
            };
        },
    },
    toJSON: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
                value: tx_js_1.MsgRegisterInterchainAccount.toJSON(value),
            };
        },
        submitTx(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
                value: tx_js_1.MsgSubmitTx.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
                value: tx_js_1.MsgRegisterInterchainAccount.fromJSON(value),
            };
        },
        submitTx(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
                value: tx_js_1.MsgSubmitTx.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        registerInterchainAccount(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
                value: tx_js_1.MsgRegisterInterchainAccount.fromPartial(value),
            };
        },
        submitTx(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
                value: tx_js_1.MsgSubmitTx.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map