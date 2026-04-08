"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryVersionResponse = exports.QueryVersionRequest = exports.QueryMarketMapResponse = exports.QueryMarketMapRequest = exports.QueryPricesResponse = exports.QueryPricesResponse_PricesEntry = exports.QueryPricesRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const timestamp_js_1 = require("../../../google/protobuf/timestamp.js");
const market_js_1 = require("../../marketmap/v1/market.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "slinky.service.v1";
function createBaseQueryPricesRequest() {
    return {};
}
exports.QueryPricesRequest = {
    typeUrl: "/slinky.service.v1.QueryPricesRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPricesRequest();
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
        const obj = createBaseQueryPricesRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryPricesRequest();
        return message;
    },
};
function createBaseQueryPricesResponse_PricesEntry() {
    return {
        key: "",
        value: "",
    };
}
exports.QueryPricesResponse_PricesEntry = {
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPricesResponse_PricesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryPricesResponse_PricesEntry();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = String(object.key);
        if ((0, helpers_js_1.isSet)(object.value))
            obj.value = String(object.value);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPricesResponse_PricesEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseQueryPricesResponse() {
    return {
        prices: {},
        timestamp: timestamp_js_1.Timestamp.fromPartial({}),
        version: "",
    };
}
exports.QueryPricesResponse = {
    typeUrl: "/slinky.service.v1.QueryPricesResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        Object.entries(message.prices).forEach(([key, value]) => {
            exports.QueryPricesResponse_PricesEntry.encode({
                key: key,
                value,
            }, writer.uint32(10).fork()).ldelim();
        });
        if (message.timestamp !== undefined) {
            timestamp_js_1.Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.QueryPricesResponse_PricesEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.prices[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.timestamp = timestamp_js_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryPricesResponse();
        if ((0, helpers_js_1.isObject)(object.prices))
            obj.prices = Object.entries(object.prices).reduce((acc, [key, value]) => {
                acc[key] = String(value);
                return acc;
            }, {});
        if ((0, helpers_js_1.isSet)(object.timestamp))
            obj.timestamp = (0, helpers_js_1.fromJsonTimestamp)(object.timestamp);
        if ((0, helpers_js_1.isSet)(object.version))
            obj.version = String(object.version);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        obj.prices = {};
        if (message.prices) {
            Object.entries(message.prices).forEach(([k, v]) => {
                obj.prices[k] = v;
            });
        }
        message.timestamp !== undefined && (obj.timestamp = (0, helpers_js_1.fromTimestamp)(message.timestamp).toISOString());
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPricesResponse();
        message.prices = Object.entries(object.prices ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = timestamp_js_1.Timestamp.fromPartial(object.timestamp);
        }
        message.version = object.version ?? "";
        return message;
    },
};
function createBaseQueryMarketMapRequest() {
    return {};
}
exports.QueryMarketMapRequest = {
    typeUrl: "/slinky.service.v1.QueryMarketMapRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketMapRequest();
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
        const obj = createBaseQueryMarketMapRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryMarketMapRequest();
        return message;
    },
};
function createBaseQueryMarketMapResponse() {
    return {
        marketMap: undefined,
    };
}
exports.QueryMarketMapResponse = {
    typeUrl: "/slinky.service.v1.QueryMarketMapResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.marketMap !== undefined) {
            market_js_1.MarketMap.encode(message.marketMap, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMarketMapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketMap = market_js_1.MarketMap.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryMarketMapResponse();
        if ((0, helpers_js_1.isSet)(object.marketMap))
            obj.marketMap = market_js_1.MarketMap.fromJSON(object.marketMap);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.marketMap !== undefined &&
            (obj.marketMap = message.marketMap ? market_js_1.MarketMap.toJSON(message.marketMap) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMarketMapResponse();
        if (object.marketMap !== undefined && object.marketMap !== null) {
            message.marketMap = market_js_1.MarketMap.fromPartial(object.marketMap);
        }
        return message;
    },
};
function createBaseQueryVersionRequest() {
    return {};
}
exports.QueryVersionRequest = {
    typeUrl: "/slinky.service.v1.QueryVersionRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVersionRequest();
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
        const obj = createBaseQueryVersionRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryVersionRequest();
        return message;
    },
};
function createBaseQueryVersionResponse() {
    return {
        version: "",
    };
}
exports.QueryVersionResponse = {
    typeUrl: "/slinky.service.v1.QueryVersionResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVersionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryVersionResponse();
        if ((0, helpers_js_1.isSet)(object.version))
            obj.version = String(object.version);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVersionResponse();
        message.version = object.version ?? "";
        return message;
    },
};
//# sourceMappingURL=oracle.js.map