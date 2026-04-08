"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.addCurrencyPairs = this.addCurrencyPairs.bind(this);
        this.removeCurrencyPairs = this.removeCurrencyPairs.bind(this);
    }
    addCurrencyPairs(request) {
        const data = tx_js_1.MsgAddCurrencyPairs.encode(request).finish();
        const promise = this.rpc.request("slinky.oracle.v1.Msg", "AddCurrencyPairs", data);
        return promise.then((data) => tx_js_1.MsgAddCurrencyPairsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    removeCurrencyPairs(request) {
        const data = tx_js_1.MsgRemoveCurrencyPairs.encode(request).finish();
        const promise = this.rpc.request("slinky.oracle.v1.Msg", "RemoveCurrencyPairs", data);
        return promise.then((data) => tx_js_1.MsgRemoveCurrencyPairsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map