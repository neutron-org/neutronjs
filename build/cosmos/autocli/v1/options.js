"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionalArgDescriptor = exports.FlagOptions = exports.RpcCommandOptions = exports.RpcCommandOptions_FlagOptionsEntry = exports.ServiceCommandDescriptor = exports.ServiceCommandDescriptor_SubCommandsEntry = exports.ModuleOptions = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.autocli.v1";
function createBaseModuleOptions() {
    return {
        tx: undefined,
        query: undefined,
    };
}
exports.ModuleOptions = {
    typeUrl: "/cosmos.autocli.v1.ModuleOptions",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.tx !== undefined) {
            exports.ServiceCommandDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.query !== undefined) {
            exports.ServiceCommandDescriptor.encode(message.query, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = exports.ServiceCommandDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.query = exports.ServiceCommandDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseModuleOptions();
        if ((0, helpers_js_1.isSet)(object.tx))
            obj.tx = exports.ServiceCommandDescriptor.fromJSON(object.tx);
        if ((0, helpers_js_1.isSet)(object.query))
            obj.query = exports.ServiceCommandDescriptor.fromJSON(object.query);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = message.tx ? exports.ServiceCommandDescriptor.toJSON(message.tx) : undefined);
        message.query !== undefined &&
            (obj.query = message.query ? exports.ServiceCommandDescriptor.toJSON(message.query) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleOptions();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = exports.ServiceCommandDescriptor.fromPartial(object.tx);
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = exports.ServiceCommandDescriptor.fromPartial(object.query);
        }
        return message;
    },
};
function createBaseServiceCommandDescriptor_SubCommandsEntry() {
    return {
        key: "",
        value: undefined,
    };
}
exports.ServiceCommandDescriptor_SubCommandsEntry = {
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.ServiceCommandDescriptor.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.ServiceCommandDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseServiceCommandDescriptor_SubCommandsEntry();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = String(object.key);
        if ((0, helpers_js_1.isSet)(object.value))
            obj.value = exports.ServiceCommandDescriptor.fromJSON(object.value);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.ServiceCommandDescriptor.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
        message.key = object.key ?? "";
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.ServiceCommandDescriptor.fromPartial(object.value);
        }
        return message;
    },
};
function createBaseServiceCommandDescriptor() {
    return {
        service: "",
        rpcCommandOptions: [],
        subCommands: {},
        enhanceCustomCommand: false,
        short: "",
    };
}
exports.ServiceCommandDescriptor = {
    typeUrl: "/cosmos.autocli.v1.ServiceCommandDescriptor",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.service !== "") {
            writer.uint32(10).string(message.service);
        }
        for (const v of message.rpcCommandOptions) {
            exports.RpcCommandOptions.encode(v, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.subCommands).forEach(([key, value]) => {
            exports.ServiceCommandDescriptor_SubCommandsEntry.encode({
                key: key,
                value,
            }, writer.uint32(26).fork()).ldelim();
        });
        if (message.enhanceCustomCommand === true) {
            writer.uint32(32).bool(message.enhanceCustomCommand);
        }
        if (message.short !== "") {
            writer.uint32(42).string(message.short);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceCommandDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.service = reader.string();
                    break;
                case 2:
                    message.rpcCommandOptions.push(exports.RpcCommandOptions.decode(reader, reader.uint32()));
                    break;
                case 3:
                    const entry3 = exports.ServiceCommandDescriptor_SubCommandsEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.subCommands[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    message.enhanceCustomCommand = reader.bool();
                    break;
                case 5:
                    message.short = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseServiceCommandDescriptor();
        if ((0, helpers_js_1.isSet)(object.service))
            obj.service = String(object.service);
        if (Array.isArray(object?.rpcCommandOptions))
            obj.rpcCommandOptions = object.rpcCommandOptions.map((e) => exports.RpcCommandOptions.fromJSON(e));
        if ((0, helpers_js_1.isObject)(object.subCommands))
            obj.subCommands = Object.entries(object.subCommands).reduce((acc, [key, value]) => {
                acc[key] = exports.ServiceCommandDescriptor.fromJSON(value);
                return acc;
            }, {});
        if ((0, helpers_js_1.isSet)(object.enhanceCustomCommand))
            obj.enhanceCustomCommand = Boolean(object.enhanceCustomCommand);
        if ((0, helpers_js_1.isSet)(object.short))
            obj.short = String(object.short);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.service !== undefined && (obj.service = message.service);
        if (message.rpcCommandOptions) {
            obj.rpcCommandOptions = message.rpcCommandOptions.map((e) => e ? exports.RpcCommandOptions.toJSON(e) : undefined);
        }
        else {
            obj.rpcCommandOptions = [];
        }
        obj.subCommands = {};
        if (message.subCommands) {
            Object.entries(message.subCommands).forEach(([k, v]) => {
                obj.subCommands[k] = exports.ServiceCommandDescriptor.toJSON(v);
            });
        }
        message.enhanceCustomCommand !== undefined && (obj.enhanceCustomCommand = message.enhanceCustomCommand);
        message.short !== undefined && (obj.short = message.short);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseServiceCommandDescriptor();
        message.service = object.service ?? "";
        message.rpcCommandOptions = object.rpcCommandOptions?.map((e) => exports.RpcCommandOptions.fromPartial(e)) || [];
        message.subCommands = Object.entries(object.subCommands ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.ServiceCommandDescriptor.fromPartial(value);
            }
            return acc;
        }, {});
        message.enhanceCustomCommand = object.enhanceCustomCommand ?? false;
        message.short = object.short ?? "";
        return message;
    },
};
function createBaseRpcCommandOptions_FlagOptionsEntry() {
    return {
        key: "",
        value: undefined,
    };
}
exports.RpcCommandOptions_FlagOptionsEntry = {
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRpcCommandOptions_FlagOptionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.FlagOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRpcCommandOptions_FlagOptionsEntry();
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = String(object.key);
        if ((0, helpers_js_1.isSet)(object.value))
            obj.value = exports.FlagOptions.fromJSON(object.value);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.FlagOptions.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRpcCommandOptions_FlagOptionsEntry();
        message.key = object.key ?? "";
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.FlagOptions.fromPartial(object.value);
        }
        return message;
    },
};
function createBaseRpcCommandOptions() {
    return {
        rpcMethod: "",
        use: "",
        long: "",
        short: "",
        example: "",
        alias: [],
        suggestFor: [],
        deprecated: "",
        version: "",
        flagOptions: {},
        positionalArgs: [],
        skip: false,
        govProposal: false,
    };
}
exports.RpcCommandOptions = {
    typeUrl: "/cosmos.autocli.v1.RpcCommandOptions",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.rpcMethod !== "") {
            writer.uint32(10).string(message.rpcMethod);
        }
        if (message.use !== "") {
            writer.uint32(18).string(message.use);
        }
        if (message.long !== "") {
            writer.uint32(26).string(message.long);
        }
        if (message.short !== "") {
            writer.uint32(34).string(message.short);
        }
        if (message.example !== "") {
            writer.uint32(42).string(message.example);
        }
        for (const v of message.alias) {
            writer.uint32(50).string(v);
        }
        for (const v of message.suggestFor) {
            writer.uint32(58).string(v);
        }
        if (message.deprecated !== "") {
            writer.uint32(66).string(message.deprecated);
        }
        if (message.version !== "") {
            writer.uint32(74).string(message.version);
        }
        Object.entries(message.flagOptions).forEach(([key, value]) => {
            exports.RpcCommandOptions_FlagOptionsEntry.encode({
                key: key,
                value,
            }, writer.uint32(82).fork()).ldelim();
        });
        for (const v of message.positionalArgs) {
            exports.PositionalArgDescriptor.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.skip === true) {
            writer.uint32(96).bool(message.skip);
        }
        if (message.govProposal === true) {
            writer.uint32(104).bool(message.govProposal);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRpcCommandOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rpcMethod = reader.string();
                    break;
                case 2:
                    message.use = reader.string();
                    break;
                case 3:
                    message.long = reader.string();
                    break;
                case 4:
                    message.short = reader.string();
                    break;
                case 5:
                    message.example = reader.string();
                    break;
                case 6:
                    message.alias.push(reader.string());
                    break;
                case 7:
                    message.suggestFor.push(reader.string());
                    break;
                case 8:
                    message.deprecated = reader.string();
                    break;
                case 9:
                    message.version = reader.string();
                    break;
                case 10:
                    const entry10 = exports.RpcCommandOptions_FlagOptionsEntry.decode(reader, reader.uint32());
                    if (entry10.value !== undefined) {
                        message.flagOptions[entry10.key] = entry10.value;
                    }
                    break;
                case 11:
                    message.positionalArgs.push(exports.PositionalArgDescriptor.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.skip = reader.bool();
                    break;
                case 13:
                    message.govProposal = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRpcCommandOptions();
        if ((0, helpers_js_1.isSet)(object.rpcMethod))
            obj.rpcMethod = String(object.rpcMethod);
        if ((0, helpers_js_1.isSet)(object.use))
            obj.use = String(object.use);
        if ((0, helpers_js_1.isSet)(object.long))
            obj.long = String(object.long);
        if ((0, helpers_js_1.isSet)(object.short))
            obj.short = String(object.short);
        if ((0, helpers_js_1.isSet)(object.example))
            obj.example = String(object.example);
        if (Array.isArray(object?.alias))
            obj.alias = object.alias.map((e) => String(e));
        if (Array.isArray(object?.suggestFor))
            obj.suggestFor = object.suggestFor.map((e) => String(e));
        if ((0, helpers_js_1.isSet)(object.deprecated))
            obj.deprecated = String(object.deprecated);
        if ((0, helpers_js_1.isSet)(object.version))
            obj.version = String(object.version);
        if ((0, helpers_js_1.isObject)(object.flagOptions))
            obj.flagOptions = Object.entries(object.flagOptions).reduce((acc, [key, value]) => {
                acc[key] = exports.FlagOptions.fromJSON(value);
                return acc;
            }, {});
        if (Array.isArray(object?.positionalArgs))
            obj.positionalArgs = object.positionalArgs.map((e) => exports.PositionalArgDescriptor.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.skip))
            obj.skip = Boolean(object.skip);
        if ((0, helpers_js_1.isSet)(object.govProposal))
            obj.govProposal = Boolean(object.govProposal);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.rpcMethod !== undefined && (obj.rpcMethod = message.rpcMethod);
        message.use !== undefined && (obj.use = message.use);
        message.long !== undefined && (obj.long = message.long);
        message.short !== undefined && (obj.short = message.short);
        message.example !== undefined && (obj.example = message.example);
        if (message.alias) {
            obj.alias = message.alias.map((e) => e);
        }
        else {
            obj.alias = [];
        }
        if (message.suggestFor) {
            obj.suggestFor = message.suggestFor.map((e) => e);
        }
        else {
            obj.suggestFor = [];
        }
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.version !== undefined && (obj.version = message.version);
        obj.flagOptions = {};
        if (message.flagOptions) {
            Object.entries(message.flagOptions).forEach(([k, v]) => {
                obj.flagOptions[k] = exports.FlagOptions.toJSON(v);
            });
        }
        if (message.positionalArgs) {
            obj.positionalArgs = message.positionalArgs.map((e) => e ? exports.PositionalArgDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.positionalArgs = [];
        }
        message.skip !== undefined && (obj.skip = message.skip);
        message.govProposal !== undefined && (obj.govProposal = message.govProposal);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRpcCommandOptions();
        message.rpcMethod = object.rpcMethod ?? "";
        message.use = object.use ?? "";
        message.long = object.long ?? "";
        message.short = object.short ?? "";
        message.example = object.example ?? "";
        message.alias = object.alias?.map((e) => e) || [];
        message.suggestFor = object.suggestFor?.map((e) => e) || [];
        message.deprecated = object.deprecated ?? "";
        message.version = object.version ?? "";
        message.flagOptions = Object.entries(object.flagOptions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.FlagOptions.fromPartial(value);
            }
            return acc;
        }, {});
        message.positionalArgs = object.positionalArgs?.map((e) => exports.PositionalArgDescriptor.fromPartial(e)) || [];
        message.skip = object.skip ?? false;
        message.govProposal = object.govProposal ?? false;
        return message;
    },
};
function createBaseFlagOptions() {
    return {
        name: "",
        shorthand: "",
        usage: "",
        defaultValue: "",
        deprecated: "",
        shorthandDeprecated: "",
        hidden: false,
    };
}
exports.FlagOptions = {
    typeUrl: "/cosmos.autocli.v1.FlagOptions",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.shorthand !== "") {
            writer.uint32(18).string(message.shorthand);
        }
        if (message.usage !== "") {
            writer.uint32(26).string(message.usage);
        }
        if (message.defaultValue !== "") {
            writer.uint32(34).string(message.defaultValue);
        }
        if (message.deprecated !== "") {
            writer.uint32(50).string(message.deprecated);
        }
        if (message.shorthandDeprecated !== "") {
            writer.uint32(58).string(message.shorthandDeprecated);
        }
        if (message.hidden === true) {
            writer.uint32(64).bool(message.hidden);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFlagOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.shorthand = reader.string();
                    break;
                case 3:
                    message.usage = reader.string();
                    break;
                case 4:
                    message.defaultValue = reader.string();
                    break;
                case 6:
                    message.deprecated = reader.string();
                    break;
                case 7:
                    message.shorthandDeprecated = reader.string();
                    break;
                case 8:
                    message.hidden = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseFlagOptions();
        if ((0, helpers_js_1.isSet)(object.name))
            obj.name = String(object.name);
        if ((0, helpers_js_1.isSet)(object.shorthand))
            obj.shorthand = String(object.shorthand);
        if ((0, helpers_js_1.isSet)(object.usage))
            obj.usage = String(object.usage);
        if ((0, helpers_js_1.isSet)(object.defaultValue))
            obj.defaultValue = String(object.defaultValue);
        if ((0, helpers_js_1.isSet)(object.deprecated))
            obj.deprecated = String(object.deprecated);
        if ((0, helpers_js_1.isSet)(object.shorthandDeprecated))
            obj.shorthandDeprecated = String(object.shorthandDeprecated);
        if ((0, helpers_js_1.isSet)(object.hidden))
            obj.hidden = Boolean(object.hidden);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.shorthand !== undefined && (obj.shorthand = message.shorthand);
        message.usage !== undefined && (obj.usage = message.usage);
        message.defaultValue !== undefined && (obj.defaultValue = message.defaultValue);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        message.shorthandDeprecated !== undefined && (obj.shorthandDeprecated = message.shorthandDeprecated);
        message.hidden !== undefined && (obj.hidden = message.hidden);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFlagOptions();
        message.name = object.name ?? "";
        message.shorthand = object.shorthand ?? "";
        message.usage = object.usage ?? "";
        message.defaultValue = object.defaultValue ?? "";
        message.deprecated = object.deprecated ?? "";
        message.shorthandDeprecated = object.shorthandDeprecated ?? "";
        message.hidden = object.hidden ?? false;
        return message;
    },
};
function createBasePositionalArgDescriptor() {
    return {
        protoField: "",
        varargs: false,
        optional: false,
    };
}
exports.PositionalArgDescriptor = {
    typeUrl: "/cosmos.autocli.v1.PositionalArgDescriptor",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.protoField !== "") {
            writer.uint32(10).string(message.protoField);
        }
        if (message.varargs === true) {
            writer.uint32(16).bool(message.varargs);
        }
        if (message.optional === true) {
            writer.uint32(24).bool(message.optional);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePositionalArgDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protoField = reader.string();
                    break;
                case 2:
                    message.varargs = reader.bool();
                    break;
                case 3:
                    message.optional = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePositionalArgDescriptor();
        if ((0, helpers_js_1.isSet)(object.protoField))
            obj.protoField = String(object.protoField);
        if ((0, helpers_js_1.isSet)(object.varargs))
            obj.varargs = Boolean(object.varargs);
        if ((0, helpers_js_1.isSet)(object.optional))
            obj.optional = Boolean(object.optional);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.protoField !== undefined && (obj.protoField = message.protoField);
        message.varargs !== undefined && (obj.varargs = message.varargs);
        message.optional !== undefined && (obj.optional = message.optional);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePositionalArgDescriptor();
        message.protoField = object.protoField ?? "";
        message.varargs = object.varargs ?? false;
        message.optional = object.optional ?? false;
        return message;
    },
};
//# sourceMappingURL=options.js.map