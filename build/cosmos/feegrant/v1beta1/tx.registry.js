"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", tx_js_1.MsgGrantAllowance],
    ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", tx_js_1.MsgRevokeAllowance],
    ["/cosmos.feegrant.v1beta1.MsgPruneAllowances", tx_js_1.MsgPruneAllowances],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_js_1.MsgGrantAllowance.encode(value).finish(),
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_js_1.MsgRevokeAllowance.encode(value).finish(),
            };
        },
        pruneAllowances(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: tx_js_1.MsgPruneAllowances.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value,
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value,
            };
        },
        pruneAllowances(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value,
            };
        },
    },
    toJSON: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_js_1.MsgGrantAllowance.toJSON(value),
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_js_1.MsgRevokeAllowance.toJSON(value),
            };
        },
        pruneAllowances(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: tx_js_1.MsgPruneAllowances.toJSON(value),
            };
        },
    },
    fromJSON: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_js_1.MsgGrantAllowance.fromJSON(value),
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_js_1.MsgRevokeAllowance.fromJSON(value),
            };
        },
        pruneAllowances(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: tx_js_1.MsgPruneAllowances.fromJSON(value),
            };
        },
    },
    fromPartial: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_js_1.MsgGrantAllowance.fromPartial(value),
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_js_1.MsgRevokeAllowance.fromPartial(value),
            };
        },
        pruneAllowances(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
                value: tx_js_1.MsgPruneAllowances.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map