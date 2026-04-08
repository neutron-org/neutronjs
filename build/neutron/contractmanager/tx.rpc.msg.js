"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.updateParams = this.updateParams.bind(this);
        this.resubmitFailure = this.resubmitFailure.bind(this);
    }
    updateParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("neutron.contractmanager.Msg", "UpdateParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    resubmitFailure(request) {
        const data = tx_js_1.MsgResubmitFailure.encode(request).finish();
        const promise = this.rpc.request("neutron.contractmanager.Msg", "ResubmitFailure", data);
        return promise.then((data) => tx_js_1.MsgResubmitFailureResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map