"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/neutron.coinfactory.v1beta1.MsgCreateDenom", tx_js_1.MsgCreateDenom],
    ["/neutron.coinfactory.v1beta1.MsgMint", tx_js_1.MsgMint],
    ["/neutron.coinfactory.v1beta1.MsgBurn", tx_js_1.MsgBurn],
    ["/neutron.coinfactory.v1beta1.MsgChangeAdmin", tx_js_1.MsgChangeAdmin],
    ["/neutron.coinfactory.v1beta1.MsgSetDenomMetadata", tx_js_1.MsgSetDenomMetadata],
    ["/neutron.coinfactory.v1beta1.MsgSetBeforeSendHook", tx_js_1.MsgSetBeforeSendHook],
    ["/neutron.coinfactory.v1beta1.MsgForceTransfer", tx_js_1.MsgForceTransfer],
    ["/neutron.coinfactory.v1beta1.MsgUpdateParams", tx_js_1.MsgUpdateParams],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createDenom(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgCreateDenom",
                value: tx_js_1.MsgCreateDenom.encode(value).finish(),
            };
        },
        mint(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgMint",
                value: tx_js_1.MsgMint.encode(value).finish(),
            };
        },
        burn(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgBurn",
                value: tx_js_1.MsgBurn.encode(value).finish(),
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgChangeAdmin",
                value: tx_js_1.MsgChangeAdmin.encode(value).finish(),
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgSetDenomMetadata",
                value: tx_js_1.MsgSetDenomMetadata.encode(value).finish(),
            };
        },
        setBeforeSendHook(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgSetBeforeSendHook",
                value: tx_js_1.MsgSetBeforeSendHook.encode(value).finish(),
            };
        },
        forceTransfer(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgForceTransfer",
                value: tx_js_1.MsgForceTransfer.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        createDenom(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgCreateDenom",
                value,
            };
        },
        mint(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgMint",
                value,
            };
        },
        burn(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgBurn",
                value,
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgChangeAdmin",
                value,
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgSetDenomMetadata",
                value,
            };
        },
        setBeforeSendHook(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgSetBeforeSendHook",
                value,
            };
        },
        forceTransfer(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgForceTransfer",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgUpdateParams",
                value,
            };
        },
    },
    toJSON: {
        createDenom(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgCreateDenom",
                value: tx_js_1.MsgCreateDenom.toJSON(value),
            };
        },
        mint(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgMint",
                value: tx_js_1.MsgMint.toJSON(value),
            };
        },
        burn(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgBurn",
                value: tx_js_1.MsgBurn.toJSON(value),
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgChangeAdmin",
                value: tx_js_1.MsgChangeAdmin.toJSON(value),
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgSetDenomMetadata",
                value: tx_js_1.MsgSetDenomMetadata.toJSON(value),
            };
        },
        setBeforeSendHook(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgSetBeforeSendHook",
                value: tx_js_1.MsgSetBeforeSendHook.toJSON(value),
            };
        },
        forceTransfer(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgForceTransfer",
                value: tx_js_1.MsgForceTransfer.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        createDenom(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgCreateDenom",
                value: tx_js_1.MsgCreateDenom.fromJSON(value),
            };
        },
        mint(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgMint",
                value: tx_js_1.MsgMint.fromJSON(value),
            };
        },
        burn(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgBurn",
                value: tx_js_1.MsgBurn.fromJSON(value),
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgChangeAdmin",
                value: tx_js_1.MsgChangeAdmin.fromJSON(value),
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgSetDenomMetadata",
                value: tx_js_1.MsgSetDenomMetadata.fromJSON(value),
            };
        },
        setBeforeSendHook(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgSetBeforeSendHook",
                value: tx_js_1.MsgSetBeforeSendHook.fromJSON(value),
            };
        },
        forceTransfer(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgForceTransfer",
                value: tx_js_1.MsgForceTransfer.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        createDenom(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgCreateDenom",
                value: tx_js_1.MsgCreateDenom.fromPartial(value),
            };
        },
        mint(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgMint",
                value: tx_js_1.MsgMint.fromPartial(value),
            };
        },
        burn(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgBurn",
                value: tx_js_1.MsgBurn.fromPartial(value),
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgChangeAdmin",
                value: tx_js_1.MsgChangeAdmin.fromPartial(value),
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgSetDenomMetadata",
                value: tx_js_1.MsgSetDenomMetadata.fromPartial(value),
            };
        },
        setBeforeSendHook(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgSetBeforeSendHook",
                value: tx_js_1.MsgSetBeforeSendHook.fromPartial(value),
            };
        },
        forceTransfer(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgForceTransfer",
                value: tx_js_1.MsgForceTransfer.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.coinfactory.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map