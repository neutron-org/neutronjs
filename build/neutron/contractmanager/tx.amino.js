"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../helpers.js");
exports.AminoConverter = {
    "/neutron.contractmanager.MsgUpdateParams": {
        aminoType: "contractmanager/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    sudo_call_gas_limit: (0, helpers_js_1.omitDefault)(params.sudoCallGasLimit)?.toString?.(),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        sudoCallGasLimit: params.sudo_call_gas_limit == null
                            ? params.sudo_call_gas_limit
                            : BigInt(params.sudo_call_gas_limit),
                    },
            };
        },
    },
    "/neutron.contractmanager.MsgResubmitFailure": {
        aminoType: "contractmanager/MsgResubmitFailure",
        toAmino: ({ sender, failureId }) => {
            return {
                sender,
                failure_id: (0, helpers_js_1.omitDefault)(failureId)?.toString?.(),
            };
        },
        fromAmino: ({ sender, failure_id }) => {
            return {
                sender,
                failureId: failure_id == null ? failure_id : BigInt(failure_id),
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map