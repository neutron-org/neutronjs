import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.contractmanager";
/**
 * Failure message contains information about ACK failures and can be used to
 * replay ACK in case of requirement.
 * Note that Failure means that sudo handler to cosmwasm contract failed for
 * some reason
 */
export interface Failure {
    /** Address of the failed contract */
    address: string;
    /** Id of the failure under specific address */
    id: bigint;
    /** Serialized MessageSudoCallback with Packet and Ack(if exists) */
    sudoPayload: Uint8Array;
    /** Redacted error response of the sudo call. Full error is emitted as an event */
    error: string;
}
export declare const Failure: {
    typeUrl: string;
    encode(message: Failure, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Failure;
    fromJSON(object: any): Failure;
    toJSON(message: Failure): JsonSafe<Failure>;
    fromPartial<I extends Exact<DeepPartial<Failure>, I>>(object: I): Failure;
};
