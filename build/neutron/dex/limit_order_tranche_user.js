"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitOrderTrancheUser = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const trade_pair_id_js_1 = require("./trade_pair_id.js");
const tx_js_1 = require("./tx.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBaseLimitOrderTrancheUser() {
    return {
        tradePairId: undefined,
        tickIndexTakerToMaker: BigInt(0),
        trancheKey: "",
        address: "",
        sharesOwned: "",
        sharesWithdrawn: "",
        sharesCancelled: "",
        orderType: 0,
    };
}
exports.LimitOrderTrancheUser = {
    typeUrl: "/neutron.dex.LimitOrderTrancheUser",
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
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        if (message.sharesOwned !== "") {
            writer.uint32(42).string(message.sharesOwned);
        }
        if (message.sharesWithdrawn !== "") {
            writer.uint32(50).string(message.sharesWithdrawn);
        }
        if (message.sharesCancelled !== "") {
            writer.uint32(58).string(message.sharesCancelled);
        }
        if (message.orderType !== 0) {
            writer.uint32(64).int32(message.orderType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLimitOrderTrancheUser();
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
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.sharesOwned = reader.string();
                    break;
                case 6:
                    message.sharesWithdrawn = reader.string();
                    break;
                case 7:
                    message.sharesCancelled = reader.string();
                    break;
                case 8:
                    message.orderType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseLimitOrderTrancheUser();
        if ((0, helpers_js_1.isSet)(object.tradePairId))
            obj.tradePairId = trade_pair_id_js_1.TradePairID.fromJSON(object.tradePairId);
        if ((0, helpers_js_1.isSet)(object.tickIndexTakerToMaker))
            obj.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
        if ((0, helpers_js_1.isSet)(object.trancheKey))
            obj.trancheKey = String(object.trancheKey);
        if ((0, helpers_js_1.isSet)(object.address))
            obj.address = String(object.address);
        if ((0, helpers_js_1.isSet)(object.sharesOwned))
            obj.sharesOwned = String(object.sharesOwned);
        if ((0, helpers_js_1.isSet)(object.sharesWithdrawn))
            obj.sharesWithdrawn = String(object.sharesWithdrawn);
        if ((0, helpers_js_1.isSet)(object.sharesCancelled))
            obj.sharesCancelled = String(object.sharesCancelled);
        if ((0, helpers_js_1.isSet)(object.orderType))
            obj.orderType = (0, tx_js_1.limitOrderTypeFromJSON)(object.orderType);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tradePairId !== undefined &&
            (obj.tradePairId = message.tradePairId ? trade_pair_id_js_1.TradePairID.toJSON(message.tradePairId) : undefined);
        message.tickIndexTakerToMaker !== undefined &&
            (obj.tickIndexTakerToMaker = (message.tickIndexTakerToMaker || BigInt(0)).toString());
        message.trancheKey !== undefined && (obj.trancheKey = message.trancheKey);
        message.address !== undefined && (obj.address = message.address);
        message.sharesOwned !== undefined && (obj.sharesOwned = message.sharesOwned);
        message.sharesWithdrawn !== undefined && (obj.sharesWithdrawn = message.sharesWithdrawn);
        message.sharesCancelled !== undefined && (obj.sharesCancelled = message.sharesCancelled);
        message.orderType !== undefined && (obj.orderType = (0, tx_js_1.limitOrderTypeToJSON)(message.orderType));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLimitOrderTrancheUser();
        if (object.tradePairId !== undefined && object.tradePairId !== null) {
            message.tradePairId = trade_pair_id_js_1.TradePairID.fromPartial(object.tradePairId);
        }
        if (object.tickIndexTakerToMaker !== undefined && object.tickIndexTakerToMaker !== null) {
            message.tickIndexTakerToMaker = BigInt(object.tickIndexTakerToMaker.toString());
        }
        message.trancheKey = object.trancheKey ?? "";
        message.address = object.address ?? "";
        message.sharesOwned = object.sharesOwned ?? "";
        message.sharesWithdrawn = object.sharesWithdrawn ?? "";
        message.sharesCancelled = object.sharesCancelled ?? "";
        message.orderType = object.orderType ?? 0;
        return message;
    },
};
//# sourceMappingURL=limit_order_tranche_user.js.map