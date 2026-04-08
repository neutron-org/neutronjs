"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HookSubscriptions = exports.HookType = exports.protobufPackage = void 0;
exports.hookTypeFromJSON = hookTypeFromJSON;
exports.hookTypeToJSON = hookTypeToJSON;
//@ts-nocheck
/* eslint-disable */
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.harpoon";
/** Hook types that can be subscribed to. */
var HookType;
(function (HookType) {
    HookType[HookType["HOOK_TYPE_UNSPECIFIED"] = 0] = "HOOK_TYPE_UNSPECIFIED";
    /** HOOK_TYPE_AFTER_VALIDATOR_CREATED - Triggered after validator is created */
    HookType[HookType["HOOK_TYPE_AFTER_VALIDATOR_CREATED"] = 1] = "HOOK_TYPE_AFTER_VALIDATOR_CREATED";
    /** HOOK_TYPE_BEFORE_VALIDATOR_MODIFIED - Triggered before validator is modified */
    HookType[HookType["HOOK_TYPE_BEFORE_VALIDATOR_MODIFIED"] = 2] = "HOOK_TYPE_BEFORE_VALIDATOR_MODIFIED";
    /** HOOK_TYPE_AFTER_VALIDATOR_REMOVED - Triggered after validator is removed */
    HookType[HookType["HOOK_TYPE_AFTER_VALIDATOR_REMOVED"] = 3] = "HOOK_TYPE_AFTER_VALIDATOR_REMOVED";
    /** HOOK_TYPE_AFTER_VALIDATOR_BONDED - Triggered after validator is bonded */
    HookType[HookType["HOOK_TYPE_AFTER_VALIDATOR_BONDED"] = 4] = "HOOK_TYPE_AFTER_VALIDATOR_BONDED";
    /** HOOK_TYPE_AFTER_VALIDATOR_BEGIN_UNBONDING - Triggered after validator begins unbonding */
    HookType[HookType["HOOK_TYPE_AFTER_VALIDATOR_BEGIN_UNBONDING"] = 5] = "HOOK_TYPE_AFTER_VALIDATOR_BEGIN_UNBONDING";
    /** HOOK_TYPE_BEFORE_DELEGATION_CREATED - Triggered before delegation is created */
    HookType[HookType["HOOK_TYPE_BEFORE_DELEGATION_CREATED"] = 6] = "HOOK_TYPE_BEFORE_DELEGATION_CREATED";
    /** HOOK_TYPE_BEFORE_DELEGATION_SHARES_MODIFIED - Triggered before delegation's shares are modified */
    HookType[HookType["HOOK_TYPE_BEFORE_DELEGATION_SHARES_MODIFIED"] = 7] = "HOOK_TYPE_BEFORE_DELEGATION_SHARES_MODIFIED";
    /** HOOK_TYPE_BEFORE_DELEGATION_REMOVED - Triggered before delegation is removed */
    HookType[HookType["HOOK_TYPE_BEFORE_DELEGATION_REMOVED"] = 8] = "HOOK_TYPE_BEFORE_DELEGATION_REMOVED";
    /** HOOK_TYPE_AFTER_DELEGATION_MODIFIED - Triggered after delegation is modified */
    HookType[HookType["HOOK_TYPE_AFTER_DELEGATION_MODIFIED"] = 9] = "HOOK_TYPE_AFTER_DELEGATION_MODIFIED";
    /** HOOK_TYPE_BEFORE_VALIDATOR_SLASHED - Triggered before validator is slashed */
    HookType[HookType["HOOK_TYPE_BEFORE_VALIDATOR_SLASHED"] = 10] = "HOOK_TYPE_BEFORE_VALIDATOR_SLASHED";
    /** HOOK_TYPE_AFTER_UNBONDING_INITIATED - Triggered after unbonding is initiated */
    HookType[HookType["HOOK_TYPE_AFTER_UNBONDING_INITIATED"] = 11] = "HOOK_TYPE_AFTER_UNBONDING_INITIATED";
    HookType[HookType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HookType || (exports.HookType = HookType = {}));
function hookTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "HOOK_TYPE_UNSPECIFIED":
            return HookType.HOOK_TYPE_UNSPECIFIED;
        case 1:
        case "HOOK_TYPE_AFTER_VALIDATOR_CREATED":
            return HookType.HOOK_TYPE_AFTER_VALIDATOR_CREATED;
        case 2:
        case "HOOK_TYPE_BEFORE_VALIDATOR_MODIFIED":
            return HookType.HOOK_TYPE_BEFORE_VALIDATOR_MODIFIED;
        case 3:
        case "HOOK_TYPE_AFTER_VALIDATOR_REMOVED":
            return HookType.HOOK_TYPE_AFTER_VALIDATOR_REMOVED;
        case 4:
        case "HOOK_TYPE_AFTER_VALIDATOR_BONDED":
            return HookType.HOOK_TYPE_AFTER_VALIDATOR_BONDED;
        case 5:
        case "HOOK_TYPE_AFTER_VALIDATOR_BEGIN_UNBONDING":
            return HookType.HOOK_TYPE_AFTER_VALIDATOR_BEGIN_UNBONDING;
        case 6:
        case "HOOK_TYPE_BEFORE_DELEGATION_CREATED":
            return HookType.HOOK_TYPE_BEFORE_DELEGATION_CREATED;
        case 7:
        case "HOOK_TYPE_BEFORE_DELEGATION_SHARES_MODIFIED":
            return HookType.HOOK_TYPE_BEFORE_DELEGATION_SHARES_MODIFIED;
        case 8:
        case "HOOK_TYPE_BEFORE_DELEGATION_REMOVED":
            return HookType.HOOK_TYPE_BEFORE_DELEGATION_REMOVED;
        case 9:
        case "HOOK_TYPE_AFTER_DELEGATION_MODIFIED":
            return HookType.HOOK_TYPE_AFTER_DELEGATION_MODIFIED;
        case 10:
        case "HOOK_TYPE_BEFORE_VALIDATOR_SLASHED":
            return HookType.HOOK_TYPE_BEFORE_VALIDATOR_SLASHED;
        case 11:
        case "HOOK_TYPE_AFTER_UNBONDING_INITIATED":
            return HookType.HOOK_TYPE_AFTER_UNBONDING_INITIATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HookType.UNRECOGNIZED;
    }
}
function hookTypeToJSON(object) {
    switch (object) {
        case HookType.HOOK_TYPE_UNSPECIFIED:
            return "HOOK_TYPE_UNSPECIFIED";
        case HookType.HOOK_TYPE_AFTER_VALIDATOR_CREATED:
            return "HOOK_TYPE_AFTER_VALIDATOR_CREATED";
        case HookType.HOOK_TYPE_BEFORE_VALIDATOR_MODIFIED:
            return "HOOK_TYPE_BEFORE_VALIDATOR_MODIFIED";
        case HookType.HOOK_TYPE_AFTER_VALIDATOR_REMOVED:
            return "HOOK_TYPE_AFTER_VALIDATOR_REMOVED";
        case HookType.HOOK_TYPE_AFTER_VALIDATOR_BONDED:
            return "HOOK_TYPE_AFTER_VALIDATOR_BONDED";
        case HookType.HOOK_TYPE_AFTER_VALIDATOR_BEGIN_UNBONDING:
            return "HOOK_TYPE_AFTER_VALIDATOR_BEGIN_UNBONDING";
        case HookType.HOOK_TYPE_BEFORE_DELEGATION_CREATED:
            return "HOOK_TYPE_BEFORE_DELEGATION_CREATED";
        case HookType.HOOK_TYPE_BEFORE_DELEGATION_SHARES_MODIFIED:
            return "HOOK_TYPE_BEFORE_DELEGATION_SHARES_MODIFIED";
        case HookType.HOOK_TYPE_BEFORE_DELEGATION_REMOVED:
            return "HOOK_TYPE_BEFORE_DELEGATION_REMOVED";
        case HookType.HOOK_TYPE_AFTER_DELEGATION_MODIFIED:
            return "HOOK_TYPE_AFTER_DELEGATION_MODIFIED";
        case HookType.HOOK_TYPE_BEFORE_VALIDATOR_SLASHED:
            return "HOOK_TYPE_BEFORE_VALIDATOR_SLASHED";
        case HookType.HOOK_TYPE_AFTER_UNBONDING_INITIATED:
            return "HOOK_TYPE_AFTER_UNBONDING_INITIATED";
        case HookType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseHookSubscriptions() {
    return {
        hookType: 0,
        contractAddresses: [],
    };
}
exports.HookSubscriptions = {
    typeUrl: "/neutron.harpoon.HookSubscriptions",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.hookType !== 0) {
            writer.uint32(8).int32(message.hookType);
        }
        for (const v of message.contractAddresses) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHookSubscriptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hookType = reader.int32();
                    break;
                case 2:
                    message.contractAddresses.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseHookSubscriptions();
        if ((0, helpers_js_1.isSet)(object.hookType))
            obj.hookType = hookTypeFromJSON(object.hookType);
        if (Array.isArray(object?.contractAddresses))
            obj.contractAddresses = object.contractAddresses.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.hookType !== undefined && (obj.hookType = hookTypeToJSON(message.hookType));
        if (message.contractAddresses) {
            obj.contractAddresses = message.contractAddresses.map((e) => e);
        }
        else {
            obj.contractAddresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHookSubscriptions();
        message.hookType = object.hookType ?? 0;
        message.contractAddresses = object.contractAddresses?.map((e) => e) || [];
        return message;
    },
};
//# sourceMappingURL=hooks.js.map