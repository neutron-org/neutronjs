//@ts-nocheck
/* eslint-disable */
import { buildQuery } from "../../helper-func-types.js";
import {
  QueryParamsRequest,
  QueryParamsResponse,
  QueryGetLimitOrderTrancheUserRequest,
  QueryGetLimitOrderTrancheUserResponse,
  QueryAllLimitOrderTrancheUserRequest,
  QueryAllLimitOrderTrancheUserResponse,
  QueryAllLimitOrderTrancheUserByAddressRequest,
  QueryAllLimitOrderTrancheUserByAddressResponse,
  QueryGetLimitOrderTrancheRequest,
  QueryGetLimitOrderTrancheResponse,
  QueryAllLimitOrderTrancheRequest,
  QueryAllLimitOrderTrancheResponse,
  QueryAllUserDepositsRequest,
  QueryAllUserDepositsResponse,
  QueryAllTickLiquidityRequest,
  QueryAllTickLiquidityResponse,
  QueryGetInactiveLimitOrderTrancheRequest,
  QueryGetInactiveLimitOrderTrancheResponse,
  QueryAllInactiveLimitOrderTrancheRequest,
  QueryAllInactiveLimitOrderTrancheResponse,
  QueryAllPoolReservesRequest,
  QueryAllPoolReservesResponse,
  QueryGetPoolReservesRequest,
  QueryGetPoolReservesResponse,
  QueryEstimateMultiHopSwapRequest,
  QueryEstimateMultiHopSwapResponse,
  QueryEstimatePlaceLimitOrderRequest,
  QueryEstimatePlaceLimitOrderResponse,
  QueryPoolRequest,
  QueryPoolResponse,
  QueryPoolByIDRequest,
  QueryGetPoolMetadataRequest,
  QueryGetPoolMetadataResponse,
  QueryAllPoolMetadataRequest,
  QueryAllPoolMetadataResponse,
  QuerySimulateDepositRequest,
  QuerySimulateDepositResponse,
  QuerySimulateWithdrawalRequest,
  QuerySimulateWithdrawalResponse,
  QuerySimulatePlaceLimitOrderRequest,
  QuerySimulatePlaceLimitOrderResponse,
  QuerySimulateWithdrawFilledLimitOrderRequest,
  QuerySimulateWithdrawFilledLimitOrderResponse,
  QuerySimulateCancelLimitOrderRequest,
  QuerySimulateCancelLimitOrderResponse,
  QuerySimulateMultiHopSwapRequest,
  QuerySimulateMultiHopSwapResponse,
} from "./query.js";
/**
 * Parameters queries the parameters of the module.
 * @name getParams
 * @package neutron.dex
 * @see proto service: neutron.dex.Params
 */
export const getParams = buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "neutron.dex.Query",
  method: "Params",
});
/**
 * Queries a LimitOrderTrancheUser by index.
 * @name getLimitOrderTrancheUser
 * @package neutron.dex
 * @see proto service: neutron.dex.LimitOrderTrancheUser
 */
export const getLimitOrderTrancheUser = buildQuery<
  QueryGetLimitOrderTrancheUserRequest,
  QueryGetLimitOrderTrancheUserResponse
>({
  encode: QueryGetLimitOrderTrancheUserRequest.encode,
  decode: QueryGetLimitOrderTrancheUserResponse.decode,
  service: "neutron.dex.Query",
  method: "LimitOrderTrancheUser",
});
/**
 * Queries a list of LimitOrderTranchUser items.
 * @name getLimitOrderTrancheUserAll
 * @package neutron.dex
 * @see proto service: neutron.dex.LimitOrderTrancheUserAll
 */
export const getLimitOrderTrancheUserAll = buildQuery<
  QueryAllLimitOrderTrancheUserRequest,
  QueryAllLimitOrderTrancheUserResponse
