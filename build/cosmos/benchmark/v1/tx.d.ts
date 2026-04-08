import { Op } from "./benchmark.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "cosmos.benchmark.v1";
/** MsgLoadTestOps defines a message containing a sequence of load test operations. */
export interface MsgLoadTest {
    caller: Uint8Array;
    ops: Op[];
}
/** MsgLoadTestResponse defines a message containing the results of a load test operation. */
export interface MsgLoadTestResponse {
    totalTime: bigint;
    totalErrors: bigint;
}
export declare const MsgLoadTest: {
    typeUrl: string;
    encode(message: MsgLoadTest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLoadTest;
    fromJSON(object: any): MsgLoadTest;
    toJSON(message: MsgLoadTest): JsonSafe<MsgLoadTest>;
    fromPartial<I extends Exact<DeepPartial<MsgLoadTest>, I>>(object: I): MsgLoadTest;
};
export declare const MsgLoadTestResponse: {
    typeUrl: string;
    encode(message: MsgLoadTestResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLoadTestResponse;
    fromJSON(object: any): MsgLoadTestResponse;
    toJSON(message: MsgLoadTestResponse): JsonSafe<MsgLoadTestResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgLoadTestResponse>, I>>(object: I): MsgLoadTestResponse;
};
