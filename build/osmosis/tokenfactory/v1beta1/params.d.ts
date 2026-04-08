import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "osmosis.tokenfactory.v1beta1";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
    /**
     * DenomCreationFee defines the fee to be charged on the creation of a new
     * denom. The fee is drawn from the MsgCreateDenom's sender account, and
     * transferred to the community pool.
     */
    denomCreationFee: Coin[];
    /**
     * DenomCreationGasConsume defines the gas cost for creating a new denom.
     * This is intended as a spam deterrence mechanism.
     *
     * See: https://github.com/CosmWasm/token-factory/issues/11
     */
    denomCreationGasConsume?: bigint;
    /**
     * FeeCollectorAddress is the address where fees collected from denom creation
     * are sent to
     */
    feeCollectorAddress: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
