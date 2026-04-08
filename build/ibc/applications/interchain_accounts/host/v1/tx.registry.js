"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams", tx_js_1.MsgUpdateParams],
    ["/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe", tx_js_1.MsgModuleQuerySafe],
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
                typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
        moduleQuerySafe(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
                value: tx_js_1.MsgModuleQuerySafe.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
                value,
            };
        },
        moduleQuerySafe(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
                value,
            };
        },
    },
    toJSON: {
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
        moduleQuerySafe(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
                value: tx_js_1.MsgModuleQuerySafe.toJSON(value),
            };
        },
    },
    fromJSON: {
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
        moduleQuerySafe(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
                value: tx_js_1.MsgModuleQuerySafe.fromJSON(value),
            };
        },
    },
    fromPartial: {
        updateParams(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
        moduleQuerySafe(value) {
            return {
                typeUrl: "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe",
                value: tx_js_1.MsgModuleQuerySafe.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map