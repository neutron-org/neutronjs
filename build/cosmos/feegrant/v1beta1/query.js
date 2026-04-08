"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAllowancesByGranterResponse = exports.QueryAllowancesByGranterRequest = exports.QueryAllowancesResponse = exports.QueryAllowancesRequest = exports.QueryAllowanceResponse = exports.QueryAllowanceRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const pagination_js_1 = require("../../base/query/v1beta1/pagination.js");
const feegrant_js_1 = require("./feegrant.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.feegrant.v1beta1";
function createBaseQueryAllowanceRequest() {
    return {
        granter: "",
        grantee: "",
    };
}
exports.QueryAllowanceRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllowanceRequest();
        if ((0, helpers_js_1.isSet)(object.granter))
            obj.granter = String(object.granter);
        if ((0, helpers_js_1.isSet)(object.grantee))
            obj.grantee = String(object.grantee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowanceRequest();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
};
function createBaseQueryAllowanceResponse() {
    return {
        allowance: undefined,
    };
}
exports.QueryAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.allowance !== undefined) {
            feegrant_js_1.Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = feegrant_js_1.Grant.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAllowanceResponse();
        if ((0, helpers_js_1.isSet)(object.allowance))
            obj.allowance = feegrant_js_1.Grant.fromJSON(object.allowance);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined &&
            (obj.allowance = message.allowance ? feegrant_js_1.Grant.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowanceResponse();
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = feegrant_js_1.Grant.fromPartial(object.allowance);
        }
        return message;
    },
};
function createBaseQueryAllowancesRequest() {
    return {
        grantee: "",
        pagination: undefined,
    };
}
exports.QueryAllowancesRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
                    break;
                case 2:
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
        const obj = createBaseQueryAllowancesRequest();
        if ((0, helpers_js_1.isSet)(object.grantee))
            obj.grantee = String(object.grantee);
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesRequest();
        message.grantee = object.grantee ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllowancesResponse() {
    return {
        allowances: [],
        pagination: undefined,
    };
}
exports.QueryAllowancesResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.allowances) {
            feegrant_js_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowances.push(feegrant_js_1.Grant.decode(reader, reader.uint32()));
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
        const obj = createBaseQueryAllowancesResponse();
        if (Array.isArray(object?.allowances))
            obj.allowances = object.allowances.map((e) => feegrant_js_1.Grant.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map((e) => (e ? feegrant_js_1.Grant.toJSON(e) : undefined));
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesResponse();
        message.allowances = object.allowances?.map((e) => feegrant_js_1.Grant.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllowancesByGranterRequest() {
    return {
        granter: "",
        pagination: undefined,
    };
}
exports.QueryAllowancesByGranterRequest = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesByGranterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
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
        const obj = createBaseQueryAllowancesByGranterRequest();
        if ((0, helpers_js_1.isSet)(object.granter))
            obj.granter = String(object.granter);
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesByGranterRequest();
        message.granter = object.granter ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryAllowancesByGranterResponse() {
    return {
        allowances: [],
        pagination: undefined,
    };
}
exports.QueryAllowancesByGranterResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.allowances) {
            feegrant_js_1.Grant.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllowancesByGranterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowances.push(feegrant_js_1.Grant.decode(reader, reader.uint32()));
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
        const obj = createBaseQueryAllowancesByGranterResponse();
        if (Array.isArray(object?.allowances))
            obj.allowances = object.allowances.map((e) => feegrant_js_1.Grant.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.allowances) {
            obj.allowances = message.allowances.map((e) => (e ? feegrant_js_1.Grant.toJSON(e) : undefined));
        }
        else {
            obj.allowances = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllowancesByGranterResponse();
        message.allowances = object.allowances?.map((e) => feegrant_js_1.Grant.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map