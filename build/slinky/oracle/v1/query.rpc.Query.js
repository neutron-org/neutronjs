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
        this.getAllCurrencyPairs = this.getAllCurrencyPairs.bind(this);
        this.getPrice = this.getPrice.bind(this);
        this.getPrices = this.getPrices.bind(this);
        this.getCurrencyPairMapping = this.getCurrencyPairMapping.bind(this);
        this.getCurrencyPairMappingList = this.getCurrencyPairMappingList.bind(this);
    }
    getAllCurrencyPairs(request = {}) {
        const data = query_js_1.GetAllCurrencyPairsRequest.encode(request).finish();
        const promise = this.rpc.request("slinky.oracle.v1.Query", "GetAllCurrencyPairs", data);
        return promise.then((data) => query_js_1.GetAllCurrencyPairsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    getPrice(request) {
        const data = query_js_1.GetPriceRequest.encode(request).finish();
        const promise = this.rpc.request("slinky.oracle.v1.Query", "GetPrice", data);
        return promise.then((data) => query_js_1.GetPriceResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    getPrices(request) {
        const data = query_js_1.GetPricesRequest.encode(request).finish();
        const promise = this.rpc.request("slinky.oracle.v1.Query", "GetPrices", data);
        return promise.then((data) => query_js_1.GetPricesResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    getCurrencyPairMapping(request = {}) {
        const data = query_js_1.GetCurrencyPairMappingRequest.encode(request).finish();
        const promise = this.rpc.request("slinky.oracle.v1.Query", "GetCurrencyPairMapping", data);
        return promise.then((data) => query_js_1.GetCurrencyPairMappingResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    getCurrencyPairMappingList(request = {}) {
        const data = query_js_1.GetCurrencyPairMappingListRequest.encode(request).finish();
        const promise = this.rpc.request("slinky.oracle.v1.Query", "GetCurrencyPairMappingList", data);
        return promise.then((data) => query_js_1.GetCurrencyPairMappingListResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        getAllCurrencyPairs(request) {
            return queryService.getAllCurrencyPairs(request);
        },
        getPrice(request) {
            return queryService.getPrice(request);
        },
        getPrices(request) {
            return queryService.getPrices(request);
        },
        getCurrencyPairMapping(request) {
            return queryService.getCurrencyPairMapping(request);
        },
        getCurrencyPairMappingList(request) {
            return queryService.getCurrencyPairMappingList(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map