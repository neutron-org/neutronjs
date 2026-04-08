import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgModuleQuerySafe } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        moduleQuerySafe(value: MsgModuleQuerySafe): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        moduleQuerySafe(value: MsgModuleQuerySafe): {
            typeUrl: string;
            value: MsgModuleQuerySafe;
        };
    };
    toJSON: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                signer: string;
                params: {
                    hostEnabled: boolean;
                    allowMessages: string[];
                };
            };
        };
        moduleQuerySafe(value: MsgModuleQuerySafe): {
            typeUrl: string;
            value: {
                signer: string;
                requests: {
                    path: string;
                    data: string;
                }[];
            };
        };
    };
    fromJSON: {
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        moduleQuerySafe(value: any): {
            typeUrl: string;
            value: MsgModuleQuerySafe;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        moduleQuerySafe(value: MsgModuleQuerySafe): {
            typeUrl: string;
            value: MsgModuleQuerySafe;
        };
    };
};
