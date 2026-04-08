"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenomAuthorityMetadata = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "osmosis.tokenfactory.v1beta1";
function createBaseDenomAuthorityMetadata() {
    return {
        admin: "",
    };
}
exports.DenomAuthorityMetadata = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomAuthorityMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDenomAuthorityMetadata();
        if ((0, helpers_js_1.isSet)(object.admin))
            obj.admin = String(object.admin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomAuthorityMetadata();
        message.admin = object.admin ?? "";
        return message;
    },
};
//# sourceMappingURL=authorityMetadata.js.map