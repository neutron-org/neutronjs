import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAuctionBid, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        auctionBid(value: MsgAuctionBid): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        auctionBid(value: MsgAuctionBid): {
            typeUrl: string;
            value: MsgAuctionBid;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        auctionBid(value: MsgAuctionBid): {
            typeUrl: string;
            value: {
                bidder: string;
                bid: {
                    denom: string;
                    amount: string;
                };
                transactions: string[];
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    maxBundleSize: number;
                    escrowAccountAddress: string;
                    reserveFee: {
                        denom: string;
                        amount: string;
                    };
                    minBidIncrement: {
                        denom: string;
                        amount: string;
                    };
                    frontRunningProtection: boolean;
                    proposerFee: string;
                };
            };
        };
    };
    fromJSON: {
        auctionBid(value: any): {
            typeUrl: string;
            value: MsgAuctionBid;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        auctionBid(value: MsgAuctionBid): {
            typeUrl: string;
            value: MsgAuctionBid;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
