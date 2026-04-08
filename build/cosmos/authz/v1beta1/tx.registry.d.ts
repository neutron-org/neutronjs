import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        grant(value: MsgGrant): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        revoke(value: MsgRevoke): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        grant(value: MsgGrant): {
            typeUrl: string;
            value: MsgGrant;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
        revoke(value: MsgRevoke): {
            typeUrl: string;
            value: MsgRevoke;
        };
    };
    toJSON: {
        grant(value: MsgGrant): {
            typeUrl: string;
            value: {
                granter: string;
                grantee: string;
                grant: {
                    authorization?: {
                        typeUrl: string;
                        value: string;
                    };
                    expiration?: {
                        seconds: string;
                        nanos: number;
                    };
                };
            };
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: {
                grantee: string;
                msgs: {
                    typeUrl: string;
                    value: string;
                }[];
            };
        };
        revoke(value: MsgRevoke): {
            typeUrl: string;
            value: {
                granter: string;
                grantee: string;
                msgTypeUrl: string;
            };
        };
    };
    fromJSON: {
        grant(value: any): {
            typeUrl: string;
            value: MsgGrant;
        };
        exec(value: any): {
            typeUrl: string;
            value: MsgExec;
        };
        revoke(value: any): {
            typeUrl: string;
            value: MsgRevoke;
        };
    };
    fromPartial: {
        grant(value: MsgGrant): {
            typeUrl: string;
            value: MsgGrant;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
        revoke(value: MsgRevoke): {
            typeUrl: string;
            value: MsgRevoke;
        };
    };
};
