import { Params } from "./params.js";
import { PacketID, Fee } from "./fee.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.feerefunder";
/** GenesisState defines the fee module's genesis state. */
export interface GenesisState {
    params: Params;
    feeInfos: FeeInfo[];
}
export interface FeeInfo {
    payer: string;
    packetId: PacketID;
    fee: Fee;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): JsonSafe<GenesisState>;
    fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState;
};
export declare const FeeInfo: {
    typeUrl: string;
    encode(message: FeeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FeeInfo;
    fromJSON(object: any): FeeInfo;
    toJSON(message: FeeInfo): JsonSafe<FeeInfo>;
    fromPartial<I extends Exact<DeepPartial<FeeInfo>, I>>(object: I): FeeInfo;
};
