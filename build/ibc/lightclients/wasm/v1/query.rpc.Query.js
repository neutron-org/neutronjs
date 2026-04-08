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
        this.checksums = this.checksums.bind(this);
        this.code = this.code.bind(this);
    }
    checksums(request = {
        pagination: pagination_js_1.PageRequest.fromPartial({}),
    }) {
        const data = query_js_1.QueryChecksumsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.lightclients.wasm.v1.Query", "Checksums", data);
        return promise.then((data) => query_js_1.QueryChecksumsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    code(request) {
        const data = query_js_1.QueryCodeRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.lightclients.wasm.v1.Query", "Code", data);
        return promise.then((data) => query_js_1.QueryCodeResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        checksums(request) {
            return queryService.checksums(request);
        },
        code(request) {
            return queryService.code(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map