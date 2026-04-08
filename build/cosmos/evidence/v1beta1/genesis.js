"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const any_js_1 = require("../../../google/protobuf/any.js");
const binary_js_1 = require("../../../binary.js");
exports.protobufPackage = "cosmos.evidence.v1beta1";
function createBaseGenesisState() {
    return {
        evidence: [],
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.evidence.v1beta1.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.evidence) {
            any_js_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.evidence.push(any_js_1.Any.decode(reader, reader.uint32()));
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
        if (Array.isArray(object?.evidence))
            obj.evidence = object.evidence.map((e) => any_js_1.Any.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map((e) => (e ? any_js_1.Any.toJSON(e) : undefined));
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.evidence = object.evidence?.map((e) => any_js_1.Any.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map