import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx.js";
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/x/consensus/MsgUpdateParams";
    value: {
        authority: string;
        block: {
            max_bytes: string;
            max_gas: string;
        };
        evidence: {
            max_age_num_blocks: string;
            max_age_duration: {
                seconds: string;
                nanos: number;
            };
            max_bytes: string;
        };
        validator: {
            pub_key_types: string[];
        };
        abci: {
            vote_extensions_enable_height: string;
        };
    };
}
export declare const AminoConverter: {
    "/cosmos.consensus.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, block, evidence, validator, abci, }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, block, evidence, validator, abci, }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
