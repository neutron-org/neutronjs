import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgSetBeforeSendHook, MsgForceTransfer, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        changeAdmin(value: MsgChangeAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        setBeforeSendHook(value: MsgSetBeforeSendHook): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        changeAdmin(value: MsgChangeAdmin): {
            typeUrl: string;
            value: MsgChangeAdmin;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        setBeforeSendHook(value: MsgSetBeforeSendHook): {
            typeUrl: string;
            value: MsgSetBeforeSendHook;
        };
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: {
                sender: string;
                subdenom: string;
            };
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: {
                sender: string;
                amount: {
                    denom: string;
                    amount: string;
                };
                mintToAddress: string;
            };
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: {
                sender: string;
                amount: {
                    denom: string;
                    amount: string;
                };
                burnFromAddress: string;
            };
        };
        changeAdmin(value: MsgChangeAdmin): {
            typeUrl: string;
            value: {
                sender: string;
                denom: string;
                newAdmin: string;
            };
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: {
                sender: string;
                metadata: {
                    description: string;
                    denomUnits: {
                        denom: string;
                        exponent: number;
                        aliases: string[];
                    }[];
                    base: string;
                    display: string;
                    name: string;
                    symbol: string;
                    uri: string;
                    uriHash: string;
                };
            };
        };
        setBeforeSendHook(value: MsgSetBeforeSendHook): {
            typeUrl: string;
            value: {
                sender: string;
                denom: string;
                contractAddr: string;
            };
        };
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: {
                sender: string;
                amount: {
                    denom: string;
                    amount: string;
                };
                transferFromAddress: string;
                transferToAddress: string;
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
    };
    fromJSON: {
        createDenom(value: any): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        mint(value: any): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: any): {
            typeUrl: string;
            value: MsgBurn;
        };
        changeAdmin(value: any): {
            typeUrl: string;
            value: MsgChangeAdmin;
        };
        setDenomMetadata(value: any): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        setBeforeSendHook(value: any): {
            typeUrl: string;
            value: MsgSetBeforeSendHook;
        };
        forceTransfer(value: any): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        changeAdmin(value: MsgChangeAdmin): {
            typeUrl: string;
            value: MsgChangeAdmin;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        setBeforeSendHook(value: MsgSetBeforeSendHook): {
            typeUrl: string;
            value: MsgSetBeforeSendHook;
        };
        forceTransfer(value: MsgForceTransfer): {
            typeUrl: string;
            value: MsgForceTransfer;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
