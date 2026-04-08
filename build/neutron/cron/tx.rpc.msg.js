"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.addSchedule = this.addSchedule.bind(this);
        this.removeSchedule = this.removeSchedule.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    addSchedule(request) {
        const data = tx_js_1.MsgAddSchedule.encode(request).finish();
        const promise = this.rpc.request("neutron.cron.Msg", "AddSchedule", data);
        return promise.then((data) => tx_js_1.MsgAddScheduleResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    removeSchedule(request) {
        const data = tx_js_1.MsgRemoveSchedule.encode(request).finish();
        const promise = this.rpc.request("neutron.cron.Msg", "RemoveSchedule", data);
        return promise.then((data) => tx_js_1.MsgRemoveScheduleResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("neutron.cron.Msg", "UpdateParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map