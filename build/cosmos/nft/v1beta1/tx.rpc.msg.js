"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.send = this.send.bind(this);
    }
    send(request) {
        const data = tx_js_1.MsgSend.encode(request).finish();
        const promise = this.rpc.request("cosmos.nft.v1beta1.Msg", "Send", data);
        return promise.then((data) => tx_js_1.MsgSendResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map