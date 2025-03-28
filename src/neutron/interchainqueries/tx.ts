/* eslint-disable */
import { KVKey } from "./genesis";
import { Params } from "./params";
import { ProofOps, Proof } from "../../tendermint/crypto/proof";
import { Any } from "../../google/protobuf/any";
import { ExecTxResult } from "../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.interchainqueries";
/** Request type for the Msg/RegisterInterchainQuery RPC method. */
export interface MsgRegisterInterchainQuery {
  /** The query type identifier: `kv` or `tx`. */
  queryType: string;
  /**
   * The KV-storage keys for which we want to get values from remote chain. Only applicable for the
   * KV Interchain Queries. Max amount of keys is limited by the module's `max_kv_query_keys_count`
   * parameters.
   */
  keys: KVKey[];
  /**
   * A stringified list of filters for remote transactions search. Only applicable for the TX
   * Interchain Queries. Example: "[{\"field\":\"tx.height\",\"op\":\"Gte\",\"value\":2644737}]".
   * Supported operators: "eq", "lt", "gt", "lte", "gte". Max amount of filter conditions is
   * limited by the module's `max_transactions_filters` parameters.
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
  /** The signer of the message. */
  sender: string;
}
/** Response type for the Msg/RegisterInterchainQuery RPC method. */
export interface MsgRegisterInterchainQueryResponse {
  /** The ID assigned to the registered Interchain Query by the module. */
  id: bigint;
}
/** Request type for the Msg/SubmitQueryResult RPC method. */
export interface MsgSubmitQueryResult {
  /** The ID of the Interchain Query. */
  queryId: bigint;
  /** The signer of the message. */
  sender: string;
  /**
   * The IBC client ID that corresponds to the IBC connection to the remote chain (where the
   * query result is coming from).
   * Deprecated: populating this field does not make any affect
   */
  /** @deprecated */
  clientId: string;
  /** The result of the Interchain Query execution. */
  result?: QueryResult;
}
/**
 * Contains different information about a single Interchain Query execution result. Currently,
 * this structure is used both in query result submission via an ICQ Relayer and as a query result
 * storage for read/write operations to interchainqueries module, but the structure fields are
 * populated in a bit different ways. When submitting a query result, all fields are populated and
 * provided to the interchainqueries module in order to verify the result against the IBC client's
 * state. But in order to lighten the chain state, the interchainqueries module removes the block
 * field and proofs from the kv_results.
 */
