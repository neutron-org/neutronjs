"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("./params.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
const math_1 = require("@cosmjs/math");
exports.protobufPackage = "feemarket.feemarket.v1";
function createBaseGenesisState() {
    return {
        params: params_js_1.Params.fromPartial({}),
        state: exports.State.fromPartial({}),
    };
}
exports.GenesisState = {
    typeUrl: "/feemarket.feemarket.v1.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.state !== undefined) {
            exports.State.encode(message.state, writer.uint32(18).fork()).ldelim();
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
                    message.params = params_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.state = exports.State.decode(reader, reader.uint32());
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
            obj.params = params_js_1.Params.fromJSON(object.params);
        if ((0, helpers_js_1.isSet)(object.state))
            obj.state = exports.State.fromJSON(object.state);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        message.state !== undefined && (obj.state = message.state ? exports.State.toJSON(message.state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        if (object.state !== undefined && object.state !== null) {
            message.state = exports.State.fromPartial(object.state);
        }
        return message;
    },
};
function createBaseState() {
    return {
        baseGasPrice: "",
        learningRate: "",
        window: [],
        index: BigInt(0),
    };
}
exports.State = {
    typeUrl: "/feemarket.feemarket.v1.State",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.baseGasPrice !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.baseGasPrice, 18).atomics);
        }
        if (message.learningRate !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.learningRate, 18).atomics);
        }
        writer.uint32(26).fork();
        for (const v of message.window) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.index !== BigInt(0)) {
            writer.uint32(32).uint64(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseGasPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.learningRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.window.push(reader.uint64());
                        }
                    }
                    else {
                        message.window.push(reader.uint64());
                    }
                    break;
                case 4:
                    message.index = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseState();
        if ((0, helpers_js_1.isSet)(object.baseGasPrice))
            obj.baseGasPrice = String(object.baseGasPrice);
        if ((0, helpers_js_1.isSet)(object.learningRate))
            obj.learningRate = String(object.learningRate);
        if (Array.isArray(object?.window))
            obj.window = object.window.map((e) => BigInt(e.toString()));
        if ((0, helpers_js_1.isSet)(object.index))
            obj.index = BigInt(object.index.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.baseGasPrice !== undefined && (obj.baseGasPrice = message.baseGasPrice);
        message.learningRate !== undefined && (obj.learningRate = message.learningRate);
        if (message.window) {
            obj.window = message.window.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.window = [];
        }
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseState();
        message.baseGasPrice = object.baseGasPrice ?? "";
        message.learningRate = object.learningRate ?? "";
        message.window = object.window?.map((e) => BigInt(e.toString())) || [];
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index.toString());
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map