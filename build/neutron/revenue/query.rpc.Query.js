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
        this.paymentInfo = this.paymentInfo.bind(this);
        this.validatorStats = this.validatorStats.bind(this);
        this.validatorsStats = this.validatorsStats.bind(this);
    }
    params(request = {}) {
        const data = query_js_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.revenue.Query", "Params", data);
        return promise.then((data) => query_js_1.QueryParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    paymentInfo(request = {}) {
        const data = query_js_1.QueryPaymentInfoRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.revenue.Query", "PaymentInfo", data);
        return promise.then((data) => query_js_1.QueryPaymentInfoResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    validatorStats(request) {
        const data = query_js_1.QueryValidatorStatsRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.revenue.Query", "ValidatorStats", data);
        return promise.then((data) => query_js_1.QueryValidatorStatsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    validatorsStats(request = {}) {
        const data = query_js_1.QueryValidatorsStatsRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.revenue.Query", "ValidatorsStats", data);
        return promise.then((data) => query_js_1.QueryValidatorsStatsResponse.decode(new binary_js_1.BinaryReader(data)));
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
        paymentInfo(request) {
            return queryService.paymentInfo(request);
        },
        validatorStats(request) {
            return queryService.validatorStats(request);
        },
        validatorsStats(request) {
            return queryService.validatorsStats(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map