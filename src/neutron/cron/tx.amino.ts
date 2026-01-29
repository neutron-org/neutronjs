//@ts-nocheck
/* eslint-disable */
import { executionStageFromJSON } from "./schedule";
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../helpers";
import { MsgAddSchedule, MsgRemoveSchedule, MsgUpdateParams } from "./tx";
export interface MsgAddScheduleAminoType extends AminoMsg {
  type: "cron/MsgAddSchedule";
  value: {
    authority: string;
    name: string;
    period: string;
    msgs: {
      contract: string;
      msg: string;
    }[];
    execution_stage: number;
  };
}
export interface MsgRemoveScheduleAminoType extends AminoMsg {
  type: "cron/MsgRemoveSchedule";
  value: {
    authority: string;
    name: string;
  };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "cron/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      security_address: string;
      limit: string;
    };
  };
}
export const AminoConverter = {
  "/neutron.cron.MsgAddSchedule": {
    aminoType: "cron/MsgAddSchedule",
    toAmino: ({
      authority,
      name,
      period,
      msgs,
      executionStage,
    }: MsgAddSchedule): MsgAddScheduleAminoType["value"] => {
      return {
        authority,
        name,
        period: omitDefault(period)?.toString?.(),
        msgs: msgs.map((el0) => ({
          contract: el0.contract,
          msg: el0.msg,
        })),
        execution_stage: executionStage,
      };
    },
    fromAmino: ({
      authority,
      name,
      period,
      msgs,
      execution_stage,
    }: MsgAddScheduleAminoType["value"]): MsgAddSchedule => {
      return {
        authority,
        name,
        period: period == null ? period : BigInt(period),
        msgs: msgs.map?.((el0) => ({
          contract: el0.contract,
          msg: el0.msg,
        })),
        executionStage: execution_stage == null ? execution_stage : executionStageFromJSON(execution_stage),
      };
    },
  },
  "/neutron.cron.MsgRemoveSchedule": {
    aminoType: "cron/MsgRemoveSchedule",
    toAmino: ({ authority, name }: MsgRemoveSchedule): MsgRemoveScheduleAminoType["value"] => {
      return {
        authority,
        name,
      };
    },
    fromAmino: ({ authority, name }: MsgRemoveScheduleAminoType["value"]): MsgRemoveSchedule => {
      return {
        authority,
        name,
      };
    },
  },
  "/neutron.cron.MsgUpdateParams": {
    aminoType: "cron/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          security_address: params.securityAddress,
          limit: omitDefault(params.limit)?.toString?.(),
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params:
          params == null
            ? params
            : {
                securityAddress: params.security_address,
                limit: params.limit == null ? params.limit : BigInt(params.limit),
              },
      };
    },
  },
};
