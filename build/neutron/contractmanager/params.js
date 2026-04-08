"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.contractmanager";
function createBaseParams() {
    return {
        sudoCallGasLimit: BigInt(0),
    };
}
exports.Params = {
    typeUrl: "/neutron.contractmanager.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sudoCallGasLimit !== BigInt(0)) {
            writer.uint32(8).uint64(message.sudoCallGasLimit);
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
                    message.sudoCallGasLimit = reader.uint64();
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
        if ((0, helpers_js_1.isSet)(object.sudoCallGasLimit))
            obj.sudoCallGasLimit = BigInt(object.sudoCallGasLimit.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sudoCallGasLimit !== undefined &&
            (obj.sudoCallGasLimit = (message.sudoCallGasLimit || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        if (object.sudoCallGasLimit !== undefined && object.sudoCallGasLimit !== null) {
            message.sudoCallGasLimit = BigInt(object.sudoCallGasLimit.toString());
        }
        return message;
    },
};
//# sourceMappingURL=params.js.map