import { BinaryReader, BinaryWriter } from "../../../../../binary.js";
import { DeepPartial, Exact } from "../../../../../helpers.js";
import { JsonSafe } from "../../../../../json-safe.js";
export declare const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */
export interface Params {
    /** controller_enabled enables or disables the controller submodule. */
    controllerEnabled: boolean;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
