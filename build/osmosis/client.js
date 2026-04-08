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
exports.getSigningOsmosisClient = exports.getSigningOsmosisClientOptions = exports.osmosisProtoRegistry = exports.osmosisAminoConverters = void 0;
//@ts-nocheck
/* eslint-disable */
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const osmosisTokenfactoryV1beta1TxRegistry = __importStar(require("./tokenfactory/v1beta1/tx.registry.js"));
const osmosisTokenfactoryV1beta1TxAmino = __importStar(require("./tokenfactory/v1beta1/tx.amino.js"));
exports.osmosisAminoConverters = {
    ...osmosisTokenfactoryV1beta1TxAmino.AminoConverter,
};
exports.osmosisProtoRegistry = [
    ...osmosisTokenfactoryV1beta1TxRegistry.registry,
];
const getSigningOsmosisClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes, } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.osmosisProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.osmosisAminoConverters,
    });
    return {
        registry,
        aminoTypes,
    };
};
exports.getSigningOsmosisClientOptions = getSigningOsmosisClientOptions;
const getSigningOsmosisClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes, }) => {
    const { registry, aminoTypes } = (0, exports.getSigningOsmosisClientOptions)({
        defaultTypes,
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes,
    });
    return client;
};
exports.getSigningOsmosisClient = getSigningOsmosisClient;
//# sourceMappingURL=client.js.map