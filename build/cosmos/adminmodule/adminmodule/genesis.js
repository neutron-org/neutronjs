"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
exports.protobufPackage = "cosmos.adminmodule.adminmodule";
function createBaseGenesisState() {
    return {
        admins: [],
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.adminmodule.adminmodule.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.admins) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admins.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if (Array.isArray(object?.admins))
            obj.admins = object.admins.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.admins) {
            obj.admins = message.admins.map((e) => e);
        }
        else {
            obj.admins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.admins = object.admins?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map