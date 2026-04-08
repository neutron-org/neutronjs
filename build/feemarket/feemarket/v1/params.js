"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const math_1 = require("@cosmjs/math");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "feemarket.feemarket.v1";
function createBaseParams() {
    return {
        alpha: "",
        beta: "",
        gamma: "",
        delta: "",
        minBaseGasPrice: "",
        minLearningRate: "",
        maxLearningRate: "",
        maxBlockUtilization: BigInt(0),
        window: BigInt(0),
        feeDenom: "",
        enabled: false,
        distributeFees: false,
        sendTipToProposer: false,
    };
}
exports.Params = {
    typeUrl: "/feemarket.feemarket.v1.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.alpha !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.alpha, 18).atomics);
        }
        if (message.beta !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.beta, 18).atomics);
        }
        if (message.gamma !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.gamma, 18).atomics);
        }
        if (message.delta !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.delta, 18).atomics);
        }
        if (message.minBaseGasPrice !== "") {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.minBaseGasPrice, 18).atomics);
        }
        if (message.minLearningRate !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.minLearningRate, 18).atomics);
        }
        if (message.maxLearningRate !== "") {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.maxLearningRate, 18).atomics);
        }
        if (message.maxBlockUtilization !== BigInt(0)) {
            writer.uint32(64).uint64(message.maxBlockUtilization);
        }
        if (message.window !== BigInt(0)) {
            writer.uint32(72).uint64(message.window);
        }
        if (message.feeDenom !== "") {
            writer.uint32(82).string(message.feeDenom);
        }
        if (message.enabled === true) {
            writer.uint32(88).bool(message.enabled);
        }
        if (message.distributeFees === true) {
            writer.uint32(96).bool(message.distributeFees);
        }
        if (message.sendTipToProposer === true) {
            writer.uint32(104).bool(message.sendTipToProposer);
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
                    message.alpha = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.beta = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.gamma = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.delta = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.minBaseGasPrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.minLearningRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.maxLearningRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.maxBlockUtilization = reader.uint64();
                    break;
                case 9:
                    message.window = reader.uint64();
                    break;
                case 10:
                    message.feeDenom = reader.string();
                    break;
                case 11:
                    message.enabled = reader.bool();
                    break;
                case 12:
                    message.distributeFees = reader.bool();
                    break;
                case 13:
                    message.sendTipToProposer = reader.bool();
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
        if ((0, helpers_js_1.isSet)(object.alpha))
            obj.alpha = String(object.alpha);
        if ((0, helpers_js_1.isSet)(object.beta))
            obj.beta = String(object.beta);
        if ((0, helpers_js_1.isSet)(object.gamma))
            obj.gamma = String(object.gamma);
        if ((0, helpers_js_1.isSet)(object.delta))
            obj.delta = String(object.delta);
        if ((0, helpers_js_1.isSet)(object.minBaseGasPrice))
            obj.minBaseGasPrice = String(object.minBaseGasPrice);
        if ((0, helpers_js_1.isSet)(object.minLearningRate))
            obj.minLearningRate = String(object.minLearningRate);
        if ((0, helpers_js_1.isSet)(object.maxLearningRate))
            obj.maxLearningRate = String(object.maxLearningRate);
        if ((0, helpers_js_1.isSet)(object.maxBlockUtilization))
            obj.maxBlockUtilization = BigInt(object.maxBlockUtilization.toString());
        if ((0, helpers_js_1.isSet)(object.window))
            obj.window = BigInt(object.window.toString());
        if ((0, helpers_js_1.isSet)(object.feeDenom))
            obj.feeDenom = String(object.feeDenom);
        if ((0, helpers_js_1.isSet)(object.enabled))
            obj.enabled = Boolean(object.enabled);
        if ((0, helpers_js_1.isSet)(object.distributeFees))
            obj.distributeFees = Boolean(object.distributeFees);
        if ((0, helpers_js_1.isSet)(object.sendTipToProposer))
            obj.sendTipToProposer = Boolean(object.sendTipToProposer);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.alpha !== undefined && (obj.alpha = message.alpha);
        message.beta !== undefined && (obj.beta = message.beta);
        message.gamma !== undefined && (obj.gamma = message.gamma);
        message.delta !== undefined && (obj.delta = message.delta);
        message.minBaseGasPrice !== undefined && (obj.minBaseGasPrice = message.minBaseGasPrice);
        message.minLearningRate !== undefined && (obj.minLearningRate = message.minLearningRate);
        message.maxLearningRate !== undefined && (obj.maxLearningRate = message.maxLearningRate);
        message.maxBlockUtilization !== undefined &&
            (obj.maxBlockUtilization = (message.maxBlockUtilization || BigInt(0)).toString());
        message.window !== undefined && (obj.window = (message.window || BigInt(0)).toString());
        message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.distributeFees !== undefined && (obj.distributeFees = message.distributeFees);
        message.sendTipToProposer !== undefined && (obj.sendTipToProposer = message.sendTipToProposer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.alpha = object.alpha ?? "";
        message.beta = object.beta ?? "";
        message.gamma = object.gamma ?? "";
        message.delta = object.delta ?? "";
        message.minBaseGasPrice = object.minBaseGasPrice ?? "";
        message.minLearningRate = object.minLearningRate ?? "";
        message.maxLearningRate = object.maxLearningRate ?? "";
        if (object.maxBlockUtilization !== undefined && object.maxBlockUtilization !== null) {
            message.maxBlockUtilization = BigInt(object.maxBlockUtilization.toString());
        }
        if (object.window !== undefined && object.window !== null) {
            message.window = BigInt(object.window.toString());
        }
        message.feeDenom = object.feeDenom ?? "";
        message.enabled = object.enabled ?? false;
        message.distributeFees = object.distributeFees ?? false;
        message.sendTipToProposer = object.sendTipToProposer ?? false;
        return message;
    },
};
//# sourceMappingURL=params.js.map