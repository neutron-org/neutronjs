"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolReserves = exports.PoolReservesKey = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const trade_pair_id_js_1 = require("./trade_pair_id.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBasePoolReservesKey() {
    return {
        tradePairId: undefined,
        tickIndexTakerToMaker: BigInt(0),
        fee: BigInt(0),
    };
}
exports.PoolReservesKey = {
    typeUrl: "/neutron.dex.PoolReservesKey",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.tradePairId !== undefined) {
            trade_pair_id_js_1.TradePairID.encode(message.tradePairId, writer.uint32(10).fork()).ldelim();
        }
        if (message.tickIndexTakerToMaker !== BigInt(0)) {
            writer.uint32(16).int64(message.tickIndexTakerToMaker);
        }
        if (message.fee !== BigInt(0)) {
            writer.uint32(24).uint64(message.fee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolReservesKey();
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
                    message.fee = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolReservesKey();
        if ((0, helpers_js_1.isSet)(object.tradePairId))
            obj.tradePairId = trade_pair_id_js_1.TradePairID.fromJSON(object.tradePairId);
        if ((0, helpers_js_1.isSet)(object.tickIndexTakerToMaker))
            obj.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
        if ((0, helpers_js_1.isSet)(object.fee))
            obj.fee = BigInt(object.fee.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tradePairId !== undefined &&
            (obj.tradePairId = message.tradePairId ? trade_pair_id_js_1.TradePairID.toJSON(message.tradePairId) : undefined);
        message.tickIndexTakerToMaker !== undefined &&
            (obj.tickIndexTakerToMaker = (message.tickIndexTakerToMaker || BigInt(0)).toString());
        message.fee !== undefined && (obj.fee = (message.fee || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolReservesKey();
        if (object.tradePairId !== undefined && object.tradePairId !== null) {
            message.tradePairId = trade_pair_id_js_1.TradePairID.fromPartial(object.tradePairId);
        }
        if (object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null) {
            message.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = BigInt(object.fee.toString());
        }
        return message;
    },
};
function createBasePoolReserves() {
    return {
        key: undefined,
        reservesMakerDenom: "",
        priceTakerToMaker: "",
        priceOppositeTakerToMaker: "",
        makerPrice: "",
        decReservesMakerDenom: "",
    };
}
exports.PoolReserves = {
    typeUrl: "/neutron.dex.PoolReserves",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key !== undefined) {
            exports.PoolReservesKey.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        if (message.reservesMakerDenom !== "") {
            writer.uint32(18).string(message.reservesMakerDenom);
        }
        if (message.priceTakerToMaker !== "") {
            writer.uint32(26).string(message.priceTakerToMaker);
        }
        if (message.priceOppositeTakerToMaker !== "") {
            writer.uint32(34).string(message.priceOppositeTakerToMaker);
        }
        if (message.makerPrice !== "") {
            writer.uint32(42).string(message.makerPrice);
        }
        if (message.decReservesMakerDenom !== "") {
            writer.uint32(50).string(message.decReservesMakerDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolReserves();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = exports.PoolReservesKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.reservesMakerDenom = reader.string();
                    break;
                case 3:
                    message.priceTakerToMaker = reader.string();
                    break;
                case 4:
                    message.priceOppositeTakerToMaker = reader.string();
                    break;
                case 5:
                    message.makerPrice = reader.string();
                    break;
                case 6:
                    message.decReservesMakerDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolReserves();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = exports.PoolReservesKey.fromJSON(object.key);
        if ((0, helpers_js_1.isSet)(object.reservesMakerDenom))
            obj.reservesMakerDenom = String(object.reservesMakerDenom);
        if ((0, helpers_js_1.isSet)(object.priceTakerToMaker))
            obj.priceTakerToMaker = String(object.priceTakerToMaker);
        if ((0, helpers_js_1.isSet)(object.priceOppositeTakerToMaker))
            obj.priceOppositeTakerToMaker = String(object.priceOppositeTakerToMaker);
        if ((0, helpers_js_1.isSet)(object.makerPrice))
            obj.makerPrice = String(object.makerPrice);
        if ((0, helpers_js_1.isSet)(object.decReservesMakerDenom))
            obj.decReservesMakerDenom = String(object.decReservesMakerDenom);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key ? exports.PoolReservesKey.toJSON(message.key) : undefined);
        message.reservesMakerDenom !== undefined && (obj.reservesMakerDenom = message.reservesMakerDenom);
        message.priceTakerToMaker !== undefined && (obj.priceTakerToMaker = message.priceTakerToMaker);
        message.priceOppositeTakerToMaker !== undefined &&
            (obj.priceOppositeTakerToMaker = message.priceOppositeTakerToMaker);
        message.makerPrice !== undefined && (obj.makerPrice = message.makerPrice);
        message.decReservesMakerDenom !== undefined &&
            (obj.decReservesMakerDenom = message.decReservesMakerDenom);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolReserves();
        if (object.key !== undefined && object.key !== null) {
            message.key = exports.PoolReservesKey.fromPartial(object.key);
        }
        message.reservesMakerDenom = object.reservesMakerDenom ?? "";
        message.priceTakerToMaker = object.priceTakerToMaker ?? "";
        message.priceOppositeTakerToMaker = object.priceOppositeTakerToMaker ?? "";
        message.makerPrice = object.makerPrice ?? "";
        message.decReservesMakerDenom = object.decReservesMakerDenom ?? "";
        return message;
    },
};
//# sourceMappingURL=pool_reserves.js.map