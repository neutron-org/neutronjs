"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
//@ts-nocheck
/* eslint-disable */
const pagination_js_1 = require("../../cosmos/base/query/v1beta1/pagination.js");
const binary_js_1 = require("../../binary.js");
const stargate_1 = require("@cosmjs/stargate");
const query_js_1 = require("./query.js");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
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
        this.simulateWithdrawalWithShares = this.simulateWithdrawalWithShares.bind(this);
        this.simulatePlaceLimitOrder = this.simulatePlaceLimitOrder.bind(this);
        this.simulateWithdrawFilledLimitOrder = this.simulateWithdrawFilledLimitOrder.bind(this);
        this.simulateCancelLimitOrder = this.simulateCancelLimitOrder.bind(this);
        this.simulateMultiHopSwap = this.simulateMultiHopSwap.bind(this);
    }
    params(request = {}) {
        const data = query_js_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "Params", data);
        return promise.then((data) => query_js_1.QueryParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    limitOrderTrancheUser(request) {
        const data = query_js_1.QueryGetLimitOrderTrancheUserRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheUser", data);
        return promise.then((data) => query_js_1.QueryGetLimitOrderTrancheUserResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    limitOrderTrancheUserAll(request = {
        pagination: pagination_js_1.PageRequest.fromPartial({}),
    }) {
        const data = query_js_1.QueryAllLimitOrderTrancheUserRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheUserAll", data);
        return promise.then((data) => query_js_1.QueryAllLimitOrderTrancheUserResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    limitOrderTrancheUserAllByAddress(request) {
        const data = query_js_1.QueryAllLimitOrderTrancheUserByAddressRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheUserAllByAddress", data);
        return promise.then((data) => query_js_1.QueryAllLimitOrderTrancheUserByAddressResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    limitOrderTranche(request) {
        const data = query_js_1.QueryGetLimitOrderTrancheRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTranche", data);
        return promise.then((data) => query_js_1.QueryGetLimitOrderTrancheResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    limitOrderTrancheAll(request) {
        const data = query_js_1.QueryAllLimitOrderTrancheRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "LimitOrderTrancheAll", data);
        return promise.then((data) => query_js_1.QueryAllLimitOrderTrancheResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    userDepositsAll(request) {
        const data = query_js_1.QueryAllUserDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "UserDepositsAll", data);
        return promise.then((data) => query_js_1.QueryAllUserDepositsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    tickLiquidityAll(request) {
        const data = query_js_1.QueryAllTickLiquidityRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "TickLiquidityAll", data);
        return promise.then((data) => query_js_1.QueryAllTickLiquidityResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    inactiveLimitOrderTranche(request) {
        const data = query_js_1.QueryGetInactiveLimitOrderTrancheRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "InactiveLimitOrderTranche", data);
        return promise.then((data) => query_js_1.QueryGetInactiveLimitOrderTrancheResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    inactiveLimitOrderTrancheAll(request = {
        pagination: pagination_js_1.PageRequest.fromPartial({}),
    }) {
        const data = query_js_1.QueryAllInactiveLimitOrderTrancheRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "InactiveLimitOrderTrancheAll", data);
        return promise.then((data) => query_js_1.QueryAllInactiveLimitOrderTrancheResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    poolReservesAll(request) {
        const data = query_js_1.QueryAllPoolReservesRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "PoolReservesAll", data);
        return promise.then((data) => query_js_1.QueryAllPoolReservesResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    poolReserves(request) {
        const data = query_js_1.QueryGetPoolReservesRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "PoolReserves", data);
        return promise.then((data) => query_js_1.QueryGetPoolReservesResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    estimateMultiHopSwap(request) {
        const data = query_js_1.QueryEstimateMultiHopSwapRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "EstimateMultiHopSwap", data);
        return promise.then((data) => query_js_1.QueryEstimateMultiHopSwapResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    estimatePlaceLimitOrder(request) {
        const data = query_js_1.QueryEstimatePlaceLimitOrderRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "EstimatePlaceLimitOrder", data);
        return promise.then((data) => query_js_1.QueryEstimatePlaceLimitOrderResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    pool(request) {
        const data = query_js_1.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "Pool", data);
        return promise.then((data) => query_js_1.QueryPoolResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    poolByID(request) {
        const data = query_js_1.QueryPoolByIDRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "PoolByID", data);
        return promise.then((data) => query_js_1.QueryPoolResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    poolMetadata(request) {
        const data = query_js_1.QueryGetPoolMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "PoolMetadata", data);
        return promise.then((data) => query_js_1.QueryGetPoolMetadataResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    poolMetadataAll(request = {
        pagination: pagination_js_1.PageRequest.fromPartial({}),
    }) {
        const data = query_js_1.QueryAllPoolMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "PoolMetadataAll", data);
        return promise.then((data) => query_js_1.QueryAllPoolMetadataResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    simulateDeposit(request) {
        const data = query_js_1.QuerySimulateDepositRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "SimulateDeposit", data);
        return promise.then((data) => query_js_1.QuerySimulateDepositResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    simulateWithdrawal(request) {
        const data = query_js_1.QuerySimulateWithdrawalRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "SimulateWithdrawal", data);
        return promise.then((data) => query_js_1.QuerySimulateWithdrawalResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    simulateWithdrawalWithShares(request) {
        const data = query_js_1.QuerySimulateWithdrawalWithSharesRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "SimulateWithdrawalWithShares", data);
        return promise.then((data) => query_js_1.QuerySimulateWithdrawalResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    simulatePlaceLimitOrder(request) {
        const data = query_js_1.QuerySimulatePlaceLimitOrderRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "SimulatePlaceLimitOrder", data);
        return promise.then((data) => query_js_1.QuerySimulatePlaceLimitOrderResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    simulateWithdrawFilledLimitOrder(request) {
        const data = query_js_1.QuerySimulateWithdrawFilledLimitOrderRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "SimulateWithdrawFilledLimitOrder", data);
        return promise.then((data) => query_js_1.QuerySimulateWithdrawFilledLimitOrderResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    simulateCancelLimitOrder(request) {
        const data = query_js_1.QuerySimulateCancelLimitOrderRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "SimulateCancelLimitOrder", data);
        return promise.then((data) => query_js_1.QuerySimulateCancelLimitOrderResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    simulateMultiHopSwap(request) {
        const data = query_js_1.QuerySimulateMultiHopSwapRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Query", "SimulateMultiHopSwap", data);
        return promise.then((data) => query_js_1.QuerySimulateMultiHopSwapResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        limitOrderTrancheUser(request) {
            return queryService.limitOrderTrancheUser(request);
        },
        limitOrderTrancheUserAll(request) {
            return queryService.limitOrderTrancheUserAll(request);
        },
        limitOrderTrancheUserAllByAddress(request) {
            return queryService.limitOrderTrancheUserAllByAddress(request);
        },
        limitOrderTranche(request) {
            return queryService.limitOrderTranche(request);
        },
        limitOrderTrancheAll(request) {
            return queryService.limitOrderTrancheAll(request);
        },
        userDepositsAll(request) {
            return queryService.userDepositsAll(request);
        },
        tickLiquidityAll(request) {
            return queryService.tickLiquidityAll(request);
        },
        inactiveLimitOrderTranche(request) {
            return queryService.inactiveLimitOrderTranche(request);
        },
        inactiveLimitOrderTrancheAll(request) {
            return queryService.inactiveLimitOrderTrancheAll(request);
        },
        poolReservesAll(request) {
            return queryService.poolReservesAll(request);
        },
        poolReserves(request) {
            return queryService.poolReserves(request);
        },
        estimateMultiHopSwap(request) {
            return queryService.estimateMultiHopSwap(request);
        },
        estimatePlaceLimitOrder(request) {
            return queryService.estimatePlaceLimitOrder(request);
        },
        pool(request) {
            return queryService.pool(request);
        },
        poolByID(request) {
            return queryService.poolByID(request);
        },
        poolMetadata(request) {
            return queryService.poolMetadata(request);
        },
        poolMetadataAll(request) {
            return queryService.poolMetadataAll(request);
        },
        simulateDeposit(request) {
            return queryService.simulateDeposit(request);
        },
        simulateWithdrawal(request) {
            return queryService.simulateWithdrawal(request);
        },
        simulateWithdrawalWithShares(request) {
            return queryService.simulateWithdrawalWithShares(request);
        },
        simulatePlaceLimitOrder(request) {
            return queryService.simulatePlaceLimitOrder(request);
        },
        simulateWithdrawFilledLimitOrder(request) {
            return queryService.simulateWithdrawFilledLimitOrder(request);
        },
        simulateCancelLimitOrder(request) {
            return queryService.simulateCancelLimitOrder(request);
        },
        simulateMultiHopSwap(request) {
            return queryService.simulateMultiHopSwap(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map