"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceRequirement = exports.EmptyPaymentScheduleType = exports.BlockBasedPaymentScheduleType = exports.MonthlyPaymentScheduleType = exports.PaymentScheduleType = exports.RewardQuote = exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
const math_1 = require("@cosmjs/math");
exports.protobufPackage = "neutron.revenue";
function createBaseParams() {
    return {
        rewardAsset: "",
        rewardQuote: undefined,
        blocksPerformanceRequirement: undefined,
        oracleVotesPerformanceRequirement: undefined,
        paymentScheduleType: undefined,
        twapWindow: BigInt(0),
    };
}
exports.Params = {
    typeUrl: "/neutron.revenue.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.rewardAsset !== "") {
            writer.uint32(10).string(message.rewardAsset);
        }
        if (message.rewardQuote !== undefined) {
            exports.RewardQuote.encode(message.rewardQuote, writer.uint32(18).fork()).ldelim();
        }
        if (message.blocksPerformanceRequirement !== undefined) {
            exports.PerformanceRequirement.encode(message.blocksPerformanceRequirement, writer.uint32(26).fork()).ldelim();
        }
        if (message.oracleVotesPerformanceRequirement !== undefined) {
            exports.PerformanceRequirement.encode(message.oracleVotesPerformanceRequirement, writer.uint32(34).fork()).ldelim();
        }
        if (message.paymentScheduleType !== undefined) {
            exports.PaymentScheduleType.encode(message.paymentScheduleType, writer.uint32(42).fork()).ldelim();
        }
        if (message.twapWindow !== BigInt(0)) {
            writer.uint32(48).int64(message.twapWindow);
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
                    message.rewardAsset = reader.string();
                    break;
                case 2:
                    message.rewardQuote = exports.RewardQuote.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.blocksPerformanceRequirement = exports.PerformanceRequirement.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.oracleVotesPerformanceRequirement = exports.PerformanceRequirement.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.paymentScheduleType = exports.PaymentScheduleType.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.twapWindow = reader.int64();
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
        if ((0, helpers_js_1.isSet)(object.rewardAsset))
            obj.rewardAsset = String(object.rewardAsset);
        if ((0, helpers_js_1.isSet)(object.rewardQuote))
            obj.rewardQuote = exports.RewardQuote.fromJSON(object.rewardQuote);
        if ((0, helpers_js_1.isSet)(object.blocksPerformanceRequirement))
            obj.blocksPerformanceRequirement = exports.PerformanceRequirement.fromJSON(object.blocksPerformanceRequirement);
        if ((0, helpers_js_1.isSet)(object.oracleVotesPerformanceRequirement))
            obj.oracleVotesPerformanceRequirement = exports.PerformanceRequirement.fromJSON(object.oracleVotesPerformanceRequirement);
        if ((0, helpers_js_1.isSet)(object.paymentScheduleType))
            obj.paymentScheduleType = exports.PaymentScheduleType.fromJSON(object.paymentScheduleType);
        if ((0, helpers_js_1.isSet)(object.twapWindow))
            obj.twapWindow = BigInt(object.twapWindow.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.rewardAsset !== undefined && (obj.rewardAsset = message.rewardAsset);
        message.rewardQuote !== undefined &&
            (obj.rewardQuote = message.rewardQuote ? exports.RewardQuote.toJSON(message.rewardQuote) : undefined);
        message.blocksPerformanceRequirement !== undefined &&
            (obj.blocksPerformanceRequirement = message.blocksPerformanceRequirement
                ? exports.PerformanceRequirement.toJSON(message.blocksPerformanceRequirement)
                : undefined);
        message.oracleVotesPerformanceRequirement !== undefined &&
            (obj.oracleVotesPerformanceRequirement = message.oracleVotesPerformanceRequirement
                ? exports.PerformanceRequirement.toJSON(message.oracleVotesPerformanceRequirement)
                : undefined);
        message.paymentScheduleType !== undefined &&
            (obj.paymentScheduleType = message.paymentScheduleType
                ? exports.PaymentScheduleType.toJSON(message.paymentScheduleType)
                : undefined);
        message.twapWindow !== undefined && (obj.twapWindow = (message.twapWindow || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.rewardAsset = object.rewardAsset ?? "";
        if (object.rewardQuote !== undefined && object.rewardQuote !== null) {
            message.rewardQuote = exports.RewardQuote.fromPartial(object.rewardQuote);
        }
        if (object.blocksPerformanceRequirement !== undefined && object.blocksPerformanceRequirement !== null) {
            message.blocksPerformanceRequirement = exports.PerformanceRequirement.fromPartial(object.blocksPerformanceRequirement);
        }
        if (object.oracleVotesPerformanceRequirement !== undefined &&
            object.oracleVotesPerformanceRequirement !== null) {
            message.oracleVotesPerformanceRequirement = exports.PerformanceRequirement.fromPartial(object.oracleVotesPerformanceRequirement);
        }
        if (object.paymentScheduleType !== undefined && object.paymentScheduleType !== null) {
            message.paymentScheduleType = exports.PaymentScheduleType.fromPartial(object.paymentScheduleType);
        }
        if (object.twapWindow !== undefined && object.twapWindow !== null) {
            message.twapWindow = BigInt(object.twapWindow.toString());
        }
        return message;
    },
};
function createBaseRewardQuote() {
    return {
        amount: BigInt(0),
        asset: "",
    };
}
exports.RewardQuote = {
    typeUrl: "/neutron.revenue.RewardQuote",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.amount !== BigInt(0)) {
            writer.uint32(8).uint64(message.amount);
        }
        if (message.asset !== "") {
            writer.uint32(18).string(message.asset);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardQuote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.uint64();
                    break;
                case 2:
                    message.asset = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRewardQuote();
        if ((0, helpers_js_1.isSet)(object.amount))
            obj.amount = BigInt(object.amount.toString());
        if ((0, helpers_js_1.isSet)(object.asset))
            obj.asset = String(object.asset);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
        message.asset !== undefined && (obj.asset = message.asset);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRewardQuote();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = BigInt(object.amount.toString());
        }
        message.asset = object.asset ?? "";
        return message;
    },
};
function createBasePaymentScheduleType() {
    return {
        monthlyPaymentScheduleType: undefined,
        blockBasedPaymentScheduleType: undefined,
        emptyPaymentScheduleType: undefined,
    };
}
exports.PaymentScheduleType = {
    typeUrl: "/neutron.revenue.PaymentScheduleType",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.monthlyPaymentScheduleType !== undefined) {
            exports.MonthlyPaymentScheduleType.encode(message.monthlyPaymentScheduleType, writer.uint32(34).fork()).ldelim();
        }
        if (message.blockBasedPaymentScheduleType !== undefined) {
            exports.BlockBasedPaymentScheduleType.encode(message.blockBasedPaymentScheduleType, writer.uint32(42).fork()).ldelim();
        }
        if (message.emptyPaymentScheduleType !== undefined) {
            exports.EmptyPaymentScheduleType.encode(message.emptyPaymentScheduleType, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaymentScheduleType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.monthlyPaymentScheduleType = exports.MonthlyPaymentScheduleType.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.blockBasedPaymentScheduleType = exports.BlockBasedPaymentScheduleType.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.emptyPaymentScheduleType = exports.EmptyPaymentScheduleType.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePaymentScheduleType();
        if ((0, helpers_js_1.isSet)(object.monthlyPaymentScheduleType))
            obj.monthlyPaymentScheduleType = exports.MonthlyPaymentScheduleType.fromJSON(object.monthlyPaymentScheduleType);
        if ((0, helpers_js_1.isSet)(object.blockBasedPaymentScheduleType))
            obj.blockBasedPaymentScheduleType = exports.BlockBasedPaymentScheduleType.fromJSON(object.blockBasedPaymentScheduleType);
        if ((0, helpers_js_1.isSet)(object.emptyPaymentScheduleType))
            obj.emptyPaymentScheduleType = exports.EmptyPaymentScheduleType.fromJSON(object.emptyPaymentScheduleType);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.monthlyPaymentScheduleType !== undefined &&
            (obj.monthlyPaymentScheduleType = message.monthlyPaymentScheduleType
                ? exports.MonthlyPaymentScheduleType.toJSON(message.monthlyPaymentScheduleType)
                : undefined);
        message.blockBasedPaymentScheduleType !== undefined &&
            (obj.blockBasedPaymentScheduleType = message.blockBasedPaymentScheduleType
                ? exports.BlockBasedPaymentScheduleType.toJSON(message.blockBasedPaymentScheduleType)
                : undefined);
        message.emptyPaymentScheduleType !== undefined &&
            (obj.emptyPaymentScheduleType = message.emptyPaymentScheduleType
                ? exports.EmptyPaymentScheduleType.toJSON(message.emptyPaymentScheduleType)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePaymentScheduleType();
        if (object.monthlyPaymentScheduleType !== undefined && object.monthlyPaymentScheduleType !== null) {
            message.monthlyPaymentScheduleType = exports.MonthlyPaymentScheduleType.fromPartial(object.monthlyPaymentScheduleType);
        }
        if (object.blockBasedPaymentScheduleType !== undefined && object.blockBasedPaymentScheduleType !== null) {
            message.blockBasedPaymentScheduleType = exports.BlockBasedPaymentScheduleType.fromPartial(object.blockBasedPaymentScheduleType);
        }
        if (object.emptyPaymentScheduleType !== undefined && object.emptyPaymentScheduleType !== null) {
            message.emptyPaymentScheduleType = exports.EmptyPaymentScheduleType.fromPartial(object.emptyPaymentScheduleType);
        }
        return message;
    },
};
function createBaseMonthlyPaymentScheduleType() {
    return {};
}
exports.MonthlyPaymentScheduleType = {
    typeUrl: "/neutron.revenue.MonthlyPaymentScheduleType",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonthlyPaymentScheduleType();
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
        const obj = createBaseMonthlyPaymentScheduleType();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMonthlyPaymentScheduleType();
        return message;
    },
};
function createBaseBlockBasedPaymentScheduleType() {
    return {
        blocksPerPeriod: BigInt(0),
    };
}
exports.BlockBasedPaymentScheduleType = {
    typeUrl: "/neutron.revenue.BlockBasedPaymentScheduleType",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.blocksPerPeriod !== BigInt(0)) {
            writer.uint32(8).uint64(message.blocksPerPeriod);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockBasedPaymentScheduleType();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blocksPerPeriod = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseBlockBasedPaymentScheduleType();
        if ((0, helpers_js_1.isSet)(object.blocksPerPeriod))
            obj.blocksPerPeriod = BigInt(object.blocksPerPeriod.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.blocksPerPeriod !== undefined &&
            (obj.blocksPerPeriod = (message.blocksPerPeriod || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockBasedPaymentScheduleType();
        if (object.blocksPerPeriod !== undefined && object.blocksPerPeriod !== null) {
            message.blocksPerPeriod = BigInt(object.blocksPerPeriod.toString());
        }
        return message;
    },
};
function createBaseEmptyPaymentScheduleType() {
    return {};
}
exports.EmptyPaymentScheduleType = {
    typeUrl: "/neutron.revenue.EmptyPaymentScheduleType",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyPaymentScheduleType();
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
        const obj = createBaseEmptyPaymentScheduleType();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseEmptyPaymentScheduleType();
        return message;
    },
};
function createBasePerformanceRequirement() {
    return {
        allowedToMiss: "",
        requiredAtLeast: "",
    };
}
exports.PerformanceRequirement = {
    typeUrl: "/neutron.revenue.PerformanceRequirement",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.allowedToMiss !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.allowedToMiss, 18).atomics);
        }
        if (message.requiredAtLeast !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.requiredAtLeast, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePerformanceRequirement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowedToMiss = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.requiredAtLeast = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePerformanceRequirement();
        if ((0, helpers_js_1.isSet)(object.allowedToMiss))
            obj.allowedToMiss = String(object.allowedToMiss);
        if ((0, helpers_js_1.isSet)(object.requiredAtLeast))
            obj.requiredAtLeast = String(object.requiredAtLeast);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.allowedToMiss !== undefined && (obj.allowedToMiss = message.allowedToMiss);
        message.requiredAtLeast !== undefined && (obj.requiredAtLeast = message.requiredAtLeast);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePerformanceRequirement();
        message.allowedToMiss = object.allowedToMiss ?? "";
        message.requiredAtLeast = object.requiredAtLeast ?? "";
        return message;
    },
};
//# sourceMappingURL=params.js.map