"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const helpers_js_1 = require("../../../../helpers.js");
exports.AminoConverter = {
    "/ibc.core.channel.v2.MsgSendPacket": {
        aminoType: "cosmos-sdk/MsgSendPacket",
        toAmino: ({ sourceClient, timeoutTimestamp, payloads, signer, }) => {
            return {
                source_client: sourceClient,
                timeout_timestamp: (0, helpers_js_1.omitDefault)(timeoutTimestamp)?.toString?.(),
                payloads: payloads.map((el0) => ({
                    source_port: el0.sourcePort,
                    destination_port: el0.destinationPort,
                    version: el0.version,
                    encoding: el0.encoding,
                    value: el0.value,
                })),
                signer,
            };
        },
        fromAmino: ({ source_client, timeout_timestamp, payloads, signer, }) => {
            return {
                sourceClient: source_client,
                timeoutTimestamp: timeout_timestamp == null ? timeout_timestamp : BigInt(timeout_timestamp),
                payloads: payloads.map?.((el0) => ({
                    sourcePort: el0.source_port,
                    destinationPort: el0.destination_port,
                    version: el0.version,
                    encoding: el0.encoding,
                    value: el0.value,
                })),
                signer,
            };
        },
    },
    "/ibc.core.channel.v2.MsgRecvPacket": {
        aminoType: "cosmos-sdk/MsgRecvPacket",
        toAmino: ({ packet, proofCommitment, proofHeight, signer, }) => {
            return {
                packet: {
                    sequence: (0, helpers_js_1.omitDefault)(packet.sequence)?.toString?.(),
                    source_client: packet.sourceClient,
                    destination_client: packet.destinationClient,
                    timeout_timestamp: (0, helpers_js_1.omitDefault)(packet.timeoutTimestamp)?.toString?.(),
                    payloads: packet.payloads.map((el0) => ({
                        source_port: el0.sourcePort,
                        destination_port: el0.destinationPort,
                        version: el0.version,
                        encoding: el0.encoding,
                        value: el0.value,
                    })),
                },
                proof_commitment: proofCommitment,
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                signer,
            };
        },
        fromAmino: ({ packet, proof_commitment, proof_height, signer, }) => {
            return {
                packet: packet == null
                    ? packet
                    : {
                        sequence: packet.sequence == null ? packet.sequence : BigInt(packet.sequence),
                        sourceClient: packet.source_client,
                        destinationClient: packet.destination_client,
                        timeoutTimestamp: packet.timeout_timestamp == null
                            ? packet.timeout_timestamp
                            : BigInt(packet.timeout_timestamp),
                        payloads: packet.payloads.map?.((el1) => ({
                            sourcePort: el1.source_port,
                            destinationPort: el1.destination_port,
                            version: el1.version,
                            encoding: el1.encoding,
                            value: el1.value,
                        })),
                    },
                proofCommitment: proof_commitment,
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
    "/ibc.core.channel.v2.MsgTimeout": {
        aminoType: "cosmos-sdk/MsgTimeout",
        toAmino: ({ packet, proofUnreceived, proofHeight, signer }) => {
            return {
                packet: {
                    sequence: (0, helpers_js_1.omitDefault)(packet.sequence)?.toString?.(),
                    source_client: packet.sourceClient,
                    destination_client: packet.destinationClient,
                    timeout_timestamp: (0, helpers_js_1.omitDefault)(packet.timeoutTimestamp)?.toString?.(),
                    payloads: packet.payloads.map((el0) => ({
                        source_port: el0.sourcePort,
                        destination_port: el0.destinationPort,
                        version: el0.version,
                        encoding: el0.encoding,
                        value: el0.value,
                    })),
                },
                proof_unreceived: proofUnreceived,
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                signer,
            };
        },
        fromAmino: ({ packet, proof_unreceived, proof_height, signer, }) => {
            return {
                packet: packet == null
                    ? packet
                    : {
                        sequence: packet.sequence == null ? packet.sequence : BigInt(packet.sequence),
                        sourceClient: packet.source_client,
                        destinationClient: packet.destination_client,
                        timeoutTimestamp: packet.timeout_timestamp == null
                            ? packet.timeout_timestamp
                            : BigInt(packet.timeout_timestamp),
                        payloads: packet.payloads.map?.((el1) => ({
                            sourcePort: el1.source_port,
                            destinationPort: el1.destination_port,
                            version: el1.version,
                            encoding: el1.encoding,
                            value: el1.value,
                        })),
                    },
                proofUnreceived: proof_unreceived,
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
    "/ibc.core.channel.v2.MsgAcknowledgement": {
        aminoType: "cosmos-sdk/MsgAcknowledgement",
        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer, }) => {
            return {
                packet: {
                    sequence: (0, helpers_js_1.omitDefault)(packet.sequence)?.toString?.(),
                    source_client: packet.sourceClient,
                    destination_client: packet.destinationClient,
                    timeout_timestamp: (0, helpers_js_1.omitDefault)(packet.timeoutTimestamp)?.toString?.(),
                    payloads: packet.payloads.map((el0) => ({
                        source_port: el0.sourcePort,
                        destination_port: el0.destinationPort,
                        version: el0.version,
                        encoding: el0.encoding,
                        value: el0.value,
                    })),
                },
                acknowledgement: {
                    app_acknowledgements: acknowledgement.appAcknowledgements,
                },
                proof_acked: proofAcked,
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                signer,
            };
        },
        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer, }) => {
            return {
                packet: packet == null
                    ? packet
                    : {
                        sequence: packet.sequence == null ? packet.sequence : BigInt(packet.sequence),
                        sourceClient: packet.source_client,
                        destinationClient: packet.destination_client,
                        timeoutTimestamp: packet.timeout_timestamp == null
                            ? packet.timeout_timestamp
                            : BigInt(packet.timeout_timestamp),
                        payloads: packet.payloads.map?.((el1) => ({
                            sourcePort: el1.source_port,
                            destinationPort: el1.destination_port,
                            version: el1.version,
                            encoding: el1.encoding,
                            value: el1.value,
                        })),
                    },
                acknowledgement: acknowledgement == null
                    ? acknowledgement
                    : {
                        appAcknowledgements: acknowledgement.app_acknowledgements,
                    },
                proofAcked: proof_acked,
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
};
//# sourceMappingURL=tx.amino.js.map