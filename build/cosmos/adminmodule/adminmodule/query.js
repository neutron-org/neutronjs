"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryArchivedProposalsLegacyResponse = exports.QueryArchivedProposalsResponse = exports.QueryProposalsResponse = exports.QueryArchivedProposalsLegacyRequest = exports.QueryArchivedProposalsRequest = exports.QueryAdminsResponse = exports.QueryAdminsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const gov_js_1 = require("../../gov/v1/gov.js");
const gov_js_2 = require("../../gov/v1beta1/gov.js");
const binary_js_1 = require("../../../binary.js");
exports.protobufPackage = "cosmos.adminmodule.adminmodule";
function createBaseQueryAdminsRequest() {
    return {};
}
exports.QueryAdminsRequest = {
    typeUrl: "/cosmos.adminmodule.adminmodule.QueryAdminsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAdminsRequest();
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
        const obj = createBaseQueryAdminsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryAdminsRequest();
        return message;
    },
};
function createBaseQueryAdminsResponse() {
    return {
        admins: [],
    };
}
exports.QueryAdminsResponse = {
    typeUrl: "/cosmos.adminmodule.adminmodule.QueryAdminsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.admins) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAdminsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admins.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryAdminsResponse();
        if (Array.isArray(object?.admins))
            obj.admins = object.admins.map((e) => String(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.admins) {
            obj.admins = message.admins.map((e) => e);
        }
        else {
            obj.admins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAdminsResponse();
        message.admins = object.admins?.map((e) => e) || [];
        return message;
    },
};
function createBaseQueryArchivedProposalsRequest() {
    return {};
}
exports.QueryArchivedProposalsRequest = {
    typeUrl: "/cosmos.adminmodule.adminmodule.QueryArchivedProposalsRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryArchivedProposalsRequest();
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
        const obj = createBaseQueryArchivedProposalsRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryArchivedProposalsRequest();
        return message;
    },
};
function createBaseQueryArchivedProposalsLegacyRequest() {
    return {};
}
exports.QueryArchivedProposalsLegacyRequest = {
    typeUrl: "/cosmos.adminmodule.adminmodule.QueryArchivedProposalsLegacyRequest",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryArchivedProposalsLegacyRequest();
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
        const obj = createBaseQueryArchivedProposalsLegacyRequest();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryArchivedProposalsLegacyRequest();
        return message;
    },
};
function createBaseQueryProposalsResponse() {
    return {
        proposals: [],
    };
}
exports.QueryProposalsResponse = {
    typeUrl: "/cosmos.adminmodule.adminmodule.QueryProposalsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.proposals) {
            gov_js_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(gov_js_1.Proposal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryProposalsResponse();
        if (Array.isArray(object?.proposals))
            obj.proposals = object.proposals.map((e) => gov_js_1.Proposal.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => (e ? gov_js_1.Proposal.toJSON(e) : undefined));
        }
        else {
            obj.proposals = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsResponse();
        message.proposals = object.proposals?.map((e) => gov_js_1.Proposal.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryArchivedProposalsResponse() {
    return {
        proposals: [],
    };
}
exports.QueryArchivedProposalsResponse = {
    typeUrl: "/cosmos.adminmodule.adminmodule.QueryArchivedProposalsResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.proposals) {
            gov_js_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryArchivedProposalsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(gov_js_1.Proposal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryArchivedProposalsResponse();
        if (Array.isArray(object?.proposals))
            obj.proposals = object.proposals.map((e) => gov_js_1.Proposal.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => (e ? gov_js_1.Proposal.toJSON(e) : undefined));
        }
        else {
            obj.proposals = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryArchivedProposalsResponse();
        message.proposals = object.proposals?.map((e) => gov_js_1.Proposal.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryArchivedProposalsLegacyResponse() {
    return {
        proposalsLegacy: [],
    };
}
exports.QueryArchivedProposalsLegacyResponse = {
    typeUrl: "/cosmos.adminmodule.adminmodule.QueryArchivedProposalsLegacyResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.proposalsLegacy) {
            gov_js_2.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryArchivedProposalsLegacyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalsLegacy.push(gov_js_2.Proposal.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryArchivedProposalsLegacyResponse();
        if (Array.isArray(object?.proposalsLegacy))
            obj.proposalsLegacy = object.proposalsLegacy.map((e) => gov_js_2.Proposal.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.proposalsLegacy) {
            obj.proposalsLegacy = message.proposalsLegacy.map((e) => (e ? gov_js_2.Proposal.toJSON(e) : undefined));
        }
        else {
            obj.proposalsLegacy = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryArchivedProposalsLegacyResponse();
        message.proposalsLegacy = object.proposalsLegacy?.map((e) => gov_js_2.Proposal.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=query.js.map