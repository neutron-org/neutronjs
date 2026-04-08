import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgChannelOpenInit, MsgChannelOpenTry, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelCloseInit, MsgChannelCloseConfirm, MsgRecvPacket, MsgTimeout, MsgTimeoutOnClose, MsgAcknowledgement } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: MsgChannelOpenInit;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: MsgChannelOpenTry;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: MsgChannelOpenAck;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: MsgChannelOpenConfirm;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: MsgChannelCloseInit;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: MsgChannelCloseConfirm;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: MsgTimeout;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: MsgTimeoutOnClose;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
    };
    toJSON: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: {
                portId: string;
                channel: {
                    state: import("./channel.js").State;
                    ordering: import("./channel.js").Order;
                    counterparty: {
                        portId: string;
                        channelId: string;
                    };
                    connectionHops: string[];
                    version: string;
                };
                signer: string;
            };
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: {
                portId: string;
                previousChannelId: string;
                channel: {
                    state: import("./channel.js").State;
                    ordering: import("./channel.js").Order;
                    counterparty: {
                        portId: string;
                        channelId: string;
                    };
                    connectionHops: string[];
                    version: string;
                };
                counterpartyVersion: string;
                proofInit: string;
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                signer: string;
            };
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: {
                portId: string;
                channelId: string;
                counterpartyChannelId: string;
                counterpartyVersion: string;
                proofTry: string;
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                signer: string;
            };
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: {
                portId: string;
                channelId: string;
                proofAck: string;
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                signer: string;
            };
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: {
                portId: string;
                channelId: string;
                signer: string;
            };
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: {
                portId: string;
                channelId: string;
                proofInit: string;
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                signer: string;
            };
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: {
                packet: {
                    sequence: string;
                    sourcePort: string;
                    sourceChannel: string;
                    destinationPort: string;
                    destinationChannel: string;
                    data: string;
                    timeoutHeight: {
                        revisionNumber: string;
                        revisionHeight: string;
                    };
                    timeoutTimestamp: string;
                };
                proofCommitment: string;
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                signer: string;
            };
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: {
                packet: {
                    sequence: string;
                    sourcePort: string;
                    sourceChannel: string;
                    destinationPort: string;
                    destinationChannel: string;
                    data: string;
                    timeoutHeight: {
                        revisionNumber: string;
                        revisionHeight: string;
                    };
                    timeoutTimestamp: string;
                };
                proofUnreceived: string;
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                nextSequenceRecv: string;
                signer: string;
            };
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: {
                packet: {
                    sequence: string;
                    sourcePort: string;
                    sourceChannel: string;
                    destinationPort: string;
                    destinationChannel: string;
                    data: string;
                    timeoutHeight: {
                        revisionNumber: string;
                        revisionHeight: string;
                    };
                    timeoutTimestamp: string;
                };
                proofUnreceived: string;
                proofClose: string;
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                nextSequenceRecv: string;
                signer: string;
            };
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: {
                packet: {
                    sequence: string;
                    sourcePort: string;
                    sourceChannel: string;
                    destinationPort: string;
                    destinationChannel: string;
                    data: string;
                    timeoutHeight: {
                        revisionNumber: string;
                        revisionHeight: string;
                    };
                    timeoutTimestamp: string;
                };
                acknowledgement: string;
                proofAcked: string;
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                signer: string;
            };
        };
    };
    fromJSON: {
        channelOpenInit(value: any): {
            typeUrl: string;
            value: MsgChannelOpenInit;
        };
        channelOpenTry(value: any): {
            typeUrl: string;
            value: MsgChannelOpenTry;
        };
        channelOpenAck(value: any): {
            typeUrl: string;
            value: MsgChannelOpenAck;
        };
        channelOpenConfirm(value: any): {
            typeUrl: string;
            value: MsgChannelOpenConfirm;
        };
        channelCloseInit(value: any): {
            typeUrl: string;
            value: MsgChannelCloseInit;
        };
        channelCloseConfirm(value: any): {
            typeUrl: string;
            value: MsgChannelCloseConfirm;
        };
        recvPacket(value: any): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: any): {
            typeUrl: string;
            value: MsgTimeout;
        };
        timeoutOnClose(value: any): {
            typeUrl: string;
            value: MsgTimeoutOnClose;
        };
        acknowledgement(value: any): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
    };
    fromPartial: {
        channelOpenInit(value: MsgChannelOpenInit): {
            typeUrl: string;
            value: MsgChannelOpenInit;
        };
        channelOpenTry(value: MsgChannelOpenTry): {
            typeUrl: string;
            value: MsgChannelOpenTry;
        };
        channelOpenAck(value: MsgChannelOpenAck): {
            typeUrl: string;
            value: MsgChannelOpenAck;
        };
        channelOpenConfirm(value: MsgChannelOpenConfirm): {
            typeUrl: string;
            value: MsgChannelOpenConfirm;
        };
        channelCloseInit(value: MsgChannelCloseInit): {
            typeUrl: string;
            value: MsgChannelCloseInit;
        };
        channelCloseConfirm(value: MsgChannelCloseConfirm): {
            typeUrl: string;
            value: MsgChannelCloseConfirm;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: MsgTimeout;
        };
        timeoutOnClose(value: MsgTimeoutOnClose): {
            typeUrl: string;
            value: MsgTimeoutOnClose;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
    };
};
