"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const fee_js_1 = require("./fee.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.feerefunder";
function createBaseParams() {
    return {
        minFee: fee_js_1.Fee.fromPartial({}),
        feeEnabled: false,
    };
}
exports.Params = {
    typeUrl: "/neutron.feerefunder.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.minFee !== undefined) {
            fee_js_1.Fee.encode(message.minFee, writer.uint32(10).fork()).ldelim();
        }
        if (message.feeEnabled === true) {
            writer.uint32(16).bool(message.feeEnabled);
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
                    message.minFee = fee_js_1.Fee.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feeEnabled = reader.bool();
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
        if ((0, helpers_js_1.isSet)(object.minFee))
            obj.minFee = fee_js_1.Fee.fromJSON(object.minFee);
        if ((0, helpers_js_1.isSet)(object.feeEnabled))
            obj.feeEnabled = Boolean(object.feeEnabled);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.minFee !== undefined && (obj.minFee = message.minFee ? fee_js_1.Fee.toJSON(message.minFee) : undefined);
        message.feeEnabled !== undefined && (obj.feeEnabled = message.feeEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        if (object.minFee !== undefined && object.minFee !== null) {
            message.minFee = fee_js_1.Fee.fromPartial(object.minFee);
        }
        message.feeEnabled = object.feeEnabled ?? false;
        return message;
    },
};
//# sourceMappingURL=params.js.map