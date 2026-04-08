import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgResubmitFailure } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        resubmitFailure(value: MsgResubmitFailure): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        resubmitFailure(value: MsgResubmitFailure): {
            typeUrl: string;
            value: MsgResubmitFailure;
        };
    };
    toJSON: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    sudoCallGasLimit: string;
                };
            };
        };
        resubmitFailure(value: MsgResubmitFailure): {
            typeUrl: string;
            value: {
                sender: string;
                failureId: string;
            };
        };
    };
    fromJSON: {
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        resubmitFailure(value: any): {
            typeUrl: string;
            value: MsgResubmitFailure;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        resubmitFailure(value: MsgResubmitFailure): {
            typeUrl: string;
            value: MsgResubmitFailure;
        };
    };
};
