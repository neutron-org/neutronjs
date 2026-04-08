"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivKey = exports.PubKey = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.crypto.secp256r1";
function createBasePubKey() {
    return {
        key: new Uint8Array(),
    };
}
exports.PubKey = {
    typeUrl: "/cosmos.crypto.secp256r1.PubKey",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePubKey();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = (0, helpers_js_1.bytesFromBase64)(object.key);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = (0, helpers_js_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePubKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    },
};
function createBasePrivKey() {
    return {
        secret: new Uint8Array(),
    };
}
exports.PrivKey = {
    typeUrl: "/cosmos.crypto.secp256r1.PrivKey",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.secret.length !== 0) {
            writer.uint32(10).bytes(message.secret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrivKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.secret = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePrivKey();
        if ((0, helpers_js_1.isSet)(object.secret))
            obj.secret = (0, helpers_js_1.bytesFromBase64)(object.secret);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.secret !== undefined &&
            (obj.secret = (0, helpers_js_1.base64FromBytes)(message.secret !== undefined ? message.secret : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePrivKey();
        message.secret = object.secret ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=keys.js.map