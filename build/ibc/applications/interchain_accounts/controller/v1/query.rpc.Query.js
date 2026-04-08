"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_js_1 = require("../../../../../binary.js");
const stargate_1 = require("@cosmjs/stargate");
const query_js_1 = require("./query.js");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.interchainAccount = this.interchainAccount.bind(this);
        this.params = this.params.bind(this);
    }
    interchainAccount(request) {
        const data = query_js_1.QueryInterchainAccountRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Query", "InterchainAccount", data);
        return promise.then((data) => query_js_1.QueryInterchainAccountResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_js_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Query", "Params", data);
        return promise.then((data) => query_js_1.QueryParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        interchainAccount(request) {
            return queryService.interchainAccount(request);
        },
        params(request) {
            return queryService.params(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map