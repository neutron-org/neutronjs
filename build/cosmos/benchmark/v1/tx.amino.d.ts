import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/cosmos.benchmark.v1.MsgLoadTest": {
        aminoType: string;
        toAmino: ({ caller, ops }: MsgLoadTest) => MsgLoadTestAminoType["value"];
        fromAmino: ({ caller, ops }: MsgLoadTestAminoType["value"]) => MsgLoadTest;
    };
};
