import { AminoMsg } from "@cosmjs/amino";
import { MsgAddSchedule, MsgRemoveSchedule, MsgUpdateParams } from "./tx.js";
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
export declare const AminoConverter: {
    "/neutron.cron.MsgAddSchedule": {
        aminoType: string;
        toAmino: ({ authority, name, period, msgs, executionStage, }: MsgAddSchedule) => MsgAddScheduleAminoType["value"];
        fromAmino: ({ authority, name, period, msgs, execution_stage, }: MsgAddScheduleAminoType["value"]) => MsgAddSchedule;
    };
    "/neutron.cron.MsgRemoveSchedule": {
        aminoType: string;
        toAmino: ({ authority, name }: MsgRemoveSchedule) => MsgRemoveScheduleAminoType["value"];
        fromAmino: ({ authority, name }: MsgRemoveScheduleAminoType["value"]) => MsgRemoveSchedule;
    };
    "/neutron.cron.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
