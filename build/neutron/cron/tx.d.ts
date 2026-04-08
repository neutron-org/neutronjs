import { MsgExecuteContract, ExecutionStage } from "./schedule.js";
import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.cron";
/** The MsgAddSchedule request type. */
export interface MsgAddSchedule {
    /** The address of the governance account. */
    authority: string;
    /** Name of the schedule */
    name: string;
    /** Period in blocks */
    period: bigint;
    /** Msgs that will be executed every certain number of blocks, specified in the `period` field */
    msgs: MsgExecuteContract[];
    /** Stage when messages will be executed */
    executionStage: ExecutionStage;
}
/** Defines the response structure for executing a MsgAddSchedule message. */
export interface MsgAddScheduleResponse {
}
/** The MsgRemoveSchedule request type. */
export interface MsgRemoveSchedule {
    /** The address of the governance account. */
    authority: string;
    /** Name of the schedule */
    name: string;
}
/** Defines the response structure for executing a MsgRemoveSchedule message. */
export interface MsgRemoveScheduleResponse {
}
/**
 * The MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParams {
    /** The address of the governance account. */
    authority: string;
    /**
     * Defines the x/cron parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
/**
 * Defines the response structure for executing a MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {
}
export declare const MsgAddSchedule: {
    typeUrl: string;
    encode(message: MsgAddSchedule, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddSchedule;
    fromJSON(object: any): MsgAddSchedule;
    toJSON(message: MsgAddSchedule): JsonSafe<MsgAddSchedule>;
    fromPartial<I extends Exact<DeepPartial<MsgAddSchedule>, I>>(object: I): MsgAddSchedule;
};
export declare const MsgAddScheduleResponse: {
    typeUrl: string;
    encode(_: MsgAddScheduleResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAddScheduleResponse;
    fromJSON(_: any): MsgAddScheduleResponse;
    toJSON(_: MsgAddScheduleResponse): JsonSafe<MsgAddScheduleResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgAddScheduleResponse>, I>>(_: I): MsgAddScheduleResponse;
};
export declare const MsgRemoveSchedule: {
    typeUrl: string;
    encode(message: MsgRemoveSchedule, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveSchedule;
    fromJSON(object: any): MsgRemoveSchedule;
    toJSON(message: MsgRemoveSchedule): JsonSafe<MsgRemoveSchedule>;
    fromPartial<I extends Exact<DeepPartial<MsgRemoveSchedule>, I>>(object: I): MsgRemoveSchedule;
};
export declare const MsgRemoveScheduleResponse: {
    typeUrl: string;
    encode(_: MsgRemoveScheduleResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveScheduleResponse;
    fromJSON(_: any): MsgRemoveScheduleResponse;
    toJSON(_: MsgRemoveScheduleResponse): JsonSafe<MsgRemoveScheduleResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgRemoveScheduleResponse>, I>>(_: I): MsgRemoveScheduleResponse;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
