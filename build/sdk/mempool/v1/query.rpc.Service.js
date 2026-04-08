"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.ServiceClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const stargate_1 = require("@cosmjs/stargate");
const query_js_1 = require("./query.js");
class ServiceClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.getTxDistribution = this.getTxDistribution.bind(this);
    }
    getTxDistribution(request = {}) {
        const data = query_js_1.GetTxDistributionRequest.encode(request).finish();
        const promise = this.rpc.request("sdk.mempool.v1.Service", "GetTxDistribution", data);
        return promise.then((data) => query_js_1.GetTxDistributionResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new ServiceClientImpl(rpc);
    return {
        getTxDistribution(request) {
            return queryService.getTxDistribution(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Service.js.map