import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface PrecDecCoin {
    denom: string;
    amount: string;
}
export declare const PrecDecCoin: {
    typeUrl: string;
    encode(message: PrecDecCoin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PrecDecCoin;
    fromJSON(object: any): PrecDecCoin;
    toJSON(message: PrecDecCoin): JsonSafe<PrecDecCoin>;
    fromPartial<I extends Exact<DeepPartial<PrecDecCoin>, I>>(object: I): PrecDecCoin;
};
