"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GasPricesResponse = exports.GasPricesRequest = exports.GasPriceResponse = exports.GasPriceRequest = exports.StateResponse = exports.StateRequest = exports.ParamsResponse = exports.ParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("./params.js");
const genesis_js_1 = require("./genesis.js");
const coin_js_1 = require("../../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "feemarket.feemarket.v1";
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: "/feemarket.feemarket.v1.ParamsRequest",
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
    typeUrl: "/feemarket.feemarket.v1.ParamsResponse",
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
function createBaseStateRequest() {
    return {};
}
exports.StateRequest = {
    typeUrl: "/feemarket.feemarket.v1.StateRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStateRequest();
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
        const obj = createBaseStateRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseStateRequest();
        return message;
    },
};
function createBaseStateResponse() {
    return {
        state: genesis_js_1.State.fromPartial({}),
    };
}
exports.StateResponse = {
    typeUrl: "/feemarket.feemarket.v1.StateResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.state !== undefined) {
            genesis_js_1.State.encode(message.state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = genesis_js_1.State.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseStateResponse();
        if ((0, helpers_js_1.isSet)(object.state))
            obj.state = genesis_js_1.State.fromJSON(object.state);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = message.state ? genesis_js_1.State.toJSON(message.state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStateResponse();
        if (object.state !== undefined && object.state !== null) {
            message.state = genesis_js_1.State.fromPartial(object.state);
        }
        return message;
    },
};
function createBaseGasPriceRequest() {
    return {
        denom: "",
    };
}
exports.GasPriceRequest = {
    typeUrl: "/feemarket.feemarket.v1.GasPriceRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGasPriceRequest();
        if ((0, helpers_js_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGasPriceRequest();
        message.denom = object.denom ?? "";
        return message;
    },
};
function createBaseGasPriceResponse() {
    return {
        price: coin_js_1.DecCoin.fromPartial({}),
    };
}
exports.GasPriceResponse = {
    typeUrl: "/feemarket.feemarket.v1.GasPriceResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.price !== undefined) {
            coin_js_1.DecCoin.encode(message.price, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.price = coin_js_1.DecCoin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGasPriceResponse();
        if ((0, helpers_js_1.isSet)(object.price))
            obj.price = coin_js_1.DecCoin.fromJSON(object.price);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.price !== undefined && (obj.price = message.price ? coin_js_1.DecCoin.toJSON(message.price) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGasPriceResponse();
        if (object.price !== undefined && object.price !== null) {
            message.price = coin_js_1.DecCoin.fromPartial(object.price);
        }
        return message;
    },
};
function createBaseGasPricesRequest() {
    return {};
}
exports.GasPricesRequest = {
    typeUrl: "/feemarket.feemarket.v1.GasPricesRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasPricesRequest();
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
        const obj = createBaseGasPricesRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseGasPricesRequest();
        return message;
    },
};
function createBaseGasPricesResponse() {
    return {
        prices: [],
    };
}
exports.GasPricesResponse = {
    typeUrl: "/feemarket.feemarket.v1.GasPricesResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.prices) {
            coin_js_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasPricesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prices.push(coin_js_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGasPricesResponse();
        if (Array.isArray(object?.prices))
            obj.prices = object.prices.map((e) => coin_js_1.DecCoin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.prices) {
            obj.prices = message.prices.map((e) => (e ? coin_js_1.DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.prices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGasPricesResponse();
        message.prices = object.prices?.map((e) => coin_js_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=query.js.map