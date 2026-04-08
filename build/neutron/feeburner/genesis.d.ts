import { Params } from "./params.js";
import { TotalBurnedNeutronsAmount } from "./total_burned_neutrons_amount.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.feeburner";
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisState {
    params: Params;
    totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
