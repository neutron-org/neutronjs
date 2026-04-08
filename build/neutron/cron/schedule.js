"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCount = exports.MsgExecuteContract = exports.Schedule = exports.ExecutionStage = exports.protobufPackage = void 0;
exports.executionStageFromJSON = executionStageFromJSON;
exports.executionStageToJSON = executionStageToJSON;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.cron";
/** Defines when messages will be executed in the block */
var ExecutionStage;
(function (ExecutionStage) {
    /** EXECUTION_STAGE_END_BLOCKER - Execution at the end of the block */
    ExecutionStage[ExecutionStage["EXECUTION_STAGE_END_BLOCKER"] = 0] = "EXECUTION_STAGE_END_BLOCKER";
    /** EXECUTION_STAGE_BEGIN_BLOCKER - Execution at the beginning of the block */
    ExecutionStage[ExecutionStage["EXECUTION_STAGE_BEGIN_BLOCKER"] = 1] = "EXECUTION_STAGE_BEGIN_BLOCKER";
    ExecutionStage[ExecutionStage["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ExecutionStage || (exports.ExecutionStage = ExecutionStage = {}));
function executionStageFromJSON(object) {
    switch (object) {
        case 0:
        case "EXECUTION_STAGE_END_BLOCKER":
            return ExecutionStage.EXECUTION_STAGE_END_BLOCKER;
        case 1:
        case "EXECUTION_STAGE_BEGIN_BLOCKER":
            return ExecutionStage.EXECUTION_STAGE_BEGIN_BLOCKER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ExecutionStage.UNRECOGNIZED;
    }
}
function executionStageToJSON(object) {
    switch (object) {
        case ExecutionStage.EXECUTION_STAGE_END_BLOCKER:
            return "EXECUTION_STAGE_END_BLOCKER";
        case ExecutionStage.EXECUTION_STAGE_BEGIN_BLOCKER:
            return "EXECUTION_STAGE_BEGIN_BLOCKER";
        case ExecutionStage.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseSchedule() {
    return {
        name: "",
        period: BigInt(0),
        msgs: [],
        lastExecuteHeight: BigInt(0),
        executionStage: 0,
    };
}
exports.Schedule = {
    typeUrl: "/neutron.cron.Schedule",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.period !== BigInt(0)) {
            writer.uint32(16).uint64(message.period);
        }
        for (const v of message.msgs) {
            exports.MsgExecuteContract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastExecuteHeight !== BigInt(0)) {
            writer.uint32(32).uint64(message.lastExecuteHeight);
        }
        if (message.executionStage !== 0) {
            writer.uint32(40).int32(message.executionStage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSchedule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                case 3:
                    message.msgs.push(exports.MsgExecuteContract.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.lastExecuteHeight = reader.uint64();
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
        const obj = createBaseSchedule();
        if ((0, helpers_js_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_js_1.isSet)(object.period))
            obj.period = BigInt(object.period.toString());
        if (Array.isArray(object?.msgs))
            obj.msgs = object.msgs.map((e) => exports.MsgExecuteContract.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.lastExecuteHeight))
            obj.lastExecuteHeight = BigInt(object.lastExecuteHeight.toString());
        if ((0, helpers_js_1.isSet)(object.executionStage))
            obj.executionStage = executionStageFromJSON(object.executionStage);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
        if (message.msgs) {
            obj.msgs = message.msgs.map((e) => (e ? exports.MsgExecuteContract.toJSON(e) : undefined));
        }
        else {
            obj.msgs = [];
        }
        message.lastExecuteHeight !== undefined &&
            (obj.lastExecuteHeight = (message.lastExecuteHeight || BigInt(0)).toString());
        message.executionStage !== undefined &&
            (obj.executionStage = executionStageToJSON(message.executionStage));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSchedule();
        message.name = object.name ?? "";
        if (object.period !== undefined && object.period !== null) {
            message.period = BigInt(object.period.toString());
        }
        message.msgs = object.msgs?.map((e) => exports.MsgExecuteContract.fromPartial(e)) || [];
        if (object.lastExecuteHeight !== undefined && object.lastExecuteHeight !== null) {
            message.lastExecuteHeight = BigInt(object.lastExecuteHeight.toString());
        }
        message.executionStage = object.executionStage ?? 0;
        return message;
    },
};
function createBaseMsgExecuteContract() {
    return {
        contract: "",
        msg: "",
    };
}
exports.MsgExecuteContract = {
    typeUrl: "/neutron.cron.MsgExecuteContract",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.contract !== "") {
            writer.uint32(10).string(message.contract);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract = reader.string();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgExecuteContract();
        if ((0, helpers_js_1.isSet)(object.contract))
            obj.contract = String(object.contract);
        if ((0, helpers_js_1.isSet)(object.msg))
            obj.msg = String(object.msg);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.contract !== undefined && (obj.contract = message.contract);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExecuteContract();
        message.contract = object.contract ?? "";
        message.msg = object.msg ?? "";
        return message;
    },
};
function createBaseScheduleCount() {
    return {
        count: 0,
    };
}
exports.ScheduleCount = {
    typeUrl: "/neutron.cron.ScheduleCount",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.count !== 0) {
            writer.uint32(8).int32(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScheduleCount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseScheduleCount();
        if ((0, helpers_js_1.isSet)(object.count))
            obj.count = Number(object.count);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.count !== undefined && (obj.count = Math.round(message.count));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseScheduleCount();
        message.count = object.count ?? 0;
        return message;
    },
};
//# sourceMappingURL=schedule.js.map