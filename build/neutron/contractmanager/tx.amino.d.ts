import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgResubmitFailure } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "contractmanager/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            sudo_call_gas_limit: string;
        };
    };
}
export interface MsgResubmitFailureAminoType extends AminoMsg {
    type: "contractmanager/MsgResubmitFailure";
    value: {
        sender: string;
        failure_id: string;
    };
}
export declare const AminoConverter: {
    "/neutron.contractmanager.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
    "/neutron.contractmanager.MsgResubmitFailure": {
        aminoType: string;
        toAmino: ({ sender, failureId }: MsgResubmitFailure) => MsgResubmitFailureAminoType["value"];
        fromAmino: ({ sender, failure_id }: MsgResubmitFailureAminoType["value"]) => MsgResubmitFailure;
    };
};
