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
        this.registeredQueries = this.registeredQueries.bind(this);
        this.registeredQuery = this.registeredQuery.bind(this);
        this.queryResult = this.queryResult.bind(this);
        this.lastRemoteHeight = this.lastRemoteHeight.bind(this);
    }
    params(request = {}) {
        const data = query_js_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.interchainqueries.Query", "Params", data);
        return promise.then((data) => query_js_1.QueryParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    registeredQueries(request) {
        const data = query_js_1.QueryRegisteredQueriesRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.interchainqueries.Query", "RegisteredQueries", data);
        return promise.then((data) => query_js_1.QueryRegisteredQueriesResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    registeredQuery(request) {
        const data = query_js_1.QueryRegisteredQueryRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.interchainqueries.Query", "RegisteredQuery", data);
        return promise.then((data) => query_js_1.QueryRegisteredQueryResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    queryResult(request) {
        const data = query_js_1.QueryRegisteredQueryResultRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.interchainqueries.Query", "QueryResult", data);
        return promise.then((data) => query_js_1.QueryRegisteredQueryResultResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    lastRemoteHeight(request) {
        const data = query_js_1.QueryLastRemoteHeight.encode(request).finish();
        const promise = this.rpc.request("neutron.interchainqueries.Query", "LastRemoteHeight", data);
        return promise.then((data) => query_js_1.QueryLastRemoteHeightResponse.decode(new binary_js_1.BinaryReader(data)));
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
        registeredQueries(request) {
            return queryService.registeredQueries(request);
        },
        registeredQuery(request) {
            return queryService.registeredQuery(request);
        },
        queryResult(request) {
            return queryService.queryResult(request);
        },
        lastRemoteHeight(request) {
            return queryService.lastRemoteHeight(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map