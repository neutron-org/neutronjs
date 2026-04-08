import { CurrencyPair } from "../../types/v1/currency_pair.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "slinky.marketmap.v1";
/** Market encapsulates a Ticker and its provider-specific configuration. */
export interface Market {
    /**
     * Ticker represents a price feed for a given asset pair i.e. BTC/USD. The
     * price feed is scaled to a number of decimal places and has a minimum number
     * of providers required to consider the ticker valid.
     */
    ticker: Ticker;
    /** ProviderConfigs is the list of provider-specific configs for this Market. */
    providerConfigs: ProviderConfig[];
}
/**
 * Ticker represents a price feed for a given asset pair i.e. BTC/USD. The price
 * feed is scaled to a number of decimal places and has a minimum number of
 * providers required to consider the ticker valid.
 */
export interface Ticker {
    /** CurrencyPair is the currency pair for this ticker. */
    currencyPair: CurrencyPair;
    /**
     * Decimals is the number of decimal places for the ticker. The number of
     * decimal places is used to convert the price to a human-readable format.
     */
    decimals: bigint;
    /**
     * MinProviderCount is the minimum number of providers required to consider
     * the ticker valid.
     */
    minProviderCount: bigint;
    /**
     * Enabled is the flag that denotes if the Ticker is enabled for price
     * fetching by an oracle.
     */
    enabled: boolean;
    /**
     * MetadataJSON is a string of JSON that encodes any extra configuration
     * for the given ticker.
     */
    metadataJSON: string;
}
export interface ProviderConfig {
    /**
     * Name corresponds to the name of the provider for which the configuration is
     * being set.
     */
    name: string;
    /**
     * OffChainTicker is the off-chain representation of the ticker i.e. BTC/USD.
     * The off-chain ticker is unique to a given provider and is used to fetch the
     * price of the ticker from the provider.
     */
    offChainTicker: string;
    /**
     * NormalizeByPair is the currency pair for this ticker to be normalized by.
     * For example, if the desired Ticker is BTC/USD, this market could be reached
     * using: OffChainTicker = BTC/USDT NormalizeByPair = USDT/USD This field is
     * optional and nullable.
     */
    normalizeByPair?: CurrencyPair;
    /**
     * Invert is a boolean indicating if the BASE and QUOTE of the market should
     * be inverted. i.e. BASE -> QUOTE, QUOTE -> BASE
     */
    invert: boolean;
    /**
     * MetadataJSON is a string of JSON that encodes any extra configuration
     * for the given provider config.
     */
    metadataJSON: string;
}
export interface MarketMap_MarketsEntry {
    key: string;
    value?: Market;
}
/** MarketMap maps ticker strings to their Markets. */
export interface MarketMap {
    /**
     * Markets is the full list of tickers and their associated configurations
     * to be stored on-chain.
     */
    markets: {
        [key: string]: Market;
    };
}
export declare const Market: {
    typeUrl: string;
    encode(message: Market, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Market;
    fromJSON(object: any): Market;
    toJSON(message: Market): JsonSafe<Market>;
    fromPartial<I extends Exact<DeepPartial<Market>, I>>(object: I): Market;
};
export declare const Ticker: {
    typeUrl: string;
    encode(message: Ticker, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Ticker;
    fromJSON(object: any): Ticker;
    toJSON(message: Ticker): JsonSafe<Ticker>;
    fromPartial<I extends Exact<DeepPartial<Ticker>, I>>(object: I): Ticker;
};
export declare const ProviderConfig: {
    typeUrl: string;
    encode(message: ProviderConfig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProviderConfig;
    fromJSON(object: any): ProviderConfig;
    toJSON(message: ProviderConfig): JsonSafe<ProviderConfig>;
    fromPartial<I extends Exact<DeepPartial<ProviderConfig>, I>>(object: I): ProviderConfig;
};
export declare const MarketMap_MarketsEntry: {
    encode(message: MarketMap_MarketsEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MarketMap_MarketsEntry;
    fromJSON(object: any): MarketMap_MarketsEntry;
    toJSON(message: MarketMap_MarketsEntry): JsonSafe<MarketMap_MarketsEntry>;
    fromPartial<I extends Exact<DeepPartial<MarketMap_MarketsEntry>, I>>(object: I): MarketMap_MarketsEntry;
};
export declare const MarketMap: {
    typeUrl: string;
    encode(message: MarketMap, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MarketMap;
    fromJSON(object: any): MarketMap;
    toJSON(message: MarketMap): JsonSafe<MarketMap>;
    fromPartial<I extends Exact<DeepPartial<MarketMap>, I>>(object: I): MarketMap;
};
