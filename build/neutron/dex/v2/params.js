"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "neutron.dex.v2";
function createBaseParams() {
    return {
        feeTiers: [],
        maxTrueTakerSpread: "",
    };
}
exports.Params = {
    typeUrl: "/neutron.dex.v2.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.feeTiers) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.maxTrueTakerSpread !== "") {
            writer.uint32(18).string(message.maxTrueTakerSpread);
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.feeTiers.push(reader.uint64());
                        }
                    }
                    else {
                        message.feeTiers.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.maxTrueTakerSpread = reader.string();
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
        if (Array.isArray(object?.feeTiers))
            obj.feeTiers = object.feeTiers.map((e) => BigInt(e.toString()));
        if ((0, helpers_js_1.isSet)(object.maxTrueTakerSpread))
            obj.maxTrueTakerSpread = String(object.maxTrueTakerSpread);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.feeTiers) {
            obj.feeTiers = message.feeTiers.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.feeTiers = [];
        }
        message.maxTrueTakerSpread !== undefined && (obj.maxTrueTakerSpread = message.maxTrueTakerSpread);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.feeTiers = object.feeTiers?.map((e) => BigInt(e.toString())) || [];
        message.maxTrueTakerSpread = object.maxTrueTakerSpread ?? "";
        return message;
    },
};
//# sourceMappingURL=params.js.map