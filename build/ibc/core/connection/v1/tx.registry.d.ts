import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        connectionOpenInit(value: MsgConnectionOpenInit): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        connectionOpenTry(value: MsgConnectionOpenTry): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        connectionOpenAck(value: MsgConnectionOpenAck): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateConnectionParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        connectionOpenInit(value: MsgConnectionOpenInit): {
            typeUrl: string;
            value: MsgConnectionOpenInit;
        };
        connectionOpenTry(value: MsgConnectionOpenTry): {
            typeUrl: string;
            value: MsgConnectionOpenTry;
        };
        connectionOpenAck(value: MsgConnectionOpenAck): {
            typeUrl: string;
            value: MsgConnectionOpenAck;
        };
        connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
            typeUrl: string;
            value: MsgConnectionOpenConfirm;
        };
        updateConnectionParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        connectionOpenInit(value: MsgConnectionOpenInit): {
            typeUrl: string;
            value: {
                clientId: string;
                counterparty: {
                    clientId: string;
                    connectionId: string;
                    prefix: {
                        keyPrefix: string;
                    };
                };
                version?: {
                    identifier: string;
                    features: string[];
                };
                delayPeriod: string;
                signer: string;
            };
        };
        connectionOpenTry(value: MsgConnectionOpenTry): {
            typeUrl: string;
            value: {
                clientId: string;
                previousConnectionId: string;
                clientState?: {
                    typeUrl: string;
                    value: string;
                };
                counterparty: {
                    clientId: string;
                    connectionId: string;
                    prefix: {
                        keyPrefix: string;
                    };
                };
                delayPeriod: string;
                counterpartyVersions: {
                    identifier: string;
                    features: string[];
                }[];
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                proofInit: string;
                proofClient: string;
                proofConsensus: string;
                consensusHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                signer: string;
                hostConsensusStateProof: string;
            };
        };
        connectionOpenAck(value: MsgConnectionOpenAck): {
            typeUrl: string;
            value: {
                connectionId: string;
                counterpartyConnectionId: string;
                version?: {
                    identifier: string;
                    features: string[];
                };
                clientState?: {
                    typeUrl: string;
                    value: string;
                };
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                proofTry: string;
                proofClient: string;
                proofConsensus: string;
                consensusHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                signer: string;
                hostConsensusStateProof: string;
            };
        };
        connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
            typeUrl: string;
            value: {
                connectionId: string;
                proofAck: string;
                proofHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                signer: string;
            };
        };
        updateConnectionParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                signer: string;
                params: {
                    allowedClients: string[];
                };
            };
        };
    };
    fromJSON: {
        connectionOpenInit(value: any): {
            typeUrl: string;
            value: MsgConnectionOpenInit;
        };
        connectionOpenTry(value: any): {
            typeUrl: string;
            value: MsgConnectionOpenTry;
        };
        connectionOpenAck(value: any): {
            typeUrl: string;
            value: MsgConnectionOpenAck;
        };
        connectionOpenConfirm(value: any): {
            typeUrl: string;
            value: MsgConnectionOpenConfirm;
        };
        updateConnectionParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        connectionOpenInit(value: MsgConnectionOpenInit): {
            typeUrl: string;
            value: MsgConnectionOpenInit;
        };
        connectionOpenTry(value: MsgConnectionOpenTry): {
            typeUrl: string;
            value: MsgConnectionOpenTry;
        };
        connectionOpenAck(value: MsgConnectionOpenAck): {
            typeUrl: string;
            value: MsgConnectionOpenAck;
        };
        connectionOpenConfirm(value: MsgConnectionOpenConfirm): {
            typeUrl: string;
            value: MsgConnectionOpenConfirm;
        };
        updateConnectionParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
