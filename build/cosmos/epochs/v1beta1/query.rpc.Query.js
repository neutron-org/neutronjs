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
        this.epochInfos = this.epochInfos.bind(this);
        this.currentEpoch = this.currentEpoch.bind(this);
    }
    epochInfos(request = {}) {
        const data = query_js_1.QueryEpochInfosRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.epochs.v1beta1.Query", "EpochInfos", data);
        return promise.then((data) => query_js_1.QueryEpochInfosResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    currentEpoch(request) {
        const data = query_js_1.QueryCurrentEpochRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.epochs.v1beta1.Query", "CurrentEpoch", data);
        return promise.then((data) => query_js_1.QueryCurrentEpochResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        epochInfos(request) {
            return queryService.epochInfos(request);
        },
        currentEpoch(request) {
            return queryService.currentEpoch(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map