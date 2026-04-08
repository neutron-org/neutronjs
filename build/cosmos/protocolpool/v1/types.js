"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ContinuousFund = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const timestamp_js_1 = require("../../../google/protobuf/timestamp.js");
const binary_js_1 = require("../../../binary.js");
const math_1 = require("@cosmjs/math");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.protocolpool.v1";
function createBaseContinuousFund() {
    return {
        recipient: "",
        percentage: "",
        expiry: undefined,
    };
}
exports.ContinuousFund = {
    typeUrl: "/cosmos.protocolpool.v1.ContinuousFund",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.recipient !== "") {
            writer.uint32(10).string(message.recipient);
        }
        if (message.percentage !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.percentage, 18).atomics);
        }
        if (message.expiry !== undefined) {
            timestamp_js_1.Timestamp.encode(message.expiry, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContinuousFund();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipient = reader.string();
                    break;
                case 2:
                    message.percentage = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.expiry = timestamp_js_1.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseContinuousFund();
        if ((0, helpers_js_1.isSet)(object.recipient))
            obj.recipient = String(object.recipient);
        if ((0, helpers_js_1.isSet)(object.percentage))
            obj.percentage = String(object.percentage);
        if ((0, helpers_js_1.isSet)(object.expiry))
            obj.expiry = (0, helpers_js_1.fromJsonTimestamp)(object.expiry);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.percentage !== undefined && (obj.percentage = message.percentage);
        message.expiry !== undefined && (obj.expiry = (0, helpers_js_1.fromTimestamp)(message.expiry).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseContinuousFund();
        message.recipient = object.recipient ?? "";
        message.percentage = object.percentage ?? "";
        if (object.expiry !== undefined && object.expiry !== null) {
            message.expiry = timestamp_js_1.Timestamp.fromPartial(object.expiry);
        }
        return message;
    },
};
function createBaseParams() {
    return {
        enabledDistributionDenoms: [],
        distributionFrequency: BigInt(0),
    };
}
exports.Params = {
    typeUrl: "/cosmos.protocolpool.v1.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.enabledDistributionDenoms) {
            writer.uint32(10).string(v);
        }
        if (message.distributionFrequency !== BigInt(0)) {
            writer.uint32(16).uint64(message.distributionFrequency);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enabledDistributionDenoms.push(reader.string());
                    break;
                case 2:
                    message.distributionFrequency = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseParams();
        if (Array.isArray(object?.enabledDistributionDenoms))
            obj.enabledDistributionDenoms = object.enabledDistributionDenoms.map((e) => String(e));
        if ((0, helpers_js_1.isSet)(object.distributionFrequency))
            obj.distributionFrequency = BigInt(object.distributionFrequency.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.enabledDistributionDenoms) {
            obj.enabledDistributionDenoms = message.enabledDistributionDenoms.map((e) => e);
        }
        else {
            obj.enabledDistributionDenoms = [];
        }
        message.distributionFrequency !== undefined &&
            (obj.distributionFrequency = (message.distributionFrequency || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.enabledDistributionDenoms = object.enabledDistributionDenoms?.map((e) => e) || [];
        if (object.distributionFrequency !== undefined && object.distributionFrequency !== null) {
            message.distributionFrequency = BigInt(object.distributionFrequency.toString());
        }
        return message;
    },
};
//# sourceMappingURL=types.js.map