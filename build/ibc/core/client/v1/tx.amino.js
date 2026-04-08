"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../../helpers.js");
exports.AminoConverter = {
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: "cosmos-sdk/MsgCreateClient",
        toAmino: ({ clientState, consensusState, signer, }) => {
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
        fromAmino: ({ client_state, consensus_state, signer, }) => {
            return {
                clientState: client_state == null
                    ? client_state
                    : {
                        typeUrl: client_state.type_url,
                        value: client_state.value,
                    },
                consensusState: consensus_state == null
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
        toAmino: ({ clientId, clientMessage, signer }) => {
            return {
                client_id: clientId,
                client_message: {
                    type_url: clientMessage.typeUrl,
                    value: clientMessage.value,
                },
                signer,
            };
        },
        fromAmino: ({ client_id, client_message, signer, }) => {
            return {
                clientId: client_id,
                clientMessage: client_message == null
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
        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer, }) => {
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
        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer, }) => {
            return {
                clientId: client_id,
                clientState: client_state == null
                    ? client_state
                    : {
                        typeUrl: client_state.type_url,
                        value: client_state.value,
                    },
                consensusState: consensus_state == null
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
        toAmino: ({ clientId, misbehaviour, signer, }) => {
            return {
                client_id: clientId,
                misbehaviour: {
                    type_url: misbehaviour.typeUrl,
                    value: misbehaviour.value,
                },
                signer,
            };
        },
        fromAmino: ({ client_id, misbehaviour, signer, }) => {
            return {
                clientId: client_id,
                misbehaviour: misbehaviour == null
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
        toAmino: ({ subjectClientId, substituteClientId, signer, }) => {
            return {
                subject_client_id: subjectClientId,
                substitute_client_id: substituteClientId,
                signer,
            };
        },
        fromAmino: ({ subject_client_id, substitute_client_id, signer, }) => {
            return {
                subjectClientId: subject_client_id,
                substituteClientId: substitute_client_id,
                signer,
            };
        },
    },
    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
        aminoType: "cosmos-sdk/MsgIBCSoftwareUpgrade",
        toAmino: ({ plan, upgradedClientState, signer, }) => {
            return {
                plan: {
                    name: plan.name,
                    time: plan.time,
                    height: (0, helpers_js_1.omitDefault)(plan.height)?.toString?.(),
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
        fromAmino: ({ plan, upgraded_client_state, signer, }) => {
            return {
                plan: plan == null
                    ? plan
                    : {
                        name: plan.name,
                        time: plan.time,
                        height: plan.height == null ? plan.height : BigInt(plan.height),
                        info: plan.info,
                        upgradedClientState: plan.upgraded_client_state == null
                            ? plan.upgraded_client_state
                            : {
                                typeUrl: plan.upgraded_client_state.type_url,
                                value: plan.upgraded_client_state.value,
                            },
                    },
                upgradedClientState: upgraded_client_state == null
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
        toAmino: ({ signer, params }) => {
            return {
                signer,
                params: {
                    allowed_clients: params.allowedClients,
                },
            };
        },
        fromAmino: ({ signer, params }) => {
            return {
                signer,
                params: params == null
                    ? params
                    : {
                        allowedClients: params.allowed_clients,
                    },
            };
        },
    },
    "/ibc.core.client.v1.MsgDeleteClientCreator": {
        aminoType: "cosmos-sdk/MsgDeleteClientCreator",
        toAmino: ({ clientId, signer }) => {
            return {
                client_id: clientId,
                signer,
            };
        },
        fromAmino: ({ client_id, signer }) => {
            return {
                clientId: client_id,
                signer,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map