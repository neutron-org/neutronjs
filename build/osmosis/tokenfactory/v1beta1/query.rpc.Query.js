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
        this.params = this.params.bind(this);
        this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
        this.denomsFromCreator = this.denomsFromCreator.bind(this);
        this.beforeSendHookAddress = this.beforeSendHookAddress.bind(this);
        this.fullDenom = this.fullDenom.bind(this);
    }
    params(request = {}) {
        const data = query_js_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "Params", data);
        return promise.then((data) => query_js_1.QueryParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    denomAuthorityMetadata(request) {
        const data = query_js_1.QueryDenomAuthorityMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomAuthorityMetadata", data);
        return promise.then((data) => query_js_1.QueryDenomAuthorityMetadataResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    denomsFromCreator(request) {
        const data = query_js_1.QueryDenomsFromCreatorRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "DenomsFromCreator", data);
        return promise.then((data) => query_js_1.QueryDenomsFromCreatorResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    beforeSendHookAddress(request) {
        const data = query_js_1.QueryBeforeSendHookAddressRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "BeforeSendHookAddress", data);
        return promise.then((data) => query_js_1.QueryBeforeSendHookAddressResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    fullDenom(request) {
        const data = query_js_1.QueryFullDenomRequest.encode(request).finish();
        const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Query", "FullDenom", data);
        return promise.then((data) => query_js_1.QueryFullDenomResponse.decode(new binary_js_1.BinaryReader(data)));
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
        denomAuthorityMetadata(request) {
            return queryService.denomAuthorityMetadata(request);
        },
        denomsFromCreator(request) {
            return queryService.denomsFromCreator(request);
        },
        beforeSendHookAddress(request) {
            return queryService.beforeSendHookAddress(request);
        },
        fullDenom(request) {
            return queryService.fullDenom(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map