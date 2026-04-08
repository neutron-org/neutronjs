import { AminoMsg } from "@cosmjs/amino";
import { MsgFundCommunityPool, MsgCommunityPoolSpend, MsgCreateContinuousFund, MsgCancelContinuousFund, MsgUpdateParams } from "./tx.js";
export interface MsgFundCommunityPoolAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgFundCommunityPool";
    value: {
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgCommunityPoolSpendAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCommunityPoolSpend";
    value: {
        authority: string;
        recipient: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgCreateContinuousFundAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreateContinuousFund";
    value: {
        authority: string;
        recipient: string;
        percentage: string;
        expiry: string;
    };
}
export interface MsgCancelContinuousFundAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCancelContinuousFund";
    value: {
        authority: string;
        recipient: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            enabled_distribution_denoms: string[];
            distribution_frequency: string;
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.protocolpool.v1.MsgFundCommunityPool": {
        aminoType: string;
        toAmino: ({ depositor, amount }: MsgFundCommunityPool) => MsgFundCommunityPoolAminoType["value"];
        fromAmino: ({ depositor, amount }: MsgFundCommunityPoolAminoType["value"]) => MsgFundCommunityPool;
    };
    "/cosmos.protocolpool.v1.MsgCommunityPoolSpend": {
        aminoType: string;
        toAmino: ({ authority, recipient, amount, }: MsgCommunityPoolSpend) => MsgCommunityPoolSpendAminoType["value"];
        fromAmino: ({ authority, recipient, amount, }: MsgCommunityPoolSpendAminoType["value"]) => MsgCommunityPoolSpend;
    };
    "/cosmos.protocolpool.v1.MsgCreateContinuousFund": {
        aminoType: string;
        toAmino: ({ authority, recipient, percentage, expiry, }: MsgCreateContinuousFund) => MsgCreateContinuousFundAminoType["value"];
        fromAmino: ({ authority, recipient, percentage, expiry, }: MsgCreateContinuousFundAminoType["value"]) => MsgCreateContinuousFund;
    };
    "/cosmos.protocolpool.v1.MsgCancelContinuousFund": {
        aminoType: string;
        toAmino: ({ authority, recipient, }: MsgCancelContinuousFund) => MsgCancelContinuousFundAminoType["value"];
        fromAmino: ({ authority, recipient, }: MsgCancelContinuousFundAminoType["value"]) => MsgCancelContinuousFund;
    };
    "/cosmos.protocolpool.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
