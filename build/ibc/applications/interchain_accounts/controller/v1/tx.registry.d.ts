import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        sendTx(value: MsgSendTx): {
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
        sendTx(value: MsgSendTx): {
            typeUrl: string;
            value: MsgSendTx;
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
                owner: string;
                connectionId: string;
                version: string;
                ordering: import("../../../../core/channel/v1/channel.js").Order;
            };
        };
        sendTx(value: MsgSendTx): {
            typeUrl: string;
            value: {
                owner: string;
                connectionId: string;
                packetData: {
                    type: import("../../v1/packet.js").Type;
                    data: string;
                    memo: string;
                };
                relativeTimeout: string;
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                signer: string;
                params: {
                    controllerEnabled: boolean;
                };
            };
        };
    };
    fromJSON: {
        registerInterchainAccount(value: any): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        sendTx(value: any): {
            typeUrl: string;
            value: MsgSendTx;
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
        sendTx(value: MsgSendTx): {
            typeUrl: string;
            value: MsgSendTx;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
