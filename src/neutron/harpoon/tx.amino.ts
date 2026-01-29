//@ts-nocheck
/* eslint-disable */
import { hookTypeFromJSON } from "./hooks";
import { AminoMsg } from "@cosmjs/amino";
import { MsgManageHookSubscription } from "./tx";
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
export const AminoConverter = {
  "/neutron.harpoon.MsgManageHookSubscription": {
    aminoType: "harpoon/MsgManageHookSubscription",
    toAmino: ({
      authority,
      hookSubscription,
    }: MsgManageHookSubscription): MsgManageHookSubscriptionAminoType["value"] => {
      return {
        authority,
        hook_subscription: {
          contract_address: hookSubscription.contractAddress,
          hooks: hookSubscription.hooks,
        },
      };
    },
    fromAmino: ({
      authority,
      hook_subscription,
    }: MsgManageHookSubscriptionAminoType["value"]): MsgManageHookSubscription => {
      return {
        authority,
        hookSubscription:
          hook_subscription == null
            ? hook_subscription
            : {
                contractAddress: hook_subscription.contract_address,
                hooks: hook_subscription.hooks.map?.((el) => hookTypeFromJSON(el)),
              },
      };
    },
  },
};
