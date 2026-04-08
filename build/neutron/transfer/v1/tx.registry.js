"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/neutron.transfer.MsgTransfer", tx_js_1.MsgTransfer],
    ["/neutron.transfer.MsgUpdateParams", tx_js_1.MsgUpdateParams],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        transfer(value) {
            return {
                typeUrl: "/neutron.transfer.MsgTransfer",
                value: tx_js_1.MsgTransfer.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.transfer.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        transfer(value) {
            return {
                typeUrl: "/neutron.transfer.MsgTransfer",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.transfer.MsgUpdateParams",
                value,
            };
        },
    },
    toJSON: {
        transfer(value) {
            return {
                typeUrl: "/neutron.transfer.MsgTransfer",
                value: tx_js_1.MsgTransfer.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.transfer.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
    },
    fromJSON: {
        transfer(value) {
            return {
                typeUrl: "/neutron.transfer.MsgTransfer",
                value: tx_js_1.MsgTransfer.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.transfer.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
    },
    fromPartial: {
        transfer(value) {
            return {
                typeUrl: "/neutron.transfer.MsgTransfer",
                value: tx_js_1.MsgTransfer.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/neutron.transfer.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map