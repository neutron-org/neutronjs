import { Rpc } from "../../../helpers.js";
import { MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgCommunityPoolSpend, MsgCommunityPoolSpendResponse, MsgCreateContinuousFund, MsgCreateContinuousFundResponse, MsgCancelContinuousFund, MsgCancelContinuousFundResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx.js";
/** Msg defines the pool Msg service. */
export interface Msg {
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
    /**
     * CommunityPoolSpend defines a governance operation for sending tokens from
     * the community pool in the x/protocolpool module to another account, which
     * could be the governance module itself. The authority is defined in the
     * keeper.
     */
    communityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse>;
    /**
     * CreateContinuousFund defines a method to distribute a percentage of funds to an address continuously.
     * This ContinuousFund can be indefinite or run until a given expiry time.
     * Funds come from validator block rewards from x/distribution, but may also come from
     * any user who funds the ProtocolPoolEscrow module account directly through x/bank.
     */
    createContinuousFund(request: MsgCreateContinuousFund): Promise<MsgCreateContinuousFundResponse>;
    /** CancelContinuousFund defines a method for cancelling continuous fund. */
    cancelContinuousFund(request: MsgCancelContinuousFund): Promise<MsgCancelContinuousFundResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/protocolpool module parameters.
     * The authority is defined in the keeper.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
    communityPoolSpend(request: MsgCommunityPoolSpend): Promise<MsgCommunityPoolSpendResponse>;
    createContinuousFund(request: MsgCreateContinuousFund): Promise<MsgCreateContinuousFundResponse>;
    cancelContinuousFund(request: MsgCancelContinuousFund): Promise<MsgCancelContinuousFundResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
