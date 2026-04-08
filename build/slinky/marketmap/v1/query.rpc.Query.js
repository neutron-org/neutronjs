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
        this.marketMap = this.marketMap.bind(this);
        this.markets = this.markets.bind(this);
        this.market = this.market.bind(this);
        this.lastUpdated = this.lastUpdated.bind(this);
        this.params = this.params.bind(this);
    }
    marketMap(request = {}) {
        const data = query_js_1.MarketMapRequest.encode(request).finish();
        const promise = this.rpc.request("slinky.marketmap.v1.Query", "MarketMap", data);
        return promise.then((data) => query_js_1.MarketMapResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    markets(request = {}) {
        const data = query_js_1.MarketsRequest.encode(request).finish();
        const promise = this.rpc.request("slinky.marketmap.v1.Query", "Markets", data);
        return promise.then((data) => query_js_1.MarketsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    market(request) {
        const data = query_js_1.MarketRequest.encode(request).finish();
        const promise = this.rpc.request("slinky.marketmap.v1.Query", "Market", data);
        return promise.then((data) => query_js_1.MarketResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    lastUpdated(request = {}) {
        const data = query_js_1.LastUpdatedRequest.encode(request).finish();
        const promise = this.rpc.request("slinky.marketmap.v1.Query", "LastUpdated", data);
        return promise.then((data) => query_js_1.LastUpdatedResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_js_1.ParamsRequest.encode(request).finish();
        const promise = this.rpc.request("slinky.marketmap.v1.Query", "Params", data);
        return promise.then((data) => query_js_1.ParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        marketMap(request) {
            return queryService.marketMap(request);
        },
        markets(request) {
            return queryService.markets(request);
        },
        market(request) {
            return queryService.market(request);
        },
        lastUpdated(request) {
            return queryService.lastUpdated(request);
        },
        params(request) {
            return queryService.params(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map