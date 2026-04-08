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
        this.communityPool = this.communityPool.bind(this);
        this.continuousFund = this.continuousFund.bind(this);
        this.continuousFunds = this.continuousFunds.bind(this);
        this.params = this.params.bind(this);
    }
    communityPool(request = {}) {
        const data = query_js_1.QueryCommunityPoolRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "CommunityPool", data);
        return promise.then((data) => query_js_1.QueryCommunityPoolResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    continuousFund(request) {
        const data = query_js_1.QueryContinuousFundRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "ContinuousFund", data);
        return promise.then((data) => query_js_1.QueryContinuousFundResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    continuousFunds(request = {}) {
        const data = query_js_1.QueryContinuousFundsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "ContinuousFunds", data);
        return promise.then((data) => query_js_1.QueryContinuousFundsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_js_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.protocolpool.v1.Query", "Params", data);
        return promise.then((data) => query_js_1.QueryParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        communityPool(request) {
            return queryService.communityPool(request);
        },
        continuousFund(request) {
            return queryService.continuousFund(request);
        },
        continuousFunds(request) {
            return queryService.continuousFunds(request);
        },
        params(request) {
            return queryService.params(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map