import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: {
        signer: string;
        params: {
            host_enabled: boolean;
            allow_messages: string[];
        };
    };
}
export interface MsgModuleQuerySafeAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgModuleQuerySafe";
    value: {
        signer: string;
        requests: {
            path: string;
            data: Uint8Array;
        }[];
    };
}
export declare const AminoConverter: {
    "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
    "/ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe": {
        aminoType: string;
        toAmino: ({ signer, requests }: MsgModuleQuerySafe) => MsgModuleQuerySafeAminoType["value"];
        fromAmino: ({ signer, requests }: MsgModuleQuerySafeAminoType["value"]) => MsgModuleQuerySafe;
    };
};
