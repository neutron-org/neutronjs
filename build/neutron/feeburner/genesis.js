"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("./params.js");
const total_burned_neutrons_amount_js_1 = require("./total_burned_neutrons_amount.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.feeburner";
function createBaseGenesisState() {
    return {
        params: params_js_1.Params.fromPartial({}),
        totalBurnedNeutronsAmount: total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.fromPartial({}),
    };
}
exports.GenesisState = {
    typeUrl: "/neutron.feeburner.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalBurnedNeutronsAmount !== undefined) {
            total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.encode(message.totalBurnedNeutronsAmount, writer.uint32(18).fork()).ldelim();
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
                    message.totalBurnedNeutronsAmount = total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.decode(reader, reader.uint32());
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
        if ((0, helpers_js_1.isSet)(object.totalBurnedNeutronsAmount))
            obj.totalBurnedNeutronsAmount = total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.fromJSON(object.totalBurnedNeutronsAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        message.totalBurnedNeutronsAmount !== undefined &&
            (obj.totalBurnedNeutronsAmount = message.totalBurnedNeutronsAmount
                ? total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.toJSON(message.totalBurnedNeutronsAmount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        if (object.totalBurnedNeutronsAmount !== undefined && object.totalBurnedNeutronsAmount !== null) {
            message.totalBurnedNeutronsAmount = total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.fromPartial(object.totalBurnedNeutronsAmount);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map