import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "slinky.types.v1";
/**
 * CurrencyPair is the standard representation of a pair of assets, where one
 * (Base) is priced in terms of the other (Quote)
 */
export interface CurrencyPair {
    base: string;
    quote: string;
}
export declare const CurrencyPair: {
    typeUrl: string;
    encode(message: CurrencyPair, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CurrencyPair;
    fromJSON(object: any): CurrencyPair;
    toJSON(message: CurrencyPair): JsonSafe<CurrencyPair>;
    fromPartial<I extends Exact<DeepPartial<CurrencyPair>, I>>(object: I): CurrencyPair;
};
