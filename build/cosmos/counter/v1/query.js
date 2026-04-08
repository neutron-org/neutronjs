"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGetCountResponse = exports.QueryGetCountRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.counter.v1";
function createBaseQueryGetCountRequest() {
    return {};
}
exports.QueryGetCountRequest = {
    typeUrl: "/cosmos.counter.v1.QueryGetCountRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseQueryGetCountRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryGetCountRequest();
        return message;
    },
};
function createBaseQueryGetCountResponse() {
    return {
        totalCount: BigInt(0),
    };
}
exports.QueryGetCountResponse = {
    typeUrl: "/cosmos.counter.v1.QueryGetCountResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.totalCount !== BigInt(0)) {
            writer.uint32(8).int64(message.totalCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetCountResponse();
        if ((0, helpers_js_1.isSet)(object.totalCount))
            obj.totalCount = BigInt(object.totalCount.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.totalCount !== undefined && (obj.totalCount = (message.totalCount || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetCountResponse();
        if (object.totalCount !== undefined && object.totalCount !== null) {
            message.totalCount = BigInt(object.totalCount.toString());
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map