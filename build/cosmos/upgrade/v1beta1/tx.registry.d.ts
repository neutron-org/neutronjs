import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        softwareUpgrade(value: MsgSoftwareUpgrade): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        cancelUpgrade(value: MsgCancelUpgrade): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        softwareUpgrade(value: MsgSoftwareUpgrade): {
            typeUrl: string;
            value: MsgSoftwareUpgrade;
        };
        cancelUpgrade(value: MsgCancelUpgrade): {
            typeUrl: string;
            value: MsgCancelUpgrade;
        };
    };
    toJSON: {
        softwareUpgrade(value: MsgSoftwareUpgrade): {
            typeUrl: string;
            value: {
                authority: string;
                plan: {
                    name: string;
                    time: {
                        seconds: string;
                        nanos: number;
                    };
                    height: string;
                    info: string;
                    upgradedClientState?: {
                        typeUrl: string;
                        value: string;
                    };
                };
            };
        };
        cancelUpgrade(value: MsgCancelUpgrade): {
            typeUrl: string;
            value: {
                authority: string;
            };
        };
    };
    fromJSON: {
        softwareUpgrade(value: any): {
            typeUrl: string;
            value: MsgSoftwareUpgrade;
        };
        cancelUpgrade(value: any): {
            typeUrl: string;
            value: MsgCancelUpgrade;
        };
    };
    fromPartial: {
        softwareUpgrade(value: MsgSoftwareUpgrade): {
            typeUrl: string;
            value: MsgSoftwareUpgrade;
        };
        cancelUpgrade(value: MsgCancelUpgrade): {
            typeUrl: string;
            value: MsgCancelUpgrade;
        };
    };
};
