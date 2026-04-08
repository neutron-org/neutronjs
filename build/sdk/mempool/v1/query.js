"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTxDistributionResponse = exports.GetTxDistributionResponse_DistributionEntry = exports.GetTxDistributionRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "sdk.mempool.v1";
function createBaseGetTxDistributionRequest() {
    return {};
}
exports.GetTxDistributionRequest = {
    typeUrl: "/sdk.mempool.v1.GetTxDistributionRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDistributionRequest();
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
        const obj = createBaseGetTxDistributionRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetTxDistributionRequest();
        return message;
    },
};
function createBaseGetTxDistributionResponse_DistributionEntry() {
    return {
        key: "",
        value: BigInt(0),
    };
}
exports.GetTxDistributionResponse_DistributionEntry = {
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== BigInt(0)) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDistributionResponse_DistributionEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetTxDistributionResponse_DistributionEntry();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = String(object.key);
        if ((0, helpers_js_1.isSet)(object.value))
            obj.value = BigInt(object.value.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxDistributionResponse_DistributionEntry();
        message.key = object.key ?? "";
        if (object.value !== undefined && object.value !== null) {
            message.value = BigInt(object.value.toString());
        }
        return message;
    },
};
function createBaseGetTxDistributionResponse() {
    return {
        distribution: {},
    };
}
exports.GetTxDistributionResponse = {
    typeUrl: "/sdk.mempool.v1.GetTxDistributionResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        Object.entries(message.distribution).forEach(([key, value]) => {
            exports.GetTxDistributionResponse_DistributionEntry.encode({
                key: key,
                value,
            }, writer.uint32(8).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDistributionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.GetTxDistributionResponse_DistributionEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.distribution[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetTxDistributionResponse();
        if ((0, helpers_js_1.isObject)(object.distribution))
            obj.distribution = Object.entries(object.distribution).reduce((acc, [key, value]) => {
                acc[key] = BigInt(value.toString());
                return acc;
            }, {});
        return obj;
    },
    toJSON(message) {
        const obj = {};
        obj.distribution = {};
        if (message.distribution) {
            Object.entries(message.distribution).forEach(([k, v]) => {
                obj.distribution[k] = v.toString();
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxDistributionResponse();
        message.distribution = Object.entries(object.distribution ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = BigInt(value.toString());
            }
            return acc;
        }, {});
        return message;
    },
};
//# sourceMappingURL=query.js.map