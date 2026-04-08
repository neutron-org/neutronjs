"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TickLiquidity = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const pool_reserves_js_1 = require("./pool_reserves.js");
const limit_order_tranche_js_1 = require("./limit_order_tranche.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBaseTickLiquidity() {
    return {
        poolReserves: undefined,
        limitOrderTranche: undefined,
    };
}
exports.TickLiquidity = {
    typeUrl: "/neutron.dex.TickLiquidity",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.poolReserves !== undefined) {
            pool_reserves_js_1.PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
        }
        if (message.limitOrderTranche !== undefined) {
            limit_order_tranche_js_1.LimitOrderTranche.encode(message.limitOrderTranche, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTickLiquidity();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolReserves = pool_reserves_js_1.PoolReserves.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.limitOrderTranche = limit_order_tranche_js_1.LimitOrderTranche.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTickLiquidity();
        if ((0, helpers_js_1.isSet)(object.poolReserves))
            obj.poolReserves = pool_reserves_js_1.PoolReserves.fromJSON(object.poolReserves);
        if ((0, helpers_js_1.isSet)(object.limitOrderTranche))
            obj.limitOrderTranche = limit_order_tranche_js_1.LimitOrderTranche.fromJSON(object.limitOrderTranche);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.poolReserves !== undefined &&
            (obj.poolReserves = message.poolReserves ? pool_reserves_js_1.PoolReserves.toJSON(message.poolReserves) : undefined);
        message.limitOrderTranche !== undefined &&
            (obj.limitOrderTranche = message.limitOrderTranche
                ? limit_order_tranche_js_1.LimitOrderTranche.toJSON(message.limitOrderTranche)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTickLiquidity();
        if (object.poolReserves !== undefined && object.poolReserves !== null) {
            message.poolReserves = pool_reserves_js_1.PoolReserves.fromPartial(object.poolReserves);
        }
        if (object.limitOrderTranche !== undefined && object.limitOrderTranche !== null) {
            message.limitOrderTranche = limit_order_tranche_js_1.LimitOrderTranche.fromPartial(object.limitOrderTranche);
        }
        return message;
    },
};
//# sourceMappingURL=tick_liquidity.js.map