import { AminoMsg } from "@cosmjs/amino";
import { MsgDeposit, MsgWithdrawal, MsgWithdrawalWithShares, MsgPlaceLimitOrder, MsgWithdrawFilledLimitOrder, MsgCancelLimitOrder, MsgMultiHopSwap, MsgUpdateParams } from "./tx.js";
export interface MsgDepositAminoType extends AminoMsg {
    type: "dex/MsgDeposit";
    value: {
        creator: string;
        receiver: string;
        token_a: string;
        token_b: string;
        amounts_a: string[];
        amounts_b: string[];
        tick_indexes_a_to_b: string[];
        fees: string[];
        options: {
            disable_autoswap: boolean;
            fail_tx_on_bel: boolean;
            swap_on_deposit: boolean;
            swap_on_deposit_slop_tolerance_bps: string;
        }[];
    };
}
export interface MsgWithdrawalAminoType extends AminoMsg {
    type: "dex/MsgWithdrawal";
    value: {
        creator: string;
        receiver: string;
        token_a: string;
        token_b: string;
        shares_to_remove: string[];
        tick_indexes_a_to_b: string[];
        fees: string[];
    };
}
export interface MsgWithdrawalWithSharesAminoType extends AminoMsg {
    type: "dex/MsgWithdrawalWithShares";
    value: {
        creator: string;
        receiver: string;
        shares_to_remove: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgPlaceLimitOrderAminoType extends AminoMsg {
    type: "dex/MsgPlaceLimitOrder";
    value: {
        creator: string;
        receiver: string;
        token_in: string;
        token_out: string;
        tick_index_in_to_out: string;
        amount_in: string;
        order_type: number;
        expiration_time: string;
        max_amount_out: string;
        limit_sell_price: string;
        min_average_sell_price: string;
    };
}
export interface MsgWithdrawFilledLimitOrderAminoType extends AminoMsg {
    type: "dex/MsgWithdrawFilledLimitOrder";
    value: {
        creator: string;
        tranche_key: string;
    };
}
export interface MsgCancelLimitOrderAminoType extends AminoMsg {
    type: "dex/MsgCancelLimitOrder";
    value: {
        creator: string;
        tranche_key: string;
    };
}
export interface MsgMultiHopSwapAminoType extends AminoMsg {
    type: "dex/MsgMultiHopSwap";
    value: {
        creator: string;
        receiver: string;
        routes: {
            hops: string[];
        }[];
        amount_in: string;
        exit_limit_price: string;
        pick_best_route: boolean;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "dex/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            fee_tiers: string[];
            paused: boolean;
            max_jits_per_block: string;
            good_til_purge_allowance: string;
            whitelisted_lps: string[];
        };
    };
}
export declare const AminoConverter: {
    "/neutron.dex.MsgDeposit": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenA, tokenB, amountsA, amountsB, tickIndexesAToB, fees, options, }: MsgDeposit) => MsgDepositAminoType["value"];
        fromAmino: ({ creator, receiver, token_a, token_b, amounts_a, amounts_b, tick_indexes_a_to_b, fees, options, }: MsgDepositAminoType["value"]) => MsgDeposit;
    };
    "/neutron.dex.MsgWithdrawal": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenA, tokenB, sharesToRemove, tickIndexesAToB, fees, }: MsgWithdrawal) => MsgWithdrawalAminoType["value"];
        fromAmino: ({ creator, receiver, token_a, token_b, shares_to_remove, tick_indexes_a_to_b, fees, }: MsgWithdrawalAminoType["value"]) => MsgWithdrawal;
    };
    "/neutron.dex.MsgWithdrawalWithShares": {
        aminoType: string;
        toAmino: ({ creator, receiver, sharesToRemove, }: MsgWithdrawalWithShares) => MsgWithdrawalWithSharesAminoType["value"];
        fromAmino: ({ creator, receiver, shares_to_remove, }: MsgWithdrawalWithSharesAminoType["value"]) => MsgWithdrawalWithShares;
    };
    "/neutron.dex.MsgPlaceLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, receiver, tokenIn, tokenOut, tickIndexInToOut, amountIn, orderType, expirationTime, maxAmountOut, limitSellPrice, minAverageSellPrice, }: MsgPlaceLimitOrder) => MsgPlaceLimitOrderAminoType["value"];
        fromAmino: ({ creator, receiver, token_in, token_out, tick_index_in_to_out, amount_in, order_type, expiration_time, max_amount_out, limit_sell_price, min_average_sell_price, }: MsgPlaceLimitOrderAminoType["value"]) => MsgPlaceLimitOrder;
    };
    "/neutron.dex.MsgWithdrawFilledLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, trancheKey, }: MsgWithdrawFilledLimitOrder) => MsgWithdrawFilledLimitOrderAminoType["value"];
        fromAmino: ({ creator, tranche_key, }: MsgWithdrawFilledLimitOrderAminoType["value"]) => MsgWithdrawFilledLimitOrder;
    };
    "/neutron.dex.MsgCancelLimitOrder": {
        aminoType: string;
        toAmino: ({ creator, trancheKey }: MsgCancelLimitOrder) => MsgCancelLimitOrderAminoType["value"];
        fromAmino: ({ creator, tranche_key }: MsgCancelLimitOrderAminoType["value"]) => MsgCancelLimitOrder;
    };
    "/neutron.dex.MsgMultiHopSwap": {
        aminoType: string;
        toAmino: ({ creator, receiver, routes, amountIn, exitLimitPrice, pickBestRoute, }: MsgMultiHopSwap) => MsgMultiHopSwapAminoType["value"];
        fromAmino: ({ creator, receiver, routes, amount_in, exit_limit_price, pick_best_route, }: MsgMultiHopSwapAminoType["value"]) => MsgMultiHopSwap;
    };
    "/neutron.dex.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
