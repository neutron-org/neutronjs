"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRPCMsgClient = void 0;
const createRPCMsgClient = async ({ rpc }) => ({
    cosmos: {
        adminmodule: {
            adminmodule: new (await import("../cosmos/adminmodule/adminmodule/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        auth: {
            v1beta1: new (await import("../cosmos/auth/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        authz: {
            v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        bank: {
            v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        benchmark: {
            v1: new (await import("../cosmos/benchmark/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        circuit: {
            v1: new (await import("../cosmos/circuit/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        consensus: {
            v1: new (await import("../cosmos/consensus/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        counter: {
            v1: new (await import("../cosmos/counter/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        crisis: {
            v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        distribution: {
            v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        evidence: {
            v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        feegrant: {
            v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        gov: {
            v1: new (await import("../cosmos/gov/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
            v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        group: {
            v1: new (await import("../cosmos/group/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        mint: {
            v1beta1: new (await import("../cosmos/mint/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        nft: {
            v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        protocolpool: {
            v1: new (await import("../cosmos/protocolpool/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        slashing: {
            v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        staking: {
            v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        upgrade: {
            v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        vesting: {
            v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
    },
    neutron: {
        coinfactory: {
            v1beta1: new (await import("./coinfactory/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        contractmanager: new (await import("./contractmanager/tx.rpc.msg.js")).MsgClientImpl(rpc),
        cron: new (await import("./cron/tx.rpc.msg.js")).MsgClientImpl(rpc),
        dex: new (await import("./dex/tx.rpc.msg.js")).MsgClientImpl(rpc),
        dynamicfees: {
            v1: new (await import("./dynamicfees/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        feeburner: new (await import("./feeburner/tx.rpc.msg.js")).MsgClientImpl(rpc),
        feerefunder: new (await import("./feerefunder/tx.rpc.msg.js")).MsgClientImpl(rpc),
        harpoon: new (await import("./harpoon/tx.rpc.msg.js")).MsgClientImpl(rpc),
        ibcratelimit: {
            v1beta1: new (await import("./ibcratelimit/v1beta1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        interchainqueries: new (await import("./interchainqueries/tx.rpc.msg.js")).MsgClientImpl(rpc),
        interchaintxs: {
            v1: new (await import("./interchaintxs/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
        },
        revenue: new (await import("./revenue/tx.rpc.msg.js")).MsgClientImpl(rpc),
        transfer: new (await import("./transfer/v1/tx.rpc.msg.js")).MsgClientImpl(rpc),
    },
});
exports.createRPCMsgClient = createRPCMsgClient;
//# sourceMappingURL=rpc.tx.js.map