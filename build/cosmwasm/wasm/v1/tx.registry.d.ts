import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract, MsgRemoveCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddresses, MsgStoreAndMigrateContract, MsgUpdateContractLabel } from "./tx.js";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        sudoContract(value: MsgSudoContract): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        pinCodes(value: MsgPinCodes): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        unpinCodes(value: MsgUnpinCodes): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        storeAndInstantiateContract(value: MsgStoreAndInstantiateContract): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        removeCodeUploadParamsAddresses(value: MsgRemoveCodeUploadParamsAddresses): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        addCodeUploadParamsAddresses(value: MsgAddCodeUploadParamsAddresses): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        storeAndMigrateContract(value: MsgStoreAndMigrateContract): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateContractLabel(value: MsgUpdateContractLabel): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
            typeUrl: string;
            value: MsgUpdateInstantiateConfig;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        sudoContract(value: MsgSudoContract): {
            typeUrl: string;
            value: MsgSudoContract;
        };
        pinCodes(value: MsgPinCodes): {
            typeUrl: string;
            value: MsgPinCodes;
        };
        unpinCodes(value: MsgUnpinCodes): {
            typeUrl: string;
            value: MsgUnpinCodes;
        };
        storeAndInstantiateContract(value: MsgStoreAndInstantiateContract): {
            typeUrl: string;
            value: MsgStoreAndInstantiateContract;
        };
        removeCodeUploadParamsAddresses(value: MsgRemoveCodeUploadParamsAddresses): {
            typeUrl: string;
            value: MsgRemoveCodeUploadParamsAddresses;
        };
        addCodeUploadParamsAddresses(value: MsgAddCodeUploadParamsAddresses): {
            typeUrl: string;
            value: MsgAddCodeUploadParamsAddresses;
        };
        storeAndMigrateContract(value: MsgStoreAndMigrateContract): {
            typeUrl: string;
            value: MsgStoreAndMigrateContract;
        };
        updateContractLabel(value: MsgUpdateContractLabel): {
            typeUrl: string;
            value: MsgUpdateContractLabel;
        };
    };
    toJSON: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: {
                sender: string;
                wasmByteCode: string;
                instantiatePermission?: {
                    permission: import("./types.js").AccessType;
                    addresses: string[];
                };
            };
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: {
                sender: string;
                admin: string;
                codeId: string;
                label: string;
                msg: string;
                funds: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: {
                sender: string;
                admin: string;
                codeId: string;
                label: string;
                msg: string;
                funds: {
                    denom: string;
                    amount: string;
                }[];
                salt: string;
                fixMsg: boolean;
            };
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: {
                sender: string;
                contract: string;
                msg: string;
                funds: {
                    denom: string;
                    amount: string;
                }[];
            };
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: {
                sender: string;
                contract: string;
                codeId: string;
                msg: string;
            };
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: {
                sender: string;
                newAdmin: string;
                contract: string;
            };
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: {
                sender: string;
                contract: string;
            };
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
            typeUrl: string;
            value: {
                sender: string;
                codeId: string;
                newInstantiatePermission?: {
                    permission: import("./types.js").AccessType;
                    addresses: string[];
                };
            };
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: {
                authority: string;
                params: {
                    codeUploadAccess: {
                        permission: import("./types.js").AccessType;
                        addresses: string[];
                    };
                    instantiateDefaultPermission: import("./types.js").AccessType;
                };
            };
        };
        sudoContract(value: MsgSudoContract): {
            typeUrl: string;
            value: {
                authority: string;
                contract: string;
                msg: string;
            };
        };
        pinCodes(value: MsgPinCodes): {
            typeUrl: string;
            value: {
                authority: string;
                codeIds: string[];
            };
        };
        unpinCodes(value: MsgUnpinCodes): {
            typeUrl: string;
            value: {
                authority: string;
                codeIds: string[];
            };
        };
        storeAndInstantiateContract(value: MsgStoreAndInstantiateContract): {
            typeUrl: string;
            value: {
                authority: string;
                wasmByteCode: string;
                instantiatePermission?: {
                    permission: import("./types.js").AccessType;
                    addresses: string[];
                };
                unpinCode: boolean;
                admin: string;
                label: string;
                msg: string;
                funds: {
                    denom: string;
                    amount: string;
                }[];
                source: string;
                builder: string;
                codeHash: string;
            };
        };
        removeCodeUploadParamsAddresses(value: MsgRemoveCodeUploadParamsAddresses): {
            typeUrl: string;
            value: {
                authority: string;
                addresses: string[];
            };
        };
        addCodeUploadParamsAddresses(value: MsgAddCodeUploadParamsAddresses): {
            typeUrl: string;
            value: {
                authority: string;
                addresses: string[];
            };
        };
        storeAndMigrateContract(value: MsgStoreAndMigrateContract): {
            typeUrl: string;
            value: {
                authority: string;
                wasmByteCode: string;
                instantiatePermission?: {
                    permission: import("./types.js").AccessType;
                    addresses: string[];
                };
                contract: string;
                msg: string;
            };
        };
        updateContractLabel(value: MsgUpdateContractLabel): {
            typeUrl: string;
            value: {
                sender: string;
                newLabel: string;
                contract: string;
            };
        };
    };
    fromJSON: {
        storeCode(value: any): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: any): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        instantiateContract2(value: any): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: any): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: any): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: any): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
        updateInstantiateConfig(value: any): {
            typeUrl: string;
            value: MsgUpdateInstantiateConfig;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        sudoContract(value: any): {
            typeUrl: string;
            value: MsgSudoContract;
        };
        pinCodes(value: any): {
            typeUrl: string;
            value: MsgPinCodes;
        };
        unpinCodes(value: any): {
            typeUrl: string;
            value: MsgUnpinCodes;
        };
        storeAndInstantiateContract(value: any): {
            typeUrl: string;
            value: MsgStoreAndInstantiateContract;
        };
        removeCodeUploadParamsAddresses(value: any): {
            typeUrl: string;
            value: MsgRemoveCodeUploadParamsAddresses;
        };
        addCodeUploadParamsAddresses(value: any): {
            typeUrl: string;
            value: MsgAddCodeUploadParamsAddresses;
        };
        storeAndMigrateContract(value: any): {
            typeUrl: string;
            value: MsgStoreAndMigrateContract;
        };
        updateContractLabel(value: any): {
            typeUrl: string;
            value: MsgUpdateContractLabel;
        };
    };
    fromPartial: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
            typeUrl: string;
            value: MsgUpdateInstantiateConfig;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        sudoContract(value: MsgSudoContract): {
            typeUrl: string;
            value: MsgSudoContract;
        };
        pinCodes(value: MsgPinCodes): {
            typeUrl: string;
            value: MsgPinCodes;
        };
        unpinCodes(value: MsgUnpinCodes): {
            typeUrl: string;
            value: MsgUnpinCodes;
        };
        storeAndInstantiateContract(value: MsgStoreAndInstantiateContract): {
            typeUrl: string;
            value: MsgStoreAndInstantiateContract;
        };
        removeCodeUploadParamsAddresses(value: MsgRemoveCodeUploadParamsAddresses): {
            typeUrl: string;
            value: MsgRemoveCodeUploadParamsAddresses;
        };
        addCodeUploadParamsAddresses(value: MsgAddCodeUploadParamsAddresses): {
            typeUrl: string;
            value: MsgAddCodeUploadParamsAddresses;
        };
        storeAndMigrateContract(value: MsgStoreAndMigrateContract): {
            typeUrl: string;
            value: MsgStoreAndMigrateContract;
        };
        updateContractLabel(value: MsgUpdateContractLabel): {
            typeUrl: string;
            value: MsgUpdateContractLabel;
        };
    };
};
