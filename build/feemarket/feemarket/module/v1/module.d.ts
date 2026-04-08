import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { DeepPartial, Exact } from "../../../../helpers.js";
import { JsonSafe } from "../../../../json-safe.js";
export declare const protobufPackage = "feemarket.feemarket.module.v1";
/** Module is the config object of the builder module. */
export interface Module {
    /**
     * Authority defines the custom module authority. If not set, defaults to the
     * governance module.
     */
    authority: string;
    /** FeeRecipientModule defines the custom module account that the fee will be sent to. */
    feeRecipientModule: string;
}
export declare const Module: {
    typeUrl: string;
    encode(message: Module, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): JsonSafe<Module>;
    fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module;
};
