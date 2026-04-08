import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "slinky.marketmap.v1";
/** Params defines the parameters for the x/marketmap module. */
export interface Params {
    /**
     * MarketAuthorities is the list of authority accounts that are able to
     * control updating the marketmap.
     */
    marketAuthorities: string[];
    /**
     * Admin is an address that can remove addresses from the MarketAuthorities
     * list. Only governance can add to the MarketAuthorities or change the Admin.
     */
    admin: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
