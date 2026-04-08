import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "feemarket.feemarket.v1";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
    /**
     * Params are the parameters for the feemarket module. These parameters
     * can be utilized to implement both the base EIP-1559 fee market and
     * and the AIMD EIP-1559 fee market.
     */
    params: Params;
    /** State contains the current state of the AIMD fee market. */
    state: State;
}
/**
 * State is utilized to track the current state of the fee market. This includes
 * the current base fee, learning rate, and block utilization within the
 * specified AIMD window.
 */
export interface State {
    /**
     * BaseGasPrice is the current base fee. This is denominated in the fee per
     * gas unit.
     */
    baseGasPrice: string;
    /** LearningRate is the current learning rate. */
    learningRate: string;
    /**
     * Window contains a list of the last blocks' utilization values. This is used
     * to calculate the next base fee. This stores the number of units of gas
     * consumed per block.
     */
    window: bigint[];
    /** Index is the index of the current block in the block utilization window. */
    index: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const State: {
    typeUrl: string;
    encode(message: State, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): State;
    fromJSON(object: any): State;
    toJSON(message: State): JsonSafe<State>;
    fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State;
};
