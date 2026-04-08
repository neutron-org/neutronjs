"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/neutron.harpoon.MsgManageHookSubscription", tx_js_1.MsgManageHookSubscription],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        manageHookSubscription(value) {
            return {
                typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
                value: tx_js_1.MsgManageHookSubscription.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        manageHookSubscription(value) {
            return {
                typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
                value,
            };
        },
    },
    toJSON: {
        manageHookSubscription(value) {
            return {
                typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
                value: tx_js_1.MsgManageHookSubscription.toJSON(value),
            };
        },
    },
    fromJSON: {
        manageHookSubscription(value) {
            return {
                typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
                value: tx_js_1.MsgManageHookSubscription.fromJSON(value),
            };
        },
    },
    fromPartial: {
        manageHookSubscription(value) {
            return {
                typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
                value: tx_js_1.MsgManageHookSubscription.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map