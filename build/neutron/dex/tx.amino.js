"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../helpers.js");
const tx_js_1 = require("./tx.js");
exports.AminoConverter = {
    "/neutron.dex.MsgDeposit": {
        aminoType: "dex/MsgDeposit",
        toAmino: ({ creator, receiver, tokenA, tokenB, amountsA, amountsB, tickIndexesAToB, fees, options, }) => {
            return {
                creator,
                receiver,
                token_a: tokenA,
                token_b: tokenB,
                amounts_a: amountsA,
                amounts_b: amountsB,
                tick_indexes_a_to_b: tickIndexesAToB.map((el0) => el0.toString()),
                fees: fees.map((el0) => el0.toString()),
                options: options.map((el0) => ({
                    disable_autoswap: (0, helpers_js_1.omitDefault)(el0.disableAutoswap),
                    fail_tx_on_bel: (0, helpers_js_1.omitDefault)(el0.failTxOnBel),
                    swap_on_deposit: (0, helpers_js_1.omitDefault)(el0.swapOnDeposit),
                    swap_on_deposit_slop_tolerance_bps: (0, helpers_js_1.omitDefault)(el0.swapOnDepositSlopToleranceBps)?.toString?.(),
                })),
            };
        },
        fromAmino: ({ creator, receiver, token_a, token_b, amounts_a, amounts_b, tick_indexes_a_to_b, fees, options, }) => {
            return {
                creator,
                receiver,
                tokenA: token_a,
                tokenB: token_b,
                amountsA: amounts_a,
                amountsB: amounts_b,
                tickIndexesAToB: tick_indexes_a_to_b.map?.((el0) => BigInt(el0)),
                fees: fees.map?.((el0) => BigInt(el0)),
                options: options.map?.((el0) => ({
                    disableAutoswap: el0.disable_autoswap,
                    failTxOnBel: el0.fail_tx_on_bel,
                    swapOnDeposit: el0.swap_on_deposit,
                    swapOnDepositSlopToleranceBps: el0.swap_on_deposit_slop_tolerance_bps == null
                        ? el0.swap_on_deposit_slop_tolerance_bps
                        : BigInt(el0.swap_on_deposit_slop_tolerance_bps),
                })),
            };
        },
    },
    "/neutron.dex.MsgWithdrawal": {
        aminoType: "dex/MsgWithdrawal",
        toAmino: ({ creator, receiver, tokenA, tokenB, sharesToRemove, tickIndexesAToB, fees, }) => {
            return {
                creator,
                receiver,
                token_a: tokenA,
                token_b: tokenB,
                shares_to_remove: sharesToRemove,
                tick_indexes_a_to_b: tickIndexesAToB.map((el0) => el0.toString()),
                fees: fees.map((el0) => el0.toString()),
            };
        },
        fromAmino: ({ creator, receiver, token_a, token_b, shares_to_remove, tick_indexes_a_to_b, fees, }) => {
            return {
                creator,
                receiver,
                tokenA: token_a,
                tokenB: token_b,
                sharesToRemove: shares_to_remove,
                tickIndexesAToB: tick_indexes_a_to_b.map?.((el0) => BigInt(el0)),
                fees: fees.map?.((el0) => BigInt(el0)),
            };
        },
    },
    "/neutron.dex.MsgWithdrawalWithShares": {
        aminoType: "dex/MsgWithdrawalWithShares",
        toAmino: ({ creator, receiver, sharesToRemove, }) => {
            return {
                creator,
                receiver,
                shares_to_remove: sharesToRemove.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
        fromAmino: ({ creator, receiver, shares_to_remove, }) => {
            return {
                creator,
                receiver,
                sharesToRemove: shares_to_remove.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
    },
    "/neutron.dex.MsgPlaceLimitOrder": {
        aminoType: "dex/MsgPlaceLimitOrder",
        toAmino: ({ creator, receiver, tokenIn, tokenOut, tickIndexInToOut, amountIn, orderType, expirationTime, maxAmountOut, limitSellPrice, minAverageSellPrice, }) => {
            return {
                creator,
                receiver,
                token_in: tokenIn,
                token_out: tokenOut,
                tick_index_in_to_out: (0, helpers_js_1.omitDefault)(tickIndexInToOut)?.toString?.(),
                amount_in: amountIn,
                order_type: orderType,
                expiration_time: expirationTime,
                max_amount_out: maxAmountOut,
                limit_sell_price: limitSellPrice,
                min_average_sell_price: minAverageSellPrice,
            };
        },
        fromAmino: ({ creator, receiver, token_in, token_out, tick_index_in_to_out, amount_in, order_type, expiration_time, max_amount_out, limit_sell_price, min_average_sell_price, }) => {
            return {
                creator,
                receiver,
                tokenIn: token_in,
                tokenOut: token_out,
                tickIndexInToOut: tick_index_in_to_out == null ? tick_index_in_to_out : BigInt(tick_index_in_to_out),
                amountIn: amount_in,
                orderType: order_type == null ? order_type : (0, tx_js_1.limitOrderTypeFromJSON)(order_type),
                expirationTime: expiration_time,
                maxAmountOut: max_amount_out,
                limitSellPrice: limit_sell_price,
                minAverageSellPrice: min_average_sell_price,
            };
        },
    },
    "/neutron.dex.MsgWithdrawFilledLimitOrder": {
        aminoType: "dex/MsgWithdrawFilledLimitOrder",
        toAmino: ({ creator, trancheKey, }) => {
            return {
                creator,
                tranche_key: trancheKey,
            };
        },
        fromAmino: ({ creator, tranche_key, }) => {
            return {
                creator,
                trancheKey: tranche_key,
            };
        },
    },
    "/neutron.dex.MsgCancelLimitOrder": {
        aminoType: "dex/MsgCancelLimitOrder",
        toAmino: ({ creator, trancheKey }) => {
            return {
                creator,
                tranche_key: trancheKey,
            };
        },
        fromAmino: ({ creator, tranche_key }) => {
            return {
                creator,
                trancheKey: tranche_key,
            };
        },
    },
    "/neutron.dex.MsgMultiHopSwap": {
        aminoType: "dex/MsgMultiHopSwap",
        toAmino: ({ creator, receiver, routes, amountIn, exitLimitPrice, pickBestRoute, }) => {
            return {
                creator,
                receiver,
                routes: routes.map((el0) => ({
                    hops: el0.hops,
                })),
                amount_in: amountIn,
                exit_limit_price: exitLimitPrice,
                pick_best_route: (0, helpers_js_1.omitDefault)(pickBestRoute),
            };
        },
        fromAmino: ({ creator, receiver, routes, amount_in, exit_limit_price, pick_best_route, }) => {
            return {
                creator,
                receiver,
                routes: routes.map?.((el0) => ({
                    hops: el0.hops,
                })),
                amountIn: amount_in,
                exitLimitPrice: exit_limit_price,
                pickBestRoute: pick_best_route,
            };
        },
    },
    "/neutron.dex.MsgUpdateParams": {
        aminoType: "dex/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    fee_tiers: params.feeTiers.map((el0) => el0.toString()),
                    paused: params.paused,
                    max_jits_per_block: (0, helpers_js_1.omitDefault)(params.maxJitsPerBlock)?.toString?.(),
                    good_til_purge_allowance: (0, helpers_js_1.omitDefault)(params.goodTilPurgeAllowance)?.toString?.(),
                    whitelisted_lps: params.whitelistedLps,
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        feeTiers: params.fee_tiers.map?.((el1) => BigInt(el1)),
                        paused: params.paused,
                        maxJitsPerBlock: params.max_jits_per_block == null
                            ? params.max_jits_per_block
                            : BigInt(params.max_jits_per_block),
                        goodTilPurgeAllowance: params.good_til_purge_allowance == null
                            ? params.good_til_purge_allowance
                            : BigInt(params.good_til_purge_allowance),
                        whitelistedLps: params.whitelisted_lps,
                    },
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map