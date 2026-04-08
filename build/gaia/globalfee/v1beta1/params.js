"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "gaia.globalfee.v1beta1";
function createBaseParams() {
    return {
        minimumGasPrices: [],
        bypassMinFeeMsgTypes: [],
        maxTotalBypassMinFeeMsgGasUsage: BigInt(0),
    };
}
exports.Params = {
    typeUrl: "/gaia.globalfee.v1beta1.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.minimumGasPrices) {
            coin_js_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.bypassMinFeeMsgTypes) {
            writer.uint32(18).string(v);
        }
        if (message.maxTotalBypassMinFeeMsgGasUsage !== BigInt(0)) {
            writer.uint32(24).uint64(message.maxTotalBypassMinFeeMsgGasUsage);
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
                    message.minimumGasPrices.push(coin_js_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.bypassMinFeeMsgTypes.push(reader.string());
                    break;
                case 3:
                    message.maxTotalBypassMinFeeMsgGasUsage = reader.uint64();
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
        if (Array.isArray(object?.minimumGasPrices))
            obj.minimumGasPrices = object.minimumGasPrices.map((e) => coin_js_1.DecCoin.fromJSON(e));
        if (Array.isArray(object?.bypassMinFeeMsgTypes))
            obj.bypassMinFeeMsgTypes = object.bypassMinFeeMsgTypes.map((e) => String(e));
        if ((0, helpers_js_1.isSet)(object.maxTotalBypassMinFeeMsgGasUsage))
            obj.maxTotalBypassMinFeeMsgGasUsage = BigInt(object.maxTotalBypassMinFeeMsgGasUsage.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.minimumGasPrices) {
            obj.minimumGasPrices = message.minimumGasPrices.map((e) => (e ? coin_js_1.DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.minimumGasPrices = [];
        }
        if (message.bypassMinFeeMsgTypes) {
            obj.bypassMinFeeMsgTypes = message.bypassMinFeeMsgTypes.map((e) => e);
        }
        else {
            obj.bypassMinFeeMsgTypes = [];
        }
        message.maxTotalBypassMinFeeMsgGasUsage !== undefined &&
            (obj.maxTotalBypassMinFeeMsgGasUsage = (message.maxTotalBypassMinFeeMsgGasUsage || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.minimumGasPrices = object.minimumGasPrices?.map((e) => coin_js_1.DecCoin.fromPartial(e)) || [];
        message.bypassMinFeeMsgTypes = object.bypassMinFeeMsgTypes?.map((e) => e) || [];
        if (object.maxTotalBypassMinFeeMsgGasUsage !== undefined &&
            object.maxTotalBypassMinFeeMsgGasUsage !== null) {
            message.maxTotalBypassMinFeeMsgGasUsage = BigInt(object.maxTotalBypassMinFeeMsgGasUsage.toString());
        }
        return message;
    },
};
//# sourceMappingURL=params.js.map