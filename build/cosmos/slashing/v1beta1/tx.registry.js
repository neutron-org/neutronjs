"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/cosmos.slashing.v1beta1.MsgUnjail", tx_js_1.MsgUnjail],
    ["/cosmos.slashing.v1beta1.MsgUpdateParams", tx_js_1.MsgUpdateParams],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        unjail(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: tx_js_1.MsgUnjail.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        unjail(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
                value,
            };
        },
    },
    toJSON: {
        unjail(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: tx_js_1.MsgUnjail.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        unjail(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: tx_js_1.MsgUnjail.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        unjail(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
                value: tx_js_1.MsgUnjail.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmos.slashing.v1beta1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map