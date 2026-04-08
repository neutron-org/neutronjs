import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundCommunityPool, MsgCommunityPoolSpend, MsgCreateContinuousFund, MsgCancelContinuousFund, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        createContinuousFund(value: MsgCreateContinuousFund): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        cancelContinuousFund(value: MsgCancelContinuousFund): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: MsgCommunityPoolSpend;
        };
        createContinuousFund(value: MsgCreateContinuousFund): {
            typeUrl: string;
            value: MsgCreateContinuousFund;
        };
        cancelContinuousFund(value: MsgCancelContinuousFund): {
            typeUrl: string;
            value: MsgCancelContinuousFund;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: {
                depositor: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: {
                authority: string;
                recipient: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        createContinuousFund(value: MsgCreateContinuousFund): {
            typeUrl: string;
            value: {
                authority: string;
                recipient: string;
                percentage: string;
                expiry?: {
                    seconds: string;
                    nanos: number;
                };
            };
        };
        cancelContinuousFund(value: MsgCancelContinuousFund): {
            typeUrl: string;
            value: {
                authority: string;
                recipient: string;
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    enabledDistributionDenoms: string[];
                    distributionFrequency: string;
                };
            };
        };
    };
    fromJSON: {
        fundCommunityPool(value: any): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
        communityPoolSpend(value: any): {
            typeUrl: string;
            value: MsgCommunityPoolSpend;
        };
        createContinuousFund(value: any): {
            typeUrl: string;
            value: MsgCreateContinuousFund;
        };
        cancelContinuousFund(value: any): {
            typeUrl: string;
            value: MsgCancelContinuousFund;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        fundCommunityPool(value: MsgFundCommunityPool): {
            typeUrl: string;
            value: MsgFundCommunityPool;
        };
        communityPoolSpend(value: MsgCommunityPoolSpend): {
            typeUrl: string;
            value: MsgCommunityPoolSpend;
        };
        createContinuousFund(value: MsgCreateContinuousFund): {
            typeUrl: string;
            value: MsgCreateContinuousFund;
        };
        cancelContinuousFund(value: MsgCancelContinuousFund): {
            typeUrl: string;
            value: MsgCancelContinuousFund;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
