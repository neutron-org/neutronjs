"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSubmitEvidenceResponse = exports.MsgSubmitEvidence = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const any_js_1 = require("../../../google/protobuf/any.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.evidence.v1beta1";
function createBaseMsgSubmitEvidence() {
    return {
        submitter: "",
        evidence: undefined,
    };
}
exports.MsgSubmitEvidence = {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.submitter !== "") {
            writer.uint32(10).string(message.submitter);
        }
        if (message.evidence !== undefined) {
            any_js_1.Any.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.submitter = reader.string();
                    break;
                case 2:
                    message.evidence = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSubmitEvidence();
        if ((0, helpers_js_1.isSet)(object.submitter))
            obj.submitter = String(object.submitter);
        if ((0, helpers_js_1.isSet)(object.evidence))
            obj.evidence = any_js_1.Any.fromJSON(object.evidence);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.submitter !== undefined && (obj.submitter = message.submitter);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence ? any_js_1.Any.toJSON(message.evidence) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitEvidence();
        message.submitter = object.submitter ?? "";
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = any_js_1.Any.fromPartial(object.evidence);
        }
        return message;
    },
};
function createBaseMsgSubmitEvidenceResponse() {
    return {
        hash: new Uint8Array(),
    };
}
exports.MsgSubmitEvidenceResponse = {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitEvidenceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    message.hash = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSubmitEvidenceResponse();
        if ((0, helpers_js_1.isSet)(object.hash))
            obj.hash = (0, helpers_js_1.bytesFromBase64)(object.hash);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined &&
            (obj.hash = (0, helpers_js_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitEvidenceResponse();
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
};
//# sourceMappingURL=tx.js.map