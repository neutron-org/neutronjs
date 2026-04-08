import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterCounterparty, MsgUpdateClientConfig } from "./tx.js";
export interface MsgRegisterCounterpartyAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgRegisterCounterparty";
    value: {
        client_id: string;
        counterparty_merkle_prefix: Uint8Array[];
        counterparty_client_id: string;
        signer: string;
    };
}
export interface MsgUpdateClientConfigAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateClientConfig";
    value: {
        client_id: string;
        config: {
            allowed_relayers: string[];
        };
        signer: string;
    };
}
export declare const AminoConverter: {
    "/ibc.core.client.v2.MsgRegisterCounterparty": {
        aminoType: string;
        toAmino: ({ clientId, counterpartyMerklePrefix, counterpartyClientId, signer, }: MsgRegisterCounterparty) => MsgRegisterCounterpartyAminoType["value"];
        fromAmino: ({ client_id, counterparty_merkle_prefix, counterparty_client_id, signer, }: MsgRegisterCounterpartyAminoType["value"]) => MsgRegisterCounterparty;
    };
    "/ibc.core.client.v2.MsgUpdateClientConfig": {
        aminoType: string;
        toAmino: ({ clientId, config, signer, }: MsgUpdateClientConfig) => MsgUpdateClientConfigAminoType["value"];
        fromAmino: ({ client_id, config, signer, }: MsgUpdateClientConfigAminoType["value"]) => MsgUpdateClientConfig;
    };
};
