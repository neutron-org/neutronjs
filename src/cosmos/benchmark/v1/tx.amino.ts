//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers.js";
import { MsgLoadTest } from "./tx.js";
export interface MsgLoadTestAminoType extends AminoMsg {
  type: "cosmos-sdk/tools/benchmark/v1/MsgLoadTest";
  value: {
    caller: Uint8Array;
    ops: {
      seed: string;
      actor: string;
      key_length: string;
      value_length: string;
      iterations: number;
      delete: boolean;
      exists: boolean;
    }[];
  };
}
export const AminoConverter = {
  "/cosmos.benchmark.v1.MsgLoadTest": {
    aminoType: "cosmos-sdk/tools/benchmark/v1/MsgLoadTest",
    toAmino: ({ caller, ops }: MsgLoadTest): MsgLoadTestAminoType["value"] => {
      return {
        caller,
        ops: ops.map((el0) => ({
          seed: omitDefault(el0.seed)?.toString?.(),
          actor: el0.actor,
          key_length: omitDefault(el0.keyLength)?.toString?.(),
          value_length: omitDefault(el0.valueLength)?.toString?.(),
          iterations: omitDefault(el0.iterations),
          delete: omitDefault(el0.delete),
          exists: omitDefault(el0.exists),
        })),
      };
    },
    fromAmino: ({ caller, ops }: MsgLoadTestAminoType["value"]): MsgLoadTest => {
      return {
        caller,
        ops: ops.map?.((el0) => ({
          seed: el0.seed == null ? el0.seed : BigInt(el0.seed),
          actor: el0.actor,
          keyLength: el0.key_length == null ? el0.key_length : BigInt(el0.key_length),
          valueLength: el0.value_length == null ? el0.value_length : BigInt(el0.value_length),
          iterations: el0.iterations,
          delete: el0.delete,
          exists: el0.exists,
        })),
      };
    },
  },
};
