import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        params(value: MsgParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        params(value: MsgParams): {
            typeUrl: string;
            value: MsgParams;
        };
    };
    toJSON: {
        params(value: MsgParams): {
            typeUrl: string;
            value: {
                params: {
                    alpha: string;
                    beta: string;
                    gamma: string;
                    delta: string;
                    minBaseGasPrice: string;
                    minLearningRate: string;
                    maxLearningRate: string;
                    maxBlockUtilization: string;
                    window: string;
                    feeDenom: string;
                    enabled: boolean;
                    distributeFees: boolean;
                    sendTipToProposer: boolean;
                };
                authority: string;
            };
        };
    };
    fromJSON: {
        params(value: any): {
            typeUrl: string;
            value: MsgParams;
        };
    };
    fromPartial: {
        params(value: MsgParams): {
            typeUrl: string;
            value: MsgParams;
        };
    };
};
