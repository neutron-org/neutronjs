import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "neutron.interchaintxs.v1";
/** Params defines the parameters for the module. */
export interface Params {
    /** Defines maximum amount of messages to be passed in MsgSubmitTx */
    msgSubmitTxMaxMessages: bigint;
    /** Defines a minimum fee required to register interchain account */
    registerFee: Coin[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
