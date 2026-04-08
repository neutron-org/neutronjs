import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx.js";
export interface MsgRegisterInterchainAccountAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgRegisterInterchainAccount";
    value: {
        owner: string;
        connection_id: string;
        version: string;
        ordering: number;
    };
}
export interface MsgSendTxAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgSendTx";
    value: {
        owner: string;
        connection_id: string;
        packet_data: {
            type: number;
            data: Uint8Array;
            memo: string;
        };
        relative_timeout: string;
    };
}
export interface MsgUpdateParamsAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: {
        signer: string;
        params: {
            controller_enabled: boolean;
        };
    };
}
export declare const AminoConverter: {
    "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: ({ owner, connectionId, version, ordering, }: MsgRegisterInterchainAccount) => MsgRegisterInterchainAccountAminoType["value"];
        fromAmino: ({ owner, connection_id, version, ordering, }: MsgRegisterInterchainAccountAminoType["value"]) => MsgRegisterInterchainAccount;
    };
    "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
        aminoType: string;
        toAmino: ({ owner, connectionId, packetData, relativeTimeout, }: MsgSendTx) => MsgSendTxAminoType["value"];
        fromAmino: ({ owner, connection_id, packet_data, relative_timeout, }: MsgSendTxAminoType["value"]) => MsgSendTx;
    };
    "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
};
