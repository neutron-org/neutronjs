"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerklePath = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../../binary.js");
const helpers_js_1 = require("../../../../helpers.js");
exports.protobufPackage = "ibc.core.commitment.v2";
function createBaseMerklePath() {
    return {
        keyPath: [],
    };
}
exports.MerklePath = {
    typeUrl: "/ibc.core.commitment.v2.MerklePath",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.keyPath) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerklePath();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyPath.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMerklePath();
        if (Array.isArray(object?.keyPath))
            obj.keyPath = object.keyPath.map((e) => (0, helpers_js_1.bytesFromBase64)(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.keyPath) {
            obj.keyPath = message.keyPath.map((e) => (0, helpers_js_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.keyPath = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerklePath();
        message.keyPath = object.keyPath?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=commitment.js.map