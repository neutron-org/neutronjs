"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.cron";
function createBaseParams() {
    return {
        securityAddress: "",
        limit: BigInt(0),
    };
}
exports.Params = {
    typeUrl: "/neutron.cron.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.securityAddress !== "") {
            writer.uint32(10).string(message.securityAddress);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(16).uint64(message.limit);
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
                    message.securityAddress = reader.string();
                    break;
                case 2:
                    message.limit = reader.uint64();
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
        if ((0, helpers_js_1.isSet)(object.securityAddress))
            obj.securityAddress = String(object.securityAddress);
        if ((0, helpers_js_1.isSet)(object.limit))
            obj.limit = BigInt(object.limit.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.securityAddress !== undefined && (obj.securityAddress = message.securityAddress);
        message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.securityAddress = object.securityAddress ?? "";
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit.toString());
        }
        return message;
    },
};
//# sourceMappingURL=params.js.map