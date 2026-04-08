"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgForceTransferResponse = exports.MsgForceTransfer = exports.MsgSetDenomMetadataResponse = exports.MsgSetDenomMetadata = exports.MsgSetBeforeSendHookResponse = exports.MsgSetBeforeSendHook = exports.MsgChangeAdminResponse = exports.MsgChangeAdmin = exports.MsgBurnResponse = exports.MsgBurn = exports.MsgMintResponse = exports.MsgMint = exports.MsgCreateDenomResponse = exports.MsgCreateDenom = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../../cosmos/base/v1beta1/coin.js");
const bank_js_1 = require("../../../cosmos/bank/v1beta1/bank.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "osmosis.tokenfactory.v1beta1";
function createBaseMsgCreateDenom() {
    return {
        sender: "",
        subdenom: "",
    };
}
exports.MsgCreateDenom = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.subdenom !== "") {
            writer.uint32(18).string(message.subdenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenom();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.subdenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateDenom();
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_js_1.isSet)(object.subdenom))
            obj.subdenom = String(object.subdenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.subdenom !== undefined && (obj.subdenom = message.subdenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenom();
        message.sender = object.sender ?? "";
        message.subdenom = object.subdenom ?? "";
        return message;
    },
};
function createBaseMsgCreateDenomResponse() {
    return {
        newTokenDenom: "",
    };
}
exports.MsgCreateDenomResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenomResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.newTokenDenom !== "") {
            writer.uint32(10).string(message.newTokenDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newTokenDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCreateDenomResponse();
        if ((0, helpers_js_1.isSet)(object.newTokenDenom))
            obj.newTokenDenom = String(object.newTokenDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.newTokenDenom !== undefined && (obj.newTokenDenom = message.newTokenDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDenomResponse();
        message.newTokenDenom = object.newTokenDenom ?? "";
        return message;
    },
};
function createBaseMsgMint() {
    return {
        sender: "",
        amount: coin_js_1.Coin.fromPartial({}),
        mintToAddress: "",
    };
}
exports.MsgMint = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_js_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.mintToAddress !== "") {
            writer.uint32(26).string(message.mintToAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mintToAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgMint();
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_js_1.isSet)(object.amount))
            obj.amount = coin_js_1.Coin.fromJSON(object.amount);
        if ((0, helpers_js_1.isSet)(object.mintToAddress))
            obj.mintToAddress = String(object.mintToAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? coin_js_1.Coin.toJSON(message.amount) : undefined);
        message.mintToAddress !== undefined && (obj.mintToAddress = message.mintToAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMint();
        message.sender = object.sender ?? "";
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_js_1.Coin.fromPartial(object.amount);
        }
        message.mintToAddress = object.mintToAddress ?? "";
        return message;
    },
};
function createBaseMsgMintResponse() {
    return {};
}
exports.MsgMintResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMintResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintResponse();
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
        const obj = createBaseMsgMintResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgMintResponse();
        return message;
    },
};
function createBaseMsgBurn() {
    return {
        sender: "",
        amount: coin_js_1.Coin.fromPartial({}),
        burnFromAddress: "",
    };
}
exports.MsgBurn = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_js_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.burnFromAddress !== "") {
            writer.uint32(26).string(message.burnFromAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.burnFromAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgBurn();
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_js_1.isSet)(object.amount))
            obj.amount = coin_js_1.Coin.fromJSON(object.amount);
        if ((0, helpers_js_1.isSet)(object.burnFromAddress))
            obj.burnFromAddress = String(object.burnFromAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? coin_js_1.Coin.toJSON(message.amount) : undefined);
        message.burnFromAddress !== undefined && (obj.burnFromAddress = message.burnFromAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBurn();
        message.sender = object.sender ?? "";
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_js_1.Coin.fromPartial(object.amount);
        }
        message.burnFromAddress = object.burnFromAddress ?? "";
        return message;
    },
};
function createBaseMsgBurnResponse() {
    return {};
}
exports.MsgBurnResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurnResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnResponse();
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
        const obj = createBaseMsgBurnResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgBurnResponse();
        return message;
    },
};
function createBaseMsgChangeAdmin() {
    return {
        sender: "",
        denom: "",
        newAdmin: "",
    };
}
exports.MsgChangeAdmin = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgChangeAdmin();
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_js_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_js_1.isSet)(object.newAdmin))
            obj.newAdmin = String(object.newAdmin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChangeAdmin();
        message.sender = object.sender ?? "";
        message.denom = object.denom ?? "";
        message.newAdmin = object.newAdmin ?? "";
        return message;
    },
};
function createBaseMsgChangeAdminResponse() {
    return {};
}
exports.MsgChangeAdminResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdminResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChangeAdminResponse();
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
        const obj = createBaseMsgChangeAdminResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgChangeAdminResponse();
        return message;
    },
};
function createBaseMsgSetBeforeSendHook() {
    return {
        sender: "",
        denom: "",
        contractAddr: "",
    };
}
exports.MsgSetBeforeSendHook = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.contractAddr !== "") {
            writer.uint32(26).string(message.contractAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetBeforeSendHook();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.contractAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetBeforeSendHook();
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_js_1.isSet)(object.denom))
            obj.denom = String(object.denom);
        if ((0, helpers_js_1.isSet)(object.contractAddr))
            obj.contractAddr = String(object.contractAddr);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.denom !== undefined && (obj.denom = message.denom);
        message.contractAddr !== undefined && (obj.contractAddr = message.contractAddr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetBeforeSendHook();
        message.sender = object.sender ?? "";
        message.denom = object.denom ?? "";
        message.contractAddr = object.contractAddr ?? "";
        return message;
    },
};
function createBaseMsgSetBeforeSendHookResponse() {
    return {};
}
exports.MsgSetBeforeSendHookResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHookResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetBeforeSendHookResponse();
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
        const obj = createBaseMsgSetBeforeSendHookResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetBeforeSendHookResponse();
        return message;
    },
};
function createBaseMsgSetDenomMetadata() {
    return {
        sender: "",
        metadata: bank_js_1.Metadata.fromPartial({}),
    };
}
exports.MsgSetDenomMetadata = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.metadata !== undefined) {
            bank_js_1.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.metadata = bank_js_1.Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSetDenomMetadata();
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_js_1.isSet)(object.metadata))
            obj.metadata = bank_js_1.Metadata.fromJSON(object.metadata);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata ? bank_js_1.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDenomMetadata();
        message.sender = object.sender ?? "";
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = bank_js_1.Metadata.fromPartial(object.metadata);
        }
        return message;
    },
};
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
exports.MsgSetDenomMetadataResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadataResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadataResponse();
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
        const obj = createBaseMsgSetDenomMetadataResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetDenomMetadataResponse();
        return message;
    },
};
function createBaseMsgForceTransfer() {
    return {
        sender: "",
        amount: coin_js_1.Coin.fromPartial({}),
        transferFromAddress: "",
        transferToAddress: "",
    };
}
exports.MsgForceTransfer = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.amount !== undefined) {
            coin_js_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.transferFromAddress !== "") {
            writer.uint32(26).string(message.transferFromAddress);
        }
        if (message.transferToAddress !== "") {
            writer.uint32(34).string(message.transferToAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.amount = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.transferFromAddress = reader.string();
                    break;
                case 4:
                    message.transferToAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgForceTransfer();
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_js_1.isSet)(object.amount))
            obj.amount = coin_js_1.Coin.fromJSON(object.amount);
        if ((0, helpers_js_1.isSet)(object.transferFromAddress))
            obj.transferFromAddress = String(object.transferFromAddress);
        if ((0, helpers_js_1.isSet)(object.transferToAddress))
            obj.transferToAddress = String(object.transferToAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.amount !== undefined && (obj.amount = message.amount ? coin_js_1.Coin.toJSON(message.amount) : undefined);
        message.transferFromAddress !== undefined && (obj.transferFromAddress = message.transferFromAddress);
        message.transferToAddress !== undefined && (obj.transferToAddress = message.transferToAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgForceTransfer();
        message.sender = object.sender ?? "";
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = coin_js_1.Coin.fromPartial(object.amount);
        }
        message.transferFromAddress = object.transferFromAddress ?? "";
        message.transferToAddress = object.transferToAddress ?? "";
        return message;
    },
};
function createBaseMsgForceTransferResponse() {
    return {};
}
exports.MsgForceTransferResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransferResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceTransferResponse();
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
        const obj = createBaseMsgForceTransferResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgForceTransferResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: bank_js_1.Params.fromPartial({}),
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            bank_js_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.params = bank_js_1.Params.decode(reader, reader.uint32());
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
            obj.params = bank_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? bank_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        if (object.params !== undefined && object.params !== null) {
            message.params = bank_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParamsResponse",
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