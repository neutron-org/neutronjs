import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddSchedule, MsgRemoveSchedule, MsgUpdateParams } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addSchedule(value: MsgAddSchedule): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        removeSchedule(value: MsgRemoveSchedule): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        addSchedule(value: MsgAddSchedule): {
            typeUrl: string;
            value: MsgAddSchedule;
        };
        removeSchedule(value: MsgRemoveSchedule): {
            typeUrl: string;
            value: MsgRemoveSchedule;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        addSchedule(value: MsgAddSchedule): {
            typeUrl: string;
            value: {
                authority: string;
                name: string;
                period: string;
                msgs: {
                    contract: string;
                    msg: string;
                }[];
                executionStage: import("./schedule.js").ExecutionStage;
            };
        };
        removeSchedule(value: MsgRemoveSchedule): {
            typeUrl: string;
            value: {
                authority: string;
                name: string;
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    securityAddress: string;
                    limit: string;
                };
            };
        };
    };
    fromJSON: {
        addSchedule(value: any): {
            typeUrl: string;
            value: MsgAddSchedule;
        };
        removeSchedule(value: any): {
            typeUrl: string;
            value: MsgRemoveSchedule;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        addSchedule(value: MsgAddSchedule): {
            typeUrl: string;
            value: MsgAddSchedule;
        };
        removeSchedule(value: MsgRemoveSchedule): {
            typeUrl: string;
            value: MsgRemoveSchedule;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};
