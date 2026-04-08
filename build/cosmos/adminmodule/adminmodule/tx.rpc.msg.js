"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.deleteAdmin = this.deleteAdmin.bind(this);
        this.addAdmin = this.addAdmin.bind(this);
        this.submitProposal = this.submitProposal.bind(this);
        this.submitProposalLegacy = this.submitProposalLegacy.bind(this);
    }
    deleteAdmin(request) {
        const data = tx_js_1.MsgDeleteAdmin.encode(request).finish();
        const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Msg", "DeleteAdmin", data);
        return promise.then((data) => tx_js_1.MsgDeleteAdminResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    addAdmin(request) {
        const data = tx_js_1.MsgAddAdmin.encode(request).finish();
        const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Msg", "AddAdmin", data);
        return promise.then((data) => tx_js_1.MsgAddAdminResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    submitProposal(request) {
        const data = tx_js_1.MsgSubmitProposal.encode(request).finish();
        const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Msg", "SubmitProposal", data);
        return promise.then((data) => tx_js_1.MsgSubmitProposalResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    submitProposalLegacy(request) {
        const data = tx_js_1.MsgSubmitProposalLegacy.encode(request).finish();
        const promise = this.rpc.request("cosmos.adminmodule.adminmodule.Msg", "SubmitProposalLegacy", data);
        return promise.then((data) => tx_js_1.MsgSubmitProposalLegacyResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map