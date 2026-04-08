import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { JsonSafe } from "../../../../json-safe.js";
import { DeepPartial, Exact } from "../../../../helpers.js";
export declare const protobufPackage = "cosmos.feegrant.module.v1";
/** Module is the config object of the feegrant module. */
export interface Module {
}
export declare const Module: {
    typeUrl: string;
    encode(_: Module, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Module;
    fromJSON(_: any): Module;
    toJSON(_: Module): JsonSafe<Module>;
    fromPartial<I extends Exact<DeepPartial<Module>, I>>(_: I): Module;
};
