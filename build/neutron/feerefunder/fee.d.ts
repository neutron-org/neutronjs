import { Coin } from "../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { JsonSafe } from "../../json-safe.js";
import { DeepPartial, Exact } from "../../helpers.js";
export declare const protobufPackage = "neutron.feerefunder";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
    /** the packet receive fee */
    recvFee: Coin[];
    /** the packet acknowledgement fee */
    ackFee: Coin[];
    /** the packet timeout fee */
    timeoutFee: Coin[];
}
export interface PacketID {
    channelId: string;
    portId: string;
    sequence: bigint;
}
export declare const Fee: {
    typeUrl: string;
    encode(message: Fee, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Fee;
    fromJSON(object: any): Fee;
    toJSON(message: Fee): JsonSafe<Fee>;
    fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee;
};
export declare const PacketID: {
    typeUrl: string;
    encode(message: PacketID, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PacketID;
    fromJSON(object: any): PacketID;
    toJSON(message: PacketID): JsonSafe<PacketID>;
    fromPartial<I extends Exact<DeepPartial<PacketID>, I>>(object: I): PacketID;
};
