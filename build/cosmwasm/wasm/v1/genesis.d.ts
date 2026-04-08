import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "./tx.js";
import { Params, CodeInfo, ContractInfo, Model, ContractCodeHistoryEntry } from "./types.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    params: Params;
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
    genMsgs: GenesisState_GenMsgs[];
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgs {
    storeCode?: MsgStoreCode;
    instantiateContract?: MsgInstantiateContract;
    executeContract?: MsgExecuteContract;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeId: bigint;
    codeInfo: CodeInfo;
    codeBytes: Uint8Array;
    /** Pinned to wasmvm cache */
    pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: string;
    contractInfo: ContractInfo;
    contractState: Model[];
    contractCodeHistory: ContractCodeHistoryEntry[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
    idKey: Uint8Array;
    value: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const GenesisState_GenMsgs: {
    typeUrl: string;
    encode(message: GenesisState_GenMsgs, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState_GenMsgs;
    fromJSON(object: any): GenesisState_GenMsgs;
    toJSON(message: GenesisState_GenMsgs): JsonSafe<GenesisState_GenMsgs>;
    fromPartial<I extends Exact<DeepPartial<GenesisState_GenMsgs>, I>>(object: I): GenesisState_GenMsgs;
};
export declare const Code: {
    typeUrl: string;
    encode(message: Code, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Code;
    fromJSON(object: any): Code;
    toJSON(message: Code): JsonSafe<Code>;
    fromPartial<I extends Exact<DeepPartial<Code>, I>>(object: I): Code;
};
export declare const Contract: {
    typeUrl: string;
    encode(message: Contract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): JsonSafe<Contract>;
    fromPartial<I extends Exact<DeepPartial<Contract>, I>>(object: I): Contract;
};
export declare const Sequence: {
    typeUrl: string;
    encode(message: Sequence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Sequence;
    fromJSON(object: any): Sequence;
    toJSON(message: Sequence): JsonSafe<Sequence>;
    fromPartial<I extends Exact<DeepPartial<Sequence>, I>>(object: I): Sequence;
};
