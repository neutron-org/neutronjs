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
exports.getSigningSdkClient = exports.getSigningSdkClientOptions = exports.sdkProtoRegistry = exports.sdkAminoConverters = void 0;
//@ts-nocheck
/* eslint-disable */
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const sdkAuctionV1TxRegistry = __importStar(require("./auction/v1/tx.registry.js"));
const sdkAuctionV1TxAmino = __importStar(require("./auction/v1/tx.amino.js"));
exports.sdkAminoConverters = {
    ...sdkAuctionV1TxAmino.AminoConverter,
};
exports.sdkProtoRegistry = [...sdkAuctionV1TxRegistry.registry];
const getSigningSdkClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes, } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.sdkProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.sdkAminoConverters,
    });
    return {
        registry,
        aminoTypes,
    };
};
exports.getSigningSdkClientOptions = getSigningSdkClientOptions;
const getSigningSdkClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes, }) => {
    const { registry, aminoTypes } = (0, exports.getSigningSdkClientOptions)({
        defaultTypes,
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes,
    });
    return client;
};
exports.getSigningSdkClient = getSigningSdkClient;
//# sourceMappingURL=client.js.map