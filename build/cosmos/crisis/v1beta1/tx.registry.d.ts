import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgVerifyInvariant, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        verifyInvariant(value: MsgVerifyInvariant): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        verifyInvariant(value: MsgVerifyInvariant): {
            typeUrl: string;
            value: MsgVerifyInvariant;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        verifyInvariant(value: MsgVerifyInvariant): {
            typeUrl: string;
            value: {
                sender: string;
                invariantModuleName: string;
                invariantRoute: string;
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                constantFee: {
                    denom: string;
                    amount: string;
                };
            };
        };
    };
    fromJSON: {
        verifyInvariant(value: any): {
            typeUrl: string;
            value: MsgVerifyInvariant;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        verifyInvariant(value: MsgVerifyInvariant): {
            typeUrl: string;
            value: MsgVerifyInvariant;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
