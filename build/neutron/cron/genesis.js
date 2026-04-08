"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const schedule_js_1 = require("./schedule.js");
const params_js_1 = require("./params.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.cron";
function createBaseGenesisState() {
    return {
        scheduleList: [],
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.GenesisState = {
    typeUrl: "/neutron.cron.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.scheduleList) {
            schedule_js_1.Schedule.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                case 2:
                    message.scheduleList.push(schedule_js_1.Schedule.decode(reader, reader.uint32()));
                    break;
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
        const obj = createBaseGenesisState();
        if (Array.isArray(object?.scheduleList))
            obj.scheduleList = object.scheduleList.map((e) => schedule_js_1.Schedule.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.scheduleList) {
            obj.scheduleList = message.scheduleList.map((e) => (e ? schedule_js_1.Schedule.toJSON(e) : undefined));
        }
        else {
            obj.scheduleList = [];
        }
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.scheduleList = object.scheduleList?.map((e) => schedule_js_1.Schedule.fromPartial(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
//# sourceMappingURL=genesis.js.map