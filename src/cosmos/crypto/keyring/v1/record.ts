//@ts-nocheck
/* eslint-disable */
import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "cosmos.crypto.keyring.v1";
/** Record is used for representing a key in the keyring. */
export interface Record {
  /** name represents a name of Record */
  name: string;
  /** pub_key represents a public key in any format */
  pubKey?: Any;
  /** local stores the private key locally. */
  local?: Record_Local;
  /** ledger stores the information about a Ledger key. */
  ledger?: Record_Ledger;
  /** Multi does not store any other information. */
  multi?: Record_Multi;
  /** Offline does not store any other information. */
  offline?: Record_Offline;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
  privKey?: Any;
}
/** Ledger item */
export interface Record_Ledger {
  path?: BIP44Params;
}
/** Multi item */
export interface Record_Multi {}
/** Offline item */
export interface Record_Offline {}
function createBaseRecord(): Record {
  return {
    name: "",
    pubKey: undefined,
    local: undefined,
    ledger: undefined,
    multi: undefined,
    offline: undefined,
  };
}
export const Record = {
  typeUrl: "/cosmos.crypto.keyring.v1.Record",
  encode(message: Record, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.local !== undefined) {
      Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
    }
    if (message.ledger !== undefined) {
      Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
    }
    if (message.offline !== undefined) {
      Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.local = Record_Local.decode(reader, reader.uint32());
          break;
        case 4:
          message.ledger = Record_Ledger.decode(reader, reader.uint32());
          break;
        case 5:
          message.multi = Record_Multi.decode(reader, reader.uint32());
          break;
        case 6:
          message.offline = Record_Offline.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Record {
    const obj = createBaseRecord();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.pubKey)) obj.pubKey = Any.fromJSON(object.pubKey);
    if (isSet(object.local)) obj.local = Record_Local.fromJSON(object.local);
    if (isSet(object.ledger)) obj.ledger = Record_Ledger.fromJSON(object.ledger);
    if (isSet(object.multi)) obj.multi = Record_Multi.fromJSON(object.multi);
    if (isSet(object.offline)) obj.offline = Record_Offline.fromJSON(object.offline);
    return obj;
  },
  toJSON(message: Record): JsonSafe<Record> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.local !== undefined &&
      (obj.local = message.local ? Record_Local.toJSON(message.local) : undefined);
    message.ledger !== undefined &&
      (obj.ledger = message.ledger ? Record_Ledger.toJSON(message.ledger) : undefined);
    message.multi !== undefined &&
      (obj.multi = message.multi ? Record_Multi.toJSON(message.multi) : undefined);
    message.offline !== undefined &&
      (obj.offline = message.offline ? Record_Offline.toJSON(message.offline) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Record>, I>>(object: I): Record {
    const message = createBaseRecord();
    message.name = object.name ?? "";
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = Any.fromPartial(object.pubKey);
    }
    if (object.local !== undefined && object.local !== null) {
      message.local = Record_Local.fromPartial(object.local);
    }
    if (object.ledger !== undefined && object.ledger !== null) {
      message.ledger = Record_Ledger.fromPartial(object.ledger);
    }
    if (object.multi !== undefined && object.multi !== null) {
      message.multi = Record_Multi.fromPartial(object.multi);
    }
    if (object.offline !== undefined && object.offline !== null) {
      message.offline = Record_Offline.fromPartial(object.offline);
    }
    return message;
  },
  fromAmino(object: RecordAmino): Record {
    const message = createBaseRecord();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = Any.fromAmino(object.pub_key);
    }
    if (object.local !== undefined && object.local !== null) {
      message.local = Record_Local.fromAmino(object.local);
    }
    if (object.ledger !== undefined && object.ledger !== null) {
      message.ledger = Record_Ledger.fromAmino(object.ledger);
    }
    if (object.multi !== undefined && object.multi !== null) {
      message.multi = Record_Multi.fromAmino(object.multi);
    }
    if (object.offline !== undefined && object.offline !== null) {
      message.offline = Record_Offline.fromAmino(object.offline);
    }
    return message;
  },
  toAmino(message: Record): RecordAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
    obj.local = message.local ? Record_Local.toAmino(message.local) : undefined;
    obj.ledger = message.ledger ? Record_Ledger.toAmino(message.ledger) : undefined;
    obj.multi = message.multi ? Record_Multi.toAmino(message.multi) : undefined;
    obj.offline = message.offline ? Record_Offline.toAmino(message.offline) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecordAminoMsg): Record {
    return Record.fromAmino(object.value);
  },
  toAminoMsg(message: Record): RecordAminoMsg {
    return {
      type: "cosmos-sdk/Record",
      value: Record.toAmino(message),
    };
  },
};
function createBaseRecord_Local(): Record_Local {
  return {
    privKey: undefined,
  };
}
export const Record_Local = {
  typeUrl: "/cosmos.crypto.keyring.v1.Local",
  encode(message: Record_Local, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.privKey !== undefined) {
      Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record_Local {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Local();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.privKey = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Record_Local {
    const obj = createBaseRecord_Local();
    if (isSet(object.privKey)) obj.privKey = Any.fromJSON(object.privKey);
    return obj;
  },
  toJSON(message: Record_Local): JsonSafe<Record_Local> {
    const obj: any = {};
    message.privKey !== undefined &&
      (obj.privKey = message.privKey ? Any.toJSON(message.privKey) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Record_Local>, I>>(object: I): Record_Local {
    const message = createBaseRecord_Local();
    if (object.privKey !== undefined && object.privKey !== null) {
      message.privKey = Any.fromPartial(object.privKey);
    }
    return message;
  },
  fromAmino(object: Record_LocalAmino): Record_Local {
    const message = createBaseRecord_Local();
    if (object.priv_key !== undefined && object.priv_key !== null) {
      message.privKey = Any.fromAmino(object.priv_key);
    }
    return message;
  },
  toAmino(message: Record_Local): Record_LocalAmino {
    const obj: any = {};
    obj.priv_key = message.privKey ? Any.toAmino(message.privKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: Record_LocalAminoMsg): Record_Local {
    return Record_Local.fromAmino(object.value);
  },
  toAminoMsg(message: Record_Local): Record_LocalAminoMsg {
    return {
      type: "cosmos-sdk/Local",
      value: Record_Local.toAmino(message),
    };
  },
};
function createBaseRecord_Ledger(): Record_Ledger {
  return {
    path: undefined,
  };
}
export const Record_Ledger = {
  typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
  encode(message: Record_Ledger, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== undefined) {
      BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record_Ledger {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Ledger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = BIP44Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Record_Ledger {
    const obj = createBaseRecord_Ledger();
    if (isSet(object.path)) obj.path = BIP44Params.fromJSON(object.path);
    return obj;
  },
  toJSON(message: Record_Ledger): JsonSafe<Record_Ledger> {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path ? BIP44Params.toJSON(message.path) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Record_Ledger>, I>>(object: I): Record_Ledger {
    const message = createBaseRecord_Ledger();
    if (object.path !== undefined && object.path !== null) {
      message.path = BIP44Params.fromPartial(object.path);
    }
    return message;
  },
  fromAmino(object: Record_LedgerAmino): Record_Ledger {
    const message = createBaseRecord_Ledger();
    if (object.path !== undefined && object.path !== null) {
      message.path = BIP44Params.fromAmino(object.path);
    }
    return message;
  },
  toAmino(message: Record_Ledger): Record_LedgerAmino {
    const obj: any = {};
    obj.path = message.path ? BIP44Params.toAmino(message.path) : undefined;
    return obj;
  },
  fromAminoMsg(object: Record_LedgerAminoMsg): Record_Ledger {
    return Record_Ledger.fromAmino(object.value);
  },
  toAminoMsg(message: Record_Ledger): Record_LedgerAminoMsg {
    return {
      type: "cosmos-sdk/Ledger",
      value: Record_Ledger.toAmino(message),
    };
  },
};
function createBaseRecord_Multi(): Record_Multi {
  return {};
}
export const Record_Multi = {
  typeUrl: "/cosmos.crypto.keyring.v1.Multi",
  encode(_: Record_Multi, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record_Multi {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Multi();
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
  fromJSON(_: any): Record_Multi {
    const obj = createBaseRecord_Multi();
    return obj;
  },
  toJSON(_: Record_Multi): JsonSafe<Record_Multi> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Record_Multi>, I>>(_: I): Record_Multi {
    const message = createBaseRecord_Multi();
    return message;
  },
  fromAmino(_: Record_MultiAmino): Record_Multi {
    const message = createBaseRecord_Multi();
    return message;
  },
  toAmino(_: Record_Multi): Record_MultiAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: Record_MultiAminoMsg): Record_Multi {
    return Record_Multi.fromAmino(object.value);
  },
  toAminoMsg(message: Record_Multi): Record_MultiAminoMsg {
    return {
      type: "cosmos-sdk/Multi",
      value: Record_Multi.toAmino(message),
    };
  },
};
function createBaseRecord_Offline(): Record_Offline {
  return {};
}
export const Record_Offline = {
  typeUrl: "/cosmos.crypto.keyring.v1.Offline",
  encode(_: Record_Offline, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record_Offline {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord_Offline();
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
  fromJSON(_: any): Record_Offline {
    const obj = createBaseRecord_Offline();
    return obj;
  },
  toJSON(_: Record_Offline): JsonSafe<Record_Offline> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Record_Offline>, I>>(_: I): Record_Offline {
    const message = createBaseRecord_Offline();
    return message;
  },
  fromAmino(_: Record_OfflineAmino): Record_Offline {
    const message = createBaseRecord_Offline();
    return message;
  },
  toAmino(_: Record_Offline): Record_OfflineAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: Record_OfflineAminoMsg): Record_Offline {
    return Record_Offline.fromAmino(object.value);
  },
  toAminoMsg(message: Record_Offline): Record_OfflineAminoMsg {
    return {
      type: "cosmos-sdk/Offline",
      value: Record_Offline.toAmino(message),
    };
  },
};
