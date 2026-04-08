"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.registerCounterparty = this.registerCounterparty.bind(this);
        this.updateClientConfig = this.updateClientConfig.bind(this);
    }
    registerCounterparty(request) {
        const data = tx_js_1.MsgRegisterCounterparty.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v2.Msg", "RegisterCounterparty", data);
        return promise.then((data) => tx_js_1.MsgRegisterCounterpartyResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateClientConfig(request) {
        const data = tx_js_1.MsgUpdateClientConfig.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v2.Msg", "UpdateClientConfig", data);
        return promise.then((data) => tx_js_1.MsgUpdateClientConfigResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map