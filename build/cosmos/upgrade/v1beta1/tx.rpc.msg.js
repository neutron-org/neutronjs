"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.softwareUpgrade = this.softwareUpgrade.bind(this);
        this.cancelUpgrade = this.cancelUpgrade.bind(this);
    }
    softwareUpgrade(request) {
        const data = tx_js_1.MsgSoftwareUpgrade.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "SoftwareUpgrade", data);
        return promise.then((data) => tx_js_1.MsgSoftwareUpgradeResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    cancelUpgrade(request) {
        const data = tx_js_1.MsgCancelUpgrade.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "CancelUpgrade", data);
        return promise.then((data) => tx_js_1.MsgCancelUpgradeResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map