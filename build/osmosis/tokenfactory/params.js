"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.WhitelistedHook = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "osmosis.tokenfactory";
function createBaseWhitelistedHook() {
    return {
        codeId: BigInt(0),
        denomCreator: "",
    };
}
exports.WhitelistedHook = {
    typeUrl: "/osmosis.tokenfactory.WhitelistedHook",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.codeId !== BigInt(0)) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.denomCreator !== "") {
            writer.uint32(18).string(message.denomCreator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWhitelistedHook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.denomCreator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseWhitelistedHook();
        if ((0, helpers_js_1.isSet)(object.codeId))
            obj.codeId = BigInt(object.codeId.toString());
        if ((0, helpers_js_1.isSet)(object.denomCreator))
            obj.denomCreator = String(object.denomCreator);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
        message.denomCreator !== undefined && (obj.denomCreator = message.denomCreator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWhitelistedHook();
        if (object.codeId !== undefined && object.codeId !== null) {
            message.codeId = BigInt(object.codeId.toString());
        }
        message.denomCreator = object.denomCreator ?? "";
        return message;
    },
};
function createBaseParams() {
    return {
        denomCreationFee: [],
        denomCreationGasConsume: undefined,
        feeCollectorAddress: "",
        whitelistedHooks: [],
    };
}
exports.Params = {
    typeUrl: "/osmosis.tokenfactory.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.denomCreationFee) {
            coin_js_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.denomCreationGasConsume !== undefined) {
            writer.uint32(16).uint64(message.denomCreationGasConsume);
        }
        if (message.feeCollectorAddress !== "") {
            writer.uint32(26).string(message.feeCollectorAddress);
        }
        for (const v of message.whitelistedHooks) {
            exports.WhitelistedHook.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.denomCreationFee.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.denomCreationGasConsume = reader.uint64();
                    break;
                case 3:
                    message.feeCollectorAddress = reader.string();
                    break;
                case 4:
                    message.whitelistedHooks.push(exports.WhitelistedHook.decode(reader, reader.uint32()));
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
        if (Array.isArray(object?.denomCreationFee))
            obj.denomCreationFee = object.denomCreationFee.map((e) => coin_js_1.Coin.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.denomCreationGasConsume))
            obj.denomCreationGasConsume = BigInt(object.denomCreationGasConsume.toString());
        if ((0, helpers_js_1.isSet)(object.feeCollectorAddress))
            obj.feeCollectorAddress = String(object.feeCollectorAddress);
        if (Array.isArray(object?.whitelistedHooks))
            obj.whitelistedHooks = object.whitelistedHooks.map((e) => exports.WhitelistedHook.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.denomCreationFee) {
            obj.denomCreationFee = message.denomCreationFee.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.denomCreationFee = [];
        }
        if (message.denomCreationGasConsume !== undefined) {
            obj.denomCreationGasConsume = message.denomCreationGasConsume.toString();
        }
        message.feeCollectorAddress !== undefined && (obj.feeCollectorAddress = message.feeCollectorAddress);
        if (message.whitelistedHooks) {
            obj.whitelistedHooks = message.whitelistedHooks.map((e) => (e ? exports.WhitelistedHook.toJSON(e) : undefined));
        }
        else {
            obj.whitelistedHooks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.denomCreationFee = object.denomCreationFee?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        if (object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null) {
            message.denomCreationGasConsume = BigInt(object.denomCreationGasConsume.toString());
        }
        message.feeCollectorAddress = object.feeCollectorAddress ?? "";
        message.whitelistedHooks = object.whitelistedHooks?.map((e) => exports.WhitelistedHook.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=params.js.map