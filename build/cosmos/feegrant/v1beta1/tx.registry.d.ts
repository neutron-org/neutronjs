import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: MsgPruneAllowances;
        };
    };
    toJSON: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: {
                granter: string;
                grantee: string;
                allowance?: {
                    typeUrl: string;
                    value: string;
                };
            };
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: {
                granter: string;
                grantee: string;
            };
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: {
                pruner: string;
            };
        };
    };
    fromJSON: {
        grantAllowance(value: any): {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        revokeAllowance(value: any): {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
        pruneAllowances(value: any): {
            typeUrl: string;
            value: MsgPruneAllowances;
        };
    };
    fromPartial: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: MsgPruneAllowances;
        };
    };
};
