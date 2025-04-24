//@ts-nocheck
/* eslint-disable */
import { Height, Params } from "../../ibc/core/client/v1/client";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.interchainqueries";
/** Information about an Interchain Query registered in the interchainqueries module. */
export interface RegisteredQuery {
  /** The unique id of the registered query. */
  id: bigint;
  /** The address of the contract that registered the query. */
  owner: string;
  /** The query type identifier: `kv` or `tx`. */
  queryType: string;
  /**
   * The KV-storage keys for which to get values from the remote chain. Only applicable for the
   * KV Interchain Queries. Max amount of keys is limited by the module's `max_kv_query_keys_count`
   * parameters.
   */
  keys: KVKey[];
  /**
   * A stringified list of filters for remote transactions search. Only applicable for the TX
   * Interchain Queries. Example: "[{\"field\":\"tx.height\",\"op\":\"Gte\",\"value\":2644737}]".
   * Supported operators: "eq", "lt", "gt", "lte", "gte". Max amount of filter conditions is limited
   * by the module's `max_transactions_filters` parameters.
   */
  transactionsFilter: string;
  /**
   * The IBC connection ID to the remote chain (the source of querying data). Is used for getting
   * ConsensusState from the respective IBC client to verify query result proofs.
   */
  connectionId: string;
  /**
   * Parameter that defines the minimal delay between consecutive query executions (i.e. the
   * minimal delay between query results update).
   */
  updatePeriod: bigint;
  /** The local chain block height of the last query results update. */
  lastSubmittedResultLocalHeight: bigint;
  /** The remote chain block height that corresponds to the last query result update. */
  lastSubmittedResultRemoteHeight?: Height;
  /**
   * Amount of coins paid for the Interchain Query registration. The deposit is paid back to the
   * remover. The remover can be either the query owner (during the submit timeout) or anybody.
   */
  deposit: Coin[];
  /**
   * The duration, measured in blocks, that must pass since the query's registration or its last
   * result submission before the query becomes eligible for removal by anyone.
   */
  submitTimeout: bigint;
  /** The local chain block height of the Interchain Query registration. */
  registeredAtHeight: bigint;
}
/** Represents a path to an IAVL storage node. */
export interface KVKey {
  /**
   * The substore name used in an Interchain Query. Typically, this corresponds to the keeper's
   * storeKey, usually the module's name, such as "bank", "staking", etc.
   */
  path: string;
  /** A bytes field representing the key for specific data in the module's storage. */
  key: Uint8Array;
}
/** The interchainqueries module's genesis state model. */
export interface GenesisState {
  /** The parameters of the module. */
  params: Params;
  /** A list of registered Interchain Queries. */
  registeredQueries: RegisteredQuery[];
}
function createBaseRegisteredQuery(): RegisteredQuery {
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
export const RegisteredQuery = {
  typeUrl: "/neutron.interchainqueries.RegisteredQuery",
  encode(message: RegisteredQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      KVKey.encode(v!, writer.uint32(34).fork()).ldelim();
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
      Height.encode(message.lastSubmittedResultRemoteHeight, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.deposit) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.submitTimeout !== BigInt(0)) {
      writer.uint32(88).uint64(message.submitTimeout);
    }
    if (message.registeredAtHeight !== BigInt(0)) {
      writer.uint32(96).uint64(message.registeredAtHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.keys.push(KVKey.decode(reader, reader.uint32()));
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
          message.lastSubmittedResultRemoteHeight = Height.decode(reader, reader.uint32());
          break;
        case 10:
          message.deposit.push(Coin.decode(reader, reader.uint32()));
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
  fromJSON(object: any): RegisteredQuery {
    const obj = createBaseRegisteredQuery();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.queryType)) obj.queryType = String(object.queryType);
    if (Array.isArray(object?.keys)) obj.keys = object.keys.map((e: any) => KVKey.fromJSON(e));
    if (isSet(object.transactionsFilter)) obj.transactionsFilter = String(object.transactionsFilter);
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.updatePeriod)) obj.updatePeriod = BigInt(object.updatePeriod.toString());
    if (isSet(object.lastSubmittedResultLocalHeight))
      obj.lastSubmittedResultLocalHeight = BigInt(object.lastSubmittedResultLocalHeight.toString());
    if (isSet(object.lastSubmittedResultRemoteHeight))
      obj.lastSubmittedResultRemoteHeight = Height.fromJSON(object.lastSubmittedResultRemoteHeight);
    if (Array.isArray(object?.deposit)) obj.deposit = object.deposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.submitTimeout)) obj.submitTimeout = BigInt(object.submitTimeout.toString());
    if (isSet(object.registeredAtHeight))
      obj.registeredAtHeight = BigInt(object.registeredAtHeight.toString());
    return obj;
  },
  toJSON(message: RegisteredQuery): JsonSafe<RegisteredQuery> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.queryType !== undefined && (obj.queryType = message.queryType);
    if (message.keys) {
      obj.keys = message.keys.map((e) => (e ? KVKey.toJSON(e) : undefined));
    } else {
      obj.keys = [];
    }
    message.transactionsFilter !== undefined && (obj.transactionsFilter = message.transactionsFilter);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.updatePeriod !== undefined && (obj.updatePeriod = (message.updatePeriod || BigInt(0)).toString());
    message.lastSubmittedResultLocalHeight !== undefined &&
      (obj.lastSubmittedResultLocalHeight = (message.lastSubmittedResultLocalHeight || BigInt(0)).toString());
    message.lastSubmittedResultRemoteHeight !== undefined &&
      (obj.lastSubmittedResultRemoteHeight = message.lastSubmittedResultRemoteHeight
        ? Height.toJSON(message.lastSubmittedResultRemoteHeight)
        : undefined);
    if (message.deposit) {
      obj.deposit = message.deposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.deposit = [];
    }
    message.submitTimeout !== undefined &&
      (obj.submitTimeout = (message.submitTimeout || BigInt(0)).toString());
    message.registeredAtHeight !== undefined &&
      (obj.registeredAtHeight = (message.registeredAtHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredQuery>, I>>(object: I): RegisteredQuery {
    const message = createBaseRegisteredQuery();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.owner = object.owner ?? "";
    message.queryType = object.queryType ?? "";
    message.keys = object.keys?.map((e) => KVKey.fromPartial(e)) || [];
    message.transactionsFilter = object.transactionsFilter ?? "";
    message.connectionId = object.connectionId ?? "";
    if (object.updatePeriod !== undefined && object.updatePeriod !== null) {
      message.updatePeriod = BigInt(object.updatePeriod.toString());
    }
    if (
      object.lastSubmittedResultLocalHeight !== undefined &&
      object.lastSubmittedResultLocalHeight !== null
    ) {
      message.lastSubmittedResultLocalHeight = BigInt(object.lastSubmittedResultLocalHeight.toString());
    }
    if (
      object.lastSubmittedResultRemoteHeight !== undefined &&
      object.lastSubmittedResultRemoteHeight !== null
    ) {
      message.lastSubmittedResultRemoteHeight = Height.fromPartial(object.lastSubmittedResultRemoteHeight);
    }
    message.deposit = object.deposit?.map((e) => Coin.fromPartial(e)) || [];
    if (object.submitTimeout !== undefined && object.submitTimeout !== null) {
      message.submitTimeout = BigInt(object.submitTimeout.toString());
    }
    if (object.registeredAtHeight !== undefined && object.registeredAtHeight !== null) {
      message.registeredAtHeight = BigInt(object.registeredAtHeight.toString());
    }
    return message;
  },
};
function createBaseKVKey(): KVKey {
  return {
    path: "",
    key: new Uint8Array(),
  };
}
export const KVKey = {
  typeUrl: "/neutron.interchainqueries.KVKey",
  encode(message: KVKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): KVKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): KVKey {
    const obj = createBaseKVKey();
    if (isSet(object.path)) obj.path = String(object.path);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    return obj;
  },
  toJSON(message: KVKey): JsonSafe<KVKey> {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<KVKey>, I>>(object: I): KVKey {
    const message = createBaseKVKey();
    message.path = object.path ?? "";
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    registeredQueries: [],
  };
}
export const GenesisState = {
  typeUrl: "/neutron.interchainqueries.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registeredQueries) {
      RegisteredQuery.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.registeredQueries.push(RegisteredQuery.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.registeredQueries))
      obj.registeredQueries = object.registeredQueries.map((e: any) => RegisteredQuery.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.registeredQueries) {
      obj.registeredQueries = message.registeredQueries.map((e) =>
        e ? RegisteredQuery.toJSON(e) : undefined,
      );
    } else {
      obj.registeredQueries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.registeredQueries = object.registeredQueries?.map((e) => RegisteredQuery.fromPartial(e)) || [];
    return message;
  },
};
