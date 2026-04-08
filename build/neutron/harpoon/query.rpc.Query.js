"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_js_1 = require("../../binary.js");
const stargate_1 = require("@cosmjs/stargate");
const query_js_1 = require("./query.js");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.subscribedContracts = this.subscribedContracts.bind(this);
    }
    subscribedContracts(request) {
        const data = query_js_1.QuerySubscribedContractsRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.harpoon.Query", "SubscribedContracts", data);
        return promise.then((data) => query_js_1.QuerySubscribedContractsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        subscribedContracts(request) {
            return queryService.subscribedContracts(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map