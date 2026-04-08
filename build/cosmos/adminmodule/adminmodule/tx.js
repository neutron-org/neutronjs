"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSubmitProposalResponse = exports.MsgSubmitProposal = exports.MsgSubmitProposalLegacyResponse = exports.MsgSubmitProposalLegacy = exports.MsgAddAdminResponse = exports.MsgAddAdmin = exports.MsgDeleteAdminResponse = exports.MsgDeleteAdmin = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const any_js_1 = require("../../../google/protobuf/any.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.adminmodule.adminmodule";
function createBaseMsgDeleteAdmin() {
    return {
        creator: "",
        admin: "",
    };
}
exports.MsgDeleteAdmin = {
    typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdmin",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgDeleteAdmin();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.admin))
            obj.admin = String(object.admin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.admin !== undefined && (obj.admin = message.admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteAdmin();
        message.creator = object.creator ?? "";
        message.admin = object.admin ?? "";
        return message;
    },
};
function createBaseMsgDeleteAdminResponse() {
    return {};
}
exports.MsgDeleteAdminResponse = {
    typeUrl: "/cosmos.adminmodule.adminmodule.MsgDeleteAdminResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteAdminResponse();
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
        const obj = createBaseMsgDeleteAdminResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDeleteAdminResponse();
        return message;
    },
};
function createBaseMsgAddAdmin() {
    return {
        creator: "",
        admin: "",
    };
}
exports.MsgAddAdmin = {
    typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdmin",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgAddAdmin();
        if ((0, helpers_js_1.isSet)(object.creator))
            obj.creator = String(object.creator);
        if ((0, helpers_js_1.isSet)(object.admin))
            obj.admin = String(object.admin);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.admin !== undefined && (obj.admin = message.admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddAdmin();
        message.creator = object.creator ?? "";
        message.admin = object.admin ?? "";
        return message;
    },
};
function createBaseMsgAddAdminResponse() {
    return {};
}
exports.MsgAddAdminResponse = {
    typeUrl: "/cosmos.adminmodule.adminmodule.MsgAddAdminResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddAdminResponse();
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
        const obj = createBaseMsgAddAdminResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgAddAdminResponse();
        return message;
    },
};
function createBaseMsgSubmitProposalLegacy() {
    return {
        content: undefined,
        proposer: "",
    };
}
exports.MsgSubmitProposalLegacy = {
    typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacy",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.content !== undefined) {
            any_js_1.Any.encode(message.content, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== "") {
            writer.uint32(18).string(message.proposer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalLegacy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.content = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proposer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSubmitProposalLegacy();
        if ((0, helpers_js_1.isSet)(object.content))
            obj.content = any_js_1.Any.fromJSON(object.content);
        if ((0, helpers_js_1.isSet)(object.proposer))
            obj.proposer = String(object.proposer);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.content !== undefined &&
            (obj.content = message.content ? any_js_1.Any.toJSON(message.content) : undefined);
        message.proposer !== undefined && (obj.proposer = message.proposer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalLegacy();
        if (object.content !== undefined && object.content !== null) {
            message.content = any_js_1.Any.fromPartial(object.content);
        }
        message.proposer = object.proposer ?? "";
        return message;
    },
};
function createBaseMsgSubmitProposalLegacyResponse() {
    return {
        proposalId: BigInt(0),
    };
}
exports.MsgSubmitProposalLegacyResponse = {
    typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalLegacyResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalLegacyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSubmitProposalLegacyResponse();
        if ((0, helpers_js_1.isSet)(object.proposalId))
            obj.proposalId = BigInt(object.proposalId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalLegacyResponse();
        if (object.proposalId !== undefined && object.proposalId !== null) {
            message.proposalId = BigInt(object.proposalId.toString());
        }
        return message;
    },
};
function createBaseMsgSubmitProposal() {
    return {
        messages: [],
        proposer: "",
    };
}
exports.MsgSubmitProposal = {
    typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposal",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.messages) {
            any_js_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== "") {
            writer.uint32(18).string(message.proposer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_js_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.proposer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSubmitProposal();
        if (Array.isArray(object?.messages))
            obj.messages = object.messages.map((e) => any_js_1.Any.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.proposer))
            obj.proposer = String(object.proposer);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map((e) => (e ? any_js_1.Any.toJSON(e) : undefined));
        }
        else {
            obj.messages = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.messages = object.messages?.map((e) => any_js_1.Any.fromPartial(e)) || [];
        message.proposer = object.proposer ?? "";
        return message;
    },
};
function createBaseMsgSubmitProposalResponse() {
    return {
        proposalId: BigInt(0),
    };
}
exports.MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.adminmodule.adminmodule.MsgSubmitProposalResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSubmitProposalResponse();
        if ((0, helpers_js_1.isSet)(object.proposalId))
            obj.proposalId = BigInt(object.proposalId.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        if (object.proposalId !== undefined && object.proposalId !== null) {
            message.proposalId = BigInt(object.proposalId.toString());
        }
        return message;
    },
};
//# sourceMappingURL=tx.js.map