import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight } from "../../../../helpers.js";
import { MsgTransfer, MsgUpdateParams } from "./tx.js";
export interface MsgTransferAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgTransfer";
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
        encoding: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: {
        signer: string;
        params: {
            allowed_clients: string[];
        };
    };
}
export declare const AminoConverter: {
    "/ibc.applications.transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp, memo, encoding, }: MsgTransfer) => MsgTransferAminoType["value"];
        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp, memo, encoding, }: MsgTransferAminoType["value"]) => MsgTransfer;
    };
    "/ibc.applications.transfer.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
