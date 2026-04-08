"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRemoveCurrencyPairsResponse = exports.MsgRemoveCurrencyPairs = exports.MsgAddCurrencyPairsResponse = exports.MsgAddCurrencyPairs = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const currency_pair_js_1 = require("../../types/v1/currency_pair.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "slinky.oracle.v1";
function createBaseMsgAddCurrencyPairs() {
    return {
        authority: "",
        currencyPairs: [],
    };
}
exports.MsgAddCurrencyPairs = {
    typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        for (const v of message.currencyPairs) {
            currency_pair_js_1.CurrencyPair.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddCurrencyPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const obj = createBaseMsgAddCurrencyPairs();
        if ((0, helpers_js_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if (Array.isArray(object?.currencyPairs))
            obj.currencyPairs = object.currencyPairs.map((e) => currency_pair_js_1.CurrencyPair.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        if (message.currencyPairs) {
            obj.currencyPairs = message.currencyPairs.map((e) => (e ? currency_pair_js_1.CurrencyPair.toJSON(e) : undefined));
        }
        else {
            obj.currencyPairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddCurrencyPairs();
        message.authority = object.authority ?? "";
        message.currencyPairs = object.currencyPairs?.map((e) => currency_pair_js_1.CurrencyPair.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgAddCurrencyPairsResponse() {
    return {};
}
exports.MsgAddCurrencyPairsResponse = {
    typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairsResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddCurrencyPairsResponse();
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
        const obj = createBaseMsgAddCurrencyPairsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgAddCurrencyPairsResponse();
        return message;
    },
};
function createBaseMsgRemoveCurrencyPairs() {
    return {
        authority: "",
        currencyPairIds: [],
    };
}
exports.MsgRemoveCurrencyPairs = {
    typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        for (const v of message.currencyPairIds) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveCurrencyPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const obj = createBaseMsgRemoveCurrencyPairs();
        if ((0, helpers_js_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if (Array.isArray(object?.currencyPairIds))
            obj.currencyPairIds = object.currencyPairIds.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        if (message.currencyPairIds) {
            obj.currencyPairIds = message.currencyPairIds.map((e) => e);
        }
        else {
            obj.currencyPairIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveCurrencyPairs();
        message.authority = object.authority ?? "";
        message.currencyPairIds = object.currencyPairIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgRemoveCurrencyPairsResponse() {
    return {};
}
exports.MsgRemoveCurrencyPairsResponse = {
    typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairsResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveCurrencyPairsResponse();
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
        const obj = createBaseMsgRemoveCurrencyPairsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRemoveCurrencyPairsResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map