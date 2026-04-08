import { AminoMsg } from "@cosmjs/amino";
import { MsgParams } from "./tx.js";
export interface MsgParamsAminoType extends AminoMsg {
    type: "/feemarket.feemarket.v1.MsgParams";
    value: {
        params: {
            alpha: string;
            beta: string;
            gamma: string;
            delta: string;
            min_base_gas_price: string;
            min_learning_rate: string;
            max_learning_rate: string;
            max_block_utilization: string;
            window: string;
            fee_denom: string;
            enabled: boolean;
            distribute_fees: boolean;
            send_tip_to_proposer: boolean;
        };
        authority: string;
    };
}
export declare const AminoConverter: {
    "/feemarket.feemarket.v1.MsgParams": {
        aminoType: string;
        toAmino: ({ params, authority }: MsgParams) => MsgParamsAminoType["value"];
        fromAmino: ({ params, authority }: MsgParamsAminoType["value"]) => MsgParams;
    };
};
