"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryLastRemoteHeightResponse = exports.QueryLastRemoteHeight = exports.Transaction = exports.QueryRegisteredQueryResultResponse = exports.QueryRegisteredQueryResultRequest = exports.QueryRegisteredQueryResponse = exports.QueryRegisteredQueryRequest = exports.QueryRegisteredQueriesResponse = exports.QueryRegisteredQueriesRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const pagination_js_1 = require("../../cosmos/base/query/v1beta1/pagination.js");
const params_js_1 = require("./params.js");
const genesis_js_1 = require("./genesis.js");
const tx_js_1 = require("./tx.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.interchainqueries";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/neutron.interchainqueries.QueryParamsRequest",
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
    typeUrl: "/neutron.interchainqueries.QueryParamsResponse",
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
function createBaseQueryRegisteredQueriesRequest() {
    return {
        owners: [],
        connectionId: "",
        pagination: undefined,
    };
}
exports.QueryRegisteredQueriesRequest = {
    typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.owners) {
            writer.uint32(10).string(v);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredQueriesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owners.push(reader.string());
                    break;
                case 2:
                    message.connectionId = reader.string();
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
        const obj = createBaseQueryRegisteredQueriesRequest();
        if (Array.isArray(object?.owners))
            obj.owners = object.owners.map((e) => String(e));
        if ((0, helpers_js_1.isSet)(object.connectionId))
            obj.connectionId = String(object.connectionId);
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.owners) {
            obj.owners = message.owners.map((e) => e);
        }
        else {
            obj.owners = [];
        }
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredQueriesRequest();
        message.owners = object.owners?.map((e) => e) || [];
        message.connectionId = object.connectionId ?? "";
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryRegisteredQueriesResponse() {
    return {
        registeredQueries: [],
        pagination: undefined,
    };
}
exports.QueryRegisteredQueriesResponse = {
    typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.registeredQueries) {
            genesis_js_1.RegisteredQuery.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredQueriesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registeredQueries.push(genesis_js_1.RegisteredQuery.decode(reader, reader.uint32()));
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
        const obj = createBaseQueryRegisteredQueriesResponse();
        if (Array.isArray(object?.registeredQueries))
            obj.registeredQueries = object.registeredQueries.map((e) => genesis_js_1.RegisteredQuery.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.registeredQueries) {
            obj.registeredQueries = message.registeredQueries.map((e) => e ? genesis_js_1.RegisteredQuery.toJSON(e) : undefined);
        }
        else {
            obj.registeredQueries = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredQueriesResponse();
        message.registeredQueries = object.registeredQueries?.map((e) => genesis_js_1.RegisteredQuery.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQueryRegisteredQueryRequest() {
    return {
        queryId: BigInt(0),
    };
}
exports.QueryRegisteredQueryRequest = {
    typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.queryId !== BigInt(0)) {
            writer.uint32(8).uint64(message.queryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredQueryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryRegisteredQueryRequest();
        if ((0, helpers_js_1.isSet)(object.queryId))
            obj.queryId = BigInt(object.queryId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.queryId !== undefined && (obj.queryId = (message.queryId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredQueryRequest();
        if (object.queryId !== undefined && object.queryId !== null) {
            message.queryId = BigInt(object.queryId.toString());
        }
        return message;
    },
};
function createBaseQueryRegisteredQueryResponse() {
    return {
        registeredQuery: undefined,
    };
}
exports.QueryRegisteredQueryResponse = {
    typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.registeredQuery !== undefined) {
            genesis_js_1.RegisteredQuery.encode(message.registeredQuery, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredQueryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.registeredQuery = genesis_js_1.RegisteredQuery.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryRegisteredQueryResponse();
        if ((0, helpers_js_1.isSet)(object.registeredQuery))
            obj.registeredQuery = genesis_js_1.RegisteredQuery.fromJSON(object.registeredQuery);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.registeredQuery !== undefined &&
            (obj.registeredQuery = message.registeredQuery
                ? genesis_js_1.RegisteredQuery.toJSON(message.registeredQuery)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredQueryResponse();
        if (object.registeredQuery !== undefined && object.registeredQuery !== null) {
            message.registeredQuery = genesis_js_1.RegisteredQuery.fromPartial(object.registeredQuery);
        }
        return message;
    },
};
function createBaseQueryRegisteredQueryResultRequest() {
    return {
        queryId: BigInt(0),
    };
}
exports.QueryRegisteredQueryResultRequest = {
    typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.queryId !== BigInt(0)) {
            writer.uint32(8).uint64(message.queryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredQueryResultRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryRegisteredQueryResultRequest();
        if ((0, helpers_js_1.isSet)(object.queryId))
            obj.queryId = BigInt(object.queryId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.queryId !== undefined && (obj.queryId = (message.queryId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredQueryResultRequest();
        if (object.queryId !== undefined && object.queryId !== null) {
            message.queryId = BigInt(object.queryId.toString());
        }
        return message;
    },
};
function createBaseQueryRegisteredQueryResultResponse() {
    return {
        result: undefined,
    };
}
exports.QueryRegisteredQueryResultResponse = {
    typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.result !== undefined) {
            tx_js_1.QueryResult.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRegisteredQueryResultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = tx_js_1.QueryResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryRegisteredQueryResultResponse();
        if ((0, helpers_js_1.isSet)(object.result))
            obj.result = tx_js_1.QueryResult.fromJSON(object.result);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? tx_js_1.QueryResult.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRegisteredQueryResultResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = tx_js_1.QueryResult.fromPartial(object.result);
        }
        return message;
    },
};
function createBaseTransaction() {
    return {
        id: BigInt(0),
        height: BigInt(0),
        data: new Uint8Array(),
    };
}
exports.Transaction = {
    typeUrl: "/neutron.interchainqueries.Transaction",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransaction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTransaction();
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        if ((0, helpers_js_1.isSet)(object.height))
            obj.height = BigInt(object.height.toString());
        if ((0, helpers_js_1.isSet)(object.data))
            obj.data = (0, helpers_js_1.bytesFromBase64)(object.data);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.data !== undefined &&
            (obj.data = (0, helpers_js_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTransaction();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height.toString());
        }
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseQueryLastRemoteHeight() {
    return {
        connectionId: "",
    };
}
exports.QueryLastRemoteHeight = {
    typeUrl: "/neutron.interchainqueries.QueryLastRemoteHeight",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastRemoteHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryLastRemoteHeight();
        if ((0, helpers_js_1.isSet)(object.connectionId))
            obj.connectionId = String(object.connectionId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastRemoteHeight();
        message.connectionId = object.connectionId ?? "";
        return message;
    },
};
function createBaseQueryLastRemoteHeightResponse() {
    return {
        height: BigInt(0),
        revision: BigInt(0),
    };
}
exports.QueryLastRemoteHeightResponse = {
    typeUrl: "/neutron.interchainqueries.QueryLastRemoteHeightResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.revision !== BigInt(0)) {
            writer.uint32(16).uint64(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastRemoteHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.revision = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryLastRemoteHeightResponse();
        if ((0, helpers_js_1.isSet)(object.height))
            obj.height = BigInt(object.height.toString());
        if ((0, helpers_js_1.isSet)(object.revision))
            obj.revision = BigInt(object.revision.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.revision !== undefined && (obj.revision = (message.revision || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastRemoteHeightResponse();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height.toString());
        }
        if (object.revision !== undefined && object.revision !== null) {
            message.revision = BigInt(object.revision.toString());
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map