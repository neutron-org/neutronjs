//@ts-nocheck
/* eslint-disable */
import { TelescopeGeneratedType } from "../../types.js";
import { MsgManageHookSubscription } from "./tx.js";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/neutron.harpoon.MsgManageHookSubscription", MsgManageHookSubscription],
];
export const MessageComposer = {
  encoded: {
    manageHookSubscription(value: MsgManageHookSubscription) {
      return {
        typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
        value: MsgManageHookSubscription.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    manageHookSubscription(value: MsgManageHookSubscription) {
      return {
        typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
        value,
      };
    },
  },
  toJSON: {
    manageHookSubscription(value: MsgManageHookSubscription) {
      return {
        typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
        value: MsgManageHookSubscription.toJSON(value),
      };
    },
  },
  fromJSON: {
    manageHookSubscription(value: any) {
      return {
        typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
        value: MsgManageHookSubscription.fromJSON(value),
      };
    },
  },
  fromPartial: {
    manageHookSubscription(value: MsgManageHookSubscription) {
      return {
        typeUrl: "/neutron.harpoon.MsgManageHookSubscription",
        value: MsgManageHookSubscription.fromPartial(value),
      };
    },
  },
};
