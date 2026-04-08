"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createDenom = this.createDenom.bind(this);
        this.mint = this.mint.bind(this);
        this.burn = this.burn.bind(this);
        this.changeAdmin = this.changeAdmin.bind(this);
        this.setDenomMetadata = this.setDenomMetadata.bind(this);
        this.setBeforeSendHook = this.setBeforeSendHook.bind(this);
        this.forceTransfer = this.forceTransfer.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    createDenom(request) {
        const data = tx_js_1.MsgCreateDenom.encode(request).finish();
        const promise = this.rpc.request("neutron.coinfactory.v1beta1.Msg", "CreateDenom", data);
        return promise.then((data) => tx_js_1.MsgCreateDenomResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    mint(request) {
        const data = tx_js_1.MsgMint.encode(request).finish();
        const promise = this.rpc.request("neutron.coinfactory.v1beta1.Msg", "Mint", data);
        return promise.then((data) => tx_js_1.MsgMintResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    burn(request) {
        const data = tx_js_1.MsgBurn.encode(request).finish();
        const promise = this.rpc.request("neutron.coinfactory.v1beta1.Msg", "Burn", data);
        return promise.then((data) => tx_js_1.MsgBurnResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    changeAdmin(request) {
        const data = tx_js_1.MsgChangeAdmin.encode(request).finish();
        const promise = this.rpc.request("neutron.coinfactory.v1beta1.Msg", "ChangeAdmin", data);
        return promise.then((data) => tx_js_1.MsgChangeAdminResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    setDenomMetadata(request) {
        const data = tx_js_1.MsgSetDenomMetadata.encode(request).finish();
        const promise = this.rpc.request("neutron.coinfactory.v1beta1.Msg", "SetDenomMetadata", data);
        return promise.then((data) => tx_js_1.MsgSetDenomMetadataResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    setBeforeSendHook(request) {
        const data = tx_js_1.MsgSetBeforeSendHook.encode(request).finish();
        const promise = this.rpc.request("neutron.coinfactory.v1beta1.Msg", "SetBeforeSendHook", data);
        return promise.then((data) => tx_js_1.MsgSetBeforeSendHookResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    forceTransfer(request) {
        const data = tx_js_1.MsgForceTransfer.encode(request).finish();
        const promise = this.rpc.request("neutron.coinfactory.v1beta1.Msg", "ForceTransfer", data);
        return promise.then((data) => tx_js_1.MsgForceTransferResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("neutron.coinfactory.v1beta1.Msg", "UpdateParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map