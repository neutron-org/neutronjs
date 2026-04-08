import { AminoMsg } from "@cosmjs/amino";
import { MsgAuthorizeCircuitBreaker, MsgTripCircuitBreaker, MsgResetCircuitBreaker } from "./tx.js";
export interface MsgAuthorizeCircuitBreakerAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgAuthorizeCircuitBreaker";
    value: {
        granter: string;
        grantee: string;
        permissions: {
            level: number;
            limit_type_urls: string[];
        };
    };
}
export interface MsgTripCircuitBreakerAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgTripCircuitBreaker";
    value: {
        authority: string;
        msg_type_urls: string[];
    };
}
export interface MsgResetCircuitBreakerAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgResetCircuitBreaker";
    value: {
        authority: string;
        msg_type_urls: string[];
    };
}
export declare const AminoConverter: {
    "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
        aminoType: string;
        toAmino: ({ granter, grantee, permissions, }: MsgAuthorizeCircuitBreaker) => MsgAuthorizeCircuitBreakerAminoType["value"];
        fromAmino: ({ granter, grantee, permissions, }: MsgAuthorizeCircuitBreakerAminoType["value"]) => MsgAuthorizeCircuitBreaker;
    };
    "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
        aminoType: string;
        toAmino: ({ authority, msgTypeUrls }: MsgTripCircuitBreaker) => MsgTripCircuitBreakerAminoType["value"];
        fromAmino: ({ authority, msg_type_urls, }: MsgTripCircuitBreakerAminoType["value"]) => MsgTripCircuitBreaker;
    };
    "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
        aminoType: string;
        toAmino: ({ authority, msgTypeUrls, }: MsgResetCircuitBreaker) => MsgResetCircuitBreakerAminoType["value"];
        fromAmino: ({ authority, msg_type_urls, }: MsgResetCircuitBreakerAminoType["value"]) => MsgResetCircuitBreaker;
    };
};
