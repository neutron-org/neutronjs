"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgRemoveScheduleResponse = exports.MsgRemoveSchedule = exports.MsgAddScheduleResponse = exports.MsgAddSchedule = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const schedule_js_1 = require("./schedule.js");
const params_js_1 = require("./params.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.cron";
function createBaseMsgAddSchedule() {
    return {
        authority: "",
        name: "",
        period: BigInt(0),
        msgs: [],
        executionStage: 0,
    };
}
exports.MsgAddSchedule = {
    typeUrl: "/neutron.cron.MsgAddSchedule",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.period !== BigInt(0)) {
            writer.uint32(24).uint64(message.period);
        }
        for (const v of message.msgs) {
            schedule_js_1.MsgExecuteContract.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.executionStage !== 0) {
            writer.uint32(40).int32(message.executionStage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.period = reader.uint64();
                    break;
                case 4:
                    message.msgs.push(schedule_js_1.MsgExecuteContract.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.executionStage = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgAddSchedule();
        if ((0, helpers_js_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if ((0, helpers_js_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_js_1.isSet)(object.period))
            obj.period = BigInt(object.period.toString());
        if (Array.isArray(object?.msgs))
            obj.msgs = object.msgs.map((e) => schedule_js_1.MsgExecuteContract.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.executionStage))
            obj.executionStage = (0, schedule_js_1.executionStageFromJSON)(object.executionStage);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.name !== undefined && (obj.name = message.name);
        message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
        if (message.msgs) {
            obj.msgs = message.msgs.map((e) => (e ? schedule_js_1.MsgExecuteContract.toJSON(e) : undefined));
        }
        else {
            obj.msgs = [];
        }
        message.executionStage !== undefined &&
            (obj.executionStage = (0, schedule_js_1.executionStageToJSON)(message.executionStage));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddSchedule();
        message.authority = object.authority ?? "";
        message.name = object.name ?? "";
        if (object.period !== undefined && object.period !== null) {
            message.period = BigInt(object.period.toString());
        }
        message.msgs = object.msgs?.map((e) => schedule_js_1.MsgExecuteContract.fromPartial(e)) || [];
        message.executionStage = object.executionStage ?? 0;
        return message;
    },
};
function createBaseMsgAddScheduleResponse() {
    return {};
}
exports.MsgAddScheduleResponse = {
    typeUrl: "/neutron.cron.MsgAddScheduleResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddScheduleResponse();
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
        const obj = createBaseMsgAddScheduleResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgAddScheduleResponse();
        return message;
    },
};
function createBaseMsgRemoveSchedule() {
    return {
        authority: "",
        name: "",
    };
}
exports.MsgRemoveSchedule = {
    typeUrl: "/neutron.cron.MsgRemoveSchedule",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRemoveSchedule();
        if ((0, helpers_js_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if ((0, helpers_js_1.isSet)(object.name))
            obj.name = String(object.name);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveSchedule();
        message.authority = object.authority ?? "";
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseMsgRemoveScheduleResponse() {
    return {};
}
exports.MsgRemoveScheduleResponse = {
    typeUrl: "/neutron.cron.MsgRemoveScheduleResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveScheduleResponse();
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
        const obj = createBaseMsgRemoveScheduleResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRemoveScheduleResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/neutron.cron.MsgUpdateParams",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
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
        const obj = createBaseMsgUpdateParams();
        if ((0, helpers_js_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/neutron.cron.MsgUpdateParamsResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const obj = createBaseMsgUpdateParamsResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
};
//# sourceMappingURL=tx.js.map