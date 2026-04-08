"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const coin_js_1 = require("../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.interchainqueries";
function createBaseParams() {
    return {
        querySubmitTimeout: BigInt(0),
        queryDeposit: [],
        txQueryRemovalLimit: BigInt(0),
        maxKvQueryKeysCount: BigInt(0),
        maxTransactionsFilters: BigInt(0),
    };
}
exports.Params = {
    typeUrl: "/neutron.interchainqueries.Params",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.querySubmitTimeout !== BigInt(0)) {
            writer.uint32(8).uint64(message.querySubmitTimeout);
        }
        for (const v of message.queryDeposit) {
            coin_js_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.txQueryRemovalLimit !== BigInt(0)) {
            writer.uint32(24).uint64(message.txQueryRemovalLimit);
        }
        if (message.maxKvQueryKeysCount !== BigInt(0)) {
            writer.uint32(32).uint64(message.maxKvQueryKeysCount);
        }
        if (message.maxTransactionsFilters !== BigInt(0)) {
            writer.uint32(40).uint64(message.maxTransactionsFilters);
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
                    message.querySubmitTimeout = reader.uint64();
                    break;
                case 2:
                    message.queryDeposit.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.txQueryRemovalLimit = reader.uint64();
                    break;
                case 4:
                    message.maxKvQueryKeysCount = reader.uint64();
                    break;
                case 5:
                    message.maxTransactionsFilters = reader.uint64();
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
        if ((0, helpers_js_1.isSet)(object.querySubmitTimeout))
            obj.querySubmitTimeout = BigInt(object.querySubmitTimeout.toString());
        if (Array.isArray(object?.queryDeposit))
            obj.queryDeposit = object.queryDeposit.map((e) => coin_js_1.Coin.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.txQueryRemovalLimit))
            obj.txQueryRemovalLimit = BigInt(object.txQueryRemovalLimit.toString());
        if ((0, helpers_js_1.isSet)(object.maxKvQueryKeysCount))
            obj.maxKvQueryKeysCount = BigInt(object.maxKvQueryKeysCount.toString());
        if ((0, helpers_js_1.isSet)(object.maxTransactionsFilters))
            obj.maxTransactionsFilters = BigInt(object.maxTransactionsFilters.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.querySubmitTimeout !== undefined &&
            (obj.querySubmitTimeout = (message.querySubmitTimeout || BigInt(0)).toString());
        if (message.queryDeposit) {
            obj.queryDeposit = message.queryDeposit.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.queryDeposit = [];
        }
        message.txQueryRemovalLimit !== undefined &&
            (obj.txQueryRemovalLimit = (message.txQueryRemovalLimit || BigInt(0)).toString());
        message.maxKvQueryKeysCount !== undefined &&
            (obj.maxKvQueryKeysCount = (message.maxKvQueryKeysCount || BigInt(0)).toString());
        message.maxTransactionsFilters !== undefined &&
            (obj.maxTransactionsFilters = (message.maxTransactionsFilters || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        if (object.querySubmitTimeout !== undefined && object.querySubmitTimeout !== null) {
            message.querySubmitTimeout = BigInt(object.querySubmitTimeout.toString());
        }
        message.queryDeposit = object.queryDeposit?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        if (object.txQueryRemovalLimit !== undefined && object.txQueryRemovalLimit !== null) {
            message.txQueryRemovalLimit = BigInt(object.txQueryRemovalLimit.toString());
        }
        if (object.maxKvQueryKeysCount !== undefined && object.maxKvQueryKeysCount !== null) {
            message.maxKvQueryKeysCount = BigInt(object.maxKvQueryKeysCount.toString());
        }
        if (object.maxTransactionsFilters !== undefined && object.maxTransactionsFilters !== null) {
            message.maxTransactionsFilters = BigInt(object.maxTransactionsFilters.toString());
        }
        return message;
    },
};
//# sourceMappingURL=params.js.map