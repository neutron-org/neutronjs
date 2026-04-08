import { MarketMap } from "./market.js";
import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "slinky.marketmap.v1";
/** GenesisState defines the x/marketmap module's genesis state. */
export interface GenesisState {
    /**
     * MarketMap defines the global set of market configurations for all providers
     * and markets.
     */
    marketMap: MarketMap;
    /**
     * LastUpdated is the last block height that the market map was updated.
     * This field can be used as an optimization for clients checking if there
     * is a new update to the map.
     */
    lastUpdated: bigint;
    /** Params are the parameters for the x/marketmap module. */
    params: Params;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