>({
  encode: QueryAllLimitOrderTrancheUserRequest.encode,
  decode: QueryAllLimitOrderTrancheUserResponse.decode,
  service: "neutron.dex.Query",
  method: "LimitOrderTrancheUserAll",
});
/**
 * Queries a list of LimitOrderTrancheUser items for a given address.
 * @name getLimitOrderTrancheUserAllByAddress
 * @package neutron.dex
 * @see proto service: neutron.dex.LimitOrderTrancheUserAllByAddress
 */
export const getLimitOrderTrancheUserAllByAddress = buildQuery<
  QueryAllLimitOrderTrancheUserByAddressRequest,
  QueryAllLimitOrderTrancheUserByAddressResponse
>({
  encode: QueryAllLimitOrderTrancheUserByAddressRequest.encode,
  decode: QueryAllLimitOrderTrancheUserByAddressResponse.decode,
  service: "neutron.dex.Query",
  method: "LimitOrderTrancheUserAllByAddress",
});
/**
 * Queries a LimitOrderTranche by index.
 * @name getLimitOrderTranche
 * @package neutron.dex
 * @see proto service: neutron.dex.LimitOrderTranche
 */
export const getLimitOrderTranche = buildQuery<
  QueryGetLimitOrderTrancheRequest,
  QueryGetLimitOrderTrancheResponse
>({
  encode: QueryGetLimitOrderTrancheRequest.encode,
  decode: QueryGetLimitOrderTrancheResponse.decode,
  service: "neutron.dex.Query",
  method: "LimitOrderTranche",
});
/**
 * Queries a list of LimitOrderTranche items for a given pairID / TokenIn
 * combination.
 * @name getLimitOrderTrancheAll
 * @package neutron.dex
 * @see proto service: neutron.dex.LimitOrderTrancheAll
 */
export const getLimitOrderTrancheAll = buildQuery<
  QueryAllLimitOrderTrancheRequest,
  QueryAllLimitOrderTrancheResponse
>({
  encode: QueryAllLimitOrderTrancheRequest.encode,
  decode: QueryAllLimitOrderTrancheResponse.decode,
  service: "neutron.dex.Query",
  method: "LimitOrderTrancheAll",
});
/**
 * Queries a list of UserDeposits items.
 * @name getUserDepositsAll
 * @package neutron.dex
 * @see proto service: neutron.dex.UserDepositsAll
 */
export const getUserDepositsAll = buildQuery<QueryAllUserDepositsRequest, QueryAllUserDepositsResponse>({
  encode: QueryAllUserDepositsRequest.encode,
  decode: QueryAllUserDepositsResponse.decode,
  service: "neutron.dex.Query",
  method: "UserDepositsAll",
});
/**
 * Queries a list of TickLiquidity items.
 * @name getTickLiquidityAll
 * @package neutron.dex
 * @see proto service: neutron.dex.TickLiquidityAll
 */
export const getTickLiquidityAll = buildQuery<QueryAllTickLiquidityRequest, QueryAllTickLiquidityResponse>({
  encode: QueryAllTickLiquidityRequest.encode,
  decode: QueryAllTickLiquidityResponse.decode,
  service: "neutron.dex.Query",
  method: "TickLiquidityAll",
});
/**
 * Queries a InactiveLimitOrderTranche by index.
 * @name getInactiveLimitOrderTranche
 * @package neutron.dex
 * @see proto service: neutron.dex.InactiveLimitOrderTranche
 */
export const getInactiveLimitOrderTranche = buildQuery<
  QueryGetInactiveLimitOrderTrancheRequest,
  QueryGetInactiveLimitOrderTrancheResponse
>({
  encode: QueryGetInactiveLimitOrderTrancheRequest.encode,
  decode: QueryGetInactiveLimitOrderTrancheResponse.decode,
  service: "neutron.dex.Query",
  method: "InactiveLimitOrderTranche",
});
/**
 * Queries a list of InactiveLimitOrderTranche items.
 * @name getInactiveLimitOrderTrancheAll
 * @package neutron.dex
 * @see proto service: neutron.dex.InactiveLimitOrderTrancheAll
 */
export const getInactiveLimitOrderTrancheAll = buildQuery<
  QueryAllInactiveLimitOrderTrancheRequest,
  QueryAllInactiveLimitOrderTrancheResponse
