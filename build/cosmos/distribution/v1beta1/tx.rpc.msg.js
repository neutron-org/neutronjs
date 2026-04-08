"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = void 0;
const binary_js_1 = require("../../../binary.js");
const tx_js_1 = require("./tx.js");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.setWithdrawAddress = this.setWithdrawAddress.bind(this);
        this.withdrawDelegatorReward = this.withdrawDelegatorReward.bind(this);
        this.withdrawValidatorCommission = this.withdrawValidatorCommission.bind(this);
        this.fundCommunityPool = this.fundCommunityPool.bind(this);
        this.updateParams = this.updateParams.bind(this);
        this.communityPoolSpend = this.communityPoolSpend.bind(this);
        this.depositValidatorRewardsPool = this.depositValidatorRewardsPool.bind(this);
    }
    setWithdrawAddress(request) {
        const data = tx_js_1.MsgSetWithdrawAddress.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
        return promise.then((data) => tx_js_1.MsgSetWithdrawAddressResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    withdrawDelegatorReward(request) {
        const data = tx_js_1.MsgWithdrawDelegatorReward.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
        return promise.then((data) => tx_js_1.MsgWithdrawDelegatorRewardResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    withdrawValidatorCommission(request) {
        const data = tx_js_1.MsgWithdrawValidatorCommission.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
        return promise.then((data) => tx_js_1.MsgWithdrawValidatorCommissionResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    fundCommunityPool(request) {
        const data = tx_js_1.MsgFundCommunityPool.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
        return promise.then((data) => tx_js_1.MsgFundCommunityPoolResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    updateParams(request) {
        const data = tx_js_1.MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "UpdateParams", data);
        return promise.then((data) => tx_js_1.MsgUpdateParamsResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    communityPoolSpend(request) {
        const data = tx_js_1.MsgCommunityPoolSpend.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "CommunityPoolSpend", data);
        return promise.then((data) => tx_js_1.MsgCommunityPoolSpendResponse.decode(new binary_js_1.BinaryReader(data)));
    }
    depositValidatorRewardsPool(request) {
        const data = tx_js_1.MsgDepositValidatorRewardsPool.encode(request).finish();
        const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "DepositValidatorRewardsPool", data);
        return promise.then((data) => tx_js_1.MsgDepositValidatorRewardsPoolResponse.decode(new binary_js_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
//# sourceMappingURL=tx.rpc.msg.js.map