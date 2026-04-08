import { Rpc } from "../helpers.js";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        adminmodule: {
            adminmodule: import("../cosmos/adminmodule/adminmodule/tx.rpc.msg.js").MsgClientImpl;
        };
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        benchmark: {
            v1: import("../cosmos/benchmark/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        circuit: {
            v1: import("../cosmos/circuit/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        consensus: {
            v1: import("../cosmos/consensus/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        counter: {
            v1: import("../cosmos/counter/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        crisis: {
            v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        gov: {
            v1: import("../cosmos/gov/v1/tx.rpc.msg.js").MsgClientImpl;
            v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        group: {
            v1: import("../cosmos/group/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        nft: {
            v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        protocolpool: {
            v1: import("../cosmos/protocolpool/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        vesting: {
            v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
    };
    neutron: {
        coinfactory: {
            v1beta1: import("./coinfactory/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        contractmanager: import("./contractmanager/tx.rpc.msg.js").MsgClientImpl;
        cron: import("./cron/tx.rpc.msg.js").MsgClientImpl;
        dex: import("./dex/tx.rpc.msg.js").MsgClientImpl;
        dynamicfees: {
            v1: import("./dynamicfees/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        feeburner: import("./feeburner/tx.rpc.msg.js").MsgClientImpl;
        feerefunder: import("./feerefunder/tx.rpc.msg.js").MsgClientImpl;
        harpoon: import("./harpoon/tx.rpc.msg.js").MsgClientImpl;
        ibcratelimit: {
            v1beta1: import("./ibcratelimit/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        interchainqueries: import("./interchainqueries/tx.rpc.msg.js").MsgClientImpl;
        interchaintxs: {
            v1: import("./interchaintxs/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        revenue: import("./revenue/tx.rpc.msg.js").MsgClientImpl;
        transfer: import("./transfer/v1/tx.rpc.msg.js").MsgClientImpl;
    };
}>;
