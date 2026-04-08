"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTotalBurnedNeutronsAmountResponse = exports.QueryTotalBurnedNeutronsAmountRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("./params.js");
const total_burned_neutrons_amount_js_1 = require("./total_burned_neutrons_amount.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.feeburner";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/neutron.feeburner.QueryParamsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseQueryParamsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return {
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/neutron.feeburner.QueryParamsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryParamsResponse();
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseQueryTotalBurnedNeutronsAmountRequest() {
    return {};
}
exports.QueryTotalBurnedNeutronsAmountRequest = {
    typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalBurnedNeutronsAmountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const obj = createBaseQueryTotalBurnedNeutronsAmountRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryTotalBurnedNeutronsAmountRequest();
        return message;
    },
};
function createBaseQueryTotalBurnedNeutronsAmountResponse() {
    return {
        totalBurnedNeutronsAmount: total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.fromPartial({}),
    };
}
exports.QueryTotalBurnedNeutronsAmountResponse = {
    typeUrl: "/neutron.feeburner.QueryTotalBurnedNeutronsAmountResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.totalBurnedNeutronsAmount !== undefined) {
            total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.encode(message.totalBurnedNeutronsAmount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalBurnedNeutronsAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryTotalBurnedNeutronsAmountResponse();
        if ((0, helpers_js_1.isSet)(object.totalBurnedNeutronsAmount))
            obj.totalBurnedNeutronsAmount = total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.fromJSON(object.totalBurnedNeutronsAmount);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.totalBurnedNeutronsAmount !== undefined &&
            (obj.totalBurnedNeutronsAmount = message.totalBurnedNeutronsAmount
                ? total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.toJSON(message.totalBurnedNeutronsAmount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalBurnedNeutronsAmountResponse();
        if (object.totalBurnedNeutronsAmount !== undefined && object.totalBurnedNeutronsAmount !== null) {
            message.totalBurnedNeutronsAmount = total_burned_neutrons_amount_js_1.TotalBurnedNeutronsAmount.fromPartial(object.totalBurnedNeutronsAmount);
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map