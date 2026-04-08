"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.dex";
function createBaseParams() {
    return {
        feeTiers: [],
        paused: false,
        maxJitsPerBlock: BigInt(0),
        goodTilPurgeAllowance: BigInt(0),
        whitelistedLps: [],
    };
}
exports.Params = {
    typeUrl: "/neutron.dex.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.feeTiers) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.paused === true) {
            writer.uint32(24).bool(message.paused);
        }
        if (message.maxJitsPerBlock !== BigInt(0)) {
            writer.uint32(32).uint64(message.maxJitsPerBlock);
        }
        if (message.goodTilPurgeAllowance !== BigInt(0)) {
            writer.uint32(40).uint64(message.goodTilPurgeAllowance);
        }
        for (const v of message.whitelistedLps) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.feeTiers.push(reader.uint64());
                        }
                    }
                    else {
                        message.feeTiers.push(reader.uint64());
                    }
                    break;
                case 3:
                    message.paused = reader.bool();
                    break;
                case 4:
                    message.maxJitsPerBlock = reader.uint64();
                    break;
                case 5:
                    message.goodTilPurgeAllowance = reader.uint64();
                    break;
                case 6:
                    message.whitelistedLps.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseParams();
        if (Array.isArray(object?.feeTiers))
            obj.feeTiers = object.feeTiers.map((e) => BigInt(e.toString()));
        if ((0, helpers_js_1.isSet)(object.paused))
            obj.paused = Boolean(object.paused);
        if ((0, helpers_js_1.isSet)(object.maxJitsPerBlock))
            obj.maxJitsPerBlock = BigInt(object.maxJitsPerBlock.toString());
        if ((0, helpers_js_1.isSet)(object.goodTilPurgeAllowance))
            obj.goodTilPurgeAllowance = BigInt(object.goodTilPurgeAllowance.toString());
        if (Array.isArray(object?.whitelistedLps))
            obj.whitelistedLps = object.whitelistedLps.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.feeTiers) {
            obj.feeTiers = message.feeTiers.map((e) => (e || BigInt(0)).toString());
        }
        else {
            obj.feeTiers = [];
        }
        message.paused !== undefined && (obj.paused = message.paused);
        message.maxJitsPerBlock !== undefined &&
            (obj.maxJitsPerBlock = (message.maxJitsPerBlock || BigInt(0)).toString());
        message.goodTilPurgeAllowance !== undefined &&
            (obj.goodTilPurgeAllowance = (message.goodTilPurgeAllowance || BigInt(0)).toString());
        if (message.whitelistedLps) {
            obj.whitelistedLps = message.whitelistedLps.map((e) => e);
        }
        else {
            obj.whitelistedLps = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.feeTiers = object.feeTiers?.map((e) => BigInt(e.toString())) || [];
        message.paused = object.paused ?? false;
        if (object.maxJitsPerBlock !== undefined && object.maxJitsPerBlock !== null) {
            message.maxJitsPerBlock = BigInt(object.maxJitsPerBlock.toString());
        }
        if (object.goodTilPurgeAllowance !== undefined && object.goodTilPurgeAllowance !== null) {
            message.goodTilPurgeAllowance = BigInt(object.goodTilPurgeAllowance.toString());
        }
        message.whitelistedLps = object.whitelistedLps?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=params.js.map