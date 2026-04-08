"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextSequenceRecvData = exports.PacketReceiptAbsenceData = exports.PacketAcknowledgementData = exports.PacketCommitmentData = exports.ChannelStateData = exports.ConnectionStateData = exports.ConsensusStateData = exports.ClientStateData = exports.HeaderData = exports.SignBytes = exports.TimestampedSignatureData = exports.SignatureAndData = exports.Misbehaviour = exports.Header = exports.ConsensusState = exports.ClientState = exports.DataType = exports.protobufPackage = void 0;
exports.dataTypeFromJSON = dataTypeFromJSON;
exports.dataTypeToJSON = dataTypeToJSON;
//@ts-nocheck
/* eslint-disable */
const any_js_1 = require("../../../../google/protobuf/any.js");
const connection_js_1 = require("../../../core/connection/v1/connection.js");
const channel_js_1 = require("../../../core/channel/v1/channel.js");
const binary_js_1 = require("../../../../binary.js");
const helpers_js_1 = require("../../../../helpers.js");
exports.protobufPackage = "ibc.lightclients.solomachine.v2";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
var DataType;
(function (DataType) {
    /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
    DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
    DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
    /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
    DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
    /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
    DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
    /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
    DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
    /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
    DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
    /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
    DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
    DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
    DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
    /** DATA_TYPE_HEADER - Data type for header verification */
    DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
    DataType[DataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataType || (exports.DataType = DataType = {}));
function dataTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
            return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "DATA_TYPE_CLIENT_STATE":
            return DataType.DATA_TYPE_CLIENT_STATE;
        case 2:
        case "DATA_TYPE_CONSENSUS_STATE":
            return DataType.DATA_TYPE_CONSENSUS_STATE;
        case 3:
        case "DATA_TYPE_CONNECTION_STATE":
            return DataType.DATA_TYPE_CONNECTION_STATE;
        case 4:
        case "DATA_TYPE_CHANNEL_STATE":
            return DataType.DATA_TYPE_CHANNEL_STATE;
        case 5:
        case "DATA_TYPE_PACKET_COMMITMENT":
            return DataType.DATA_TYPE_PACKET_COMMITMENT;
        case 6:
        case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
            return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
        case 7:
        case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
            return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
        case 8:
        case "DATA_TYPE_NEXT_SEQUENCE_RECV":
            return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
        case 9:
        case "DATA_TYPE_HEADER":
            return DataType.DATA_TYPE_HEADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DataType.UNRECOGNIZED;
    }
}
function dataTypeToJSON(object) {
    switch (object) {
        case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
            return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
        case DataType.DATA_TYPE_CLIENT_STATE:
            return "DATA_TYPE_CLIENT_STATE";
        case DataType.DATA_TYPE_CONSENSUS_STATE:
            return "DATA_TYPE_CONSENSUS_STATE";
        case DataType.DATA_TYPE_CONNECTION_STATE:
            return "DATA_TYPE_CONNECTION_STATE";
        case DataType.DATA_TYPE_CHANNEL_STATE:
            return "DATA_TYPE_CHANNEL_STATE";
        case DataType.DATA_TYPE_PACKET_COMMITMENT:
            return "DATA_TYPE_PACKET_COMMITMENT";
        case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
            return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
        case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
            return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
        case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
            return "DATA_TYPE_NEXT_SEQUENCE_RECV";
        case DataType.DATA_TYPE_HEADER:
            return "DATA_TYPE_HEADER";
        case DataType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseClientState() {
    return {
        sequence: BigInt(0),
        isFrozen: false,
        consensusState: undefined,
        allowUpdateAfterProposal: false,
    };
}
exports.ClientState = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ClientState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.isFrozen === true) {
            writer.uint32(16).bool(message.isFrozen);
        }
        if (message.consensusState !== undefined) {
            exports.ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
        }
        if (message.allowUpdateAfterProposal === true) {
            writer.uint32(32).bool(message.allowUpdateAfterProposal);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.isFrozen = reader.bool();
                    break;
                case 3:
                    message.consensusState = exports.ConsensusState.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.allowUpdateAfterProposal = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseClientState();
        if ((0, helpers_js_1.isSet)(object.sequence))
            obj.sequence = BigInt(object.sequence.toString());
        if ((0, helpers_js_1.isSet)(object.isFrozen))
            obj.isFrozen = Boolean(object.isFrozen);
        if ((0, helpers_js_1.isSet)(object.consensusState))
            obj.consensusState = exports.ConsensusState.fromJSON(object.consensusState);
        if ((0, helpers_js_1.isSet)(object.allowUpdateAfterProposal))
            obj.allowUpdateAfterProposal = Boolean(object.allowUpdateAfterProposal);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.isFrozen !== undefined && (obj.isFrozen = message.isFrozen);
        message.consensusState !== undefined &&
            (obj.consensusState = message.consensusState
                ? exports.ConsensusState.toJSON(message.consensusState)
                : undefined);
        message.allowUpdateAfterProposal !== undefined &&
            (obj.allowUpdateAfterProposal = message.allowUpdateAfterProposal);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence.toString());
        }
        message.isFrozen = object.isFrozen ?? false;
        if (object.consensusState !== undefined && object.consensusState !== null) {
            message.consensusState = exports.ConsensusState.fromPartial(object.consensusState);
        }
        message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
        return message;
    },
};
function createBaseConsensusState() {
    return {
        publicKey: undefined,
        diversifier: "",
        timestamp: BigInt(0),
    };
}
exports.ConsensusState = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.publicKey !== undefined) {
            any_js_1.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.diversifier !== "") {
            writer.uint32(18).string(message.diversifier);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(24).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.diversifier = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseConsensusState();
        if ((0, helpers_js_1.isSet)(object.publicKey))
            obj.publicKey = any_js_1.Any.fromJSON(object.publicKey);
        if ((0, helpers_js_1.isSet)(object.diversifier))
            obj.diversifier = String(object.diversifier);
        if ((0, helpers_js_1.isSet)(object.timestamp))
            obj.timestamp = BigInt(object.timestamp.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.publicKey !== undefined &&
            (obj.publicKey = message.publicKey ? any_js_1.Any.toJSON(message.publicKey) : undefined);
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        if (object.publicKey !== undefined && object.publicKey !== null) {
            message.publicKey = any_js_1.Any.fromPartial(object.publicKey);
        }
        message.diversifier = object.diversifier ?? "";
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp.toString());
        }
        return message;
    },
};
function createBaseHeader() {
    return {
        sequence: BigInt(0),
        timestamp: BigInt(0),
        signature: new Uint8Array(),
        newPublicKey: undefined,
        newDiversifier: "",
    };
}
exports.Header = {
    typeUrl: "/ibc.lightclients.solomachine.v2.Header",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        if (message.newPublicKey !== undefined) {
            any_js_1.Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
        }
        if (message.newDiversifier !== "") {
            writer.uint32(42).string(message.newDiversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                case 4:
                    message.newPublicKey = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.newDiversifier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseHeader();
        if ((0, helpers_js_1.isSet)(object.sequence))
            obj.sequence = BigInt(object.sequence.toString());
        if ((0, helpers_js_1.isSet)(object.timestamp))
            obj.timestamp = BigInt(object.timestamp.toString());
        if ((0, helpers_js_1.isSet)(object.signature))
            obj.signature = (0, helpers_js_1.bytesFromBase64)(object.signature);
        if ((0, helpers_js_1.isSet)(object.newPublicKey))
            obj.newPublicKey = any_js_1.Any.fromJSON(object.newPublicKey);
        if ((0, helpers_js_1.isSet)(object.newDiversifier))
            obj.newDiversifier = String(object.newDiversifier);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        message.signature !== undefined &&
            (obj.signature = (0, helpers_js_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.newPublicKey !== undefined &&
            (obj.newPublicKey = message.newPublicKey ? any_js_1.Any.toJSON(message.newPublicKey) : undefined);
        message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence.toString());
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp.toString());
        }
        message.signature = object.signature ?? new Uint8Array();
        if (object.newPublicKey !== undefined && object.newPublicKey !== null) {
            message.newPublicKey = any_js_1.Any.fromPartial(object.newPublicKey);
        }
        message.newDiversifier = object.newDiversifier ?? "";
        return message;
    },
};
function createBaseMisbehaviour() {
    return {
        clientId: "",
        sequence: BigInt(0),
        signatureOne: undefined,
        signatureTwo: undefined,
    };
}
exports.Misbehaviour = {
    typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.signatureOne !== undefined) {
            exports.SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
        }
        if (message.signatureTwo !== undefined) {
            exports.SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.signatureOne = exports.SignatureAndData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatureTwo = exports.SignatureAndData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMisbehaviour();
        if ((0, helpers_js_1.isSet)(object.clientId))
            obj.clientId = String(object.clientId);
        if ((0, helpers_js_1.isSet)(object.sequence))
            obj.sequence = BigInt(object.sequence.toString());
        if ((0, helpers_js_1.isSet)(object.signatureOne))
            obj.signatureOne = exports.SignatureAndData.fromJSON(object.signatureOne);
        if ((0, helpers_js_1.isSet)(object.signatureTwo))
            obj.signatureTwo = exports.SignatureAndData.fromJSON(object.signatureTwo);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.signatureOne !== undefined &&
            (obj.signatureOne = message.signatureOne ? exports.SignatureAndData.toJSON(message.signatureOne) : undefined);
        message.signatureTwo !== undefined &&
            (obj.signatureTwo = message.signatureTwo ? exports.SignatureAndData.toJSON(message.signatureTwo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.clientId = object.clientId ?? "";
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence.toString());
        }
        if (object.signatureOne !== undefined && object.signatureOne !== null) {
            message.signatureOne = exports.SignatureAndData.fromPartial(object.signatureOne);
        }
        if (object.signatureTwo !== undefined && object.signatureTwo !== null) {
            message.signatureTwo = exports.SignatureAndData.fromPartial(object.signatureTwo);
        }
        return message;
    },
};
function createBaseSignatureAndData() {
    return {
        signature: new Uint8Array(),
        dataType: 0,
        data: new Uint8Array(),
        timestamp: BigInt(0),
    };
}
exports.SignatureAndData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.signature.length !== 0) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.dataType !== 0) {
            writer.uint32(16).int32(message.dataType);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(32).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureAndData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signature = reader.bytes();
                    break;
                case 2:
                    message.dataType = reader.int32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSignatureAndData();
        if ((0, helpers_js_1.isSet)(object.signature))
            obj.signature = (0, helpers_js_1.bytesFromBase64)(object.signature);
        if ((0, helpers_js_1.isSet)(object.dataType))
            obj.dataType = dataTypeFromJSON(object.dataType);
        if ((0, helpers_js_1.isSet)(object.data))
            obj.data = (0, helpers_js_1.bytesFromBase64)(object.data);
        if ((0, helpers_js_1.isSet)(object.timestamp))
            obj.timestamp = BigInt(object.timestamp.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.signature !== undefined &&
            (obj.signature = (0, helpers_js_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
        message.data !== undefined &&
            (obj.data = (0, helpers_js_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignatureAndData();
        message.signature = object.signature ?? new Uint8Array();
        message.dataType = object.dataType ?? 0;
        message.data = object.data ?? new Uint8Array();
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp.toString());
        }
        return message;
    },
};
function createBaseTimestampedSignatureData() {
    return {
        signatureData: new Uint8Array(),
        timestamp: BigInt(0),
    };
}
exports.TimestampedSignatureData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.signatureData.length !== 0) {
            writer.uint32(10).bytes(message.signatureData);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestampedSignatureData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureData = reader.bytes();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseTimestampedSignatureData();
        if ((0, helpers_js_1.isSet)(object.signatureData))
            obj.signatureData = (0, helpers_js_1.bytesFromBase64)(object.signatureData);
        if ((0, helpers_js_1.isSet)(object.timestamp))
            obj.timestamp = BigInt(object.timestamp.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.signatureData !== undefined &&
            (obj.signatureData = (0, helpers_js_1.base64FromBytes)(message.signatureData !== undefined ? message.signatureData : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimestampedSignatureData();
        message.signatureData = object.signatureData ?? new Uint8Array();
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp.toString());
        }
        return message;
    },
};
function createBaseSignBytes() {
    return {
        sequence: BigInt(0),
        timestamp: BigInt(0),
        diversifier: "",
        dataType: 0,
        data: new Uint8Array(),
    };
}
exports.SignBytes = {
    typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.diversifier !== "") {
            writer.uint32(26).string(message.diversifier);
        }
        if (message.dataType !== 0) {
            writer.uint32(32).int32(message.dataType);
        }
        if (message.data.length !== 0) {
            writer.uint32(42).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignBytes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.diversifier = reader.string();
                    break;
                case 4:
                    message.dataType = reader.int32();
                    break;
                case 5:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseSignBytes();
        if ((0, helpers_js_1.isSet)(object.sequence))
            obj.sequence = BigInt(object.sequence.toString());
        if ((0, helpers_js_1.isSet)(object.timestamp))
            obj.timestamp = BigInt(object.timestamp.toString());
        if ((0, helpers_js_1.isSet)(object.diversifier))
            obj.diversifier = String(object.diversifier);
        if ((0, helpers_js_1.isSet)(object.dataType))
            obj.dataType = dataTypeFromJSON(object.dataType);
        if ((0, helpers_js_1.isSet)(object.data))
            obj.data = (0, helpers_js_1.bytesFromBase64)(object.data);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
        message.data !== undefined &&
            (obj.data = (0, helpers_js_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignBytes();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence.toString());
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp.toString());
        }
        message.diversifier = object.diversifier ?? "";
        message.dataType = object.dataType ?? 0;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseHeaderData() {
    return {
        newPubKey: undefined,
        newDiversifier: "",
    };
}
exports.HeaderData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.newPubKey !== undefined) {
            any_js_1.Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.newDiversifier !== "") {
            writer.uint32(18).string(message.newDiversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeaderData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newPubKey = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.newDiversifier = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseHeaderData();
        if ((0, helpers_js_1.isSet)(object.newPubKey))
            obj.newPubKey = any_js_1.Any.fromJSON(object.newPubKey);
        if ((0, helpers_js_1.isSet)(object.newDiversifier))
            obj.newDiversifier = String(object.newDiversifier);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.newPubKey !== undefined &&
            (obj.newPubKey = message.newPubKey ? any_js_1.Any.toJSON(message.newPubKey) : undefined);
        message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeaderData();
        if (object.newPubKey !== undefined && object.newPubKey !== null) {
            message.newPubKey = any_js_1.Any.fromPartial(object.newPubKey);
        }
        message.newDiversifier = object.newDiversifier ?? "";
        return message;
    },
};
function createBaseClientStateData() {
    return {
        path: new Uint8Array(),
        clientState: undefined,
    };
}
exports.ClientStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.clientState !== undefined) {
            any_js_1.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.clientState = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseClientStateData();
        if ((0, helpers_js_1.isSet)(object.path))
            obj.path = (0, helpers_js_1.bytesFromBase64)(object.path);
        if ((0, helpers_js_1.isSet)(object.clientState))
            obj.clientState = any_js_1.Any.fromJSON(object.clientState);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = (0, helpers_js_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.clientState !== undefined &&
            (obj.clientState = message.clientState ? any_js_1.Any.toJSON(message.clientState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientStateData();
        message.path = object.path ?? new Uint8Array();
        if (object.clientState !== undefined && object.clientState !== null) {
            message.clientState = any_js_1.Any.fromPartial(object.clientState);
        }
        return message;
    },
};
function createBaseConsensusStateData() {
    return {
        path: new Uint8Array(),
        consensusState: undefined,
    };
}
exports.ConsensusStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.consensusState !== undefined) {
            any_js_1.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.consensusState = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseConsensusStateData();
        if ((0, helpers_js_1.isSet)(object.path))
            obj.path = (0, helpers_js_1.bytesFromBase64)(object.path);
        if ((0, helpers_js_1.isSet)(object.consensusState))
            obj.consensusState = any_js_1.Any.fromJSON(object.consensusState);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = (0, helpers_js_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.consensusState !== undefined &&
            (obj.consensusState = message.consensusState ? any_js_1.Any.toJSON(message.consensusState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateData();
        message.path = object.path ?? new Uint8Array();
        if (object.consensusState !== undefined && object.consensusState !== null) {
            message.consensusState = any_js_1.Any.fromPartial(object.consensusState);
        }
        return message;
    },
};
function createBaseConnectionStateData() {
    return {
        path: new Uint8Array(),
        connection: undefined,
    };
}
exports.ConnectionStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.connection !== undefined) {
            connection_js_1.ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.connection = connection_js_1.ConnectionEnd.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseConnectionStateData();
        if ((0, helpers_js_1.isSet)(object.path))
            obj.path = (0, helpers_js_1.bytesFromBase64)(object.path);
        if ((0, helpers_js_1.isSet)(object.connection))
            obj.connection = connection_js_1.ConnectionEnd.fromJSON(object.connection);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = (0, helpers_js_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.connection !== undefined &&
            (obj.connection = message.connection ? connection_js_1.ConnectionEnd.toJSON(message.connection) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectionStateData();
        message.path = object.path ?? new Uint8Array();
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = connection_js_1.ConnectionEnd.fromPartial(object.connection);
        }
        return message;
    },
};
function createBaseChannelStateData() {
    return {
        path: new Uint8Array(),
        channel: undefined,
    };
}
exports.ChannelStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.channel !== undefined) {
            channel_js_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChannelStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.channel = channel_js_1.Channel.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseChannelStateData();
        if ((0, helpers_js_1.isSet)(object.path))
            obj.path = (0, helpers_js_1.bytesFromBase64)(object.path);
        if ((0, helpers_js_1.isSet)(object.channel))
            obj.channel = channel_js_1.Channel.fromJSON(object.channel);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = (0, helpers_js_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.channel !== undefined &&
            (obj.channel = message.channel ? channel_js_1.Channel.toJSON(message.channel) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChannelStateData();
        message.path = object.path ?? new Uint8Array();
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = channel_js_1.Channel.fromPartial(object.channel);
        }
        return message;
    },
};
function createBasePacketCommitmentData() {
    return {
        path: new Uint8Array(),
        commitment: new Uint8Array(),
    };
}
exports.PacketCommitmentData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.commitment.length !== 0) {
            writer.uint32(18).bytes(message.commitment);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketCommitmentData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.commitment = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePacketCommitmentData();
        if ((0, helpers_js_1.isSet)(object.path))
            obj.path = (0, helpers_js_1.bytesFromBase64)(object.path);
        if ((0, helpers_js_1.isSet)(object.commitment))
            obj.commitment = (0, helpers_js_1.bytesFromBase64)(object.commitment);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = (0, helpers_js_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.commitment !== undefined &&
            (obj.commitment = (0, helpers_js_1.base64FromBytes)(message.commitment !== undefined ? message.commitment : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketCommitmentData();
        message.path = object.path ?? new Uint8Array();
        message.commitment = object.commitment ?? new Uint8Array();
        return message;
    },
};
function createBasePacketAcknowledgementData() {
    return {
        path: new Uint8Array(),
        acknowledgement: new Uint8Array(),
    };
}
exports.PacketAcknowledgementData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketAcknowledgementData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePacketAcknowledgementData();
        if ((0, helpers_js_1.isSet)(object.path))
            obj.path = (0, helpers_js_1.bytesFromBase64)(object.path);
        if ((0, helpers_js_1.isSet)(object.acknowledgement))
            obj.acknowledgement = (0, helpers_js_1.bytesFromBase64)(object.acknowledgement);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = (0, helpers_js_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.acknowledgement !== undefined &&
            (obj.acknowledgement = (0, helpers_js_1.base64FromBytes)(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketAcknowledgementData();
        message.path = object.path ?? new Uint8Array();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        return message;
    },
};
function createBasePacketReceiptAbsenceData() {
    return {
        path: new Uint8Array(),
    };
}
exports.PacketReceiptAbsenceData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketReceiptAbsenceData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBasePacketReceiptAbsenceData();
        if ((0, helpers_js_1.isSet)(object.path))
            obj.path = (0, helpers_js_1.bytesFromBase64)(object.path);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = (0, helpers_js_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketReceiptAbsenceData();
        message.path = object.path ?? new Uint8Array();
        return message;
    },
};
function createBaseNextSequenceRecvData() {
    return {
        path: new Uint8Array(),
        nextSeqRecv: BigInt(0),
    };
}
exports.NextSequenceRecvData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.nextSeqRecv !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextSeqRecv);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextSequenceRecvData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.nextSeqRecv = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseNextSequenceRecvData();
        if ((0, helpers_js_1.isSet)(object.path))
            obj.path = (0, helpers_js_1.bytesFromBase64)(object.path);
        if ((0, helpers_js_1.isSet)(object.nextSeqRecv))
            obj.nextSeqRecv = BigInt(object.nextSeqRecv.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = (0, helpers_js_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.nextSeqRecv !== undefined && (obj.nextSeqRecv = (message.nextSeqRecv || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNextSequenceRecvData();
        message.path = object.path ?? new Uint8Array();
        if (object.nextSeqRecv !== undefined && object.nextSeqRecv !== null) {
            message.nextSeqRecv = BigInt(object.nextSeqRecv.toString());
        }
        return message;
    },
};
//# sourceMappingURL=solomachine.js.map