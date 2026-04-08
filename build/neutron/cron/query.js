"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySchedulesResponse = exports.QuerySchedulesRequest = exports.QueryGetScheduleResponse = exports.QueryGetScheduleRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const pagination_js_1 = require("../../cosmos/base/query/v1beta1/pagination.js");
const params_js_1 = require("./params.js");
const schedule_js_1 = require("./schedule.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.cron";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/neutron.cron.QueryParamsRequest",
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
    typeUrl: "/neutron.cron.QueryParamsResponse",
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
function createBaseQueryGetScheduleRequest() {
    return {
        name: "",
    };
}
exports.QueryGetScheduleRequest = {
    typeUrl: "/neutron.cron.QueryGetScheduleRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetScheduleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const obj = createBaseQueryGetScheduleRequest();
        if ((0, helpers_js_1.isSet)(object.name))
            obj.name = String(object.name);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetScheduleRequest();
        message.name = object.name ?? "";
        return message;
    },
};
function createBaseQueryGetScheduleResponse() {
    return {
        schedule: schedule_js_1.Schedule.fromPartial({}),
    };
}
exports.QueryGetScheduleResponse = {
    typeUrl: "/neutron.cron.QueryGetScheduleResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.schedule !== undefined) {
            schedule_js_1.Schedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetScheduleResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schedule = schedule_js_1.Schedule.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryGetScheduleResponse();
        if ((0, helpers_js_1.isSet)(object.schedule))
            obj.schedule = schedule_js_1.Schedule.fromJSON(object.schedule);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.schedule !== undefined &&
            (obj.schedule = message.schedule ? schedule_js_1.Schedule.toJSON(message.schedule) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetScheduleResponse();
        if (object.schedule !== undefined && object.schedule !== null) {
            message.schedule = schedule_js_1.Schedule.fromPartial(object.schedule);
        }
        return message;
    },
};
function createBaseQuerySchedulesRequest() {
    return {
        pagination: undefined,
    };
}
exports.QuerySchedulesRequest = {
    typeUrl: "/neutron.cron.QuerySchedulesRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySchedulesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySchedulesRequest();
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageRequest.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySchedulesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageRequest.fromPartial(object.pagination);
        }
        return message;
    },
};
function createBaseQuerySchedulesResponse() {
    return {
        schedules: [],
        pagination: undefined,
    };
}
exports.QuerySchedulesResponse = {
    typeUrl: "/neutron.cron.QuerySchedulesResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.schedules) {
            schedule_js_1.Schedule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySchedulesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schedules.push(schedule_js_1.Schedule.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQuerySchedulesResponse();
        if (Array.isArray(object?.schedules))
            obj.schedules = object.schedules.map((e) => schedule_js_1.Schedule.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.pagination))
            obj.pagination = pagination_js_1.PageResponse.fromJSON(object.pagination);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.schedules) {
            obj.schedules = message.schedules.map((e) => (e ? schedule_js_1.Schedule.toJSON(e) : undefined));
        }
        else {
            obj.schedules = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySchedulesResponse();
        message.schedules = object.schedules?.map((e) => schedule_js_1.Schedule.fromPartial(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_js_1.PageResponse.fromPartial(object.pagination);
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map