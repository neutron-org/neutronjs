import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface PairID {
    token0: string;
    token1: string;
}
export declare const PairID: {
    typeUrl: string;
    encode(message: PairID, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PairID;
    fromJSON(object: any): PairID;
    toJSON(message: PairID): JsonSafe<PairID>;
    fromPartial<I extends Exact<DeepPartial<PairID>, I>>(object: I): PairID;
};
