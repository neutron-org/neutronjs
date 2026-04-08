"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HookSubscription = exports.MsgManageHookSubscriptionResponse = exports.MsgManageHookSubscription = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const hooks_js_1 = require("./hooks.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.harpoon";
function createBaseMsgManageHookSubscription() {
    return {
        authority: "",
        hookSubscription: undefined,
    };
}
exports.MsgManageHookSubscription = {
    typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.hookSubscription !== undefined) {
            exports.HookSubscription.encode(message.hookSubscription, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgManageHookSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.hookSubscription = exports.HookSubscription.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgManageHookSubscription();
        if ((0, helpers_js_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if ((0, helpers_js_1.isSet)(object.hookSubscription))
            obj.hookSubscription = exports.HookSubscription.fromJSON(object.hookSubscription);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.hookSubscription !== undefined &&
            (obj.hookSubscription = message.hookSubscription
                ? exports.HookSubscription.toJSON(message.hookSubscription)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgManageHookSubscription();
        message.authority = object.authority ?? "";
        if (object.hookSubscription !== undefined && object.hookSubscription !== null) {
            message.hookSubscription = exports.HookSubscription.fromPartial(object.hookSubscription);
        }
        return message;
    },
};
function createBaseMsgManageHookSubscriptionResponse() {
    return {};
}
exports.MsgManageHookSubscriptionResponse = {
    typeUrl: "/neutron.harpoon.MsgManageHookSubscriptionResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgManageHookSubscriptionResponse();
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
        const obj = createBaseMsgManageHookSubscriptionResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgManageHookSubscriptionResponse();
        return message;
    },
};
function createBaseHookSubscription() {
    return {
        contractAddress: "",
        hooks: [],
    };
}
exports.HookSubscription = {
    typeUrl: "/neutron.harpoon.HookSubscription",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        writer.uint32(26).fork();
        for (const v of message.hooks) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHookSubscription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.contractAddress = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.hooks.push(reader.int32());
                        }
                    }
                    else {
                        message.hooks.push(reader.int32());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseHookSubscription();
        if ((0, helpers_js_1.isSet)(object.contractAddress))
            obj.contractAddress = String(object.contractAddress);
        if (Array.isArray(object?.hooks))
            obj.hooks = object.hooks.map((e) => (0, hooks_js_1.hookTypeFromJSON)(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        if (message.hooks) {
            obj.hooks = message.hooks.map((e) => (0, hooks_js_1.hookTypeToJSON)(e));
        }
        else {
            obj.hooks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHookSubscription();
        message.contractAddress = object.contractAddress ?? "";
        message.hooks = object.hooks?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=tx.js.map