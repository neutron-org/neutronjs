"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositRecord = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const pair_id_js_1 = require("./pair_id.js");
const pool_js_1 = require("./pool.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBaseDepositRecord() {
    return {
        pairId: undefined,
        sharesOwned: "",
        centerTickIndex: BigInt(0),
        lowerTickIndex: BigInt(0),
        upperTickIndex: BigInt(0),
        fee: BigInt(0),
        totalShares: undefined,
        pool: undefined,
    };
}
exports.DepositRecord = {
    typeUrl: "/neutron.dex.DepositRecord",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.pairId !== undefined) {
            pair_id_js_1.PairID.encode(message.pairId, writer.uint32(10).fork()).ldelim();
        }
        if (message.sharesOwned !== "") {
            writer.uint32(18).string(message.sharesOwned);
        }
        if (message.centerTickIndex !== BigInt(0)) {
            writer.uint32(24).int64(message.centerTickIndex);
        }
        if (message.lowerTickIndex !== BigInt(0)) {
            writer.uint32(32).int64(message.lowerTickIndex);
        }
        if (message.upperTickIndex !== BigInt(0)) {
            writer.uint32(40).int64(message.upperTickIndex);
        }
        if (message.fee !== BigInt(0)) {
            writer.uint32(48).uint64(message.fee);
        }
        if (message.totalShares !== undefined) {
            writer.uint32(58).string(message.totalShares);
        }
        if (message.pool !== undefined) {
            pool_js_1.Pool.encode(message.pool, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDepositRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairId = pair_id_js_1.PairID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sharesOwned = reader.string();
                    break;
                case 3:
                    message.centerTickIndex = reader.int64();
                    break;
                case 4:
                    message.lowerTickIndex = reader.int64();
                    break;
                case 5:
                    message.upperTickIndex = reader.int64();
                    break;
                case 6:
                    message.fee = reader.uint64();
                    break;
                case 7:
                    message.totalShares = reader.string();
                    break;
                case 8:
                    message.pool = pool_js_1.Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseDepositRecord();
        if ((0, helpers_js_1.isSet)(object.pairId))
            obj.pairId = pair_id_js_1.PairID.fromJSON(object.pairId);
        if ((0, helpers_js_1.isSet)(object.sharesOwned))
            obj.sharesOwned = String(object.sharesOwned);
        if ((0, helpers_js_1.isSet)(object.centerTickIndex))
            obj.centerTickIndex = BigInt(object.centerTickIndex.toString());
        if ((0, helpers_js_1.isSet)(object.lowerTickIndex))
            obj.lowerTickIndex = BigInt(object.lowerTickIndex.toString());
        if ((0, helpers_js_1.isSet)(object.upperTickIndex))
            obj.upperTickIndex = BigInt(object.upperTickIndex.toString());
        if ((0, helpers_js_1.isSet)(object.fee))
            obj.fee = BigInt(object.fee.toString());
        if ((0, helpers_js_1.isSet)(object.totalShares))
            obj.totalShares = String(object.totalShares);
        if ((0, helpers_js_1.isSet)(object.pool))
            obj.pool = pool_js_1.Pool.fromJSON(object.pool);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pairId !== undefined && (obj.pairId = message.pairId ? pair_id_js_1.PairID.toJSON(message.pairId) : undefined);
        message.sharesOwned !== undefined && (obj.sharesOwned = message.sharesOwned);
        message.centerTickIndex !== undefined &&
            (obj.centerTickIndex = (message.centerTickIndex || BigInt(0)).toString());
        message.lowerTickIndex !== undefined &&
            (obj.lowerTickIndex = (message.lowerTickIndex || BigInt(0)).toString());
        message.upperTickIndex !== undefined &&
            (obj.upperTickIndex = (message.upperTickIndex || BigInt(0)).toString());
        message.fee !== undefined && (obj.fee = (message.fee || BigInt(0)).toString());
        message.totalShares !== undefined && (obj.totalShares = message.totalShares);
        message.pool !== undefined && (obj.pool = message.pool ? pool_js_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDepositRecord();
        if (object.pairId !== undefined && object.pairId !== null) {
            message.pairId = pair_id_js_1.PairID.fromPartial(object.pairId);
        }
        message.sharesOwned = object.sharesOwned ?? "";
        if (object.centerTickIndex !== undefined && object.centerTickIndex !== null) {
            message.centerTickIndex = BigInt(object.centerTickIndex.toString());
        }
        if (object.lowerTickIndex !== undefined && object.lowerTickIndex !== null) {
            message.lowerTickIndex = BigInt(object.lowerTickIndex.toString());
        }
        if (object.upperTickIndex !== undefined && object.upperTickIndex !== null) {
            message.upperTickIndex = BigInt(object.upperTickIndex.toString());
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = BigInt(object.fee.toString());
        }
        message.totalShares = object.totalShares ?? undefined;
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = pool_js_1.Pool.fromPartial(object.pool);
        }
        return message;
    },
};
//# sourceMappingURL=deposit_record.js.map