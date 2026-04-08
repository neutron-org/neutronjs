import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination.js";
import { MultiHopRoute, LimitOrderType, MsgDeposit, MsgWithdrawal, MsgWithdrawalWithShares, MsgPlaceLimitOrder, MsgWithdrawFilledLimitOrder, MsgCancelLimitOrder, MsgMultiHopSwap, MsgDepositResponse, MsgWithdrawalResponse, MsgPlaceLimitOrderResponse, MsgWithdrawFilledLimitOrderResponse, MsgCancelLimitOrderResponse, MsgMultiHopSwapResponse } from "./tx.js";
import { Timestamp } from "../../google/protobuf/timestamp.js";
import { Params } from "./params.js";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user.js";
import { LimitOrderTranche } from "./limit_order_tranche.js";
import { DepositRecord } from "./deposit_record.js";
import { TickLiquidity } from "./tick_liquidity.js";
import { PoolReserves } from "./pool_reserves.js";
import { Coin } from "../../cosmos/base/v1beta1/coin.js";
import { Pool } from "./pool.js";
import { PoolMetadata } from "./pool_metadata.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { JsonSafe } from "../../json-safe.js";
import { DeepPartial, Exact } from "../../helpers.js";
export declare const protobufPackage = "neutron.dex";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryGetLimitOrderTrancheUserRequest {
    address: string;
    trancheKey: string;
    calcWithdrawableShares: boolean;
}
export interface QueryGetLimitOrderTrancheUserResponse {
    limitOrderTrancheUser?: LimitOrderTrancheUser;
    withdrawableShares?: string;
}
export interface QueryAllLimitOrderTrancheUserRequest {
    pagination?: PageRequest;
}
export interface QueryAllLimitOrderTrancheUserResponse {
    limitOrderTrancheUser?: LimitOrderTrancheUser[];
    pagination?: PageResponse;
}
export interface QueryGetLimitOrderTrancheRequest {
    pairId: string;
    tickIndex: bigint;
    tokenIn: string;
    trancheKey: string;
}
export interface QueryGetLimitOrderTrancheResponse {
    limitOrderTranche?: LimitOrderTranche;
}
export interface QueryAllLimitOrderTrancheRequest {
    pairId: string;
    tokenIn: string;
    pagination?: PageRequest;
}
export interface QueryAllLimitOrderTrancheResponse {
    limitOrderTranche?: LimitOrderTranche[];
    pagination?: PageResponse;
}
export interface QueryAllUserDepositsRequest {
    address: string;
    pagination?: PageRequest;
    includePoolData: boolean;
}
export interface QueryAllUserDepositsResponse {
    deposits?: DepositRecord[];
    pagination?: PageResponse;
}
export interface QueryAllLimitOrderTrancheUserByAddressRequest {
    address: string;
    pagination?: PageRequest;
}
export interface QueryAllLimitOrderTrancheUserByAddressResponse {
    limitOrders?: LimitOrderTrancheUser[];
    pagination?: PageResponse;
}
export interface QueryAllTickLiquidityRequest {
    pairId: string;
    tokenIn: string;
    pagination?: PageRequest;
}
export interface QueryAllTickLiquidityResponse {
    tickLiquidity?: TickLiquidity[];
    pagination?: PageResponse;
}
export interface QueryGetInactiveLimitOrderTrancheRequest {
    pairId: string;
    tokenIn: string;
    tickIndex: bigint;
    trancheKey: string;
}
export interface QueryGetInactiveLimitOrderTrancheResponse {
    inactiveLimitOrderTranche?: LimitOrderTranche;
}
export interface QueryAllInactiveLimitOrderTrancheRequest {
    pagination?: PageRequest;
}
export interface QueryAllInactiveLimitOrderTrancheResponse {
    inactiveLimitOrderTranche?: LimitOrderTranche[];
    pagination?: PageResponse;
}
export interface QueryAllPoolReservesRequest {
    pairId: string;
    tokenIn: string;
    pagination?: PageRequest;
}
export interface QueryAllPoolReservesResponse {
    poolReserves?: PoolReserves[];
    pagination?: PageResponse;
}
export interface QueryGetPoolReservesRequest {
    pairId: string;
    tokenIn: string;
    tickIndex: bigint;
    fee: bigint;
}
export interface QueryGetPoolReservesResponse {
    poolReserves?: PoolReserves;
}
export interface QueryEstimateMultiHopSwapRequest {
    /** DEPRECATED: Use QuerySimulateMultiHopSwap */
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
export interface QueryEstimateMultiHopSwapResponse {
    coinOut: Coin;
}
export interface QueryEstimatePlaceLimitOrderRequest {
    /** DEPRECATED: Use QuerySimulatePlaceLimitOrder */
    creator: string;
    receiver: string;
    tokenIn: string;
    tokenOut: string;
    tickIndexInToOut: bigint;
    amountIn: string;
    orderType: LimitOrderType;
    /** expirationTime is only valid iff orderType == GOOD_TIL_TIME. */
    expirationTime?: Timestamp;
    maxAmountOut?: string;
}
export interface QueryEstimatePlaceLimitOrderResponse {
    /**
     * Total amount of coin used for the limit order
     * You can derive makerLimitInCoin using the equation: totalInCoin =
     * swapInCoin + makerLimitInCoin
     */
    totalInCoin: Coin;
    /** Total amount of the token in that was immediately swapped for swapOutCoin */
    swapInCoin: Coin;
    /**
     * Total amount of coin received from the taker portion of the limit order
     * This is the amount of coin immediately available in the users account after
     * executing the limit order. It does not include any future proceeds from the
     * maker portion which will have withdrawn in the future
     */
    swapOutCoin: Coin;
}
export interface QueryPoolRequest {
    pairId: string;
    tickIndex: bigint;
    fee: bigint;
}
export interface QueryPoolByIDRequest {
    poolId: bigint;
}
export interface QueryPoolResponse {
    pool?: Pool;
}
export interface QueryGetPoolMetadataRequest {
    id: bigint;
}
export interface QueryGetPoolMetadataResponse {
    poolMetadata: PoolMetadata;
}
export interface QueryAllPoolMetadataRequest {
    pagination?: PageRequest;
}
export interface QueryAllPoolMetadataResponse {
    poolMetadata: PoolMetadata[];
    pagination?: PageResponse;
}
export interface QuerySimulateDepositRequest {
    msg?: MsgDeposit;
}
export interface QuerySimulateDepositResponse {
    resp?: MsgDepositResponse;
}
export interface QuerySimulateWithdrawalRequest {
    msg?: MsgWithdrawal;
}
export interface QuerySimulateWithdrawalWithSharesRequest {
    msg?: MsgWithdrawalWithShares;
}
export interface QuerySimulateWithdrawalResponse {
    resp?: MsgWithdrawalResponse;
}
export interface QuerySimulatePlaceLimitOrderRequest {
    msg?: MsgPlaceLimitOrder;
}
export interface QuerySimulatePlaceLimitOrderResponse {
    resp?: MsgPlaceLimitOrderResponse;
}
export interface QuerySimulateWithdrawFilledLimitOrderRequest {
    msg?: MsgWithdrawFilledLimitOrder;
}
export interface QuerySimulateWithdrawFilledLimitOrderResponse {
    resp?: MsgWithdrawFilledLimitOrderResponse;
}
export interface QuerySimulateCancelLimitOrderRequest {
    msg?: MsgCancelLimitOrder;
}
export interface QuerySimulateCancelLimitOrderResponse {
    resp?: MsgCancelLimitOrderResponse;
}
export interface QuerySimulateMultiHopSwapRequest {
    msg?: MsgMultiHopSwap;
}
export interface QuerySimulateMultiHopSwapResponse {
    resp?: MsgMultiHopSwapResponse;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse;
};
export declare const QueryGetLimitOrderTrancheUserRequest: {
    typeUrl: string;
    encode(message: QueryGetLimitOrderTrancheUserRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLimitOrderTrancheUserRequest;
    fromJSON(object: any): QueryGetLimitOrderTrancheUserRequest;
    toJSON(message: QueryGetLimitOrderTrancheUserRequest): JsonSafe<QueryGetLimitOrderTrancheUserRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheUserRequest>, I>>(object: I): QueryGetLimitOrderTrancheUserRequest;
};
export declare const QueryGetLimitOrderTrancheUserResponse: {
    typeUrl: string;
    encode(message: QueryGetLimitOrderTrancheUserResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLimitOrderTrancheUserResponse;
    fromJSON(object: any): QueryGetLimitOrderTrancheUserResponse;
    toJSON(message: QueryGetLimitOrderTrancheUserResponse): JsonSafe<QueryGetLimitOrderTrancheUserResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheUserResponse>, I>>(object: I): QueryGetLimitOrderTrancheUserResponse;
};
export declare const QueryAllLimitOrderTrancheUserRequest: {
    typeUrl: string;
    encode(message: QueryAllLimitOrderTrancheUserRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserRequest;
    fromJSON(object: any): QueryAllLimitOrderTrancheUserRequest;
    toJSON(message: QueryAllLimitOrderTrancheUserRequest): JsonSafe<QueryAllLimitOrderTrancheUserRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheUserRequest>, I>>(object: I): QueryAllLimitOrderTrancheUserRequest;
};
export declare const QueryAllLimitOrderTrancheUserResponse: {
    typeUrl: string;
    encode(message: QueryAllLimitOrderTrancheUserResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserResponse;
    fromJSON(object: any): QueryAllLimitOrderTrancheUserResponse;
    toJSON(message: QueryAllLimitOrderTrancheUserResponse): JsonSafe<QueryAllLimitOrderTrancheUserResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheUserResponse>, I>>(object: I): QueryAllLimitOrderTrancheUserResponse;
};
export declare const QueryGetLimitOrderTrancheRequest: {
    typeUrl: string;
    encode(message: QueryGetLimitOrderTrancheRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLimitOrderTrancheRequest;
    fromJSON(object: any): QueryGetLimitOrderTrancheRequest;
    toJSON(message: QueryGetLimitOrderTrancheRequest): JsonSafe<QueryGetLimitOrderTrancheRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheRequest>, I>>(object: I): QueryGetLimitOrderTrancheRequest;
};
export declare const QueryGetLimitOrderTrancheResponse: {
    typeUrl: string;
    encode(message: QueryGetLimitOrderTrancheResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLimitOrderTrancheResponse;
    fromJSON(object: any): QueryGetLimitOrderTrancheResponse;
    toJSON(message: QueryGetLimitOrderTrancheResponse): JsonSafe<QueryGetLimitOrderTrancheResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetLimitOrderTrancheResponse>, I>>(object: I): QueryGetLimitOrderTrancheResponse;
};
export declare const QueryAllLimitOrderTrancheRequest: {
    typeUrl: string;
    encode(message: QueryAllLimitOrderTrancheRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheRequest;
    fromJSON(object: any): QueryAllLimitOrderTrancheRequest;
    toJSON(message: QueryAllLimitOrderTrancheRequest): JsonSafe<QueryAllLimitOrderTrancheRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheRequest>, I>>(object: I): QueryAllLimitOrderTrancheRequest;
};
export declare const QueryAllLimitOrderTrancheResponse: {
    typeUrl: string;
    encode(message: QueryAllLimitOrderTrancheResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheResponse;
    fromJSON(object: any): QueryAllLimitOrderTrancheResponse;
    toJSON(message: QueryAllLimitOrderTrancheResponse): JsonSafe<QueryAllLimitOrderTrancheResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheResponse>, I>>(object: I): QueryAllLimitOrderTrancheResponse;
};
export declare const QueryAllUserDepositsRequest: {
    typeUrl: string;
    encode(message: QueryAllUserDepositsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserDepositsRequest;
    fromJSON(object: any): QueryAllUserDepositsRequest;
    toJSON(message: QueryAllUserDepositsRequest): JsonSafe<QueryAllUserDepositsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAllUserDepositsRequest>, I>>(object: I): QueryAllUserDepositsRequest;
};
export declare const QueryAllUserDepositsResponse: {
    typeUrl: string;
    encode(message: QueryAllUserDepositsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllUserDepositsResponse;
    fromJSON(object: any): QueryAllUserDepositsResponse;
    toJSON(message: QueryAllUserDepositsResponse): JsonSafe<QueryAllUserDepositsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAllUserDepositsResponse>, I>>(object: I): QueryAllUserDepositsResponse;
};
export declare const QueryAllLimitOrderTrancheUserByAddressRequest: {
    typeUrl: string;
    encode(message: QueryAllLimitOrderTrancheUserByAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserByAddressRequest;
    fromJSON(object: any): QueryAllLimitOrderTrancheUserByAddressRequest;
    toJSON(message: QueryAllLimitOrderTrancheUserByAddressRequest): JsonSafe<QueryAllLimitOrderTrancheUserByAddressRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheUserByAddressRequest>, I>>(object: I): QueryAllLimitOrderTrancheUserByAddressRequest;
};
export declare const QueryAllLimitOrderTrancheUserByAddressResponse: {
    typeUrl: string;
    encode(message: QueryAllLimitOrderTrancheUserByAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLimitOrderTrancheUserByAddressResponse;
    fromJSON(object: any): QueryAllLimitOrderTrancheUserByAddressResponse;
    toJSON(message: QueryAllLimitOrderTrancheUserByAddressResponse): JsonSafe<QueryAllLimitOrderTrancheUserByAddressResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAllLimitOrderTrancheUserByAddressResponse>, I>>(object: I): QueryAllLimitOrderTrancheUserByAddressResponse;
};
export declare const QueryAllTickLiquidityRequest: {
    typeUrl: string;
    encode(message: QueryAllTickLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTickLiquidityRequest;
    fromJSON(object: any): QueryAllTickLiquidityRequest;
    toJSON(message: QueryAllTickLiquidityRequest): JsonSafe<QueryAllTickLiquidityRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAllTickLiquidityRequest>, I>>(object: I): QueryAllTickLiquidityRequest;
};
export declare const QueryAllTickLiquidityResponse: {
    typeUrl: string;
    encode(message: QueryAllTickLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllTickLiquidityResponse;
    fromJSON(object: any): QueryAllTickLiquidityResponse;
    toJSON(message: QueryAllTickLiquidityResponse): JsonSafe<QueryAllTickLiquidityResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAllTickLiquidityResponse>, I>>(object: I): QueryAllTickLiquidityResponse;
};
export declare const QueryGetInactiveLimitOrderTrancheRequest: {
    typeUrl: string;
    encode(message: QueryGetInactiveLimitOrderTrancheRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInactiveLimitOrderTrancheRequest;
    fromJSON(object: any): QueryGetInactiveLimitOrderTrancheRequest;
    toJSON(message: QueryGetInactiveLimitOrderTrancheRequest): JsonSafe<QueryGetInactiveLimitOrderTrancheRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetInactiveLimitOrderTrancheRequest>, I>>(object: I): QueryGetInactiveLimitOrderTrancheRequest;
};
export declare const QueryGetInactiveLimitOrderTrancheResponse: {
    typeUrl: string;
    encode(message: QueryGetInactiveLimitOrderTrancheResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetInactiveLimitOrderTrancheResponse;
    fromJSON(object: any): QueryGetInactiveLimitOrderTrancheResponse;
    toJSON(message: QueryGetInactiveLimitOrderTrancheResponse): JsonSafe<QueryGetInactiveLimitOrderTrancheResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetInactiveLimitOrderTrancheResponse>, I>>(object: I): QueryGetInactiveLimitOrderTrancheResponse;
};
export declare const QueryAllInactiveLimitOrderTrancheRequest: {
    typeUrl: string;
    encode(message: QueryAllInactiveLimitOrderTrancheRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInactiveLimitOrderTrancheRequest;
    fromJSON(object: any): QueryAllInactiveLimitOrderTrancheRequest;
    toJSON(message: QueryAllInactiveLimitOrderTrancheRequest): JsonSafe<QueryAllInactiveLimitOrderTrancheRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAllInactiveLimitOrderTrancheRequest>, I>>(object: I): QueryAllInactiveLimitOrderTrancheRequest;
};
export declare const QueryAllInactiveLimitOrderTrancheResponse: {
    typeUrl: string;
    encode(message: QueryAllInactiveLimitOrderTrancheResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllInactiveLimitOrderTrancheResponse;
    fromJSON(object: any): QueryAllInactiveLimitOrderTrancheResponse;
    toJSON(message: QueryAllInactiveLimitOrderTrancheResponse): JsonSafe<QueryAllInactiveLimitOrderTrancheResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAllInactiveLimitOrderTrancheResponse>, I>>(object: I): QueryAllInactiveLimitOrderTrancheResponse;
};
export declare const QueryAllPoolReservesRequest: {
    typeUrl: string;
    encode(message: QueryAllPoolReservesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolReservesRequest;
    fromJSON(object: any): QueryAllPoolReservesRequest;
    toJSON(message: QueryAllPoolReservesRequest): JsonSafe<QueryAllPoolReservesRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAllPoolReservesRequest>, I>>(object: I): QueryAllPoolReservesRequest;
};
export declare const QueryAllPoolReservesResponse: {
    typeUrl: string;
    encode(message: QueryAllPoolReservesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolReservesResponse;
    fromJSON(object: any): QueryAllPoolReservesResponse;
    toJSON(message: QueryAllPoolReservesResponse): JsonSafe<QueryAllPoolReservesResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAllPoolReservesResponse>, I>>(object: I): QueryAllPoolReservesResponse;
};
export declare const QueryGetPoolReservesRequest: {
    typeUrl: string;
    encode(message: QueryGetPoolReservesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolReservesRequest;
    fromJSON(object: any): QueryGetPoolReservesRequest;
    toJSON(message: QueryGetPoolReservesRequest): JsonSafe<QueryGetPoolReservesRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetPoolReservesRequest>, I>>(object: I): QueryGetPoolReservesRequest;
};
export declare const QueryGetPoolReservesResponse: {
    typeUrl: string;
    encode(message: QueryGetPoolReservesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolReservesResponse;
    fromJSON(object: any): QueryGetPoolReservesResponse;
    toJSON(message: QueryGetPoolReservesResponse): JsonSafe<QueryGetPoolReservesResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetPoolReservesResponse>, I>>(object: I): QueryGetPoolReservesResponse;
};
export declare const QueryEstimateMultiHopSwapRequest: {
    typeUrl: string;
    encode(message: QueryEstimateMultiHopSwapRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateMultiHopSwapRequest;
    fromJSON(object: any): QueryEstimateMultiHopSwapRequest;
    toJSON(message: QueryEstimateMultiHopSwapRequest): JsonSafe<QueryEstimateMultiHopSwapRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryEstimateMultiHopSwapRequest>, I>>(object: I): QueryEstimateMultiHopSwapRequest;
};
export declare const QueryEstimateMultiHopSwapResponse: {
    typeUrl: string;
    encode(message: QueryEstimateMultiHopSwapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimateMultiHopSwapResponse;
    fromJSON(object: any): QueryEstimateMultiHopSwapResponse;
    toJSON(message: QueryEstimateMultiHopSwapResponse): JsonSafe<QueryEstimateMultiHopSwapResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryEstimateMultiHopSwapResponse>, I>>(object: I): QueryEstimateMultiHopSwapResponse;
};
export declare const QueryEstimatePlaceLimitOrderRequest: {
    typeUrl: string;
    encode(message: QueryEstimatePlaceLimitOrderRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatePlaceLimitOrderRequest;
    fromJSON(object: any): QueryEstimatePlaceLimitOrderRequest;
    toJSON(message: QueryEstimatePlaceLimitOrderRequest): JsonSafe<QueryEstimatePlaceLimitOrderRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryEstimatePlaceLimitOrderRequest>, I>>(object: I): QueryEstimatePlaceLimitOrderRequest;
};
export declare const QueryEstimatePlaceLimitOrderResponse: {
    typeUrl: string;
    encode(message: QueryEstimatePlaceLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEstimatePlaceLimitOrderResponse;
    fromJSON(object: any): QueryEstimatePlaceLimitOrderResponse;
    toJSON(message: QueryEstimatePlaceLimitOrderResponse): JsonSafe<QueryEstimatePlaceLimitOrderResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryEstimatePlaceLimitOrderResponse>, I>>(object: I): QueryEstimatePlaceLimitOrderResponse;
};
export declare const QueryPoolRequest: {
    typeUrl: string;
    encode(message: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(object: any): QueryPoolRequest;
    toJSON(message: QueryPoolRequest): JsonSafe<QueryPoolRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(object: I): QueryPoolRequest;
};
export declare const QueryPoolByIDRequest: {
    typeUrl: string;
    encode(message: QueryPoolByIDRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolByIDRequest;
    fromJSON(object: any): QueryPoolByIDRequest;
    toJSON(message: QueryPoolByIDRequest): JsonSafe<QueryPoolByIDRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryPoolByIDRequest>, I>>(object: I): QueryPoolByIDRequest;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): JsonSafe<QueryPoolResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse;
};
export declare const QueryGetPoolMetadataRequest: {
    typeUrl: string;
    encode(message: QueryGetPoolMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolMetadataRequest;
    fromJSON(object: any): QueryGetPoolMetadataRequest;
    toJSON(message: QueryGetPoolMetadataRequest): JsonSafe<QueryGetPoolMetadataRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetPoolMetadataRequest>, I>>(object: I): QueryGetPoolMetadataRequest;
};
export declare const QueryGetPoolMetadataResponse: {
    typeUrl: string;
    encode(message: QueryGetPoolMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPoolMetadataResponse;
    fromJSON(object: any): QueryGetPoolMetadataResponse;
    toJSON(message: QueryGetPoolMetadataResponse): JsonSafe<QueryGetPoolMetadataResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetPoolMetadataResponse>, I>>(object: I): QueryGetPoolMetadataResponse;
};
export declare const QueryAllPoolMetadataRequest: {
    typeUrl: string;
    encode(message: QueryAllPoolMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolMetadataRequest;
    fromJSON(object: any): QueryAllPoolMetadataRequest;
    toJSON(message: QueryAllPoolMetadataRequest): JsonSafe<QueryAllPoolMetadataRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAllPoolMetadataRequest>, I>>(object: I): QueryAllPoolMetadataRequest;
};
export declare const QueryAllPoolMetadataResponse: {
    typeUrl: string;
    encode(message: QueryAllPoolMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPoolMetadataResponse;
    fromJSON(object: any): QueryAllPoolMetadataResponse;
    toJSON(message: QueryAllPoolMetadataResponse): JsonSafe<QueryAllPoolMetadataResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAllPoolMetadataResponse>, I>>(object: I): QueryAllPoolMetadataResponse;
};
export declare const QuerySimulateDepositRequest: {
    typeUrl: string;
    encode(message: QuerySimulateDepositRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateDepositRequest;
    fromJSON(object: any): QuerySimulateDepositRequest;
    toJSON(message: QuerySimulateDepositRequest): JsonSafe<QuerySimulateDepositRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateDepositRequest>, I>>(object: I): QuerySimulateDepositRequest;
};
export declare const QuerySimulateDepositResponse: {
    typeUrl: string;
    encode(message: QuerySimulateDepositResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateDepositResponse;
    fromJSON(object: any): QuerySimulateDepositResponse;
    toJSON(message: QuerySimulateDepositResponse): JsonSafe<QuerySimulateDepositResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateDepositResponse>, I>>(object: I): QuerySimulateDepositResponse;
};
export declare const QuerySimulateWithdrawalRequest: {
    typeUrl: string;
    encode(message: QuerySimulateWithdrawalRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateWithdrawalRequest;
    fromJSON(object: any): QuerySimulateWithdrawalRequest;
    toJSON(message: QuerySimulateWithdrawalRequest): JsonSafe<QuerySimulateWithdrawalRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateWithdrawalRequest>, I>>(object: I): QuerySimulateWithdrawalRequest;
};
export declare const QuerySimulateWithdrawalWithSharesRequest: {
    typeUrl: string;
    encode(message: QuerySimulateWithdrawalWithSharesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateWithdrawalWithSharesRequest;
    fromJSON(object: any): QuerySimulateWithdrawalWithSharesRequest;
    toJSON(message: QuerySimulateWithdrawalWithSharesRequest): JsonSafe<QuerySimulateWithdrawalWithSharesRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateWithdrawalWithSharesRequest>, I>>(object: I): QuerySimulateWithdrawalWithSharesRequest;
};
export declare const QuerySimulateWithdrawalResponse: {
    typeUrl: string;
    encode(message: QuerySimulateWithdrawalResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateWithdrawalResponse;
    fromJSON(object: any): QuerySimulateWithdrawalResponse;
    toJSON(message: QuerySimulateWithdrawalResponse): JsonSafe<QuerySimulateWithdrawalResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateWithdrawalResponse>, I>>(object: I): QuerySimulateWithdrawalResponse;
};
export declare const QuerySimulatePlaceLimitOrderRequest: {
    typeUrl: string;
    encode(message: QuerySimulatePlaceLimitOrderRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulatePlaceLimitOrderRequest;
    fromJSON(object: any): QuerySimulatePlaceLimitOrderRequest;
    toJSON(message: QuerySimulatePlaceLimitOrderRequest): JsonSafe<QuerySimulatePlaceLimitOrderRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulatePlaceLimitOrderRequest>, I>>(object: I): QuerySimulatePlaceLimitOrderRequest;
};
export declare const QuerySimulatePlaceLimitOrderResponse: {
    typeUrl: string;
    encode(message: QuerySimulatePlaceLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulatePlaceLimitOrderResponse;
    fromJSON(object: any): QuerySimulatePlaceLimitOrderResponse;
    toJSON(message: QuerySimulatePlaceLimitOrderResponse): JsonSafe<QuerySimulatePlaceLimitOrderResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulatePlaceLimitOrderResponse>, I>>(object: I): QuerySimulatePlaceLimitOrderResponse;
};
export declare const QuerySimulateWithdrawFilledLimitOrderRequest: {
    typeUrl: string;
    encode(message: QuerySimulateWithdrawFilledLimitOrderRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateWithdrawFilledLimitOrderRequest;
    fromJSON(object: any): QuerySimulateWithdrawFilledLimitOrderRequest;
    toJSON(message: QuerySimulateWithdrawFilledLimitOrderRequest): JsonSafe<QuerySimulateWithdrawFilledLimitOrderRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateWithdrawFilledLimitOrderRequest>, I>>(object: I): QuerySimulateWithdrawFilledLimitOrderRequest;
};
export declare const QuerySimulateWithdrawFilledLimitOrderResponse: {
    typeUrl: string;
    encode(message: QuerySimulateWithdrawFilledLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateWithdrawFilledLimitOrderResponse;
    fromJSON(object: any): QuerySimulateWithdrawFilledLimitOrderResponse;
    toJSON(message: QuerySimulateWithdrawFilledLimitOrderResponse): JsonSafe<QuerySimulateWithdrawFilledLimitOrderResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateWithdrawFilledLimitOrderResponse>, I>>(object: I): QuerySimulateWithdrawFilledLimitOrderResponse;
};
export declare const QuerySimulateCancelLimitOrderRequest: {
    typeUrl: string;
    encode(message: QuerySimulateCancelLimitOrderRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateCancelLimitOrderRequest;
    fromJSON(object: any): QuerySimulateCancelLimitOrderRequest;
    toJSON(message: QuerySimulateCancelLimitOrderRequest): JsonSafe<QuerySimulateCancelLimitOrderRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateCancelLimitOrderRequest>, I>>(object: I): QuerySimulateCancelLimitOrderRequest;
};
export declare const QuerySimulateCancelLimitOrderResponse: {
    typeUrl: string;
    encode(message: QuerySimulateCancelLimitOrderResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateCancelLimitOrderResponse;
    fromJSON(object: any): QuerySimulateCancelLimitOrderResponse;
    toJSON(message: QuerySimulateCancelLimitOrderResponse): JsonSafe<QuerySimulateCancelLimitOrderResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateCancelLimitOrderResponse>, I>>(object: I): QuerySimulateCancelLimitOrderResponse;
};
export declare const QuerySimulateMultiHopSwapRequest: {
    typeUrl: string;
    encode(message: QuerySimulateMultiHopSwapRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateMultiHopSwapRequest;
    fromJSON(object: any): QuerySimulateMultiHopSwapRequest;
    toJSON(message: QuerySimulateMultiHopSwapRequest): JsonSafe<QuerySimulateMultiHopSwapRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateMultiHopSwapRequest>, I>>(object: I): QuerySimulateMultiHopSwapRequest;
};
export declare const QuerySimulateMultiHopSwapResponse: {
    typeUrl: string;
    encode(message: QuerySimulateMultiHopSwapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySimulateMultiHopSwapResponse;
    fromJSON(object: any): QuerySimulateMultiHopSwapResponse;
    toJSON(message: QuerySimulateMultiHopSwapResponse): JsonSafe<QuerySimulateMultiHopSwapResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySimulateMultiHopSwapResponse>, I>>(object: I): QuerySimulateMultiHopSwapResponse;
};
