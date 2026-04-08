import { Height, Params } from "../../ibc/core/client/v1/client.js";
import { Coin } from "../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.interchainqueries";
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
export declare const RegisteredQuery: {
    typeUrl: string;
    encode(message: RegisteredQuery, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RegisteredQuery;
    fromJSON(object: any): RegisteredQuery;
    toJSON(message: RegisteredQuery): JsonSafe<RegisteredQuery>;
    fromPartial<I extends Exact<DeepPartial<RegisteredQuery>, I>>(object: I): RegisteredQuery;
};
export declare const KVKey: {
    typeUrl: string;
    encode(message: KVKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): KVKey;
    fromJSON(object: any): KVKey;
    toJSON(message: KVKey): JsonSafe<KVKey>;
    fromPartial<I extends Exact<DeepPartial<KVKey>, I>>(object: I): KVKey;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
