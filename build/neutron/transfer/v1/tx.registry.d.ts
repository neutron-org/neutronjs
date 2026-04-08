import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgTransfer, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: MsgTransfer;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: {
                sourcePort: string;
                sourceChannel: string;
                token: {
                    denom: string;
                    amount: string;
                };
                sender: string;
                receiver: string;
                timeoutHeight: {
                    revisionNumber: string;
                    revisionHeight: string;
                };
                timeoutTimestamp: string;
                memo: string;
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
                signer: string;
                params: {
                    sendEnabled: boolean;
                    receiveEnabled: boolean;
                };
            };
        };
    };
    fromJSON: {
        transfer(value: any): {
            typeUrl: string;
            value: MsgTransfer;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: MsgTransfer;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
