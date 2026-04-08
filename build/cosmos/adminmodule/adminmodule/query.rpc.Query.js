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
        this.admins = this.admins.bind(this);
        this.archivedProposals = this.archivedProposals.bind(this);
        this.archivedProposalsLegacy = this.archivedProposalsLegacy.bind(this);
    }
    admins(request = {}) {
        const data = query_js_1.QueryAdminsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Query", "Admins", data);
        return promise.then((data) => query_js_1.QueryAdminsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    archivedProposals(request = {}) {
        const data = query_js_1.QueryArchivedProposalsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Query", "ArchivedProposals", data);
        return promise.then((data) => query_js_1.QueryArchivedProposalsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    archivedProposalsLegacy(request = {}) {
        const data = query_js_1.QueryArchivedProposalsLegacyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Query", "ArchivedProposalsLegacy", data);
        return promise.then((data) => query_js_1.QueryArchivedProposalsLegacyResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        admins(request) {
            return queryService.admins(request);
        },
        archivedProposals(request) {
            return queryService.archivedProposals(request);
        },
        archivedProposalsLegacy(request) {
            return queryService.archivedProposalsLegacy(request);
        },
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;
//# sourceMappingURL=query.rpc.Query.js.map