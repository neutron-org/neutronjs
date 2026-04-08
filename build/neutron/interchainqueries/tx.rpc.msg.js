"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.registerInterchainQuery = this.registerInterchainQuery.bind(this);
        this.submitQueryResult = this.submitQueryResult.bind(this);
        this.removeInterchainQuery = this.removeInterchainQuery.bind(this);
        this.updateInterchainQuery = this.updateInterchainQuery.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    registerInterchainQuery(request) {
        const data = tx_js_1.MsgRegisterInterchainQuery.encode(request).finish();
        const promise = this.rpc.request("neutron.interchainqueries.Msg", "RegisterInterchainQuery", data);
        return promise.then((data) => tx_js_1.MsgRegisterInterchainQueryResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    submitQueryResult(request) {
        const data = tx_js_1.MsgSubmitQueryResult.encode(request).finish();
        const promise = this.rpc.request("neutron.interchainqueries.Msg", "SubmitQueryResult", data);
        return promise.then((data) => tx_js_1.MsgSubmitQueryResultResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    removeInterchainQuery(request) {
        const data = tx_js_1.MsgRemoveInterchainQueryRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.interchainqueries.Msg", "RemoveInterchainQuery", data);
        return promise.then((data) => tx_js_1.MsgRemoveInterchainQueryResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateInterchainQuery(request) {
        const data = tx_js_1.MsgUpdateInterchainQueryRequest.encode(request).finish();
        const promise = this.rpc.request("neutron.interchainqueries.Msg", "UpdateInterchainQuery", data);
        return promise.then((data) => tx_js_1.MsgUpdateInterchainQueryResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("neutron.interchainqueries.Msg", "UpdateParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map