>({
  encode: QueryAllInactiveLimitOrderTrancheRequest.encode,
  decode: QueryAllInactiveLimitOrderTrancheResponse.decode,
  service: "neutron.dex.Query",
  method: "InactiveLimitOrderTrancheAll",
});
/**
 * Queries a list of PoolReserves items.
 * @name getPoolReservesAll
 * @package neutron.dex
 * @see proto service: neutron.dex.PoolReservesAll
 */
export const getPoolReservesAll = buildQuery<QueryAllPoolReservesRequest, QueryAllPoolReservesResponse>({
  encode: QueryAllPoolReservesRequest.encode,
  decode: QueryAllPoolReservesResponse.decode,
  service: "neutron.dex.Query",
  method: "PoolReservesAll",
});
/**
 * Queries a PoolReserve by index
 * @name getPoolReserves
 * @package neutron.dex
 * @see proto service: neutron.dex.PoolReserves
 */
export const getPoolReserves = buildQuery<QueryGetPoolReservesRequest, QueryGetPoolReservesResponse>({
  encode: QueryGetPoolReservesRequest.encode,
  decode: QueryGetPoolReservesResponse.decode,
  service: "neutron.dex.Query",
  method: "PoolReserves",
});
/**
 * DEPRECATED Queries the simulated result of a multihop swap
 * @name getEstimateMultiHopSwap
 * @package neutron.dex
 * @see proto service: neutron.dex.EstimateMultiHopSwap
 * @deprecated
 */
export const getEstimateMultiHopSwap = buildQuery<
  QueryEstimateMultiHopSwapRequest,
  QueryEstimateMultiHopSwapResponse
>({
  encode: QueryEstimateMultiHopSwapRequest.encode,
  decode: QueryEstimateMultiHopSwapResponse.decode,
  service: "neutron.dex.Query",
  method: "EstimateMultiHopSwap",
});
/**
 * DEPRECATED Queries the simulated result of a PlaceLimit order
 * @name getEstimatePlaceLimitOrder
 * @package neutron.dex
 * @see proto service: neutron.dex.EstimatePlaceLimitOrder
 * @deprecated
 */
export const getEstimatePlaceLimitOrder = buildQuery<
  QueryEstimatePlaceLimitOrderRequest,
  QueryEstimatePlaceLimitOrderResponse
>({
  encode: QueryEstimatePlaceLimitOrderRequest.encode,
  decode: QueryEstimatePlaceLimitOrderResponse.decode,
  service: "neutron.dex.Query",
  method: "EstimatePlaceLimitOrder",
});
/**
 * Queries a pool by pair, tick and fee
 * @name getPool
 * @package neutron.dex
 * @see proto service: neutron.dex.Pool
 */
export const getPool = buildQuery<QueryPoolRequest, QueryPoolResponse>({
  encode: QueryPoolRequest.encode,
  decode: QueryPoolResponse.decode,
  service: "neutron.dex.Query",
  method: "Pool",
});
/**
 * Queries a pool by ID
 * @name getPoolByID
 * @package neutron.dex
 * @see proto service: neutron.dex.PoolByID
 */
export const getPoolByID = buildQuery<QueryPoolByIDRequest, QueryPoolResponse>({
  encode: QueryPoolByIDRequest.encode,
  decode: QueryPoolResponse.decode,
  service: "neutron.dex.Query",
  method: "PoolByID",
});
/**
 * Queries a PoolMetadata by ID
 * @name getPoolMetadata
 * @package neutron.dex
 * @see proto service: neutron.dex.PoolMetadata
 */
export const getPoolMetadata = buildQuery<QueryGetPoolMetadataRequest, QueryGetPoolMetadataResponse>({
  encode: QueryGetPoolMetadataRequest.encode,
  decode: QueryGetPoolMetadataResponse.decode,
  service: "neutron.dex.Query",
  method: "PoolMetadata",
});
/**
 * Queries a list of PoolMetadata items.
 * @name getPoolMetadataAll
 * @package neutron.dex
 * @see proto service: neutron.dex.PoolMetadataAll
 */
