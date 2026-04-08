import { Rpc } from "../../helpers.js";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgResubmitFailure, MsgResubmitFailureResponse } from "./tx.js";
/** Msg defines the Msg service. */
export interface Msg {
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    resubmitFailure(request: MsgResubmitFailure): Promise<MsgResubmitFailureResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    resubmitFailure(request: MsgResubmitFailure): Promise<MsgResubmitFailureResponse>;
}
