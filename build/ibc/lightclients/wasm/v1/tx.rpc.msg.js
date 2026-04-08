"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.storeCode = this.storeCode.bind(this);
        this.removeChecksum = this.removeChecksum.bind(this);
        this.migrateContract = this.migrateContract.bind(this);
    }
    storeCode(request) {
        const data = tx_js_1.MsgStoreCode.encode(request).finish();
        const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "StoreCode", data);
        return promise.then((data) => tx_js_1.MsgStoreCodeResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    removeChecksum(request) {
        const data = tx_js_1.MsgRemoveChecksum.encode(request).finish();
        const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "RemoveChecksum", data);
        return promise.then((data) => tx_js_1.MsgRemoveChecksumResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    migrateContract(request) {
        const data = tx_js_1.MsgMigrateContract.encode(request).finish();
        const promise = this.rpc.request("ibc.lightclients.wasm.v1.Msg", "MigrateContract", data);
        return promise.then((data) => tx_js_1.MsgMigrateContractResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map