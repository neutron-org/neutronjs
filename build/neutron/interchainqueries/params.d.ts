import { Coin } from "../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.interchainqueries";
/** The parameters for the module. */
export interface Params {
    /**
     * The duration, measured in blocks, that must pass since the query's registration or its last
     * result submission before the query becomes eligible for removal by anyone. Is used to set
     * `submit_timeout` on Interchain Query registration.
     */
    querySubmitTimeout: bigint;
    /** Amount of coins required to be provided as deposit on Interchain Query registration. */
    queryDeposit: Coin[];
    /**
     * Amount of tx hashes to be removed during a single EndBlock. Can vary to balance between
     * network cleaning speed and EndBlock duration. A zero value means no limit.
     */
    txQueryRemovalLimit: bigint;
    /** Maximum amount of keys in a registered key value query */
    maxKvQueryKeysCount: bigint;
    /** max_transactions_filters defines maximum allowed amount of tx filters in msgRegisterInterchainQuery */
    maxTransactionsFilters: bigint;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
