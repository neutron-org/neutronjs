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
        this.verifyStateValues = this.verifyStateValues.bind(this);
        this.queryConsensusState = this.queryConsensusState.bind(this);
    }
    verifyStateValues(request) {
        const data = query_js_1.QueryVerifyStateValuesRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.state_verifier.v1.Query", "VerifyStateValues", data);
        return promise.then((data) => query_js_1.QueryVerifyStateValuesResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    queryConsensusState(request) {
        const data = query_js_1.QueryConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.state_verifier.v1.Query", "QueryConsensusState", data);
        return promise.then((data) => query_js_1.QueryConsensusStateResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        verifyStateValues(request) {
            return queryService.verifyStateValues(request);
        },
        queryConsensusState(request) {
            return queryService.queryConsensusState(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map