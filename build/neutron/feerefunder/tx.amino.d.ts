import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "feerefunder/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            min_fee: {
                recv_fee: {
                    denom: string;
                    amount: string;
                }[];
                ack_fee: {
                    denom: string;
                    amount: string;
                }[];
                timeout_fee: {
                    denom: string;
                    amount: string;
                }[];
            };
            fee_enabled: boolean;
        };
    };
}
export declare const AminoConverter: {
    "/neutron.feerefunder.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
