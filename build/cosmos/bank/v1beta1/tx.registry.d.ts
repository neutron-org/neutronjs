import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        send(value: MsgSend): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        multiSend(value: MsgMultiSend): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        setSendEnabled(value: MsgSetSendEnabled): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
        multiSend(value: MsgMultiSend): {
            typeUrl: string;
            value: MsgMultiSend;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        setSendEnabled(value: MsgSetSendEnabled): {
            typeUrl: string;
            value: MsgSetSendEnabled;
        };
    };
    toJSON: {
        send(value: MsgSend): {
            typeUrl: string;
            value: {
                fromAddress: string;
                toAddress: string;
                amount: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        multiSend(value: MsgMultiSend): {
            typeUrl: string;
            value: {
                inputs: {
                    address: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }[];
                outputs: {
                    address: string;
                    coins: {
                        denom: string;
                        amount: string;
                    }[];
                }[];
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    sendEnabled: {
                        denom: string;
                        enabled: boolean;
                    }[];
                    defaultSendEnabled: boolean;
                };
            };
        };
        setSendEnabled(value: MsgSetSendEnabled): {
            typeUrl: string;
            value: {
                authority: string;
                sendEnabled: {
                    denom: string;
                    enabled: boolean;
                }[];
                useDefaultFor: string[];
            };
        };
    };
    fromJSON: {
        send(value: any): {
            typeUrl: string;
            value: MsgSend;
        };
        multiSend(value: any): {
            typeUrl: string;
            value: MsgMultiSend;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        setSendEnabled(value: any): {
            typeUrl: string;
            value: MsgSetSendEnabled;
        };
    };
    fromPartial: {
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
        multiSend(value: MsgMultiSend): {
            typeUrl: string;
            value: MsgMultiSend;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        setSendEnabled(value: MsgSetSendEnabled): {
            typeUrl: string;
            value: MsgSetSendEnabled;
        };
    };
};
