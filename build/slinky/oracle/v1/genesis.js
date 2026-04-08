"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.CurrencyPairGenesis = exports.CurrencyPairState = exports.QuotePrice = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const timestamp_js_1 = require("../../../google/protobuf/timestamp.js");
const currency_pair_js_1 = require("../../types/v1/currency_pair.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "slinky.oracle.v1";
function createBaseQuotePrice() {
    return {
        price: "",
        blockTimestamp: timestamp_js_1.Timestamp.fromPartial({}),
        blockHeight: BigInt(0),
    };
}
exports.QuotePrice = {
    typeUrl: "/slinky.oracle.v1.QuotePrice",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.price !== "") {
            writer.uint32(10).string(message.price);
        }
        if (message.blockTimestamp !== undefined) {
            timestamp_js_1.Timestamp.encode(message.blockTimestamp, writer.uint32(18).fork()).ldelim();
        }
        if (message.blockHeight !== BigInt(0)) {
            writer.uint32(24).uint64(message.blockHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuotePrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = reader.string();
                    break;
                case 2:
                    message.blockTimestamp = timestamp_js_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.blockHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuotePrice();
        if ((0, helpers_js_1.isSet)(object.price))
            obj.price = String(object.price);
        if ((0, helpers_js_1.isSet)(object.blockTimestamp))
            obj.blockTimestamp = (0, helpers_js_1.fromJsonTimestamp)(object.blockTimestamp);
        if ((0, helpers_js_1.isSet)(object.blockHeight))
            obj.blockHeight = BigInt(object.blockHeight.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price);
        message.blockTimestamp !== undefined &&
            (obj.blockTimestamp = (0, helpers_js_1.fromTimestamp)(message.blockTimestamp).toISOString());
        message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuotePrice();
        message.price = object.price ?? "";
        if (object.blockTimestamp !== undefined && object.blockTimestamp !== null) {
            message.blockTimestamp = timestamp_js_1.Timestamp.fromPartial(object.blockTimestamp);
        }
        if (object.blockHeight !== undefined && object.blockHeight !== null) {
            message.blockHeight = BigInt(object.blockHeight.toString());
        }
        return message;
    },
};
function createBaseCurrencyPairState() {
    return {
        price: undefined,
        nonce: BigInt(0),
        id: BigInt(0),
    };
}
exports.CurrencyPairState = {
    typeUrl: "/slinky.oracle.v1.CurrencyPairState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.price !== undefined) {
            exports.QuotePrice.encode(message.price, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.nonce);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCurrencyPairState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = exports.QuotePrice.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonce = reader.uint64();
                    break;
                case 3:
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
        const obj = createBaseCurrencyPairState();
        if ((0, helpers_js_1.isSet)(object.price))
            obj.price = exports.QuotePrice.fromJSON(object.price);
        if ((0, helpers_js_1.isSet)(object.nonce))
            obj.nonce = BigInt(object.nonce.toString());
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price ? exports.QuotePrice.toJSON(message.price) : undefined);
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCurrencyPairState();
        if (object.price !== undefined && object.price !== null) {
            message.price = exports.QuotePrice.fromPartial(object.price);
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce.toString());
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        return message;
    },
};
function createBaseCurrencyPairGenesis() {
    return {
        currencyPair: currency_pair_js_1.CurrencyPair.fromPartial({}),
        currencyPairPrice: undefined,
        nonce: BigInt(0),
        id: BigInt(0),
    };
}
exports.CurrencyPairGenesis = {
    typeUrl: "/slinky.oracle.v1.CurrencyPairGenesis",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.currencyPair !== undefined) {
            currency_pair_js_1.CurrencyPair.encode(message.currencyPair, writer.uint32(10).fork()).ldelim();
        }
        if (message.currencyPairPrice !== undefined) {
            exports.QuotePrice.encode(message.currencyPairPrice, writer.uint32(18).fork()).ldelim();
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(24).uint64(message.nonce);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(32).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCurrencyPairGenesis();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currencyPair = currency_pair_js_1.CurrencyPair.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.currencyPairPrice = exports.QuotePrice.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.nonce = reader.uint64();
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
        const obj = createBaseCurrencyPairGenesis();
        if ((0, helpers_js_1.isSet)(object.currencyPair))
            obj.currencyPair = currency_pair_js_1.CurrencyPair.fromJSON(object.currencyPair);
        if ((0, helpers_js_1.isSet)(object.currencyPairPrice))
            obj.currencyPairPrice = exports.QuotePrice.fromJSON(object.currencyPairPrice);
        if ((0, helpers_js_1.isSet)(object.nonce))
            obj.nonce = BigInt(object.nonce.toString());
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.currencyPair !== undefined &&
            (obj.currencyPair = message.currencyPair ? currency_pair_js_1.CurrencyPair.toJSON(message.currencyPair) : undefined);
        message.currencyPairPrice !== undefined &&
            (obj.currencyPairPrice = message.currencyPairPrice
                ? exports.QuotePrice.toJSON(message.currencyPairPrice)
                : undefined);
        message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCurrencyPairGenesis();
        if (object.currencyPair !== undefined && object.currencyPair !== null) {
            message.currencyPair = currency_pair_js_1.CurrencyPair.fromPartial(object.currencyPair);
        }
        if (object.currencyPairPrice !== undefined && object.currencyPairPrice !== null) {
            message.currencyPairPrice = exports.QuotePrice.fromPartial(object.currencyPairPrice);
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce.toString());
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        return message;
    },
};
function createBaseGenesisState() {
    return {
        currencyPairGenesis: [],
        nextId: BigInt(0),
    };
}
exports.GenesisState = {
    typeUrl: "/slinky.oracle.v1.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.currencyPairGenesis) {
            exports.CurrencyPairGenesis.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextId !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currencyPairGenesis.push(exports.CurrencyPairGenesis.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if (Array.isArray(object?.currencyPairGenesis))
            obj.currencyPairGenesis = object.currencyPairGenesis.map((e) => exports.CurrencyPairGenesis.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.nextId))
            obj.nextId = BigInt(object.nextId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.currencyPairGenesis) {
            obj.currencyPairGenesis = message.currencyPairGenesis.map((e) => e ? exports.CurrencyPairGenesis.toJSON(e) : undefined);
        }
        else {
            obj.currencyPairGenesis = [];
        }
        message.nextId !== undefined && (obj.nextId = (message.nextId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.currencyPairGenesis =
            object.currencyPairGenesis?.map((e) => exports.CurrencyPairGenesis.fromPartial(e)) || [];
        if (object.nextId !== undefined && object.nextId !== null) {
            message.nextId = BigInt(object.nextId.toString());
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map