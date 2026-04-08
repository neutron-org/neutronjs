"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastUpdatedResponse = exports.LastUpdatedRequest = exports.ParamsResponse = exports.ParamsRequest = exports.MarketResponse = exports.MarketRequest = exports.MarketsResponse = exports.MarketsRequest = exports.MarketMapResponse = exports.MarketMapRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const currency_pair_js_1 = require("../../types/v1/currency_pair.js");
const market_js_1 = require("./market.js");
const params_js_1 = require("./params.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "slinky.marketmap.v1";
function createBaseMarketMapRequest() {
    return {};
}
exports.MarketMapRequest = {
    typeUrl: "/slinky.marketmap.v1.MarketMapRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketMapRequest();
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
        const obj = createBaseMarketMapRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMarketMapRequest();
        return message;
    },
};
function createBaseMarketMapResponse() {
    return {
        marketMap: market_js_1.MarketMap.fromPartial({}),
        lastUpdated: BigInt(0),
        chainId: "",
    };
}
exports.MarketMapResponse = {
    typeUrl: "/slinky.marketmap.v1.MarketMapResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.marketMap !== undefined) {
            market_js_1.MarketMap.encode(message.marketMap, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastUpdated !== BigInt(0)) {
            writer.uint32(16).uint64(message.lastUpdated);
        }
        if (message.chainId !== "") {
            writer.uint32(26).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketMapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketMap = market_js_1.MarketMap.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lastUpdated = reader.uint64();
                    break;
                case 3:
                    message.chainId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMarketMapResponse();
        if ((0, helpers_js_1.isSet)(object.marketMap))
            obj.marketMap = market_js_1.MarketMap.fromJSON(object.marketMap);
        if ((0, helpers_js_1.isSet)(object.lastUpdated))
            obj.lastUpdated = BigInt(object.lastUpdated.toString());
        if ((0, helpers_js_1.isSet)(object.chainId))
            obj.chainId = String(object.chainId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.marketMap !== undefined &&
            (obj.marketMap = message.marketMap ? market_js_1.MarketMap.toJSON(message.marketMap) : undefined);
        message.lastUpdated !== undefined && (obj.lastUpdated = (message.lastUpdated || BigInt(0)).toString());
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMarketMapResponse();
        if (object.marketMap !== undefined && object.marketMap !== null) {
            message.marketMap = market_js_1.MarketMap.fromPartial(object.marketMap);
        }
        if (object.lastUpdated !== undefined && object.lastUpdated !== null) {
            message.lastUpdated = BigInt(object.lastUpdated.toString());
        }
        message.chainId = object.chainId ?? "";
        return message;
    },
};
function createBaseMarketsRequest() {
    return {};
}
exports.MarketsRequest = {
    typeUrl: "/slinky.marketmap.v1.MarketsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketsRequest();
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
        const obj = createBaseMarketsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMarketsRequest();
        return message;
    },
};
function createBaseMarketsResponse() {
    return {
        markets: [],
    };
}
exports.MarketsResponse = {
    typeUrl: "/slinky.marketmap.v1.MarketsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.markets) {
            market_js_1.Market.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.markets.push(market_js_1.Market.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMarketsResponse();
        if (Array.isArray(object?.markets))
            obj.markets = object.markets.map((e) => market_js_1.Market.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.markets) {
            obj.markets = message.markets.map((e) => (e ? market_js_1.Market.toJSON(e) : undefined));
        }
        else {
            obj.markets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMarketsResponse();
        message.markets = object.markets?.map((e) => market_js_1.Market.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMarketRequest() {
    return {
        currencyPair: currency_pair_js_1.CurrencyPair.fromPartial({}),
    };
}
exports.MarketRequest = {
    typeUrl: "/slinky.marketmap.v1.MarketRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.currencyPair !== undefined) {
            currency_pair_js_1.CurrencyPair.encode(message.currencyPair, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketRequest();
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
        const obj = createBaseMarketRequest();
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
        const message = createBaseMarketRequest();
        if (object.currencyPair !== undefined && object.currencyPair !== null) {
            message.currencyPair = currency_pair_js_1.CurrencyPair.fromPartial(object.currencyPair);
        }
        return message;
    },
};
function createBaseMarketResponse() {
    return {
        market: market_js_1.Market.fromPartial({}),
    };
}
exports.MarketResponse = {
    typeUrl: "/slinky.marketmap.v1.MarketResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.market !== undefined) {
            market_js_1.Market.encode(message.market, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.market = market_js_1.Market.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMarketResponse();
        if ((0, helpers_js_1.isSet)(object.market))
            obj.market = market_js_1.Market.fromJSON(object.market);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.market !== undefined && (obj.market = message.market ? market_js_1.Market.toJSON(message.market) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMarketResponse();
        if (object.market !== undefined && object.market !== null) {
            message.market = market_js_1.Market.fromPartial(object.market);
        }
        return message;
    },
};
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: "/slinky.marketmap.v1.ParamsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
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
        const obj = createBaseParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseParamsRequest();
        return message;
    },
};
function createBaseParamsResponse() {
    return {
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.ParamsResponse = {
    typeUrl: "/slinky.marketmap.v1.ParamsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
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
        const obj = createBaseParamsResponse();
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
        const message = createBaseParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseLastUpdatedRequest() {
    return {};
}
exports.LastUpdatedRequest = {
    typeUrl: "/slinky.marketmap.v1.LastUpdatedRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastUpdatedRequest();
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
        const obj = createBaseLastUpdatedRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseLastUpdatedRequest();
        return message;
    },
};
function createBaseLastUpdatedResponse() {
    return {
        lastUpdated: BigInt(0),
    };
}
exports.LastUpdatedResponse = {
    typeUrl: "/slinky.marketmap.v1.LastUpdatedResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.lastUpdated !== BigInt(0)) {
            writer.uint32(8).uint64(message.lastUpdated);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastUpdatedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lastUpdated = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLastUpdatedResponse();
        if ((0, helpers_js_1.isSet)(object.lastUpdated))
            obj.lastUpdated = BigInt(object.lastUpdated.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.lastUpdated !== undefined && (obj.lastUpdated = (message.lastUpdated || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLastUpdatedResponse();
        if (object.lastUpdated !== undefined && object.lastUpdated !== null) {
            message.lastUpdated = BigInt(object.lastUpdated.toString());
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map