import { Coin } from "../../cosmos/base/v1beta1/coin.js";
import { Timestamp } from "../../google/protobuf/timestamp.js";
import { Params } from "./params.js";
import { PrecDecCoin } from "./precdec_coin.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export declare enum LimitOrderType {
    GOOD_TIL_CANCELLED = 0,
    FILL_OR_KILL = 1,
    IMMEDIATE_OR_CANCEL = 2,
    JUST_IN_TIME = 3,
    GOOD_TIL_TIME = 4,
    UNRECOGNIZED = -1
}
export declare function limitOrderTypeFromJSON(object: any): LimitOrderType;
export declare function limitOrderTypeToJSON(object: LimitOrderType): string;
export interface DepositOptions {
    disableAutoswap: boolean;
    failTxOnBel: boolean;
    swapOnDeposit: boolean;
    /** @deprecated */
    swapOnDepositSlopToleranceBps: bigint;
}
export interface MsgDeposit {
    creator: string;
    receiver: string;
    tokenA: string;
    tokenB: string;
    amountsA: string[];
    amountsB: string[];
    tickIndexesAToB: bigint[];
    fees: bigint[];
    options: DepositOptions[];
}
export interface FailedDeposit {
    depositIdx: bigint;
    error: string;
}
export interface MsgDepositResponse {
    /** reserve0_deposited is DEPRECATED */
    /** @deprecated */
    reserve0Deposited: string[];
    /** reserve0_deposited is DEPRECATED */
    /** @deprecated */
    reserve1Deposited: string[];
    failedDeposits: FailedDeposit[];
    sharesIssued: Coin[];
    decReserve0Deposited: string[];
    decReserve1Deposited: string[];
}
export interface MsgWithdrawal {
    creator: string;
    receiver: string;
    tokenA: string;
    tokenB: string;
    sharesToRemove: string[];
    tickIndexesAToB: bigint[];
    fees: bigint[];
}
export interface MsgWithdrawalWithShares {
    creator: string;
    receiver: string;
    sharesToRemove: Coin[];
}
export interface MsgWithdrawalResponse {
    /** reserve0_withdrawn is DEPRECATED */
    /** @deprecated */
    reserve0Withdrawn: string;
    /** reserve1_withdrawn is DEPRECATED */
    /** @deprecated */
    reserve1Withdrawn: string;
    sharesBurned: Coin[];
    decReserve0Withdrawn: string;
    decReserve1Withdrawn: string;
}
export interface MsgPlaceLimitOrder {
    creator: string;
    receiver: string;
    tokenIn: string;
    tokenOut: string;
    /** DEPRECATED: tick_index_in_to_out will be removed in future release; limit_sell_price should be used instead. */
    /** @deprecated */
    tickIndexInToOut: bigint;
    amountIn: string;
    orderType: LimitOrderType;
    /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
    expirationTime?: Timestamp;
    maxAmountOut?: string;
    limitSellPrice?: string;
    /** min_average_sell_price is DEPRECATED */
    /** @deprecated */
    minAverageSellPrice?: string;
}
export interface MsgPlaceLimitOrderResponse {
    trancheKey: string;
    /** Total amount of coin used for the limit order */
    coinIn: Coin;
    /** taker_coin_out is DEPRECATED */
    /** @deprecated */
    takerCoinOut: Coin;
    /** taker_coin_in is DEPRECATED */
    /** @deprecated */
    takerCoinIn: Coin;
    /**
     * Total amount of coin received from the taker portion of the limit order
     * This is the amount of coin immediately available in the users account after
     * executing the limit order. It does not include any future proceeds from the
     * maker portion which will have withdrawn in the future
     */
    decTakerCoinOut: PrecDecCoin;
    /** Total amount of the token in that was immediately swapped for takerOutCoin */
    decTakerCoinIn: PrecDecCoin;
}
export interface MsgWithdrawFilledLimitOrder {
    creator: string;
    trancheKey: string;
}
export interface MsgWithdrawFilledLimitOrderResponse {
    /** taker_coin_out is DEPRECATED */
    /** @deprecated */
    takerCoinOut: Coin;
    /** maker_coin_out is DEPRECATED */
    /** @deprecated */
    makerCoinOut: Coin;
    /** Total amount of taker reserves that were withdrawn */
    decTakerCoinOut: PrecDecCoin;
    /** Total amount of maker reserves that were withdrawn --only applies to inactive LimitOrders */
    decMakerCoinOut: PrecDecCoin;
}
export interface MsgCancelLimitOrder {
    creator: string;
    trancheKey: string;
}
export interface MsgCancelLimitOrderResponse {
    /** taker_coin_out is DEPRECATED */
    /** @deprecated */
    takerCoinOut: Coin;
    /** maker_coin_out is DEPRECATED */
    /** @deprecated */
    makerCoinOut: Coin;
    /** Total amount of taker reserves that were withdrawn */
    decTakerCoinOut: PrecDecCoin;
    /** Total amount of maker reserves that were canceled */
    decMakerCoinOut: PrecDecCoin;
}
export interface MultiHopRoute {
    hops: string[];
}
export interface MsgMultiHopSwap {
    creator: string;
    receiver: string;
    routes: MultiHopRoute[];
    amountIn: string;
    exitLimitPrice: string;
    /**
     * If pickBestRoute == true then all routes are run and the route with the
     * best price is chosen otherwise, the first successful route is used.
     */
    pickBestRoute: boolean;
}
export interface MsgMultiHopSwapResponse {
    /** coin_out is DEPRECATED */
    /** @deprecated */
    coinOut: Coin;
    route?: MultiHopRoute;
    /** dust is DEPRECATED */
    /** @deprecated */
    dust: Coin[];
    decCoinOut: PrecDecCoin;
    decDust: PrecDecCoin[];
}
export interface MsgUpdateParams {
    /** Authority is the address of the governance account. */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {
}
export declare const DepositOptions: {
    typeUrl: string;
    encode(message: DepositOptions, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DepositOptions;
    fromJSON(object: any): DepositOptions;
    toJSON(message: DepositOptions): JsonSafe<DepositOptions>;
    fromPartial<I extends Exact<DeepPartial<DepositOptions>, I>>(object: I): DepositOptions;
};
export declare const MsgDeposit: {
    typeUrl: string;
    encode(message: MsgDeposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit;
    fromJSON(object: any): MsgDeposit;
    toJSON(message: MsgDeposit): JsonSafe<MsgDeposit>;
    fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit;
};
export declare const FailedDeposit: {
    typeUrl: string;
    encode(message: FailedDeposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FailedDeposit;
    fromJSON(object: any): FailedDeposit;
    toJSON(message: FailedDeposit): JsonSafe<FailedDeposit>;
    fromPartial<I extends Exact<DeepPartial<FailedDeposit>, I>>(object: I): FailedDeposit;
};
export declare const MsgDepositResponse: {
    typeUrl: string;
    encode(message: MsgDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse;
    fromJSON(object: any): MsgDepositResponse;
    toJSON(message: MsgDepositResponse): JsonSafe<MsgDepositResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(object: I): MsgDepositResponse;
};
export declare const MsgWithdrawal: {
    typeUrl: string;
    encode(message: MsgWithdrawal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawal;
    fromJSON(object: any): MsgWithdrawal;
    toJSON(message: MsgWithdrawal): JsonSafe<MsgWithdrawal>;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawal>, I>>(object: I): MsgWithdrawal;
};
export declare const MsgWithdrawalWithShares: {
    typeUrl: string;
    encode(message: MsgWithdrawalWithShares, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawalWithShares;
    fromJSON(object: any): MsgWithdrawalWithShares;
    toJSON(message: MsgWithdrawalWithShares): JsonSafe<MsgWithdrawalWithShares>;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawalWithShares>, I>>(object: I): MsgWithdrawalWithShares;
};
export declare const MsgWithdrawalResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawalResponse;
    fromJSON(object: any): MsgWithdrawalResponse;
    toJSON(message: MsgWithdrawalResponse): JsonSafe<MsgWithdrawalResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawalResponse>, I>>(object: I): MsgWithdrawalResponse;
};
export declare const MsgPlaceLimitOrder: {
    typeUrl: string;
    encode(message: MsgPlaceLimitOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceLimitOrder;
    fromJSON(object: any): MsgPlaceLimitOrder;
    toJSON(message: MsgPlaceLimitOrder): JsonSafe<MsgPlaceLimitOrder>;
    fromPartial<I extends Exact<DeepPartial<MsgPlaceLimitOrder>, I>>(object: I): MsgPlaceLimitOrder;
};
export declare const MsgPlaceLimitOrderResponse: {
    typeUrl: string;
    encode(message: MsgPlaceLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceLimitOrderResponse;
    fromJSON(object: any): MsgPlaceLimitOrderResponse;
    toJSON(message: MsgPlaceLimitOrderResponse): JsonSafe<MsgPlaceLimitOrderResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgPlaceLimitOrderResponse>, I>>(object: I): MsgPlaceLimitOrderResponse;
};
export declare const MsgWithdrawFilledLimitOrder: {
    typeUrl: string;
    encode(message: MsgWithdrawFilledLimitOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFilledLimitOrder;
    fromJSON(object: any): MsgWithdrawFilledLimitOrder;
    toJSON(message: MsgWithdrawFilledLimitOrder): JsonSafe<MsgWithdrawFilledLimitOrder>;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawFilledLimitOrder>, I>>(object: I): MsgWithdrawFilledLimitOrder;
};
export declare const MsgWithdrawFilledLimitOrderResponse: {
    typeUrl: string;
    encode(message: MsgWithdrawFilledLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawFilledLimitOrderResponse;
    fromJSON(object: any): MsgWithdrawFilledLimitOrderResponse;
    toJSON(message: MsgWithdrawFilledLimitOrderResponse): JsonSafe<MsgWithdrawFilledLimitOrderResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgWithdrawFilledLimitOrderResponse>, I>>(object: I): MsgWithdrawFilledLimitOrderResponse;
};
export declare const MsgCancelLimitOrder: {
    typeUrl: string;
    encode(message: MsgCancelLimitOrder, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelLimitOrder;
    fromJSON(object: any): MsgCancelLimitOrder;
    toJSON(message: MsgCancelLimitOrder): JsonSafe<MsgCancelLimitOrder>;
    fromPartial<I extends Exact<DeepPartial<MsgCancelLimitOrder>, I>>(object: I): MsgCancelLimitOrder;
};
export declare const MsgCancelLimitOrderResponse: {
    typeUrl: string;
    encode(message: MsgCancelLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelLimitOrderResponse;
    fromJSON(object: any): MsgCancelLimitOrderResponse;
    toJSON(message: MsgCancelLimitOrderResponse): JsonSafe<MsgCancelLimitOrderResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgCancelLimitOrderResponse>, I>>(object: I): MsgCancelLimitOrderResponse;
};
export declare const MultiHopRoute: {
    typeUrl: string;
    encode(message: MultiHopRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MultiHopRoute;
    fromJSON(object: any): MultiHopRoute;
    toJSON(message: MultiHopRoute): JsonSafe<MultiHopRoute>;
    fromPartial<I extends Exact<DeepPartial<MultiHopRoute>, I>>(object: I): MultiHopRoute;
};
export declare const MsgMultiHopSwap: {
    typeUrl: string;
    encode(message: MsgMultiHopSwap, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiHopSwap;
    fromJSON(object: any): MsgMultiHopSwap;
    toJSON(message: MsgMultiHopSwap): JsonSafe<MsgMultiHopSwap>;
    fromPartial<I extends Exact<DeepPartial<MsgMultiHopSwap>, I>>(object: I): MsgMultiHopSwap;
};
export declare const MsgMultiHopSwapResponse: {
    typeUrl: string;
    encode(message: MsgMultiHopSwapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiHopSwapResponse;
    fromJSON(object: any): MsgMultiHopSwapResponse;
    toJSON(message: MsgMultiHopSwapResponse): JsonSafe<MsgMultiHopSwapResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgMultiHopSwapResponse>, I>>(object: I): MsgMultiHopSwapResponse;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
