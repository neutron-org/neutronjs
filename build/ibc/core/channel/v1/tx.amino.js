"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
/* eslint-disable */
const channel_js_1 = require("./channel.js");
const helpers_js_1 = require("../../../../helpers.js");
exports.AminoConverter = {
    "/ibc.core.channel.v1.MsgChannelOpenInit": {
        aminoType: "cosmos-sdk/MsgChannelOpenInit",
        toAmino: ({ portId, channel, signer }) => {
            return {
                port_id: portId,
                channel: {
                    state: channel.state,
                    ordering: channel.ordering,
                    counterparty: {
                        port_id: channel.counterparty.portId,
                        channel_id: channel.counterparty.channelId,
                    },
                    connection_hops: channel.connectionHops,
                    version: channel.version,
                },
                signer,
            };
        },
        fromAmino: ({ port_id, channel, signer }) => {
            return {
                portId: port_id,
                channel: channel == null
                    ? channel
                    : {
                        state: channel.state == null ? channel.state : (0, channel_js_1.stateFromJSON)(channel.state),
                        ordering: channel.ordering == null ? channel.ordering : (0, channel_js_1.orderFromJSON)(channel.ordering),
                        counterparty: channel.counterparty == null
                            ? channel.counterparty
                            : {
                                portId: channel.counterparty.port_id,
                                channelId: channel.counterparty.channel_id,
                            },
                        connectionHops: channel.connection_hops,
                        version: channel.version,
                    },
                signer,
            };
        },
    },
    "/ibc.core.channel.v1.MsgChannelOpenTry": {
        aminoType: "cosmos-sdk/MsgChannelOpenTry",
        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer, }) => {
            return {
                port_id: portId,
                previous_channel_id: previousChannelId,
                channel: {
                    state: channel.state,
                    ordering: channel.ordering,
                    counterparty: {
                        port_id: channel.counterparty.portId,
                        channel_id: channel.counterparty.channelId,
                    },
                    connection_hops: channel.connectionHops,
                    version: channel.version,
                },
                counterparty_version: counterpartyVersion,
                proof_init: proofInit,
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                signer,
            };
        },
        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer, }) => {
            return {
                portId: port_id,
                previousChannelId: previous_channel_id,
                channel: channel == null
                    ? channel
                    : {
                        state: channel.state == null ? channel.state : (0, channel_js_1.stateFromJSON)(channel.state),
                        ordering: channel.ordering == null ? channel.ordering : (0, channel_js_1.orderFromJSON)(channel.ordering),
                        counterparty: channel.counterparty == null
                            ? channel.counterparty
                            : {
                                portId: channel.counterparty.port_id,
                                channelId: channel.counterparty.channel_id,
                            },
                        connectionHops: channel.connection_hops,
                        version: channel.version,
                    },
                counterpartyVersion: counterparty_version,
                proofInit: proof_init,
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
    "/ibc.core.channel.v1.MsgChannelOpenAck": {
        aminoType: "cosmos-sdk/MsgChannelOpenAck",
        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer, }) => {
            return {
                port_id: portId,
                channel_id: channelId,
                counterparty_channel_id: counterpartyChannelId,
                counterparty_version: counterpartyVersion,
                proof_try: proofTry,
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                signer,
            };
        },
        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer, }) => {
            return {
                portId: port_id,
                channelId: channel_id,
                counterpartyChannelId: counterparty_channel_id,
                counterpartyVersion: counterparty_version,
                proofTry: proof_try,
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
    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
        aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
        toAmino: ({ portId, channelId, proofAck, proofHeight, signer, }) => {
            return {
                port_id: portId,
                channel_id: channelId,
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
        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer, }) => {
            return {
                portId: port_id,
                channelId: channel_id,
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
    "/ibc.core.channel.v1.MsgChannelCloseInit": {
        aminoType: "cosmos-sdk/MsgChannelCloseInit",
        toAmino: ({ portId, channelId, signer }) => {
            return {
                port_id: portId,
                channel_id: channelId,
                signer,
            };
        },
        fromAmino: ({ port_id, channel_id, signer, }) => {
            return {
                portId: port_id,
                channelId: channel_id,
                signer,
            };
        },
    },
    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
        aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
        toAmino: ({ portId, channelId, proofInit, proofHeight, signer, }) => {
            return {
                port_id: portId,
                channel_id: channelId,
                proof_init: proofInit,
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                signer,
            };
        },
        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer, }) => {
            return {
                portId: port_id,
                channelId: channel_id,
                proofInit: proof_init,
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
    "/ibc.core.channel.v1.MsgRecvPacket": {
        aminoType: "cosmos-sdk/MsgRecvPacket",
        toAmino: ({ packet, proofCommitment, proofHeight, signer, }) => {
            return {
                packet: {
                    sequence: (0, helpers_js_1.omitDefault)(packet.sequence)?.toString?.(),
                    source_port: packet.sourcePort,
                    source_channel: packet.sourceChannel,
                    destination_port: packet.destinationPort,
                    destination_channel: packet.destinationChannel,
                    data: packet.data,
                    timeout_height: packet.timeoutHeight
                        ? {
                            revision_height: (0, helpers_js_1.omitDefault)(packet.timeoutHeight.revisionHeight)?.toString(),
                            revision_number: (0, helpers_js_1.omitDefault)(packet.timeoutHeight.revisionNumber)?.toString(),
                        }
                        : {},
                    timeout_timestamp: (0, helpers_js_1.omitDefault)(packet.timeoutTimestamp)?.toString?.(),
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
                        sourcePort: packet.source_port,
                        sourceChannel: packet.source_channel,
                        destinationPort: packet.destination_port,
                        destinationChannel: packet.destination_channel,
                        data: packet.data,
                        timeoutHeight: packet.timeout_height
                            ? {
                                revisionHeight: BigInt(packet.timeout_height.revision_height || "0"),
                                revisionNumber: BigInt(packet.timeout_height.revision_number || "0"),
                            }
                            : undefined,
                        timeoutTimestamp: packet.timeout_timestamp == null
                            ? packet.timeout_timestamp
                            : BigInt(packet.timeout_timestamp),
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
    "/ibc.core.channel.v1.MsgTimeout": {
        aminoType: "cosmos-sdk/MsgTimeout",
        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer, }) => {
            return {
                packet: {
                    sequence: (0, helpers_js_1.omitDefault)(packet.sequence)?.toString?.(),
                    source_port: packet.sourcePort,
                    source_channel: packet.sourceChannel,
                    destination_port: packet.destinationPort,
                    destination_channel: packet.destinationChannel,
                    data: packet.data,
                    timeout_height: packet.timeoutHeight
                        ? {
                            revision_height: (0, helpers_js_1.omitDefault)(packet.timeoutHeight.revisionHeight)?.toString(),
                            revision_number: (0, helpers_js_1.omitDefault)(packet.timeoutHeight.revisionNumber)?.toString(),
                        }
                        : {},
                    timeout_timestamp: (0, helpers_js_1.omitDefault)(packet.timeoutTimestamp)?.toString?.(),
                },
                proof_unreceived: proofUnreceived,
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                next_sequence_recv: (0, helpers_js_1.omitDefault)(nextSequenceRecv)?.toString?.(),
                signer,
            };
        },
        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer, }) => {
            return {
                packet: packet == null
                    ? packet
                    : {
                        sequence: packet.sequence == null ? packet.sequence : BigInt(packet.sequence),
                        sourcePort: packet.source_port,
                        sourceChannel: packet.source_channel,
                        destinationPort: packet.destination_port,
                        destinationChannel: packet.destination_channel,
                        data: packet.data,
                        timeoutHeight: packet.timeout_height
                            ? {
                                revisionHeight: BigInt(packet.timeout_height.revision_height || "0"),
                                revisionNumber: BigInt(packet.timeout_height.revision_number || "0"),
                            }
                            : undefined,
                        timeoutTimestamp: packet.timeout_timestamp == null
                            ? packet.timeout_timestamp
                            : BigInt(packet.timeout_timestamp),
                    },
                proofUnreceived: proof_unreceived,
                proofHeight: proof_height
                    ? {
                        revisionHeight: BigInt(proof_height.revision_height || "0"),
                        revisionNumber: BigInt(proof_height.revision_number || "0"),
                    }
                    : undefined,
                nextSequenceRecv: next_sequence_recv == null ? next_sequence_recv : BigInt(next_sequence_recv),
                signer,
            };
        },
    },
    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
        aminoType: "cosmos-sdk/MsgTimeoutOnClose",
        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer, }) => {
            return {
                packet: {
                    sequence: (0, helpers_js_1.omitDefault)(packet.sequence)?.toString?.(),
                    source_port: packet.sourcePort,
                    source_channel: packet.sourceChannel,
                    destination_port: packet.destinationPort,
                    destination_channel: packet.destinationChannel,
                    data: packet.data,
                    timeout_height: packet.timeoutHeight
                        ? {
                            revision_height: (0, helpers_js_1.omitDefault)(packet.timeoutHeight.revisionHeight)?.toString(),
                            revision_number: (0, helpers_js_1.omitDefault)(packet.timeoutHeight.revisionNumber)?.toString(),
                        }
                        : {},
                    timeout_timestamp: (0, helpers_js_1.omitDefault)(packet.timeoutTimestamp)?.toString?.(),
                },
                proof_unreceived: proofUnreceived,
                proof_close: proofClose,
                proof_height: proofHeight
                    ? {
                        revision_height: (0, helpers_js_1.omitDefault)(proofHeight.revisionHeight)?.toString(),
                        revision_number: (0, helpers_js_1.omitDefault)(proofHeight.revisionNumber)?.toString(),
                    }
                    : {},
                next_sequence_recv: (0, helpers_js_1.omitDefault)(nextSequenceRecv)?.toString?.(),
                signer,
            };
        },
        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer, }) => {
            return {
                packet: packet == null
                    ? packet
                    : {
                        sequence: packet.sequence == null ? packet.sequence : BigInt(packet.sequence),
                        sourcePort: packet.source_port,
                        sourceChannel: packet.source_channel,
                        destinationPort: packet.destination_port,
                        destinationChannel: packet.destination_channel,
                        data: packet.data,
                        timeoutHeight: packet.timeout_height
                            ? {
                                revisionHeight: BigInt(packet.timeout_height.revision_height || "0"),
                                revisionNumber: BigInt(packet.timeout_height.revision_number || "0"),
                            }
                            : undefined,
                        timeoutTimestamp: packet.timeout_timestamp == null
                            ? packet.timeout_timestamp
                            : BigInt(packet.timeout_timestamp),
                    },
                proofUnreceived: proof_unreceived,
                proofClose: proof_close,
                proofHeight: proof_height
                    ? {
                        revisionHeight: BigInt(proof_height.revision_height || "0"),
                        revisionNumber: BigInt(proof_height.revision_number || "0"),
                    }
                    : undefined,
                nextSequenceRecv: next_sequence_recv == null ? next_sequence_recv : BigInt(next_sequence_recv),
                signer,
            };
        },
    },
    "/ibc.core.channel.v1.MsgAcknowledgement": {
        aminoType: "cosmos-sdk/MsgAcknowledgement",
        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer, }) => {
            return {
                packet: {
                    sequence: (0, helpers_js_1.omitDefault)(packet.sequence)?.toString?.(),
                    source_port: packet.sourcePort,
                    source_channel: packet.sourceChannel,
                    destination_port: packet.destinationPort,
                    destination_channel: packet.destinationChannel,
                    data: packet.data,
                    timeout_height: packet.timeoutHeight
                        ? {
                            revision_height: (0, helpers_js_1.omitDefault)(packet.timeoutHeight.revisionHeight)?.toString(),
                            revision_number: (0, helpers_js_1.omitDefault)(packet.timeoutHeight.revisionNumber)?.toString(),
                        }
                        : {},
                    timeout_timestamp: (0, helpers_js_1.omitDefault)(packet.timeoutTimestamp)?.toString?.(),
                },
                acknowledgement,
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
                        sourcePort: packet.source_port,
                        sourceChannel: packet.source_channel,
                        destinationPort: packet.destination_port,
                        destinationChannel: packet.destination_channel,
                        data: packet.data,
                        timeoutHeight: packet.timeout_height
                            ? {
                                revisionHeight: BigInt(packet.timeout_height.revision_height || "0"),
                                revisionNumber: BigInt(packet.timeout_height.revision_number || "0"),
                            }
                            : undefined,
                        timeoutTimestamp: packet.timeout_timestamp == null
                            ? packet.timeout_timestamp
                            : BigInt(packet.timeout_timestamp),
                    },
                acknowledgement,
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