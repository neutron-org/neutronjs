"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "neutron.coinfactory.v1beta1";
function createBaseParams() {
    return {
        denomCreationFee: [],
        denomCreationGasConsume: undefined,
        feeCollectorAddress: "",
    };
}
exports.Params = {
    typeUrl: "/neutron.coinfactory.v1beta1.Params",
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
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.denomCreationFee = object.denomCreationFee?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        if (object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null) {
            message.denomCreationGasConsume = BigInt(object.denomCreationGasConsume.toString());
        }
        message.feeCollectorAddress = object.feeCollectorAddress ?? "";
        return message;
    },
};
//# sourceMappingURL=params.js.map