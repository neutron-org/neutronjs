"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
/* eslint-disable */
const hooks_js_1 = require("./hooks.js");
exports.AminoConverter = {
    "/neutron.harpoon.MsgManageHookSubscription": {
        aminoType: "harpoon/MsgManageHookSubscription",
        toAmino: ({ authority, hookSubscription, }) => {
            return {
                authority,
                hook_subscription: {
                    contract_address: hookSubscription.contractAddress,
                    hooks: hookSubscription.hooks,
                },
            };
        },
        fromAmino: ({ authority, hook_subscription, }) => {
            return {
                authority,
                hookSubscription: hook_subscription == null
                    ? hook_subscription
                    : {
                        contractAddress: hook_subscription.contract_address,
                        hooks: hook_subscription.hooks.map?.((el) => (0, hooks_js_1.hookTypeFromJSON)(el)),
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map