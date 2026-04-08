"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFullDenomResponse = exports.QueryFullDenomRequest = exports.QueryBeforeSendHookAddressResponse = exports.QueryBeforeSendHookAddressRequest = exports.QueryDenomsFromCreatorResponse = exports.QueryDenomsFromCreatorRequest = exports.QueryDenomAuthorityMetadataResponse = exports.QueryDenomAuthorityMetadataRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("../params.js");
const authorityMetadata_js_1 = require("./authorityMetadata.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "osmosis.tokenfactory.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseQueryParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_js_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryParamsResponse();
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryDenomAuthorityMetadataRequest() {
    return {
        creator: "",
        subdenom: "",
    };
}
exports.QueryDenomAuthorityMetadataRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.subdenom !== "") {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.subdenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryDenomAuthorityMetadataRequest();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.subdenom))
            obj.subdenom = String(object.subdenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.subdenom !== undefined && (obj.subdenom = message.subdenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataRequest();
        message.creator = object.creator ?? "";
        message.subdenom = object.subdenom ?? "";
        return message;
    },
};
function createBaseQueryDenomAuthorityMetadataResponse() {
    return {
        authorityMetadata: authorityMetadata_js_1.DenomAuthorityMetadata.fromPartial({}),
    };
}
exports.QueryDenomAuthorityMetadataResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomAuthorityMetadataResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authorityMetadata !== undefined) {
            authorityMetadata_js_1.DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorityMetadata = authorityMetadata_js_1.DenomAuthorityMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryDenomAuthorityMetadataResponse();
        if ((0, helpers_js_1.isSet)(object.authorityMetadata))
            obj.authorityMetadata = authorityMetadata_js_1.DenomAuthorityMetadata.fromJSON(object.authorityMetadata);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authorityMetadata !== undefined &&
            (obj.authorityMetadata = message.authorityMetadata
                ? authorityMetadata_js_1.DenomAuthorityMetadata.toJSON(message.authorityMetadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomAuthorityMetadataResponse();
        if (object.authorityMetadata !== undefined && object.authorityMetadata !== null) {
            message.authorityMetadata = authorityMetadata_js_1.DenomAuthorityMetadata.fromPartial(object.authorityMetadata);
        }
        return message;
    },
};
function createBaseQueryDenomsFromCreatorRequest() {
    return {
        creator: "",
    };
}
exports.QueryDenomsFromCreatorRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryDenomsFromCreatorRequest();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorRequest();
        message.creator = object.creator ?? "";
        return message;
    },
};
function createBaseQueryDenomsFromCreatorResponse() {
    return {
        denoms: [],
    };
}
exports.QueryDenomsFromCreatorResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryDenomsFromCreatorResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.denoms) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomsFromCreatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryDenomsFromCreatorResponse();
        if (Array.isArray(object?.denoms))
            obj.denoms = object.denoms.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.denoms) {
            obj.denoms = message.denoms.map((e) => e);
        }
        else {
            obj.denoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomsFromCreatorResponse();
        message.denoms = object.denoms?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryBeforeSendHookAddressRequest() {
    return {
        creator: "",
        subdenom: "",
    };
}
exports.QueryBeforeSendHookAddressRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.subdenom !== "") {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeforeSendHookAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.subdenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryBeforeSendHookAddressRequest();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.subdenom))
            obj.subdenom = String(object.subdenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.subdenom !== undefined && (obj.subdenom = message.subdenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBeforeSendHookAddressRequest();
        message.creator = object.creator ?? "";
        message.subdenom = object.subdenom ?? "";
        return message;
    },
};
function createBaseQueryBeforeSendHookAddressResponse() {
    return {
        contractAddr: "",
    };
}
exports.QueryBeforeSendHookAddressResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryBeforeSendHookAddressResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.contractAddr !== "") {
            writer.uint32(10).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBeforeSendHookAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryBeforeSendHookAddressResponse();
        if ((0, helpers_js_1.isSet)(object.contractAddr))
            obj.contractAddr = String(object.contractAddr);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBeforeSendHookAddressResponse();
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
};
function createBaseQueryFullDenomRequest() {
    return {
        creator: "",
        subdenom: "",
    };
}
exports.QueryFullDenomRequest = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryFullDenomRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.subdenom !== "") {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFullDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.subdenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryFullDenomRequest();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.subdenom))
            obj.subdenom = String(object.subdenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.subdenom !== undefined && (obj.subdenom = message.subdenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFullDenomRequest();
        message.creator = object.creator ?? "";
        message.subdenom = object.subdenom ?? "";
        return message;
    },
};
function createBaseQueryFullDenomResponse() {
    return {
        fullDenom: "",
    };
}
exports.QueryFullDenomResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.QueryFullDenomResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.fullDenom !== "") {
            writer.uint32(10).string(message.fullDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFullDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryFullDenomResponse();
        if ((0, helpers_js_1.isSet)(object.fullDenom))
            obj.fullDenom = String(object.fullDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.fullDenom !== undefined && (obj.fullDenom = message.fullDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFullDenomResponse();
        message.fullDenom = object.fullDenom ?? "";
        return message;
    },
};
//# sourceMappingURL=query.js.map