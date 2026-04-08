"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/feemarket.feemarket.v1.MsgParams": {
        aminoType: "/feemarket.feemarket.v1.MsgParams",
        toAmino: ({ params, authority }) => {
            return {
                params: {
                    alpha: params.alpha,
                    beta: params.beta,
                    gamma: params.gamma,
                    delta: params.delta,
                    min_base_gas_price: params.minBaseGasPrice,
                    min_learning_rate: params.minLearningRate,
                    max_learning_rate: params.maxLearningRate,
                    max_block_utilization: (0, helpers_js_1.omitDefault)(params.maxBlockUtilization)?.toString?.(),
                    window: (0, helpers_js_1.omitDefault)(params.window)?.toString?.(),
                    fee_denom: params.feeDenom,
                    enabled: (0, helpers_js_1.omitDefault)(params.enabled),
                    distribute_fees: (0, helpers_js_1.omitDefault)(params.distributeFees),
                    send_tip_to_proposer: (0, helpers_js_1.omitDefault)(params.sendTipToProposer),
                },
                authority,
            };
        },
        fromAmino: ({ params, authority }) => {
            return {
                params: params == null
                    ? params
                    : {
                        alpha: params.alpha,
                        beta: params.beta,
                        gamma: params.gamma,
                        delta: params.delta,
                        minBaseGasPrice: params.min_base_gas_price,
                        minLearningRate: params.min_learning_rate,
                        maxLearningRate: params.max_learning_rate,
                        maxBlockUtilization: params.max_block_utilization == null
                            ? params.max_block_utilization
                            : BigInt(params.max_block_utilization),
                        window: params.window == null ? params.window : BigInt(params.window),
                        feeDenom: params.fee_denom,
                        enabled: params.enabled,
                        distributeFees: params.distribute_fees,
                        sendTipToProposer: params.send_tip_to_proposer,
                    },
                authority,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map