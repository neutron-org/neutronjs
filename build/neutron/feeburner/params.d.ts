import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.feeburner";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * Defines Neutron denom, which will be burned during fee processing, any
     * other denom will be sent to Treasury
     */
    neutronDenom: string;
    /** Deprecated in v0.4.4. Is not used anymore */
    reserveAddress: string;
    /** Defines treasury address */
    treasuryAddress: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
