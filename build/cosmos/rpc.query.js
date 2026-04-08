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
                adminmodule: (await import("./adminmodule/adminmodule/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            app: {
                v1alpha1: (await import("./app/v1alpha1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            auth: {
                v1beta1: (await import("./auth/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            authz: {
                v1beta1: (await import("./authz/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            autocli: {
                v1: (await import("./autocli/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            bank: {
                v1beta1: (await import("./bank/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            base: {
                node: {
                    v1beta1: (await import("./base/node/v1beta1/query.rpc.Service.js")).createRpcQueryExtension(client),
                },
                tendermint: {
                    v1beta1: (await import("./base/tendermint/v1beta1/query.rpc.Service.js")).createRpcQueryExtension(client),
                },
            },
            circuit: {
                v1: (await import("./circuit/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            consensus: {
                v1: (await import("./consensus/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            counter: {
                v1: (await import("./counter/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            distribution: {
                v1beta1: (await import("./distribution/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            epochs: {
                v1beta1: (await import("./epochs/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            evidence: {
                v1beta1: (await import("./evidence/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            feegrant: {
                v1beta1: (await import("./feegrant/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            gov: {
                v1: (await import("./gov/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
                v1beta1: (await import("./gov/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            group: {
                v1: (await import("./group/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            mint: {
                v1beta1: (await import("./mint/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            nft: {
                v1beta1: (await import("./nft/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            params: {
                v1beta1: (await import("./params/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            protocolpool: {
                v1: (await import("./protocolpool/v1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            slashing: {
                v1beta1: (await import("./slashing/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            staking: {
                v1beta1: (await import("./staking/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
            tx: {
                v1beta1: (await import("./tx/v1beta1/service.rpc.Service.js")).createRpcQueryExtension(client),
            },
            upgrade: {
                v1beta1: (await import("./upgrade/v1beta1/query.rpc.Query.js")).createRpcQueryExtension(client),
            },
        },
    };
};
exports.createRPCQueryClient = createRPCQueryClient;
//# sourceMappingURL=rpc.query.js.map