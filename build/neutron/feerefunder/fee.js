"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketID = exports.Fee = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.feerefunder";
function createBaseFee() {
    return {
        recvFee: [],
        ackFee: [],
        timeoutFee: [],
    };
}
exports.Fee = {
    typeUrl: "/neutron.feerefunder.Fee",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.recvFee) {
            coin_js_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ackFee) {
            coin_js_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.timeoutFee) {
            coin_js_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recvFee.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.ackFee.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.timeoutFee.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFee();
        if (Array.isArray(object?.recvFee))
            obj.recvFee = object.recvFee.map((e) => coin_js_1.Coin.fromJSON(e));
        if (Array.isArray(object?.ackFee))
            obj.ackFee = object.ackFee.map((e) => coin_js_1.Coin.fromJSON(e));
        if (Array.isArray(object?.timeoutFee))
            obj.timeoutFee = object.timeoutFee.map((e) => coin_js_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.recvFee) {
            obj.recvFee = message.recvFee.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.recvFee = [];
        }
        if (message.ackFee) {
            obj.ackFee = message.ackFee.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.ackFee = [];
        }
        if (message.timeoutFee) {
            obj.timeoutFee = message.timeoutFee.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.timeoutFee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFee();
        message.recvFee = object.recvFee?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        message.ackFee = object.ackFee?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        message.timeoutFee = object.timeoutFee?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBasePacketID() {
    return {
        channelId: "",
        portId: "",
        sequence: BigInt(0),
    };
}
exports.PacketID = {
    typeUrl: "/neutron.feerefunder.PacketID",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePacketID();
        if ((0, helpers_js_1.isSet)(object.channelId))
            obj.channelId = String(object.channelId);
        if ((0, helpers_js_1.isSet)(object.portId))
            obj.portId = String(object.portId);
        if ((0, helpers_js_1.isSet)(object.sequence))
            obj.sequence = BigInt(object.sequence.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.portId !== undefined && (obj.portId = message.portId);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketID();
        message.channelId = object.channelId ?? "";
        message.portId = object.portId ?? "";
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence.toString());
        }
        return message;
    },
};
//# sourceMappingURL=fee.js.map