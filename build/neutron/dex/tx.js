"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgMultiHopSwapResponse = exports.MsgMultiHopSwap = exports.MultiHopRoute = exports.MsgCancelLimitOrderResponse = exports.MsgCancelLimitOrder = exports.MsgWithdrawFilledLimitOrderResponse = exports.MsgWithdrawFilledLimitOrder = exports.MsgPlaceLimitOrderResponse = exports.MsgPlaceLimitOrder = exports.MsgWithdrawalResponse = exports.MsgWithdrawalWithShares = exports.MsgWithdrawal = exports.MsgDepositResponse = exports.FailedDeposit = exports.MsgDeposit = exports.DepositOptions = exports.LimitOrderType = exports.protobufPackage = void 0;
exports.limitOrderTypeFromJSON = limitOrderTypeFromJSON;
exports.limitOrderTypeToJSON = limitOrderTypeToJSON;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../cosmos/base/v1beta1/coin.js");
const timestamp_js_1 = require("../../google/protobuf/timestamp.js");
const params_js_1 = require("./params.js");
const precdec_coin_js_1 = require("./precdec_coin.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
var LimitOrderType;
(function (LimitOrderType) {
    LimitOrderType[LimitOrderType["GOOD_TIL_CANCELLED"] = 0] = "GOOD_TIL_CANCELLED";
    LimitOrderType[LimitOrderType["FILL_OR_KILL"] = 1] = "FILL_OR_KILL";
    LimitOrderType[LimitOrderType["IMMEDIATE_OR_CANCEL"] = 2] = "IMMEDIATE_OR_CANCEL";
    LimitOrderType[LimitOrderType["JUST_IN_TIME"] = 3] = "JUST_IN_TIME";
    LimitOrderType[LimitOrderType["GOOD_TIL_TIME"] = 4] = "GOOD_TIL_TIME";
    LimitOrderType[LimitOrderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LimitOrderType || (exports.LimitOrderType = LimitOrderType = {}));
function limitOrderTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "GOOD_TIL_CANCELLED":
            return LimitOrderType.GOOD_TIL_CANCELLED;
        case 1:
        case "FILL_OR_KILL":
            return LimitOrderType.FILL_OR_KILL;
        case 2:
        case "IMMEDIATE_OR_CANCEL":
            return LimitOrderType.IMMEDIATE_OR_CANCEL;
        case 3:
        case "JUST_IN_TIME":
            return LimitOrderType.JUST_IN_TIME;
        case 4:
        case "GOOD_TIL_TIME":
            return LimitOrderType.GOOD_TIL_TIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LimitOrderType.UNRECOGNIZED;
    }
}
function limitOrderTypeToJSON(object) {
    switch (object) {
        case LimitOrderType.GOOD_TIL_CANCELLED:
            return "GOOD_TIL_CANCELLED";
        case LimitOrderType.FILL_OR_KILL:
            return "FILL_OR_KILL";
        case LimitOrderType.IMMEDIATE_OR_CANCEL:
            return "IMMEDIATE_OR_CANCEL";
        case LimitOrderType.JUST_IN_TIME:
            return "JUST_IN_TIME";
        case LimitOrderType.GOOD_TIL_TIME:
            return "GOOD_TIL_TIME";
        case LimitOrderType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseDepositOptions() {
    return {
        disableAutoswap: false,
        failTxOnBel: false,
        swapOnDeposit: false,
        swapOnDepositSlopToleranceBps: BigInt(0),
    };
}
exports.DepositOptions = {
    typeUrl: "/neutron.dex.DepositOptions",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.disableAutoswap === true) {
            writer.uint32(8).bool(message.disableAutoswap);
        }
        if (message.failTxOnBel === true) {
            writer.uint32(16).bool(message.failTxOnBel);
        }
        if (message.swapOnDeposit === true) {
            writer.uint32(24).bool(message.swapOnDeposit);
        }
        if (message.swapOnDepositSlopToleranceBps !== BigInt(0)) {
            writer.uint32(32).uint64(message.swapOnDepositSlopToleranceBps);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disableAutoswap = reader.bool();
                    break;
                case 2:
                    message.failTxOnBel = reader.bool();
                    break;
                case 3:
                    message.swapOnDeposit = reader.bool();
                    break;
                case 4:
                    message.swapOnDepositSlopToleranceBps = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDepositOptions();
        if ((0, helpers_js_1.isSet)(object.disableAutoswap))
            obj.disableAutoswap = Boolean(object.disableAutoswap);
        if ((0, helpers_js_1.isSet)(object.failTxOnBel))
            obj.failTxOnBel = Boolean(object.failTxOnBel);
        if ((0, helpers_js_1.isSet)(object.swapOnDeposit))
            obj.swapOnDeposit = Boolean(object.swapOnDeposit);
        if ((0, helpers_js_1.isSet)(object.swapOnDepositSlopToleranceBps))
            obj.swapOnDepositSlopToleranceBps = BigInt(object.swapOnDepositSlopToleranceBps.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.disableAutoswap !== undefined && (obj.disableAutoswap = message.disableAutoswap);
        message.failTxOnBel !== undefined && (obj.failTxOnBel = message.failTxOnBel);
        message.swapOnDeposit !== undefined && (obj.swapOnDeposit = message.swapOnDeposit);
        message.swapOnDepositSlopToleranceBps !== undefined &&
            (obj.swapOnDepositSlopToleranceBps = (message.swapOnDepositSlopToleranceBps || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDepositOptions();
        message.disableAutoswap = object.disableAutoswap ?? false;
        message.failTxOnBel = object.failTxOnBel ?? false;
        message.swapOnDeposit = object.swapOnDeposit ?? false;
        if (object.swapOnDepositSlopToleranceBps !== undefined && object.swapOnDepositSlopToleranceBps !== null) {
            message.swapOnDepositSlopToleranceBps = BigInt(object.swapOnDepositSlopToleranceBps.toString());
        }
        return message;
    },
};
function createBaseMsgDeposit() {
    return {
        creator: "",
        receiver: "",
        tokenA: "",
        tokenB: "",
        amountsA: [],
        amountsB: [],
        tickIndexesAToB: [],
        fees: [],
        options: [],
    };
}
exports.MsgDeposit = {
    typeUrl: "/neutron.dex.MsgDeposit",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.tokenA !== "") {
            writer.uint32(26).string(message.tokenA);
        }
        if (message.tokenB !== "") {
            writer.uint32(34).string(message.tokenB);
        }
        for (const v of message.amountsA) {
            writer.uint32(42).string(v);
        }
        for (const v of message.amountsB) {
            writer.uint32(50).string(v);
        }
        writer.uint32(58).fork();
        for (const v of message.tickIndexesAToB) {
            writer.int64(v);
        }
        writer.ldelim();
        writer.uint32(66).fork();
        for (const v of message.fees) {
            writer.uint64(v);
        }
        writer.ldelim();
        for (const v of message.options) {
            exports.DepositOptions.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.tokenA = reader.string();
                    break;
                case 4:
                    message.tokenB = reader.string();
                    break;
                case 5:
                    message.amountsA.push(reader.string());
                    break;
                case 6:
                    message.amountsB.push(reader.string());
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.tickIndexesAToB.push(reader.int64());
                        }
                    }
                    else {
                        message.tickIndexesAToB.push(reader.int64());
                    }
                    break;
                case 8:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.fees.push(reader.uint64());
                        }
                    }
                    else {
                        message.fees.push(reader.uint64());
                    }
                    break;
                case 9:
                    message.options.push(exports.DepositOptions.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgDeposit();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_js_1.isSet)(object.tokenA))
            obj.tokenA = String(object.tokenA);
        if ((0, helpers_js_1.isSet)(object.tokenB))
            obj.tokenB = String(object.tokenB);
        if (Array.isArray(object?.amountsA))
            obj.amountsA = object.amountsA.map((e) => String(e));
        if (Array.isArray(object?.amountsB))
            obj.amountsB = object.amountsB.map((e) => String(e));
        if (Array.isArray(object?.tickIndexesAToB))
            obj.tickIndexesAToB = object.tickIndexesAToB.map((e) => BigInt(e.toString()));
        if (Array.isArray(object?.fees))
            obj.fees = object.fees.map((e) => BigInt(e.toString()));
        if (Array.isArray(object?.options))
            obj.options = object.options.map((e) => exports.DepositOptions.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.tokenA !== undefined && (obj.tokenA = message.tokenA);
        message.tokenB !== undefined && (obj.tokenB = message.tokenB);
        if (message.amountsA) {
            obj.amountsA = message.amountsA.map((e) => e);
        }
        else {
            obj.amountsA = [];
        }
        if (message.amountsB) {
            obj.amountsB = message.amountsB.map((e) => e);
        }
        else {
            obj.amountsB = [];
        }
        if (message.tickIndexesAToB) {
            obj.tickIndexesAToB = message.tickIndexesAToB.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.tickIndexesAToB = [];
        }
        if (message.fees) {
            obj.fees = message.fees.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.fees = [];
        }
        if (message.options) {
            obj.options = message.options.map((e) => (e ? exports.DepositOptions.toJSON(e) : undefined));
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeposit();
        message.creator = object.creator ?? "";
        message.receiver = object.receiver ?? "";
        message.tokenA = object.tokenA ?? "";
        message.tokenB = object.tokenB ?? "";
        message.amountsA = object.amountsA?.map((e) => e) || [];
        message.amountsB = object.amountsB?.map((e) => e) || [];
        message.tickIndexesAToB = object.tickIndexesAToB?.map((e) => BigInt(e.toString())) || [];
        message.fees = object.fees?.map((e) => BigInt(e.toString())) || [];
        message.options = object.options?.map((e) => exports.DepositOptions.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFailedDeposit() {
    return {
        depositIdx: BigInt(0),
        error: "",
    };
}
exports.FailedDeposit = {
    typeUrl: "/neutron.dex.FailedDeposit",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.depositIdx !== BigInt(0)) {
            writer.uint32(8).uint64(message.depositIdx);
        }
        if (message.error !== "") {
            writer.uint32(18).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFailedDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositIdx = reader.uint64();
                    break;
                case 2:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFailedDeposit();
        if ((0, helpers_js_1.isSet)(object.depositIdx))
            obj.depositIdx = BigInt(object.depositIdx.toString());
        if ((0, helpers_js_1.isSet)(object.error))
            obj.error = String(object.error);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.depositIdx !== undefined && (obj.depositIdx = (message.depositIdx || BigInt(0)).toString());
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFailedDeposit();
        if (object.depositIdx !== undefined && object.depositIdx !== null) {
            message.depositIdx = BigInt(object.depositIdx.toString());
        }
        message.error = object.error ?? "";
        return message;
    },
};
function createBaseMsgDepositResponse() {
    return {
        reserve0Deposited: [],
        reserve1Deposited: [],
        failedDeposits: [],
        sharesIssued: [],
        decReserve0Deposited: [],
        decReserve1Deposited: [],
    };
}
exports.MsgDepositResponse = {
    typeUrl: "/neutron.dex.MsgDepositResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.reserve0Deposited) {
            writer.uint32(10).string(v);
        }
        for (const v of message.reserve1Deposited) {
            writer.uint32(18).string(v);
        }
        for (const v of message.failedDeposits) {
            exports.FailedDeposit.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sharesIssued) {
            coin_js_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.decReserve0Deposited) {
            writer.uint32(42).string(v);
        }
        for (const v of message.decReserve1Deposited) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reserve0Deposited.push(reader.string());
                    break;
                case 2:
                    message.reserve1Deposited.push(reader.string());
                    break;
                case 3:
                    message.failedDeposits.push(exports.FailedDeposit.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sharesIssued.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.decReserve0Deposited.push(reader.string());
                    break;
                case 6:
                    message.decReserve1Deposited.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgDepositResponse();
        if (Array.isArray(object?.reserve0Deposited))
            obj.reserve0Deposited = object.reserve0Deposited.map((e) => String(e));
        if (Array.isArray(object?.reserve1Deposited))
            obj.reserve1Deposited = object.reserve1Deposited.map((e) => String(e));
        if (Array.isArray(object?.failedDeposits))
            obj.failedDeposits = object.failedDeposits.map((e) => exports.FailedDeposit.fromJSON(e));
        if (Array.isArray(object?.sharesIssued))
            obj.sharesIssued = object.sharesIssued.map((e) => coin_js_1.Coin.fromJSON(e));
        if (Array.isArray(object?.decReserve0Deposited))
            obj.decReserve0Deposited = object.decReserve0Deposited.map((e) => String(e));
        if (Array.isArray(object?.decReserve1Deposited))
            obj.decReserve1Deposited = object.decReserve1Deposited.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.reserve0Deposited) {
            obj.reserve0Deposited = message.reserve0Deposited.map((e) => e);
        }
        else {
            obj.reserve0Deposited = [];
        }
        if (message.reserve1Deposited) {
            obj.reserve1Deposited = message.reserve1Deposited.map((e) => e);
        }
        else {
            obj.reserve1Deposited = [];
        }
        if (message.failedDeposits) {
            obj.failedDeposits = message.failedDeposits.map((e) => (e ? exports.FailedDeposit.toJSON(e) : undefined));
        }
        else {
            obj.failedDeposits = [];
        }
        if (message.sharesIssued) {
            obj.sharesIssued = message.sharesIssued.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.sharesIssued = [];
        }
        if (message.decReserve0Deposited) {
            obj.decReserve0Deposited = message.decReserve0Deposited.map((e) => e);
        }
        else {
            obj.decReserve0Deposited = [];
        }
        if (message.decReserve1Deposited) {
            obj.decReserve1Deposited = message.decReserve1Deposited.map((e) => e);
        }
        else {
            obj.decReserve1Deposited = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositResponse();
        message.reserve0Deposited = object.reserve0Deposited?.map((e) => e) || [];
        message.reserve1Deposited = object.reserve1Deposited?.map((e) => e) || [];
        message.failedDeposits = object.failedDeposits?.map((e) => exports.FailedDeposit.fromPartial(e)) || [];
        message.sharesIssued = object.sharesIssued?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        message.decReserve0Deposited = object.decReserve0Deposited?.map((e) => e) || [];
        message.decReserve1Deposited = object.decReserve1Deposited?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgWithdrawal() {
    return {
        creator: "",
        receiver: "",
        tokenA: "",
        tokenB: "",
        sharesToRemove: [],
        tickIndexesAToB: [],
        fees: [],
    };
}
exports.MsgWithdrawal = {
    typeUrl: "/neutron.dex.MsgWithdrawal",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.tokenA !== "") {
            writer.uint32(26).string(message.tokenA);
        }
        if (message.tokenB !== "") {
            writer.uint32(34).string(message.tokenB);
        }
        for (const v of message.sharesToRemove) {
            writer.uint32(42).string(v);
        }
        writer.uint32(50).fork();
        for (const v of message.tickIndexesAToB) {
            writer.int64(v);
        }
        writer.ldelim();
        writer.uint32(58).fork();
        for (const v of message.fees) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.tokenA = reader.string();
                    break;
                case 4:
                    message.tokenB = reader.string();
                    break;
                case 5:
                    message.sharesToRemove.push(reader.string());
                    break;
                case 6:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.tickIndexesAToB.push(reader.int64());
                        }
                    }
                    else {
                        message.tickIndexesAToB.push(reader.int64());
                    }
                    break;
                case 7:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.fees.push(reader.uint64());
                        }
                    }
                    else {
                        message.fees.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgWithdrawal();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_js_1.isSet)(object.tokenA))
            obj.tokenA = String(object.tokenA);
        if ((0, helpers_js_1.isSet)(object.tokenB))
            obj.tokenB = String(object.tokenB);
        if (Array.isArray(object?.sharesToRemove))
            obj.sharesToRemove = object.sharesToRemove.map((e) => String(e));
        if (Array.isArray(object?.tickIndexesAToB))
            obj.tickIndexesAToB = object.tickIndexesAToB.map((e) => BigInt(e.toString()));
        if (Array.isArray(object?.fees))
            obj.fees = object.fees.map((e) => BigInt(e.toString()));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.tokenA !== undefined && (obj.tokenA = message.tokenA);
        message.tokenB !== undefined && (obj.tokenB = message.tokenB);
        if (message.sharesToRemove) {
            obj.sharesToRemove = message.sharesToRemove.map((e) => e);
        }
        else {
            obj.sharesToRemove = [];
        }
        if (message.tickIndexesAToB) {
            obj.tickIndexesAToB = message.tickIndexesAToB.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.tickIndexesAToB = [];
        }
        if (message.fees) {
            obj.fees = message.fees.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.fees = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawal();
        message.creator = object.creator ?? "";
        message.receiver = object.receiver ?? "";
        message.tokenA = object.tokenA ?? "";
        message.tokenB = object.tokenB ?? "";
        message.sharesToRemove = object.sharesToRemove?.map((e) => e) || [];
        message.tickIndexesAToB = object.tickIndexesAToB?.map((e) => BigInt(e.toString())) || [];
        message.fees = object.fees?.map((e) => BigInt(e.toString())) || [];
        return message;
    },
};
function createBaseMsgWithdrawalWithShares() {
    return {
        creator: "",
        receiver: "",
        sharesToRemove: [],
    };
}
exports.MsgWithdrawalWithShares = {
    typeUrl: "/neutron.dex.MsgWithdrawalWithShares",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        for (const v of message.sharesToRemove) {
            coin_js_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawalWithShares();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.sharesToRemove.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgWithdrawalWithShares();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if (Array.isArray(object?.sharesToRemove))
            obj.sharesToRemove = object.sharesToRemove.map((e) => coin_js_1.Coin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        if (message.sharesToRemove) {
            obj.sharesToRemove = message.sharesToRemove.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.sharesToRemove = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawalWithShares();
        message.creator = object.creator ?? "";
        message.receiver = object.receiver ?? "";
        message.sharesToRemove = object.sharesToRemove?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgWithdrawalResponse() {
    return {
        reserve0Withdrawn: "",
        reserve1Withdrawn: "",
        sharesBurned: [],
        decReserve0Withdrawn: "",
        decReserve1Withdrawn: "",
    };
}
exports.MsgWithdrawalResponse = {
    typeUrl: "/neutron.dex.MsgWithdrawalResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.reserve0Withdrawn !== "") {
            writer.uint32(10).string(message.reserve0Withdrawn);
        }
        if (message.reserve1Withdrawn !== "") {
            writer.uint32(18).string(message.reserve1Withdrawn);
        }
        for (const v of message.sharesBurned) {
            coin_js_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.decReserve0Withdrawn !== "") {
            writer.uint32(34).string(message.decReserve0Withdrawn);
        }
        if (message.decReserve1Withdrawn !== "") {
            writer.uint32(42).string(message.decReserve1Withdrawn);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reserve0Withdrawn = reader.string();
                    break;
                case 2:
                    message.reserve1Withdrawn = reader.string();
                    break;
                case 3:
                    message.sharesBurned.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.decReserve0Withdrawn = reader.string();
                    break;
                case 5:
                    message.decReserve1Withdrawn = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgWithdrawalResponse();
        if ((0, helpers_js_1.isSet)(object.reserve0Withdrawn))
            obj.reserve0Withdrawn = String(object.reserve0Withdrawn);
        if ((0, helpers_js_1.isSet)(object.reserve1Withdrawn))
            obj.reserve1Withdrawn = String(object.reserve1Withdrawn);
        if (Array.isArray(object?.sharesBurned))
            obj.sharesBurned = object.sharesBurned.map((e) => coin_js_1.Coin.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.decReserve0Withdrawn))
            obj.decReserve0Withdrawn = String(object.decReserve0Withdrawn);
        if ((0, helpers_js_1.isSet)(object.decReserve1Withdrawn))
            obj.decReserve1Withdrawn = String(object.decReserve1Withdrawn);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.reserve0Withdrawn !== undefined && (obj.reserve0Withdrawn = message.reserve0Withdrawn);
        message.reserve1Withdrawn !== undefined && (obj.reserve1Withdrawn = message.reserve1Withdrawn);
        if (message.sharesBurned) {
            obj.sharesBurned = message.sharesBurned.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.sharesBurned = [];
        }
        message.decReserve0Withdrawn !== undefined && (obj.decReserve0Withdrawn = message.decReserve0Withdrawn);
        message.decReserve1Withdrawn !== undefined && (obj.decReserve1Withdrawn = message.decReserve1Withdrawn);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawalResponse();
        message.reserve0Withdrawn = object.reserve0Withdrawn ?? "";
        message.reserve1Withdrawn = object.reserve1Withdrawn ?? "";
        message.sharesBurned = object.sharesBurned?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        message.decReserve0Withdrawn = object.decReserve0Withdrawn ?? "";
        message.decReserve1Withdrawn = object.decReserve1Withdrawn ?? "";
        return message;
    },
};
function createBaseMsgPlaceLimitOrder() {
    return {
        creator: "",
        receiver: "",
        tokenIn: "",
        tokenOut: "",
        tickIndexInToOut: BigInt(0),
        amountIn: "",
        orderType: 0,
        expirationTime: undefined,
        maxAmountOut: undefined,
        limitSellPrice: undefined,
        minAverageSellPrice: undefined,
    };
}
exports.MsgPlaceLimitOrder = {
    typeUrl: "/neutron.dex.MsgPlaceLimitOrder",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        if (message.tokenIn !== "") {
            writer.uint32(26).string(message.tokenIn);
        }
        if (message.tokenOut !== "") {
            writer.uint32(34).string(message.tokenOut);
        }
        if (message.tickIndexInToOut !== BigInt(0)) {
            writer.uint32(40).int64(message.tickIndexInToOut);
        }
        if (message.amountIn !== "") {
            writer.uint32(58).string(message.amountIn);
        }
        if (message.orderType !== 0) {
            writer.uint32(64).int32(message.orderType);
        }
        if (message.expirationTime !== undefined) {
            timestamp_js_1.Timestamp.encode(message.expirationTime, writer.uint32(74).fork()).ldelim();
        }
        if (message.maxAmountOut !== undefined) {
            writer.uint32(82).string(message.maxAmountOut);
        }
        if (message.limitSellPrice !== undefined) {
            writer.uint32(90).string(message.limitSellPrice);
        }
        if (message.minAverageSellPrice !== undefined) {
            writer.uint32(98).string(message.minAverageSellPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.tokenIn = reader.string();
                    break;
                case 4:
                    message.tokenOut = reader.string();
                    break;
                case 5:
                    message.tickIndexInToOut = reader.int64();
                    break;
                case 7:
                    message.amountIn = reader.string();
                    break;
                case 8:
                    message.orderType = reader.int32();
                    break;
                case 9:
                    message.expirationTime = timestamp_js_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.maxAmountOut = reader.string();
                    break;
                case 11:
                    message.limitSellPrice = reader.string();
                    break;
                case 12:
                    message.minAverageSellPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgPlaceLimitOrder();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if ((0, helpers_js_1.isSet)(object.tokenIn))
            obj.tokenIn = String(object.tokenIn);
        if ((0, helpers_js_1.isSet)(object.tokenOut))
            obj.tokenOut = String(object.tokenOut);
        if ((0, helpers_js_1.isSet)(object.tickIndexInToOut))
            obj.tickIndexInToOut = BigInt(object.tickIndexInToOut.toString());
        if ((0, helpers_js_1.isSet)(object.amountIn))
            obj.amountIn = String(object.amountIn);
        if ((0, helpers_js_1.isSet)(object.orderType))
            obj.orderType = limitOrderTypeFromJSON(object.orderType);
        if ((0, helpers_js_1.isSet)(object.expirationTime))
            obj.expirationTime = (0, helpers_js_1.fromJsonTimestamp)(object.expirationTime);
        if ((0, helpers_js_1.isSet)(object.maxAmountOut))
            obj.maxAmountOut = String(object.maxAmountOut);
        if ((0, helpers_js_1.isSet)(object.limitSellPrice))
            obj.limitSellPrice = String(object.limitSellPrice);
        if ((0, helpers_js_1.isSet)(object.minAverageSellPrice))
            obj.minAverageSellPrice = String(object.minAverageSellPrice);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.tokenIn !== undefined && (obj.tokenIn = message.tokenIn);
        message.tokenOut !== undefined && (obj.tokenOut = message.tokenOut);
        message.tickIndexInToOut !== undefined &&
            (obj.tickIndexInToOut = (message.tickIndexInToOut || BigInt(0)).toString());
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.orderType !== undefined && (obj.orderType = limitOrderTypeToJSON(message.orderType));
        message.expirationTime !== undefined &&
            (obj.expirationTime = (0, helpers_js_1.fromTimestamp)(message.expirationTime).toISOString());
        message.maxAmountOut !== undefined && (obj.maxAmountOut = message.maxAmountOut);
        message.limitSellPrice !== undefined && (obj.limitSellPrice = message.limitSellPrice);
        message.minAverageSellPrice !== undefined && (obj.minAverageSellPrice = message.minAverageSellPrice);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgPlaceLimitOrder();
        message.creator = object.creator ?? "";
        message.receiver = object.receiver ?? "";
        message.tokenIn = object.tokenIn ?? "";
        message.tokenOut = object.tokenOut ?? "";
        if (object.tickIndexInToOut !== undefined && object.tickIndexInToOut !== null) {
            message.tickIndexInToOut = BigInt(object.tickIndexInToOut.toString());
        }
        message.amountIn = object.amountIn ?? "";
        message.orderType = object.orderType ?? 0;
        if (object.expirationTime !== undefined && object.expirationTime !== null) {
            message.expirationTime = timestamp_js_1.Timestamp.fromPartial(object.expirationTime);
        }
        message.maxAmountOut = object.maxAmountOut ?? undefined;
        message.limitSellPrice = object.limitSellPrice ?? undefined;
        message.minAverageSellPrice = object.minAverageSellPrice ?? undefined;
        return message;
    },
};
function createBaseMsgPlaceLimitOrderResponse() {
    return {
        trancheKey: "",
        coinIn: coin_js_1.Coin.fromPartial({}),
        takerCoinOut: coin_js_1.Coin.fromPartial({}),
        takerCoinIn: coin_js_1.Coin.fromPartial({}),
        decTakerCoinOut: precdec_coin_js_1.PrecDecCoin.fromPartial({}),
        decTakerCoinIn: precdec_coin_js_1.PrecDecCoin.fromPartial({}),
    };
}
exports.MsgPlaceLimitOrderResponse = {
    typeUrl: "/neutron.dex.MsgPlaceLimitOrderResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.trancheKey !== "") {
            writer.uint32(10).string(message.trancheKey);
        }
        if (message.coinIn !== undefined) {
            coin_js_1.Coin.encode(message.coinIn, writer.uint32(18).fork()).ldelim();
        }
        if (message.takerCoinOut !== undefined) {
            coin_js_1.Coin.encode(message.takerCoinOut, writer.uint32(26).fork()).ldelim();
        }
        if (message.takerCoinIn !== undefined) {
            coin_js_1.Coin.encode(message.takerCoinIn, writer.uint32(34).fork()).ldelim();
        }
        if (message.decTakerCoinOut !== undefined) {
            precdec_coin_js_1.PrecDecCoin.encode(message.decTakerCoinOut, writer.uint32(42).fork()).ldelim();
        }
        if (message.decTakerCoinIn !== undefined) {
            precdec_coin_js_1.PrecDecCoin.encode(message.decTakerCoinIn, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPlaceLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trancheKey = reader.string();
                    break;
                case 2:
                    message.coinIn = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.takerCoinOut = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.takerCoinIn = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.decTakerCoinOut = precdec_coin_js_1.PrecDecCoin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.decTakerCoinIn = precdec_coin_js_1.PrecDecCoin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgPlaceLimitOrderResponse();
        if ((0, helpers_js_1.isSet)(object.trancheKey))
            obj.trancheKey = String(object.trancheKey);
        if ((0, helpers_js_1.isSet)(object.coinIn))
            obj.coinIn = coin_js_1.Coin.fromJSON(object.coinIn);
        if ((0, helpers_js_1.isSet)(object.takerCoinOut))
            obj.takerCoinOut = coin_js_1.Coin.fromJSON(object.takerCoinOut);
        if ((0, helpers_js_1.isSet)(object.takerCoinIn))
            obj.takerCoinIn = coin_js_1.Coin.fromJSON(object.takerCoinIn);
        if ((0, helpers_js_1.isSet)(object.decTakerCoinOut))
            obj.decTakerCoinOut = precdec_coin_js_1.PrecDecCoin.fromJSON(object.decTakerCoinOut);
        if ((0, helpers_js_1.isSet)(object.decTakerCoinIn))
            obj.decTakerCoinIn = precdec_coin_js_1.PrecDecCoin.fromJSON(object.decTakerCoinIn);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
        message.coinIn !== undefined && (obj.coinIn = message.coinIn ? coin_js_1.Coin.toJSON(message.coinIn) : undefined);
        message.takerCoinOut !== undefined &&
            (obj.takerCoinOut = message.takerCoinOut ? coin_js_1.Coin.toJSON(message.takerCoinOut) : undefined);
        message.takerCoinIn !== undefined &&
            (obj.takerCoinIn = message.takerCoinIn ? coin_js_1.Coin.toJSON(message.takerCoinIn) : undefined);
        message.decTakerCoinOut !== undefined &&
            (obj.decTakerCoinOut = message.decTakerCoinOut
                ? precdec_coin_js_1.PrecDecCoin.toJSON(message.decTakerCoinOut)
                : undefined);
        message.decTakerCoinIn !== undefined &&
            (obj.decTakerCoinIn = message.decTakerCoinIn ? precdec_coin_js_1.PrecDecCoin.toJSON(message.decTakerCoinIn) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgPlaceLimitOrderResponse();
        message.trancheKey = object.trancheKey ?? "";
        if (object.coinIn !== undefined && object.coinIn !== null) {
            message.coinIn = coin_js_1.Coin.fromPartial(object.coinIn);
        }
        if (object.takerCoinOut !== undefined && object.takerCoinOut !== null) {
            message.takerCoinOut = coin_js_1.Coin.fromPartial(object.takerCoinOut);
        }
        if (object.takerCoinIn !== undefined && object.takerCoinIn !== null) {
            message.takerCoinIn = coin_js_1.Coin.fromPartial(object.takerCoinIn);
        }
        if (object.decTakerCoinOut !== undefined && object.decTakerCoinOut !== null) {
            message.decTakerCoinOut = precdec_coin_js_1.PrecDecCoin.fromPartial(object.decTakerCoinOut);
        }
        if (object.decTakerCoinIn !== undefined && object.decTakerCoinIn !== null) {
            message.decTakerCoinIn = precdec_coin_js_1.PrecDecCoin.fromPartial(object.decTakerCoinIn);
        }
        return message;
    },
};
function createBaseMsgWithdrawFilledLimitOrder() {
    return {
        creator: "",
        trancheKey: "",
    };
}
exports.MsgWithdrawFilledLimitOrder = {
    typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrder",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.trancheKey !== "") {
            writer.uint32(18).string(message.trancheKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawFilledLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.trancheKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgWithdrawFilledLimitOrder();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.trancheKey))
            obj.trancheKey = String(object.trancheKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawFilledLimitOrder();
        message.creator = object.creator ?? "";
        message.trancheKey = object.trancheKey ?? "";
        return message;
    },
};
function createBaseMsgWithdrawFilledLimitOrderResponse() {
    return {
        takerCoinOut: coin_js_1.Coin.fromPartial({}),
        makerCoinOut: coin_js_1.Coin.fromPartial({}),
        decTakerCoinOut: precdec_coin_js_1.PrecDecCoin.fromPartial({}),
        decMakerCoinOut: precdec_coin_js_1.PrecDecCoin.fromPartial({}),
    };
}
exports.MsgWithdrawFilledLimitOrderResponse = {
    typeUrl: "/neutron.dex.MsgWithdrawFilledLimitOrderResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.takerCoinOut !== undefined) {
            coin_js_1.Coin.encode(message.takerCoinOut, writer.uint32(10).fork()).ldelim();
        }
        if (message.makerCoinOut !== undefined) {
            coin_js_1.Coin.encode(message.makerCoinOut, writer.uint32(18).fork()).ldelim();
        }
        if (message.decTakerCoinOut !== undefined) {
            precdec_coin_js_1.PrecDecCoin.encode(message.decTakerCoinOut, writer.uint32(26).fork()).ldelim();
        }
        if (message.decMakerCoinOut !== undefined) {
            precdec_coin_js_1.PrecDecCoin.encode(message.decMakerCoinOut, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawFilledLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerCoinOut = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.makerCoinOut = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.decTakerCoinOut = precdec_coin_js_1.PrecDecCoin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.decMakerCoinOut = precdec_coin_js_1.PrecDecCoin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgWithdrawFilledLimitOrderResponse();
        if ((0, helpers_js_1.isSet)(object.takerCoinOut))
            obj.takerCoinOut = coin_js_1.Coin.fromJSON(object.takerCoinOut);
        if ((0, helpers_js_1.isSet)(object.makerCoinOut))
            obj.makerCoinOut = coin_js_1.Coin.fromJSON(object.makerCoinOut);
        if ((0, helpers_js_1.isSet)(object.decTakerCoinOut))
            obj.decTakerCoinOut = precdec_coin_js_1.PrecDecCoin.fromJSON(object.decTakerCoinOut);
        if ((0, helpers_js_1.isSet)(object.decMakerCoinOut))
            obj.decMakerCoinOut = precdec_coin_js_1.PrecDecCoin.fromJSON(object.decMakerCoinOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.takerCoinOut !== undefined &&
            (obj.takerCoinOut = message.takerCoinOut ? coin_js_1.Coin.toJSON(message.takerCoinOut) : undefined);
        message.makerCoinOut !== undefined &&
            (obj.makerCoinOut = message.makerCoinOut ? coin_js_1.Coin.toJSON(message.makerCoinOut) : undefined);
        message.decTakerCoinOut !== undefined &&
            (obj.decTakerCoinOut = message.decTakerCoinOut
                ? precdec_coin_js_1.PrecDecCoin.toJSON(message.decTakerCoinOut)
                : undefined);
        message.decMakerCoinOut !== undefined &&
            (obj.decMakerCoinOut = message.decMakerCoinOut
                ? precdec_coin_js_1.PrecDecCoin.toJSON(message.decMakerCoinOut)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawFilledLimitOrderResponse();
        if (object.takerCoinOut !== undefined && object.takerCoinOut !== null) {
            message.takerCoinOut = coin_js_1.Coin.fromPartial(object.takerCoinOut);
        }
        if (object.makerCoinOut !== undefined && object.makerCoinOut !== null) {
            message.makerCoinOut = coin_js_1.Coin.fromPartial(object.makerCoinOut);
        }
        if (object.decTakerCoinOut !== undefined && object.decTakerCoinOut !== null) {
            message.decTakerCoinOut = precdec_coin_js_1.PrecDecCoin.fromPartial(object.decTakerCoinOut);
        }
        if (object.decMakerCoinOut !== undefined && object.decMakerCoinOut !== null) {
            message.decMakerCoinOut = precdec_coin_js_1.PrecDecCoin.fromPartial(object.decMakerCoinOut);
        }
        return message;
    },
};
function createBaseMsgCancelLimitOrder() {
    return {
        creator: "",
        trancheKey: "",
    };
}
exports.MsgCancelLimitOrder = {
    typeUrl: "/neutron.dex.MsgCancelLimitOrder",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.trancheKey !== "") {
            writer.uint32(18).string(message.trancheKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelLimitOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.trancheKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCancelLimitOrder();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.trancheKey))
            obj.trancheKey = String(object.trancheKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelLimitOrder();
        message.creator = object.creator ?? "";
        message.trancheKey = object.trancheKey ?? "";
        return message;
    },
};
function createBaseMsgCancelLimitOrderResponse() {
    return {
        takerCoinOut: coin_js_1.Coin.fromPartial({}),
        makerCoinOut: coin_js_1.Coin.fromPartial({}),
        decTakerCoinOut: precdec_coin_js_1.PrecDecCoin.fromPartial({}),
        decMakerCoinOut: precdec_coin_js_1.PrecDecCoin.fromPartial({}),
    };
}
exports.MsgCancelLimitOrderResponse = {
    typeUrl: "/neutron.dex.MsgCancelLimitOrderResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.takerCoinOut !== undefined) {
            coin_js_1.Coin.encode(message.takerCoinOut, writer.uint32(10).fork()).ldelim();
        }
        if (message.makerCoinOut !== undefined) {
            coin_js_1.Coin.encode(message.makerCoinOut, writer.uint32(18).fork()).ldelim();
        }
        if (message.decTakerCoinOut !== undefined) {
            precdec_coin_js_1.PrecDecCoin.encode(message.decTakerCoinOut, writer.uint32(26).fork()).ldelim();
        }
        if (message.decMakerCoinOut !== undefined) {
            precdec_coin_js_1.PrecDecCoin.encode(message.decMakerCoinOut, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelLimitOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.takerCoinOut = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.makerCoinOut = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.decTakerCoinOut = precdec_coin_js_1.PrecDecCoin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.decMakerCoinOut = precdec_coin_js_1.PrecDecCoin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgCancelLimitOrderResponse();
        if ((0, helpers_js_1.isSet)(object.takerCoinOut))
            obj.takerCoinOut = coin_js_1.Coin.fromJSON(object.takerCoinOut);
        if ((0, helpers_js_1.isSet)(object.makerCoinOut))
            obj.makerCoinOut = coin_js_1.Coin.fromJSON(object.makerCoinOut);
        if ((0, helpers_js_1.isSet)(object.decTakerCoinOut))
            obj.decTakerCoinOut = precdec_coin_js_1.PrecDecCoin.fromJSON(object.decTakerCoinOut);
        if ((0, helpers_js_1.isSet)(object.decMakerCoinOut))
            obj.decMakerCoinOut = precdec_coin_js_1.PrecDecCoin.fromJSON(object.decMakerCoinOut);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.takerCoinOut !== undefined &&
            (obj.takerCoinOut = message.takerCoinOut ? coin_js_1.Coin.toJSON(message.takerCoinOut) : undefined);
        message.makerCoinOut !== undefined &&
            (obj.makerCoinOut = message.makerCoinOut ? coin_js_1.Coin.toJSON(message.makerCoinOut) : undefined);
        message.decTakerCoinOut !== undefined &&
            (obj.decTakerCoinOut = message.decTakerCoinOut
                ? precdec_coin_js_1.PrecDecCoin.toJSON(message.decTakerCoinOut)
                : undefined);
        message.decMakerCoinOut !== undefined &&
            (obj.decMakerCoinOut = message.decMakerCoinOut
                ? precdec_coin_js_1.PrecDecCoin.toJSON(message.decMakerCoinOut)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelLimitOrderResponse();
        if (object.takerCoinOut !== undefined && object.takerCoinOut !== null) {
            message.takerCoinOut = coin_js_1.Coin.fromPartial(object.takerCoinOut);
        }
        if (object.makerCoinOut !== undefined && object.makerCoinOut !== null) {
            message.makerCoinOut = coin_js_1.Coin.fromPartial(object.makerCoinOut);
        }
        if (object.decTakerCoinOut !== undefined && object.decTakerCoinOut !== null) {
            message.decTakerCoinOut = precdec_coin_js_1.PrecDecCoin.fromPartial(object.decTakerCoinOut);
        }
        if (object.decMakerCoinOut !== undefined && object.decMakerCoinOut !== null) {
            message.decMakerCoinOut = precdec_coin_js_1.PrecDecCoin.fromPartial(object.decMakerCoinOut);
        }
        return message;
    },
};
function createBaseMultiHopRoute() {
    return {
        hops: [],
    };
}
exports.MultiHopRoute = {
    typeUrl: "/neutron.dex.MultiHopRoute",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.hops) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiHopRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hops.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMultiHopRoute();
        if (Array.isArray(object?.hops))
            obj.hops = object.hops.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.hops) {
            obj.hops = message.hops.map((e) => e);
        }
        else {
            obj.hops = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMultiHopRoute();
        message.hops = object.hops?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgMultiHopSwap() {
    return {
        creator: "",
        receiver: "",
        routes: [],
        amountIn: "",
        exitLimitPrice: "",
        pickBestRoute: false,
    };
}
exports.MsgMultiHopSwap = {
    typeUrl: "/neutron.dex.MsgMultiHopSwap",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        for (const v of message.routes) {
            exports.MultiHopRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.amountIn !== "") {
            writer.uint32(34).string(message.amountIn);
        }
        if (message.exitLimitPrice !== "") {
            writer.uint32(42).string(message.exitLimitPrice);
        }
        if (message.pickBestRoute === true) {
            writer.uint32(48).bool(message.pickBestRoute);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiHopSwap();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                case 3:
                    message.routes.push(exports.MultiHopRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.amountIn = reader.string();
                    break;
                case 5:
                    message.exitLimitPrice = reader.string();
                    break;
                case 6:
                    message.pickBestRoute = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgMultiHopSwap();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.receiver))
            obj.receiver = String(object.receiver);
        if (Array.isArray(object?.routes))
            obj.routes = object.routes.map((e) => exports.MultiHopRoute.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.amountIn))
            obj.amountIn = String(object.amountIn);
        if ((0, helpers_js_1.isSet)(object.exitLimitPrice))
            obj.exitLimitPrice = String(object.exitLimitPrice);
        if ((0, helpers_js_1.isSet)(object.pickBestRoute))
            obj.pickBestRoute = Boolean(object.pickBestRoute);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        if (message.routes) {
            obj.routes = message.routes.map((e) => (e ? exports.MultiHopRoute.toJSON(e) : undefined));
        }
        else {
            obj.routes = [];
        }
        message.amountIn !== undefined && (obj.amountIn = message.amountIn);
        message.exitLimitPrice !== undefined && (obj.exitLimitPrice = message.exitLimitPrice);
        message.pickBestRoute !== undefined && (obj.pickBestRoute = message.pickBestRoute);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMultiHopSwap();
        message.creator = object.creator ?? "";
        message.receiver = object.receiver ?? "";
        message.routes = object.routes?.map((e) => exports.MultiHopRoute.fromPartial(e)) || [];
        message.amountIn = object.amountIn ?? "";
        message.exitLimitPrice = object.exitLimitPrice ?? "";
        message.pickBestRoute = object.pickBestRoute ?? false;
        return message;
    },
};
function createBaseMsgMultiHopSwapResponse() {
    return {
        coinOut: coin_js_1.Coin.fromPartial({}),
        route: undefined,
        dust: [],
        decCoinOut: precdec_coin_js_1.PrecDecCoin.fromPartial({}),
        decDust: [],
    };
}
exports.MsgMultiHopSwapResponse = {
    typeUrl: "/neutron.dex.MsgMultiHopSwapResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.coinOut !== undefined) {
            coin_js_1.Coin.encode(message.coinOut, writer.uint32(10).fork()).ldelim();
        }
        if (message.route !== undefined) {
            exports.MultiHopRoute.encode(message.route, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.dust) {
            coin_js_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.decCoinOut !== undefined) {
            precdec_coin_js_1.PrecDecCoin.encode(message.decCoinOut, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.decDust) {
            precdec_coin_js_1.PrecDecCoin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiHopSwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.coinOut = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.route = exports.MultiHopRoute.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.dust.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.decCoinOut = precdec_coin_js_1.PrecDecCoin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.decDust.push(precdec_coin_js_1.PrecDecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgMultiHopSwapResponse();
        if ((0, helpers_js_1.isSet)(object.coinOut))
            obj.coinOut = coin_js_1.Coin.fromJSON(object.coinOut);
        if ((0, helpers_js_1.isSet)(object.route))
            obj.route = exports.MultiHopRoute.fromJSON(object.route);
        if (Array.isArray(object?.dust))
            obj.dust = object.dust.map((e) => coin_js_1.Coin.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.decCoinOut))
            obj.decCoinOut = precdec_coin_js_1.PrecDecCoin.fromJSON(object.decCoinOut);
        if (Array.isArray(object?.decDust))
            obj.decDust = object.decDust.map((e) => precdec_coin_js_1.PrecDecCoin.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.coinOut !== undefined &&
            (obj.coinOut = message.coinOut ? coin_js_1.Coin.toJSON(message.coinOut) : undefined);
        message.route !== undefined &&
            (obj.route = message.route ? exports.MultiHopRoute.toJSON(message.route) : undefined);
        if (message.dust) {
            obj.dust = message.dust.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.dust = [];
        }
        message.decCoinOut !== undefined &&
            (obj.decCoinOut = message.decCoinOut ? precdec_coin_js_1.PrecDecCoin.toJSON(message.decCoinOut) : undefined);
        if (message.decDust) {
            obj.decDust = message.decDust.map((e) => (e ? precdec_coin_js_1.PrecDecCoin.toJSON(e) : undefined));
        }
        else {
            obj.decDust = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMultiHopSwapResponse();
        if (object.coinOut !== undefined && object.coinOut !== null) {
            message.coinOut = coin_js_1.Coin.fromPartial(object.coinOut);
        }
        if (object.route !== undefined && object.route !== null) {
            message.route = exports.MultiHopRoute.fromPartial(object.route);
        }
        message.dust = object.dust?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        if (object.decCoinOut !== undefined && object.decCoinOut !== null) {
            message.decCoinOut = precdec_coin_js_1.PrecDecCoin.fromPartial(object.decCoinOut);
        }
        message.decDust = object.decDust?.map((e) => precdec_coin_js_1.PrecDecCoin.fromPartial(e)) || [];
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
    typeUrl: "/neutron.dex.MsgUpdateParams",
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
    typeUrl: "/neutron.dex.MsgUpdateParamsResponse",
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