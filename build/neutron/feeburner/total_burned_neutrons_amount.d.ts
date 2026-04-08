import { Coin } from "../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.feeburner";
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmount {
    coin: Coin;
}
export declare const TotalBurnedNeutronsAmount: {
    typeUrl: string;
    encode(message: TotalBurnedNeutronsAmount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TotalBurnedNeutronsAmount;
    fromJSON(object: any): TotalBurnedNeutronsAmount;
    toJSON(message: TotalBurnedNeutronsAmount): JsonSafe<TotalBurnedNeutronsAmount>;
    fromPartial<I extends Exact<DeepPartial<TotalBurnedNeutronsAmount>, I>>(object: I): TotalBurnedNeutronsAmount;
};
