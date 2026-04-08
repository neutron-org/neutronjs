import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgManageHookSubscription } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        manageHookSubscription(value: MsgManageHookSubscription): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        manageHookSubscription(value: MsgManageHookSubscription): {
            typeUrl: string;
            value: MsgManageHookSubscription;
        };
    };
    toJSON: {
        manageHookSubscription(value: MsgManageHookSubscription): {
            typeUrl: string;
            value: {
                authority: string;
                hookSubscription?: {
                    contractAddress: string;
                    hooks: import("./hooks.js").HookType[];
                };
            };
        };
    };
    fromJSON: {
        manageHookSubscription(value: any): {
            typeUrl: string;
            value: MsgManageHookSubscription;
        };
    };
    fromPartial: {
        manageHookSubscription(value: MsgManageHookSubscription): {
            typeUrl: string;
            value: MsgManageHookSubscription;
        };
    };
};
