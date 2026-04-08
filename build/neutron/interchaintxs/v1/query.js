"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryInterchainAccountAddressResponse = exports.QueryInterchainAccountAddressRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("./params.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "neutron.interchaintxs.v1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/neutron.interchaintxs.v1.QueryParamsRequest",
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
    typeUrl: "/neutron.interchaintxs.v1.QueryParamsResponse",
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
function createBaseQueryInterchainAccountAddressRequest() {
    return {
        ownerAddress: "",
        interchainAccountId: "",
        connectionId: "",
    };
}
exports.QueryInterchainAccountAddressRequest = {
    typeUrl: "/neutron.interchaintxs.v1.QueryInterchainAccountAddressRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.ownerAddress !== "") {
            writer.uint32(10).string(message.ownerAddress);
        }
        if (message.interchainAccountId !== "") {
            writer.uint32(18).string(message.interchainAccountId);
        }
        if (message.connectionId !== "") {
            writer.uint32(26).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ownerAddress = reader.string();
                    break;
                case 2:
                    message.interchainAccountId = reader.string();
                    break;
                case 3:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryInterchainAccountAddressRequest();
        if ((0, helpers_js_1.isSet)(object.ownerAddress))
            obj.ownerAddress = String(object.ownerAddress);
        if ((0, helpers_js_1.isSet)(object.interchainAccountId))
            obj.interchainAccountId = String(object.interchainAccountId);
        if ((0, helpers_js_1.isSet)(object.connectionId))
            obj.connectionId = String(object.connectionId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
        message.interchainAccountId !== undefined && (obj.interchainAccountId = message.interchainAccountId);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInterchainAccountAddressRequest();
        message.ownerAddress = object.ownerAddress ?? "";
        message.interchainAccountId = object.interchainAccountId ?? "";
        message.connectionId = object.connectionId ?? "";
        return message;
    },
};
function createBaseQueryInterchainAccountAddressResponse() {
    return {
        interchainAccountAddress: "",
    };
}
exports.QueryInterchainAccountAddressResponse = {
    typeUrl: "/neutron.interchaintxs.v1.QueryInterchainAccountAddressResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.interchainAccountAddress !== "") {
            writer.uint32(10).string(message.interchainAccountAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interchainAccountAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryInterchainAccountAddressResponse();
        if ((0, helpers_js_1.isSet)(object.interchainAccountAddress))
            obj.interchainAccountAddress = String(object.interchainAccountAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.interchainAccountAddress !== undefined &&
            (obj.interchainAccountAddress = message.interchainAccountAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInterchainAccountAddressResponse();
        message.interchainAccountAddress = object.interchainAccountAddress ?? "";
        return message;
    },
};
//# sourceMappingURL=query.js.map