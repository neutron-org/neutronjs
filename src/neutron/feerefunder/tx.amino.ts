//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "feerefunder/MsgUpdateParams";
  value: {
    authority: string;
    params: {
      min_fee: {
        recv_fee: {
          denom: string;
          amount: string;
        }[];
        ack_fee: {
          denom: string;
          amount: string;
        }[];
        timeout_fee: {
          denom: string;
          amount: string;
        }[];
      };
    };
  };
}
export const AminoConverter = {
  "/neutron.feerefunder.MsgUpdateParams": {
    aminoType: "feerefunder/MsgUpdateParams",
    toAmino: ({ authority, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          min_fee: {
            recv_fee: params.minFee.recvFee.map((el0) => ({
              denom: el0.denom,
              amount: el0.amount,
            })),
            ack_fee: params.minFee.ackFee.map((el0) => ({
              denom: el0.denom,
              amount: el0.amount,
            })),
            timeout_fee: params.minFee.timeoutFee.map((el0) => ({
              denom: el0.denom,
              amount: el0.amount,
            })),
          },
        },
      };
    },
    fromAmino: ({ authority, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          minFee: {
            recvFee: params.min_fee.recv_fee.map((el2) => ({
              denom: el2.denom,
              amount: el2.amount,
            })),
            ackFee: params.min_fee.ack_fee.map((el2) => ({
              denom: el2.denom,
              amount: el2.amount,
            })),
            timeoutFee: params.min_fee.timeout_fee.map((el2) => ({
              denom: el2.denom,
              amount: el2.amount,
            })),
          },
        },
      };
    },
  },
};
