import { Rpc } from "../../helpers.js";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgFundTreasury, MsgFundTreasuryResponse } from "./tx.js";
/** Defines the Msg interface of the module. */
export interface Msg {
    /**
     * Updates the parameters of the revenue module. This action can only be performed by the
     * module's authority.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    /** FundTreasury funds the revenue treasury module account with the specified amount. */
    fundTreasury(request: MsgFundTreasury): Promise<MsgFundTreasuryResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
    fundTreasury(request: MsgFundTreasury): Promise<MsgFundTreasuryResponse>;
}
