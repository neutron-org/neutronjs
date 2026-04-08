"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalBurnedNeutronsAmount = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.feeburner";
function createBaseTotalBurnedNeutronsAmount() {
    return {
        coin: coin_js_1.Coin.fromPartial({}),
    };
}
exports.TotalBurnedNeutronsAmount = {
    typeUrl: "/neutron.feeburner.TotalBurnedNeutronsAmount",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.coin !== undefined) {
            coin_js_1.Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalBurnedNeutronsAmount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coin = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTotalBurnedNeutronsAmount();
        if ((0, helpers_js_1.isSet)(object.coin))
            obj.coin = coin_js_1.Coin.fromJSON(object.coin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.coin !== undefined && (obj.coin = message.coin ? coin_js_1.Coin.toJSON(message.coin) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTotalBurnedNeutronsAmount();
        if (object.coin !== undefined && object.coin !== null) {
            message.coin = coin_js_1.Coin.fromPartial(object.coin);
        }
        return message;
    },
};
//# sourceMappingURL=total_burned_neutrons_amount.js.map