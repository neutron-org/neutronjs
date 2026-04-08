"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitArray = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "tendermint.libs.bits";
function createBaseBitArray() {
    return {
        bits: BigInt(0),
        elems: [],
    };
}
exports.BitArray = {
    typeUrl: "/tendermint.libs.bits.BitArray",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.bits !== BigInt(0)) {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (const v of message.elems) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bits = reader.int64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.elems.push(reader.uint64());
                        }
                    }
                    else {
                        message.elems.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseBitArray();
        if ((0, helpers_js_1.isSet)(object.bits))
            obj.bits = BigInt(object.bits.toString());
        if (Array.isArray(object?.elems))
            obj.elems = object.elems.map((e) => BigInt(e.toString()));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.bits !== undefined && (obj.bits = (message.bits || BigInt(0)).toString());
        if (message.elems) {
            obj.elems = message.elems.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBitArray();
        if (object.bits !== undefined && object.bits !== null) {
            message.bits = BigInt(object.bits.toString());
        }
        message.elems = object.elems?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
//# sourceMappingURL=types.js.map