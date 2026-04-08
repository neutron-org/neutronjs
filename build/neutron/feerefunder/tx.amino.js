"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../helpers.js");
exports.AminoConverter = {
    "/neutron.feerefunder.MsgUpdateParams": {
        aminoType: "feerefunder/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    min_fee: {
                        recv_fee: params.minFee.recvFee.map((el0) => ({
                            denom: el0.denom,
                            amount: el0.amount,
                        })),
                        ack_fee: params.minFee.ackFee.map((el0) => ({
                            denom: el0.denom,
                            amount: el0.amount,
                        })),
                        timeout_fee: params.minFee.timeoutFee.map((el0) => ({
                            denom: el0.denom,
                            amount: el0.amount,
                        })),
                    },
                    fee_enabled: (0, helpers_js_1.omitDefault)(params.feeEnabled),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        minFee: params.min_fee == null
                            ? params.min_fee
                            : {
                                recvFee: params.min_fee.recv_fee.map?.((el2) => ({
                                    denom: el2.denom,
                                    amount: el2.amount,
                                })),
                                ackFee: params.min_fee.ack_fee.map?.((el2) => ({
                                    denom: el2.denom,
                                    amount: el2.amount,
                                })),
                                timeoutFee: params.min_fee.timeout_fee.map?.((el2) => ({
                                    denom: el2.denom,
                                    amount: el2.amount,
                                })),
                            },
                        feeEnabled: params.fee_enabled,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map