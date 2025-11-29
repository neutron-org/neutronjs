//@ts-nocheck
/* eslint-disable */
import { buildTx } from "../../../helper-func-types.js";
import { MsgAuctionBid, MsgUpdateParams } from "./tx.js";
/**
 * AuctionBid defines a method for sending bids to the x/auction module.
 * @name auctionBid
 * @package sdk.auction.v1
 * @see proto service: sdk.auction.v1.AuctionBid
 */
export const auctionBid = buildTx<MsgAuctionBid>({
  msg: MsgAuctionBid,
});
/**
 * UpdateParams defines a governance operation for updating the x/auction
 * module parameters. The authority is hard-coded to the x/gov module account.
 * @name updateParams
 * @package sdk.auction.v1
 * @see proto service: sdk.auction.v1.UpdateParams
 */
export const updateParams = buildTx<MsgUpdateParams>({
  msg: MsgUpdateParams,
});
