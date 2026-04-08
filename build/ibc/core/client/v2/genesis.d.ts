import { CounterpartyInfo } from "./counterparty.js";
import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { DeepPartial, Exact } from "../../../../helpers.js";
import { JsonSafe } from "../../../../json-safe.js";
export declare const protobufPackage = "ibc.core.client.v2";
/** GenesisCounterpartyInfo defines the state associating a client with a counterparty. */
export interface GenesisCounterpartyInfo {
    /** ClientId is the ID of the given client. */
    clientId: string;
    /** CounterpartyInfo is the counterparty info of the given client. */
    counterpartyInfo: CounterpartyInfo;
}
/** GenesisState defines the ibc client v2 submodule's genesis state. */
export interface GenesisState {
    /** counterparty info for each client */
    counterpartyInfos: GenesisCounterpartyInfo[];
}
export declare const GenesisCounterpartyInfo: {
    typeUrl: string;
    encode(message: GenesisCounterpartyInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisCounterpartyInfo;
    fromJSON(object: any): GenesisCounterpartyInfo;
    toJSON(message: GenesisCounterpartyInfo): JsonSafe<GenesisCounterpartyInfo>;
    fromPartial<I extends Exact<DeepPartial<GenesisCounterpartyInfo>, I>>(object: I): GenesisCounterpartyInfo;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
