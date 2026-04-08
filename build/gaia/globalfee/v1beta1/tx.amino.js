"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/gaia.globalfee.v1beta1.MsgUpdateParams": {
        aminoType: "globalfee/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    minimum_gas_prices: params.minimumGasPrices.map((el0) => ({
                        denom: el0.denom,
                        amount: el0.amount,
                    })),
                    bypass_min_fee_msg_types: params.bypassMinFeeMsgTypes,
                    max_total_bypass_min_fee_msg_gas_usage: (0, helpers_js_1.omitDefault)(params.maxTotalBypassMinFeeMsgGasUsage)?.toString?.(),
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        minimumGasPrices: params.minimum_gas_prices.map?.((el1) => ({
                            denom: el1.denom,
                            amount: el1.amount,
                        })),
                        bypassMinFeeMsgTypes: params.bypass_min_fee_msg_types,
                        maxTotalBypassMinFeeMsgGasUsage: params.max_total_bypass_min_fee_msg_gas_usage == null
                            ? params.max_total_bypass_min_fee_msg_gas_usage
                            : BigInt(params.max_total_bypass_min_fee_msg_gas_usage),
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map