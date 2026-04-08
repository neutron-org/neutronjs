"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgIncreaseCountResponse = exports.MsgIncreaseCounter = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.counter.v1";
function createBaseMsgIncreaseCounter() {
    return {
        signer: "",
        count: BigInt(0),
    };
}
exports.MsgIncreaseCounter = {
    typeUrl: "/cosmos.counter.v1.MsgIncreaseCounter",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).int64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIncreaseCounter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgIncreaseCounter();
        if ((0, helpers_js_1.isSet)(object.signer))
            obj.signer = String(object.signer);
        if ((0, helpers_js_1.isSet)(object.count))
            obj.count = BigInt(object.count.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgIncreaseCounter();
        message.signer = object.signer ?? "";
        if (object.count !== undefined && object.count !== null) {
            message.count = BigInt(object.count.toString());
        }
        return message;
    },
};
function createBaseMsgIncreaseCountResponse() {
    return {
        newCount: BigInt(0),
    };
}
exports.MsgIncreaseCountResponse = {
    typeUrl: "/cosmos.counter.v1.MsgIncreaseCountResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.newCount !== BigInt(0)) {
            writer.uint32(8).int64(message.newCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIncreaseCountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgIncreaseCountResponse();
        if ((0, helpers_js_1.isSet)(object.newCount))
            obj.newCount = BigInt(object.newCount.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.newCount !== undefined && (obj.newCount = (message.newCount || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgIncreaseCountResponse();
        if (object.newCount !== undefined && object.newCount !== null) {
            message.newCount = BigInt(object.newCount.toString());
        }
        return message;
    },
};
//# sourceMappingURL=tx.js.map