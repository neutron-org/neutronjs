import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "feeburner/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            neutron_denom: string;
            reserve_address: string;
            treasury_address: string;
        };
    };
}
export declare const AminoConverter: {
    "/neutron.feeburner.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
