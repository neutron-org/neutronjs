"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/neutron.ibcratelimit.v1beta1.MsgUpdateParams": {
        aminoType: "neutron/ibc-rate-limit/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    send_enabled: params.sendEnabled.map((el0) => ({
                        denom: el0.denom,
                        enabled: (0, helpers_js_1.omitDefault)(el0.enabled),
                    })),
                    default_send_enabled: (0, helpers_js_1.omitDefault)(params.defaultSendEnabled),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        sendEnabled: params.send_enabled.map?.((el1) => ({
                            denom: el1.denom,
                            enabled: el1.enabled,
                        })),
                        defaultSendEnabled: params.default_send_enabled,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map