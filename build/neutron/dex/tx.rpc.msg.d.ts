import { Rpc } from "../../helpers.js";
import { MsgDeposit, MsgDepositResponse, MsgWithdrawal, MsgWithdrawalResponse, MsgWithdrawalWithShares, MsgPlaceLimitOrder, MsgPlaceLimitOrderResponse, MsgWithdrawFilledLimitOrder, MsgWithdrawFilledLimitOrderResponse, MsgCancelLimitOrder, MsgCancelLimitOrderResponse, MsgMultiHopSwap, MsgMultiHopSwapResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx.js";
/** Msg defines the Msg service. */
export interface Msg {
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdrawal(request: MsgWithdrawal): Promise<MsgWithdrawalResponse>;
    withdrawalWithShares(request: MsgWithdrawalWithShares): Promise<MsgWithdrawalResponse>;
    placeLimitOrder(request: MsgPlaceLimitOrder): Promise<MsgPlaceLimitOrderResponse>;
    withdrawFilledLimitOrder(request: MsgWithdrawFilledLimitOrder): Promise<MsgWithdrawFilledLimitOrderResponse>;
    cancelLimitOrder(request: MsgCancelLimitOrder): Promise<MsgCancelLimitOrderResponse>;
    multiHopSwap(request: MsgMultiHopSwap): Promise<MsgMultiHopSwapResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
    withdrawal(request: MsgWithdrawal): Promise<MsgWithdrawalResponse>;
    withdrawalWithShares(request: MsgWithdrawalWithShares): Promise<MsgWithdrawalResponse>;
    placeLimitOrder(request: MsgPlaceLimitOrder): Promise<MsgPlaceLimitOrderResponse>;
    withdrawFilledLimitOrder(request: MsgWithdrawFilledLimitOrder): Promise<MsgWithdrawFilledLimitOrderResponse>;
    cancelLimitOrder(request: MsgCancelLimitOrder): Promise<MsgCancelLimitOrderResponse>;
    multiHopSwap(request: MsgMultiHopSwap): Promise<MsgMultiHopSwapResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
