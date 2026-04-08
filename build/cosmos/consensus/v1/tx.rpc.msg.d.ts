import { Rpc } from "../../../helpers.js";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx.js";
/** Msg defines the consensus Msg service. */
export interface Msg {
    /**
     * UpdateParams defines a governance operation for updating the x/consensus module parameters.
     * The authority is defined in the keeper.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
