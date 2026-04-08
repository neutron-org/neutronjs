import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSendPacket, MsgRecvPacket, MsgTimeout, MsgAcknowledgement } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        sendPacket(value: MsgSendPacket): {
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
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        sendPacket(value: MsgSendPacket): {
            typeUrl: string;
            value: MsgSendPacket;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: MsgTimeout;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
    };
    toJSON: {
        sendPacket(value: MsgSendPacket): {
            typeUrl: string;
            value: {
                sourceClient: string;
                timeoutTimestamp: string;
                payloads: {
                    sourcePort: string;
                    destinationPort: string;
                    version: string;
                    encoding: string;
                    value: string;
                }[];
                signer: string;
            };
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: {
                packet: {
                    sequence: string;
                    sourceClient: string;
                    destinationClient: string;
                    timeoutTimestamp: string;
                    payloads: {
                        sourcePort: string;
                        destinationPort: string;
                        version: string;
                        encoding: string;
                        value: string;
                    }[];
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
                    sourceClient: string;
                    destinationClient: string;
                    timeoutTimestamp: string;
                    payloads: {
                        sourcePort: string;
                        destinationPort: string;
                        version: string;
                        encoding: string;
                        value: string;
                    }[];
                };
                proofUnreceived: string;
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                signer: string;
            };
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: {
                packet: {
                    sequence: string;
                    sourceClient: string;
                    destinationClient: string;
                    timeoutTimestamp: string;
                    payloads: {
                        sourcePort: string;
                        destinationPort: string;
                        version: string;
                        encoding: string;
                        value: string;
                    }[];
                };
                acknowledgement: {
                    appAcknowledgements: string[];
                };
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
        sendPacket(value: any): {
            typeUrl: string;
            value: MsgSendPacket;
        };
        recvPacket(value: any): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: any): {
            typeUrl: string;
            value: MsgTimeout;
        };
        acknowledgement(value: any): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
    };
    fromPartial: {
        sendPacket(value: MsgSendPacket): {
            typeUrl: string;
            value: MsgSendPacket;
        };
        recvPacket(value: MsgRecvPacket): {
            typeUrl: string;
            value: MsgRecvPacket;
        };
        timeout(value: MsgTimeout): {
            typeUrl: string;
            value: MsgTimeout;
        };
        acknowledgement(value: MsgAcknowledgement): {
            typeUrl: string;
            value: MsgAcknowledgement;
        };
    };
};
