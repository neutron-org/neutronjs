//@ts-nocheck
/* eslint-disable */
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../../helpers";
import {
  MsgCreateClient,
  MsgUpdateClient,
  MsgUpgradeClient,
  MsgSubmitMisbehaviour,
  MsgRecoverClient,
  MsgIBCSoftwareUpgrade,
  MsgUpdateParams,
} from "./tx";
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
export const AminoConverter = {
  "/ibc.core.client.v1.MsgCreateClient": {
    aminoType: "cosmos-sdk/MsgCreateClient",
    toAmino: ({
      clientState,
      consensusState,
      signer,
    }: MsgCreateClient): MsgCreateClientAminoType["value"] => {
      return {
        client_state: {
          type_url: clientState.typeUrl,
          value: clientState.value,
        },
        consensus_state: {
          type_url: consensusState.typeUrl,
          value: consensusState.value,
        },
        signer,
      };
    },
    fromAmino: ({
      client_state,
      consensus_state,
      signer,
    }: MsgCreateClientAminoType["value"]): MsgCreateClient => {
      return {
        clientState:
          client_state == null
            ? client_state
            : {
                typeUrl: client_state.type_url,
                value: client_state.value,
              },
        consensusState:
          consensus_state == null
            ? consensus_state
            : {
                typeUrl: consensus_state.type_url,
                value: consensus_state.value,
              },
        signer,
      };
    },
  },
  "/ibc.core.client.v1.MsgUpdateClient": {
    aminoType: "cosmos-sdk/MsgUpdateClient",
    toAmino: ({ clientId, clientMessage, signer }: MsgUpdateClient): MsgUpdateClientAminoType["value"] => {
      return {
        client_id: clientId,
        client_message: {
          type_url: clientMessage.typeUrl,
          value: clientMessage.value,
        },
        signer,
      };
    },
    fromAmino: ({
      client_id,
      client_message,
      signer,
    }: MsgUpdateClientAminoType["value"]): MsgUpdateClient => {
      return {
        clientId: client_id,
        clientMessage:
          client_message == null
            ? client_message
            : {
                typeUrl: client_message.type_url,
                value: client_message.value,
              },
        signer,
      };
    },
  },
  "/ibc.core.client.v1.MsgUpgradeClient": {
    aminoType: "cosmos-sdk/MsgUpgradeClient",
    toAmino: ({
      clientId,
      clientState,
      consensusState,
      proofUpgradeClient,
      proofUpgradeConsensusState,
      signer,
    }: MsgUpgradeClient): MsgUpgradeClientAminoType["value"] => {
      return {
        client_id: clientId,
        client_state: {
          type_url: clientState.typeUrl,
          value: clientState.value,
        },
        consensus_state: {
          type_url: consensusState.typeUrl,
          value: consensusState.value,
        },
        proof_upgrade_client: proofUpgradeClient,
        proof_upgrade_consensus_state: proofUpgradeConsensusState,
        signer,
      };
    },
    fromAmino: ({
      client_id,
      client_state,
      consensus_state,
      proof_upgrade_client,
      proof_upgrade_consensus_state,
      signer,
    }: MsgUpgradeClientAminoType["value"]): MsgUpgradeClient => {
      return {
        clientId: client_id,
        clientState:
          client_state == null
            ? client_state
            : {
                typeUrl: client_state.type_url,
                value: client_state.value,
              },
        consensusState:
          consensus_state == null
            ? consensus_state
            : {
                typeUrl: consensus_state.type_url,
                value: consensus_state.value,
              },
        proofUpgradeClient: proof_upgrade_client,
        proofUpgradeConsensusState: proof_upgrade_consensus_state,
        signer,
      };
    },
  },
  "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
    aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
    toAmino: ({
      clientId,
      misbehaviour,
      signer,
    }: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAminoType["value"] => {
      return {
        client_id: clientId,
        misbehaviour: {
          type_url: misbehaviour.typeUrl,
          value: misbehaviour.value,
        },
        signer,
      };
    },
    fromAmino: ({
      client_id,
      misbehaviour,
      signer,
    }: MsgSubmitMisbehaviourAminoType["value"]): MsgSubmitMisbehaviour => {
      return {
        clientId: client_id,
        misbehaviour:
          misbehaviour == null
            ? misbehaviour
            : {
                typeUrl: misbehaviour.type_url,
                value: misbehaviour.value,
              },
        signer,
      };
    },
  },
  "/ibc.core.client.v1.MsgRecoverClient": {
    aminoType: "cosmos-sdk/MsgRecoverClient",
    toAmino: ({
      subjectClientId,
      substituteClientId,
      signer,
    }: MsgRecoverClient): MsgRecoverClientAminoType["value"] => {
      return {
        subject_client_id: subjectClientId,
        substitute_client_id: substituteClientId,
        signer,
      };
    },
    fromAmino: ({
      subject_client_id,
      substitute_client_id,
      signer,
    }: MsgRecoverClientAminoType["value"]): MsgRecoverClient => {
      return {
        subjectClientId: subject_client_id,
        substituteClientId: substitute_client_id,
        signer,
      };
    },
  },
  "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
    aminoType: "cosmos-sdk/MsgIBCSoftwareUpgrade",
    toAmino: ({
      plan,
      upgradedClientState,
      signer,
    }: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeAminoType["value"] => {
      return {
        plan: {
          name: plan.name,
          time: plan.time,
          height: omitDefault(plan.height)?.toString?.(),
          info: plan.info,
          upgraded_client_state: {
            type_url: plan.upgradedClientState.typeUrl,
            value: plan.upgradedClientState.value,
          },
        },
        upgraded_client_state: {
          type_url: upgradedClientState.typeUrl,
          value: upgradedClientState.value,
        },
        signer,
      };
    },
    fromAmino: ({
      plan,
      upgraded_client_state,
      signer,
    }: MsgIBCSoftwareUpgradeAminoType["value"]): MsgIBCSoftwareUpgrade => {
      return {
        plan:
          plan == null
            ? plan
            : {
                name: plan.name,
                time: plan.time,
                height: plan.height == null ? plan.height : BigInt(plan.height),
                info: plan.info,
                upgradedClientState:
                  plan.upgraded_client_state == null
                    ? plan.upgraded_client_state
                    : {
                        typeUrl: plan.upgraded_client_state.type_url,
                        value: plan.upgraded_client_state.value,
                      },
              },
        upgradedClientState:
          upgraded_client_state == null
            ? upgraded_client_state
            : {
                typeUrl: upgraded_client_state.type_url,
                value: upgraded_client_state.value,
              },
        signer,
      };
    },
  },
  "/ibc.core.client.v1.MsgUpdateParams": {
    aminoType: "cosmos-sdk/MsgUpdateParams",
    toAmino: ({ signer, params }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        signer,
        params: {
          allowed_clients: params.allowedClients,
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
                allowedClients: params.allowed_clients,
              },
      };
    },
  },
};
