"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairID = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBasePairID() {
    return {
        token0: "",
        token1: "",
    };
}
exports.PairID = {
    typeUrl: "/neutron.dex.PairID",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.token0 !== "") {
            writer.uint32(10).string(message.token0);
        }
        if (message.token1 !== "") {
            writer.uint32(18).string(message.token1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePairID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token0 = reader.string();
                    break;
                case 2:
                    message.token1 = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePairID();
        if ((0, helpers_js_1.isSet)(object.token0))
            obj.token0 = String(object.token0);
        if ((0, helpers_js_1.isSet)(object.token1))
            obj.token1 = String(object.token1);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.token0 !== undefined && (obj.token0 = message.token0);
        message.token1 !== undefined && (obj.token1 = message.token1);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePairID();
        message.token0 = object.token0 ?? "";
        message.token1 = object.token1 ?? "";
        return message;
    },
};
//# sourceMappingURL=pair_id.js.map