"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/sdk.auction.v1.MsgAuctionBid": {
        aminoType: "block-sdk/x/auction/MsgAuctionBid",
        toAmino: ({ bidder, bid, transactions }) => {
            return {
                bidder,
                bid: {
                    denom: bid.denom,
                    amount: bid.amount,
                },
                transactions,
            };
        },
        fromAmino: ({ bidder, bid, transactions }) => {
            return {
                bidder,
                bid: bid == null
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
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    max_bundle_size: (0, helpers_js_1.omitDefault)(params.maxBundleSize),
                    escrow_account_address: params.escrowAccountAddress,
                    reserve_fee: {
                        denom: params.reserveFee.denom,
                        amount: params.reserveFee.amount,
                    },
                    min_bid_increment: {
                        denom: params.minBidIncrement.denom,
                        amount: params.minBidIncrement.amount,
                    },
                    front_running_protection: (0, helpers_js_1.omitDefault)(params.frontRunningProtection),
                    proposer_fee: params.proposerFee,
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        maxBundleSize: params.max_bundle_size,
                        escrowAccountAddress: params.escrow_account_address,
                        reserveFee: params.reserve_fee == null
                            ? params.reserve_fee
                            : {
                                denom: params.reserve_fee.denom,
                                amount: params.reserve_fee.amount,
                            },
                        minBidIncrement: params.min_bid_increment == null
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
//# sourceMappingURL=tx.amino.js.map