"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.ConsensusState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const tendermint_js_1 = require("../../../ibc/lightclients/tendermint/v1/tendermint.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "neutron.state_verifier.v1";
function createBaseConsensusState() {
    return {
        height: BigInt(0),
        cs: undefined,
    };
}
exports.ConsensusState = {
    typeUrl: "/neutron.state_verifier.v1.ConsensusState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.cs !== undefined) {
            tendermint_js_1.ConsensusState.encode(message.cs, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.cs = tendermint_js_1.ConsensusState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseConsensusState();
        if ((0, helpers_js_1.isSet)(object.height))
            obj.height = BigInt(object.height.toString());
        if ((0, helpers_js_1.isSet)(object.cs))
            obj.cs = tendermint_js_1.ConsensusState.fromJSON(object.cs);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.cs !== undefined && (obj.cs = message.cs ? tendermint_js_1.ConsensusState.toJSON(message.cs) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height.toString());
        }
        if (object.cs !== undefined && object.cs !== null) {
            message.cs = tendermint_js_1.ConsensusState.fromPartial(object.cs);
        }
        return message;
    },
};
function createBaseGenesisState() {
    return {
        states: [],
    };
}
exports.GenesisState = {
    typeUrl: "/neutron.state_verifier.v1.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.states) {
            exports.ConsensusState.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.states.push(exports.ConsensusState.decode(reader, reader.uint32()));
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
        if (Array.isArray(object?.states))
            obj.states = object.states.map((e) => exports.ConsensusState.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.states) {
            obj.states = message.states.map((e) => (e ? exports.ConsensusState.toJSON(e) : undefined));
        }
        else {
            obj.states = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.states = object.states?.map((e) => exports.ConsensusState.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map