import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "neutron.contractmanager.v1";
/** Deprecated. Used only for migration purposes. */
export interface Failure {
    /** ChannelId */
    channelId: string;
    /** Address of the failed contract */
    address: string;
    /** id of the failure under specific address */
    id: bigint;
    /** ACK id to restore */
    ackId: bigint;
    /** Acknowledgement type */
    ackType: string;
}
export declare const Failure: {
    typeUrl: string;
    encode(message: Failure, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Failure;
    fromJSON(object: any): Failure;
    toJSON(message: Failure): JsonSafe<Failure>;
    fromPartial<I extends Exact<DeepPartial<Failure>, I>>(object: I): Failure;
};
