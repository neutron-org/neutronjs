import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour, MsgRecoverClient, MsgIBCSoftwareUpgrade, MsgUpdateParams, MsgDeleteClientCreator } from "./tx.js";
export interface MsgCreateClientAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreateClient";
    value: {
        client_state: {
            type_url: string;
            value: Uint8Array;
        };
        consensus_state: {
            type_url: string;
            value: Uint8Array;
        };
        signer: string;
    };
}
export interface MsgUpdateClientAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateClient";
    value: {
        client_id: string;
        client_message: {
            type_url: string;
            value: Uint8Array;
        };
        signer: string;
    };
}
export interface MsgUpgradeClientAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpgradeClient";
    value: {
        client_id: string;
        client_state: {
            type_url: string;
            value: Uint8Array;
        };
        consensus_state: {
            type_url: string;
            value: Uint8Array;
        };
        proof_upgrade_client: Uint8Array;
        proof_upgrade_consensus_state: Uint8Array;
        signer: string;
    };
}
export interface MsgSubmitMisbehaviourAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgSubmitMisbehaviour";
    value: {
        client_id: string;
        misbehaviour: {
            type_url: string;
            value: Uint8Array;
        };
        signer: string;
    };
}
export interface MsgRecoverClientAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgRecoverClient";
    value: {
        subject_client_id: string;
        substitute_client_id: string;
        signer: string;
    };
}
export interface MsgIBCSoftwareUpgradeAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgIBCSoftwareUpgrade";
    value: {
        plan: {
            name: string;
            time: string;
            height: string;
            info: string;
            upgraded_client_state: {
                type_url: string;
                value: Uint8Array;
            };
        };
        upgraded_client_state: {
            type_url: string;
            value: Uint8Array;
        };
        signer: string;
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
export interface MsgDeleteClientCreatorAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgDeleteClientCreator";
    value: {
        client_id: string;
        signer: string;
    };
}
export declare const AminoConverter: {
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: string;
        toAmino: ({ clientState, consensusState, signer, }: MsgCreateClient) => MsgCreateClientAminoType["value"];
        fromAmino: ({ client_state, consensus_state, signer, }: MsgCreateClientAminoType["value"]) => MsgCreateClient;
    };
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: string;
        toAmino: ({ clientId, clientMessage, signer }: MsgUpdateClient) => MsgUpdateClientAminoType["value"];
        fromAmino: ({ client_id, client_message, signer, }: MsgUpdateClientAminoType["value"]) => MsgUpdateClient;
    };
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: string;
        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer, }: MsgUpgradeClient) => MsgUpgradeClientAminoType["value"];
        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer, }: MsgUpgradeClientAminoType["value"]) => MsgUpgradeClient;
    };
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: string;
        toAmino: ({ clientId, misbehaviour, signer, }: MsgSubmitMisbehaviour) => MsgSubmitMisbehaviourAminoType["value"];
        fromAmino: ({ client_id, misbehaviour, signer, }: MsgSubmitMisbehaviourAminoType["value"]) => MsgSubmitMisbehaviour;
    };
    "/ibc.core.client.v1.MsgRecoverClient": {
        aminoType: string;
        toAmino: ({ subjectClientId, substituteClientId, signer, }: MsgRecoverClient) => MsgRecoverClientAminoType["value"];
        fromAmino: ({ subject_client_id, substitute_client_id, signer, }: MsgRecoverClientAminoType["value"]) => MsgRecoverClient;
    };
    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
        aminoType: string;
        toAmino: ({ plan, upgradedClientState, signer, }: MsgIBCSoftwareUpgrade) => MsgIBCSoftwareUpgradeAminoType["value"];
        fromAmino: ({ plan, upgraded_client_state, signer, }: MsgIBCSoftwareUpgradeAminoType["value"]) => MsgIBCSoftwareUpgrade;
    };
    "/ibc.core.client.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ signer, params }: MsgUpdateParams) => MsgUpdateParamsAminoType["value"];
        fromAmino: ({ signer, params }: MsgUpdateParamsAminoType["value"]) => MsgUpdateParams;
    };
    "/ibc.core.client.v1.MsgDeleteClientCreator": {
        aminoType: string;
        toAmino: ({ clientId, signer }: MsgDeleteClientCreator) => MsgDeleteClientCreatorAminoType["value"];
        fromAmino: ({ client_id, signer }: MsgDeleteClientCreatorAminoType["value"]) => MsgDeleteClientCreator;
    };
};
