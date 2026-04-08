import { Timeout, Order } from "./channel.js";
import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { DeepPartial, Exact } from "../../../../helpers.js";
import { JsonSafe } from "../../../../json-safe.js";
export declare const protobufPackage = "ibc.core.channel.v1";
/**
 * Upgrade is a verifiable type which contains the relevant information
 * for an attempted upgrade. It provides the proposed changes to the channel
 * end, the timeout for this upgrade attempt and the next packet sequence
 * which allows the counterparty to efficiently know the highest sequence it has received.
 * The next sequence send is used for pruning and upgrading from unordered to ordered channels.
 */
export interface Upgrade {
    fields: UpgradeFields;
    timeout: Timeout;
    nextSequenceSend: bigint;
}
/**
 * UpgradeFields are the fields in a channel end which may be changed
 * during a channel upgrade.
 */
export interface UpgradeFields {
    ordering: Order;
    connectionHops: string[];
    version: string;
}
/**
 * ErrorReceipt defines a type which encapsulates the upgrade sequence and error associated with the
 * upgrade handshake failure. When a channel upgrade handshake is aborted both chains are expected to increment to the
 * next sequence.
 */
export interface ErrorReceipt {
    /** the channel upgrade sequence */
    sequence: bigint;
    /** the error message detailing the cause of failure */
    message: string;
}
export declare const Upgrade: {
    typeUrl: string;
    encode(message: Upgrade, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Upgrade;
    fromJSON(object: any): Upgrade;
    toJSON(message: Upgrade): JsonSafe<Upgrade>;
    fromPartial<I extends Exact<DeepPartial<Upgrade>, I>>(object: I): Upgrade;
};
export declare const UpgradeFields: {
    typeUrl: string;
    encode(message: UpgradeFields, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpgradeFields;
    fromJSON(object: any): UpgradeFields;
    toJSON(message: UpgradeFields): JsonSafe<UpgradeFields>;
    fromPartial<I extends Exact<DeepPartial<UpgradeFields>, I>>(object: I): UpgradeFields;
};
export declare const ErrorReceipt: {
    typeUrl: string;
    encode(message: ErrorReceipt, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ErrorReceipt;
    fromJSON(object: any): ErrorReceipt;
    toJSON(message: ErrorReceipt): JsonSafe<ErrorReceipt>;
    fromPartial<I extends Exact<DeepPartial<ErrorReceipt>, I>>(object: I): ErrorReceipt;
};
