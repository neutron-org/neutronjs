import { AminoMsg } from "@cosmjs/amino";
import { MsgIncreaseCounter } from "./tx.js";
export interface MsgIncreaseCounterAminoType extends AminoMsg {
    type: "cosmos-sdk/increase_counter";
    value: {
        signer: string;
        count: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.counter.v1.MsgIncreaseCounter": {
        aminoType: string;
        toAmino: ({ signer, count }: MsgIncreaseCounter) => MsgIncreaseCounterAminoType["value"];
        fromAmino: ({ signer, count }: MsgIncreaseCounterAminoType["value"]) => MsgIncreaseCounter;
    };
};
