import { KVKey } from "./genesis.js";
import { Params } from "./params.js";
import { ProofOps, Proof } from "../../tendermint/crypto/proof.js";
import { Any } from "../../google/protobuf/any.js";
import { ExecTxResult } from "../../tendermint/abci/types.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.interchainqueries";
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
export interface MsgSubmitQueryResultResponse {
}
/** Request type for the Msg/RemoveInterchainQuery RPC method. */
export interface MsgRemoveInterchainQueryRequest {
    /** The ID of the query to remove. */
    queryId: bigint;
    /** The signer of the message. */
    sender: string;
}
/** Response type for the Msg/RemoveInterchainQuery RPC method. */
export interface MsgRemoveInterchainQueryResponse {
}
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
export interface MsgUpdateInterchainQueryResponse {
}
/** Request type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParams {
    /** The address of the authority of the module. */
    authority: string;
    /** The new parameters of the module. All parameters must be supplied. */
    params: Params;
}
/** Response type for the Msg/UpdateParams RPC method. */
export interface MsgUpdateParamsResponse {
}
export declare const MsgRegisterInterchainQuery: {
    typeUrl: string;
    encode(message: MsgRegisterInterchainQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainQuery;
    fromJSON(object: any): MsgRegisterInterchainQuery;
    toJSON(message: MsgRegisterInterchainQuery): JsonSafe<MsgRegisterInterchainQuery>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainQuery>, I>>(object: I): MsgRegisterInterchainQuery;
};
export declare const MsgRegisterInterchainQueryResponse: {
    typeUrl: string;
    encode(message: MsgRegisterInterchainQueryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainQueryResponse;
    fromJSON(object: any): MsgRegisterInterchainQueryResponse;
    toJSON(message: MsgRegisterInterchainQueryResponse): JsonSafe<MsgRegisterInterchainQueryResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainQueryResponse>, I>>(object: I): MsgRegisterInterchainQueryResponse;
};
export declare const MsgSubmitQueryResult: {
    typeUrl: string;
    encode(message: MsgSubmitQueryResult, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitQueryResult;
    fromJSON(object: any): MsgSubmitQueryResult;
    toJSON(message: MsgSubmitQueryResult): JsonSafe<MsgSubmitQueryResult>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitQueryResult>, I>>(object: I): MsgSubmitQueryResult;
};
export declare const QueryResult: {
    typeUrl: string;
    encode(message: QueryResult, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryResult;
    fromJSON(object: any): QueryResult;
    toJSON(message: QueryResult): JsonSafe<QueryResult>;
    fromPartial<I extends Exact<DeepPartial<QueryResult>, I>>(object: I): QueryResult;
};
export declare const StorageValue: {
    typeUrl: string;
    encode(message: StorageValue, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StorageValue;
    fromJSON(object: any): StorageValue;
    toJSON(message: StorageValue): JsonSafe<StorageValue>;
    fromPartial<I extends Exact<DeepPartial<StorageValue>, I>>(object: I): StorageValue;
};
export declare const Block: {
    typeUrl: string;
    encode(message: Block, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): JsonSafe<Block>;
    fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block;
};
export declare const TxValue: {
    typeUrl: string;
    encode(message: TxValue, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxValue;
    fromJSON(object: any): TxValue;
    toJSON(message: TxValue): JsonSafe<TxValue>;
    fromPartial<I extends Exact<DeepPartial<TxValue>, I>>(object: I): TxValue;
};
export declare const MsgSubmitQueryResultResponse: {
    typeUrl: string;
    encode(_: MsgSubmitQueryResultResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitQueryResultResponse;
    fromJSON(_: any): MsgSubmitQueryResultResponse;
    toJSON(_: MsgSubmitQueryResultResponse): JsonSafe<MsgSubmitQueryResultResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitQueryResultResponse>, I>>(_: I): MsgSubmitQueryResultResponse;
};
export declare const MsgRemoveInterchainQueryRequest: {
    typeUrl: string;
    encode(message: MsgRemoveInterchainQueryRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveInterchainQueryRequest;
    fromJSON(object: any): MsgRemoveInterchainQueryRequest;
    toJSON(message: MsgRemoveInterchainQueryRequest): JsonSafe<MsgRemoveInterchainQueryRequest>;
    fromPartial<I extends Exact<DeepPartial<MsgRemoveInterchainQueryRequest>, I>>(object: I): MsgRemoveInterchainQueryRequest;
};
export declare const MsgRemoveInterchainQueryResponse: {
    typeUrl: string;
    encode(_: MsgRemoveInterchainQueryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveInterchainQueryResponse;
    fromJSON(_: any): MsgRemoveInterchainQueryResponse;
    toJSON(_: MsgRemoveInterchainQueryResponse): JsonSafe<MsgRemoveInterchainQueryResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRemoveInterchainQueryResponse>, I>>(_: I): MsgRemoveInterchainQueryResponse;
};
export declare const MsgUpdateInterchainQueryRequest: {
    typeUrl: string;
    encode(message: MsgUpdateInterchainQueryRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInterchainQueryRequest;
    fromJSON(object: any): MsgUpdateInterchainQueryRequest;
    toJSON(message: MsgUpdateInterchainQueryRequest): JsonSafe<MsgUpdateInterchainQueryRequest>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateInterchainQueryRequest>, I>>(object: I): MsgUpdateInterchainQueryRequest;
};
export declare const MsgUpdateInterchainQueryResponse: {
    typeUrl: string;
    encode(_: MsgUpdateInterchainQueryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInterchainQueryResponse;
    fromJSON(_: any): MsgUpdateInterchainQueryResponse;
    toJSON(_: MsgUpdateInterchainQueryResponse): JsonSafe<MsgUpdateInterchainQueryResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateInterchainQueryResponse>, I>>(_: I): MsgUpdateInterchainQueryResponse;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
