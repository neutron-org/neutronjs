import { Rpc } from "../../helpers.js";
import { MsgAddSchedule, MsgAddScheduleResponse, MsgRemoveSchedule, MsgRemoveScheduleResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx.js";
/** Defines the Msg service. */
export interface Msg {
    /** Adds new schedule. */
    addSchedule(request: MsgAddSchedule): Promise<MsgAddScheduleResponse>;
    /** Removes schedule. */
    removeSchedule(request: MsgRemoveSchedule): Promise<MsgRemoveScheduleResponse>;
    /** Updates the module parameters. */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addSchedule(request: MsgAddSchedule): Promise<MsgAddScheduleResponse>;
    removeSchedule(request: MsgRemoveSchedule): Promise<MsgRemoveScheduleResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
