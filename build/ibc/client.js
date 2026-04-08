"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSigningIbcClient = exports.getSigningIbcClientOptions = exports.ibcProtoRegistry = exports.ibcAminoConverters = void 0;
//@ts-nocheck
/* eslint-disable */
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const ibcApplicationsInterchainAccountsControllerV1TxRegistry = __importStar(require("./applications/interchain_accounts/controller/v1/tx.registry.js"));
const ibcApplicationsInterchainAccountsHostV1TxRegistry = __importStar(require("./applications/interchain_accounts/host/v1/tx.registry.js"));
const ibcApplicationsTransferV1TxRegistry = __importStar(require("./applications/transfer/v1/tx.registry.js"));
const ibcCoreChannelV1TxRegistry = __importStar(require("./core/channel/v1/tx.registry.js"));
const ibcCoreChannelV2TxRegistry = __importStar(require("./core/channel/v2/tx.registry.js"));
const ibcCoreClientV1TxRegistry = __importStar(require("./core/client/v1/tx.registry.js"));
const ibcCoreClientV2TxRegistry = __importStar(require("./core/client/v2/tx.registry.js"));
const ibcCoreConnectionV1TxRegistry = __importStar(require("./core/connection/v1/tx.registry.js"));
const ibcLightclientsWasmV1TxRegistry = __importStar(require("./lightclients/wasm/v1/tx.registry.js"));
const ibcApplicationsInterchainAccountsControllerV1TxAmino = __importStar(require("./applications/interchain_accounts/controller/v1/tx.amino.js"));
const ibcApplicationsInterchainAccountsHostV1TxAmino = __importStar(require("./applications/interchain_accounts/host/v1/tx.amino.js"));
const ibcApplicationsTransferV1TxAmino = __importStar(require("./applications/transfer/v1/tx.amino.js"));
const ibcCoreChannelV1TxAmino = __importStar(require("./core/channel/v1/tx.amino.js"));
const ibcCoreChannelV2TxAmino = __importStar(require("./core/channel/v2/tx.amino.js"));
const ibcCoreClientV1TxAmino = __importStar(require("./core/client/v1/tx.amino.js"));
const ibcCoreClientV2TxAmino = __importStar(require("./core/client/v2/tx.amino.js"));
const ibcCoreConnectionV1TxAmino = __importStar(require("./core/connection/v1/tx.amino.js"));
const ibcLightclientsWasmV1TxAmino = __importStar(require("./lightclients/wasm/v1/tx.amino.js"));
exports.ibcAminoConverters = {
    ...ibcApplicationsInterchainAccountsControllerV1TxAmino.AminoConverter,
    ...ibcApplicationsInterchainAccountsHostV1TxAmino.AminoConverter,
    ...ibcApplicationsTransferV1TxAmino.AminoConverter,
    ...ibcCoreChannelV1TxAmino.AminoConverter,
    ...ibcCoreChannelV2TxAmino.AminoConverter,
    ...ibcCoreClientV1TxAmino.AminoConverter,
    ...ibcCoreClientV2TxAmino.AminoConverter,
    ...ibcCoreConnectionV1TxAmino.AminoConverter,
    ...ibcLightclientsWasmV1TxAmino.AminoConverter,
};
exports.ibcProtoRegistry = [
    ...ibcApplicationsInterchainAccountsControllerV1TxRegistry.registry,
    ...ibcApplicationsInterchainAccountsHostV1TxRegistry.registry,
    ...ibcApplicationsTransferV1TxRegistry.registry,
    ...ibcCoreChannelV1TxRegistry.registry,
    ...ibcCoreChannelV2TxRegistry.registry,
    ...ibcCoreClientV1TxRegistry.registry,
    ...ibcCoreClientV2TxRegistry.registry,
    ...ibcCoreConnectionV1TxRegistry.registry,
    ...ibcLightclientsWasmV1TxRegistry.registry,
];
const getSigningIbcClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes, } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.ibcProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.ibcAminoConverters,
    });
    return {
        registry,
        aminoTypes,
    };
};
exports.getSigningIbcClientOptions = getSigningIbcClientOptions;
const getSigningIbcClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes, }) => {
    const { registry, aminoTypes } = (0, exports.getSigningIbcClientOptions)({
        defaultTypes,
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes,
    });
    return client;
};
exports.getSigningIbcClient = getSigningIbcClient;
//# sourceMappingURL=client.js.map