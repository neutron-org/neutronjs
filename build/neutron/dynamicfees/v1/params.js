"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../../binary.js");
exports.protobufPackage = "neutron.dynamicfees.v1";
function createBaseParams() {
    return {
        ntrnPrices: [],
    };
}
exports.Params = {
    typeUrl: "/neutron.dynamicfees.v1.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.ntrnPrices) {
            coin_js_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.ntrnPrices.push(coin_js_1.DecCoin.decode(reader, reader.uint32()));
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
        if (Array.isArray(object?.ntrnPrices))
            obj.ntrnPrices = object.ntrnPrices.map((e) => coin_js_1.DecCoin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.ntrnPrices) {
            obj.ntrnPrices = message.ntrnPrices.map((e) => (e ? coin_js_1.DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.ntrnPrices = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.ntrnPrices = object.ntrnPrices?.map((e) => coin_js_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=params.js.map