/* eslint-disable */
import { PageRequest } from "../../cosmos/base/query/v1beta1/pagination";
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
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
} from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a LimitOrderTrancheUser by index. */
  limitOrderTrancheUser(
    request: QueryGetLimitOrderTrancheUserRequest,
  ): Promise<QueryGetLimitOrderTrancheUserResponse>;
  /** Queries a list of LimitOrderTranchUser items. */
  limitOrderTrancheUserAll(
    request?: QueryAllLimitOrderTrancheUserRequest,
  ): Promise<QueryAllLimitOrderTrancheUserResponse>;
  /** Queries a list of LimitOrderTrancheUser items for a given address. */
  limitOrderTrancheUserAllByAddress(
    request: QueryAllLimitOrderTrancheUserByAddressRequest,
  ): Promise<QueryAllLimitOrderTrancheUserByAddressResponse>;
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
  inactiveLimitOrderTranche(
    request: QueryGetInactiveLimitOrderTrancheRequest,
  ): Promise<QueryGetInactiveLimitOrderTrancheResponse>;
  /** Queries a list of InactiveLimitOrderTranche items. */
  inactiveLimitOrderTrancheAll(
    request?: QueryAllInactiveLimitOrderTrancheRequest,
  ): Promise<QueryAllInactiveLimitOrderTrancheResponse>;
  /** Queries a list of PoolReserves items. */
  poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse>;
  /** Queries a PoolReserve by index */
  poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse>;
  /** DEPRECATED Queries the simulated result of a multihop swap */
  estimateMultiHopSwap(request: QueryEstimateMultiHopSwapRequest): Promise<QueryEstimateMultiHopSwapResponse>;
  /** DEPRECATED Queries the simulated result of a PlaceLimit order */
  estimatePlaceLimitOrder(
    request: QueryEstimatePlaceLimitOrderRequest,
  ): Promise<QueryEstimatePlaceLimitOrderResponse>;
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
  /** Simulates MsgPlaceLimitOrder */
  simulatePlaceLimitOrder(
    request: QuerySimulatePlaceLimitOrderRequest,
  ): Promise<QuerySimulatePlaceLimitOrderResponse>;
  /** Simulates MsgWithdrawFilledLimitOrder */
  simulateWithdrawFilledLimitOrder(
    request: QuerySimulateWithdrawFilledLimitOrderRequest,
  ): Promise<QuerySimulateWithdrawFilledLimitOrderResponse>;
  /** Simulates MsgCancelLimitOrder */
  simulateCancelLimitOrder(
    request: QuerySimulateCancelLimitOrderRequest,
  ): Promise<QuerySimulateCancelLimitOrderResponse>;
  /** Simulates MsgMultiHopSwap */
  simulateMultiHopSwap(request: QuerySimulateMultiHopSwapRequest): Promise<QuerySimulateMultiHopSwapResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.limitOrderTrancheUser = this.limitOrderTrancheUser.bind(this);
    this.limitOrderTrancheUserAll = this.limitOrderTrancheUserAll.bind(this);
    this.limitOrderTrancheUserAllByAddress = this.limitOrderTrancheUserAllByAddress.bind(this);
    this.limitOrderTranche = this.limitOrderTranche.bind(this);
    this.limitOrderTrancheAll = this.limitOrderTrancheAll.bind(this);
    this.userDepositsAll = this.userDepositsAll.bind(this);
    this.tickLiquidityAll = this.tickLiquidityAll.bind(this);
    this.inactiveLimitOrderTranche = this.inactiveLimitOrderTranche.bind(this);
    this.inactiveLimitOrderTrancheAll = this.inactiveLimitOrderTrancheAll.bind(this);
    this.poolReservesAll = this.poolReservesAll.bind(this);
    this.poolReserves = this.poolReserves.bind(this);
    this.estimateMultiHopSwap = this.estimateMultiHopSwap.bind(this);
    this.estimatePlaceLimitOrder = this.estimatePlaceLimitOrder.bind(this);
    this.pool = this.pool.bind(this);
    this.poolByID = this.poolByID.bind(this);
    this.poolMetadata = this.poolMetadata.bind(this);
    this.poolMetadataAll = this.poolMetadataAll.bind(this);
    this.simulateDeposit = this.simulateDeposit.bind(this);
    this.simulateWithdrawal = this.simulateWithdrawal.bind(this);
    this.simulatePlaceLimitOrder = this.simulatePlaceLimitOrder.bind(this);
    this.simulateWithdrawFilledLimitOrder = this.simulateWithdrawFilledLimitOrder.bind(this);
    this.simulateCancelLimitOrder = this.simulateCancelLimitOrder.bind(this);
    this.simulateMultiHopSwap = this.simulateMultiHopSwap.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  limitOrderTrancheUser(
    request: QueryGetLimitOrderTrancheUserRequest,
  ): Promise<QueryGetLimitOrderTrancheUserResponse> {
    const data = QueryGetLimitOrderTrancheUserRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheUser", data);
    return promise.then((data) => QueryGetLimitOrderTrancheUserResponse.decode(new BinaryReader(data)));
  }
  limitOrderTrancheUserAll(
    request: QueryAllLimitOrderTrancheUserRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryAllLimitOrderTrancheUserResponse> {
    const data = QueryAllLimitOrderTrancheUserRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheUserAll", data);
    return promise.then((data) => QueryAllLimitOrderTrancheUserResponse.decode(new BinaryReader(data)));
  }
  limitOrderTrancheUserAllByAddress(
    request: QueryAllLimitOrderTrancheUserByAddressRequest,
  ): Promise<QueryAllLimitOrderTrancheUserByAddressResponse> {
    const data = QueryAllLimitOrderTrancheUserByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheUserAllByAddress", data);
    return promise.then((data) =>
      QueryAllLimitOrderTrancheUserByAddressResponse.decode(new BinaryReader(data)),
    );
  }
  limitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse> {
    const data = QueryGetLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTranche", data);
    return promise.then((data) => QueryGetLimitOrderTrancheResponse.decode(new BinaryReader(data)));
  }
  limitOrderTrancheAll(
    request: QueryAllLimitOrderTrancheRequest,
  ): Promise<QueryAllLimitOrderTrancheResponse> {
    const data = QueryAllLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheAll", data);
    return promise.then((data) => QueryAllLimitOrderTrancheResponse.decode(new BinaryReader(data)));
  }
  userDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse> {
    const data = QueryAllUserDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "UserDepositsAll", data);
    return promise.then((data) => QueryAllUserDepositsResponse.decode(new BinaryReader(data)));
  }
  tickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse> {
    const data = QueryAllTickLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "TickLiquidityAll", data);
    return promise.then((data) => QueryAllTickLiquidityResponse.decode(new BinaryReader(data)));
  }
  inactiveLimitOrderTranche(
    request: QueryGetInactiveLimitOrderTrancheRequest,
  ): Promise<QueryGetInactiveLimitOrderTrancheResponse> {
    const data = QueryGetInactiveLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "InactiveLimitOrderTranche", data);
    return promise.then((data) => QueryGetInactiveLimitOrderTrancheResponse.decode(new BinaryReader(data)));
  }
  inactiveLimitOrderTrancheAll(
    request: QueryAllInactiveLimitOrderTrancheRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryAllInactiveLimitOrderTrancheResponse> {
    const data = QueryAllInactiveLimitOrderTrancheRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "InactiveLimitOrderTrancheAll", data);
    return promise.then((data) => QueryAllInactiveLimitOrderTrancheResponse.decode(new BinaryReader(data)));
  }
  poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse> {
    const data = QueryAllPoolReservesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "PoolReservesAll", data);
    return promise.then((data) => QueryAllPoolReservesResponse.decode(new BinaryReader(data)));
  }
  poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse> {
    const data = QueryGetPoolReservesRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "PoolReserves", data);
    return promise.then((data) => QueryGetPoolReservesResponse.decode(new BinaryReader(data)));
  }
  estimateMultiHopSwap(
    request: QueryEstimateMultiHopSwapRequest,
  ): Promise<QueryEstimateMultiHopSwapResponse> {
    const data = QueryEstimateMultiHopSwapRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "EstimateMultiHopSwap", data);
    return promise.then((data) => QueryEstimateMultiHopSwapResponse.decode(new BinaryReader(data)));
  }
  estimatePlaceLimitOrder(
    request: QueryEstimatePlaceLimitOrderRequest,
  ): Promise<QueryEstimatePlaceLimitOrderResponse> {
    const data = QueryEstimatePlaceLimitOrderRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "EstimatePlaceLimitOrder", data);
    return promise.then((data) => QueryEstimatePlaceLimitOrderResponse.decode(new BinaryReader(data)));
  }
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "Pool", data);
    return promise.then((data) => QueryPoolResponse.decode(new BinaryReader(data)));
  }
  poolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolByIDRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "PoolByID", data);
    return promise.then((data) => QueryPoolResponse.decode(new BinaryReader(data)));
  }
  poolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse> {
    const data = QueryGetPoolMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "PoolMetadata", data);
    return promise.then((data) => QueryGetPoolMetadataResponse.decode(new BinaryReader(data)));
  }
  poolMetadataAll(
    request: QueryAllPoolMetadataRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryAllPoolMetadataResponse> {
    const data = QueryAllPoolMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "PoolMetadataAll", data);
    return promise.then((data) => QueryAllPoolMetadataResponse.decode(new BinaryReader(data)));
  }
  simulateDeposit(request: QuerySimulateDepositRequest): Promise<QuerySimulateDepositResponse> {
    const data = QuerySimulateDepositRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "SimulateDeposit", data);
    return promise.then((data) => QuerySimulateDepositResponse.decode(new BinaryReader(data)));
  }
  simulateWithdrawal(request: QuerySimulateWithdrawalRequest): Promise<QuerySimulateWithdrawalResponse> {
    const data = QuerySimulateWithdrawalRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "SimulateWithdrawal", data);
    return promise.then((data) => QuerySimulateWithdrawalResponse.decode(new BinaryReader(data)));
  }
  simulatePlaceLimitOrder(
    request: QuerySimulatePlaceLimitOrderRequest,
  ): Promise<QuerySimulatePlaceLimitOrderResponse> {
    const data = QuerySimulatePlaceLimitOrderRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "SimulatePlaceLimitOrder", data);
    return promise.then((data) => QuerySimulatePlaceLimitOrderResponse.decode(new BinaryReader(data)));
  }
  simulateWithdrawFilledLimitOrder(
    request: QuerySimulateWithdrawFilledLimitOrderRequest,
  ): Promise<QuerySimulateWithdrawFilledLimitOrderResponse> {
    const data = QuerySimulateWithdrawFilledLimitOrderRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "SimulateWithdrawFilledLimitOrder", data);
    return promise.then((data) =>
      QuerySimulateWithdrawFilledLimitOrderResponse.decode(new BinaryReader(data)),
    );
  }
  simulateCancelLimitOrder(
    request: QuerySimulateCancelLimitOrderRequest,
  ): Promise<QuerySimulateCancelLimitOrderResponse> {
    const data = QuerySimulateCancelLimitOrderRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "SimulateCancelLimitOrder", data);
    return promise.then((data) => QuerySimulateCancelLimitOrderResponse.decode(new BinaryReader(data)));
  }
  simulateMultiHopSwap(
    request: QuerySimulateMultiHopSwapRequest,
  ): Promise<QuerySimulateMultiHopSwapResponse> {
    const data = QuerySimulateMultiHopSwapRequest.encode(request).finish();
    const promise = this.rpc.request("neutron.dex.Query", "SimulateMultiHopSwap", data);
    return promise.then((data) => QuerySimulateMultiHopSwapResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    limitOrderTrancheUser(
      request: QueryGetLimitOrderTrancheUserRequest,
    ): Promise<QueryGetLimitOrderTrancheUserResponse> {
      return queryService.limitOrderTrancheUser(request);
    },
    limitOrderTrancheUserAll(
      request?: QueryAllLimitOrderTrancheUserRequest,
    ): Promise<QueryAllLimitOrderTrancheUserResponse> {
      return queryService.limitOrderTrancheUserAll(request);
    },
    limitOrderTrancheUserAllByAddress(
      request: QueryAllLimitOrderTrancheUserByAddressRequest,
    ): Promise<QueryAllLimitOrderTrancheUserByAddressResponse> {
      return queryService.limitOrderTrancheUserAllByAddress(request);
    },
    limitOrderTranche(request: QueryGetLimitOrderTrancheRequest): Promise<QueryGetLimitOrderTrancheResponse> {
      return queryService.limitOrderTranche(request);
    },
    limitOrderTrancheAll(
      request: QueryAllLimitOrderTrancheRequest,
    ): Promise<QueryAllLimitOrderTrancheResponse> {
      return queryService.limitOrderTrancheAll(request);
    },
    userDepositsAll(request: QueryAllUserDepositsRequest): Promise<QueryAllUserDepositsResponse> {
      return queryService.userDepositsAll(request);
    },
    tickLiquidityAll(request: QueryAllTickLiquidityRequest): Promise<QueryAllTickLiquidityResponse> {
      return queryService.tickLiquidityAll(request);
    },
    inactiveLimitOrderTranche(
      request: QueryGetInactiveLimitOrderTrancheRequest,
    ): Promise<QueryGetInactiveLimitOrderTrancheResponse> {
      return queryService.inactiveLimitOrderTranche(request);
    },
    inactiveLimitOrderTrancheAll(
      request?: QueryAllInactiveLimitOrderTrancheRequest,
    ): Promise<QueryAllInactiveLimitOrderTrancheResponse> {
      return queryService.inactiveLimitOrderTrancheAll(request);
    },
    poolReservesAll(request: QueryAllPoolReservesRequest): Promise<QueryAllPoolReservesResponse> {
      return queryService.poolReservesAll(request);
    },
    poolReserves(request: QueryGetPoolReservesRequest): Promise<QueryGetPoolReservesResponse> {
      return queryService.poolReserves(request);
    },
    estimateMultiHopSwap(
      request: QueryEstimateMultiHopSwapRequest,
    ): Promise<QueryEstimateMultiHopSwapResponse> {
      return queryService.estimateMultiHopSwap(request);
    },
    estimatePlaceLimitOrder(
      request: QueryEstimatePlaceLimitOrderRequest,
    ): Promise<QueryEstimatePlaceLimitOrderResponse> {
      return queryService.estimatePlaceLimitOrder(request);
    },
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },
    poolByID(request: QueryPoolByIDRequest): Promise<QueryPoolResponse> {
      return queryService.poolByID(request);
    },
    poolMetadata(request: QueryGetPoolMetadataRequest): Promise<QueryGetPoolMetadataResponse> {
      return queryService.poolMetadata(request);
    },
    poolMetadataAll(request?: QueryAllPoolMetadataRequest): Promise<QueryAllPoolMetadataResponse> {
      return queryService.poolMetadataAll(request);
    },
    simulateDeposit(request: QuerySimulateDepositRequest): Promise<QuerySimulateDepositResponse> {
      return queryService.simulateDeposit(request);
    },
    simulateWithdrawal(request: QuerySimulateWithdrawalRequest): Promise<QuerySimulateWithdrawalResponse> {
      return queryService.simulateWithdrawal(request);
    },
    simulatePlaceLimitOrder(
      request: QuerySimulatePlaceLimitOrderRequest,
    ): Promise<QuerySimulatePlaceLimitOrderResponse> {
      return queryService.simulatePlaceLimitOrder(request);
    },
    simulateWithdrawFilledLimitOrder(
      request: QuerySimulateWithdrawFilledLimitOrderRequest,
    ): Promise<QuerySimulateWithdrawFilledLimitOrderResponse> {
      return queryService.simulateWithdrawFilledLimitOrder(request);
    },
    simulateCancelLimitOrder(
      request: QuerySimulateCancelLimitOrderRequest,
    ): Promise<QuerySimulateCancelLimitOrderResponse> {
      return queryService.simulateCancelLimitOrder(request);
    },
    simulateMultiHopSwap(
      request: QuerySimulateMultiHopSwapRequest,
    ): Promise<QuerySimulateMultiHopSwapResponse> {
      return queryService.simulateMultiHopSwap(request);
    },
  };
};
