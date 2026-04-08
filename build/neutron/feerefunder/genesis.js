"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeInfo = exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("./params.js");
const fee_js_1 = require("./fee.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.feerefunder";
function createBaseGenesisState() {
    return {
        params: params_js_1.Params.fromPartial({}),
        feeInfos: [],
    };
}
exports.GenesisState = {
    typeUrl: "/neutron.feerefunder.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.feeInfos) {
            exports.FeeInfo.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = params_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feeInfos.push(exports.FeeInfo.decode(reader, reader.uint32()));
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
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        if (Array.isArray(object?.feeInfos))
            obj.feeInfos = object.feeInfos.map((e) => exports.FeeInfo.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        if (message.feeInfos) {
            obj.feeInfos = message.feeInfos.map((e) => (e ? exports.FeeInfo.toJSON(e) : undefined));
        }
        else {
            obj.feeInfos = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        message.feeInfos = object.feeInfos?.map((e) => exports.FeeInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseFeeInfo() {
    return {
        payer: "",
        packetId: fee_js_1.PacketID.fromPartial({}),
        fee: fee_js_1.Fee.fromPartial({}),
    };
}
exports.FeeInfo = {
    typeUrl: "/neutron.feerefunder.FeeInfo",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.payer !== "") {
            writer.uint32(10).string(message.payer);
        }
        if (message.packetId !== undefined) {
            fee_js_1.PacketID.encode(message.packetId, writer.uint32(18).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            fee_js_1.Fee.encode(message.fee, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payer = reader.string();
                    break;
                case 2:
                    message.packetId = fee_js_1.PacketID.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.fee = fee_js_1.Fee.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFeeInfo();
        if ((0, helpers_js_1.isSet)(object.payer))
            obj.payer = String(object.payer);
        if ((0, helpers_js_1.isSet)(object.packetId))
            obj.packetId = fee_js_1.PacketID.fromJSON(object.packetId);
        if ((0, helpers_js_1.isSet)(object.fee))
            obj.fee = fee_js_1.Fee.fromJSON(object.fee);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.payer !== undefined && (obj.payer = message.payer);
        message.packetId !== undefined &&
            (obj.packetId = message.packetId ? fee_js_1.PacketID.toJSON(message.packetId) : undefined);
        message.fee !== undefined && (obj.fee = message.fee ? fee_js_1.Fee.toJSON(message.fee) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeeInfo();
        message.payer = object.payer ?? "";
        if (object.packetId !== undefined && object.packetId !== null) {
            message.packetId = fee_js_1.PacketID.fromPartial(object.packetId);
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = fee_js_1.Fee.fromPartial(object.fee);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map