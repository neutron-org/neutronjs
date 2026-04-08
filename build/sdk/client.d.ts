import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as sdkAuctionV1TxAmino from "./auction/v1/tx.amino.js";
export declare const sdkAminoConverters: {
    "/sdk.auction.v1.MsgAuctionBid": {
        aminoType: string;
        toAmino: ({ bidder, bid, transactions }: import("./auction/v1/tx.js").MsgAuctionBid) => sdkAuctionV1TxAmino.MsgAuctionBidAminoType["value"];
        fromAmino: ({ bidder, bid, transactions }: sdkAuctionV1TxAmino.MsgAuctionBidAminoType["value"]) => import("./auction/v1/tx.js").MsgAuctionBid;
    };
    "/sdk.auction.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./auction/v1/tx.js").MsgUpdateParams) => sdkAuctionV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: sdkAuctionV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./auction/v1/tx.js").MsgUpdateParams;
    };
};
export declare const sdkProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningSdkClientOptions: ({ defaultTypes, }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningSdkClient: ({ rpcEndpoint, signer, defaultTypes, }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
