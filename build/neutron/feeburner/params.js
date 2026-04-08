"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.feeburner";
function createBaseParams() {
    return {
        neutronDenom: "",
        reserveAddress: "",
        treasuryAddress: "",
    };
}
exports.Params = {
    typeUrl: "/neutron.feeburner.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.neutronDenom !== "") {
            writer.uint32(10).string(message.neutronDenom);
        }
        if (message.reserveAddress !== "") {
            writer.uint32(18).string(message.reserveAddress);
        }
        if (message.treasuryAddress !== "") {
            writer.uint32(26).string(message.treasuryAddress);
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
                    message.neutronDenom = reader.string();
                    break;
                case 2:
                    message.reserveAddress = reader.string();
                    break;
                case 3:
                    message.treasuryAddress = reader.string();
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
        if ((0, helpers_js_1.isSet)(object.neutronDenom))
            obj.neutronDenom = String(object.neutronDenom);
        if ((0, helpers_js_1.isSet)(object.reserveAddress))
            obj.reserveAddress = String(object.reserveAddress);
        if ((0, helpers_js_1.isSet)(object.treasuryAddress))
            obj.treasuryAddress = String(object.treasuryAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.neutronDenom !== undefined && (obj.neutronDenom = message.neutronDenom);
        message.reserveAddress !== undefined && (obj.reserveAddress = message.reserveAddress);
        message.treasuryAddress !== undefined && (obj.treasuryAddress = message.treasuryAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.neutronDenom = object.neutronDenom ?? "";
        message.reserveAddress = object.reserveAddress ?? "";
        message.treasuryAddress = object.treasuryAddress ?? "";
        return message;
    },
};
//# sourceMappingURL=params.js.map