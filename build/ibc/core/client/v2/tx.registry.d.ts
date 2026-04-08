import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterCounterparty, MsgUpdateClientConfig } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerCounterparty(value: MsgRegisterCounterparty): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateClientConfig(value: MsgUpdateClientConfig): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        registerCounterparty(value: MsgRegisterCounterparty): {
            typeUrl: string;
            value: MsgRegisterCounterparty;
        };
        updateClientConfig(value: MsgUpdateClientConfig): {
            typeUrl: string;
            value: MsgUpdateClientConfig;
        };
    };
    toJSON: {
        registerCounterparty(value: MsgRegisterCounterparty): {
            typeUrl: string;
            value: {
                clientId: string;
                counterpartyMerklePrefix: string[];
                counterpartyClientId: string;
                signer: string;
            };
        };
        updateClientConfig(value: MsgUpdateClientConfig): {
            typeUrl: string;
            value: {
                clientId: string;
                config: {
                    allowedRelayers: string[];
                };
                signer: string;
            };
        };
    };
    fromJSON: {
        registerCounterparty(value: any): {
            typeUrl: string;
            value: MsgRegisterCounterparty;
        };
        updateClientConfig(value: any): {
            typeUrl: string;
            value: MsgUpdateClientConfig;
        };
    };
    fromPartial: {
        registerCounterparty(value: MsgRegisterCounterparty): {
            typeUrl: string;
            value: MsgRegisterCounterparty;
        };
        updateClientConfig(value: MsgUpdateClientConfig): {
            typeUrl: string;
            value: MsgUpdateClientConfig;
        };
    };
};
