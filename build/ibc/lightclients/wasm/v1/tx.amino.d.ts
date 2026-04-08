import { AminoMsg } from "@cosmjs/amino";
import { MsgStoreCode, MsgRemoveChecksum, MsgMigrateContract } from "./tx.js";
export interface MsgStoreCodeAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgStoreCode";
    value: {
        signer: string;
        wasm_byte_code: Uint8Array;
    };
}
export interface MsgRemoveChecksumAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgRemoveChecksum";
    value: {
        signer: string;
        checksum: Uint8Array;
    };
}
export interface MsgMigrateContractAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgMigrateContract";
    value: {
        signer: string;
        client_id: string;
        checksum: Uint8Array;
        msg: Uint8Array;
    };
}
export declare const AminoConverter: {
    "/ibc.lightclients.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ signer, wasmByteCode }: MsgStoreCode) => MsgStoreCodeAminoType["value"];
        fromAmino: ({ signer, wasm_byte_code }: MsgStoreCodeAminoType["value"]) => MsgStoreCode;
    };
    "/ibc.lightclients.wasm.v1.MsgRemoveChecksum": {
        aminoType: string;
        toAmino: ({ signer, checksum }: MsgRemoveChecksum) => MsgRemoveChecksumAminoType["value"];
        fromAmino: ({ signer, checksum }: MsgRemoveChecksumAminoType["value"]) => MsgRemoveChecksum;
    };
    "/ibc.lightclients.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: ({ signer, clientId, checksum, msg, }: MsgMigrateContract) => MsgMigrateContractAminoType["value"];
        fromAmino: ({ signer, client_id, checksum, msg, }: MsgMigrateContractAminoType["value"]) => MsgMigrateContract;
    };
};
