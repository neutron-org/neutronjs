"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProposalInfo = exports.ProposalInfo_TxsByLaneEntry = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "sdk.proposals.v1";
function createBaseProposalInfo_TxsByLaneEntry() {
    return {
        key: "",
        value: BigInt(0),
    };
}
exports.ProposalInfo_TxsByLaneEntry = {
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== BigInt(0)) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalInfo_TxsByLaneEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseProposalInfo_TxsByLaneEntry();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = String(object.key);
        if ((0, helpers_js_1.isSet)(object.value))
            obj.value = BigInt(object.value.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposalInfo_TxsByLaneEntry();
        message.key = object.key ?? "";
        if (object.value !== undefined && object.value !== null) {
            message.value = BigInt(object.value.toString());
        }
        return message;
    },
};
function createBaseProposalInfo() {
    return {
        txsByLane: {},
        maxBlockSize: BigInt(0),
        maxGasLimit: BigInt(0),
        blockSize: BigInt(0),
        gasLimit: BigInt(0),
    };
}
exports.ProposalInfo = {
    typeUrl: "/sdk.proposals.v1.ProposalInfo",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        Object.entries(message.txsByLane).forEach(([key, value]) => {
            exports.ProposalInfo_TxsByLaneEntry.encode({
                key: key,
                value,
            }, writer.uint32(8).fork()).ldelim();
        });
        if (message.maxBlockSize !== BigInt(0)) {
            writer.uint32(16).int64(message.maxBlockSize);
        }
        if (message.maxGasLimit !== BigInt(0)) {
            writer.uint32(24).uint64(message.maxGasLimit);
        }
        if (message.blockSize !== BigInt(0)) {
            writer.uint32(32).int64(message.blockSize);
        }
        if (message.gasLimit !== BigInt(0)) {
            writer.uint32(40).uint64(message.gasLimit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.ProposalInfo_TxsByLaneEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.txsByLane[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.maxBlockSize = reader.int64();
                    break;
                case 3:
                    message.maxGasLimit = reader.uint64();
                    break;
                case 4:
                    message.blockSize = reader.int64();
                    break;
                case 5:
                    message.gasLimit = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseProposalInfo();
        if ((0, helpers_js_1.isObject)(object.txsByLane))
            obj.txsByLane = Object.entries(object.txsByLane).reduce((acc, [key, value]) => {
                acc[key] = BigInt(value.toString());
                return acc;
            }, {});
        if ((0, helpers_js_1.isSet)(object.maxBlockSize))
            obj.maxBlockSize = BigInt(object.maxBlockSize.toString());
        if ((0, helpers_js_1.isSet)(object.maxGasLimit))
            obj.maxGasLimit = BigInt(object.maxGasLimit.toString());
        if ((0, helpers_js_1.isSet)(object.blockSize))
            obj.blockSize = BigInt(object.blockSize.toString());
        if ((0, helpers_js_1.isSet)(object.gasLimit))
            obj.gasLimit = BigInt(object.gasLimit.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        obj.txsByLane = {};
        if (message.txsByLane) {
            Object.entries(message.txsByLane).forEach(([k, v]) => {
                obj.txsByLane[k] = v.toString();
            });
        }
        message.maxBlockSize !== undefined && (obj.maxBlockSize = (message.maxBlockSize || BigInt(0)).toString());
        message.maxGasLimit !== undefined && (obj.maxGasLimit = (message.maxGasLimit || BigInt(0)).toString());
        message.blockSize !== undefined && (obj.blockSize = (message.blockSize || BigInt(0)).toString());
        message.gasLimit !== undefined && (obj.gasLimit = (message.gasLimit || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposalInfo();
        message.txsByLane = Object.entries(object.txsByLane ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = BigInt(value.toString());
            }
            return acc;
        }, {});
        if (object.maxBlockSize !== undefined && object.maxBlockSize !== null) {
            message.maxBlockSize = BigInt(object.maxBlockSize.toString());
        }
        if (object.maxGasLimit !== undefined && object.maxGasLimit !== null) {
            message.maxGasLimit = BigInt(object.maxGasLimit.toString());
        }
        if (object.blockSize !== undefined && object.blockSize !== null) {
            message.blockSize = BigInt(object.blockSize.toString());
        }
        if (object.gasLimit !== undefined && object.gasLimit !== null) {
            message.gasLimit = BigInt(object.gasLimit.toString());
        }
        return message;
    },
};
//# sourceMappingURL=types.js.map