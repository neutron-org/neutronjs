import { Rpc } from "../../../helpers.js";
import { MsgAuctionBid, MsgAuctionBidResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx.js";
/** Msg defines the x/auction Msg service. */
export interface Msg {
    /** AuctionBid defines a method for sending bids to the x/auction module. */
    auctionBid(request: MsgAuctionBid): Promise<MsgAuctionBidResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/auction
     * module parameters. The authority is hard-coded to the x/gov module account.
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    auctionBid(request: MsgAuctionBid): Promise<MsgAuctionBidResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
