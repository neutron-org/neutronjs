"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const authz_js_1 = require("./authz.js");
const binary_js_1 = require("../../../binary.js");
exports.protobufPackage = "cosmos.authz.v1beta1";
function createBaseGenesisState() {
    return {
        authorization: [],
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.authz.v1beta1.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.authorization) {
            authz_js_1.GrantAuthorization.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.authorization.push(authz_js_1.GrantAuthorization.decode(reader, reader.uint32()));
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
        if (Array.isArray(object?.authorization))
            obj.authorization = object.authorization.map((e) => authz_js_1.GrantAuthorization.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.authorization) {
            obj.authorization = message.authorization.map((e) => (e ? authz_js_1.GrantAuthorization.toJSON(e) : undefined));
        }
        else {
            obj.authorization = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.authorization = object.authorization?.map((e) => authz_js_1.GrantAuthorization.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map