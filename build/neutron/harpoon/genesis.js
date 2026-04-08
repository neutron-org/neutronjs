"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const hooks_js_1 = require("./hooks.js");
const binary_js_1 = require("../../binary.js");
exports.protobufPackage = "neutron.harpoon";
function createBaseGenesisState() {
    return {
        hookSubscriptions: [],
    };
}
exports.GenesisState = {
    typeUrl: "/neutron.harpoon.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.hookSubscriptions) {
            hooks_js_1.HookSubscriptions.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.hookSubscriptions.push(hooks_js_1.HookSubscriptions.decode(reader, reader.uint32()));
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
        if (Array.isArray(object?.hookSubscriptions))
            obj.hookSubscriptions = object.hookSubscriptions.map((e) => hooks_js_1.HookSubscriptions.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.hookSubscriptions) {
            obj.hookSubscriptions = message.hookSubscriptions.map((e) => e ? hooks_js_1.HookSubscriptions.toJSON(e) : undefined);
        }
        else {
            obj.hookSubscriptions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.hookSubscriptions = object.hookSubscriptions?.map((e) => hooks_js_1.HookSubscriptions.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map