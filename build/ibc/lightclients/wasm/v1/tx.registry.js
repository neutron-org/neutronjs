"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/ibc.lightclients.wasm.v1.MsgStoreCode", tx_js_1.MsgStoreCode],
    ["/ibc.lightclients.wasm.v1.MsgRemoveChecksum", tx_js_1.MsgRemoveChecksum],
    ["/ibc.lightclients.wasm.v1.MsgMigrateContract", tx_js_1.MsgMigrateContract],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        storeCode(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
                value: tx_js_1.MsgStoreCode.encode(value).finish(),
            };
        },
        removeChecksum(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
                value: tx_js_1.MsgRemoveChecksum.encode(value).finish(),
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
                value: tx_js_1.MsgMigrateContract.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        storeCode(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
                value,
            };
        },
        removeChecksum(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
                value,
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
                value,
            };
        },
    },
    toJSON: {
        storeCode(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
                value: tx_js_1.MsgStoreCode.toJSON(value),
            };
        },
        removeChecksum(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
                value: tx_js_1.MsgRemoveChecksum.toJSON(value),
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
                value: tx_js_1.MsgMigrateContract.toJSON(value),
            };
        },
    },
    fromJSON: {
        storeCode(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
                value: tx_js_1.MsgStoreCode.fromJSON(value),
            };
        },
        removeChecksum(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
                value: tx_js_1.MsgRemoveChecksum.fromJSON(value),
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
                value: tx_js_1.MsgMigrateContract.fromJSON(value),
            };
        },
    },
    fromPartial: {
        storeCode(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
                value: tx_js_1.MsgStoreCode.fromPartial(value),
            };
        },
        removeChecksum(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
                value: tx_js_1.MsgRemoveChecksum.fromPartial(value),
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
                value: tx_js_1.MsgMigrateContract.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map