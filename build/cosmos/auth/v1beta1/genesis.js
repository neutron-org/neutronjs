"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const auth_js_1 = require("./auth.js");
const any_js_1 = require("../../../google/protobuf/any.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.auth.v1beta1";
function createBaseGenesisState() {
    return {
        params: auth_js_1.Params.fromPartial({}),
        accounts: [],
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.auth.v1beta1.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            auth_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.accounts) {
            any_js_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = auth_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.accounts.push(any_js_1.Any.decode(reader, reader.uint32()));
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
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = auth_js_1.Params.fromJSON(object.params);
        if (Array.isArray(object?.accounts))
            obj.accounts = object.accounts.map((e) => any_js_1.Any.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? auth_js_1.Params.toJSON(message.params) : undefined);
        if (message.accounts) {
            obj.accounts = message.accounts.map((e) => (e ? any_js_1.Any.toJSON(e) : undefined));
        }
        else {
            obj.accounts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = auth_js_1.Params.fromPartial(object.params);
        }
        message.accounts = object.accounts?.map((e) => any_js_1.Any.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map