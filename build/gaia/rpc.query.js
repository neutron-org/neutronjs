"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRPCQueryClient = void 0;
//@ts-nocheck
/* eslint-disable */
const tendermint_rpc_1 = require("@cosmjs/tendermint-rpc");
const stargate_1 = require("@cosmjs/stargate");
const createRPCQueryClient = async ({ rpcEndpoint }) => {
    const tmClient = await (0, tendermint_rpc_1.connectComet)(rpcEndpoint);
    const client = new stargate_1.QueryClient(tmClient);
    return {
        cosmos: {
            adminmodule: {
                adminmodule: (await import("../cosmos/adminmodule/adminmodule/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            app: {
                v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            auth: {
                v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            authz: {
                v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            autocli: {
                v1: (await import("../cosmos/autocli/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            bank: {
                v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            base: {
                node: {
                    v1beta1: (await import("../cosmos/base/node/v1beta1/query.rpc.Service.js")).createRpcQueryExtension(client),
                },
                tendermint: {
                    v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service.js")).createRpcQueryExtension(client),
                },
            },
            circuit: {
                v1: (await import("../cosmos/circuit/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            consensus: {
                v1: (await import("../cosmos/consensus/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            counter: {
                v1: (await import("../cosmos/counter/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            distribution: {
                v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            epochs: {
                v1beta1: (await import("../cosmos/epochs/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            evidence: {
                v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            feegrant: {
                v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            gov: {
                v1: (await import("../cosmos/gov/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
                v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            group: {
                v1: (await import("../cosmos/group/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            mint: {
                v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            nft: {
                v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            params: {
                v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            protocolpool: {
                v1: (await import("../cosmos/protocolpool/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            slashing: {
                v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            staking: {
                v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            tx: {
                v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service.js")).createRpcQueryExtension(client),
            },
            upgrade: {
                v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
        },
        gaia: {
            globalfee: {
                v1beta1: (await import("./globalfee/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
        },
    };
};
exports.createRPCQueryClient = createRPCQueryClient;
//# sourceMappingURL=rpc.query.js.map