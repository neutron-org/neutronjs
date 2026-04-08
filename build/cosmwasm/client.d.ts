import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as cosmwasmWasmV1TxAmino from "./wasm/v1/tx.amino.js";
export declare const cosmwasmAminoConverters: {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, wasmByteCode, instantiatePermission, }: import("./wasm/v1/tx.js").MsgStoreCode) => cosmwasmWasmV1TxAmino.MsgStoreCodeAminoType["value"];
        fromAmino: ({ sender, wasm_byte_code, instantiate_permission, }: cosmwasmWasmV1TxAmino.MsgStoreCodeAminoType["value"]) => import("./wasm/v1/tx.js").MsgStoreCode;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, admin, codeId, label, msg, funds, }: import("./wasm/v1/tx.js").MsgInstantiateContract) => cosmwasmWasmV1TxAmino.MsgInstantiateContractAminoType["value"];
        fromAmino: ({ sender, admin, code_id, label, msg, funds, }: cosmwasmWasmV1TxAmino.MsgInstantiateContractAminoType["value"]) => import("./wasm/v1/tx.js").MsgInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
        aminoType: string;
        toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg, }: import("./wasm/v1/tx.js").MsgInstantiateContract2) => cosmwasmWasmV1TxAmino.MsgInstantiateContract2AminoType["value"];
        fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg, }: cosmwasmWasmV1TxAmino.MsgInstantiateContract2AminoType["value"]) => import("./wasm/v1/tx.js").MsgInstantiateContract2;
    };
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, funds }: import("./wasm/v1/tx.js").MsgExecuteContract) => cosmwasmWasmV1TxAmino.MsgExecuteContractAminoType["value"];
        fromAmino: ({ sender, contract, msg, funds, }: cosmwasmWasmV1TxAmino.MsgExecuteContractAminoType["value"]) => import("./wasm/v1/tx.js").MsgExecuteContract;
    };
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: ({ sender, contract, codeId, msg, }: import("./wasm/v1/tx.js").MsgMigrateContract) => cosmwasmWasmV1TxAmino.MsgMigrateContractAminoType["value"];
        fromAmino: ({ sender, contract, code_id, msg, }: cosmwasmWasmV1TxAmino.MsgMigrateContractAminoType["value"]) => import("./wasm/v1/tx.js").MsgMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
        aminoType: string;
        toAmino: ({ sender, newAdmin, contract }: import("./wasm/v1/tx.js").MsgUpdateAdmin) => cosmwasmWasmV1TxAmino.MsgUpdateAdminAminoType["value"];
        fromAmino: ({ sender, new_admin, contract }: cosmwasmWasmV1TxAmino.MsgUpdateAdminAminoType["value"]) => import("./wasm/v1/tx.js").MsgUpdateAdmin;
    };
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
        aminoType: string;
        toAmino: ({ sender, contract }: import("./wasm/v1/tx.js").MsgClearAdmin) => cosmwasmWasmV1TxAmino.MsgClearAdminAminoType["value"];
        fromAmino: ({ sender, contract }: cosmwasmWasmV1TxAmino.MsgClearAdminAminoType["value"]) => import("./wasm/v1/tx.js").MsgClearAdmin;
    };
    "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
        aminoType: string;
        toAmino: ({ sender, codeId, newInstantiatePermission, }: import("./wasm/v1/tx.js").MsgUpdateInstantiateConfig) => cosmwasmWasmV1TxAmino.MsgUpdateInstantiateConfigAminoType["value"];
        fromAmino: ({ sender, code_id, new_instantiate_permission, }: cosmwasmWasmV1TxAmino.MsgUpdateInstantiateConfigAminoType["value"]) => import("./wasm/v1/tx.js").MsgUpdateInstantiateConfig;
    };
    "/cosmwasm.wasm.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: ({ authority, params }: import("./wasm/v1/tx.js").MsgUpdateParams) => cosmwasmWasmV1TxAmino.MsgUpdateParamsAminoType["value"];
        fromAmino: ({ authority, params }: cosmwasmWasmV1TxAmino.MsgUpdateParamsAminoType["value"]) => import("./wasm/v1/tx.js").MsgUpdateParams;
    };
    "/cosmwasm.wasm.v1.MsgSudoContract": {
        aminoType: string;
        toAmino: ({ authority, contract, msg }: import("./wasm/v1/tx.js").MsgSudoContract) => cosmwasmWasmV1TxAmino.MsgSudoContractAminoType["value"];
        fromAmino: ({ authority, contract, msg }: cosmwasmWasmV1TxAmino.MsgSudoContractAminoType["value"]) => import("./wasm/v1/tx.js").MsgSudoContract;
    };
    "/cosmwasm.wasm.v1.MsgPinCodes": {
        aminoType: string;
        toAmino: ({ authority, codeIds }: import("./wasm/v1/tx.js").MsgPinCodes) => cosmwasmWasmV1TxAmino.MsgPinCodesAminoType["value"];
        fromAmino: ({ authority, code_ids }: cosmwasmWasmV1TxAmino.MsgPinCodesAminoType["value"]) => import("./wasm/v1/tx.js").MsgPinCodes;
    };
    "/cosmwasm.wasm.v1.MsgUnpinCodes": {
        aminoType: string;
        toAmino: ({ authority, codeIds }: import("./wasm/v1/tx.js").MsgUnpinCodes) => cosmwasmWasmV1TxAmino.MsgUnpinCodesAminoType["value"];
        fromAmino: ({ authority, code_ids }: cosmwasmWasmV1TxAmino.MsgUnpinCodesAminoType["value"]) => import("./wasm/v1/tx.js").MsgUnpinCodes;
    };
    "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
        aminoType: string;
        toAmino: ({ authority, wasmByteCode, instantiatePermission, unpinCode, admin, label, msg, funds, source, builder, codeHash, }: import("./wasm/v1/tx.js").MsgStoreAndInstantiateContract) => cosmwasmWasmV1TxAmino.MsgStoreAndInstantiateContractAminoType["value"];
        fromAmino: ({ authority, wasm_byte_code, instantiate_permission, unpin_code, admin, label, msg, funds, source, builder, code_hash, }: cosmwasmWasmV1TxAmino.MsgStoreAndInstantiateContractAminoType["value"]) => import("./wasm/v1/tx.js").MsgStoreAndInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
        aminoType: string;
        toAmino: ({ authority, addresses, }: import("./wasm/v1/tx.js").MsgRemoveCodeUploadParamsAddresses) => cosmwasmWasmV1TxAmino.MsgRemoveCodeUploadParamsAddressesAminoType["value"];
        fromAmino: ({ authority, addresses, }: cosmwasmWasmV1TxAmino.MsgRemoveCodeUploadParamsAddressesAminoType["value"]) => import("./wasm/v1/tx.js").MsgRemoveCodeUploadParamsAddresses;
    };
    "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
        aminoType: string;
        toAmino: ({ authority, addresses, }: import("./wasm/v1/tx.js").MsgAddCodeUploadParamsAddresses) => cosmwasmWasmV1TxAmino.MsgAddCodeUploadParamsAddressesAminoType["value"];
        fromAmino: ({ authority, addresses, }: cosmwasmWasmV1TxAmino.MsgAddCodeUploadParamsAddressesAminoType["value"]) => import("./wasm/v1/tx.js").MsgAddCodeUploadParamsAddresses;
    };
    "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
        aminoType: string;
        toAmino: ({ authority, wasmByteCode, instantiatePermission, contract, msg, }: import("./wasm/v1/tx.js").MsgStoreAndMigrateContract) => cosmwasmWasmV1TxAmino.MsgStoreAndMigrateContractAminoType["value"];
        fromAmino: ({ authority, wasm_byte_code, instantiate_permission, contract, msg, }: cosmwasmWasmV1TxAmino.MsgStoreAndMigrateContractAminoType["value"]) => import("./wasm/v1/tx.js").MsgStoreAndMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
        aminoType: string;
        toAmino: ({ sender, newLabel, contract, }: import("./wasm/v1/tx.js").MsgUpdateContractLabel) => cosmwasmWasmV1TxAmino.MsgUpdateContractLabelAminoType["value"];
        fromAmino: ({ sender, new_label, contract, }: cosmwasmWasmV1TxAmino.MsgUpdateContractLabelAminoType["value"]) => import("./wasm/v1/tx.js").MsgUpdateContractLabel;
    };
};
export declare const cosmwasmProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCosmwasmClientOptions: ({ defaultTypes, }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCosmwasmClient: ({ rpcEndpoint, signer, defaultTypes, }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
