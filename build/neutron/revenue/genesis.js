"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardAssetPrice = exports.EmptyPaymentSchedule = exports.BlockBasedPaymentSchedule = exports.MonthlyPaymentSchedule = exports.ValidatorInfo = exports.PaymentSchedule = exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("./params.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
const math_1 = require("@cosmjs/math");
exports.protobufPackage = "neutron.revenue";
function createBaseGenesisState() {
    return {
        params: params_js_1.Params.fromPartial({}),
        paymentSchedule: undefined,
        validators: [],
    };
}
exports.GenesisState = {
    typeUrl: "/neutron.revenue.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.paymentSchedule !== undefined) {
            exports.PaymentSchedule.encode(message.paymentSchedule, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.validators) {
            exports.ValidatorInfo.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.paymentSchedule = exports.PaymentSchedule.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validators.push(exports.ValidatorInfo.decode(reader, reader.uint32()));
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
        if ((0, helpers_js_1.isSet)(object.paymentSchedule))
            obj.paymentSchedule = exports.PaymentSchedule.fromJSON(object.paymentSchedule);
        if (Array.isArray(object?.validators))
            obj.validators = object.validators.map((e) => exports.ValidatorInfo.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        message.paymentSchedule !== undefined &&
            (obj.paymentSchedule = message.paymentSchedule
                ? exports.PaymentSchedule.toJSON(message.paymentSchedule)
                : undefined);
        if (message.validators) {
            obj.validators = message.validators.map((e) => (e ? exports.ValidatorInfo.toJSON(e) : undefined));
        }
        else {
            obj.validators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        if (object.paymentSchedule !== undefined && object.paymentSchedule !== null) {
            message.paymentSchedule = exports.PaymentSchedule.fromPartial(object.paymentSchedule);
        }
        message.validators = object.validators?.map((e) => exports.ValidatorInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBasePaymentSchedule() {
    return {
        monthlyPaymentSchedule: undefined,
        blockBasedPaymentSchedule: undefined,
        emptyPaymentSchedule: undefined,
    };
}
exports.PaymentSchedule = {
    typeUrl: "/neutron.revenue.PaymentSchedule",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.monthlyPaymentSchedule !== undefined) {
            exports.MonthlyPaymentSchedule.encode(message.monthlyPaymentSchedule, writer.uint32(10).fork()).ldelim();
        }
        if (message.blockBasedPaymentSchedule !== undefined) {
            exports.BlockBasedPaymentSchedule.encode(message.blockBasedPaymentSchedule, writer.uint32(18).fork()).ldelim();
        }
        if (message.emptyPaymentSchedule !== undefined) {
            exports.EmptyPaymentSchedule.encode(message.emptyPaymentSchedule, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaymentSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.monthlyPaymentSchedule = exports.MonthlyPaymentSchedule.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.blockBasedPaymentSchedule = exports.BlockBasedPaymentSchedule.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.emptyPaymentSchedule = exports.EmptyPaymentSchedule.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePaymentSchedule();
        if ((0, helpers_js_1.isSet)(object.monthlyPaymentSchedule))
            obj.monthlyPaymentSchedule = exports.MonthlyPaymentSchedule.fromJSON(object.monthlyPaymentSchedule);
        if ((0, helpers_js_1.isSet)(object.blockBasedPaymentSchedule))
            obj.blockBasedPaymentSchedule = exports.BlockBasedPaymentSchedule.fromJSON(object.blockBasedPaymentSchedule);
        if ((0, helpers_js_1.isSet)(object.emptyPaymentSchedule))
            obj.emptyPaymentSchedule = exports.EmptyPaymentSchedule.fromJSON(object.emptyPaymentSchedule);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.monthlyPaymentSchedule !== undefined &&
            (obj.monthlyPaymentSchedule = message.monthlyPaymentSchedule
                ? exports.MonthlyPaymentSchedule.toJSON(message.monthlyPaymentSchedule)
                : undefined);
        message.blockBasedPaymentSchedule !== undefined &&
            (obj.blockBasedPaymentSchedule = message.blockBasedPaymentSchedule
                ? exports.BlockBasedPaymentSchedule.toJSON(message.blockBasedPaymentSchedule)
                : undefined);
        message.emptyPaymentSchedule !== undefined &&
            (obj.emptyPaymentSchedule = message.emptyPaymentSchedule
                ? exports.EmptyPaymentSchedule.toJSON(message.emptyPaymentSchedule)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePaymentSchedule();
        if (object.monthlyPaymentSchedule !== undefined && object.monthlyPaymentSchedule !== null) {
            message.monthlyPaymentSchedule = exports.MonthlyPaymentSchedule.fromPartial(object.monthlyPaymentSchedule);
        }
        if (object.blockBasedPaymentSchedule !== undefined && object.blockBasedPaymentSchedule !== null) {
            message.blockBasedPaymentSchedule = exports.BlockBasedPaymentSchedule.fromPartial(object.blockBasedPaymentSchedule);
        }
        if (object.emptyPaymentSchedule !== undefined && object.emptyPaymentSchedule !== null) {
            message.emptyPaymentSchedule = exports.EmptyPaymentSchedule.fromPartial(object.emptyPaymentSchedule);
        }
        return message;
    },
};
function createBaseValidatorInfo() {
    return {
        valOperAddress: "",
        commitedBlocksInPeriod: BigInt(0),
        commitedOracleVotesInPeriod: BigInt(0),
        inActiveValsetForBlocksInPeriod: BigInt(0),
    };
}
exports.ValidatorInfo = {
    typeUrl: "/neutron.revenue.ValidatorInfo",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.valOperAddress !== "") {
            writer.uint32(10).string(message.valOperAddress);
        }
        if (message.commitedBlocksInPeriod !== BigInt(0)) {
            writer.uint32(16).uint64(message.commitedBlocksInPeriod);
        }
        if (message.commitedOracleVotesInPeriod !== BigInt(0)) {
            writer.uint32(24).uint64(message.commitedOracleVotesInPeriod);
        }
        if (message.inActiveValsetForBlocksInPeriod !== BigInt(0)) {
            writer.uint32(32).uint64(message.inActiveValsetForBlocksInPeriod);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valOperAddress = reader.string();
                    break;
                case 2:
                    message.commitedBlocksInPeriod = reader.uint64();
                    break;
                case 3:
                    message.commitedOracleVotesInPeriod = reader.uint64();
                    break;
                case 4:
                    message.inActiveValsetForBlocksInPeriod = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseValidatorInfo();
        if ((0, helpers_js_1.isSet)(object.valOperAddress))
            obj.valOperAddress = String(object.valOperAddress);
        if ((0, helpers_js_1.isSet)(object.commitedBlocksInPeriod))
            obj.commitedBlocksInPeriod = BigInt(object.commitedBlocksInPeriod.toString());
        if ((0, helpers_js_1.isSet)(object.commitedOracleVotesInPeriod))
            obj.commitedOracleVotesInPeriod = BigInt(object.commitedOracleVotesInPeriod.toString());
        if ((0, helpers_js_1.isSet)(object.inActiveValsetForBlocksInPeriod))
            obj.inActiveValsetForBlocksInPeriod = BigInt(object.inActiveValsetForBlocksInPeriod.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.valOperAddress !== undefined && (obj.valOperAddress = message.valOperAddress);
        message.commitedBlocksInPeriod !== undefined &&
            (obj.commitedBlocksInPeriod = (message.commitedBlocksInPeriod || BigInt(0)).toString());
        message.commitedOracleVotesInPeriod !== undefined &&
            (obj.commitedOracleVotesInPeriod = (message.commitedOracleVotesInPeriod || BigInt(0)).toString());
        message.inActiveValsetForBlocksInPeriod !== undefined &&
            (obj.inActiveValsetForBlocksInPeriod = (message.inActiveValsetForBlocksInPeriod || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorInfo();
        message.valOperAddress = object.valOperAddress ?? "";
        if (object.commitedBlocksInPeriod !== undefined && object.commitedBlocksInPeriod !== null) {
            message.commitedBlocksInPeriod = BigInt(object.commitedBlocksInPeriod.toString());
        }
        if (object.commitedOracleVotesInPeriod !== undefined && object.commitedOracleVotesInPeriod !== null) {
            message.commitedOracleVotesInPeriod = BigInt(object.commitedOracleVotesInPeriod.toString());
        }
        if (object.inActiveValsetForBlocksInPeriod !== undefined &&
            object.inActiveValsetForBlocksInPeriod !== null) {
            message.inActiveValsetForBlocksInPeriod = BigInt(object.inActiveValsetForBlocksInPeriod.toString());
        }
        return message;
    },
};
function createBaseMonthlyPaymentSchedule() {
    return {
        currentMonthStartBlock: BigInt(0),
        currentMonthStartBlockTs: BigInt(0),
    };
}
exports.MonthlyPaymentSchedule = {
    typeUrl: "/neutron.revenue.MonthlyPaymentSchedule",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.currentMonthStartBlock !== BigInt(0)) {
            writer.uint32(8).uint64(message.currentMonthStartBlock);
        }
        if (message.currentMonthStartBlockTs !== BigInt(0)) {
            writer.uint32(16).uint64(message.currentMonthStartBlockTs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonthlyPaymentSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currentMonthStartBlock = reader.uint64();
                    break;
                case 2:
                    message.currentMonthStartBlockTs = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMonthlyPaymentSchedule();
        if ((0, helpers_js_1.isSet)(object.currentMonthStartBlock))
            obj.currentMonthStartBlock = BigInt(object.currentMonthStartBlock.toString());
        if ((0, helpers_js_1.isSet)(object.currentMonthStartBlockTs))
            obj.currentMonthStartBlockTs = BigInt(object.currentMonthStartBlockTs.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.currentMonthStartBlock !== undefined &&
            (obj.currentMonthStartBlock = (message.currentMonthStartBlock || BigInt(0)).toString());
        message.currentMonthStartBlockTs !== undefined &&
            (obj.currentMonthStartBlockTs = (message.currentMonthStartBlockTs || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMonthlyPaymentSchedule();
        if (object.currentMonthStartBlock !== undefined && object.currentMonthStartBlock !== null) {
            message.currentMonthStartBlock = BigInt(object.currentMonthStartBlock.toString());
        }
        if (object.currentMonthStartBlockTs !== undefined && object.currentMonthStartBlockTs !== null) {
            message.currentMonthStartBlockTs = BigInt(object.currentMonthStartBlockTs.toString());
        }
        return message;
    },
};
function createBaseBlockBasedPaymentSchedule() {
    return {
        blocksPerPeriod: BigInt(0),
        currentPeriodStartBlock: BigInt(0),
    };
}
exports.BlockBasedPaymentSchedule = {
    typeUrl: "/neutron.revenue.BlockBasedPaymentSchedule",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.blocksPerPeriod !== BigInt(0)) {
            writer.uint32(8).uint64(message.blocksPerPeriod);
        }
        if (message.currentPeriodStartBlock !== BigInt(0)) {
            writer.uint32(16).uint64(message.currentPeriodStartBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockBasedPaymentSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blocksPerPeriod = reader.uint64();
                    break;
                case 2:
                    message.currentPeriodStartBlock = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseBlockBasedPaymentSchedule();
        if ((0, helpers_js_1.isSet)(object.blocksPerPeriod))
            obj.blocksPerPeriod = BigInt(object.blocksPerPeriod.toString());
        if ((0, helpers_js_1.isSet)(object.currentPeriodStartBlock))
            obj.currentPeriodStartBlock = BigInt(object.currentPeriodStartBlock.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.blocksPerPeriod !== undefined &&
            (obj.blocksPerPeriod = (message.blocksPerPeriod || BigInt(0)).toString());
        message.currentPeriodStartBlock !== undefined &&
            (obj.currentPeriodStartBlock = (message.currentPeriodStartBlock || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockBasedPaymentSchedule();
        if (object.blocksPerPeriod !== undefined && object.blocksPerPeriod !== null) {
            message.blocksPerPeriod = BigInt(object.blocksPerPeriod.toString());
        }
        if (object.currentPeriodStartBlock !== undefined && object.currentPeriodStartBlock !== null) {
            message.currentPeriodStartBlock = BigInt(object.currentPeriodStartBlock.toString());
        }
        return message;
    },
};
function createBaseEmptyPaymentSchedule() {
    return {};
}
exports.EmptyPaymentSchedule = {
    typeUrl: "/neutron.revenue.EmptyPaymentSchedule",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmptyPaymentSchedule();
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
        const obj = createBaseEmptyPaymentSchedule();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseEmptyPaymentSchedule();
        return message;
    },
};
function createBaseRewardAssetPrice() {
    return {
        cumulativePrice: "",
        absolutePrice: "",
        timestamp: BigInt(0),
    };
}
exports.RewardAssetPrice = {
    typeUrl: "/neutron.revenue.RewardAssetPrice",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.cumulativePrice !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.cumulativePrice, 18).atomics);
        }
        if (message.absolutePrice !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.absolutePrice, 18).atomics);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(24).int64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRewardAssetPrice();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulativePrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.absolutePrice = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRewardAssetPrice();
        if ((0, helpers_js_1.isSet)(object.cumulativePrice))
            obj.cumulativePrice = String(object.cumulativePrice);
        if ((0, helpers_js_1.isSet)(object.absolutePrice))
            obj.absolutePrice = String(object.absolutePrice);
        if ((0, helpers_js_1.isSet)(object.timestamp))
            obj.timestamp = BigInt(object.timestamp.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.cumulativePrice !== undefined && (obj.cumulativePrice = message.cumulativePrice);
        message.absolutePrice !== undefined && (obj.absolutePrice = message.absolutePrice);
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRewardAssetPrice();
        message.cumulativePrice = object.cumulativePrice ?? "";
        message.absolutePrice = object.absolutePrice ?? "";
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp.toString());
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map