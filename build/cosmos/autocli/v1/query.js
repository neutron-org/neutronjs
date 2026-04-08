"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppOptionsResponse = exports.AppOptionsResponse_ModuleOptionsEntry = exports.AppOptionsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const options_js_1 = require("./options.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.autocli.v1";
function createBaseAppOptionsRequest() {
    return {};
}
exports.AppOptionsRequest = {
    typeUrl: "/cosmos.autocli.v1.AppOptionsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppOptionsRequest();
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
        const obj = createBaseAppOptionsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseAppOptionsRequest();
        return message;
    },
};
function createBaseAppOptionsResponse_ModuleOptionsEntry() {
    return {
        key: "",
        value: undefined,
    };
}
exports.AppOptionsResponse_ModuleOptionsEntry = {
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            options_js_1.ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = options_js_1.ModuleOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseAppOptionsResponse_ModuleOptionsEntry();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = String(object.key);
        if ((0, helpers_js_1.isSet)(object.value))
            obj.value = options_js_1.ModuleOptions.fromJSON(object.value);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? options_js_1.ModuleOptions.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
        message.key = object.key ?? "";
        if (object.value !== undefined && object.value !== null) {
            message.value = options_js_1.ModuleOptions.fromPartial(object.value);
        }
        return message;
    },
};
function createBaseAppOptionsResponse() {
    return {
        moduleOptions: {},
    };
}
exports.AppOptionsResponse = {
    typeUrl: "/cosmos.autocli.v1.AppOptionsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        Object.entries(message.moduleOptions).forEach(([key, value]) => {
            exports.AppOptionsResponse_ModuleOptionsEntry.encode({
                key: key,
                value,
            }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppOptionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.AppOptionsResponse_ModuleOptionsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.moduleOptions[entry1.key] = entry1.value;
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
        const obj = createBaseAppOptionsResponse();
        if ((0, helpers_js_1.isObject)(object.moduleOptions))
            obj.moduleOptions = Object.entries(object.moduleOptions).reduce((acc, [key, value]) => {
                acc[key] = options_js_1.ModuleOptions.fromJSON(value);
                return acc;
            }, {});
        return obj;
    },
    toJSON(message) {
        const obj = {};
        obj.moduleOptions = {};
        if (message.moduleOptions) {
            Object.entries(message.moduleOptions).forEach(([k, v]) => {
                obj.moduleOptions[k] = options_js_1.ModuleOptions.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAppOptionsResponse();
        message.moduleOptions = Object.entries(object.moduleOptions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = options_js_1.ModuleOptions.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
//# sourceMappingURL=query.js.map