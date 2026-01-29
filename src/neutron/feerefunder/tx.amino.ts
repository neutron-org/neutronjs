//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../helpers";
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
      fee_enabled: boolean;
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
          fee_enabled: omitDefault(params.feeEnabled),
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
                minFee:
                  params.min_fee == null
                    ? params.min_fee
                    : {
                        recvFee: params.min_fee.recv_fee.map?.((el2) => ({
                          denom: el2.denom,
                          amount: el2.amount,
                        })),
                        ackFee: params.min_fee.ack_fee.map?.((el2) => ({
                          denom: el2.denom,
                          amount: el2.amount,
                        })),
                        timeoutFee: params.min_fee.timeout_fee.map?.((el2) => ({
                          denom: el2.denom,
                          amount: el2.amount,
                        })),
                      },
                feeEnabled: params.fee_enabled,
              },
      };
    },
  },
};
