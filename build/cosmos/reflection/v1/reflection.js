"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDescriptorsResponse = exports.FileDescriptorsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const descriptor_js_1 = require("../../../google/protobuf/descriptor.js");
const binary_js_1 = require("../../../binary.js");
exports.protobufPackage = "cosmos.reflection.v1";
function createBaseFileDescriptorsRequest() {
    return {};
}
exports.FileDescriptorsRequest = {
    typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsRequest();
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
        const obj = createBaseFileDescriptorsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseFileDescriptorsRequest();
        return message;
    },
};
function createBaseFileDescriptorsResponse() {
    return {
        files: [],
    };
}
exports.FileDescriptorsResponse = {
    typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.files) {
            descriptor_js_1.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.files.push(descriptor_js_1.FileDescriptorProto.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFileDescriptorsResponse();
        if (Array.isArray(object?.files))
            obj.files = object.files.map((e) => descriptor_js_1.FileDescriptorProto.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.files) {
            obj.files = message.files.map((e) => (e ? descriptor_js_1.FileDescriptorProto.toJSON(e) : undefined));
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFileDescriptorsResponse();
        message.files = object.files?.map((e) => descriptor_js_1.FileDescriptorProto.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=reflection.js.map