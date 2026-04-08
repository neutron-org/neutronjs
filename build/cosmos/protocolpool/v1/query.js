"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryContinuousFundsResponse = exports.QueryContinuousFundsRequest = exports.QueryContinuousFundResponse = exports.QueryContinuousFundRequest = exports.QueryCommunityPoolResponse = exports.QueryCommunityPoolRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../base/v1beta1/coin.js");
const types_js_1 = require("./types.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.protocolpool.v1";
function createBaseQueryCommunityPoolRequest() {
    return {};
}
exports.QueryCommunityPoolRequest = {
    typeUrl: "/cosmos.protocolpool.v1.QueryCommunityPoolRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommunityPoolRequest();
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
        const obj = createBaseQueryCommunityPoolRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryCommunityPoolRequest();
        return message;
    },
};
function createBaseQueryCommunityPoolResponse() {
    return {
        pool: [],
    };
}
exports.QueryCommunityPoolResponse = {
    typeUrl: "/cosmos.protocolpool.v1.QueryCommunityPoolResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.pool) {
            coin_js_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommunityPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCommunityPoolResponse();
        if (Array.isArray(object?.pool))
            obj.pool = object.pool.map((e) => coin_js_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCommunityPoolResponse();
        message.pool = object.pool?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryContinuousFundRequest() {
    return {
        recipient: "",
    };
}
exports.QueryContinuousFundRequest = {
    typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.recipient !== "") {
            writer.uint32(10).string(message.recipient);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContinuousFundRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recipient = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryContinuousFundRequest();
        if ((0, helpers_js_1.isSet)(object.recipient))
            obj.recipient = String(object.recipient);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContinuousFundRequest();
        message.recipient = object.recipient ?? "";
        return message;
    },
};
function createBaseQueryContinuousFundResponse() {
    return {
        continuousFund: types_js_1.ContinuousFund.fromPartial({}),
    };
}
exports.QueryContinuousFundResponse = {
    typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.continuousFund !== undefined) {
            types_js_1.ContinuousFund.encode(message.continuousFund, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContinuousFundResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.continuousFund = types_js_1.ContinuousFund.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryContinuousFundResponse();
        if ((0, helpers_js_1.isSet)(object.continuousFund))
            obj.continuousFund = types_js_1.ContinuousFund.fromJSON(object.continuousFund);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.continuousFund !== undefined &&
            (obj.continuousFund = message.continuousFund
                ? types_js_1.ContinuousFund.toJSON(message.continuousFund)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContinuousFundResponse();
        if (object.continuousFund !== undefined && object.continuousFund !== null) {
            message.continuousFund = types_js_1.ContinuousFund.fromPartial(object.continuousFund);
        }
        return message;
    },
};
function createBaseQueryContinuousFundsRequest() {
    return {};
}
exports.QueryContinuousFundsRequest = {
    typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContinuousFundsRequest();
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
        const obj = createBaseQueryContinuousFundsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryContinuousFundsRequest();
        return message;
    },
};
function createBaseQueryContinuousFundsResponse() {
    return {
        continuousFunds: [],
    };
}
exports.QueryContinuousFundsResponse = {
    typeUrl: "/cosmos.protocolpool.v1.QueryContinuousFundsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.continuousFunds) {
            types_js_1.ContinuousFund.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContinuousFundsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.continuousFunds.push(types_js_1.ContinuousFund.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryContinuousFundsResponse();
        if (Array.isArray(object?.continuousFunds))
            obj.continuousFunds = object.continuousFunds.map((e) => types_js_1.ContinuousFund.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.continuousFunds) {
            obj.continuousFunds = message.continuousFunds.map((e) => (e ? types_js_1.ContinuousFund.toJSON(e) : undefined));
        }
        else {
            obj.continuousFunds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryContinuousFundsResponse();
        message.continuousFunds = object.continuousFunds?.map((e) => types_js_1.ContinuousFund.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.protocolpool.v1.QueryParamsRequest",
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
        params: types_js_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.protocolpool.v1.QueryParamsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            types_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = types_js_1.Params.decode(reader, reader.uint32());
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
            obj.params = types_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? types_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = types_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map