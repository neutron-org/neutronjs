"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
const math_1 = require("@cosmjs/math");
exports.protobufPackage = "sdk.auction.v1";
function createBaseGenesisState() {
    return {
        params: exports.Params.fromPartial({}),
    };
}
exports.GenesisState = {
    typeUrl: "/sdk.auction.v1.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = exports.Params.decode(reader, reader.uint32());
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
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = exports.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = exports.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseParams() {
    return {
        maxBundleSize: 0,
        escrowAccountAddress: new Uint8Array(),
        reserveFee: coin_js_1.Coin.fromPartial({}),
        minBidIncrement: coin_js_1.Coin.fromPartial({}),
        frontRunningProtection: false,
        proposerFee: "",
    };
}
exports.Params = {
    typeUrl: "/sdk.auction.v1.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.maxBundleSize !== 0) {
            writer.uint32(8).uint32(message.maxBundleSize);
        }
        if (message.escrowAccountAddress.length !== 0) {
            writer.uint32(18).bytes(message.escrowAccountAddress);
        }
        if (message.reserveFee !== undefined) {
            coin_js_1.Coin.encode(message.reserveFee, writer.uint32(26).fork()).ldelim();
        }
        if (message.minBidIncrement !== undefined) {
            coin_js_1.Coin.encode(message.minBidIncrement, writer.uint32(34).fork()).ldelim();
        }
        if (message.frontRunningProtection === true) {
            writer.uint32(40).bool(message.frontRunningProtection);
        }
        if (message.proposerFee !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.proposerFee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxBundleSize = reader.uint32();
                    break;
                case 2:
                    message.escrowAccountAddress = reader.bytes();
                    break;
                case 3:
                    message.reserveFee = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.minBidIncrement = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.frontRunningProtection = reader.bool();
                    break;
                case 6:
                    message.proposerFee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseParams();
        if ((0, helpers_js_1.isSet)(object.maxBundleSize))
            obj.maxBundleSize = Number(object.maxBundleSize);
        if ((0, helpers_js_1.isSet)(object.escrowAccountAddress))
            obj.escrowAccountAddress = (0, helpers_js_1.bytesFromBase64)(object.escrowAccountAddress);
        if ((0, helpers_js_1.isSet)(object.reserveFee))
            obj.reserveFee = coin_js_1.Coin.fromJSON(object.reserveFee);
        if ((0, helpers_js_1.isSet)(object.minBidIncrement))
            obj.minBidIncrement = coin_js_1.Coin.fromJSON(object.minBidIncrement);
        if ((0, helpers_js_1.isSet)(object.frontRunningProtection))
            obj.frontRunningProtection = Boolean(object.frontRunningProtection);
        if ((0, helpers_js_1.isSet)(object.proposerFee))
            obj.proposerFee = String(object.proposerFee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.maxBundleSize !== undefined && (obj.maxBundleSize = Math.round(message.maxBundleSize));
        message.escrowAccountAddress !== undefined &&
            (obj.escrowAccountAddress = (0, helpers_js_1.base64FromBytes)(message.escrowAccountAddress !== undefined ? message.escrowAccountAddress : new Uint8Array()));
        message.reserveFee !== undefined &&
            (obj.reserveFee = message.reserveFee ? coin_js_1.Coin.toJSON(message.reserveFee) : undefined);
        message.minBidIncrement !== undefined &&
            (obj.minBidIncrement = message.minBidIncrement ? coin_js_1.Coin.toJSON(message.minBidIncrement) : undefined);
        message.frontRunningProtection !== undefined &&
            (obj.frontRunningProtection = message.frontRunningProtection);
        message.proposerFee !== undefined && (obj.proposerFee = message.proposerFee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.maxBundleSize = object.maxBundleSize ?? 0;
        message.escrowAccountAddress = object.escrowAccountAddress ?? new Uint8Array();
        if (object.reserveFee !== undefined && object.reserveFee !== null) {
            message.reserveFee = coin_js_1.Coin.fromPartial(object.reserveFee);
        }
        if (object.minBidIncrement !== undefined && object.minBidIncrement !== null) {
            message.minBidIncrement = coin_js_1.Coin.fromPartial(object.minBidIncrement);
        }
        message.frontRunningProtection = object.frontRunningProtection ?? false;
        message.proposerFee = object.proposerFee ?? "";
        return message;
    },
};
//# sourceMappingURL=genesis.js.map