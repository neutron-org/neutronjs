"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFailuresResponse = exports.QueryFailureResponse = exports.QueryFailureRequest = exports.QueryFailuresRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const pagination_js_1 = require("../../cosmos/base/query/v1beta1/pagination.js");
const params_js_1 = require("./params.js");
const failure_js_1 = require("./failure.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.contractmanager";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/neutron.contractmanager.QueryParamsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const obj = createBaseQueryParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/neutron.contractmanager.QueryParamsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_js_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryParamsResponse();
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryFailuresRequest() {
    return {
        address: "",
        pagination: undefined,
    };
}
exports.QueryFailuresRequest = {
    typeUrl: "/neutron.contractmanager.QueryFailuresRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFailuresRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryFailuresRequest();
        if ((0, helpers_js_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFailuresRequest();
        message.address = object.address ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryFailureRequest() {
    return {
        address: "",
        failureId: BigInt(0),
    };
}
exports.QueryFailureRequest = {
    typeUrl: "/neutron.contractmanager.QueryFailureRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.failureId !== BigInt(0)) {
            writer.uint32(16).uint64(message.failureId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFailureRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.failureId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryFailureRequest();
        if ((0, helpers_js_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_js_1.isSet)(object.failureId))
            obj.failureId = BigInt(object.failureId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.failureId !== undefined && (obj.failureId = (message.failureId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFailureRequest();
        message.address = object.address ?? "";
        if (object.failureId !== undefined && object.failureId !== null) {
            message.failureId = BigInt(object.failureId.toString());
        }
        return message;
    },
};
function createBaseQueryFailureResponse() {
    return {
        failure: failure_js_1.Failure.fromPartial({}),
    };
}
exports.QueryFailureResponse = {
    typeUrl: "/neutron.contractmanager.QueryFailureResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.failure !== undefined) {
            failure_js_1.Failure.encode(message.failure, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFailureResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.failure = failure_js_1.Failure.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryFailureResponse();
        if ((0, helpers_js_1.isSet)(object.failure))
            obj.failure = failure_js_1.Failure.fromJSON(object.failure);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.failure !== undefined &&
            (obj.failure = message.failure ? failure_js_1.Failure.toJSON(message.failure) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFailureResponse();
        if (object.failure !== undefined && object.failure !== null) {
            message.failure = failure_js_1.Failure.fromPartial(object.failure);
        }
        return message;
    },
};
function createBaseQueryFailuresResponse() {
    return {
        failures: [],
        pagination: undefined,
    };
}
exports.QueryFailuresResponse = {
    typeUrl: "/neutron.contractmanager.QueryFailuresResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.failures) {
            failure_js_1.Failure.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFailuresResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.failures.push(failure_js_1.Failure.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryFailuresResponse();
        if (Array.isArray(object?.failures))
            obj.failures = object.failures.map((e) => failure_js_1.Failure.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.failures) {
            obj.failures = message.failures.map((e) => (e ? failure_js_1.Failure.toJSON(e) : undefined));
        }
        else {
            obj.failures = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFailuresResponse();
        message.failures = object.failures?.map((e) => failure_js_1.Failure.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map