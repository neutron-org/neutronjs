//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { MsgAddSLAs, MsgRemoveSLAs, MsgParams } from "./tx";
export interface MsgAddSLAsAminoType extends AminoMsg {
  type: "/slinky.sla.v1.MsgAddSLAs";
  value: {
    slas: {
      maximum_viable_window: string;
      expected_uptime: string;
      slash_constant: string;
      minimum_block_updates: string;
      frequency: string;
      id: string;
    }[];
    authority: string;
  };
}
export interface MsgRemoveSLAsAminoType extends AminoMsg {
  type: "/slinky.sla.v1.MsgRemoveSLAs";
  value: {
    ids: string[];
    authority: string;
  };
}
export interface MsgParamsAminoType extends AminoMsg {
  type: "/slinky.sla.v1.MsgParams";
  value: {
    params: {
      enabled: boolean;
    };
    authority: string;
  };
}
export const AminoConverter = {
  "/slinky.sla.v1.MsgAddSLAs": {
    aminoType: "/slinky.sla.v1.MsgAddSLAs",
    toAmino: ({ slas, authority }: MsgAddSLAs): MsgAddSLAsAminoType["value"] => {
      return {
        slas: slas.map((el0) => ({
          maximum_viable_window: omitDefault(el0.maximumViableWindow)?.toString?.(),
          expected_uptime: el0.expectedUptime,
          slash_constant: el0.slashConstant,
          minimum_block_updates: omitDefault(el0.minimumBlockUpdates)?.toString?.(),
          frequency: omitDefault(el0.frequency)?.toString?.(),
          id: el0.id,
        })),
        authority,
      };
    },
    fromAmino: ({ slas, authority }: MsgAddSLAsAminoType["value"]): MsgAddSLAs => {
      return {
        slas: slas.map?.((el0) => ({
          maximumViableWindow:
            el0.maximum_viable_window == null ? el0.maximum_viable_window : BigInt(el0.maximum_viable_window),
          expectedUptime: el0.expected_uptime,
          slashConstant: el0.slash_constant,
          minimumBlockUpdates:
            el0.minimum_block_updates == null ? el0.minimum_block_updates : BigInt(el0.minimum_block_updates),
          frequency: el0.frequency == null ? el0.frequency : BigInt(el0.frequency),
          id: el0.id,
        })),
        authority,
      };
    },
  },
  "/slinky.sla.v1.MsgRemoveSLAs": {
    aminoType: "/slinky.sla.v1.MsgRemoveSLAs",
    toAmino: ({ ids, authority }: MsgRemoveSLAs): MsgRemoveSLAsAminoType["value"] => {
      return {
        ids,
        authority,
      };
    },
    fromAmino: ({ ids, authority }: MsgRemoveSLAsAminoType["value"]): MsgRemoveSLAs => {
      return {
        ids,
        authority,
      };
    },
  },
  "/slinky.sla.v1.MsgParams": {
    aminoType: "/slinky.sla.v1.MsgParams",
    toAmino: ({ params, authority }: MsgParams): MsgParamsAminoType["value"] => {
      return {
        params: {
          enabled: omitDefault(params.enabled),
        },
        authority,
      };
    },
    fromAmino: ({ params, authority }: MsgParamsAminoType["value"]): MsgParams => {
      return {
        params:
          params == null
            ? params
            : {
                enabled: params.enabled,
              },
        authority,
      };
    },
  },
};
