"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const market_js_1 = require("./market.js");
const params_js_1 = require("./params.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "slinky.marketmap.v1";
function createBaseGenesisState() {
    return {
        marketMap: market_js_1.MarketMap.fromPartial({}),
        lastUpdated: BigInt(0),
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.GenesisState = {
    typeUrl: "/slinky.marketmap.v1.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.marketMap !== undefined) {
            market_js_1.MarketMap.encode(message.marketMap, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastUpdated !== BigInt(0)) {
            writer.uint32(16).uint64(message.lastUpdated);
        }
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
                    message.marketMap = market_js_1.MarketMap.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lastUpdated = reader.uint64();
                    break;
                case 3:
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
        const obj = createBaseGenesisState();
        if ((0, helpers_js_1.isSet)(object.marketMap))
            obj.marketMap = market_js_1.MarketMap.fromJSON(object.marketMap);
        if ((0, helpers_js_1.isSet)(object.lastUpdated))
            obj.lastUpdated = BigInt(object.lastUpdated.toString());
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.marketMap !== undefined &&
            (obj.marketMap = message.marketMap ? market_js_1.MarketMap.toJSON(message.marketMap) : undefined);
        message.lastUpdated !== undefined && (obj.lastUpdated = (message.lastUpdated || BigInt(0)).toString());
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.marketMap !== undefined && object.marketMap !== null) {
            message.marketMap = market_js_1.MarketMap.fromPartial(object.marketMap);
        }
        if (object.lastUpdated !== undefined && object.lastUpdated !== null) {
            message.lastUpdated = BigInt(object.lastUpdated.toString());
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map