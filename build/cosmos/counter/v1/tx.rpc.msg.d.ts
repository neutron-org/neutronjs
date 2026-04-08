import { Rpc } from "../../../helpers.js";
import { MsgIncreaseCounter, MsgIncreaseCountResponse } from "./tx.js";
/** Msg defines the counter Msg service. */
export interface Msg {
    /** IncreaseCount increments the counter by the specified amount. */
    increaseCount(request: MsgIncreaseCounter): Promise<MsgIncreaseCountResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    increaseCount(request: MsgIncreaseCounter): Promise<MsgIncreaseCountResponse>;
}
