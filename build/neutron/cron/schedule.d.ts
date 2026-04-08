import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.cron";
/** Defines when messages will be executed in the block */
export declare enum ExecutionStage {
    /** EXECUTION_STAGE_END_BLOCKER - Execution at the end of the block */
    EXECUTION_STAGE_END_BLOCKER = 0,
    /** EXECUTION_STAGE_BEGIN_BLOCKER - Execution at the beginning of the block */
    EXECUTION_STAGE_BEGIN_BLOCKER = 1,
    UNRECOGNIZED = -1
}
export declare function executionStageFromJSON(object: any): ExecutionStage;
export declare function executionStageToJSON(object: ExecutionStage): string;
/** Defines the schedule for execution */
export interface Schedule {
    /** Name of schedule */
    name: string;
    /** Period in blocks */
    period: bigint;
    /** Msgs that will be executed every certain number of blocks, specified in the `period` field */
    msgs: MsgExecuteContract[];
    /** Last execution's block height */
    lastExecuteHeight: bigint;
    /** Stage when messages will be executed */
    executionStage: ExecutionStage;
}
/** Defines the contract and the message to pass */
export interface MsgExecuteContract {
    /** The address of the smart contract */
    contract: string;
    /** JSON encoded message to be passed to the contract */
    msg: string;
}
/** Defines the number of current schedules */
export interface ScheduleCount {
    /** The number of current schedules */
    count: number;
}
export declare const Schedule: {
    typeUrl: string;
    encode(message: Schedule, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Schedule;
    fromJSON(object: any): Schedule;
    toJSON(message: Schedule): JsonSafe<Schedule>;
    fromPartial<I extends Exact<DeepPartial<Schedule>, I>>(object: I): Schedule;
};
export declare const MsgExecuteContract: {
    typeUrl: string;
    encode(message: MsgExecuteContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): JsonSafe<MsgExecuteContract>;
    fromPartial<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(object: I): MsgExecuteContract;
};
export declare const ScheduleCount: {
    typeUrl: string;
    encode(message: ScheduleCount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ScheduleCount;
    fromJSON(object: any): ScheduleCount;
    toJSON(message: ScheduleCount): JsonSafe<ScheduleCount>;
    fromPartial<I extends Exact<DeepPartial<ScheduleCount>, I>>(object: I): ScheduleCount;
};
