import { Rpc } from "../../../helpers.js";
import { MsgLoadTest, MsgLoadTestResponse } from "./tx.js";
/** Msg defines the benchmark Msg service. */
export interface Msg {
    /** LoadTest defines a method for executing a sequence of load test operations. */
    loadTest(request: MsgLoadTest): Promise<MsgLoadTestResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    loadTest(request: MsgLoadTest): Promise<MsgLoadTestResponse>;
}
