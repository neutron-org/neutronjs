"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
exports.AminoConverter = {
    "/ibc.lightclients.wasm.v1.MsgStoreCode": {
        aminoType: "cosmos-sdk/MsgStoreCode",
        toAmino: ({ signer, wasmByteCode }) => {
            return {
                signer,
                wasm_byte_code: wasmByteCode,
            };
        },
        fromAmino: ({ signer, wasm_byte_code }) => {
            return {
                signer,
                wasmByteCode: wasm_byte_code,
            };
        },
    },
    "/ibc.lightclients.wasm.v1.MsgRemoveChecksum": {
        aminoType: "cosmos-sdk/MsgRemoveChecksum",
        toAmino: ({ signer, checksum }) => {
            return {
                signer,
                checksum,
            };
        },
        fromAmino: ({ signer, checksum }) => {
            return {
                signer,
                checksum,
            };
        },
    },
    "/ibc.lightclients.wasm.v1.MsgMigrateContract": {
        aminoType: "cosmos-sdk/MsgMigrateContract",
        toAmino: ({ signer, clientId, checksum, msg, }) => {
            return {
                signer,
                client_id: clientId,
                checksum,
                msg,
            };
        },
        fromAmino: ({ signer, client_id, checksum, msg, }) => {
            return {
                signer,
                clientId: client_id,
                checksum,
                msg,
            };
        },
    },
};
//# sourceMappingURL=tx.amino.js.map