//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers.js";
import { MsgIncreaseCounter } from "./tx.js";
export interface MsgIncreaseCounterAminoType extends AminoMsg {
  type: "cosmos-sdk/increase_counter";
  value: {
    signer: string;
    count: string;
  };
}
export const AminoConverter = {
  "/cosmos.counter.v1.MsgIncreaseCounter": {
    aminoType: "cosmos-sdk/increase_counter",
    toAmino: ({ signer, count }: MsgIncreaseCounter): MsgIncreaseCounterAminoType["value"] => {
      return {
        signer,
        count: omitDefault(count)?.toString?.(),
      };
    },
    fromAmino: ({ signer, count }: MsgIncreaseCounterAminoType["value"]): MsgIncreaseCounter => {
      return {
        signer,
        count: count == null ? count : BigInt(count),
      };
    },
  },
};
