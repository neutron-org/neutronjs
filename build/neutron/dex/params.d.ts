import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
/** Params defines the parameters for the module. */
export interface Params {
    feeTiers: bigint[];
    paused: boolean;
    maxJitsPerBlock: bigint;
    goodTilPurgeAllowance: bigint;
    /**
     * Whitelisted_lps have special LP privileges;
     * currently, the only such privilege is depositing outside of the allowed fee_tiers.
     */
    whitelistedLps: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
