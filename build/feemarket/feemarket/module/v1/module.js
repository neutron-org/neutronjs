"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../../binary.js");
const helpers_js_1 = require("../../../../helpers.js");
exports.protobufPackage = "feemarket.feemarket.module.v1";
function createBaseModule() {
    return {
        authority: "",
        feeRecipientModule: "",
    };
}
exports.Module = {
    typeUrl: "/feemarket.feemarket.module.v1.Module",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.feeRecipientModule !== "") {
            writer.uint32(18).string(message.feeRecipientModule);
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
                    message.authority = reader.string();
                    break;
                case 2:
                    message.feeRecipientModule = reader.string();
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
        if ((0, helpers_js_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if ((0, helpers_js_1.isSet)(object.feeRecipientModule))
            obj.feeRecipientModule = String(object.feeRecipientModule);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.feeRecipientModule !== undefined && (obj.feeRecipientModule = message.feeRecipientModule);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.authority = object.authority ?? "";
        message.feeRecipientModule = object.feeRecipientModule ?? "";
        return message;
    },
};
//# sourceMappingURL=module.js.map