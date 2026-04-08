import { PairID } from "./pair_id.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface PoolMetadata {
    id: bigint;
    tick: bigint;
    fee: bigint;
    pairId?: PairID;
}
export declare const PoolMetadata: {
    typeUrl: string;
    encode(message: PoolMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolMetadata;
    fromJSON(object: any): PoolMetadata;
    toJSON(message: PoolMetadata): JsonSafe<PoolMetadata>;
    fromPartial<I extends Exact<DeepPartial<PoolMetadata>, I>>(object: I): PoolMetadata;
};
