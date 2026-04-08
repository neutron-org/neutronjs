"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecDecCoin = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBasePrecDecCoin() {
    return {
        denom: "",
        amount: "",
    };
}
exports.PrecDecCoin = {
    typeUrl: "/neutron.dex.PrecDecCoin",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.amount !== "") {
            writer.uint32(18).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrecDecCoin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePrecDecCoin();
        if ((0, helpers_js_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_js_1.isSet)(object.amount))
            obj.amount = String(object.amount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePrecDecCoin();
        message.denom = object.denom ?? "";
        message.amount = object.amount ?? "";
        return message;
    },
};
//# sourceMappingURL=precdec_coin.js.map