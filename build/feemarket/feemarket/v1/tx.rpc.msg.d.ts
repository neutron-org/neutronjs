import { Rpc } from "../../../helpers.js";
import { MsgParams, MsgParamsResponse } from "./tx.js";
/** Message service defines the types of messages supported by the feemarket
 module. */
export interface Msg {
    /** Params defines a method for updating the feemarket module parameters. */
    params(request: MsgParams): Promise<MsgParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: MsgParams): Promise<MsgParamsResponse>;
}
