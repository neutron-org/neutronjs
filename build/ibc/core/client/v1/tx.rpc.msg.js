"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.createClient = this.createClient.bind(this);
        this.updateClient = this.updateClient.bind(this);
        this.upgradeClient = this.upgradeClient.bind(this);
        this.submitMisbehaviour = this.submitMisbehaviour.bind(this);
        this.recoverClient = this.recoverClient.bind(this);
        this.iBCSoftwareUpgrade = this.iBCSoftwareUpgrade.bind(this);
        this.updateClientParams = this.updateClientParams.bind(this);
        this.deleteClientCreator = this.deleteClientCreator.bind(this);
    }
    createClient(request) {
        const data = tx_js_1.MsgCreateClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
        return promise.then((data) => tx_js_1.MsgCreateClientResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateClient(request) {
        const data = tx_js_1.MsgUpdateClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
        return promise.then((data) => tx_js_1.MsgUpdateClientResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    upgradeClient(request) {
        const data = tx_js_1.MsgUpgradeClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
        return promise.then((data) => tx_js_1.MsgUpgradeClientResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    submitMisbehaviour(request) {
        const data = tx_js_1.MsgSubmitMisbehaviour.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
        return promise.then((data) => tx_js_1.MsgSubmitMisbehaviourResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    recoverClient(request) {
        const data = tx_js_1.MsgRecoverClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "RecoverClient", data);
        return promise.then((data) => tx_js_1.MsgRecoverClientResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    iBCSoftwareUpgrade(request) {
        const data = tx_js_1.MsgIBCSoftwareUpgrade.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "IBCSoftwareUpgrade", data);
        return promise.then((data) => tx_js_1.MsgIBCSoftwareUpgradeResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateClientParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClientParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    deleteClientCreator(request) {
        const data = tx_js_1.MsgDeleteClientCreator.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "DeleteClientCreator", data);
        return promise.then((data) => tx_js_1.MsgDeleteClientCreatorResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map