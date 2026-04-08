"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrderTranche = exports.LimitOrderTrancheKey = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const trade_pair_id_js_1 = require("./trade_pair_id.js");
const timestamp_js_1 = require("../../google/protobuf/timestamp.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBaseLimitOrderTrancheKey() {
    return {
        tradePairId: undefined,
        tickIndexTakerToMaker: BigInt(0),
        trancheKey: "",
    };
}
exports.LimitOrderTrancheKey = {
    typeUrl: "/neutron.dex.LimitOrderTrancheKey",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.tradePairId !== undefined) {
            trade_pair_id_js_1.TradePairID.encode(message.tradePairId, writer.uint32(10).fork()).ldelim();
        }
        if (message.tickIndexTakerToMaker !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndexTakerToMaker);
        }
        if (message.trancheKey !== "") {
            writer.uint32(26).string(message.trancheKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimitOrderTrancheKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tradePairId = trade_pair_id_js_1.TradePairID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tickIndexTakerToMaker = reader.int64();
                    break;
                case 3:
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
        const obj = createBaseLimitOrderTrancheKey();
        if ((0, helpers_js_1.isSet)(object.tradePairId))
            obj.tradePairId = trade_pair_id_js_1.TradePairID.fromJSON(object.tradePairId);
        if ((0, helpers_js_1.isSet)(object.tickIndexTakerToMaker))
            obj.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
        if ((0, helpers_js_1.isSet)(object.trancheKey))
            obj.trancheKey = String(object.trancheKey);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tradePairId !== undefined &&
            (obj.tradePairId = message.tradePairId ? trade_pair_id_js_1.TradePairID.toJSON(message.tradePairId) : undefined);
        message.tickIndexTakerToMaker !== undefined &&
            (obj.tickIndexTakerToMaker = (message.tickIndexTakerToMaker || BigInt(0)).toString());
        message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLimitOrderTrancheKey();
        if (object.tradePairId !== undefined && object.tradePairId !== null) {
            message.tradePairId = trade_pair_id_js_1.TradePairID.fromPartial(object.tradePairId);
        }
        if (object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null) {
            message.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
        }
        message.trancheKey = object.trancheKey ?? "";
        return message;
    },
};
function createBaseLimitOrderTranche() {
    return {
        key: undefined,
        reservesMakerDenom: "",
        reservesTakerDenom: "",
        totalMakerDenom: "",
        totalTakerDenom: "",
        expirationTime: undefined,
        priceTakerToMaker: "",
        makerPrice: "",
        decReservesMakerDenom: "",
        decReservesTakerDenom: "",
        decTotalTakerDenom: "",
    };
}
exports.LimitOrderTranche = {
    typeUrl: "/neutron.dex.LimitOrderTranche",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key !== undefined) {
            exports.LimitOrderTrancheKey.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        if (message.reservesMakerDenom !== "") {
            writer.uint32(18).string(message.reservesMakerDenom);
        }
        if (message.reservesTakerDenom !== "") {
            writer.uint32(26).string(message.reservesTakerDenom);
        }
        if (message.totalMakerDenom !== "") {
            writer.uint32(34).string(message.totalMakerDenom);
        }
        if (message.totalTakerDenom !== "") {
            writer.uint32(42).string(message.totalTakerDenom);
        }
        if (message.expirationTime !== undefined) {
            timestamp_js_1.Timestamp.encode(message.expirationTime, writer.uint32(50).fork()).ldelim();
        }
        if (message.priceTakerToMaker !== "") {
            writer.uint32(58).string(message.priceTakerToMaker);
        }
        if (message.makerPrice !== "") {
            writer.uint32(66).string(message.makerPrice);
        }
        if (message.decReservesMakerDenom !== "") {
            writer.uint32(74).string(message.decReservesMakerDenom);
        }
        if (message.decReservesTakerDenom !== "") {
            writer.uint32(82).string(message.decReservesTakerDenom);
        }
        if (message.decTotalTakerDenom !== "") {
            writer.uint32(90).string(message.decTotalTakerDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimitOrderTranche();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = exports.LimitOrderTrancheKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.reservesMakerDenom = reader.string();
                    break;
                case 3:
                    message.reservesTakerDenom = reader.string();
                    break;
                case 4:
                    message.totalMakerDenom = reader.string();
                    break;
                case 5:
                    message.totalTakerDenom = reader.string();
                    break;
                case 6:
                    message.expirationTime = timestamp_js_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.priceTakerToMaker = reader.string();
                    break;
                case 8:
                    message.makerPrice = reader.string();
                    break;
                case 9:
                    message.decReservesMakerDenom = reader.string();
                    break;
                case 10:
                    message.decReservesTakerDenom = reader.string();
                    break;
                case 11:
                    message.decTotalTakerDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLimitOrderTranche();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = exports.LimitOrderTrancheKey.fromJSON(object.key);
        if ((0, helpers_js_1.isSet)(object.reservesMakerDenom))
            obj.reservesMakerDenom = String(object.reservesMakerDenom);
        if ((0, helpers_js_1.isSet)(object.reservesTakerDenom))
            obj.reservesTakerDenom = String(object.reservesTakerDenom);
        if ((0, helpers_js_1.isSet)(object.totalMakerDenom))
            obj.totalMakerDenom = String(object.totalMakerDenom);
        if ((0, helpers_js_1.isSet)(object.totalTakerDenom))
            obj.totalTakerDenom = String(object.totalTakerDenom);
        if ((0, helpers_js_1.isSet)(object.expirationTime))
            obj.expirationTime = (0, helpers_js_1.fromJsonTimestamp)(object.expirationTime);
        if ((0, helpers_js_1.isSet)(object.priceTakerToMaker))
            obj.priceTakerToMaker = String(object.priceTakerToMaker);
        if ((0, helpers_js_1.isSet)(object.makerPrice))
            obj.makerPrice = String(object.makerPrice);
        if ((0, helpers_js_1.isSet)(object.decReservesMakerDenom))
            obj.decReservesMakerDenom = String(object.decReservesMakerDenom);
        if ((0, helpers_js_1.isSet)(object.decReservesTakerDenom))
            obj.decReservesTakerDenom = String(object.decReservesTakerDenom);
        if ((0, helpers_js_1.isSet)(object.decTotalTakerDenom))
            obj.decTotalTakerDenom = String(object.decTotalTakerDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = message.key ? exports.LimitOrderTrancheKey.toJSON(message.key) : undefined);
        message.reservesMakerDenom !== undefined && (obj.reservesMakerDenom = message.reservesMakerDenom);
        message.reservesTakerDenom !== undefined && (obj.reservesTakerDenom = message.reservesTakerDenom);
        message.totalMakerDenom !== undefined && (obj.totalMakerDenom = message.totalMakerDenom);
        message.totalTakerDenom !== undefined && (obj.totalTakerDenom = message.totalTakerDenom);
        message.expirationTime !== undefined &&
            (obj.expirationTime = (0, helpers_js_1.fromTimestamp)(message.expirationTime).toISOString());
        message.priceTakerToMaker !== undefined && (obj.priceTakerToMaker = message.priceTakerToMaker);
        message.makerPrice !== undefined && (obj.makerPrice = message.makerPrice);
        message.decReservesMakerDenom !== undefined &&
            (obj.decReservesMakerDenom = message.decReservesMakerDenom);
        message.decReservesTakerDenom !== undefined &&
            (obj.decReservesTakerDenom = message.decReservesTakerDenom);
        message.decTotalTakerDenom !== undefined && (obj.decTotalTakerDenom = message.decTotalTakerDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLimitOrderTranche();
        if (object.key !== undefined && object.key !== null) {
            message.key = exports.LimitOrderTrancheKey.fromPartial(object.key);
        }
        message.reservesMakerDenom = object.reservesMakerDenom ?? "";
        message.reservesTakerDenom = object.reservesTakerDenom ?? "";
        message.totalMakerDenom = object.totalMakerDenom ?? "";
        message.totalTakerDenom = object.totalTakerDenom ?? "";
        if (object.expirationTime !== undefined && object.expirationTime !== null) {
            message.expirationTime = timestamp_js_1.Timestamp.fromPartial(object.expirationTime);
        }
        message.priceTakerToMaker = object.priceTakerToMaker ?? "";
        message.makerPrice = object.makerPrice ?? "";
        message.decReservesMakerDenom = object.decReservesMakerDenom ?? "";
        message.decReservesTakerDenom = object.decReservesTakerDenom ?? "";
        message.decTotalTakerDenom = object.decTotalTakerDenom ?? "";
        return message;
    },
};
//# sourceMappingURL=limit_order_tranche.js.map