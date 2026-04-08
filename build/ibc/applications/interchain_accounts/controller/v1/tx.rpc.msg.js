"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.registerInterchainAccount = this.registerInterchainAccount.bind(this);
        this.sendTx = this.sendTx.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    registerInterchainAccount(request) {
        const data = tx_js_1.MsgRegisterInterchainAccount.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "RegisterInterchainAccount", data);
        return promise.then((data) => tx_js_1.MsgRegisterInterchainAccountResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    sendTx(request) {
        const data = tx_js_1.MsgSendTx.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "SendTx", data);
        return promise.then((data) => tx_js_1.MsgSendTxResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.interchain_accounts.controller.v1.Msg", "UpdateParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map