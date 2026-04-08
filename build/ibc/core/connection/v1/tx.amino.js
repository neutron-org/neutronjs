"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../../helpers.js");
exports.AminoConverter = {
    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
        aminoType: "cosmos-sdk/MsgConnectionOpenInit",
        toAmino: ({ clientId, counterparty, version, delayPeriod, signer, }) => {
            return {
                client_id: clientId,
                counterparty: {
                    client_id: counterparty.clientId,
                    connection_id: counterparty.connectionId,
                    prefix: {
                        key_prefix: counterparty.prefix.keyPrefix,
                    },
                },
                version: {
                    identifier: version.identifier,
                    features: version.features,
                },
                delay_period: (0, helpers_js_1.omitDefault)(delayPeriod)?.toString?.(),
                signer,
            };
        },
        fromAmino: ({ client_id, counterparty, version, delay_period, signer, }) => {
            return {
                clientId: client_id,
                counterparty: counterparty == null
                    ? counterparty
                    : {
                        clientId: counterparty.client_id,
                        connectionId: counterparty.connection_id,
                        prefix: counterparty.prefix == null
                            ? counterparty.prefix
                            : {
                                keyPrefix: counterparty.prefix.key_prefix,
                            },
                    },
                version: version == null
                    ? version
                    : {
                        identifier: version.identifier,
                        features: version.features,
                    },
                delayPeriod: delay_period == null ? delay_period : BigInt(delay_period),
                signer,
            };
        },
    },
    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
        aminoType: "cosmos-sdk/MsgConnectionOpenTry",
        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer, hostConsensusStateProof, }) => {
            return {
                client_id: clientId,
                previous_connection_id: previousConnectionId,
                client_state: {
                    type_url: clientState.typeUrl,
                    value: clientState.value,
                },
                counterparty: {
                    client_id: counterparty.clientId,
                    connection_id: counterparty.connectionId,
                    prefix: {
                        key_prefix: counterparty.prefix.keyPrefix,
                    },
                },
                delay_period: (0, helpers_js_1.omitDefault)(delayPeriod)?.toString?.(),
                counterparty_versions: counterpartyVersions.map((el0) => ({
                    identifier: el0.identifier,
                    features: el0.features,
                })),
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                proof_init: proofInit,
                proof_client: proofClient,
                proof_consensus: proofConsensus,
                consensus_height: consensusHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(consensusHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(consensusHeight.revisionNumber)?.toString(),
                    }
                    : {},
                signer,
                host_consensus_state_proof: hostConsensusStateProof,
            };
        },
        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer, host_consensus_state_proof, }) => {
            return {
                clientId: client_id,
                previousConnectionId: previous_connection_id,
                clientState: client_state == null
                    ? client_state
                    : {
                        typeUrl: client_state.type_url,
                        value: client_state.value,
                    },
                counterparty: counterparty == null
                    ? counterparty
                    : {
                        clientId: counterparty.client_id,
                        connectionId: counterparty.connection_id,
                        prefix: counterparty.prefix == null
                            ? counterparty.prefix
                            : {
                                keyPrefix: counterparty.prefix.key_prefix,
                            },
                    },
                delayPeriod: delay_period == null ? delay_period : BigInt(delay_period),
                counterpartyVersions: counterparty_versions.map?.((el0) => ({
                    identifier: el0.identifier,
                    features: el0.features,
                })),
                proofHeight: proof_height
                    ? {
                        revisionHeight: BigInt(proof_height.revision_height || "0"),
                        revisionNumber: BigInt(proof_height.revision_number || "0"),
                    }
                    : undefined,
                proofInit: proof_init,
                proofClient: proof_client,
                proofConsensus: proof_consensus,
                consensusHeight: consensus_height
                    ? {
                        revisionHeight: BigInt(consensus_height.revision_height || "0"),
                        revisionNumber: BigInt(consensus_height.revision_number || "0"),
                    }
                    : undefined,
                signer,
                hostConsensusStateProof: host_consensus_state_proof,
            };
        },
    },
    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
        aminoType: "cosmos-sdk/MsgConnectionOpenAck",
        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer, hostConsensusStateProof, }) => {
            return {
                connection_id: connectionId,
                counterparty_connection_id: counterpartyConnectionId,
                version: {
                    identifier: version.identifier,
                    features: version.features,
                },
                client_state: {
                    type_url: clientState.typeUrl,
                    value: clientState.value,
                },
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                proof_try: proofTry,
                proof_client: proofClient,
                proof_consensus: proofConsensus,
                consensus_height: consensusHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(consensusHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(consensusHeight.revisionNumber)?.toString(),
                    }
                    : {},
                signer,
                host_consensus_state_proof: hostConsensusStateProof,
            };
        },
        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer, host_consensus_state_proof, }) => {
            return {
                connectionId: connection_id,
                counterpartyConnectionId: counterparty_connection_id,
                version: version == null
                    ? version
                    : {
                        identifier: version.identifier,
                        features: version.features,
                    },
                clientState: client_state == null
                    ? client_state
                    : {
                        typeUrl: client_state.type_url,
                        value: client_state.value,
                    },
                proofHeight: proof_height
                    ? {
                        revisionHeight: BigInt(proof_height.revision_height || "0"),
                        revisionNumber: BigInt(proof_height.revision_number || "0"),
                    }
                    : undefined,
                proofTry: proof_try,
                proofClient: proof_client,
                proofConsensus: proof_consensus,
                consensusHeight: consensus_height
                    ? {
                        revisionHeight: BigInt(consensus_height.revision_height || "0"),
                        revisionNumber: BigInt(consensus_height.revision_number || "0"),
                    }
                    : undefined,
                signer,
                hostConsensusStateProof: host_consensus_state_proof,
            };
        },
    },
    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
        aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
        toAmino: ({ connectionId, proofAck, proofHeight, signer, }) => {
            return {
                connection_id: connectionId,
                proof_ack: proofAck,
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                signer,
            };
        },
        fromAmino: ({ connection_id, proof_ack, proof_height, signer, }) => {
            return {
                connectionId: connection_id,
                proofAck: proof_ack,
                proofHeight: proof_height
                    ? {
                        revisionHeight: BigInt(proof_height.revision_height || "0"),
                        revisionNumber: BigInt(proof_height.revision_number || "0"),
                    }
                    : undefined,
                signer,
            };
        },
    },
    "/ibc.core.connection.v1.MsgUpdateParams": {
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
};
//# sourceMappingURL=tx.amino.js.map