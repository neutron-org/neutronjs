//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { MsgAuctionBid, MsgUpdateParams } from "./tx";
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
export const AminoConverter = {
  "/sdk.auction.v1.MsgAuctionBid": {
    aminoType: "block-sdk/x/auction/MsgAuctionBid",
    toAmino: ({ bidder, bid, transactions }: MsgAuctionBid): MsgAuctionBidAminoType["value"] => {
      return {
        bidder,
        bid: {
          denom: bid.denom,
          amount: bid.amount,
        },
        transactions,
      };
    },
    fromAmino: ({ bidder, bid, transactions }: MsgAuctionBidAminoType["value"]): MsgAuctionBid => {
      return {
        bidder,
        bid:
          bid == null
            ? bid
            : {
                denom: bid.denom,
                amount: bid.amount,
              },
        transactions,
      };
    },
  },
  "/sdk.auction.v1.MsgUpdateParams": {
    aminoType: "block-sdk/x/auction/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          max_bundle_size: omitDefault(params.maxBundleSize),
          escrow_account_address: params.escrowAccountAddress,
          reserve_fee: {
            denom: params.reserveFee.denom,
            amount: params.reserveFee.amount,
          },
          min_bid_increment: {
            denom: params.minBidIncrement.denom,
            amount: params.minBidIncrement.amount,
          },
          front_running_protection: omitDefault(params.frontRunningProtection),
          proposer_fee: params.proposerFee,
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params:
          params == null
            ? params
            : {
                maxBundleSize: params.max_bundle_size,
                escrowAccountAddress: params.escrow_account_address,
                reserveFee:
                  params.reserve_fee == null
                    ? params.reserve_fee
                    : {
                        denom: params.reserve_fee.denom,
                        amount: params.reserve_fee.amount,
                      },
                minBidIncrement:
                  params.min_bid_increment == null
                    ? params.min_bid_increment
                    : {
                        denom: params.min_bid_increment.denom,
                        amount: params.min_bid_increment.amount,
                      },
                frontRunningProtection: params.front_running_protection,
                proposerFee: params.proposer_fee,
              },
      };
    },
  },
};
