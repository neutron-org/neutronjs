"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount(request) {
        const data = tx_js_1.MsgIncreaseCounter.encode(request).finish();
        const promise = this.rpc.request("cosmos.counter.v1.Msg", "IncreaseCount", data);
        return promise.then((data) => tx_js_1.MsgIncreaseCountResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map