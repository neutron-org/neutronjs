"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmos.auth.v1beta1.MsgUpdateParams": {
        aminoType: "cosmos-sdk/x/auth/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    max_memo_characters: (0, helpers_js_1.omitDefault)(params.maxMemoCharacters)?.toString?.(),
                    tx_sig_limit: (0, helpers_js_1.omitDefault)(params.txSigLimit)?.toString?.(),
                    tx_size_cost_per_byte: (0, helpers_js_1.omitDefault)(params.txSizeCostPerByte)?.toString?.(),
                    sig_verify_cost_ed25519: (0, helpers_js_1.omitDefault)(params.sigVerifyCostEd25519)?.toString?.(),
                    sig_verify_cost_secp256k1: (0, helpers_js_1.omitDefault)(params.sigVerifyCostSecp256k1)?.toString?.(),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        maxMemoCharacters: params.max_memo_characters == null
                            ? params.max_memo_characters
                            : BigInt(params.max_memo_characters),
                        txSigLimit: params.tx_sig_limit == null ? params.tx_sig_limit : BigInt(params.tx_sig_limit),
                        txSizeCostPerByte: params.tx_size_cost_per_byte == null
                            ? params.tx_size_cost_per_byte
                            : BigInt(params.tx_size_cost_per_byte),
                        sigVerifyCostEd25519: params.sig_verify_cost_ed25519 == null
                            ? params.sig_verify_cost_ed25519
                            : BigInt(params.sig_verify_cost_ed25519),
                        sigVerifyCostSecp256k1: params.sig_verify_cost_secp256k1 == null
                            ? params.sig_verify_cost_secp256k1
                            : BigInt(params.sig_verify_cost_secp256k1),
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map