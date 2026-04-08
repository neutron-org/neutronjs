import { Rpc } from "../../../helpers.js";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx.js";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
