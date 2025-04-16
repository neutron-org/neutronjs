//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgResubmitFailure } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/neutron.contractmanager.MsgUpdateParams", MsgUpdateParams],
  ["/neutron.contractmanager.MsgResubmitFailure", MsgResubmitFailure],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.contractmanager.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
    resubmitFailure(value: MsgResubmitFailure) {
      return {
        typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
        value: MsgResubmitFailure.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.contractmanager.MsgUpdateParams",
        value,
      };
    },
    resubmitFailure(value: MsgResubmitFailure) {
      return {
        typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
        value,
      };
    },
  },
  toJSON: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.contractmanager.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
    resubmitFailure(value: MsgResubmitFailure) {
      return {
        typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
        value: MsgResubmitFailure.toJSON(value),
      };
    },
  },
  fromJSON: {
    updateParams(value: any) {
      return {
        typeUrl: "/neutron.contractmanager.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
    resubmitFailure(value: any) {
      return {
        typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
        value: MsgResubmitFailure.fromJSON(value),
      };
    },
  },
  fromPartial: {
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/neutron.contractmanager.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
    resubmitFailure(value: MsgResubmitFailure) {
      return {
        typeUrl: "/neutron.contractmanager.MsgResubmitFailure",
        value: MsgResubmitFailure.fromPartial(value),
      };
    },
  },
};
