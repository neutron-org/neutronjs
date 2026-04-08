import { ConsensusState as ConsensusState1 } from "../../../ibc/lightclients/tendermint/v1/tendermint.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "neutron.state_verifier.v1";
/** Describes a "light" consensus state of the chain at a particular height */
export interface ConsensusState {
    /** Describes a block height for which the consensus height is saved */
    height: bigint;
    /** ConsensusState defines the consensus state from Tendermint */
    cs?: ConsensusState1;
}
/** Defines the state verifier module's genesis state. */
export interface GenesisState {
    states: ConsensusState[];
}
export declare const ConsensusState: {
    typeUrl: string;
    encode(message: ConsensusState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState;
    fromJSON(object: any): ConsensusState;
    toJSON(message: ConsensusState): JsonSafe<ConsensusState>;
    fromPartial<I extends Exact<DeepPartial<ConsensusState>, I>>(object: I): ConsensusState;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
