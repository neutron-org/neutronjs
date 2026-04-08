"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.manageHookSubscription = this.manageHookSubscription.bind(this);
    }
    manageHookSubscription(request) {
        const data = tx_js_1.MsgManageHookSubscription.encode(request).finish();
        const promise = this.rpc.request("neutron.harpoon.Msg", "ManageHookSubscription", data);
        return promise.then((data) => tx_js_1.MsgManageHookSubscriptionResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map