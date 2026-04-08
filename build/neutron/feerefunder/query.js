"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeInfoResponse = exports.FeeInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("./params.js");
const genesis_js_1 = require("./genesis.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.feerefunder";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/neutron.feerefunder.QueryParamsRequest",
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
    typeUrl: "/neutron.feerefunder.QueryParamsResponse",
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
function createBaseFeeInfoRequest() {
    return {
        channelId: "",
        portId: "",
        sequence: BigInt(0),
    };
}
exports.FeeInfoRequest = {
    typeUrl: "/neutron.feerefunder.FeeInfoRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFeeInfoRequest();
        if ((0, helpers_js_1.isSet)(object.channelId))
            obj.channelId = String(object.channelId);
        if ((0, helpers_js_1.isSet)(object.portId))
            obj.portId = String(object.portId);
        if ((0, helpers_js_1.isSet)(object.sequence))
            obj.sequence = BigInt(object.sequence.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.portId !== undefined && (obj.portId = message.portId);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeeInfoRequest();
        message.channelId = object.channelId ?? "";
        message.portId = object.portId ?? "";
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence.toString());
        }
        return message;
    },
};
function createBaseFeeInfoResponse() {
    return {
        feeInfo: undefined,
    };
}
exports.FeeInfoResponse = {
    typeUrl: "/neutron.feerefunder.FeeInfoResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.feeInfo !== undefined) {
            genesis_js_1.FeeInfo.encode(message.feeInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.feeInfo = genesis_js_1.FeeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFeeInfoResponse();
        if ((0, helpers_js_1.isSet)(object.feeInfo))
            obj.feeInfo = genesis_js_1.FeeInfo.fromJSON(object.feeInfo);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.feeInfo !== undefined &&
            (obj.feeInfo = message.feeInfo ? genesis_js_1.FeeInfo.toJSON(message.feeInfo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeeInfoResponse();
        if (object.feeInfo !== undefined && object.feeInfo !== null) {
            message.feeInfo = genesis_js_1.FeeInfo.fromPartial(object.feeInfo);
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map