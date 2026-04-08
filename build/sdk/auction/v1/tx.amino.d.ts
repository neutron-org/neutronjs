import { AminoMsg } from "@cosmjs/amino";
import { MsgAuctionBid, MsgUpdateParams } from "./tx.js";
export interface MsgAuctionBidAminoType extends AminoMsg {
    type: "block-sdk/x/auction/MsgAuctionBid";
    value: {
        bidder: string;
        bid: {
            denom: string;
            amount: string;
        };
        transactions: Uint8Array[];
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "block-sdk/x/auction/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            max_bundle_size: number;
            escrow_account_address: Uint8Array;
            reserve_fee: {
                denom: string;
                amount: string;
            };
            min_bid_increment: {
                denom: string;
                amount: string;
            };
            front_running_protection: boolean;
            proposer_fee: string;
        };
    };
}
export declare const AminoConverter: {
    "/sdk.auction.v1.MsgAuctionBid": {
        aminoType: string;
        toAmino: ({ bidder, bid, transactions }: MsgAuctionBid) => MsgAuctionBidAminoType["value"];
        fromAmino: ({ bidder, bid, transactions }: MsgAuctionBidAminoType["value"]) => MsgAuctionBid;
    };
    "/sdk.auction.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
