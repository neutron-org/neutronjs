"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const params_js_1 = require("../../../tendermint/types/params.js");
const binary_js_1 = require("../../../binary.js");
const helpers_js_1 = require("../../../helpers.js");
exports.protobufPackage = "cosmos.consensus.v1";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        block: undefined,
        evidence: undefined,
        validator: undefined,
        abci: undefined,
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/cosmos.consensus.v1.MsgUpdateParams",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.block !== undefined) {
            params_js_1.BlockParams.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            params_js_1.EvidenceParams.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            params_js_1.ValidatorParams.encode(message.validator, writer.uint32(34).fork()).ldelim();
        }
        if (message.abci !== undefined) {
            params_js_1.ABCIParams.encode(message.abci, writer.uint32(42).fork()).ldelim();
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
                    message.block = params_js_1.BlockParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = params_js_1.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validator = params_js_1.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.abci = params_js_1.ABCIParams.decode(reader, reader.uint32());
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
        if ((0, helpers_js_1.isSet)(object.block))
            obj.block = params_js_1.BlockParams.fromJSON(object.block);
        if ((0, helpers_js_1.isSet)(object.evidence))
            obj.evidence = params_js_1.EvidenceParams.fromJSON(object.evidence);
        if ((0, helpers_js_1.isSet)(object.validator))
            obj.validator = params_js_1.ValidatorParams.fromJSON(object.validator);
        if ((0, helpers_js_1.isSet)(object.abci))
            obj.abci = params_js_1.ABCIParams.fromJSON(object.abci);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.block !== undefined &&
            (obj.block = message.block ? params_js_1.BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence ? params_js_1.EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined &&
            (obj.validator = message.validator ? params_js_1.ValidatorParams.toJSON(message.validator) : undefined);
        message.abci !== undefined && (obj.abci = message.abci ? params_js_1.ABCIParams.toJSON(message.abci) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        if (object.block !== undefined && object.block !== null) {
            message.block = params_js_1.BlockParams.fromPartial(object.block);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = params_js_1.EvidenceParams.fromPartial(object.evidence);
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = params_js_1.ValidatorParams.fromPartial(object.validator);
        }
        if (object.abci !== undefined && object.abci !== null) {
            message.abci = params_js_1.ABCIParams.fromPartial(object.abci);
        }
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/cosmos.consensus.v1.MsgUpdateParamsResponse",
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