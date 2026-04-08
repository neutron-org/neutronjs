import { Rpc } from "../helpers.js";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        adminmodule: {
            adminmodule: import("./adminmodule/adminmodule/tx.rpc.msg.js").MsgClientImpl;
        };
        auth: {
            v1beta1: import("./auth/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        authz: {
            v1beta1: import("./authz/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        bank: {
            v1beta1: import("./bank/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        benchmark: {
            v1: import("./benchmark/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        circuit: {
            v1: import("./circuit/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        consensus: {
            v1: import("./consensus/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        counter: {
            v1: import("./counter/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        crisis: {
            v1beta1: import("./crisis/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        distribution: {
            v1beta1: import("./distribution/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        evidence: {
            v1beta1: import("./evidence/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        feegrant: {
            v1beta1: import("./feegrant/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        gov: {
            v1: import("./gov/v1/tx.rpc.msg.js").MsgClientImpl;
            v1beta1: import("./gov/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        group: {
            v1: import("./group/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        mint: {
            v1beta1: import("./mint/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        nft: {
            v1beta1: import("./nft/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        protocolpool: {
            v1: import("./protocolpool/v1/tx.rpc.msg.js").MsgClientImpl;
        };
        slashing: {
            v1beta1: import("./slashing/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        staking: {
            v1beta1: import("./staking/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        upgrade: {
            v1beta1: import("./upgrade/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
        vesting: {
            v1beta1: import("./vesting/v1beta1/tx.rpc.msg.js").MsgClientImpl;
        };
    };
}>;
