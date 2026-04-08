import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface TradePairID {
    makerDenom: string;
    takerDenom: string;
}
export declare const TradePairID: {
    typeUrl: string;
    encode(message: TradePairID, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TradePairID;
    fromJSON(object: any): TradePairID;
    toJSON(message: TradePairID): JsonSafe<TradePairID>;
    fromPartial<I extends Exact<DeepPartial<TradePairID>, I>>(object: I): TradePairID;
};
