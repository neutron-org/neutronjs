"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.connectionOpenInit = this.connectionOpenInit.bind(this);
        this.connectionOpenTry = this.connectionOpenTry.bind(this);
        this.connectionOpenAck = this.connectionOpenAck.bind(this);
        this.connectionOpenConfirm = this.connectionOpenConfirm.bind(this);
        this.updateConnectionParams = this.updateConnectionParams.bind(this);
    }
    connectionOpenInit(request) {
        const data = tx_js_1.MsgConnectionOpenInit.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
        return promise.then((data) => tx_js_1.MsgConnectionOpenInitResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    connectionOpenTry(request) {
        const data = tx_js_1.MsgConnectionOpenTry.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
        return promise.then((data) => tx_js_1.MsgConnectionOpenTryResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    connectionOpenAck(request) {
        const data = tx_js_1.MsgConnectionOpenAck.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
        return promise.then((data) => tx_js_1.MsgConnectionOpenAckResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    connectionOpenConfirm(request) {
        const data = tx_js_1.MsgConnectionOpenConfirm.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
        return promise.then((data) => tx_js_1.MsgConnectionOpenConfirmResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateConnectionParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "UpdateConnectionParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map