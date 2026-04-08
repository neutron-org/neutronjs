"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrderExpiration = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const timestamp_js_1 = require("../../google/protobuf/timestamp.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBaseLimitOrderExpiration() {
    return {
        expirationTime: timestamp_js_1.Timestamp.fromPartial({}),
        trancheRef: new Uint8Array(),
    };
}
exports.LimitOrderExpiration = {
    typeUrl: "/neutron.dex.LimitOrderExpiration",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.expirationTime !== undefined) {
            timestamp_js_1.Timestamp.encode(message.expirationTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.trancheRef.length !== 0) {
            writer.uint32(18).bytes(message.trancheRef);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimitOrderExpiration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.expirationTime = timestamp_js_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.trancheRef = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLimitOrderExpiration();
        if ((0, helpers_js_1.isSet)(object.expirationTime))
            obj.expirationTime = (0, helpers_js_1.fromJsonTimestamp)(object.expirationTime);
        if ((0, helpers_js_1.isSet)(object.trancheRef))
            obj.trancheRef = (0, helpers_js_1.bytesFromBase64)(object.trancheRef);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.expirationTime !== undefined &&
            (obj.expirationTime = (0, helpers_js_1.fromTimestamp)(message.expirationTime).toISOString());
        message.trancheRef !== undefined &&
            (obj.trancheRef = (0, helpers_js_1.base64FromBytes)(message.trancheRef !== undefined ? message.trancheRef : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLimitOrderExpiration();
        if (object.expirationTime !== undefined && object.expirationTime !== null) {
            message.expirationTime = timestamp_js_1.Timestamp.fromPartial(object.expirationTime);
        }
        message.trancheRef = object.trancheRef ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=limit_order_expiration.js.map