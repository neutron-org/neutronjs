"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.deposit = this.deposit.bind(this);
        this.withdrawal = this.withdrawal.bind(this);
        this.withdrawalWithShares = this.withdrawalWithShares.bind(this);
        this.placeLimitOrder = this.placeLimitOrder.bind(this);
        this.withdrawFilledLimitOrder = this.withdrawFilledLimitOrder.bind(this);
        this.cancelLimitOrder = this.cancelLimitOrder.bind(this);
        this.multiHopSwap = this.multiHopSwap.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    deposit(request) {
        const data = tx_js_1.MsgDeposit.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Msg", "Deposit", data);
        return promise.then((data) => tx_js_1.MsgDepositResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    withdrawal(request) {
        const data = tx_js_1.MsgWithdrawal.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Msg", "Withdrawal", data);
        return promise.then((data) => tx_js_1.MsgWithdrawalResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    withdrawalWithShares(request) {
        const data = tx_js_1.MsgWithdrawalWithShares.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Msg", "WithdrawalWithShares", data);
        return promise.then((data) => tx_js_1.MsgWithdrawalResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    placeLimitOrder(request) {
        const data = tx_js_1.MsgPlaceLimitOrder.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Msg", "PlaceLimitOrder", data);
        return promise.then((data) => tx_js_1.MsgPlaceLimitOrderResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    withdrawFilledLimitOrder(request) {
        const data = tx_js_1.MsgWithdrawFilledLimitOrder.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Msg", "WithdrawFilledLimitOrder", data);
        return promise.then((data) => tx_js_1.MsgWithdrawFilledLimitOrderResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    cancelLimitOrder(request) {
        const data = tx_js_1.MsgCancelLimitOrder.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Msg", "CancelLimitOrder", data);
        return promise.then((data) => tx_js_1.MsgCancelLimitOrderResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    multiHopSwap(request) {
        const data = tx_js_1.MsgMultiHopSwap.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Msg", "MultiHopSwap", data);
        return promise.then((data) => tx_js_1.MsgMultiHopSwapResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("neutron.dex.Msg", "UpdateParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map