import { AminoMsg } from "@cosmjs/amino";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx.js";
export interface MsgGrantAllowanceAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgGrantAllowance";
    value: {
        granter: string;
        grantee: string;
        allowance: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export interface MsgRevokeAllowanceAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgRevokeAllowance";
    value: {
        granter: string;
        grantee: string;
    };
}
export interface MsgPruneAllowancesAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgPruneAllowances";
    value: {
        pruner: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
        aminoType: string;
        toAmino: ({ granter, grantee, allowance }: MsgGrantAllowance) => MsgGrantAllowanceAminoType["value"];
        fromAmino: ({ granter, grantee, allowance }: MsgGrantAllowanceAminoType["value"]) => MsgGrantAllowance;
    };
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
        aminoType: string;
        toAmino: ({ granter, grantee }: MsgRevokeAllowance) => MsgRevokeAllowanceAminoType["value"];
        fromAmino: ({ granter, grantee }: MsgRevokeAllowanceAminoType["value"]) => MsgRevokeAllowance;
    };
    "/cosmos.feegrant.v1beta1.MsgPruneAllowances": {
        aminoType: string;
        toAmino: ({ pruner }: MsgPruneAllowances) => MsgPruneAllowancesAminoType["value"];
        fromAmino: ({ pruner }: MsgPruneAllowancesAminoType["value"]) => MsgPruneAllowances;
    };
};
