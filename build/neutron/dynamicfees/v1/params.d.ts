import { DecCoin } from "../../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "neutron.dynamicfees.v1";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * List of asset prices by the NTRN
     * it's used in cooperation with feemarket module
     * ntrn_prices is a data source to convert gas_price from feemarket's base_denom (untrn)
     * into a given asset
     */
    ntrnPrices: DecCoin[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
