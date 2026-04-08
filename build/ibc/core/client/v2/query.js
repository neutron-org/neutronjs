"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryConfigResponse = exports.QueryConfigRequest = exports.QueryCounterpartyInfoResponse = exports.QueryCounterpartyInfoRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const counterparty_js_1 = require("./counterparty.js");
const config_js_1 = require("./config.js");
const binary_js_1 = require("../../../../binary.js");
const helpers_js_1 = require("../../../../helpers.js");
exports.protobufPackage = "ibc.core.client.v2";
function createBaseQueryCounterpartyInfoRequest() {
    return {
        clientId: "",
    };
}
exports.QueryCounterpartyInfoRequest = {
    typeUrl: "/ibc.core.client.v2.QueryCounterpartyInfoRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCounterpartyInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCounterpartyInfoRequest();
        if ((0, helpers_js_1.isSet)(object.clientId))
            obj.clientId = String(object.clientId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCounterpartyInfoRequest();
        message.clientId = object.clientId ?? "";
        return message;
    },
};
function createBaseQueryCounterpartyInfoResponse() {
    return {
        counterpartyInfo: undefined,
    };
}
exports.QueryCounterpartyInfoResponse = {
    typeUrl: "/ibc.core.client.v2.QueryCounterpartyInfoResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.counterpartyInfo !== undefined) {
            counterparty_js_1.CounterpartyInfo.encode(message.counterpartyInfo, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCounterpartyInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.counterpartyInfo = counterparty_js_1.CounterpartyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryCounterpartyInfoResponse();
        if ((0, helpers_js_1.isSet)(object.counterpartyInfo))
            obj.counterpartyInfo = counterparty_js_1.CounterpartyInfo.fromJSON(object.counterpartyInfo);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.counterpartyInfo !== undefined &&
            (obj.counterpartyInfo = message.counterpartyInfo
                ? counterparty_js_1.CounterpartyInfo.toJSON(message.counterpartyInfo)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCounterpartyInfoResponse();
        if (object.counterpartyInfo !== undefined && object.counterpartyInfo !== null) {
            message.counterpartyInfo = counterparty_js_1.CounterpartyInfo.fromPartial(object.counterpartyInfo);
        }
        return message;
    },
};
function createBaseQueryConfigRequest() {
    return {
        clientId: "",
    };
}
exports.QueryConfigRequest = {
    typeUrl: "/ibc.core.client.v2.QueryConfigRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConfigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryConfigRequest();
        if ((0, helpers_js_1.isSet)(object.clientId))
            obj.clientId = String(object.clientId);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConfigRequest();
        message.clientId = object.clientId ?? "";
        return message;
    },
};
function createBaseQueryConfigResponse() {
    return {
        config: undefined,
    };
}
exports.QueryConfigResponse = {
    typeUrl: "/ibc.core.client.v2.QueryConfigResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.config !== undefined) {
            config_js_1.Config.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = config_js_1.Config.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryConfigResponse();
        if ((0, helpers_js_1.isSet)(object.config))
            obj.config = config_js_1.Config.fromJSON(object.config);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? config_js_1.Config.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConfigResponse();
        if (object.config !== undefined && object.config !== null) {
            message.config = config_js_1.Config.fromPartial(object.config);
        }
        return message;
    },
};
//# sourceMappingURL=query.js.map