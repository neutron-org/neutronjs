import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "dynamicfees/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            ntrn_prices: {
                denom: string;
                amount: string;
            }[];
        };
    };
}
export declare const AminoConverter: {
    "/neutron.dynamicfees.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
