import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIncreaseCounter } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        increaseCount(value: MsgIncreaseCounter): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        increaseCount(value: MsgIncreaseCounter): {
            typeUrl: string;
            value: MsgIncreaseCounter;
        };
    };
    toJSON: {
        increaseCount(value: MsgIncreaseCounter): {
            typeUrl: string;
            value: {
                signer: string;
                count: string;
            };
        };
    };
    fromJSON: {
        increaseCount(value: any): {
            typeUrl: string;
            value: MsgIncreaseCounter;
        };
    };
    fromPartial: {
        increaseCount(value: MsgIncreaseCounter): {
            typeUrl: string;
            value: MsgIncreaseCounter;
        };
    };
};
