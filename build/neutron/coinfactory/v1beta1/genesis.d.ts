import { Params } from "../params.js";
import { DenomAuthorityMetadata } from "./authorityMetadata.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "neutron.coinfactory.v1beta1";
/** GenesisState defines the coinfactory module's genesis state. */
export interface GenesisState {
    /** params defines the parameters of the module. */
    params: Params;
    factoryDenoms: GenesisDenom[];
}
/**
 * GenesisDenom defines a coinfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
    denom: string;
    authorityMetadata: DenomAuthorityMetadata;
    hookContractAddress?: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const GenesisDenom: {
    typeUrl: string;
    encode(message: GenesisDenom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisDenom;
    fromJSON(object: any): GenesisDenom;
    toJSON(message: GenesisDenom): JsonSafe<GenesisDenom>;
    fromPartial<I extends Exact<DeepPartial<GenesisDenom>, I>>(object: I): GenesisDenom;
};
