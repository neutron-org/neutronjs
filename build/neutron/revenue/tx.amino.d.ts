import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgFundTreasury } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "revenue/MsgUpdateParams";
    value: {
        authority: string;
        params: {
            reward_asset: string;
            reward_quote: {
                amount: string;
                asset: string;
            };
            blocks_performance_requirement: {
                allowed_to_miss: string;
                required_at_least: string;
            };
            oracle_votes_performance_requirement: {
                allowed_to_miss: string;
                required_at_least: string;
            };
            payment_schedule_type: {
                monthly_payment_schedule_type: {};
                block_based_payment_schedule_type: {
                    blocks_per_period: string;
                };
                empty_payment_schedule_type: {};
            };
            twap_window: string;
        };
    };
}
export interface MsgFundTreasuryAminoType extends AminoMsg {
    type: "revenue/MsgFundTreasury";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/neutron.revenue.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
    "/neutron.revenue.MsgFundTreasury": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgFundTreasury) => MsgFundTreasuryAminoType["value"];
        fromAmino: ({ sender, amount }: MsgFundTreasuryAminoType["value"]) => MsgFundTreasury;
    };
};
