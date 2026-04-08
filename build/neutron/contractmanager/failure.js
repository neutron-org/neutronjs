"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Failure = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.contractmanager";
function createBaseFailure() {
    return {
        address: "",
        id: BigInt(0),
        sudoPayload: new Uint8Array(),
        error: "",
    };
}
exports.Failure = {
    typeUrl: "/neutron.contractmanager.Failure",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.sudoPayload.length !== 0) {
            writer.uint32(26).bytes(message.sudoPayload);
        }
        if (message.error !== "") {
            writer.uint32(34).string(message.error);
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
                    message.address = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.sudoPayload = reader.bytes();
                    break;
                case 4:
                    message.error = reader.string();
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
        if ((0, helpers_js_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        if ((0, helpers_js_1.isSet)(object.sudoPayload))
            obj.sudoPayload = (0, helpers_js_1.bytesFromBase64)(object.sudoPayload);
        if ((0, helpers_js_1.isSet)(object.error))
            obj.error = String(object.error);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.sudoPayload !== undefined &&
            (obj.sudoPayload = (0, helpers_js_1.base64FromBytes)(message.sudoPayload !== undefined ? message.sudoPayload : new Uint8Array()));
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFailure();
        message.address = object.address ?? "";
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        message.sudoPayload = object.sudoPayload ?? new Uint8Array();
        message.error = object.error ?? "";
        return message;
    },
};
//# sourceMappingURL=failure.js.map