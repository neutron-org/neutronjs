"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("./params.js");
const failure_js_1 = require("./failure.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.contractmanager";
function createBaseGenesisState() {
    return {
        params: params_js_1.Params.fromPartial({}),
        failuresList: [],
    };
}
exports.GenesisState = {
    typeUrl: "/neutron.contractmanager.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.failuresList) {
            failure_js_1.Failure.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = params_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.failuresList.push(failure_js_1.Failure.decode(reader, reader.uint32()));
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
            obj.params = params_js_1.Params.fromJSON(object.params);
        if (Array.isArray(object?.failuresList))
            obj.failuresList = object.failuresList.map((e) => failure_js_1.Failure.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        if (message.failuresList) {
            obj.failuresList = message.failuresList.map((e) => (e ? failure_js_1.Failure.toJSON(e) : undefined));
        }
        else {
            obj.failuresList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        message.failuresList = object.failuresList?.map((e) => failure_js_1.Failure.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map