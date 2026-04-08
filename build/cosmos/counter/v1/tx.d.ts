import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "cosmos.counter.v1";
/** MsgIncreaseCounter defines a count Msg service counter. */
export interface MsgIncreaseCounter {
    /** signer is the address that controls the module (defaults to x/gov unless overwritten). */
    signer: string;
    /** count is the number of times to increment the counter. */
    count: bigint;
}
/** MsgIncreaseCountResponse is the Msg/Counter response type. */
export interface MsgIncreaseCountResponse {
    /** new_count is the number of times the counter was incremented. */
    newCount: bigint;
}
export declare const MsgIncreaseCounter: {
    typeUrl: string;
    encode(message: MsgIncreaseCounter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIncreaseCounter;
    fromJSON(object: any): MsgIncreaseCounter;
    toJSON(message: MsgIncreaseCounter): JsonSafe<MsgIncreaseCounter>;
    fromPartial<I extends Exact<DeepPartial<MsgIncreaseCounter>, I>>(object: I): MsgIncreaseCounter;
};
export declare const MsgIncreaseCountResponse: {
    typeUrl: string;
    encode(message: MsgIncreaseCountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIncreaseCountResponse;
    fromJSON(object: any): MsgIncreaseCountResponse;
    toJSON(message: MsgIncreaseCountResponse): JsonSafe<MsgIncreaseCountResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgIncreaseCountResponse>, I>>(object: I): MsgIncreaseCountResponse;
};
