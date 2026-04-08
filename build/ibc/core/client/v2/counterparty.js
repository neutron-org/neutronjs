"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterpartyInfo = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../../binary.js");
const helpers_js_1 = require("../../../../helpers.js");
exports.protobufPackage = "ibc.core.client.v2";
function createBaseCounterpartyInfo() {
    return {
        merklePrefix: [],
        clientId: "",
    };
}
exports.CounterpartyInfo = {
    typeUrl: "/ibc.core.client.v2.CounterpartyInfo",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.merklePrefix) {
            writer.uint32(10).bytes(v);
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCounterpartyInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.merklePrefix.push(reader.bytes());
                    break;
                case 2:
                    message.clientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCounterpartyInfo();
        if (Array.isArray(object?.merklePrefix))
            obj.merklePrefix = object.merklePrefix.map((e) => (0, helpers_js_1.bytesFromBase64)(e));
        if ((0, helpers_js_1.isSet)(object.clientId))
            obj.clientId = String(object.clientId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.merklePrefix) {
            obj.merklePrefix = message.merklePrefix.map((e) => (0, helpers_js_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.merklePrefix = [];
        }
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCounterpartyInfo();
        message.merklePrefix = object.merklePrefix?.map((e) => e) || [];
        message.clientId = object.clientId ?? "";
        return message;
    },
};
//# sourceMappingURL=counterparty.js.map