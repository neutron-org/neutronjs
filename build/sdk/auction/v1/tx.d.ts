import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { Params } from "./genesis.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "sdk.auction.v1";
/**
 * MsgAuctionBid defines a request type for sending bids to the x/auction
 * module.
 */
export interface MsgAuctionBid {
    /**
     * bidder is the address of the account that is submitting a bid to the
     * auction.
     */
    bidder: string;
    /**
     * bid is the amount of coins that the bidder is bidding to participate in the
     * auction.
     */
    bid: Coin;
    /**
     * transactions are the bytes of the transactions that the bidder wants to
     * bundle together.
     */
    transactions: Uint8Array[];
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponse {
}
/**
 * MsgUpdateParams defines a request type for updating the x/auction module
 * parameters.
 */
export interface MsgUpdateParams {
    /**
     * authority is the address of the account that is authorized to update the
     * x/auction module parameters.
     */
    authority: string;
    /** params is the new parameters for the x/auction module. */
    params: Params;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}
export declare const MsgAuctionBid: {
    typeUrl: string;
    encode(message: MsgAuctionBid, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAuctionBid;
    fromJSON(object: any): MsgAuctionBid;
    toJSON(message: MsgAuctionBid): JsonSafe<MsgAuctionBid>;
    fromPartial<I extends Exact<DeepPartial<MsgAuctionBid>, I>>(object: I): MsgAuctionBid;
};
export declare const MsgAuctionBidResponse: {
    typeUrl: string;
    encode(_: MsgAuctionBidResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAuctionBidResponse;
    fromJSON(_: any): MsgAuctionBidResponse;
    toJSON(_: MsgAuctionBidResponse): JsonSafe<MsgAuctionBidResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgAuctionBidResponse>, I>>(_: I): MsgAuctionBidResponse;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
