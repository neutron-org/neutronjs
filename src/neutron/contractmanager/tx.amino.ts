//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams, MsgResubmitFailure } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "contractmanager/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      sudo_call_gas_limit: string;
    };
  };
}
export interface MsgResubmitFailureAminoType extends AminoMsg {
  type: "contractmanager/MsgResubmitFailure";
  value: {
    sender: string;
    failure_id: string;
  };
}
export const AminoConverter = {
  "/neutron.contractmanager.MsgUpdateParams": {
    aminoType: "contractmanager/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          sudo_call_gas_limit: params.sudoCallGasLimit.toString(),
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          sudoCallGasLimit: BigInt(params.sudo_call_gas_limit),
        },
      };
    },
  },
  "/neutron.contractmanager.MsgResubmitFailure": {
    aminoType: "contractmanager/MsgResubmitFailure",
    toAmino: ({ sender, failureId }: MsgResubmitFailure): MsgResubmitFailureAminoType["value"] => {
      return {
        sender,
        failure_id: failureId.toString(),
      };
    },
    fromAmino: ({ sender, failure_id }: MsgResubmitFailureAminoType["value"]): MsgResubmitFailure => {
      return {
        sender,
        failureId: BigInt(failure_id),
      };
    },
  },
};