export const getPoolMetadataAll = buildQuery<QueryAllPoolMetadataRequest, QueryAllPoolMetadataResponse>({
  encode: QueryAllPoolMetadataRequest.encode,
  decode: QueryAllPoolMetadataResponse.decode,
  service: "neutron.dex.Query",
  method: "PoolMetadataAll",
});
/**
 * Simulates MsgDeposit
 * @name getSimulateDeposit
 * @package neutron.dex
 * @see proto service: neutron.dex.SimulateDeposit
 */
export const getSimulateDeposit = buildQuery<QuerySimulateDepositRequest, QuerySimulateDepositResponse>({
  encode: QuerySimulateDepositRequest.encode,
  decode: QuerySimulateDepositResponse.decode,
  service: "neutron.dex.Query",
  method: "SimulateDeposit",
});
/**
 * Simulates MsgWithdrawal
 * @name getSimulateWithdrawal
 * @package neutron.dex
 * @see proto service: neutron.dex.SimulateWithdrawal
 */
export const getSimulateWithdrawal = buildQuery<
  QuerySimulateWithdrawalRequest,
  QuerySimulateWithdrawalResponse
>({
  encode: QuerySimulateWithdrawalRequest.encode,
  decode: QuerySimulateWithdrawalResponse.decode,
  service: "neutron.dex.Query",
  method: "SimulateWithdrawal",
});
/**
 * Simulates MsgPlaceLimitOrder
 * @name getSimulatePlaceLimitOrder
 * @package neutron.dex
 * @see proto service: neutron.dex.SimulatePlaceLimitOrder
 */
export const getSimulatePlaceLimitOrder = buildQuery<
  QuerySimulatePlaceLimitOrderRequest,
  QuerySimulatePlaceLimitOrderResponse
>({
  encode: QuerySimulatePlaceLimitOrderRequest.encode,
  decode: QuerySimulatePlaceLimitOrderResponse.decode,
  service: "neutron.dex.Query",
  method: "SimulatePlaceLimitOrder",
});
/**
 * Simulates MsgWithdrawFilledLimitOrder
 * @name getSimulateWithdrawFilledLimitOrder
 * @package neutron.dex
 * @see proto service: neutron.dex.SimulateWithdrawFilledLimitOrder
 */
export const getSimulateWithdrawFilledLimitOrder = buildQuery<
  QuerySimulateWithdrawFilledLimitOrderRequest,
  QuerySimulateWithdrawFilledLimitOrderResponse
>({
  encode: QuerySimulateWithdrawFilledLimitOrderRequest.encode,
  decode: QuerySimulateWithdrawFilledLimitOrderResponse.decode,
  service: "neutron.dex.Query",
  method: "SimulateWithdrawFilledLimitOrder",
});
/**
 * Simulates MsgCancelLimitOrder
 * @name getSimulateCancelLimitOrder
 * @package neutron.dex
 * @see proto service: neutron.dex.SimulateCancelLimitOrder
 */
export const getSimulateCancelLimitOrder = buildQuery<
  QuerySimulateCancelLimitOrderRequest,
  QuerySimulateCancelLimitOrderResponse
>({
  encode: QuerySimulateCancelLimitOrderRequest.encode,
  decode: QuerySimulateCancelLimitOrderResponse.decode,
  service: "neutron.dex.Query",
  method: "SimulateCancelLimitOrder",
});
/**
 * Simulates MsgMultiHopSwap
 * @name getSimulateMultiHopSwap
 * @package neutron.dex
 * @see proto service: neutron.dex.SimulateMultiHopSwap
 */
export const getSimulateMultiHopSwap = buildQuery<
  QuerySimulateMultiHopSwapRequest,
  QuerySimulateMultiHopSwapResponse
>({
  encode: QuerySimulateMultiHopSwapRequest.encode,
  decode: QuerySimulateMultiHopSwapResponse.decode,
  service: "neutron.dex.Query",
  method: "SimulateMultiHopSwap",
});
