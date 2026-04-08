import { AminoMsg } from "@cosmjs/amino";
import { MsgManageHookSubscription } from "./tx.js";
export interface MsgManageHookSubscriptionAminoType extends AminoMsg {
    type: "harpoon/MsgManageHookSubscription";
    value: {
        authority: string;
        hook_subscription: {
            contract_address: string;
            hooks: number[];
        };
    };
}
export declare const AminoConverter: {
    "/neutron.harpoon.MsgManageHookSubscription": {
        aminoType: string;
        toAmino: ({ authority, hookSubscription, }: MsgManageHookSubscription) => MsgManageHookSubscriptionAminoType["value"];
        fromAmino: ({ authority, hook_subscription, }: MsgManageHookSubscriptionAminoType["value"]) => MsgManageHookSubscription;
    };
};
