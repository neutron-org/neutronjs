"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
//@ts-nocheck
/* eslint-disable */
const pagination_js_1 = require("../../../../cosmos/base/query/v1beta1/pagination.js");
const binary_js_1 = require("../../../../binary.js");
const stargate_1 = require("@cosmjs/stargate");
const query_js_1 = require("./query.js");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.denoms = this.denoms.bind(this);
        this.denom = this.denom.bind(this);
        this.denomHash = this.denomHash.bind(this);
        this.escrowAddress = this.escrowAddress.bind(this);
        this.totalEscrowForDenom = this.totalEscrowForDenom.bind(this);
    }
    params(request = {}) {
        const data = query_js_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
        return promise.then((data) => query_js_1.QueryParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    denoms(request = {
        pagination: pagination_js_1.PageRequest.fromPartial({}),
    }) {
        const data = query_js_1.QueryDenomsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Denoms", data);
        return promise.then((data) => query_js_1.QueryDenomsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    denom(request) {
        const data = query_js_1.QueryDenomRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Denom", data);
        return promise.then((data) => query_js_1.QueryDenomResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    denomHash(request) {
        const data = query_js_1.QueryDenomHashRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomHash", data);
        return promise.then((data) => query_js_1.QueryDenomHashResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    escrowAddress(request) {
        const data = query_js_1.QueryEscrowAddressRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "EscrowAddress", data);
        return promise.then((data) => query_js_1.QueryEscrowAddressResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    totalEscrowForDenom(request) {
        const data = query_js_1.QueryTotalEscrowForDenomRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "TotalEscrowForDenom", data);
        return promise.then((data) => query_js_1.QueryTotalEscrowForDenomResponse.decode(new binary_js_1.BinaryReader(data)));
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
        denoms(request) {
            return queryService.denoms(request);
        },
        denom(request) {
            return queryService.denom(request);
        },
        denomHash(request) {
            return queryService.denomHash(request);
        },
        escrowAddress(request) {
            return queryService.escrowAddress(request);
        },
        totalEscrowForDenom(request) {
            return queryService.totalEscrowForDenom(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map