"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "neutron.ibcratelimit.v1beta1";
function createBaseParams() {
    return {
        contractAddress: undefined,
    };
}
exports.Params = {
    typeUrl: "/neutron.ibcratelimit.v1beta1.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.contractAddress !== undefined) {
            writer.uint32(10).string(message.contractAddress);
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
                    message.contractAddress = reader.string();
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
        if ((0, helpers_js_1.isSet)(object.contractAddress))
            obj.contractAddress = String(object.contractAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.contractAddress = object.contractAddress ?? undefined;
        return message;
    },
};
//# sourceMappingURL=params.js.map