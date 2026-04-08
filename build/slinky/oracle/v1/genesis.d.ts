import { Timestamp } from "../../../google/protobuf/timestamp.js";
import { CurrencyPair } from "../../types/v1/currency_pair.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "slinky.oracle.v1";
/**
 * QuotePrice is the representation of the aggregated prices for a CurrencyPair,
 * where price represents the price of Base in terms of Quote
 */
export interface QuotePrice {
    price: string;
    /**
     * BlockTimestamp tracks the block height associated with this price update.
     * We include block timestamp alongside the price to ensure that smart
     * contracts and applications are not utilizing stale oracle prices
     */
    blockTimestamp: Timestamp;
    /** BlockHeight is height of block mentioned above */
    blockHeight: bigint;
}
/**
 * CurrencyPairState represents the stateful information tracked by the x/oracle
 * module per-currency-pair.
 */
export interface CurrencyPairState {
    /**
     * QuotePrice is the latest price for a currency-pair, notice this value can
     * be null in the case that no price exists for the currency-pair
     */
    price?: QuotePrice;
    /** Nonce is the number of updates this currency-pair has received */
    nonce: bigint;
    /** ID is the ID of the CurrencyPair */
    id: bigint;
}
/**
 * CurrencyPairGenesis is the information necessary for initialization of a
 * CurrencyPair.
 */
export interface CurrencyPairGenesis {
    /** The CurrencyPair to be added to module state */
    currencyPair: CurrencyPair;
    /**
     * A genesis price if one exists (note this will be empty, unless it results
     * from forking the state of this module)
     */
    currencyPairPrice?: QuotePrice;
    /**
     * nonce is the nonce (number of updates) for the CP (same case as above,
     * likely 0 unless it results from fork of module)
     */
    nonce: bigint;
    /** id is the ID of the CurrencyPair */
    id: bigint;
}
/**
 * GenesisState is the genesis-state for the x/oracle module, it takes a set of
 * predefined CurrencyPairGeneses
 */
export interface GenesisState {
    /**
     * CurrencyPairGenesis is the set of CurrencyPairGeneses for the module. I.e
     * the starting set of CurrencyPairs for the module + information regarding
     * their latest update.
     */
    currencyPairGenesis: CurrencyPairGenesis[];
    /** NextID is the next ID to be used for a CurrencyPair */
    nextId: bigint;
}
export declare const QuotePrice: {
    typeUrl: string;
    encode(message: QuotePrice, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuotePrice;
    fromJSON(object: any): QuotePrice;
    toJSON(message: QuotePrice): JsonSafe<QuotePrice>;
    fromPartial<I extends Exact<DeepPartial<QuotePrice>, I>>(object: I): QuotePrice;
};
export declare const CurrencyPairState: {
    typeUrl: string;
    encode(message: CurrencyPairState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CurrencyPairState;
    fromJSON(object: any): CurrencyPairState;
    toJSON(message: CurrencyPairState): JsonSafe<CurrencyPairState>;
    fromPartial<I extends Exact<DeepPartial<CurrencyPairState>, I>>(object: I): CurrencyPairState;
};
export declare const CurrencyPairGenesis: {
    typeUrl: string;
    encode(message: CurrencyPairGenesis, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CurrencyPairGenesis;
    fromJSON(object: any): CurrencyPairGenesis;
    toJSON(message: CurrencyPairGenesis): JsonSafe<CurrencyPairGenesis>;
    fromPartial<I extends Exact<DeepPartial<CurrencyPairGenesis>, I>>(object: I): CurrencyPairGenesis;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
