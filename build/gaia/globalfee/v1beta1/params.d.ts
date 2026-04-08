import { DecCoin } from "../../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "gaia.globalfee.v1beta1";
/** Params defines the set of module parameters. */
export interface Params {
    /**
     * minimum_gas_prices stores the minimum gas price(s) for all TX on the chain.
     * When multiple coins are defined then they are accepted alternatively.
     * The list must be sorted by denoms asc. No duplicate denoms or zero amount
     * values allowed. For more information see
     * https://docs.cosmos.network/main/modules/auth#concepts
     */
    minimumGasPrices: DecCoin[];
    /**
     * bypass_min_fee_msg_types defines a list of message type urls
     * that are free of fee charge.
     */
    bypassMinFeeMsgTypes: string[];
    /**
     * max_total_bypass_min_fee_msg_gas_usage defines the total maximum gas usage
     * allowed for a transaction containing only messages of types in bypass_min_fee_msg_types
     * to bypass fee charge.
     */
    maxTotalBypassMinFeeMsgGasUsage: bigint;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
