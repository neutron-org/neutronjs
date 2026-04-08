"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisDenom = exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("../params.js");
const authorityMetadata_js_1 = require("./authorityMetadata.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "neutron.coinfactory.v1beta1";
function createBaseGenesisState() {
    return {
        params: params_js_1.Params.fromPartial({}),
        factoryDenoms: [],
    };
}
exports.GenesisState = {
    typeUrl: "/neutron.coinfactory.v1beta1.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.factoryDenoms) {
            exports.GenesisDenom.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.factoryDenoms.push(exports.GenesisDenom.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        if (Array.isArray(object?.factoryDenoms))
            obj.factoryDenoms = object.factoryDenoms.map((e) => exports.GenesisDenom.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        if (message.factoryDenoms) {
            obj.factoryDenoms = message.factoryDenoms.map((e) => (e ? exports.GenesisDenom.toJSON(e) : undefined));
        }
        else {
            obj.factoryDenoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        message.factoryDenoms = object.factoryDenoms?.map((e) => exports.GenesisDenom.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGenesisDenom() {
    return {
        denom: "",
        authorityMetadata: authorityMetadata_js_1.DenomAuthorityMetadata.fromPartial({}),
        hookContractAddress: undefined,
    };
}
exports.GenesisDenom = {
    typeUrl: "/neutron.coinfactory.v1beta1.GenesisDenom",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.authorityMetadata !== undefined) {
            authorityMetadata_js_1.DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.hookContractAddress !== undefined) {
            writer.uint32(26).string(message.hookContractAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.authorityMetadata = authorityMetadata_js_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.hookContractAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisDenom();
        if ((0, helpers_js_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_js_1.isSet)(object.authorityMetadata))
            obj.authorityMetadata = authorityMetadata_js_1.DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
        if ((0, helpers_js_1.isSet)(object.hookContractAddress))
            obj.hookContractAddress = String(object.hookContractAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.authorityMetadata !== undefined &&
            (obj.authorityMetadata = message.authorityMetadata
                ? authorityMetadata_js_1.DenomAuthorityMetadata.toJSON(message.authorityMetadata)
                : undefined);
        message.hookContractAddress !== undefined && (obj.hookContractAddress = message.hookContractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisDenom();
        message.denom = object.denom ?? "";
        if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
            message.authorityMetadata = authorityMetadata_js_1.DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
        }
        message.hookContractAddress = object.hookContractAddress ?? undefined;
        return message;
    },
};
//# sourceMappingURL=genesis.js.map