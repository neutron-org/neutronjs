"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.grantAllowance = this.grantAllowance.bind(this);
        this.revokeAllowance = this.revokeAllowance.bind(this);
        this.pruneAllowances = this.pruneAllowances.bind(this);
    }
    grantAllowance(request) {
        const data = tx_js_1.MsgGrantAllowance.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
        return promise.then((data) => tx_js_1.MsgGrantAllowanceResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    revokeAllowance(request) {
        const data = tx_js_1.MsgRevokeAllowance.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
        return promise.then((data) => tx_js_1.MsgRevokeAllowanceResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    pruneAllowances(request) {
        const data = tx_js_1.MsgPruneAllowances.encode(request).finish();
        const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "PruneAllowances", data);
        return promise.then((data) => tx_js_1.MsgPruneAllowancesResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map