"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.KVKey = exports.RegisteredQuery = exports.protobufPackage = void 0;
//@ts-nocheck
/* eslint-disable */
const client_js_1 = require("../../ibc/core/client/v1/client.js");
const coin_js_1 = require("../../cosmos/base/v1beta1/coin.js");
const binary_js_1 = require("../../binary.js");
const helpers_js_1 = require("../../helpers.js");
exports.protobufPackage = "neutron.interchainqueries";
function createBaseRegisteredQuery() {
    return {
        id: BigInt(0),
        owner: "",
        queryType: "",
        keys: [],
        transactionsFilter: "",
        connectionId: "",
        updatePeriod: BigInt(0),
        lastSubmittedResultLocalHeight: BigInt(0),
        lastSubmittedResultRemoteHeight: undefined,
        deposit: [],
        submitTimeout: BigInt(0),
        registeredAtHeight: BigInt(0),
    };
}
exports.RegisteredQuery = {
    typeUrl: "/neutron.interchainqueries.RegisteredQuery",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.queryType !== "") {
            writer.uint32(26).string(message.queryType);
        }
        for (const v of message.keys) {
            exports.KVKey.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.transactionsFilter !== "") {
            writer.uint32(42).string(message.transactionsFilter);
        }
        if (message.connectionId !== "") {
            writer.uint32(50).string(message.connectionId);
        }
        if (message.updatePeriod !== BigInt(0)) {
            writer.uint32(56).uint64(message.updatePeriod);
        }
        if (message.lastSubmittedResultLocalHeight !== BigInt(0)) {
            writer.uint32(64).uint64(message.lastSubmittedResultLocalHeight);
        }
        if (message.lastSubmittedResultRemoteHeight !== undefined) {
            client_js_1.Height.encode(message.lastSubmittedResultRemoteHeight, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.deposit) {
            coin_js_1.Coin.encode(v, writer.uint32(82).fork()).ldelim();
        }
        if (message.submitTimeout !== BigInt(0)) {
            writer.uint32(88).uint64(message.submitTimeout);
        }
        if (message.registeredAtHeight !== BigInt(0)) {
            writer.uint32(96).uint64(message.registeredAtHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.queryType = reader.string();
                    break;
                case 4:
                    message.keys.push(exports.KVKey.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.transactionsFilter = reader.string();
                    break;
                case 6:
                    message.connectionId = reader.string();
                    break;
                case 7:
                    message.updatePeriod = reader.uint64();
                    break;
                case 8:
                    message.lastSubmittedResultLocalHeight = reader.uint64();
                    break;
                case 9:
                    message.lastSubmittedResultRemoteHeight = client_js_1.Height.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.deposit.push(coin_js_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.submitTimeout = reader.uint64();
                    break;
                case 12:
                    message.registeredAtHeight = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseRegisteredQuery();
        if ((0, helpers_js_1.isSet)(object.id))
            obj.id = BigInt(object.id.toString());
        if ((0, helpers_js_1.isSet)(object.owner))
            obj.owner = String(object.owner);
        if ((0, helpers_js_1.isSet)(object.queryType))
            obj.queryType = String(object.queryType);
        if (Array.isArray(object?.keys))
            obj.keys = object.keys.map((e) => exports.KVKey.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.transactionsFilter))
            obj.transactionsFilter = String(object.transactionsFilter);
        if ((0, helpers_js_1.isSet)(object.connectionId))
            obj.connectionId = String(object.connectionId);
        if ((0, helpers_js_1.isSet)(object.updatePeriod))
            obj.updatePeriod = BigInt(object.updatePeriod.toString());
        if ((0, helpers_js_1.isSet)(object.lastSubmittedResultLocalHeight))
            obj.lastSubmittedResultLocalHeight = BigInt(object.lastSubmittedResultLocalHeight.toString());
        if ((0, helpers_js_1.isSet)(object.lastSubmittedResultRemoteHeight))
            obj.lastSubmittedResultRemoteHeight = client_js_1.Height.fromJSON(object.lastSubmittedResultRemoteHeight);
        if (Array.isArray(object?.deposit))
            obj.deposit = object.deposit.map((e) => coin_js_1.Coin.fromJSON(e));
        if ((0, helpers_js_1.isSet)(object.submitTimeout))
            obj.submitTimeout = BigInt(object.submitTimeout.toString());
        if ((0, helpers_js_1.isSet)(object.registeredAtHeight))
            obj.registeredAtHeight = BigInt(object.registeredAtHeight.toString());
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.queryType !== undefined && (obj.queryType = message.queryType);
        if (message.keys) {
            obj.keys = message.keys.map((e) => (e ? exports.KVKey.toJSON(e) : undefined));
        }
        else {
            obj.keys = [];
        }
        message.transactionsFilter !== undefined && (obj.transactionsFilter = message.transactionsFilter);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.updatePeriod !== undefined && (obj.updatePeriod = (message.updatePeriod || BigInt(0)).toString());
        message.lastSubmittedResultLocalHeight !== undefined &&
            (obj.lastSubmittedResultLocalHeight = (message.lastSubmittedResultLocalHeight || BigInt(0)).toString());
        message.lastSubmittedResultRemoteHeight !== undefined &&
            (obj.lastSubmittedResultRemoteHeight = message.lastSubmittedResultRemoteHeight
                ? client_js_1.Height.toJSON(message.lastSubmittedResultRemoteHeight)
                : undefined);
        if (message.deposit) {
            obj.deposit = message.deposit.map((e) => (e ? coin_js_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.deposit = [];
        }
        message.submitTimeout !== undefined &&
            (obj.submitTimeout = (message.submitTimeout || BigInt(0)).toString());
        message.registeredAtHeight !== undefined &&
            (obj.registeredAtHeight = (message.registeredAtHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisteredQuery();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id.toString());
        }
        message.owner = object.owner ?? "";
        message.queryType = object.queryType ?? "";
        message.keys = object.keys?.map((e) => exports.KVKey.fromPartial(e)) || [];
        message.transactionsFilter = object.transactionsFilter ?? "";
        message.connectionId = object.connectionId ?? "";
        if (object.updatePeriod !== undefined && object.updatePeriod !== null) {
            message.updatePeriod = BigInt(object.updatePeriod.toString());
        }
        if (object.lastSubmittedResultLocalHeight !== undefined &&
            object.lastSubmittedResultLocalHeight !== null) {
            message.lastSubmittedResultLocalHeight = BigInt(object.lastSubmittedResultLocalHeight.toString());
        }
        if (object.lastSubmittedResultRemoteHeight !== undefined &&
            object.lastSubmittedResultRemoteHeight !== null) {
            message.lastSubmittedResultRemoteHeight = client_js_1.Height.fromPartial(object.lastSubmittedResultRemoteHeight);
        }
        message.deposit = object.deposit?.map((e) => coin_js_1.Coin.fromPartial(e)) || [];
        if (object.submitTimeout !== undefined && object.submitTimeout !== null) {
            message.submitTimeout = BigInt(object.submitTimeout.toString());
        }
        if (object.registeredAtHeight !== undefined && object.registeredAtHeight !== null) {
            message.registeredAtHeight = BigInt(object.registeredAtHeight.toString());
        }
        return message;
    },
};
function createBaseKVKey() {
    return {
        path: "",
        key: new Uint8Array(),
    };
}
exports.KVKey = {
    typeUrl: "/neutron.interchainqueries.KVKey",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseKVKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseKVKey();
        if ((0, helpers_js_1.isSet)(object.path))
            obj.path = String(object.path);
        if ((0, helpers_js_1.isSet)(object.key))
            obj.key = (0, helpers_js_1.bytesFromBase64)(object.key);
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.key !== undefined &&
            (obj.key = (0, helpers_js_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseKVKey();
        message.path = object.path ?? "";
        message.key = object.key ?? new Uint8Array();
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: client_js_1.Params.fromPartial({}),
        registeredQueries: [],
    };
}
exports.GenesisState = {
    typeUrl: "/neutron.interchainqueries.GenesisState",
    encode(message, writer = binary_js_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            client_js_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.registeredQueries) {
            exports.RegisteredQuery.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_js_1.BinaryReader ? input : new binary_js_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = client_js_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.registeredQueries.push(exports.RegisteredQuery.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const obj = createBaseGenesisState();
        if ((0, helpers_js_1.isSet)(object.params))
            obj.params = client_js_1.Params.fromJSON(object.params);
        if (Array.isArray(object?.registeredQueries))
            obj.registeredQueries = object.registeredQueries.map((e) => exports.RegisteredQuery.fromJSON(e));
        return obj;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? client_js_1.Params.toJSON(message.params) : undefined);
        if (message.registeredQueries) {
            obj.registeredQueries = message.registeredQueries.map((e) => e ? exports.RegisteredQuery.toJSON(e) : undefined);
        }
        else {
            obj.registeredQueries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = client_js_1.Params.fromPartial(object.params);
        }
        message.registeredQueries = object.registeredQueries?.map((e) => exports.RegisteredQuery.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map