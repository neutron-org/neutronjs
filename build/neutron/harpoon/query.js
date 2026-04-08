"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySubscribedContractsResponse = exports.QuerySubscribedContractsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const hooks_js_1 = require("./hooks.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.harpoon";
function createBaseQuerySubscribedContractsRequest() {
    return {
        hookType: 0,
    };
}
exports.QuerySubscribedContractsRequest = {
    typeUrl: "/neutron.harpoon.QuerySubscribedContractsRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.hookType !== 0) {
            writer.uint32(8).int32(message.hookType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubscribedContractsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hookType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySubscribedContractsRequest();
        if ((0, helpers_js_1.isSet)(object.hookType))
            obj.hookType = (0, hooks_js_1.hookTypeFromJSON)(object.hookType);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.hookType !== undefined && (obj.hookType = (0, hooks_js_1.hookTypeToJSON)(message.hookType));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySubscribedContractsRequest();
        message.hookType = object.hookType ?? 0;
        return message;
    },
};
function createBaseQuerySubscribedContractsResponse() {
    return {
        contractAddresses: [],
    };
}
exports.QuerySubscribedContractsResponse = {
    typeUrl: "/neutron.harpoon.QuerySubscribedContractsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.contractAddresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubscribedContractsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySubscribedContractsResponse();
        if (Array.isArray(object?.contractAddresses))
            obj.contractAddresses = object.contractAddresses.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.contractAddresses) {
            obj.contractAddresses = message.contractAddresses.map((e) => e);
        }
        else {
            obj.contractAddresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySubscribedContractsResponse();
        message.contractAddresses = object.contractAddresses?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=query.js.map