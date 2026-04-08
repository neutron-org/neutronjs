"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorStats = exports.QueryValidatorsStatsResponse = exports.QueryValidatorsStatsRequest = exports.QueryValidatorStatsResponse = exports.QueryValidatorStatsRequest = exports.QueryPaymentInfoResponse = exports.QueryPaymentInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("./params.js");
const genesis_js_1 = require("./genesis.js");
const coin_js_1 = require("../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
const math_1 = require("@cosmjs/math");
exports.protobufPackage = "neutron.revenue";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/neutron.revenue.QueryParamsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const obj = createBaseQueryParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/neutron.revenue.QueryParamsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryParamsResponse();
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryPaymentInfoRequest() {
    return {};
}
exports.QueryPaymentInfoRequest = {
    typeUrl: "/neutron.revenue.QueryPaymentInfoRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPaymentInfoRequest();
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
        const obj = createBaseQueryPaymentInfoRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryPaymentInfoRequest();
        return message;
    },
};
function createBaseQueryPaymentInfoResponse() {
    return {
        paymentSchedule: genesis_js_1.PaymentSchedule.fromPartial({}),
        effectivePeriodProgress: "",
        rewardAssetTwap: "",
        baseRevenueAmount: coin_js_1.Coin.fromPartial({}),
    };
}
exports.QueryPaymentInfoResponse = {
    typeUrl: "/neutron.revenue.QueryPaymentInfoResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.paymentSchedule !== undefined) {
            genesis_js_1.PaymentSchedule.encode(message.paymentSchedule, writer.uint32(10).fork()).ldelim();
        }
        if (message.effectivePeriodProgress !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.effectivePeriodProgress, 18).atomics);
        }
        if (message.rewardAssetTwap !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.rewardAssetTwap, 18).atomics);
        }
        if (message.baseRevenueAmount !== undefined) {
            coin_js_1.Coin.encode(message.baseRevenueAmount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPaymentInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paymentSchedule = genesis_js_1.PaymentSchedule.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.effectivePeriodProgress = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.rewardAssetTwap = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.baseRevenueAmount = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryPaymentInfoResponse();
        if ((0, helpers_js_1.isSet)(object.paymentSchedule))
            obj.paymentSchedule = genesis_js_1.PaymentSchedule.fromJSON(object.paymentSchedule);
        if ((0, helpers_js_1.isSet)(object.effectivePeriodProgress))
            obj.effectivePeriodProgress = String(object.effectivePeriodProgress);
        if ((0, helpers_js_1.isSet)(object.rewardAssetTwap))
            obj.rewardAssetTwap = String(object.rewardAssetTwap);
        if ((0, helpers_js_1.isSet)(object.baseRevenueAmount))
            obj.baseRevenueAmount = coin_js_1.Coin.fromJSON(object.baseRevenueAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.paymentSchedule !== undefined &&
            (obj.paymentSchedule = message.paymentSchedule
                ? genesis_js_1.PaymentSchedule.toJSON(message.paymentSchedule)
                : undefined);
        message.effectivePeriodProgress !== undefined &&
            (obj.effectivePeriodProgress = message.effectivePeriodProgress);
        message.rewardAssetTwap !== undefined && (obj.rewardAssetTwap = message.rewardAssetTwap);
        message.baseRevenueAmount !== undefined &&
            (obj.baseRevenueAmount = message.baseRevenueAmount
                ? coin_js_1.Coin.toJSON(message.baseRevenueAmount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPaymentInfoResponse();
        if (object.paymentSchedule !== undefined && object.paymentSchedule !== null) {
            message.paymentSchedule = genesis_js_1.PaymentSchedule.fromPartial(object.paymentSchedule);
        }
        message.effectivePeriodProgress = object.effectivePeriodProgress ?? "";
        message.rewardAssetTwap = object.rewardAssetTwap ?? "";
        if (object.baseRevenueAmount !== undefined && object.baseRevenueAmount !== null) {
            message.baseRevenueAmount = coin_js_1.Coin.fromPartial(object.baseRevenueAmount);
        }
        return message;
    },
};
function createBaseQueryValidatorStatsRequest() {
    return {
        valOperAddress: "",
    };
}
exports.QueryValidatorStatsRequest = {
    typeUrl: "/neutron.revenue.QueryValidatorStatsRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.valOperAddress !== "") {
            writer.uint32(10).string(message.valOperAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorStatsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valOperAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryValidatorStatsRequest();
        if ((0, helpers_js_1.isSet)(object.valOperAddress))
            obj.valOperAddress = String(object.valOperAddress);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.valOperAddress !== undefined && (obj.valOperAddress = message.valOperAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorStatsRequest();
        message.valOperAddress = object.valOperAddress ?? "";
        return message;
    },
};
function createBaseQueryValidatorStatsResponse() {
    return {
        stats: exports.ValidatorStats.fromPartial({}),
    };
}
exports.QueryValidatorStatsResponse = {
    typeUrl: "/neutron.revenue.QueryValidatorStatsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.stats !== undefined) {
            exports.ValidatorStats.encode(message.stats, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stats = exports.ValidatorStats.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryValidatorStatsResponse();
        if ((0, helpers_js_1.isSet)(object.stats))
            obj.stats = exports.ValidatorStats.fromJSON(object.stats);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.stats !== undefined &&
            (obj.stats = message.stats ? exports.ValidatorStats.toJSON(message.stats) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorStatsResponse();
        if (object.stats !== undefined && object.stats !== null) {
            message.stats = exports.ValidatorStats.fromPartial(object.stats);
        }
        return message;
    },
};
function createBaseQueryValidatorsStatsRequest() {
    return {};
}
exports.QueryValidatorsStatsRequest = {
    typeUrl: "/neutron.revenue.QueryValidatorsStatsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsStatsRequest();
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
        const obj = createBaseQueryValidatorsStatsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryValidatorsStatsRequest();
        return message;
    },
};
function createBaseQueryValidatorsStatsResponse() {
    return {
        stats: [],
    };
}
exports.QueryValidatorsStatsResponse = {
    typeUrl: "/neutron.revenue.QueryValidatorsStatsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.stats) {
            exports.ValidatorStats.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsStatsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stats.push(exports.ValidatorStats.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryValidatorsStatsResponse();
        if (Array.isArray(object?.stats))
            obj.stats = object.stats.map((e) => exports.ValidatorStats.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.stats) {
            obj.stats = message.stats.map((e) => (e ? exports.ValidatorStats.toJSON(e) : undefined));
        }
        else {
            obj.stats = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorsStatsResponse();
        message.stats = object.stats?.map((e) => exports.ValidatorStats.fromPartial(e)) || [];
        return message;
    },
};
function createBaseValidatorStats() {
    return {
        validatorInfo: genesis_js_1.ValidatorInfo.fromPartial({}),
        totalProducedBlocksInPeriod: BigInt(0),
        performanceRating: "",
        expectedRevenue: coin_js_1.Coin.fromPartial({}),
    };
}
exports.ValidatorStats = {
    typeUrl: "/neutron.revenue.ValidatorStats",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.validatorInfo !== undefined) {
            genesis_js_1.ValidatorInfo.encode(message.validatorInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalProducedBlocksInPeriod !== BigInt(0)) {
            writer.uint32(16).uint64(message.totalProducedBlocksInPeriod);
        }
        if (message.performanceRating !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.performanceRating, 18).atomics);
        }
        if (message.expectedRevenue !== undefined) {
            coin_js_1.Coin.encode(message.expectedRevenue, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorStats();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorInfo = genesis_js_1.ValidatorInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.totalProducedBlocksInPeriod = reader.uint64();
                    break;
                case 3:
                    message.performanceRating = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.expectedRevenue = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseValidatorStats();
        if ((0, helpers_js_1.isSet)(object.validatorInfo))
            obj.validatorInfo = genesis_js_1.ValidatorInfo.fromJSON(object.validatorInfo);
        if ((0, helpers_js_1.isSet)(object.totalProducedBlocksInPeriod))
            obj.totalProducedBlocksInPeriod = BigInt(object.totalProducedBlocksInPeriod.toString());
        if ((0, helpers_js_1.isSet)(object.performanceRating))
            obj.performanceRating = String(object.performanceRating);
        if ((0, helpers_js_1.isSet)(object.expectedRevenue))
            obj.expectedRevenue = coin_js_1.Coin.fromJSON(object.expectedRevenue);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.validatorInfo !== undefined &&
            (obj.validatorInfo = message.validatorInfo ? genesis_js_1.ValidatorInfo.toJSON(message.validatorInfo) : undefined);
        message.totalProducedBlocksInPeriod !== undefined &&
            (obj.totalProducedBlocksInPeriod = (message.totalProducedBlocksInPeriod || BigInt(0)).toString());
        message.performanceRating !== undefined && (obj.performanceRating = message.performanceRating);
        message.expectedRevenue !== undefined &&
            (obj.expectedRevenue = message.expectedRevenue ? coin_js_1.Coin.toJSON(message.expectedRevenue) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorStats();
        if (object.validatorInfo !== undefined && object.validatorInfo !== null) {
            message.validatorInfo = genesis_js_1.ValidatorInfo.fromPartial(object.validatorInfo);
        }
        if (object.totalProducedBlocksInPeriod !== undefined && object.totalProducedBlocksInPeriod !== null) {
            message.totalProducedBlocksInPeriod = BigInt(object.totalProducedBlocksInPeriod.toString());
        }
        message.performanceRating = object.performanceRating ?? "";
        if (object.expectedRevenue !== undefined && object.expectedRevenue !== null) {
            message.expectedRevenue = coin_js_1.Coin.fromPartial(object.expectedRevenue);
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map