"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Failure = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "neutron.contractmanager.v1";
function createBaseFailure() {
    return {
        channelId: "",
        address: "",
        id: BigInt(0),
        ackId: BigInt(0),
        ackType: "",
    };
}
exports.Failure = {
    typeUrl: "/neutron.contractmanager.v1.Failure",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(24).uint64(message.id);
        }
        if (message.ackId !== BigInt(0)) {
            writer.uint32(32).uint64(message.ackId);
        }
        if (message.ackType !== "") {
            writer.uint32(42).string(message.ackType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFailure();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.id = reader.uint64();
                    break;
                case 4:
                    message.ackId = reader.uint64();
                    break;
                case 5:
                    message.ackType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFailure();
        if ((0, helpers_js_1.isSet)(object.channelId))
            obj.channelId = String(object.channelId);
        if ((0, helpers_js_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        if ((0, helpers_js_1.isSet)(object.ackId))
            obj.ackId = BigInt(object.ackId.toString());
        if ((0, helpers_js_1.isSet)(object.ackType))
            obj.ackType = String(object.ackType);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.address !== undefined && (obj.address = message.address);
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.ackId !== undefined && (obj.ackId = (message.ackId || BigInt(0)).toString());
        message.ackType !== undefined && (obj.ackType = message.ackType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFailure();
        message.channelId = object.channelId ?? "";
        message.address = object.address ?? "";
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        if (object.ackId !== undefined && object.ackId !== null) {
            message.ackId = BigInt(object.ackId.toString());
        }
        message.ackType = object.ackType ?? "";
        return message;
    },
};
//# sourceMappingURL=failure.js.map