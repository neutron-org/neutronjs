"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgSubmitTxResponse = exports.MsgSubmitTx = exports.MsgRegisterInterchainAccountResponse = exports.MsgRegisterInterchainAccount = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../../cosmos/base/v1beta1/coin.js");
const channel_js_1 = require("../../../ibc/core/channel/v1/channel.js");
const any_js_1 = require("../../../google/protobuf/any.js");
const fee_js_1 = require("../../feerefunder/fee.js");
const params_js_1 = require("./params.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "neutron.interchaintxs.v1";
function createBaseMsgRegisterInterchainAccount() {
    return {
        fromAddress: "",
        connectionId: "",
        interchainAccountId: "",
        registerFee: [],
        ordering: 0,
    };
}
exports.MsgRegisterInterchainAccount = {
    typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.interchainAccountId !== "") {
            writer.uint32(26).string(message.interchainAccountId);
        }
        for (const v of message.registerFee) {
            coin_js_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.ordering !== 0) {
            writer.uint32(40).int32(message.ordering);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.interchainAccountId = reader.string();
                    break;
                case 4:
                    message.registerFee.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.ordering = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRegisterInterchainAccount();
        if ((0, helpers_js_1.isSet)(object.fromAddress))
            obj.fromAddress = String(object.fromAddress);
        if ((0, helpers_js_1.isSet)(object.connectionId))
            obj.connectionId = String(object.connectionId);
        if ((0, helpers_js_1.isSet)(object.interchainAccountId))
            obj.interchainAccountId = String(object.interchainAccountId);
        if (Array.isArray(object?.registerFee))
            obj.registerFee = object.registerFee.map((e) => coin_js_1.Coin.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.ordering))
            obj.ordering = (0, channel_js_1.orderFromJSON)(object.ordering);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.interchainAccountId !== undefined && (obj.interchainAccountId = message.interchainAccountId);
        if (message.registerFee) {
            obj.registerFee = message.registerFee.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.registerFee = [];
        }
        message.ordering !== undefined && (obj.ordering = (0, channel_js_1.orderToJSON)(message.ordering));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccount();
        message.fromAddress = object.fromAddress ?? "";
        message.connectionId = object.connectionId ?? "";
        message.interchainAccountId = object.interchainAccountId ?? "";
        message.registerFee = object.registerFee?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        message.ordering = object.ordering ?? 0;
        return message;
    },
};
function createBaseMsgRegisterInterchainAccountResponse() {
    return {
        channelId: "",
        portId: "",
    };
}
exports.MsgRegisterInterchainAccountResponse = {
    typeUrl: "/neutron.interchaintxs.v1.MsgRegisterInterchainAccountResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.channelId !== "") {
            writer.uint32(10).string(message.channelId);
        }
        if (message.portId !== "") {
            writer.uint32(18).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.portId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRegisterInterchainAccountResponse();
        if ((0, helpers_js_1.isSet)(object.channelId))
            obj.channelId = String(object.channelId);
        if ((0, helpers_js_1.isSet)(object.portId))
            obj.portId = String(object.portId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccountResponse();
        message.channelId = object.channelId ?? "";
        message.portId = object.portId ?? "";
        return message;
    },
};
function createBaseMsgSubmitTx() {
    return {
        fromAddress: "",
        interchainAccountId: "",
        connectionId: "",
        msgs: [],
        memo: "",
        timeout: BigInt(0),
        fee: fee_js_1.Fee.fromPartial({}),
    };
}
exports.MsgSubmitTx = {
    typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTx",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.fromAddress !== "") {
            writer.uint32(10).string(message.fromAddress);
        }
        if (message.interchainAccountId !== "") {
            writer.uint32(18).string(message.interchainAccountId);
        }
        if (message.connectionId !== "") {
            writer.uint32(26).string(message.connectionId);
        }
        for (const v of message.msgs) {
            any_js_1.Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(42).string(message.memo);
        }
        if (message.timeout !== BigInt(0)) {
            writer.uint32(48).uint64(message.timeout);
        }
        if (message.fee !== undefined) {
            fee_js_1.Fee.encode(message.fee, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromAddress = reader.string();
                    break;
                case 2:
                    message.interchainAccountId = reader.string();
                    break;
                case 3:
                    message.connectionId = reader.string();
                    break;
                case 4:
                    message.msgs.push(any_js_1.Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.memo = reader.string();
                    break;
                case 6:
                    message.timeout = reader.uint64();
                    break;
                case 7:
                    message.fee = fee_js_1.Fee.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSubmitTx();
        if ((0, helpers_js_1.isSet)(object.fromAddress))
            obj.fromAddress = String(object.fromAddress);
        if ((0, helpers_js_1.isSet)(object.interchainAccountId))
            obj.interchainAccountId = String(object.interchainAccountId);
        if ((0, helpers_js_1.isSet)(object.connectionId))
            obj.connectionId = String(object.connectionId);
        if (Array.isArray(object?.msgs))
            obj.msgs = object.msgs.map((e) => any_js_1.Any.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.memo))
            obj.memo = String(object.memo);
        if ((0, helpers_js_1.isSet)(object.timeout))
            obj.timeout = BigInt(object.timeout.toString());
        if ((0, helpers_js_1.isSet)(object.fee))
            obj.fee = fee_js_1.Fee.fromJSON(object.fee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.interchainAccountId !== undefined && (obj.interchainAccountId = message.interchainAccountId);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        if (message.msgs) {
            obj.msgs = message.msgs.map((e) => (e ? any_js_1.Any.toJSON(e) : undefined));
        }
        else {
            obj.msgs = [];
        }
        message.memo !== undefined && (obj.memo = message.memo);
        message.timeout !== undefined && (obj.timeout = (message.timeout || BigInt(0)).toString());
        message.fee !== undefined && (obj.fee = message.fee ? fee_js_1.Fee.toJSON(message.fee) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitTx();
        message.fromAddress = object.fromAddress ?? "";
        message.interchainAccountId = object.interchainAccountId ?? "";
        message.connectionId = object.connectionId ?? "";
        message.msgs = object.msgs?.map((e) => any_js_1.Any.fromPartial(e)) || [];
        message.memo = object.memo ?? "";
        if (object.timeout !== undefined && object.timeout !== null) {
            message.timeout = BigInt(object.timeout.toString());
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = fee_js_1.Fee.fromPartial(object.fee);
        }
        return message;
    },
};
function createBaseMsgSubmitTxResponse() {
    return {
        sequenceId: BigInt(0),
        channel: "",
    };
}
exports.MsgSubmitTxResponse = {
    typeUrl: "/neutron.interchaintxs.v1.MsgSubmitTxResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sequenceId !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequenceId);
        }
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequenceId = reader.uint64();
                    break;
                case 2:
                    message.channel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSubmitTxResponse();
        if ((0, helpers_js_1.isSet)(object.sequenceId))
            obj.sequenceId = BigInt(object.sequenceId.toString());
        if ((0, helpers_js_1.isSet)(object.channel))
            obj.channel = String(object.channel);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sequenceId !== undefined && (obj.sequenceId = (message.sequenceId || BigInt(0)).toString());
        message.channel !== undefined && (obj.channel = message.channel);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitTxResponse();
        if (object.sequenceId !== undefined && object.sequenceId !== null) {
            message.sequenceId = BigInt(object.sequenceId.toString());
        }
        message.channel = object.channel ?? "";
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParams",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const obj = createBaseMsgUpdateParams();
        if ((0, helpers_js_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/neutron.interchaintxs.v1.MsgUpdateParamsResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const obj = createBaseMsgUpdateParamsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map