//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgManageHookSubscription } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/neutron.harpoon.MsgManageHookSubscription", MsgManageHookSubscription],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
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
