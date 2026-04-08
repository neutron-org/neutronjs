"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const pool_reserves_js_1 = require("./pool_reserves.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBasePool() {
    return {
        id: BigInt(0),
        lowerTick0: undefined,
        upperTick1: undefined,
    };
}
exports.Pool = {
    typeUrl: "/neutron.dex.Pool",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.lowerTick0 !== undefined) {
            pool_reserves_js_1.PoolReserves.encode(message.lowerTick0, writer.uint32(18).fork()).ldelim();
        }
        if (message.upperTick1 !== undefined) {
            pool_reserves_js_1.PoolReserves.encode(message.upperTick1, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.lowerTick0 = pool_reserves_js_1.PoolReserves.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.upperTick1 = pool_reserves_js_1.PoolReserves.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePool();
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        if ((0, helpers_js_1.isSet)(object.lowerTick0))
            obj.lowerTick0 = pool_reserves_js_1.PoolReserves.fromJSON(object.lowerTick0);
        if ((0, helpers_js_1.isSet)(object.upperTick1))
            obj.upperTick1 = pool_reserves_js_1.PoolReserves.fromJSON(object.upperTick1);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.lowerTick0 !== undefined &&
            (obj.lowerTick0 = message.lowerTick0 ? pool_reserves_js_1.PoolReserves.toJSON(message.lowerTick0) : undefined);
        message.upperTick1 !== undefined &&
            (obj.upperTick1 = message.upperTick1 ? pool_reserves_js_1.PoolReserves.toJSON(message.upperTick1) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePool();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        if (object.lowerTick0 !== undefined && object.lowerTick0 !== null) {
            message.lowerTick0 = pool_reserves_js_1.PoolReserves.fromPartial(object.lowerTick0);
        }
        if (object.upperTick1 !== undefined && object.upperTick1 !== null) {
            message.upperTick1 = pool_reserves_js_1.PoolReserves.fromPartial(object.upperTick1);
        }
        return message;
    },
};
//# sourceMappingURL=pool.js.map