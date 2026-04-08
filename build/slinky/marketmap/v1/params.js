"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "slinky.marketmap.v1";
function createBaseParams() {
    return {
        marketAuthorities: [],
        admin: "",
    };
}
exports.Params = {
    typeUrl: "/slinky.marketmap.v1.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.marketAuthorities) {
            writer.uint32(10).string(v);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
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
                    message.marketAuthorities.push(reader.string());
                    break;
                case 2:
                    message.admin = reader.string();
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
        if (Array.isArray(object?.marketAuthorities))
            obj.marketAuthorities = object.marketAuthorities.map((e) => String(e));
        if ((0, helpers_js_1.isSet)(object.admin))
            obj.admin = String(object.admin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.marketAuthorities) {
            obj.marketAuthorities = message.marketAuthorities.map((e) => e);
        }
        else {
            obj.marketAuthorities = [];
        }
        message.admin !== undefined && (obj.admin = message.admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.marketAuthorities = object.marketAuthorities?.map((e) => e) || [];
        message.admin = object.admin ?? "";
        return message;
    },
};
//# sourceMappingURL=params.js.map