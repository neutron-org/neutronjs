//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../helpers";
import {
  limitOrderTypeFromJSON,
  MsgDeposit,
  MsgWithdrawal,
  MsgPlaceLimitOrder,
  MsgWithdrawFilledLimitOrder,
  MsgCancelLimitOrder,
  MsgMultiHopSwap,
  MsgUpdateParams,
} from "./tx";
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
export const AminoConverter = {
  "/neutron.dex.MsgDeposit": {
    aminoType: "dex/MsgDeposit",
    toAmino: ({
      creator,
      receiver,
      tokenA,
      tokenB,
      amountsA,
      amountsB,
      tickIndexesAToB,
      fees,
      options,
    }: MsgDeposit): MsgDepositAminoType["value"] => {
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
          disable_autoswap: omitDefault(el0.disableAutoswap),
          fail_tx_on_bel: omitDefault(el0.failTxOnBel),
          swap_on_deposit: omitDefault(el0.swapOnDeposit),
          swap_on_deposit_slop_tolerance_bps: omitDefault(el0.swapOnDepositSlopToleranceBps)?.toString?.(),
        })),
      };
    },
    fromAmino: ({
      creator,
      receiver,
      token_a,
      token_b,
      amounts_a,
      amounts_b,
      tick_indexes_a_to_b,
      fees,
      options,
    }: MsgDepositAminoType["value"]): MsgDeposit => {
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
          swapOnDepositSlopToleranceBps:
            el0.swap_on_deposit_slop_tolerance_bps == null
              ? el0.swap_on_deposit_slop_tolerance_bps
              : BigInt(el0.swap_on_deposit_slop_tolerance_bps),
        })),
      };
    },
  },
  "/neutron.dex.MsgWithdrawal": {
    aminoType: "dex/MsgWithdrawal",
    toAmino: ({
      creator,
      receiver,
      tokenA,
      tokenB,
      sharesToRemove,
      tickIndexesAToB,
      fees,
    }: MsgWithdrawal): MsgWithdrawalAminoType["value"] => {
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
    fromAmino: ({
      creator,
      receiver,
      token_a,
      token_b,
      shares_to_remove,
      tick_indexes_a_to_b,
      fees,
    }: MsgWithdrawalAminoType["value"]): MsgWithdrawal => {
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
  "/neutron.dex.MsgPlaceLimitOrder": {
    aminoType: "dex/MsgPlaceLimitOrder",
    toAmino: ({
      creator,
      receiver,
      tokenIn,
      tokenOut,
      tickIndexInToOut,
      amountIn,
      orderType,
      expirationTime,
      maxAmountOut,
      limitSellPrice,
      minAverageSellPrice,
    }: MsgPlaceLimitOrder): MsgPlaceLimitOrderAminoType["value"] => {
      return {
        creator,
        receiver,
        token_in: tokenIn,
        token_out: tokenOut,
        tick_index_in_to_out: omitDefault(tickIndexInToOut)?.toString?.(),
        amount_in: amountIn,
        order_type: orderType,
        expiration_time: expirationTime,
        max_amount_out: maxAmountOut,
        limit_sell_price: limitSellPrice,
        min_average_sell_price: minAverageSellPrice,
      };
    },
    fromAmino: ({
      creator,
      receiver,
      token_in,
      token_out,
      tick_index_in_to_out,
      amount_in,
      order_type,
      expiration_time,
      max_amount_out,
      limit_sell_price,
      min_average_sell_price,
    }: MsgPlaceLimitOrderAminoType["value"]): MsgPlaceLimitOrder => {
      return {
        creator,
        receiver,
        tokenIn: token_in,
        tokenOut: token_out,
        tickIndexInToOut: tick_index_in_to_out == null ? tick_index_in_to_out : BigInt(tick_index_in_to_out),
        amountIn: amount_in,
        orderType: order_type == null ? order_type : limitOrderTypeFromJSON(order_type),
        expirationTime: expiration_time,
        maxAmountOut: max_amount_out,
        limitSellPrice: limit_sell_price,
        minAverageSellPrice: min_average_sell_price,
      };
    },
  },
  "/neutron.dex.MsgWithdrawFilledLimitOrder": {
    aminoType: "dex/MsgWithdrawFilledLimitOrder",
    toAmino: ({
      creator,
      trancheKey,
    }: MsgWithdrawFilledLimitOrder): MsgWithdrawFilledLimitOrderAminoType["value"] => {
      return {
        creator,
        tranche_key: trancheKey,
      };
    },
    fromAmino: ({
      creator,
      tranche_key,
    }: MsgWithdrawFilledLimitOrderAminoType["value"]): MsgWithdrawFilledLimitOrder => {
      return {
        creator,
        trancheKey: tranche_key,
      };
    },
  },
  "/neutron.dex.MsgCancelLimitOrder": {
    aminoType: "dex/MsgCancelLimitOrder",
    toAmino: ({ creator, trancheKey }: MsgCancelLimitOrder): MsgCancelLimitOrderAminoType["value"] => {
      return {
        creator,
        tranche_key: trancheKey,
      };
    },
    fromAmino: ({ creator, tranche_key }: MsgCancelLimitOrderAminoType["value"]): MsgCancelLimitOrder => {
      return {
        creator,
        trancheKey: tranche_key,
      };
    },
  },
  "/neutron.dex.MsgMultiHopSwap": {
    aminoType: "dex/MsgMultiHopSwap",
    toAmino: ({
      creator,
      receiver,
      routes,
      amountIn,
      exitLimitPrice,
      pickBestRoute,
    }: MsgMultiHopSwap): MsgMultiHopSwapAminoType["value"] => {
      return {
        creator,
        receiver,
        routes: routes.map((el0) => ({
          hops: el0.hops,
        })),
        amount_in: amountIn,
        exit_limit_price: exitLimitPrice,
        pick_best_route: omitDefault(pickBestRoute),
      };
    },
    fromAmino: ({
      creator,
      receiver,
      routes,
      amount_in,
      exit_limit_price,
      pick_best_route,
    }: MsgMultiHopSwapAminoType["value"]): MsgMultiHopSwap => {
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
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          fee_tiers: params.feeTiers.map((el0) => el0.toString()),
          paused: params.paused,
          max_jits_per_block: omitDefault(params.maxJitsPerBlock)?.toString?.(),
          good_til_purge_allowance: omitDefault(params.goodTilPurgeAllowance)?.toString?.(),
          whitelisted_lps: params.whitelistedLps,
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params:
          params == null
            ? params
            : {
                feeTiers: params.fee_tiers.map?.((el1) => BigInt(el1)),
                paused: params.paused,
                maxJitsPerBlock:
                  params.max_jits_per_block == null
                    ? params.max_jits_per_block
                    : BigInt(params.max_jits_per_block),
                goodTilPurgeAllowance:
                  params.good_til_purge_allowance == null
                    ? params.good_til_purge_allowance
                    : BigInt(params.good_til_purge_allowance),
                whitelistedLps: params.whitelisted_lps,
              },
      };
    },
  },
};
