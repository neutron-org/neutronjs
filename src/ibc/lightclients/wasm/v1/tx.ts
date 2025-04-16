//@ts-nocheck
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.lightclients.wasm.v1";
/** MsgStoreCode defines the request type for the StoreCode rpc. */
export interface MsgStoreCode {
  /** signer address */
  signer: string;
  /** wasm byte code of light client contract. It can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
}
/** MsgStoreCodeResponse defines the response type for the StoreCode rpc */
export interface MsgStoreCodeResponse {
  /** checksum is the sha256 hash of the stored code */
  checksum: Uint8Array;
}
/** MsgRemoveChecksum defines the request type for the MsgRemoveChecksum rpc. */
export interface MsgRemoveChecksum {
  /** signer address */
  signer: string;
  /** checksum is the sha256 hash to be removed from the store */
  checksum: Uint8Array;
}
/** MsgStoreChecksumResponse defines the response type for the StoreCode rpc */
export interface MsgRemoveChecksumResponse {}
/** MsgMigrateContract defines the request type for the MigrateContract rpc. */
export interface MsgMigrateContract {
  /** signer address */
  signer: string;
  /** the client id of the contract */
  clientId: string;
  /** checksum is the sha256 hash of the new wasm byte code for the contract */
  checksum: Uint8Array;
  /** the json encoded message to be passed to the contract on migration */
  msg: Uint8Array;
}
/** MsgMigrateContractResponse defines the response type for the MigrateContract rpc */
export interface MsgMigrateContractResponse {}
function createBaseMsgStoreCode(): MsgStoreCode {
  return {
    signer: "",
    wasmByteCode: new Uint8Array(),
  };
}
export const MsgStoreCode = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCode",
  encode(message: MsgStoreCode, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.wasmByteCode = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStoreCode {
    const obj = createBaseMsgStoreCode();
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.wasmByteCode)) obj.wasmByteCode = bytesFromBase64(object.wasmByteCode);
    return obj;
  },
  toJSON(message: MsgStoreCode): JsonSafe<MsgStoreCode> {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStoreCode>, I>>(object: I): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.signer = object.signer ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgStoreCodeAmino): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.wasm_byte_code !== undefined && object.wasm_byte_code !== null) {
      message.wasmByteCode = bytesFromBase64(object.wasm_byte_code);
    }
    return message;
  },
  toAmino(message: MsgStoreCode): MsgStoreCodeAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.wasm_byte_code = message.wasmByteCode ? base64FromBytes(message.wasmByteCode) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStoreCodeAminoMsg): MsgStoreCode {
    return MsgStoreCode.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStoreCode): MsgStoreCodeAminoMsg {
    return {
      type: "cosmos-sdk/MsgStoreCode",
      value: MsgStoreCode.toAmino(message),
    };
  },
};
function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return {
    checksum: new Uint8Array(),
  };
}
export const MsgStoreCodeResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgStoreCodeResponse",
  encode(message: MsgStoreCodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.checksum.length !== 0) {
      writer.uint32(10).bytes(message.checksum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checksum = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgStoreCodeResponse {
    const obj = createBaseMsgStoreCodeResponse();
    if (isSet(object.checksum)) obj.checksum = bytesFromBase64(object.checksum);
    return obj;
  },
  toJSON(message: MsgStoreCodeResponse): JsonSafe<MsgStoreCodeResponse> {
    const obj: any = {};
    message.checksum !== undefined &&
      (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgStoreCodeResponse>, I>>(object: I): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgStoreCodeResponseAmino): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    return message;
  },
  toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino {
    const obj: any = {};
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgStoreCodeResponseAminoMsg): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgStoreCodeResponse",
      value: MsgStoreCodeResponse.toAmino(message),
    };
  },
};
function createBaseMsgRemoveChecksum(): MsgRemoveChecksum {
  return {
    signer: "",
    checksum: new Uint8Array(),
  };
}
export const MsgRemoveChecksum = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksum",
  encode(message: MsgRemoveChecksum, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(18).bytes(message.checksum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveChecksum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveChecksum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.checksum = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveChecksum {
    const obj = createBaseMsgRemoveChecksum();
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.checksum)) obj.checksum = bytesFromBase64(object.checksum);
    return obj;
  },
  toJSON(message: MsgRemoveChecksum): JsonSafe<MsgRemoveChecksum> {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.checksum !== undefined &&
      (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveChecksum>, I>>(object: I): MsgRemoveChecksum {
    const message = createBaseMsgRemoveChecksum();
    message.signer = object.signer ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgRemoveChecksumAmino): MsgRemoveChecksum {
    const message = createBaseMsgRemoveChecksum();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    return message;
  },
  toAmino(message: MsgRemoveChecksum): MsgRemoveChecksumAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveChecksumAminoMsg): MsgRemoveChecksum {
    return MsgRemoveChecksum.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveChecksum): MsgRemoveChecksumAminoMsg {
    return {
      type: "cosmos-sdk/MsgRemoveChecksum",
      value: MsgRemoveChecksum.toAmino(message),
    };
  },
};
function createBaseMsgRemoveChecksumResponse(): MsgRemoveChecksumResponse {
  return {};
}
export const MsgRemoveChecksumResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgRemoveChecksumResponse",
  encode(_: MsgRemoveChecksumResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveChecksumResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveChecksumResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRemoveChecksumResponse {
    const obj = createBaseMsgRemoveChecksumResponse();
    return obj;
  },
  toJSON(_: MsgRemoveChecksumResponse): JsonSafe<MsgRemoveChecksumResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveChecksumResponse>, I>>(_: I): MsgRemoveChecksumResponse {
    const message = createBaseMsgRemoveChecksumResponse();
    return message;
  },
  fromAmino(_: MsgRemoveChecksumResponseAmino): MsgRemoveChecksumResponse {
    const message = createBaseMsgRemoveChecksumResponse();
    return message;
  },
  toAmino(_: MsgRemoveChecksumResponse): MsgRemoveChecksumResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveChecksumResponseAminoMsg): MsgRemoveChecksumResponse {
    return MsgRemoveChecksumResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveChecksumResponse): MsgRemoveChecksumResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRemoveChecksumResponse",
      value: MsgRemoveChecksumResponse.toAmino(message),
    };
  },
};
function createBaseMsgMigrateContract(): MsgMigrateContract {
  return {
    signer: "",
    clientId: "",
    checksum: new Uint8Array(),
    msg: new Uint8Array(),
  };
}
export const MsgMigrateContract = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContract",
  encode(message: MsgMigrateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(26).bytes(message.checksum);
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.checksum = reader.bytes();
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMigrateContract {
    const obj = createBaseMsgMigrateContract();
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.checksum)) obj.checksum = bytesFromBase64(object.checksum);
    if (isSet(object.msg)) obj.msg = bytesFromBase64(object.msg);
    return obj;
  },
  toJSON(message: MsgMigrateContract): JsonSafe<MsgMigrateContract> {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.checksum !== undefined &&
      (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    message.msg !== undefined &&
      (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMigrateContract>, I>>(object: I): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.signer = object.signer ?? "";
    message.clientId = object.clientId ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    message.msg = object.msg ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgMigrateContractAmino): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = bytesFromBase64(object.msg);
    }
    return message;
  },
  toAmino(message: MsgMigrateContract): MsgMigrateContractAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.checksum = message.checksum ? base64FromBytes(message.checksum) : undefined;
    obj.msg = message.msg ? base64FromBytes(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgMigrateContractAminoMsg): MsgMigrateContract {
    return MsgMigrateContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMigrateContract): MsgMigrateContractAminoMsg {
    return {
      type: "cosmos-sdk/MsgMigrateContract",
      value: MsgMigrateContract.toAmino(message),
    };
  },
};
function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return {};
}
export const MsgMigrateContractResponse = {
  typeUrl: "/ibc.lightclients.wasm.v1.MsgMigrateContractResponse",
  encode(_: MsgMigrateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgMigrateContractResponse {
    const obj = createBaseMsgMigrateContractResponse();
    return obj;
  },
  toJSON(_: MsgMigrateContractResponse): JsonSafe<MsgMigrateContractResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgMigrateContractResponse>, I>>(_: I): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    return message;
  },
  fromAmino(_: MsgMigrateContractResponseAmino): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    return message;
  },
  toAmino(_: MsgMigrateContractResponse): MsgMigrateContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMigrateContractResponseAminoMsg): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgMigrateContractResponse",
      value: MsgMigrateContractResponse.toAmino(message),
    };
  },
};
