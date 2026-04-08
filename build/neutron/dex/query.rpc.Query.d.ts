import { Rpc } from "../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetLimitOrderTrancheUserRequest, QueryGetLimitOrderTrancheUserResponse, QueryAllLimitOrderTrancheUserRequest, QueryAllLimitOrderTrancheUserResponse, QueryAllLimitOrderTrancheUserByAddressRequest, QueryAllLimitOrderTrancheUserByAddressResponse, QueryGetLimitOrderTrancheRequest, QueryGetLimitOrderTrancheResponse, QueryAllLimitOrderTrancheRequest, QueryAllLimitOrderTrancheResponse, QueryAllUserDepositsRequest, QueryAllUserDepositsResponse, QueryAllTickLiquidityRequest, QueryAllTickLiquidityResponse, QueryGetInactiveLimitOrderTrancheRequest, QueryGetInactiveLimitOrderTrancheResponse, QueryAllInactiveLimitOrderTrancheRequest, QueryAllInactiveLimitOrderTrancheResponse, QueryAllPoolReservesRequest, QueryAllPoolReservesResponse, QueryGetPoolReservesRequest, QueryGetPoolReservesResponse, QueryEstimateMultiHopSwapRequest, QueryEstimateMultiHopSwapResponse, QueryEstimatePlaceLimitOrderRequest, QueryEstimatePlaceLimitOrderResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolByIDRequest, QueryGetPoolMetadataRequest, QueryGetPoolMetadataResponse, QueryAllPoolMetadataRequest, QueryAllPoolMetadataResponse, QuerySimulateDepositRequest, QuerySimulateDepositResponse, QuerySimulateWithdrawalRequest, QuerySimulateWithdrawalResponse, QuerySimulateWithdrawalWithSharesRequest, QuerySimulatePlaceLimitOrderRequest, QuerySimulatePlaceLimitOrderResponse, QuerySimulateWithdrawFilledLimitOrderRequest, QuerySimulateWithdrawFilledLimitOrderResponse, QuerySimulateCancelLimitOrderRequest, QuerySimulateCancelLimitOrderResponse, QuerySimulateMultiHopSwapRequest, QuerySimulateMultiHopSwapResponse } from "./query.js";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a LimitOrderTrancheUser by index. */
    limitOrderTrancheUser(request: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse>;
    /** Queries a list of LimitOrderTranchUser items. */
    limitOrderTrancheUserAll(request?: QueryAllLimitOrderTrancheUserRequest): Promise<QueryAllLimitOrderTrancheUserResponse>;
    /** Queries a list of LimitOrderTrancheUser items for a given address. */
    limitOrderTrancheUserAllByAddress(request: QueryAllLimitOrderTrancheUserByAddressRequest): Promise<QueryAllLimitOrderTrancheUserByAddressResponse>;
    /** Queries a LimitOrderTranche by index. */
    limitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse>;
    /**
     * Queries a list of LimitOrderTranche items for a given pairID / TokenIn
     * combination.
     */
    limitOrderTrancheAll(request: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse>;
    /** Queries a list of UserDeposits items. */
    userDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse>;
    /** Queries a list of TickLiquidity items. */
    tickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse>;
    /** Queries a InactiveLimitOrderTranche by index. */
    inactiveLimitOrderTranche(request: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponse>;
    /** Queries a list of InactiveLimitOrderTranche items. */
    inactiveLimitOrderTrancheAll(request?: QueryAllInactiveLimitOrderTrancheRequest): Promise<QueryAllInactiveLimitOrderTrancheResponse>;
    /** Queries a list of PoolReserves items. */
    poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse>;
    /** Queries a PoolReserve by index */
    poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse>;
    /** DEPRECATED Queries the simulated result of a multihop swap */
    estimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse>;
    /** DEPRECATED Queries the simulated result of a PlaceLimit order */
    estimatePlaceLimitOrder(request: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse>;
    /** Queries a pool by pair, tick and fee */
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /** Queries a pool by ID */
    poolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse>;
    /** Queries a PoolMetadata by ID */
    poolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse>;
    /** Queries a list of PoolMetadata items. */
    poolMetadataAll(request?: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse>;
    /** Simulates MsgDeposit */
    simulateDeposit(request: QuerySimulateDepositRequest): Promise<QuerySimulateDepositResponse>;
    /** Simulates MsgWithdrawal */
    simulateWithdrawal(request: QuerySimulateWithdrawalRequest): Promise<QuerySimulateWithdrawalResponse>;
    /** Simulates MsgWithdrawalWithShares */
    simulateWithdrawalWithShares(request: QuerySimulateWithdrawalWithSharesRequest): Promise<QuerySimulateWithdrawalResponse>;
    /** Simulates MsgPlaceLimitOrder */
    simulatePlaceLimitOrder(request: QuerySimulatePlaceLimitOrderRequest): Promise<QuerySimulatePlaceLimitOrderResponse>;
    /** Simulates MsgWithdrawFilledLimitOrder */
    simulateWithdrawFilledLimitOrder(request: QuerySimulateWithdrawFilledLimitOrderRequest): Promise<QuerySimulateWithdrawFilledLimitOrderResponse>;
    /** Simulates MsgCancelLimitOrder */
    simulateCancelLimitOrder(request: QuerySimulateCancelLimitOrderRequest): Promise<QuerySimulateCancelLimitOrderResponse>;
    /** Simulates MsgMultiHopSwap */
    simulateMultiHopSwap(request: QuerySimulateMultiHopSwapRequest): Promise<QuerySimulateMultiHopSwapResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    limitOrderTrancheUser(request: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse>;
    limitOrderTrancheUserAll(request?: QueryAllLimitOrderTrancheUserRequest): Promise<QueryAllLimitOrderTrancheUserResponse>;
    limitOrderTrancheUserAllByAddress(request: QueryAllLimitOrderTrancheUserByAddressRequest): Promise<QueryAllLimitOrderTrancheUserByAddressResponse>;
    limitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse>;
    limitOrderTrancheAll(request: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse>;
    userDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse>;
    tickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse>;
    inactiveLimitOrderTranche(request: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponse>;
    inactiveLimitOrderTrancheAll(request?: QueryAllInactiveLimitOrderTrancheRequest): Promise<QueryAllInactiveLimitOrderTrancheResponse>;
    poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse>;
    poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse>;
    estimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse>;
    estimatePlaceLimitOrder(request: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse>;
    poolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse>;
    poolMetadataAll(request?: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse>;
    simulateDeposit(request: QuerySimulateDepositRequest): Promise<QuerySimulateDepositResponse>;
    simulateWithdrawal(request: QuerySimulateWithdrawalRequest): Promise<QuerySimulateWithdrawalResponse>;
    simulateWithdrawalWithShares(request: QuerySimulateWithdrawalWithSharesRequest): Promise<QuerySimulateWithdrawalResponse>;
    simulatePlaceLimitOrder(request: QuerySimulatePlaceLimitOrderRequest): Promise<QuerySimulatePlaceLimitOrderResponse>;
    simulateWithdrawFilledLimitOrder(request: QuerySimulateWithdrawFilledLimitOrderRequest): Promise<QuerySimulateWithdrawFilledLimitOrderResponse>;
    simulateCancelLimitOrder(request: QuerySimulateCancelLimitOrderRequest): Promise<QuerySimulateCancelLimitOrderResponse>;
    simulateMultiHopSwap(request: QuerySimulateMultiHopSwapRequest): Promise<QuerySimulateMultiHopSwapResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    limitOrderTrancheUser(request: QueryGetLimitOrderTrancheUserRequest): Promise<QueryGetLimitOrderTrancheUserResponse>;
    limitOrderTrancheUserAll(request?: QueryAllLimitOrderTrancheUserRequest): Promise<QueryAllLimitOrderTrancheUserResponse>;
    limitOrderTrancheUserAllByAddress(request: QueryAllLimitOrderTrancheUserByAddressRequest): Promise<QueryAllLimitOrderTrancheUserByAddressResponse>;
    limitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse>;
    limitOrderTrancheAll(request: QueryAllLimitOrderTrancheRequest): Promise<QueryAllLimitOrderTrancheResponse>;
    userDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse>;
    tickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse>;
    inactiveLimitOrderTranche(request: QueryGetInactiveLimitOrderTrancheRequest): Promise<QueryGetInactiveLimitOrderTrancheResponse>;
    inactiveLimitOrderTrancheAll(request?: QueryAllInactiveLimitOrderTrancheRequest): Promise<QueryAllInactiveLimitOrderTrancheResponse>;
    poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse>;
    poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse>;
    estimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse>;
    estimatePlaceLimitOrder(request: QueryEstimatePlaceLimitOrderRequest): Promise<QueryEstimatePlaceLimitOrderResponse>;
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    poolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse>;
    poolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse>;
    poolMetadataAll(request?: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse>;
    simulateDeposit(request: QuerySimulateDepositRequest): Promise<QuerySimulateDepositResponse>;
    simulateWithdrawal(request: QuerySimulateWithdrawalRequest): Promise<QuerySimulateWithdrawalResponse>;
    simulateWithdrawalWithShares(request: QuerySimulateWithdrawalWithSharesRequest): Promise<QuerySimulateWithdrawalResponse>;
    simulatePlaceLimitOrder(request: QuerySimulatePlaceLimitOrderRequest): Promise<QuerySimulatePlaceLimitOrderResponse>;
    simulateWithdrawFilledLimitOrder(request: QuerySimulateWithdrawFilledLimitOrderRequest): Promise<QuerySimulateWithdrawFilledLimitOrderResponse>;
    simulateCancelLimitOrder(request: QuerySimulateCancelLimitOrderRequest): Promise<QuerySimulateCancelLimitOrderResponse>;
    simulateMultiHopSwap(request: QuerySimulateMultiHopSwapRequest): Promise<QuerySimulateMultiHopSwapResponse>;
};
