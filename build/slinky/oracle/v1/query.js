"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrencyPairMappingListResponse = exports.CurrencyPairMapping = exports.GetCurrencyPairMappingListRequest = exports.GetCurrencyPairMappingResponse = exports.GetCurrencyPairMappingResponse_CurrencyPairMappingEntry = exports.GetCurrencyPairMappingRequest = exports.GetPricesResponse = exports.GetPricesRequest = exports.GetPriceResponse = exports.GetPriceRequest = exports.GetAllCurrencyPairsResponse = exports.GetAllCurrencyPairsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const currency_pair_js_1 = require("../../types/v1/currency_pair.js");
const genesis_js_1 = require("./genesis.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "slinky.oracle.v1";
function createBaseGetAllCurrencyPairsRequest() {
    return {};
}
exports.GetAllCurrencyPairsRequest = {
    typeUrl: "/slinky.oracle.v1.GetAllCurrencyPairsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllCurrencyPairsRequest();
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
        const obj = createBaseGetAllCurrencyPairsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetAllCurrencyPairsRequest();
        return message;
    },
};
function createBaseGetAllCurrencyPairsResponse() {
    return {
        currencyPairs: [],
    };
}
exports.GetAllCurrencyPairsResponse = {
    typeUrl: "/slinky.oracle.v1.GetAllCurrencyPairsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.currencyPairs) {
            currency_pair_js_1.CurrencyPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllCurrencyPairsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currencyPairs.push(currency_pair_js_1.CurrencyPair.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetAllCurrencyPairsResponse();
        if (Array.isArray(object?.currencyPairs))
            obj.currencyPairs = object.currencyPairs.map((e) => currency_pair_js_1.CurrencyPair.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.currencyPairs) {
            obj.currencyPairs = message.currencyPairs.map((e) => (e ? currency_pair_js_1.CurrencyPair.toJSON(e) : undefined));
        }
        else {
            obj.currencyPairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetAllCurrencyPairsResponse();
        message.currencyPairs = object.currencyPairs?.map((e) => currency_pair_js_1.CurrencyPair.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetPriceRequest() {
    return {
        currencyPair: currency_pair_js_1.CurrencyPair.fromPartial({}),
    };
}
exports.GetPriceRequest = {
    typeUrl: "/slinky.oracle.v1.GetPriceRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.currencyPair !== undefined) {
            currency_pair_js_1.CurrencyPair.encode(message.currencyPair, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currencyPair = currency_pair_js_1.CurrencyPair.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetPriceRequest();
        if ((0, helpers_js_1.isSet)(object.currencyPair))
            obj.currencyPair = currency_pair_js_1.CurrencyPair.fromJSON(object.currencyPair);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.currencyPair !== undefined &&
            (obj.currencyPair = message.currencyPair ? currency_pair_js_1.CurrencyPair.toJSON(message.currencyPair) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetPriceRequest();
        if (object.currencyPair !== undefined && object.currencyPair !== null) {
            message.currencyPair = currency_pair_js_1.CurrencyPair.fromPartial(object.currencyPair);
        }
        return message;
    },
};
function createBaseGetPriceResponse() {
    return {
        price: undefined,
        nonce: BigInt(0),
        decimals: BigInt(0),
        id: BigInt(0),
    };
}
exports.GetPriceResponse = {
    typeUrl: "/slinky.oracle.v1.GetPriceResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.price !== undefined) {
            genesis_js_1.QuotePrice.encode(message.price, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.decimals !== BigInt(0)) {
            writer.uint32(24).uint64(message.decimals);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(32).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = genesis_js_1.QuotePrice.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonce = reader.uint64();
                    break;
                case 3:
                    message.decimals = reader.uint64();
                    break;
                case 4:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetPriceResponse();
        if ((0, helpers_js_1.isSet)(object.price))
            obj.price = genesis_js_1.QuotePrice.fromJSON(object.price);
        if ((0, helpers_js_1.isSet)(object.nonce))
            obj.nonce = BigInt(object.nonce.toString());
        if ((0, helpers_js_1.isSet)(object.decimals))
            obj.decimals = BigInt(object.decimals.toString());
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price ? genesis_js_1.QuotePrice.toJSON(message.price) : undefined);
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.decimals !== undefined && (obj.decimals = (message.decimals || BigInt(0)).toString());
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetPriceResponse();
        if (object.price !== undefined && object.price !== null) {
            message.price = genesis_js_1.QuotePrice.fromPartial(object.price);
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce.toString());
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = BigInt(object.decimals.toString());
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        return message;
    },
};
function createBaseGetPricesRequest() {
    return {
        currencyPairIds: [],
    };
}
exports.GetPricesRequest = {
    typeUrl: "/slinky.oracle.v1.GetPricesRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.currencyPairIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPricesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currencyPairIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetPricesRequest();
        if (Array.isArray(object?.currencyPairIds))
            obj.currencyPairIds = object.currencyPairIds.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.currencyPairIds) {
            obj.currencyPairIds = message.currencyPairIds.map((e) => e);
        }
        else {
            obj.currencyPairIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetPricesRequest();
        message.currencyPairIds = object.currencyPairIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseGetPricesResponse() {
    return {
        prices: [],
    };
}
exports.GetPricesResponse = {
    typeUrl: "/slinky.oracle.v1.GetPricesResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.prices) {
            exports.GetPriceResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prices.push(exports.GetPriceResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetPricesResponse();
        if (Array.isArray(object?.prices))
            obj.prices = object.prices.map((e) => exports.GetPriceResponse.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.prices) {
            obj.prices = message.prices.map((e) => (e ? exports.GetPriceResponse.toJSON(e) : undefined));
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetPricesResponse();
        message.prices = object.prices?.map((e) => exports.GetPriceResponse.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetCurrencyPairMappingRequest() {
    return {};
}
exports.GetCurrencyPairMappingRequest = {
    typeUrl: "/slinky.oracle.v1.GetCurrencyPairMappingRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCurrencyPairMappingRequest();
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
        const obj = createBaseGetCurrencyPairMappingRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetCurrencyPairMappingRequest();
        return message;
    },
};
function createBaseGetCurrencyPairMappingResponse_CurrencyPairMappingEntry() {
    return {
        key: BigInt(0),
        value: undefined,
    };
}
exports.GetCurrencyPairMappingResponse_CurrencyPairMappingEntry = {
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key !== BigInt(0)) {
            writer.uint32(8).uint64(message.key);
        }
        if (message.value !== undefined) {
            currency_pair_js_1.CurrencyPair.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCurrencyPairMappingResponse_CurrencyPairMappingEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.uint64();
                    break;
                case 2:
                    message.value = currency_pair_js_1.CurrencyPair.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetCurrencyPairMappingResponse_CurrencyPairMappingEntry();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = BigInt(object.key.toString());
        if ((0, helpers_js_1.isSet)(object.value))
            obj.value = currency_pair_js_1.CurrencyPair.fromJSON(object.value);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (message.key || BigInt(0)).toString());
        message.value !== undefined &&
            (obj.value = message.value ? currency_pair_js_1.CurrencyPair.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetCurrencyPairMappingResponse_CurrencyPairMappingEntry();
        if (object.key !== undefined && object.key !== null) {
            message.key = BigInt(object.key.toString());
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = currency_pair_js_1.CurrencyPair.fromPartial(object.value);
        }
        return message;
    },
};
function createBaseGetCurrencyPairMappingResponse() {
    return {
        currencyPairMapping: {},
    };
}
exports.GetCurrencyPairMappingResponse = {
    typeUrl: "/slinky.oracle.v1.GetCurrencyPairMappingResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        Object.entries(message.currencyPairMapping).forEach(([key, value]) => {
            exports.GetCurrencyPairMappingResponse_CurrencyPairMappingEntry.encode({
                key: key,
                value,
            }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCurrencyPairMappingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.GetCurrencyPairMappingResponse_CurrencyPairMappingEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.currencyPairMapping[entry1.key] = entry1.value;
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
        const obj = createBaseGetCurrencyPairMappingResponse();
        if ((0, helpers_js_1.isObject)(object.currencyPairMapping))
            obj.currencyPairMapping = Object.entries(object.currencyPairMapping).reduce((acc, [key, value]) => {
                acc[Number(key)] = currency_pair_js_1.CurrencyPair.fromJSON(value);
                return acc;
            }, {});
        return obj;
    },
    toJSON(message) {
        const obj = {};
        obj.currencyPairMapping = {};
        if (message.currencyPairMapping) {
            Object.entries(message.currencyPairMapping).forEach(([k, v]) => {
                obj.currencyPairMapping[k] = currency_pair_js_1.CurrencyPair.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetCurrencyPairMappingResponse();
        message.currencyPairMapping = Object.entries(object.currencyPairMapping ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[Number(key)] = currency_pair_js_1.CurrencyPair.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseGetCurrencyPairMappingListRequest() {
    return {};
}
exports.GetCurrencyPairMappingListRequest = {
    typeUrl: "/slinky.oracle.v1.GetCurrencyPairMappingListRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCurrencyPairMappingListRequest();
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
        const obj = createBaseGetCurrencyPairMappingListRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGetCurrencyPairMappingListRequest();
        return message;
    },
};
function createBaseCurrencyPairMapping() {
    return {
        id: BigInt(0),
        currencyPair: currency_pair_js_1.CurrencyPair.fromPartial({}),
    };
}
exports.CurrencyPairMapping = {
    typeUrl: "/slinky.oracle.v1.CurrencyPairMapping",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.currencyPair !== undefined) {
            currency_pair_js_1.CurrencyPair.encode(message.currencyPair, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCurrencyPairMapping();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.currencyPair = currency_pair_js_1.CurrencyPair.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseCurrencyPairMapping();
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        if ((0, helpers_js_1.isSet)(object.currencyPair))
            obj.currencyPair = currency_pair_js_1.CurrencyPair.fromJSON(object.currencyPair);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.currencyPair !== undefined &&
            (obj.currencyPair = message.currencyPair ? currency_pair_js_1.CurrencyPair.toJSON(message.currencyPair) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCurrencyPairMapping();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        if (object.currencyPair !== undefined && object.currencyPair !== null) {
            message.currencyPair = currency_pair_js_1.CurrencyPair.fromPartial(object.currencyPair);
        }
        return message;
    },
};
function createBaseGetCurrencyPairMappingListResponse() {
    return {
        mappings: [],
    };
}
exports.GetCurrencyPairMappingListResponse = {
    typeUrl: "/slinky.oracle.v1.GetCurrencyPairMappingListResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.mappings) {
            exports.CurrencyPairMapping.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCurrencyPairMappingListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mappings.push(exports.CurrencyPairMapping.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGetCurrencyPairMappingListResponse();
        if (Array.isArray(object?.mappings))
            obj.mappings = object.mappings.map((e) => exports.CurrencyPairMapping.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.mappings) {
            obj.mappings = message.mappings.map((e) => (e ? exports.CurrencyPairMapping.toJSON(e) : undefined));
        }
        else {
            obj.mappings = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetCurrencyPairMappingListResponse();
        message.mappings = object.mappings?.map((e) => exports.CurrencyPairMapping.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=query.js.map