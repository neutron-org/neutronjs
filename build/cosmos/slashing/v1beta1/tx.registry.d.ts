import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUnjail, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        unjail(value: MsgUnjail): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        unjail(value: MsgUnjail): {
            typeUrl: string;
            value: MsgUnjail;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        unjail(value: MsgUnjail): {
            typeUrl: string;
            value: {
                validatorAddr: string;
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    signedBlocksWindow: string;
                    minSignedPerWindow: string;
                    downtimeJailDuration: {
                        seconds: string;
                        nanos: number;
                    };
                    slashFractionDoubleSign: string;
                    slashFractionDowntime: string;
                };
            };
        };
    };
    fromJSON: {
        unjail(value: any): {
            typeUrl: string;
            value: MsgUnjail;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        unjail(value: MsgUnjail): {
            typeUrl: string;
            value: MsgUnjail;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
