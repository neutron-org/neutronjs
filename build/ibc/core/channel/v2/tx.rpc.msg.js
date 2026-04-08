"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.sendPacket = this.sendPacket.bind(this);
        this.recvPacket = this.recvPacket.bind(this);
        this.timeout = this.timeout.bind(this);
        this.acknowledgement = this.acknowledgement.bind(this);
    }
    sendPacket(request) {
        const data = tx_js_1.MsgSendPacket.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Msg", "SendPacket", data);
        return promise.then((data) => tx_js_1.MsgSendPacketResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    recvPacket(request) {
        const data = tx_js_1.MsgRecvPacket.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Msg", "RecvPacket", data);
        return promise.then((data) => tx_js_1.MsgRecvPacketResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    timeout(request) {
        const data = tx_js_1.MsgTimeout.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Msg", "Timeout", data);
        return promise.then((data) => tx_js_1.MsgTimeoutResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    acknowledgement(request) {
        const data = tx_js_1.MsgAcknowledgement.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v2.Msg", "Acknowledgement", data);
        return promise.then((data) => tx_js_1.MsgAcknowledgementResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map