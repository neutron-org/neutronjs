"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyPair = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "slinky.types.v1";
function createBaseCurrencyPair() {
    return {
        base: "",
        quote: "",
    };
}
exports.CurrencyPair = {
    typeUrl: "/slinky.types.v1.CurrencyPair",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.base !== "") {
            writer.uint32(10).string(message.base);
        }
        if (message.quote !== "") {
            writer.uint32(18).string(message.quote);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCurrencyPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base = reader.string();
                    break;
                case 2:
                    message.quote = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCurrencyPair();
        if ((0, helpers_js_1.isSet)(object.base))
            obj.base = String(object.base);
        if ((0, helpers_js_1.isSet)(object.quote))
            obj.quote = String(object.quote);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.base !== undefined && (obj.base = message.base);
        message.quote !== undefined && (obj.quote = message.quote);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCurrencyPair();
        message.base = object.base ?? "";
        message.quote = object.quote ?? "";
        return message;
    },
};
//# sourceMappingURL=currency_pair.js.map