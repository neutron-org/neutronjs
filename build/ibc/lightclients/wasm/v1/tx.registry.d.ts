import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        removeChecksum(value: MsgRemoveChecksum): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        removeChecksum(value: MsgRemoveChecksum): {
            typeUrl: string;
            value: MsgRemoveChecksum;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
    };
    toJSON: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: {
                signer: string;
                wasmByteCode: string;
            };
        };
        removeChecksum(value: MsgRemoveChecksum): {
            typeUrl: string;
            value: {
                signer: string;
                checksum: string;
            };
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: {
                signer: string;
                clientId: string;
                checksum: string;
                msg: string;
            };
        };
    };
    fromJSON: {
        storeCode(value: any): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        removeChecksum(value: any): {
            typeUrl: string;
            value: MsgRemoveChecksum;
        };
        migrateContract(value: any): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
    };
    fromPartial: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        removeChecksum(value: MsgRemoveChecksum): {
            typeUrl: string;
            value: MsgRemoveChecksum;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
    };
};
