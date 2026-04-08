import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "neutron/ibc-rate-limit/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            send_enabled: {
                denom: string;
                enabled: boolean;
            }[];
            default_send_enabled: boolean;
        };
    };
}
export declare const AminoConverter: {
    "/neutron.ibcratelimit.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
