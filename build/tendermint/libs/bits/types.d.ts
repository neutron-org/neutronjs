import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "tendermint.libs.bits";
export interface BitArray {
    bits: bigint;
    elems: bigint[];
}
export declare const BitArray: {
    typeUrl: string;
    encode(message: BitArray, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BitArray;
    fromJSON(object: any): BitArray;
    toJSON(message: BitArray): JsonSafe<BitArray>;
    fromPartial<I extends Exact<DeepPartial<BitArray>, I>>(object: I): BitArray;
};
