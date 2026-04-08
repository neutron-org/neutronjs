"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const stargate_1 = require("@cosmjs/stargate");
const query_js_1 = require("./query.js");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.state = this.state.bind(this);
        this.gasPrice = this.gasPrice.bind(this);
        this.gasPrices = this.gasPrices.bind(this);
    }
    params(request = {}) {
        const data = query_js_1.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("feemarket.feemarket.v1.Query", "Params", data);
        return promise.then((data) => query_js_1.ParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    state(request = {}) {
        const data = query_js_1.StateRequest.encode(request).finish();
        const promise = this.rpc.request("feemarket.feemarket.v1.Query", "State", data);
        return promise.then((data) => query_js_1.StateResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    gasPrice(request) {
        const data = query_js_1.GasPriceRequest.encode(request).finish();
        const promise = this.rpc.request("feemarket.feemarket.v1.Query", "GasPrice", data);
        return promise.then((data) => query_js_1.GasPriceResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    gasPrices(request = {}) {
        const data = query_js_1.GasPricesRequest.encode(request).finish();
        const promise = this.rpc.request("feemarket.feemarket.v1.Query", "GasPrices", data);
        return promise.then((data) => query_js_1.GasPricesResponse.decode(new binary_js_1.BinaryReader(data)));
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
        state(request) {
            return queryService.state(request);
        },
        gasPrice(request) {
            return queryService.gasPrice(request);
        },
        gasPrices(request) {
            return queryService.gasPrices(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map