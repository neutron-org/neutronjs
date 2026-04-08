"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgUpdateInterchainQueryResponse = exports.MsgUpdateInterchainQueryRequest = exports.MsgRemoveInterchainQueryResponse = exports.MsgRemoveInterchainQueryRequest = exports.MsgSubmitQueryResultResponse = exports.TxValue = exports.Block = exports.StorageValue = exports.QueryResult = exports.MsgSubmitQueryResult = exports.MsgRegisterInterchainQueryResponse = exports.MsgRegisterInterchainQuery = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const genesis_js_1 = require("./genesis.js");
const params_js_1 = require("./params.js");
const proof_js_1 = require("../../tendermint/crypto/proof.js");
const any_js_1 = require("../../google/protobuf/any.js");
const types_js_1 = require("../../tendermint/abci/types.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.interchainqueries";
function createBaseMsgRegisterInterchainQuery() {
    return {
        queryType: "",
        keys: [],
        transactionsFilter: "",
        connectionId: "",
        updatePeriod: BigInt(0),
        sender: "",
    };
}
exports.MsgRegisterInterchainQuery = {
    typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.queryType !== "") {
            writer.uint32(10).string(message.queryType);
        }
        for (const v of message.keys) {
            genesis_js_1.KVKey.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.transactionsFilter !== "") {
            writer.uint32(26).string(message.transactionsFilter);
        }
        if (message.connectionId !== "") {
            writer.uint32(34).string(message.connectionId);
        }
        if (message.updatePeriod !== BigInt(0)) {
            writer.uint32(40).uint64(message.updatePeriod);
        }
        if (message.sender !== "") {
            writer.uint32(50).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryType = reader.string();
                    break;
                case 2:
                    message.keys.push(genesis_js_1.KVKey.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.transactionsFilter = reader.string();
                    break;
                case 4:
                    message.connectionId = reader.string();
                    break;
                case 5:
                    message.updatePeriod = reader.uint64();
                    break;
                case 6:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRegisterInterchainQuery();
        if ((0, helpers_js_1.isSet)(object.queryType))
            obj.queryType = String(object.queryType);
        if (Array.isArray(object?.keys))
            obj.keys = object.keys.map((e) => genesis_js_1.KVKey.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.transactionsFilter))
            obj.transactionsFilter = String(object.transactionsFilter);
        if ((0, helpers_js_1.isSet)(object.connectionId))
            obj.connectionId = String(object.connectionId);
        if ((0, helpers_js_1.isSet)(object.updatePeriod))
            obj.updatePeriod = BigInt(object.updatePeriod.toString());
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.queryType !== undefined && (obj.queryType = message.queryType);
        if (message.keys) {
            obj.keys = message.keys.map((e) => (e ? genesis_js_1.KVKey.toJSON(e) : undefined));
        }
        else {
            obj.keys = [];
        }
        message.transactionsFilter !== undefined && (obj.transactionsFilter = message.transactionsFilter);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.updatePeriod !== undefined && (obj.updatePeriod = (message.updatePeriod || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainQuery();
        message.queryType = object.queryType ?? "";
        message.keys = object.keys?.map((e) => genesis_js_1.KVKey.fromPartial(e)) || [];
        message.transactionsFilter = object.transactionsFilter ?? "";
        message.connectionId = object.connectionId ?? "";
        if (object.updatePeriod !== undefined && object.updatePeriod !== null) {
            message.updatePeriod = BigInt(object.updatePeriod.toString());
        }
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseMsgRegisterInterchainQueryResponse() {
    return {
        id: BigInt(0),
    };
}
exports.MsgRegisterInterchainQueryResponse = {
    typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQueryResponse",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainQueryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRegisterInterchainQueryResponse();
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainQueryResponse();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        return message;
    },
};
function createBaseMsgSubmitQueryResult() {
    return {
        queryId: BigInt(0),
        sender: "",
        clientId: "",
        result: undefined,
    };
}
exports.MsgSubmitQueryResult = {
    typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.queryId !== BigInt(0)) {
            writer.uint32(8).uint64(message.queryId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.clientId !== "") {
            writer.uint32(26).string(message.clientId);
        }
        if (message.result !== undefined) {
            exports.QueryResult.encode(message.result, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitQueryResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.clientId = reader.string();
                    break;
                case 4:
                    message.result = exports.QueryResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgSubmitQueryResult();
        if ((0, helpers_js_1.isSet)(object.queryId))
            obj.queryId = BigInt(object.queryId.toString());
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        if ((0, helpers_js_1.isSet)(object.clientId))
            obj.clientId = String(object.clientId);
        if ((0, helpers_js_1.isSet)(object.result))
            obj.result = exports.QueryResult.fromJSON(object.result);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.queryId !== undefined && (obj.queryId = (message.queryId || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.result !== undefined &&
            (obj.result = message.result ? exports.QueryResult.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitQueryResult();
        if (object.queryId !== undefined && object.queryId !== null) {
            message.queryId = BigInt(object.queryId.toString());
        }
        message.sender = object.sender ?? "";
        message.clientId = object.clientId ?? "";
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.QueryResult.fromPartial(object.result);
        }
        return message;
    },
};
function createBaseQueryResult() {
    return {
        kvResults: [],
        block: undefined,
        height: BigInt(0),
        revision: BigInt(0),
        allowKvCallbacks: false,
    };
}
exports.QueryResult = {
    typeUrl: "/neutron.interchainqueries.QueryResult",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        for (const v of message.kvResults) {
            exports.StorageValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            exports.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.revision !== BigInt(0)) {
            writer.uint32(32).uint64(message.revision);
        }
        if (message.allowKvCallbacks === true) {
            writer.uint32(40).bool(message.allowKvCallbacks);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kvResults.push(exports.StorageValue.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.block = exports.Block.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = reader.uint64();
                    break;
                case 4:
                    message.revision = reader.uint64();
                    break;
                case 5:
                    message.allowKvCallbacks = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseQueryResult();
        if (Array.isArray(object?.kvResults))
            obj.kvResults = object.kvResults.map((e) => exports.StorageValue.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.block))
            obj.block = exports.Block.fromJSON(object.block);
        if ((0, helpers_js_1.isSet)(object.height))
            obj.height = BigInt(object.height.toString());
        if ((0, helpers_js_1.isSet)(object.revision))
            obj.revision = BigInt(object.revision.toString());
        if ((0, helpers_js_1.isSet)(object.allowKvCallbacks))
            obj.allowKvCallbacks = Boolean(object.allowKvCallbacks);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        if (message.kvResults) {
            obj.kvResults = message.kvResults.map((e) => (e ? exports.StorageValue.toJSON(e) : undefined));
        }
        else {
            obj.kvResults = [];
        }
        message.block !== undefined && (obj.block = message.block ? exports.Block.toJSON(message.block) : undefined);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.revision !== undefined && (obj.revision = (message.revision || BigInt(0)).toString());
        message.allowKvCallbacks !== undefined && (obj.allowKvCallbacks = message.allowKvCallbacks);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryResult();
        message.kvResults = object.kvResults?.map((e) => exports.StorageValue.fromPartial(e)) || [];
        if (object.block !== undefined && object.block !== null) {
            message.block = exports.Block.fromPartial(object.block);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height.toString());
        }
        if (object.revision !== undefined && object.revision !== null) {
            message.revision = BigInt(object.revision.toString());
        }
        message.allowKvCallbacks = object.allowKvCallbacks ?? false;
        return message;
    },
};
function createBaseStorageValue() {
    return {
        storagePrefix: "",
        key: new Uint8Array(),
        value: new Uint8Array(),
        proof: undefined,
    };
}
exports.StorageValue = {
    typeUrl: "/neutron.interchainqueries.StorageValue",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.storagePrefix !== "") {
            writer.uint32(10).string(message.storagePrefix);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(26).bytes(message.value);
        }
        if (message.proof !== undefined) {
            proof_js_1.ProofOps.encode(message.proof, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorageValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storagePrefix = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                case 3:
                    message.value = reader.bytes();
                    break;
                case 4:
                    message.proof = proof_js_1.ProofOps.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseStorageValue();
        if ((0, helpers_js_1.isSet)(object.storagePrefix))
            obj.storagePrefix = String(object.storagePrefix);
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = (0, helpers_js_1.bytesFromBase64)(object.key);
        if ((0, helpers_js_1.isSet)(object.value))
            obj.value = (0, helpers_js_1.bytesFromBase64)(object.value);
        if ((0, helpers_js_1.isSet)(object.proof))
            obj.proof = proof_js_1.ProofOps.fromJSON(object.proof);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.storagePrefix !== undefined && (obj.storagePrefix = message.storagePrefix);
        message.key !== undefined &&
            (obj.key = (0, helpers_js_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = (0, helpers_js_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_js_1.ProofOps.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStorageValue();
        message.storagePrefix = object.storagePrefix ?? "";
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_js_1.ProofOps.fromPartial(object.proof);
        }
        return message;
    },
};
function createBaseBlock() {
    return {
        nextBlockHeader: undefined,
        header: undefined,
        tx: undefined,
    };
}
exports.Block = {
    typeUrl: "/neutron.interchainqueries.Block",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.nextBlockHeader !== undefined) {
            any_js_1.Any.encode(message.nextBlockHeader, writer.uint32(10).fork()).ldelim();
        }
        if (message.header !== undefined) {
            any_js_1.Any.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.tx !== undefined) {
            exports.TxValue.encode(message.tx, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextBlockHeader = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.header = any_js_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tx = exports.TxValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseBlock();
        if ((0, helpers_js_1.isSet)(object.nextBlockHeader))
            obj.nextBlockHeader = any_js_1.Any.fromJSON(object.nextBlockHeader);
        if ((0, helpers_js_1.isSet)(object.header))
            obj.header = any_js_1.Any.fromJSON(object.header);
        if ((0, helpers_js_1.isSet)(object.tx))
            obj.tx = exports.TxValue.fromJSON(object.tx);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.nextBlockHeader !== undefined &&
            (obj.nextBlockHeader = message.nextBlockHeader ? any_js_1.Any.toJSON(message.nextBlockHeader) : undefined);
        message.header !== undefined && (obj.header = message.header ? any_js_1.Any.toJSON(message.header) : undefined);
        message.tx !== undefined && (obj.tx = message.tx ? exports.TxValue.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlock();
        if (object.nextBlockHeader !== undefined && object.nextBlockHeader !== null) {
            message.nextBlockHeader = any_js_1.Any.fromPartial(object.nextBlockHeader);
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = any_js_1.Any.fromPartial(object.header);
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = exports.TxValue.fromPartial(object.tx);
        }
        return message;
    },
};
function createBaseTxValue() {
    return {
        response: undefined,
        deliveryProof: undefined,
        inclusionProof: undefined,
        data: new Uint8Array(),
    };
}
exports.TxValue = {
    typeUrl: "/neutron.interchainqueries.TxValue",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.response !== undefined) {
            types_js_1.ExecTxResult.encode(message.response, writer.uint32(10).fork()).ldelim();
        }
        if (message.deliveryProof !== undefined) {
            proof_js_1.Proof.encode(message.deliveryProof, writer.uint32(18).fork()).ldelim();
        }
        if (message.inclusionProof !== undefined) {
            proof_js_1.Proof.encode(message.inclusionProof, writer.uint32(26).fork()).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(34).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = types_js_1.ExecTxResult.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.deliveryProof = proof_js_1.Proof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.inclusionProof = proof_js_1.Proof.decode(reader, reader.uint32());
                    break;
                case 4:
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
        const obj = createBaseTxValue();
        if ((0, helpers_js_1.isSet)(object.response))
            obj.response = types_js_1.ExecTxResult.fromJSON(object.response);
        if ((0, helpers_js_1.isSet)(object.deliveryProof))
            obj.deliveryProof = proof_js_1.Proof.fromJSON(object.deliveryProof);
        if ((0, helpers_js_1.isSet)(object.inclusionProof))
            obj.inclusionProof = proof_js_1.Proof.fromJSON(object.inclusionProof);
        if ((0, helpers_js_1.isSet)(object.data))
            obj.data = (0, helpers_js_1.bytesFromBase64)(object.data);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.response !== undefined &&
            (obj.response = message.response ? types_js_1.ExecTxResult.toJSON(message.response) : undefined);
        message.deliveryProof !== undefined &&
            (obj.deliveryProof = message.deliveryProof ? proof_js_1.Proof.toJSON(message.deliveryProof) : undefined);
        message.inclusionProof !== undefined &&
            (obj.inclusionProof = message.inclusionProof ? proof_js_1.Proof.toJSON(message.inclusionProof) : undefined);
        message.data !== undefined &&
            (obj.data = (0, helpers_js_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxValue();
        if (object.response !== undefined && object.response !== null) {
            message.response = types_js_1.ExecTxResult.fromPartial(object.response);
        }
        if (object.deliveryProof !== undefined && object.deliveryProof !== null) {
            message.deliveryProof = proof_js_1.Proof.fromPartial(object.deliveryProof);
        }
        if (object.inclusionProof !== undefined && object.inclusionProof !== null) {
            message.inclusionProof = proof_js_1.Proof.fromPartial(object.inclusionProof);
        }
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgSubmitQueryResultResponse() {
    return {};
}
exports.MsgSubmitQueryResultResponse = {
    typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResultResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitQueryResultResponse();
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
        const obj = createBaseMsgSubmitQueryResultResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSubmitQueryResultResponse();
        return message;
    },
};
function createBaseMsgRemoveInterchainQueryRequest() {
    return {
        queryId: BigInt(0),
        sender: "",
    };
}
exports.MsgRemoveInterchainQueryRequest = {
    typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.queryId !== BigInt(0)) {
            writer.uint32(8).uint64(message.queryId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveInterchainQueryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgRemoveInterchainQueryRequest();
        if ((0, helpers_js_1.isSet)(object.queryId))
            obj.queryId = BigInt(object.queryId.toString());
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.queryId !== undefined && (obj.queryId = (message.queryId || BigInt(0)).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRemoveInterchainQueryRequest();
        if (object.queryId !== undefined && object.queryId !== null) {
            message.queryId = BigInt(object.queryId.toString());
        }
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseMsgRemoveInterchainQueryResponse() {
    return {};
}
exports.MsgRemoveInterchainQueryResponse = {
    typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveInterchainQueryResponse();
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
        const obj = createBaseMsgRemoveInterchainQueryResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgRemoveInterchainQueryResponse();
        return message;
    },
};
function createBaseMsgUpdateInterchainQueryRequest() {
    return {
        queryId: BigInt(0),
        newKeys: [],
        newUpdatePeriod: BigInt(0),
        newTransactionsFilter: "",
        sender: "",
    };
}
exports.MsgUpdateInterchainQueryRequest = {
    typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.queryId !== BigInt(0)) {
            writer.uint32(8).uint64(message.queryId);
        }
        for (const v of message.newKeys) {
            genesis_js_1.KVKey.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.newUpdatePeriod !== BigInt(0)) {
            writer.uint32(24).uint64(message.newUpdatePeriod);
        }
        if (message.newTransactionsFilter !== "") {
            writer.uint32(34).string(message.newTransactionsFilter);
        }
        if (message.sender !== "") {
            writer.uint32(42).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateInterchainQueryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryId = reader.uint64();
                    break;
                case 2:
                    message.newKeys.push(genesis_js_1.KVKey.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.newUpdatePeriod = reader.uint64();
                    break;
                case 4:
                    message.newTransactionsFilter = reader.string();
                    break;
                case 5:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseMsgUpdateInterchainQueryRequest();
        if ((0, helpers_js_1.isSet)(object.queryId))
            obj.queryId = BigInt(object.queryId.toString());
        if (Array.isArray(object?.newKeys))
            obj.newKeys = object.newKeys.map((e) => genesis_js_1.KVKey.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.newUpdatePeriod))
            obj.newUpdatePeriod = BigInt(object.newUpdatePeriod.toString());
        if ((0, helpers_js_1.isSet)(object.newTransactionsFilter))
            obj.newTransactionsFilter = String(object.newTransactionsFilter);
        if ((0, helpers_js_1.isSet)(object.sender))
            obj.sender = String(object.sender);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.queryId !== undefined && (obj.queryId = (message.queryId || BigInt(0)).toString());
        if (message.newKeys) {
            obj.newKeys = message.newKeys.map((e) => (e ? genesis_js_1.KVKey.toJSON(e) : undefined));
        }
        else {
            obj.newKeys = [];
        }
        message.newUpdatePeriod !== undefined &&
            (obj.newUpdatePeriod = (message.newUpdatePeriod || BigInt(0)).toString());
        message.newTransactionsFilter !== undefined &&
            (obj.newTransactionsFilter = message.newTransactionsFilter);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateInterchainQueryRequest();
        if (object.queryId !== undefined && object.queryId !== null) {
            message.queryId = BigInt(object.queryId.toString());
        }
        message.newKeys = object.newKeys?.map((e) => genesis_js_1.KVKey.fromPartial(e)) || [];
        if (object.newUpdatePeriod !== undefined && object.newUpdatePeriod !== null) {
            message.newUpdatePeriod = BigInt(object.newUpdatePeriod.toString());
        }
        message.newTransactionsFilter = object.newTransactionsFilter ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
};
function createBaseMsgUpdateInterchainQueryResponse() {
    return {};
}
exports.MsgUpdateInterchainQueryResponse = {
    typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryResponse",
    encode(_, writer = binary_js_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateInterchainQueryResponse();
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
        const obj = createBaseMsgUpdateInterchainQueryResponse();
        return obj;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateInterchainQueryResponse();
        return message;
    },
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: params_js_1.Params.fromPartial({}),
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/neutron.interchainqueries.MsgUpdateParams",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
        const obj = createBaseMsgUpdateParams();
        if ((0, helpers_js_1.isSet)(object.authority))
            obj.authority = String(object.authority);
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = params_js_1.Params.fromJSON(object.params);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? params_js_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        if (object.params !== undefined && object.params !== null) {
            message.params = params_js_1.Params.fromPartial(object.params);
        }
        return message;
    },
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/neutron.interchainqueries.MsgUpdateParamsResponse",
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