export interface QueryResult {
  /**
   * A list of a KV Interchain Query execution results. Each result contains query parameters, a
   * response value and a proof.
   */
  kvResults: StorageValue[];
  /**
   * A TX Interchain Query execution result. Contains metainformation about the blocks of the query
   * execution height. Only populated when submitting an Interchain Query result for verification
   * and emptied when saving the result on chain.
   */
  block?: Block;
  /** The height of the chain at the moment of the Interchain Query execution. */
  height: bigint;
  /** The revision number of the chain at the moment of the Interchain Query execution. */
  revision: bigint;
  /**
   * Whether to send the query result to the owner contract as a sudo message. Only applicable for
   * KV type of Interchain Queries.
   */
  allowKvCallbacks: boolean;
}
/** A verifiable result of performing a single KVKey read. */
export interface StorageValue {
  /**
   * The substore name used in the read operation. Typically, this corresponds to the keeper's
   * storeKey, usually the module's name, such as "bank", "staking", etc.
   */
  storagePrefix: string;
  /** A bytes field representing the key of the data read from the module's storage. */
  key: Uint8Array;
  /** A bytes field containing the value associated with the key in the store. */
  value: Uint8Array;
  /**
   * The Merkle Proof which proves existence/nonexistence of key-value pair in IAVL storage. Is
   * used to verify
   * the pair against the respective remote chain's header.
   */
  proof?: ProofOps;
}
/** A single verifiable result of an Interchain Query of TX type. */
export interface Block {
  /**
   * The header of the block next to the block the transaction is included in. It is needed to know
   * block X+1 header to verify response of transaction for block X since LastResultsHash is root
   * hash of all results of the txs from the previous block.
   */
  nextBlockHeader?: Any;
  /**
   * The header of the block the transaction is included in. It is needed to know block header to
   * verify inclusion of the transaction.
   */
  header?: Any;
  /** The transaction matched by the Interchain Query's transaction filter. */
  tx?: TxValue;
}
/** Contains transaction body, response, and proofs of inclusion and delivery. */
export interface TxValue {
  /** The result of the transaction execution. */
  response?: ExecTxResult;
  /**
   * The Merkle Proof which proves existence of response in the block next to the block the
   * transaction is included in.
   */
  deliveryProof?: Proof;
  /** The Merkle Proof which proves inclusion of the transaction in the block. */
  inclusionProof?: Proof;
  /** The arbitrary data typed body of the transaction. */
  data: Uint8Array;
}
/** Response type for the Msg/SubmitQueryResult RPC method. */
export interface MsgSubmitQueryResultResponse {}
/** Request type for the Msg/RemoveInterchainQuery RPC method. */
export interface MsgRemoveInterchainQueryRequest {
  /** The ID of the query to remove. */
  queryId: bigint;
  /** The signer of the message. */
  sender: string;
}
/** Response type for the Msg/RemoveInterchainQuery RPC method. */
export interface MsgRemoveInterchainQueryResponse {}
/** Request type for the Msg/UpdateInterchainQuery RPC method. */
export interface MsgUpdateInterchainQueryRequest {
  /** The ID of the query to update. */
  queryId: bigint;
  /**
   * A new list of KV-storage keys for which to get values from the remote chain. Only applicable
   * for a KV Interchain Query. Max amount of keys is limited by the module's `max_kv_query_keys_count`
   * parameters.
   */
  newKeys: KVKey[];
  /** A new minimal delay between consecutive query executions. */
  newUpdatePeriod: bigint;
  /**
   * A new list of filters for remote transactions search. Only applicable for a TX Interchain
   * Query. Example: "[{\"field\":\"tx.height\",\"op\":\"Gte\",\"value\":2644737}]".
   * Supported operators: "eq", "lt", "gt", "lte", "gte". Max amount of filter conditions is
   * limited by the module's `max_transactions_filters` parameters.
   */
  newTransactionsFilter: string;
  /** The signer of the message. */
  sender: string;
}
/** Response type for the Msg/UpdateInterchainQuery RPC method. */
export interface MsgUpdateInterchainQueryResponse {}
/** Request type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParams {
  /** The address of the authority of the module. */
  authority: string;
  /** The new parameters of the module. All parameters must be supplied. */
  params: Params;
}
/** Response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponse {}
function createBaseMsgRegisterInterchainQuery(): MsgRegisterInterchainQuery {
  return {
    queryType: "",
    keys: [],
    transactionsFilter: "",
    connectionId: "",
    updatePeriod: BigInt(0),
    sender: "",
  };
}
export const MsgRegisterInterchainQuery = {
  typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
  encode(message: MsgRegisterInterchainQuery, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queryType !== "") {
      writer.uint32(10).string(message.queryType);
    }
    for (const v of message.keys) {
      KVKey.encode(v!, writer.uint32(18).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryType = reader.string();
          break;
        case 2:
          message.keys.push(KVKey.decode(reader, reader.uint32()));
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
  fromJSON(object: any): MsgRegisterInterchainQuery {
    const obj = createBaseMsgRegisterInterchainQuery();
    if (isSet(object.queryType)) obj.queryType = String(object.queryType);
    if (Array.isArray(object?.keys)) obj.keys = object.keys.map((e: any) => KVKey.fromJSON(e));
    if (isSet(object.transactionsFilter)) obj.transactionsFilter = String(object.transactionsFilter);
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.updatePeriod)) obj.updatePeriod = BigInt(object.updatePeriod.toString());
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgRegisterInterchainQuery): JsonSafe<MsgRegisterInterchainQuery> {
    const obj: any = {};
    message.queryType !== undefined && (obj.queryType = message.queryType);
    if (message.keys) {
      obj.keys = message.keys.map((e) => (e ? KVKey.toJSON(e) : undefined));
    } else {
      obj.keys = [];
    }
    message.transactionsFilter !== undefined && (obj.transactionsFilter = message.transactionsFilter);
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.updatePeriod !== undefined && (obj.updatePeriod = (message.updatePeriod || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainQuery>, I>>(
    object: I,
  ): MsgRegisterInterchainQuery {
    const message = createBaseMsgRegisterInterchainQuery();
    message.queryType = object.queryType ?? "";
    message.keys = object.keys?.map((e) => KVKey.fromPartial(e)) || [];
    message.transactionsFilter = object.transactionsFilter ?? "";
    message.connectionId = object.connectionId ?? "";
    if (object.updatePeriod !== undefined && object.updatePeriod !== null) {
      message.updatePeriod = BigInt(object.updatePeriod.toString());
    }
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgRegisterInterchainQueryResponse(): MsgRegisterInterchainQueryResponse {
  return {
    id: BigInt(0),
  };
}
export const MsgRegisterInterchainQueryResponse = {
  typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQueryResponse",
  encode(
    message: MsgRegisterInterchainQueryResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): MsgRegisterInterchainQueryResponse {
    const obj = createBaseMsgRegisterInterchainQueryResponse();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: MsgRegisterInterchainQueryResponse): JsonSafe<MsgRegisterInterchainQueryResponse> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainQueryResponse>, I>>(
    object: I,
  ): MsgRegisterInterchainQueryResponse {
    const message = createBaseMsgRegisterInterchainQueryResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
function createBaseMsgSubmitQueryResult(): MsgSubmitQueryResult {
  return {
    queryId: BigInt(0),
    sender: "",
    clientId: "",
    result: undefined,
  };
}
export const MsgSubmitQueryResult = {
  typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult",
  encode(message: MsgSubmitQueryResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      QueryResult.encode(message.result, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitQueryResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.result = QueryResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitQueryResult {
    const obj = createBaseMsgSubmitQueryResult();
    if (isSet(object.queryId)) obj.queryId = BigInt(object.queryId.toString());
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.result)) obj.result = QueryResult.fromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgSubmitQueryResult): JsonSafe<MsgSubmitQueryResult> {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = (message.queryId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.result !== undefined &&
      (obj.result = message.result ? QueryResult.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitQueryResult>, I>>(object: I): MsgSubmitQueryResult {
    const message = createBaseMsgSubmitQueryResult();
    if (object.queryId !== undefined && object.queryId !== null) {
      message.queryId = BigInt(object.queryId.toString());
    }
    message.sender = object.sender ?? "";
    message.clientId = object.clientId ?? "";
    if (object.result !== undefined && object.result !== null) {
      message.result = QueryResult.fromPartial(object.result);
    }
    return message;
  },
};
function createBaseQueryResult(): QueryResult {
  return {
    kvResults: [],
    block: undefined,
    height: BigInt(0),
    revision: BigInt(0),
    allowKvCallbacks: false,
  };
}
export const QueryResult = {
  typeUrl: "/neutron.interchainqueries.QueryResult",
  encode(message: QueryResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.kvResults) {
      StorageValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): QueryResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kvResults.push(StorageValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryResult {
    const obj = createBaseQueryResult();
    if (Array.isArray(object?.kvResults))
      obj.kvResults = object.kvResults.map((e: any) => StorageValue.fromJSON(e));
    if (isSet(object.block)) obj.block = Block.fromJSON(object.block);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.revision)) obj.revision = BigInt(object.revision.toString());
    if (isSet(object.allowKvCallbacks)) obj.allowKvCallbacks = Boolean(object.allowKvCallbacks);
    return obj;
  },
  toJSON(message: QueryResult): JsonSafe<QueryResult> {
    const obj: any = {};
    if (message.kvResults) {
      obj.kvResults = message.kvResults.map((e) => (e ? StorageValue.toJSON(e) : undefined));
    } else {
      obj.kvResults = [];
    }
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.revision !== undefined && (obj.revision = (message.revision || BigInt(0)).toString());
    message.allowKvCallbacks !== undefined && (obj.allowKvCallbacks = message.allowKvCallbacks);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryResult>, I>>(object: I): QueryResult {
    const message = createBaseQueryResult();
    message.kvResults = object.kvResults?.map((e) => StorageValue.fromPartial(e)) || [];
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromPartial(object.block);
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
function createBaseStorageValue(): StorageValue {
  return {
    storagePrefix: "",
    key: new Uint8Array(),
    value: new Uint8Array(),
    proof: undefined,
  };
}
export const StorageValue = {
  typeUrl: "/neutron.interchainqueries.StorageValue",
  encode(message: StorageValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      ProofOps.encode(message.proof, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.proof = ProofOps.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StorageValue {
    const obj = createBaseStorageValue();
    if (isSet(object.storagePrefix)) obj.storagePrefix = String(object.storagePrefix);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    if (isSet(object.proof)) obj.proof = ProofOps.fromJSON(object.proof);
    return obj;
  },
  toJSON(message: StorageValue): JsonSafe<StorageValue> {
    const obj: any = {};
    message.storagePrefix !== undefined && (obj.storagePrefix = message.storagePrefix);
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? ProofOps.toJSON(message.proof) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StorageValue>, I>>(object: I): StorageValue {
    const message = createBaseStorageValue();
    message.storagePrefix = object.storagePrefix ?? "";
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = ProofOps.fromPartial(object.proof);
    }
    return message;
  },
};
function createBaseBlock(): Block {
  return {
    nextBlockHeader: undefined,
    header: undefined,
    tx: undefined,
  };
}
export const Block = {
  typeUrl: "/neutron.interchainqueries.Block",
  encode(message: Block, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nextBlockHeader !== undefined) {
      Any.encode(message.nextBlockHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.header !== undefined) {
      Any.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.tx !== undefined) {
      TxValue.encode(message.tx, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Block {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextBlockHeader = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.header = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.tx = TxValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Block {
    const obj = createBaseBlock();
    if (isSet(object.nextBlockHeader)) obj.nextBlockHeader = Any.fromJSON(object.nextBlockHeader);
    if (isSet(object.header)) obj.header = Any.fromJSON(object.header);
    if (isSet(object.tx)) obj.tx = TxValue.fromJSON(object.tx);
    return obj;
  },
  toJSON(message: Block): JsonSafe<Block> {
    const obj: any = {};
    message.nextBlockHeader !== undefined &&
      (obj.nextBlockHeader = message.nextBlockHeader ? Any.toJSON(message.nextBlockHeader) : undefined);
    message.header !== undefined && (obj.header = message.header ? Any.toJSON(message.header) : undefined);
    message.tx !== undefined && (obj.tx = message.tx ? TxValue.toJSON(message.tx) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    if (object.nextBlockHeader !== undefined && object.nextBlockHeader !== null) {
      message.nextBlockHeader = Any.fromPartial(object.nextBlockHeader);
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = Any.fromPartial(object.header);
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxValue.fromPartial(object.tx);
    }
    return message;
  },
};
function createBaseTxValue(): TxValue {
  return {
    response: undefined,
    deliveryProof: undefined,
    inclusionProof: undefined,
    data: new Uint8Array(),
  };
}
export const TxValue = {
  typeUrl: "/neutron.interchainqueries.TxValue",
  encode(message: TxValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response !== undefined) {
      ExecTxResult.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.deliveryProof !== undefined) {
      Proof.encode(message.deliveryProof, writer.uint32(18).fork()).ldelim();
    }
    if (message.inclusionProof !== undefined) {
      Proof.encode(message.inclusionProof, writer.uint32(26).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = ExecTxResult.decode(reader, reader.uint32());
          break;
        case 2:
          message.deliveryProof = Proof.decode(reader, reader.uint32());
          break;
        case 3:
          message.inclusionProof = Proof.decode(reader, reader.uint32());
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
  fromJSON(object: any): TxValue {
    const obj = createBaseTxValue();
    if (isSet(object.response)) obj.response = ExecTxResult.fromJSON(object.response);
    if (isSet(object.deliveryProof)) obj.deliveryProof = Proof.fromJSON(object.deliveryProof);
    if (isSet(object.inclusionProof)) obj.inclusionProof = Proof.fromJSON(object.inclusionProof);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: TxValue): JsonSafe<TxValue> {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = message.response ? ExecTxResult.toJSON(message.response) : undefined);
    message.deliveryProof !== undefined &&
      (obj.deliveryProof = message.deliveryProof ? Proof.toJSON(message.deliveryProof) : undefined);
    message.inclusionProof !== undefined &&
      (obj.inclusionProof = message.inclusionProof ? Proof.toJSON(message.inclusionProof) : undefined);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TxValue>, I>>(object: I): TxValue {
    const message = createBaseTxValue();
    if (object.response !== undefined && object.response !== null) {
      message.response = ExecTxResult.fromPartial(object.response);
    }
    if (object.deliveryProof !== undefined && object.deliveryProof !== null) {
      message.deliveryProof = Proof.fromPartial(object.deliveryProof);
    }
    if (object.inclusionProof !== undefined && object.inclusionProof !== null) {
      message.inclusionProof = Proof.fromPartial(object.inclusionProof);
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBaseMsgSubmitQueryResultResponse(): MsgSubmitQueryResultResponse {
  return {};
}
export const MsgSubmitQueryResultResponse = {
  typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResultResponse",
  encode(_: MsgSubmitQueryResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitQueryResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgSubmitQueryResultResponse {
    const obj = createBaseMsgSubmitQueryResultResponse();
    return obj;
  },
  toJSON(_: MsgSubmitQueryResultResponse): JsonSafe<MsgSubmitQueryResultResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitQueryResultResponse>, I>>(
    _: I,
  ): MsgSubmitQueryResultResponse {
    const message = createBaseMsgSubmitQueryResultResponse();
    return message;
  },
};
function createBaseMsgRemoveInterchainQueryRequest(): MsgRemoveInterchainQueryRequest {
  return {
    queryId: BigInt(0),
    sender: "",
  };
}
export const MsgRemoveInterchainQueryRequest = {
  typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
  encode(
    message: MsgRemoveInterchainQueryRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.queryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.queryId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveInterchainQueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(object: any): MsgRemoveInterchainQueryRequest {
    const obj = createBaseMsgRemoveInterchainQueryRequest();
    if (isSet(object.queryId)) obj.queryId = BigInt(object.queryId.toString());
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgRemoveInterchainQueryRequest): JsonSafe<MsgRemoveInterchainQueryRequest> {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = (message.queryId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveInterchainQueryRequest>, I>>(
    object: I,
  ): MsgRemoveInterchainQueryRequest {
    const message = createBaseMsgRemoveInterchainQueryRequest();
    if (object.queryId !== undefined && object.queryId !== null) {
      message.queryId = BigInt(object.queryId.toString());
    }
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgRemoveInterchainQueryResponse(): MsgRemoveInterchainQueryResponse {
  return {};
}
export const MsgRemoveInterchainQueryResponse = {
  typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryResponse",
  encode(_: MsgRemoveInterchainQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveInterchainQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgRemoveInterchainQueryResponse {
    const obj = createBaseMsgRemoveInterchainQueryResponse();
    return obj;
  },
  toJSON(_: MsgRemoveInterchainQueryResponse): JsonSafe<MsgRemoveInterchainQueryResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveInterchainQueryResponse>, I>>(
    _: I,
  ): MsgRemoveInterchainQueryResponse {
    const message = createBaseMsgRemoveInterchainQueryResponse();
    return message;
  },
};
function createBaseMsgUpdateInterchainQueryRequest(): MsgUpdateInterchainQueryRequest {
  return {
    queryId: BigInt(0),
    newKeys: [],
    newUpdatePeriod: BigInt(0),
    newTransactionsFilter: "",
    sender: "",
  };
}
export const MsgUpdateInterchainQueryRequest = {
  typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
  encode(
    message: MsgUpdateInterchainQueryRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.queryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.queryId);
    }
    for (const v of message.newKeys) {
      KVKey.encode(v!, writer.uint32(18).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInterchainQueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateInterchainQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = reader.uint64();
          break;
        case 2:
          message.newKeys.push(KVKey.decode(reader, reader.uint32()));
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
  fromJSON(object: any): MsgUpdateInterchainQueryRequest {
    const obj = createBaseMsgUpdateInterchainQueryRequest();
    if (isSet(object.queryId)) obj.queryId = BigInt(object.queryId.toString());
    if (Array.isArray(object?.newKeys)) obj.newKeys = object.newKeys.map((e: any) => KVKey.fromJSON(e));
    if (isSet(object.newUpdatePeriod)) obj.newUpdatePeriod = BigInt(object.newUpdatePeriod.toString());
    if (isSet(object.newTransactionsFilter)) obj.newTransactionsFilter = String(object.newTransactionsFilter);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgUpdateInterchainQueryRequest): JsonSafe<MsgUpdateInterchainQueryRequest> {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = (message.queryId || BigInt(0)).toString());
    if (message.newKeys) {
      obj.newKeys = message.newKeys.map((e) => (e ? KVKey.toJSON(e) : undefined));
    } else {
      obj.newKeys = [];
    }
    message.newUpdatePeriod !== undefined &&
      (obj.newUpdatePeriod = (message.newUpdatePeriod || BigInt(0)).toString());
    message.newTransactionsFilter !== undefined &&
      (obj.newTransactionsFilter = message.newTransactionsFilter);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateInterchainQueryRequest>, I>>(
    object: I,
  ): MsgUpdateInterchainQueryRequest {
    const message = createBaseMsgUpdateInterchainQueryRequest();
    if (object.queryId !== undefined && object.queryId !== null) {
      message.queryId = BigInt(object.queryId.toString());
    }
    message.newKeys = object.newKeys?.map((e) => KVKey.fromPartial(e)) || [];
    if (object.newUpdatePeriod !== undefined && object.newUpdatePeriod !== null) {
      message.newUpdatePeriod = BigInt(object.newUpdatePeriod.toString());
    }
    message.newTransactionsFilter = object.newTransactionsFilter ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgUpdateInterchainQueryResponse(): MsgUpdateInterchainQueryResponse {
  return {};
}
export const MsgUpdateInterchainQueryResponse = {
  typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryResponse",
  encode(_: MsgUpdateInterchainQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInterchainQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgUpdateInterchainQueryResponse {
    const obj = createBaseMsgUpdateInterchainQueryResponse();
    return obj;
  },
  toJSON(_: MsgUpdateInterchainQueryResponse): JsonSafe<MsgUpdateInterchainQueryResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateInterchainQueryResponse>, I>>(
    _: I,
  ): MsgUpdateInterchainQueryResponse {
    const message = createBaseMsgUpdateInterchainQueryResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/neutron.interchainqueries.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/neutron.interchainqueries.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
