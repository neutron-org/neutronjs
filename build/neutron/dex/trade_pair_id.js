"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradePairID = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBaseTradePairID() {
    return {
        makerDenom: "",
        takerDenom: "",
    };
}
exports.TradePairID = {
    typeUrl: "/neutron.dex.TradePairID",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.makerDenom !== "") {
            writer.uint32(18).string(message.makerDenom);
        }
        if (message.takerDenom !== "") {
            writer.uint32(26).string(message.takerDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTradePairID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.makerDenom = reader.string();
                    break;
                case 3:
                    message.takerDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTradePairID();
        if ((0, helpers_js_1.isSet)(object.makerDenom))
            obj.makerDenom = String(object.makerDenom);
        if ((0, helpers_js_1.isSet)(object.takerDenom))
            obj.takerDenom = String(object.takerDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.makerDenom !== undefined && (obj.makerDenom = message.makerDenom);
        message.takerDenom !== undefined && (obj.takerDenom = message.takerDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTradePairID();
        message.makerDenom = object.makerDenom ?? "";
        message.takerDenom = object.takerDenom ?? "";
        return message;
    },
};
//# sourceMappingURL=trade_pair_id.js.map