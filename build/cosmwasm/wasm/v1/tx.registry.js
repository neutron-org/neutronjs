"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_js_1 = require("./tx.js");
exports.registry = [
    ["/cosmwasm.wasm.v1.MsgStoreCode", tx_js_1.MsgStoreCode],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract", tx_js_1.MsgInstantiateContract],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract2", tx_js_1.MsgInstantiateContract2],
    ["/cosmwasm.wasm.v1.MsgExecuteContract", tx_js_1.MsgExecuteContract],
    ["/cosmwasm.wasm.v1.MsgMigrateContract", tx_js_1.MsgMigrateContract],
    ["/cosmwasm.wasm.v1.MsgUpdateAdmin", tx_js_1.MsgUpdateAdmin],
    ["/cosmwasm.wasm.v1.MsgClearAdmin", tx_js_1.MsgClearAdmin],
    ["/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig", tx_js_1.MsgUpdateInstantiateConfig],
    ["/cosmwasm.wasm.v1.MsgUpdateParams", tx_js_1.MsgUpdateParams],
    ["/cosmwasm.wasm.v1.MsgSudoContract", tx_js_1.MsgSudoContract],
    ["/cosmwasm.wasm.v1.MsgPinCodes", tx_js_1.MsgPinCodes],
    ["/cosmwasm.wasm.v1.MsgUnpinCodes", tx_js_1.MsgUnpinCodes],
    ["/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract", tx_js_1.MsgStoreAndInstantiateContract],
    ["/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses", tx_js_1.MsgRemoveCodeUploadParamsAddresses],
    ["/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses", tx_js_1.MsgAddCodeUploadParamsAddresses],
    ["/cosmwasm.wasm.v1.MsgStoreAndMigrateContract", tx_js_1.MsgStoreAndMigrateContract],
    ["/cosmwasm.wasm.v1.MsgUpdateContractLabel", tx_js_1.MsgUpdateContractLabel],
];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: tx_js_1.MsgStoreCode.encode(value).finish(),
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: tx_js_1.MsgInstantiateContract.encode(value).finish(),
            };
        },
        instantiateContract2(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
                value: tx_js_1.MsgInstantiateContract2.encode(value).finish(),
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_js_1.MsgExecuteContract.encode(value).finish(),
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: tx_js_1.MsgMigrateContract.encode(value).finish(),
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: tx_js_1.MsgUpdateAdmin.encode(value).finish(),
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: tx_js_1.MsgClearAdmin.encode(value).finish(),
            };
        },
        updateInstantiateConfig(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
                value: tx_js_1.MsgUpdateInstantiateConfig.encode(value).finish(),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.encode(value).finish(),
            };
        },
        sudoContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
                value: tx_js_1.MsgSudoContract.encode(value).finish(),
            };
        },
        pinCodes(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
                value: tx_js_1.MsgPinCodes.encode(value).finish(),
            };
        },
        unpinCodes(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
                value: tx_js_1.MsgUnpinCodes.encode(value).finish(),
            };
        },
        storeAndInstantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
                value: tx_js_1.MsgStoreAndInstantiateContract.encode(value).finish(),
            };
        },
        removeCodeUploadParamsAddresses(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
                value: tx_js_1.MsgRemoveCodeUploadParamsAddresses.encode(value).finish(),
            };
        },
        addCodeUploadParamsAddresses(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
                value: tx_js_1.MsgAddCodeUploadParamsAddresses.encode(value).finish(),
            };
        },
        storeAndMigrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
                value: tx_js_1.MsgStoreAndMigrateContract.encode(value).finish(),
            };
        },
        updateContractLabel(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
                value: tx_js_1.MsgUpdateContractLabel.encode(value).finish(),
            };
        },
    },
    withTypeUrl: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value,
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value,
            };
        },
        instantiateContract2(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
                value,
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value,
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value,
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value,
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value,
            };
        },
        updateInstantiateConfig(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
                value,
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
                value,
            };
        },
        sudoContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
                value,
            };
        },
        pinCodes(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
                value,
            };
        },
        unpinCodes(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
                value,
            };
        },
        storeAndInstantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
                value,
            };
        },
        removeCodeUploadParamsAddresses(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
                value,
            };
        },
        addCodeUploadParamsAddresses(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
                value,
            };
        },
        storeAndMigrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
                value,
            };
        },
        updateContractLabel(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
                value,
            };
        },
    },
    toJSON: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: tx_js_1.MsgStoreCode.toJSON(value),
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: tx_js_1.MsgInstantiateContract.toJSON(value),
            };
        },
        instantiateContract2(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
                value: tx_js_1.MsgInstantiateContract2.toJSON(value),
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_js_1.MsgExecuteContract.toJSON(value),
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: tx_js_1.MsgMigrateContract.toJSON(value),
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: tx_js_1.MsgUpdateAdmin.toJSON(value),
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: tx_js_1.MsgClearAdmin.toJSON(value),
            };
        },
        updateInstantiateConfig(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
                value: tx_js_1.MsgUpdateInstantiateConfig.toJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.toJSON(value),
            };
        },
        sudoContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
                value: tx_js_1.MsgSudoContract.toJSON(value),
            };
        },
        pinCodes(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
                value: tx_js_1.MsgPinCodes.toJSON(value),
            };
        },
        unpinCodes(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
                value: tx_js_1.MsgUnpinCodes.toJSON(value),
            };
        },
        storeAndInstantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
                value: tx_js_1.MsgStoreAndInstantiateContract.toJSON(value),
            };
        },
        removeCodeUploadParamsAddresses(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
                value: tx_js_1.MsgRemoveCodeUploadParamsAddresses.toJSON(value),
            };
        },
        addCodeUploadParamsAddresses(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
                value: tx_js_1.MsgAddCodeUploadParamsAddresses.toJSON(value),
            };
        },
        storeAndMigrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
                value: tx_js_1.MsgStoreAndMigrateContract.toJSON(value),
            };
        },
        updateContractLabel(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
                value: tx_js_1.MsgUpdateContractLabel.toJSON(value),
            };
        },
    },
    fromJSON: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: tx_js_1.MsgStoreCode.fromJSON(value),
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: tx_js_1.MsgInstantiateContract.fromJSON(value),
            };
        },
        instantiateContract2(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
                value: tx_js_1.MsgInstantiateContract2.fromJSON(value),
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_js_1.MsgExecuteContract.fromJSON(value),
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: tx_js_1.MsgMigrateContract.fromJSON(value),
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: tx_js_1.MsgUpdateAdmin.fromJSON(value),
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: tx_js_1.MsgClearAdmin.fromJSON(value),
            };
        },
        updateInstantiateConfig(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
                value: tx_js_1.MsgUpdateInstantiateConfig.fromJSON(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromJSON(value),
            };
        },
        sudoContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
                value: tx_js_1.MsgSudoContract.fromJSON(value),
            };
        },
        pinCodes(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
                value: tx_js_1.MsgPinCodes.fromJSON(value),
            };
        },
        unpinCodes(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
                value: tx_js_1.MsgUnpinCodes.fromJSON(value),
            };
        },
        storeAndInstantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
                value: tx_js_1.MsgStoreAndInstantiateContract.fromJSON(value),
            };
        },
        removeCodeUploadParamsAddresses(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
                value: tx_js_1.MsgRemoveCodeUploadParamsAddresses.fromJSON(value),
            };
        },
        addCodeUploadParamsAddresses(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
                value: tx_js_1.MsgAddCodeUploadParamsAddresses.fromJSON(value),
            };
        },
        storeAndMigrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
                value: tx_js_1.MsgStoreAndMigrateContract.fromJSON(value),
            };
        },
        updateContractLabel(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
                value: tx_js_1.MsgUpdateContractLabel.fromJSON(value),
            };
        },
    },
    fromPartial: {
        storeCode(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
                value: tx_js_1.MsgStoreCode.fromPartial(value),
            };
        },
        instantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
                value: tx_js_1.MsgInstantiateContract.fromPartial(value),
            };
        },
        instantiateContract2(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2",
                value: tx_js_1.MsgInstantiateContract2.fromPartial(value),
            };
        },
        executeContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                value: tx_js_1.MsgExecuteContract.fromPartial(value),
            };
        },
        migrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
                value: tx_js_1.MsgMigrateContract.fromPartial(value),
            };
        },
        updateAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
                value: tx_js_1.MsgUpdateAdmin.fromPartial(value),
            };
        },
        clearAdmin(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
                value: tx_js_1.MsgClearAdmin.fromPartial(value),
            };
        },
        updateInstantiateConfig(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig",
                value: tx_js_1.MsgUpdateInstantiateConfig.fromPartial(value),
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams",
                value: tx_js_1.MsgUpdateParams.fromPartial(value),
            };
        },
        sudoContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract",
                value: tx_js_1.MsgSudoContract.fromPartial(value),
            };
        },
        pinCodes(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes",
                value: tx_js_1.MsgPinCodes.fromPartial(value),
            };
        },
        unpinCodes(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes",
                value: tx_js_1.MsgUnpinCodes.fromPartial(value),
            };
        },
        storeAndInstantiateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract",
                value: tx_js_1.MsgStoreAndInstantiateContract.fromPartial(value),
            };
        },
        removeCodeUploadParamsAddresses(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses",
                value: tx_js_1.MsgRemoveCodeUploadParamsAddresses.fromPartial(value),
            };
        },
        addCodeUploadParamsAddresses(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses",
                value: tx_js_1.MsgAddCodeUploadParamsAddresses.fromPartial(value),
            };
        },
        storeAndMigrateContract(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract",
                value: tx_js_1.MsgStoreAndMigrateContract.fromPartial(value),
            };
        },
        updateContractLabel(value) {
            return {
                typeUrl: "/cosmwasm.wasm.v1.MsgUpdateContractLabel",
                value: tx_js_1.MsgUpdateContractLabel.fromPartial(value),
            };
        },
    },
};
//# sourceMappingURL=tx.registry.js.map