"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolMetadata = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const pair_id_js_1 = require("./pair_id.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBasePoolMetadata() {
    return {
        id: BigInt(0),
        tick: BigInt(0),
        fee: BigInt(0),
        pairId: undefined,
    };
}
exports.PoolMetadata = {
    typeUrl: "/neutron.dex.PoolMetadata",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.tick !== BigInt(0)) {
            writer.uint32(16).int64(message.tick);
        }
        if (message.fee !== BigInt(0)) {
            writer.uint32(24).uint64(message.fee);
        }
        if (message.pairId !== undefined) {
            pair_id_js_1.PairID.encode(message.pairId, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.tick = reader.int64();
                    break;
                case 3:
                    message.fee = reader.uint64();
                    break;
                case 4:
                    message.pairId = pair_id_js_1.PairID.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePoolMetadata();
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        if ((0, helpers_js_1.isSet)(object.tick))
            obj.tick = BigInt(object.tick.toString());
        if ((0, helpers_js_1.isSet)(object.fee))
            obj.fee = BigInt(object.fee.toString());
        if ((0, helpers_js_1.isSet)(object.pairId))
            obj.pairId = pair_id_js_1.PairID.fromJSON(object.pairId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.tick !== undefined && (obj.tick = (message.tick || BigInt(0)).toString());
        message.fee !== undefined && (obj.fee = (message.fee || BigInt(0)).toString());
        message.pairId !== undefined && (obj.pairId = message.pairId ? pair_id_js_1.PairID.toJSON(message.pairId) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolMetadata();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        if (object.tick !== undefined && object.tick !== null) {
            message.tick = BigInt(object.tick.toString());
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = BigInt(object.fee.toString());
        }
        if (object.pairId !== undefined && object.pairId !== null) {
            message.pairId = pair_id_js_1.PairID.fromPartial(object.pairId);
        }
        return message;
    },
};
//# sourceMappingURL=pool_metadata.js.map