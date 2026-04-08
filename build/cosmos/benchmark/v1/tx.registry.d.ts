import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgLoadTest } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        loadTest(value: MsgLoadTest): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        loadTest(value: MsgLoadTest): {
            typeUrl: string;
            value: MsgLoadTest;
        };
    };
    toJSON: {
        loadTest(value: MsgLoadTest): {
            typeUrl: string;
            value: {
                caller: string;
                ops: {
                    seed: string;
                    actor: string;
                    keyLength: string;
                    valueLength: string;
                    iterations: number;
                    delete: boolean;
                    exists: boolean;
                }[];
            };
        };
    };
    fromJSON: {
        loadTest(value: any): {
            typeUrl: string;
            value: MsgLoadTest;
        };
    };
    fromPartial: {
        loadTest(value: MsgLoadTest): {
            typeUrl: string;
            value: MsgLoadTest;
        };
    };
};
