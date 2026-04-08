"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const duration_js_1 = require("../../../../google/protobuf/duration.js");
const binary_js_1 = require("../../../../binary.js");
const helpers_js_1 = require("../../../../helpers.js");
exports.protobufPackage = "cosmos.group.module.v1";
function createBaseModule() {
    return {
        maxExecutionPeriod: duration_js_1.Duration.fromPartial({}),
        maxMetadataLen: BigInt(0),
    };
}
exports.Module = {
    typeUrl: "/cosmos.group.module.v1.Module",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.maxExecutionPeriod !== undefined) {
            duration_js_1.Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxMetadataLen !== BigInt(0)) {
            writer.uint32(16).uint64(message.maxMetadataLen);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxExecutionPeriod = duration_js_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxMetadataLen = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModule();
        if ((0, helpers_js_1.isSet)(object.maxExecutionPeriod))
            obj.maxExecutionPeriod = duration_js_1.Duration.fromJSON(object.maxExecutionPeriod);
        if ((0, helpers_js_1.isSet)(object.maxMetadataLen))
            obj.maxMetadataLen = BigInt(object.maxMetadataLen.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.maxExecutionPeriod !== undefined &&
            (obj.maxExecutionPeriod = message.maxExecutionPeriod
                ? duration_js_1.Duration.toJSON(message.maxExecutionPeriod)
                : undefined);
        message.maxMetadataLen !== undefined &&
            (obj.maxMetadataLen = (message.maxMetadataLen || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModule();
        if (object.maxExecutionPeriod !== undefined && object.maxExecutionPeriod !== null) {
            message.maxExecutionPeriod = duration_js_1.Duration.fromPartial(object.maxExecutionPeriod);
        }
        if (object.maxMetadataLen !== undefined && object.maxMetadataLen !== null) {
            message.maxMetadataLen = BigInt(object.maxMetadataLen.toString());
        }
        return message;
    },
};
//# sourceMappingURL=module.js.map