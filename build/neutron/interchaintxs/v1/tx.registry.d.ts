import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainAccount, MsgSubmitTx, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        submitTx(value: MsgSubmitTx): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        submitTx(value: MsgSubmitTx): {
            typeUrl: string;
            value: MsgSubmitTx;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: {
                fromAddress: string;
                connectionId: string;
                interchainAccountId: string;
                registerFee: {
                    denom: string;
                    amount: string;
                }[];
                ordering: import("../../../ibc/core/channel/v1/channel.js").Order;
            };
        };
        submitTx(value: MsgSubmitTx): {
            typeUrl: string;
            value: {
                fromAddress: string;
                interchainAccountId: string;
                connectionId: string;
                msgs: {
                    typeUrl: string;
                    value: string;
                }[];
                memo: string;
                timeout: string;
                fee: {
                    recvFee: {
                        denom: string;
                        amount: string;
                    }[];
                    ackFee: {
                        denom: string;
                        amount: string;
                    }[];
                    timeoutFee: {
                        denom: string;
                        amount: string;
                    }[];
                };
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    msgSubmitTxMaxMessages: string;
                    registerFee: {
                        denom: string;
                        amount: string;
                    }[];
                };
            };
        };
    };
    fromJSON: {
        registerInterchainAccount(value: any): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        submitTx(value: any): {
            typeUrl: string;
            value: MsgSubmitTx;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        submitTx(value: MsgSubmitTx): {
            typeUrl: string;
            value: MsgSubmitTx;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
