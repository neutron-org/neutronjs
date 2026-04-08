import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        authorizeCircuitBreaker(value: MsgAuthorizeCircuitBreaker): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        tripCircuitBreaker(value: MsgTripCircuitBreaker): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        resetCircuitBreaker(value: MsgResetCircuitBreaker): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        authorizeCircuitBreaker(value: MsgAuthorizeCircuitBreaker): {
            typeUrl: string;
            value: MsgAuthorizeCircuitBreaker;
        };
        tripCircuitBreaker(value: MsgTripCircuitBreaker): {
            typeUrl: string;
            value: MsgTripCircuitBreaker;
        };
        resetCircuitBreaker(value: MsgResetCircuitBreaker): {
            typeUrl: string;
            value: MsgResetCircuitBreaker;
        };
    };
    toJSON: {
        authorizeCircuitBreaker(value: MsgAuthorizeCircuitBreaker): {
            typeUrl: string;
            value: {
                granter: string;
                grantee: string;
                permissions?: {
                    level: import("./types.js").Permissions_Level;
                    limitTypeUrls: string[];
                };
            };
        };
        tripCircuitBreaker(value: MsgTripCircuitBreaker): {
            typeUrl: string;
            value: {
                authority: string;
                msgTypeUrls: string[];
            };
        };
        resetCircuitBreaker(value: MsgResetCircuitBreaker): {
            typeUrl: string;
            value: {
                authority: string;
                msgTypeUrls: string[];
            };
        };
    };
    fromJSON: {
        authorizeCircuitBreaker(value: any): {
            typeUrl: string;
            value: MsgAuthorizeCircuitBreaker;
        };
        tripCircuitBreaker(value: any): {
            typeUrl: string;
            value: MsgTripCircuitBreaker;
        };
        resetCircuitBreaker(value: any): {
            typeUrl: string;
            value: MsgResetCircuitBreaker;
        };
    };
    fromPartial: {
        authorizeCircuitBreaker(value: MsgAuthorizeCircuitBreaker): {
            typeUrl: string;
            value: MsgAuthorizeCircuitBreaker;
        };
        tripCircuitBreaker(value: MsgTripCircuitBreaker): {
            typeUrl: string;
            value: MsgTripCircuitBreaker;
        };
        resetCircuitBreaker(value: MsgResetCircuitBreaker): {
            typeUrl: string;
            value: MsgResetCircuitBreaker;
        };
    };
};
