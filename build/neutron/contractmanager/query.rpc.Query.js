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
        this.params = this.params.bind(this);
        this.addressFailure = this.addressFailure.bind(this);
        this.addressFailures = this.addressFailures.bind(this);
        this.failures = this.failures.bind(this);
    }
    params(request = {}) {
        const data = query_js_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.contractmanager.Query", "Params", data);
        return promise.then((data) => query_js_1.QueryParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    addressFailure(request) {
        const data = query_js_1.QueryFailureRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.contractmanager.Query", "AddressFailure", data);
        return promise.then((data) => query_js_1.QueryFailureResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    addressFailures(request) {
        const data = query_js_1.QueryFailuresRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.contractmanager.Query", "AddressFailures", data);
        return promise.then((data) => query_js_1.QueryFailuresResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    failures(request) {
        const data = query_js_1.QueryFailuresRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.contractmanager.Query", "Failures", data);
        return promise.then((data) => query_js_1.QueryFailuresResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        addressFailure(request) {
            return queryService.addressFailure(request);
        },
        addressFailures(request) {
            return queryService.addressFailures(request);
        },
        failures(request) {
            return queryService.failures(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map