"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "neutron.interchaintxs.v1";
function createBaseParams() {
    return {
        msgSubmitTxMaxMessages: BigInt(0),
        registerFee: [],
    };
}
exports.Params = {
    typeUrl: "/neutron.interchaintxs.v1.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.msgSubmitTxMaxMessages !== BigInt(0)) {
            writer.uint32(8).uint64(message.msgSubmitTxMaxMessages);
        }
        for (const v of message.registerFee) {
            coin_js_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.msgSubmitTxMaxMessages = reader.uint64();
                    break;
                case 2:
                    message.registerFee.push(coin_js_1.Coin.decode(reader, reader.uint32()));
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
        if ((0, helpers_js_1.isSet)(object.msgSubmitTxMaxMessages))
            obj.msgSubmitTxMaxMessages = BigInt(object.msgSubmitTxMaxMessages.toString());
        if (Array.isArray(object?.registerFee))
            obj.registerFee = object.registerFee.map((e) => coin_js_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.msgSubmitTxMaxMessages !== undefined &&
            (obj.msgSubmitTxMaxMessages = (message.msgSubmitTxMaxMessages || BigInt(0)).toString());
        if (message.registerFee) {
            obj.registerFee = message.registerFee.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.registerFee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        if (object.msgSubmitTxMaxMessages !== undefined && object.msgSubmitTxMaxMessages !== null) {
            message.msgSubmitTxMaxMessages = BigInt(object.msgSubmitTxMaxMessages.toString());
        }
        message.registerFee = object.registerFee?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=params.js.map