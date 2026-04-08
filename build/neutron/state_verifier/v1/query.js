"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryConsensusStateResponse = exports.QueryConsensusStateRequest = exports.QueryVerifyStateValuesResponse = exports.QueryVerifyStateValuesRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const tx_js_1 = require("../../interchainqueries/tx.js");
const genesis_js_1 = require("./genesis.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "neutron.state_verifier.v1";
function createBaseQueryVerifyStateValuesRequest() {
    return {
        height: BigInt(0),
        storageValues: [],
    };
}
exports.QueryVerifyStateValuesRequest = {
    typeUrl: "/neutron.state_verifier.v1.QueryVerifyStateValuesRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        for (const v of message.storageValues) {
            tx_js_1.StorageValue.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVerifyStateValuesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.storageValues.push(tx_js_1.StorageValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryVerifyStateValuesRequest();
        if ((0, helpers_js_1.isSet)(object.height))
            obj.height = BigInt(object.height.toString());
        if (Array.isArray(object?.storageValues))
            obj.storageValues = object.storageValues.map((e) => tx_js_1.StorageValue.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        if (message.storageValues) {
            obj.storageValues = message.storageValues.map((e) => (e ? tx_js_1.StorageValue.toJSON(e) : undefined));
        }
        else {
            obj.storageValues = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVerifyStateValuesRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height.toString());
        }
        message.storageValues = object.storageValues?.map((e) => tx_js_1.StorageValue.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryVerifyStateValuesResponse() {
    return {
        valid: false,
    };
}
exports.QueryVerifyStateValuesResponse = {
    typeUrl: "/neutron.state_verifier.v1.QueryVerifyStateValuesResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.valid === true) {
            writer.uint32(8).bool(message.valid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVerifyStateValuesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valid = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryVerifyStateValuesResponse();
        if ((0, helpers_js_1.isSet)(object.valid))
            obj.valid = Boolean(object.valid);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.valid !== undefined && (obj.valid = message.valid);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVerifyStateValuesResponse();
        message.valid = object.valid ?? false;
        return message;
    },
};
function createBaseQueryConsensusStateRequest() {
    return {
        height: BigInt(0),
    };
}
exports.QueryConsensusStateRequest = {
    typeUrl: "/neutron.state_verifier.v1.QueryConsensusStateRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryConsensusStateRequest();
        if ((0, helpers_js_1.isSet)(object.height))
            obj.height = BigInt(object.height.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height.toString());
        }
        return message;
    },
};
function createBaseQueryConsensusStateResponse() {
    return {
        cs: undefined,
    };
}
exports.QueryConsensusStateResponse = {
    typeUrl: "/neutron.state_verifier.v1.QueryConsensusStateResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.cs !== undefined) {
            genesis_js_1.ConsensusState.encode(message.cs, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.cs = genesis_js_1.ConsensusState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryConsensusStateResponse();
        if ((0, helpers_js_1.isSet)(object.cs))
            obj.cs = genesis_js_1.ConsensusState.fromJSON(object.cs);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.cs !== undefined && (obj.cs = message.cs ? genesis_js_1.ConsensusState.toJSON(message.cs) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateResponse();
        if (object.cs !== undefined && object.cs !== null) {
            message.cs = genesis_js_1.ConsensusState.fromPartial(object.cs);
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map