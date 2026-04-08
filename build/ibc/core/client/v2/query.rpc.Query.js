"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_js_1 = require("../../../../binary.js");
const stargate_1 = require("@cosmjs/stargate");
const query_js_1 = require("./query.js");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.counterpartyInfo = this.counterpartyInfo.bind(this);
        this.config = this.config.bind(this);
    }
    counterpartyInfo(request) {
        const data = query_js_1.QueryCounterpartyInfoRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v2.Query", "CounterpartyInfo", data);
        return promise.then((data) => query_js_1.QueryCounterpartyInfoResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    config(request) {
        const data = query_js_1.QueryConfigRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v2.Query", "Config", data);
        return promise.then((data) => query_js_1.QueryConfigResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        counterpartyInfo(request) {
            return queryService.counterpartyInfo(request);
        },
        config(request) {
            return queryService.config(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map