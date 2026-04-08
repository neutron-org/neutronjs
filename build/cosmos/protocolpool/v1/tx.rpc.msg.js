"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.fundCommunityPool = this.fundCommunityPool.bind(this);
        this.communityPoolSpend = this.communityPoolSpend.bind(this);
        this.createContinuousFund = this.createContinuousFund.bind(this);
        this.cancelContinuousFund = this.cancelContinuousFund.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    fundCommunityPool(request) {
        const data = tx_js_1.MsgFundCommunityPool.encode(request).finish();
        const promise = this.rpc.request("cosmos.protocolpool.v1.Msg", "FundCommunityPool", data);
        return promise.then((data) => tx_js_1.MsgFundCommunityPoolResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    communityPoolSpend(request) {
        const data = tx_js_1.MsgCommunityPoolSpend.encode(request).finish();
        const promise = this.rpc.request("cosmos.protocolpool.v1.Msg", "CommunityPoolSpend", data);
        return promise.then((data) => tx_js_1.MsgCommunityPoolSpendResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    createContinuousFund(request) {
        const data = tx_js_1.MsgCreateContinuousFund.encode(request).finish();
        const promise = this.rpc.request("cosmos.protocolpool.v1.Msg", "CreateContinuousFund", data);
        return promise.then((data) => tx_js_1.MsgCreateContinuousFundResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    cancelContinuousFund(request) {
        const data = tx_js_1.MsgCancelContinuousFund.encode(request).finish();
        const promise = this.rpc.request("cosmos.protocolpool.v1.Msg", "CancelContinuousFund", data);
        return promise.then((data) => tx_js_1.MsgCancelContinuousFundResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("cosmos.protocolpool.v1.Msg", "UpdateParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map