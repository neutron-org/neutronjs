//@ts-nocheck
/* eslint-disable */
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddSLAs, MsgRemoveSLAs, MsgParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [
  ["/slinky.sla.v1.MsgAddSLAs", MsgAddSLAs],
  ["/slinky.sla.v1.MsgRemoveSLAs", MsgRemoveSLAs],
  ["/slinky.sla.v1.MsgParams", MsgParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addSLAs(value: MsgAddSLAs) {
      return {
        typeUrl: "/slinky.sla.v1.MsgAddSLAs",
        value: MsgAddSLAs.encode(value).finish(),
      };
    },
    removeSLAs(value: MsgRemoveSLAs) {
      return {
        typeUrl: "/slinky.sla.v1.MsgRemoveSLAs",
        value: MsgRemoveSLAs.encode(value).finish(),
      };
    },
    params(value: MsgParams) {
      return {
        typeUrl: "/slinky.sla.v1.MsgParams",
        value: MsgParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    addSLAs(value: MsgAddSLAs) {
      return {
        typeUrl: "/slinky.sla.v1.MsgAddSLAs",
        value,
      };
    },
    removeSLAs(value: MsgRemoveSLAs) {
      return {
        typeUrl: "/slinky.sla.v1.MsgRemoveSLAs",
        value,
      };
    },
    params(value: MsgParams) {
      return {
        typeUrl: "/slinky.sla.v1.MsgParams",
        value,
      };
    },
  },
  toJSON: {
    addSLAs(value: MsgAddSLAs) {
      return {
        typeUrl: "/slinky.sla.v1.MsgAddSLAs",
        value: MsgAddSLAs.toJSON(value),
      };
    },
    removeSLAs(value: MsgRemoveSLAs) {
      return {
        typeUrl: "/slinky.sla.v1.MsgRemoveSLAs",
        value: MsgRemoveSLAs.toJSON(value),
      };
    },
    params(value: MsgParams) {
      return {
        typeUrl: "/slinky.sla.v1.MsgParams",
        value: MsgParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    addSLAs(value: any) {
      return {
        typeUrl: "/slinky.sla.v1.MsgAddSLAs",
        value: MsgAddSLAs.fromJSON(value),
      };
    },
    removeSLAs(value: any) {
      return {
        typeUrl: "/slinky.sla.v1.MsgRemoveSLAs",
        value: MsgRemoveSLAs.fromJSON(value),
      };
    },
    params(value: any) {
      return {
        typeUrl: "/slinky.sla.v1.MsgParams",
        value: MsgParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    addSLAs(value: MsgAddSLAs) {
      return {
        typeUrl: "/slinky.sla.v1.MsgAddSLAs",
        value: MsgAddSLAs.fromPartial(value),
      };
    },
    removeSLAs(value: MsgRemoveSLAs) {
      return {
        typeUrl: "/slinky.sla.v1.MsgRemoveSLAs",
        value: MsgRemoveSLAs.fromPartial(value),
      };
    },
    params(value: MsgParams) {
      return {
        typeUrl: "/slinky.sla.v1.MsgParams",
        value: MsgParams.fromPartial(value),
      };
    },
  },
};
