"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
//@ts-nocheck
/* eslint-disable */
const pagination_js_1 = require("../../base/query/v1beta1/pagination.js");
const binary_js_1 = require("../../../binary.js");
const stargate_1 = require("@cosmjs/stargate");
const query_js_1 = require("./query.js");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.balance = this.balance.bind(this);
        this.owner = this.owner.bind(this);
        this.supply = this.supply.bind(this);
        this.nFTs = this.nFTs.bind(this);
        this.nFT = this.nFT.bind(this);
        this.class = this.class.bind(this);
        this.classes = this.classes.bind(this);
    }
    balance(request) {
        const data = query_js_1.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Balance", data);
        return promise.then((data) => query_js_1.QueryBalanceResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    owner(request) {
        const data = query_js_1.QueryOwnerRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Owner", data);
        return promise.then((data) => query_js_1.QueryOwnerResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    supply(request) {
        const data = query_js_1.QuerySupplyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Supply", data);
        return promise.then((data) => query_js_1.QuerySupplyResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    nFTs(request) {
        const data = query_js_1.QueryNFTsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFTs", data);
        return promise.then((data) => query_js_1.QueryNFTsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    nFT(request) {
        const data = query_js_1.QueryNFTRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "NFT", data);
        return promise.then((data) => query_js_1.QueryNFTResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    class(request) {
        const data = query_js_1.QueryClassRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Class", data);
        return promise.then((data) => query_js_1.QueryClassResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    classes(request = {
        pagination: pagination_js_1.PageRequest.fromPartial({}),
    }) {
        const data = query_js_1.QueryClassesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Query", "Classes", data);
        return promise.then((data) => query_js_1.QueryClassesResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        balance(request) {
            return queryService.balance(request);
        },
        owner(request) {
            return queryService.owner(request);
        },
        supply(request) {
            return queryService.supply(request);
        },
        nFTs(request) {
            return queryService.nFTs(request);
        },
        nFT(request) {
            return queryService.nFT(request);
        },
        class(request) {
            return queryService.class(request);
        },
        classes(request) {
            return queryService.classes(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map