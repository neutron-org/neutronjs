"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
//@ts-nocheck
/* eslint-disable */
const pagination_js_1 = require("../../cosmos/base/query/v1beta1/pagination.js");
const binary_js_1 = require("../../binary.js");
const stargate_1 = require("@cosmjs/stargate");
const query_js_1 = require("./query.js");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.schedule = this.schedule.bind(this);
        this.schedules = this.schedules.bind(this);
    }
    params(request = {}) {
        const data = query_js_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.cron.Query", "Params", data);
        return promise.then((data) => query_js_1.QueryParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    schedule(request) {
        const data = query_js_1.QueryGetScheduleRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.cron.Query", "Schedule", data);
        return promise.then((data) => query_js_1.QueryGetScheduleResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    schedules(request = {
        pagination: pagination_js_1.PageRequest.fromPartial({}),
    }) {
        const data = query_js_1.QuerySchedulesRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.cron.Query", "Schedules", data);
        return promise.then((data) => query_js_1.QuerySchedulesResponse.decode(new binary_js_1.BinaryReader(data)));
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
        schedule(request) {
            return queryService.schedule(request);
        },
        schedules(request) {
            return queryService.schedules(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map