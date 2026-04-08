"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.updateParams = this.updateParams.bind(this);
    }
    updateParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("gaia.globalfee.v1beta1.Msg", "UpdateParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map