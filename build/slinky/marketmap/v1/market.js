"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketMap = exports.MarketMap_MarketsEntry = exports.ProviderConfig = exports.Ticker = exports.Market = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const currency_pair_js_1 = require("../../types/v1/currency_pair.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "slinky.marketmap.v1";
function createBaseMarket() {
    return {
        ticker: exports.Ticker.fromPartial({}),
        providerConfigs: [],
    };
}
exports.Market = {
    typeUrl: "/slinky.marketmap.v1.Market",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.ticker !== undefined) {
            exports.Ticker.encode(message.ticker, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.providerConfigs) {
            exports.ProviderConfig.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ticker = exports.Ticker.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.providerConfigs.push(exports.ProviderConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMarket();
        if ((0, helpers_js_1.isSet)(object.ticker))
            obj.ticker = exports.Ticker.fromJSON(object.ticker);
        if (Array.isArray(object?.providerConfigs))
            obj.providerConfigs = object.providerConfigs.map((e) => exports.ProviderConfig.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.ticker !== undefined && (obj.ticker = message.ticker ? exports.Ticker.toJSON(message.ticker) : undefined);
        if (message.providerConfigs) {
            obj.providerConfigs = message.providerConfigs.map((e) => (e ? exports.ProviderConfig.toJSON(e) : undefined));
        }
        else {
            obj.providerConfigs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMarket();
        if (object.ticker !== undefined && object.ticker !== null) {
            message.ticker = exports.Ticker.fromPartial(object.ticker);
        }
        message.providerConfigs = object.providerConfigs?.map((e) => exports.ProviderConfig.fromPartial(e)) || [];
        return message;
    },
};
function createBaseTicker() {
    return {
        currencyPair: currency_pair_js_1.CurrencyPair.fromPartial({}),
        decimals: BigInt(0),
        minProviderCount: BigInt(0),
        enabled: false,
        metadataJSON: "",
    };
}
exports.Ticker = {
    typeUrl: "/slinky.marketmap.v1.Ticker",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.currencyPair !== undefined) {
            currency_pair_js_1.CurrencyPair.encode(message.currencyPair, writer.uint32(10).fork()).ldelim();
        }
        if (message.decimals !== BigInt(0)) {
            writer.uint32(16).uint64(message.decimals);
        }
        if (message.minProviderCount !== BigInt(0)) {
            writer.uint32(24).uint64(message.minProviderCount);
        }
        if (message.enabled === true) {
            writer.uint32(112).bool(message.enabled);
        }
        if (message.metadataJSON !== "") {
            writer.uint32(122).string(message.metadataJSON);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTicker();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currencyPair = currency_pair_js_1.CurrencyPair.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.decimals = reader.uint64();
                    break;
                case 3:
                    message.minProviderCount = reader.uint64();
                    break;
                case 14:
                    message.enabled = reader.bool();
                    break;
                case 15:
                    message.metadataJSON = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTicker();
        if ((0, helpers_js_1.isSet)(object.currencyPair))
            obj.currencyPair = currency_pair_js_1.CurrencyPair.fromJSON(object.currencyPair);
        if ((0, helpers_js_1.isSet)(object.decimals))
            obj.decimals = BigInt(object.decimals.toString());
        if ((0, helpers_js_1.isSet)(object.minProviderCount))
            obj.minProviderCount = BigInt(object.minProviderCount.toString());
        if ((0, helpers_js_1.isSet)(object.enabled))
            obj.enabled = Boolean(object.enabled);
        if ((0, helpers_js_1.isSet)(object.metadataJSON))
            obj.metadataJSON = String(object.metadataJSON);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.currencyPair !== undefined &&
            (obj.currencyPair = message.currencyPair ? currency_pair_js_1.CurrencyPair.toJSON(message.currencyPair) : undefined);
        message.decimals !== undefined && (obj.decimals = (message.decimals || BigInt(0)).toString());
        message.minProviderCount !== undefined &&
            (obj.minProviderCount = (message.minProviderCount || BigInt(0)).toString());
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.metadataJSON !== undefined && (obj.metadataJSON = message.metadataJSON);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTicker();
        if (object.currencyPair !== undefined && object.currencyPair !== null) {
            message.currencyPair = currency_pair_js_1.CurrencyPair.fromPartial(object.currencyPair);
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = BigInt(object.decimals.toString());
        }
        if (object.minProviderCount !== undefined && object.minProviderCount !== null) {
            message.minProviderCount = BigInt(object.minProviderCount.toString());
        }
        message.enabled = object.enabled ?? false;
        message.metadataJSON = object.metadataJSON ?? "";
        return message;
    },
};
function createBaseProviderConfig() {
    return {
        name: "",
        offChainTicker: "",
        normalizeByPair: undefined,
        invert: false,
        metadataJSON: "",
    };
}
exports.ProviderConfig = {
    typeUrl: "/slinky.marketmap.v1.ProviderConfig",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.offChainTicker !== "") {
            writer.uint32(18).string(message.offChainTicker);
        }
        if (message.normalizeByPair !== undefined) {
            currency_pair_js_1.CurrencyPair.encode(message.normalizeByPair, writer.uint32(26).fork()).ldelim();
        }
        if (message.invert === true) {
            writer.uint32(32).bool(message.invert);
        }
        if (message.metadataJSON !== "") {
            writer.uint32(122).string(message.metadataJSON);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.offChainTicker = reader.string();
                    break;
                case 3:
                    message.normalizeByPair = currency_pair_js_1.CurrencyPair.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.invert = reader.bool();
                    break;
                case 15:
                    message.metadataJSON = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseProviderConfig();
        if ((0, helpers_js_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_js_1.isSet)(object.offChainTicker))
            obj.offChainTicker = String(object.offChainTicker);
        if ((0, helpers_js_1.isSet)(object.normalizeByPair))
            obj.normalizeByPair = currency_pair_js_1.CurrencyPair.fromJSON(object.normalizeByPair);
        if ((0, helpers_js_1.isSet)(object.invert))
            obj.invert = Boolean(object.invert);
        if ((0, helpers_js_1.isSet)(object.metadataJSON))
            obj.metadataJSON = String(object.metadataJSON);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.offChainTicker !== undefined && (obj.offChainTicker = message.offChainTicker);
        message.normalizeByPair !== undefined &&
            (obj.normalizeByPair = message.normalizeByPair
                ? currency_pair_js_1.CurrencyPair.toJSON(message.normalizeByPair)
                : undefined);
        message.invert !== undefined && (obj.invert = message.invert);
        message.metadataJSON !== undefined && (obj.metadataJSON = message.metadataJSON);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProviderConfig();
        message.name = object.name ?? "";
        message.offChainTicker = object.offChainTicker ?? "";
        if (object.normalizeByPair !== undefined && object.normalizeByPair !== null) {
            message.normalizeByPair = currency_pair_js_1.CurrencyPair.fromPartial(object.normalizeByPair);
        }
        message.invert = object.invert ?? false;
        message.metadataJSON = object.metadataJSON ?? "";
        return message;
    },
};
function createBaseMarketMap_MarketsEntry() {
    return {
        key: "",
        value: undefined,
    };
}
exports.MarketMap_MarketsEntry = {
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Market.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketMap_MarketsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.Market.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMarketMap_MarketsEntry();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = String(object.key);
        if ((0, helpers_js_1.isSet)(object.value))
            obj.value = exports.Market.fromJSON(object.value);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? exports.Market.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMarketMap_MarketsEntry();
        message.key = object.key ?? "";
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.Market.fromPartial(object.value);
        }
        return message;
    },
};
function createBaseMarketMap() {
    return {
        markets: {},
    };
}
exports.MarketMap = {
    typeUrl: "/slinky.marketmap.v1.MarketMap",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        Object.entries(message.markets).forEach(([key, value]) => {
            exports.MarketMap_MarketsEntry.encode({
                key: key,
                value,
            }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMarketMap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.MarketMap_MarketsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.markets[entry1.key] = entry1.value;
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
        const obj = createBaseMarketMap();
        if ((0, helpers_js_1.isObject)(object.markets))
            obj.markets = Object.entries(object.markets).reduce((acc, [key, value]) => {
                acc[key] = exports.Market.fromJSON(value);
                return acc;
            }, {});
        return obj;
    },
    toJSON(message) {
        const obj = {};
        obj.markets = {};
        if (message.markets) {
            Object.entries(message.markets).forEach(([k, v]) => {
                obj.markets[k] = exports.Market.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMarketMap();
        message.markets = Object.entries(object.markets ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.Market.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
//# sourceMappingURL=market.js.map