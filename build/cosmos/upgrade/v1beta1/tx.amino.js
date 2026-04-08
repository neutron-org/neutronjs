"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
        aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
        toAmino: ({ authority, plan }) => {
            return {
                authority,
                plan: {
                    name: plan.name,
                    time: plan.time,
                    height: (0, helpers_js_1.omitDefault)(plan.height)?.toString?.(),
                    info: plan.info,
                    upgraded_client_state: {
                        type_url: plan.upgradedClientState.typeUrl,
                        value: plan.upgradedClientState.value,
                    },
                },
            };
        },
        fromAmino: ({ authority, plan }) => {
            return {
                authority,
                plan: plan == null
                    ? plan
                    : {
                        name: plan.name,
                        time: plan.time,
                        height: plan.height == null ? plan.height : BigInt(plan.height),
                        info: plan.info,
                        upgradedClientState: plan.upgraded_client_state == null
                            ? plan.upgraded_client_state
                            : {
                                typeUrl: plan.upgraded_client_state.type_url,
                                value: plan.upgraded_client_state.value,
                            },
                    },
            };
        },
    },
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
        aminoType: "cosmos-sdk/MsgCancelUpgrade",
        toAmino: ({ authority }) => {
            return {
                authority,
            };
        },
        fromAmino: ({ authority }) => {
            return {
                authority,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map