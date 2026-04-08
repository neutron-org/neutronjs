"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/neutron.contractmanager.MsgUpdateParams", tx_js_1.MsgUpdateParams],
    ["/neutron.contractmanager.MsgResubmitFailure", tx_js_1.MsgResubmitFailure],
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
                typeUrl: "/neutron.contractmanager.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
        resubmitFailure(value) {
            return {
                typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
                value: tx_js_1.MsgResubmitFailure.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        updateParams(value) {
            return {
                typeUrl: "/neutron.contractmanager.MsgUpdateParams",
                value,
            };
        },
        resubmitFailure(value) {
            return {
                typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
                value,
            };
        },
    },
    toJSON: {
        updateParams(value) {
            return {
                typeUrl: "/neutron.contractmanager.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
        resubmitFailure(value) {
            return {
                typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
                value: tx_js_1.MsgResubmitFailure.toJSON(value),
            };
        },
    },
    fromJSON: {
        updateParams(value) {
            return {
                typeUrl: "/neutron.contractmanager.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
        resubmitFailure(value) {
            return {
                typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
                value: tx_js_1.MsgResubmitFailure.fromJSON(value),
            };
        },
    },
    fromPartial: {
        updateParams(value) {
            return {
                typeUrl: "/neutron.contractmanager.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
        resubmitFailure(value) {
            return {
                typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
                value: tx_js_1.MsgResubmitFailure.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map