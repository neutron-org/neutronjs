import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "globalfee/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            minimum_gas_prices: {
                denom: string;
                amount: string;
            }[];
            bypass_min_fee_msg_types: string[];
            max_total_bypass_min_fee_msg_gas_usage: string;
        };
    };
}
export declare const AminoConverter: {
    "/gaia.globalfee.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
