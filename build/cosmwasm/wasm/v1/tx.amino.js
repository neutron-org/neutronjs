"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
//@ts-nocheck
/* eslint-disable */
const types_js_1 = require("./types.js");
const encoding_1 = require("@cosmjs/encoding");
const helpers_js_1 = require("../../../helpers.js");
exports.AminoConverter = {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
        aminoType: "wasm/MsgStoreCode",
        toAmino: ({ sender, wasmByteCode, instantiatePermission, }) => {
            return {
                sender,
                wasm_byte_code: (0, encoding_1.toBase64)(wasmByteCode),
                instantiate_permission: {
                    permission: instantiatePermission.permission,
                    addresses: instantiatePermission.addresses,
                },
            };
        },
        fromAmino: ({ sender, wasm_byte_code, instantiate_permission, }) => {
            return {
                sender,
                wasmByteCode: wasm_byte_code == null ? wasm_byte_code : (0, encoding_1.fromBase64)(wasm_byte_code),
                instantiatePermission: instantiate_permission == null
                    ? instantiate_permission
                    : {
                        permission: instantiate_permission.permission == null
                            ? instantiate_permission.permission
                            : (0, types_js_1.accessTypeFromJSON)(instantiate_permission.permission),
                        addresses: instantiate_permission.addresses,
                    },
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
        aminoType: "wasm/MsgInstantiateContract",
        toAmino: ({ sender, admin, codeId, label, msg, funds, }) => {
            return {
                sender,
                admin,
                code_id: (0, helpers_js_1.omitDefault)(codeId)?.toString?.(),
                label,
                msg: JSON.parse((0, encoding_1.fromUtf8)(msg)),
                funds: funds.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
        fromAmino: ({ sender, admin, code_id, label, msg, funds, }) => {
            return {
                sender,
                admin,
                codeId: code_id == null ? code_id : BigInt(code_id),
                label,
                msg: msg == null ? msg : (0, encoding_1.toUtf8)(JSON.stringify(msg)),
                funds: funds.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
        aminoType: "wasm/MsgInstantiateContract2",
        toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg, }) => {
            return {
                sender,
                admin,
                code_id: (0, helpers_js_1.omitDefault)(codeId)?.toString?.(),
                label,
                msg: JSON.parse((0, encoding_1.fromUtf8)(msg)),
                funds: funds.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                salt,
                fix_msg: (0, helpers_js_1.omitDefault)(fixMsg),
            };
        },
        fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg, }) => {
            return {
                sender,
                admin,
                codeId: code_id == null ? code_id : BigInt(code_id),
                label,
                msg: msg == null ? msg : (0, encoding_1.toUtf8)(JSON.stringify(msg)),
                funds: funds.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                salt,
                fixMsg: fix_msg,
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
        aminoType: "wasm/MsgExecuteContract",
        toAmino: ({ sender, contract, msg, funds }) => {
            return {
                sender,
                contract,
                msg: JSON.parse((0, encoding_1.fromUtf8)(msg)),
                funds: funds.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
        fromAmino: ({ sender, contract, msg, funds, }) => {
            return {
                sender,
                contract,
                msg: msg == null ? msg : (0, encoding_1.toUtf8)(JSON.stringify(msg)),
                funds: funds.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
        aminoType: "wasm/MsgMigrateContract",
        toAmino: ({ sender, contract, codeId, msg, }) => {
            return {
                sender,
                contract,
                code_id: (0, helpers_js_1.omitDefault)(codeId)?.toString?.(),
                msg: JSON.parse((0, encoding_1.fromUtf8)(msg)),
            };
        },
        fromAmino: ({ sender, contract, code_id, msg, }) => {
            return {
                sender,
                contract,
                codeId: code_id == null ? code_id : BigInt(code_id),
                msg: msg == null ? msg : (0, encoding_1.toUtf8)(JSON.stringify(msg)),
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
        aminoType: "wasm/MsgUpdateAdmin",
        toAmino: ({ sender, newAdmin, contract }) => {
            return {
                sender,
                new_admin: newAdmin,
                contract,
            };
        },
        fromAmino: ({ sender, new_admin, contract }) => {
            return {
                sender,
                newAdmin: new_admin,
                contract,
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
        aminoType: "wasm/MsgClearAdmin",
        toAmino: ({ sender, contract }) => {
            return {
                sender,
                contract,
            };
        },
        fromAmino: ({ sender, contract }) => {
            return {
                sender,
                contract,
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
        aminoType: "wasm/MsgUpdateInstantiateConfig",
        toAmino: ({ sender, codeId, newInstantiatePermission, }) => {
            return {
                sender,
                code_id: (0, helpers_js_1.omitDefault)(codeId)?.toString?.(),
                new_instantiate_permission: {
                    permission: newInstantiatePermission.permission,
                    addresses: newInstantiatePermission.addresses,
                },
            };
        },
        fromAmino: ({ sender, code_id, new_instantiate_permission, }) => {
            return {
                sender,
                codeId: code_id == null ? code_id : BigInt(code_id),
                newInstantiatePermission: new_instantiate_permission == null
                    ? new_instantiate_permission
                    : {
                        permission: new_instantiate_permission.permission == null
                            ? new_instantiate_permission.permission
                            : (0, types_js_1.accessTypeFromJSON)(new_instantiate_permission.permission),
                        addresses: new_instantiate_permission.addresses,
                    },
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgUpdateParams": {
        aminoType: "wasm/MsgUpdateParams",
        toAmino: ({ authority, params }) => {
            return {
                authority,
                params: {
                    code_upload_access: {
                        permission: params.codeUploadAccess.permission,
                        addresses: params.codeUploadAccess.addresses,
                    },
                    instantiate_default_permission: params.instantiateDefaultPermission,
                },
            };
        },
        fromAmino: ({ authority, params }) => {
            return {
                authority,
                params: params == null
                    ? params
                    : {
                        codeUploadAccess: params.code_upload_access == null
                            ? params.code_upload_access
                            : {
                                permission: params.code_upload_access.permission == null
                                    ? params.code_upload_access.permission
                                    : (0, types_js_1.accessTypeFromJSON)(params.code_upload_access.permission),
                                addresses: params.code_upload_access.addresses,
                            },
                        instantiateDefaultPermission: params.instantiate_default_permission == null
                            ? params.instantiate_default_permission
                            : (0, types_js_1.accessTypeFromJSON)(params.instantiate_default_permission),
                    },
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgSudoContract": {
        aminoType: "wasm/MsgSudoContract",
        toAmino: ({ authority, contract, msg }) => {
            return {
                authority,
                contract,
                msg: JSON.parse((0, encoding_1.fromUtf8)(msg)),
            };
        },
        fromAmino: ({ authority, contract, msg }) => {
            return {
                authority,
                contract,
                msg: msg == null ? msg : (0, encoding_1.toUtf8)(JSON.stringify(msg)),
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgPinCodes": {
        aminoType: "wasm/MsgPinCodes",
        toAmino: ({ authority, codeIds }) => {
            return {
                authority,
                code_ids: codeIds.map((el0) => el0.toString()),
            };
        },
        fromAmino: ({ authority, code_ids }) => {
            return {
                authority,
                codeIds: code_ids.map?.((el0) => BigInt(el0)),
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgUnpinCodes": {
        aminoType: "wasm/MsgUnpinCodes",
        toAmino: ({ authority, codeIds }) => {
            return {
                authority,
                code_ids: codeIds.map((el0) => el0.toString()),
            };
        },
        fromAmino: ({ authority, code_ids }) => {
            return {
                authority,
                codeIds: code_ids.map?.((el0) => BigInt(el0)),
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
        aminoType: "wasm/MsgStoreAndInstantiateContract",
        toAmino: ({ authority, wasmByteCode, instantiatePermission, unpinCode, admin, label, msg, funds, source, builder, codeHash, }) => {
            return {
                authority,
                wasm_byte_code: (0, encoding_1.toBase64)(wasmByteCode),
                instantiate_permission: {
                    permission: instantiatePermission.permission,
                    addresses: instantiatePermission.addresses,
                },
                unpin_code: (0, helpers_js_1.omitDefault)(unpinCode),
                admin,
                label,
                msg: JSON.parse((0, encoding_1.fromUtf8)(msg)),
                funds: funds.map((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                source,
                builder,
                code_hash: codeHash,
            };
        },
        fromAmino: ({ authority, wasm_byte_code, instantiate_permission, unpin_code, admin, label, msg, funds, source, builder, code_hash, }) => {
            return {
                authority,
                wasmByteCode: wasm_byte_code == null ? wasm_byte_code : (0, encoding_1.fromBase64)(wasm_byte_code),
                instantiatePermission: instantiate_permission == null
                    ? instantiate_permission
                    : {
                        permission: instantiate_permission.permission == null
                            ? instantiate_permission.permission
                            : (0, types_js_1.accessTypeFromJSON)(instantiate_permission.permission),
                        addresses: instantiate_permission.addresses,
                    },
                unpinCode: unpin_code,
                admin,
                label,
                msg: msg == null ? msg : (0, encoding_1.toUtf8)(JSON.stringify(msg)),
                funds: funds.map?.((el0) => ({
                    denom: el0.denom,
                    amount: el0.amount,
                })),
                source,
                builder,
                codeHash: code_hash,
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
        aminoType: "wasm/MsgRemoveCodeUploadParamsAddresses",
        toAmino: ({ authority, addresses, }) => {
            return {
                authority,
                addresses,
            };
        },
        fromAmino: ({ authority, addresses, }) => {
            return {
                authority,
                addresses,
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
        aminoType: "wasm/MsgAddCodeUploadParamsAddresses",
        toAmino: ({ authority, addresses, }) => {
            return {
                authority,
                addresses,
            };
        },
        fromAmino: ({ authority, addresses, }) => {
            return {
                authority,
                addresses,
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgStoreAndMigrateContract": {
        aminoType: "wasm/MsgStoreAndMigrateContract",
        toAmino: ({ authority, wasmByteCode, instantiatePermission, contract, msg, }) => {
            return {
                authority,
                wasm_byte_code: (0, encoding_1.toBase64)(wasmByteCode),
                instantiate_permission: {
                    permission: instantiatePermission.permission,
                    addresses: instantiatePermission.addresses,
                },
                contract,
                msg: JSON.parse((0, encoding_1.fromUtf8)(msg)),
            };
        },
        fromAmino: ({ authority, wasm_byte_code, instantiate_permission, contract, msg, }) => {
            return {
                authority,
                wasmByteCode: wasm_byte_code == null ? wasm_byte_code : (0, encoding_1.fromBase64)(wasm_byte_code),
                instantiatePermission: instantiate_permission == null
                    ? instantiate_permission
                    : {
                        permission: instantiate_permission.permission == null
                            ? instantiate_permission.permission
                            : (0, types_js_1.accessTypeFromJSON)(instantiate_permission.permission),
                        addresses: instantiate_permission.addresses,
                    },
                contract,
                msg: msg == null ? msg : (0, encoding_1.toUtf8)(JSON.stringify(msg)),
            };
        },
    },
    "/cosmwasm.wasm.v1.MsgUpdateContractLabel": {
        aminoType: "wasm/MsgUpdateContractLabel",
        toAmino: ({ sender, newLabel, contract, }) => {
            return {
                sender,
                new_label: newLabel,
                contract,
            };
        },
        fromAmino: ({ sender, new_label, contract, }) => {
            return {
                sender,
                newLabel: new_label,
                contract,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map