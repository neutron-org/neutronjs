import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainQuery, MsgSubmitQueryResult, MsgRemoveInterchainQueryRequest, MsgUpdateInterchainQueryRequest, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerInterchainQuery(value: MsgRegisterInterchainQuery): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        submitQueryResult(value: MsgSubmitQueryResult): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        removeInterchainQuery(value: MsgRemoveInterchainQueryRequest): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateInterchainQuery(value: MsgUpdateInterchainQueryRequest): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        registerInterchainQuery(value: MsgRegisterInterchainQuery): {
            typeUrl: string;
            value: MsgRegisterInterchainQuery;
        };
        submitQueryResult(value: MsgSubmitQueryResult): {
            typeUrl: string;
            value: MsgSubmitQueryResult;
        };
        removeInterchainQuery(value: MsgRemoveInterchainQueryRequest): {
            typeUrl: string;
            value: MsgRemoveInterchainQueryRequest;
        };
        updateInterchainQuery(value: MsgUpdateInterchainQueryRequest): {
            typeUrl: string;
            value: MsgUpdateInterchainQueryRequest;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        registerInterchainQuery(value: MsgRegisterInterchainQuery): {
            typeUrl: string;
            value: {
                queryType: string;
                keys: {
                    path: string;
                    key: string;
                }[];
                transactionsFilter: string;
                connectionId: string;
                updatePeriod: string;
                sender: string;
            };
        };
        submitQueryResult(value: MsgSubmitQueryResult): {
            typeUrl: string;
            value: {
                queryId: string;
                sender: string;
                clientId: string;
                result?: {
                    kvResults: {
                        storagePrefix: string;
                        key: string;
                        value: string;
                        proof?: {
                            ops: {
                                type: string;
                                key: string;
                                data: string;
                            }[];
                        };
                    }[];
                    block?: {
                        nextBlockHeader?: {
                            typeUrl: string;
                            value: string;
                        };
                        header?: {
                            typeUrl: string;
                            value: string;
                        };
                        tx?: {
                            response?: {
                                code: number;
                                data: string;
                                log: string;
                                info: string;
                                gasWanted: string;
                                gasUsed: string;
                                events: {
                                    type: string;
                                    attributes: {
                                        key: string;
                                        value: string;
                                        index: boolean;
                                    }[];
                                }[];
                                codespace: string;
                            };
                            deliveryProof?: {
                                total: string;
                                index: string;
                                leafHash: string;
                                aunts: string[];
                            };
                            inclusionProof?: {
                                total: string;
                                index: string;
                                leafHash: string;
                                aunts: string[];
                            };
                            data: string;
                        };
                    };
                    height: string;
                    revision: string;
                    allowKvCallbacks: boolean;
                };
            };
        };
        removeInterchainQuery(value: MsgRemoveInterchainQueryRequest): {
            typeUrl: string;
            value: {
                queryId: string;
                sender: string;
            };
        };
        updateInterchainQuery(value: MsgUpdateInterchainQueryRequest): {
            typeUrl: string;
            value: {
                queryId: string;
                newKeys: {
                    path: string;
                    key: string;
                }[];
                newUpdatePeriod: string;
                newTransactionsFilter: string;
                sender: string;
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    querySubmitTimeout: string;
                    queryDeposit: {
                        denom: string;
                        amount: string;
                    }[];
                    txQueryRemovalLimit: string;
                    maxKvQueryKeysCount: string;
                    maxTransactionsFilters: string;
                };
            };
        };
    };
    fromJSON: {
        registerInterchainQuery(value: any): {
            typeUrl: string;
            value: MsgRegisterInterchainQuery;
        };
        submitQueryResult(value: any): {
            typeUrl: string;
            value: MsgSubmitQueryResult;
        };
        removeInterchainQuery(value: any): {
            typeUrl: string;
            value: MsgRemoveInterchainQueryRequest;
        };
        updateInterchainQuery(value: any): {
            typeUrl: string;
            value: MsgUpdateInterchainQueryRequest;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerInterchainQuery(value: MsgRegisterInterchainQuery): {
            typeUrl: string;
            value: MsgRegisterInterchainQuery;
        };
        submitQueryResult(value: MsgSubmitQueryResult): {
            typeUrl: string;
            value: MsgSubmitQueryResult;
        };
        removeInterchainQuery(value: MsgRemoveInterchainQueryRequest): {
            typeUrl: string;
            value: MsgRemoveInterchainQueryRequest;
        };
        updateInterchainQuery(value: MsgUpdateInterchainQueryRequest): {
            typeUrl: string;
            value: MsgUpdateInterchainQueryRequest;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
