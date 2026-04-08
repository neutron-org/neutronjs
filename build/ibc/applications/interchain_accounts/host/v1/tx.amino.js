"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../../../helpers.js");
exports.AminoConverter = {
    "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/MsgUpdateParams",
        toAmino: ({ signer, params }) => {
            return {
                signer,
                params: {
                    host_enabled: (0, helpers_js_1.omitDefault)(params.hostEnabled),
                    allow_messages: params.allowMessages,
                },
            };
        },
        fromAmino: ({ signer, params }) => {
            return {
                signer,
                params: params == null
                    ? params
                    : {
                        hostEnabled: params.host_enabled,
                        allowMessages: params.allow_messages,
                    },
            };
        },
    },
    "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
        aminoType: "cosmos-sdk/MsgModuleQuerySafe",
        toAmino: ({ signer, requests }) => {
            return {
                signer,
                requests: requests.map((el0) => ({
                    path: el0.path,
                    data: el0.data,
                })),
            };
        },
        fromAmino: ({ signer, requests }) => {
            return {
                signer,
                requests: requests.map?.((el0) => ({
                    path: el0.path,
                    data: el0.data,
                })),
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map