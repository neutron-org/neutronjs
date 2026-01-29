//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../helpers";
import { MsgTransfer, MsgUpdateParams } from "./tx";
export interface MsgTransferAminoType extends AminoMsg {
  type: "/neutron.transfer.MsgTransfer";
  value: {
    source_port: string;
    source_channel: string;
    token: {
      denom: string;
      amount: string;
    };
    sender: string;
    receiver: string;
    timeout_height: AminoHeight;
    timeout_timestamp: string;
    memo: string;
    fee: {
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
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/neutron.transfer.MsgUpdateParams";
  value: {
    signer: string;
    params: {
      send_enabled: boolean;
      receive_enabled: boolean;
    };
  };
}
export const AminoConverter = {
  "/neutron.transfer.MsgTransfer": {
    aminoType: "/neutron.transfer.MsgTransfer",
    toAmino: ({
      sourcePort,
      sourceChannel,
      token,
      sender,
      receiver,
      timeoutHeight,
      timeoutTimestamp,
      memo,
      fee,
    }: MsgTransfer): MsgTransferAminoType["value"] => {
      return {
        source_port: sourcePort,
        source_channel: sourceChannel,
        token: {
          denom: token.denom,
          amount: token.amount,
        },
        sender,
        receiver,
        timeout_height: timeoutHeight
          ? {
              revision_height: omitDefault(timeoutHeight.revisionHeight)?.toString(),
              revision_number: omitDefault(timeoutHeight.revisionNumber)?.toString(),
            }
          : {},
        timeout_timestamp: omitDefault(timeoutTimestamp)?.toString?.(),
        memo,
        fee: {
          recv_fee: fee.recvFee.map((el0) => ({
            denom: el0.denom,
            amount: el0.amount,
          })),
          ack_fee: fee.ackFee.map((el0) => ({
            denom: el0.denom,
            amount: el0.amount,
          })),
          timeout_fee: fee.timeoutFee.map((el0) => ({
            denom: el0.denom,
            amount: el0.amount,
          })),
        },
      };
    },
    fromAmino: ({
      source_port,
      source_channel,
      token,
      sender,
      receiver,
      timeout_height,
      timeout_timestamp,
      memo,
      fee,
    }: MsgTransferAminoType["value"]): MsgTransfer => {
      return {
        sourcePort: source_port,
        sourceChannel: source_channel,
        token:
          token == null
            ? token
            : {
                denom: token.denom,
                amount: token.amount,
              },
        sender,
        receiver,
        timeoutHeight: timeout_height
          ? {
              revisionHeight: BigInt(timeout_height.revision_height || "0"),
              revisionNumber: BigInt(timeout_height.revision_number || "0"),
            }
          : undefined,
        timeoutTimestamp: timeout_timestamp == null ? timeout_timestamp : BigInt(timeout_timestamp),
        memo,
        fee:
          fee == null
            ? fee
            : {
                recvFee: fee.recv_fee.map?.((el1) => ({
                  denom: el1.denom,
                  amount: el1.amount,
                })),
                ackFee: fee.ack_fee.map?.((el1) => ({
                  denom: el1.denom,
                  amount: el1.amount,
                })),
                timeoutFee: fee.timeout_fee.map?.((el1) => ({
                  denom: el1.denom,
                  amount: el1.amount,
                })),
              },
      };
    },
  },
  "/neutron.transfer.MsgUpdateParams": {
    aminoType: "/neutron.transfer.MsgUpdateParams",
    toAmino: ({ signer, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        signer,
        params: {
          send_enabled: omitDefault(params.sendEnabled),
          receive_enabled: omitDefault(params.receiveEnabled),
        },
      };
    },
    fromAmino: ({ signer, params }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        signer,
        params:
          params == null
            ? params
            : {
                sendEnabled: params.send_enabled,
                receiveEnabled: params.receive_enabled,
              },
      };
    },
  },
};
