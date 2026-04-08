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
        this.config = this.config.bind(this);
    }
    config(request = {}) {
        const data = query_js_1.QueryConfigRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.app.v1alpha1.Query", "Config", data);
        return promise.then((data) => query_js_1.QueryConfigResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        config(request) {
            return queryService.config(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map