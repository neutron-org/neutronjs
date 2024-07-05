/* eslint-disable */
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } from "./tx";
import { Params, CodeInfo, ContractInfo, Model, ContractCodeHistoryEntry } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmwasm.wasm.v1";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
  params: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
  genMsgs: GenesisState_GenMsgs[];
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgs {
  storeCode?: MsgStoreCode;
  instantiateContract?: MsgInstantiateContract;
  executeContract?: MsgExecuteContract;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeId: bigint;
  codeInfo: CodeInfo;
  codeBytes: Uint8Array;
  /** Pinned to wasmvm cache */
  pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractAddress: string;
  contractInfo: ContractInfo;
  contractState: Model[];
  contractCodeHistory: ContractCodeHistoryEntry[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
  idKey: Uint8Array;
  value: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    codes: [],
    contracts: [],
    sequences: [],
    genMsgs: [],
  };
}
export const GenesisState = {
  typeUrl: "/cosmwasm.wasm.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.genMsgs) {
      GenesisState_GenMsgs.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;
        case 5:
          message.genMsgs.push(GenesisState_GenMsgs.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.codes)) obj.codes = object.codes.map((e: any) => Code.fromJSON(e));
    if (Array.isArray(object?.contracts))
      obj.contracts = object.contracts.map((e: any) => Contract.fromJSON(e));
    if (Array.isArray(object?.sequences))
      obj.sequences = object.sequences.map((e: any) => Sequence.fromJSON(e));
    if (Array.isArray(object?.genMsgs))
      obj.genMsgs = object.genMsgs.map((e: any) => GenesisState_GenMsgs.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.codes) {
      obj.codes = message.codes.map((e) => (e ? Code.toJSON(e) : undefined));
    } else {
      obj.codes = [];
    }
    if (message.contracts) {
      obj.contracts = message.contracts.map((e) => (e ? Contract.toJSON(e) : undefined));
    } else {
      obj.contracts = [];
    }
    if (message.sequences) {
      obj.sequences = message.sequences.map((e) => (e ? Sequence.toJSON(e) : undefined));
    } else {
      obj.sequences = [];
    }
    if (message.genMsgs) {
      obj.genMsgs = message.genMsgs.map((e) => (e ? GenesisState_GenMsgs.toJSON(e) : undefined));
    } else {
      obj.genMsgs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.codes = object.codes?.map((e) => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map((e) => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map((e) => Sequence.fromPartial(e)) || [];
    message.genMsgs = object.genMsgs?.map((e) => GenesisState_GenMsgs.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGenesisState_GenMsgs(): GenesisState_GenMsgs {
  return {
    storeCode: undefined,
    instantiateContract: undefined,
    executeContract: undefined,
  };
}
export const GenesisState_GenMsgs = {
  typeUrl: "/cosmwasm.wasm.v1.GenMsgs",
  encode(message: GenesisState_GenMsgs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.storeCode !== undefined) {
      MsgStoreCode.encode(message.storeCode, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiateContract !== undefined) {
      MsgInstantiateContract.encode(message.instantiateContract, writer.uint32(18).fork()).ldelim();
    }
    if (message.executeContract !== undefined) {
      MsgExecuteContract.encode(message.executeContract, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState_GenMsgs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_GenMsgs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storeCode = MsgStoreCode.decode(reader, reader.uint32());
          break;
        case 2:
          message.instantiateContract = MsgInstantiateContract.decode(reader, reader.uint32());
          break;
        case 3:
          message.executeContract = MsgExecuteContract.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState_GenMsgs {
    const obj = createBaseGenesisState_GenMsgs();
    if (isSet(object.storeCode)) obj.storeCode = MsgStoreCode.fromJSON(object.storeCode);
    if (isSet(object.instantiateContract))
      obj.instantiateContract = MsgInstantiateContract.fromJSON(object.instantiateContract);
    if (isSet(object.executeContract))
      obj.executeContract = MsgExecuteContract.fromJSON(object.executeContract);
    return obj;
  },
  toJSON(message: GenesisState_GenMsgs): JsonSafe<GenesisState_GenMsgs> {
    const obj: any = {};
    message.storeCode !== undefined &&
      (obj.storeCode = message.storeCode ? MsgStoreCode.toJSON(message.storeCode) : undefined);
    message.instantiateContract !== undefined &&
      (obj.instantiateContract = message.instantiateContract
        ? MsgInstantiateContract.toJSON(message.instantiateContract)
        : undefined);
    message.executeContract !== undefined &&
      (obj.executeContract = message.executeContract
        ? MsgExecuteContract.toJSON(message.executeContract)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState_GenMsgs>, I>>(object: I): GenesisState_GenMsgs {
    const message = createBaseGenesisState_GenMsgs();
    if (object.storeCode !== undefined && object.storeCode !== null) {
      message.storeCode = MsgStoreCode.fromPartial(object.storeCode);
    }
    if (object.instantiateContract !== undefined && object.instantiateContract !== null) {
      message.instantiateContract = MsgInstantiateContract.fromPartial(object.instantiateContract);
    }
    if (object.executeContract !== undefined && object.executeContract !== null) {
      message.executeContract = MsgExecuteContract.fromPartial(object.executeContract);
    }
    return message;
  },
};
function createBaseCode(): Code {
  return {
    codeId: BigInt(0),
    codeInfo: CodeInfo.fromPartial({}),
    codeBytes: new Uint8Array(),
    pinned: false,
  };
}
export const Code = {
  typeUrl: "/cosmwasm.wasm.v1.Code",
  encode(message: Code, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeInfo !== undefined) {
      CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(26).bytes(message.codeBytes);
    }
    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Code {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.codeInfo = CodeInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.codeBytes = reader.bytes();
          break;
        case 4:
          message.pinned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Code {
    const obj = createBaseCode();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.codeInfo)) obj.codeInfo = CodeInfo.fromJSON(object.codeInfo);
    if (isSet(object.codeBytes)) obj.codeBytes = bytesFromBase64(object.codeBytes);
    if (isSet(object.pinned)) obj.pinned = Boolean(object.pinned);
    return obj;
  },
  toJSON(message: Code): JsonSafe<Code> {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.codeInfo !== undefined &&
      (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined &&
      (obj.codeBytes = base64FromBytes(
        message.codeBytes !== undefined ? message.codeBytes : new Uint8Array(),
      ));
    message.pinned !== undefined && (obj.pinned = message.pinned);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Code>, I>>(object: I): Code {
    const message = createBaseCode();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    if (object.codeInfo !== undefined && object.codeInfo !== null) {
      message.codeInfo = CodeInfo.fromPartial(object.codeInfo);
    }
    message.codeBytes = object.codeBytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  },
};
function createBaseContract(): Contract {
  return {
    contractAddress: "",
    contractInfo: ContractInfo.fromPartial({}),
    contractState: [],
    contractCodeHistory: [],
  };
}
export const Contract = {
  typeUrl: "/cosmwasm.wasm.v1.Contract",
  encode(message: Contract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.contractInfo !== undefined) {
      ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractState) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.contractCodeHistory) {
      ContractCodeHistoryEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Contract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.contractInfo = ContractInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.contractState.push(Model.decode(reader, reader.uint32()));
          break;
        case 4:
          message.contractCodeHistory.push(ContractCodeHistoryEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Contract {
    const obj = createBaseContract();
    if (isSet(object.contractAddress)) obj.contractAddress = String(object.contractAddress);
    if (isSet(object.contractInfo)) obj.contractInfo = ContractInfo.fromJSON(object.contractInfo);
    if (Array.isArray(object?.contractState))
      obj.contractState = object.contractState.map((e: any) => Model.fromJSON(e));
    if (Array.isArray(object?.contractCodeHistory))
      obj.contractCodeHistory = object.contractCodeHistory.map((e: any) =>
        ContractCodeHistoryEntry.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: Contract): JsonSafe<Contract> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.contractInfo !== undefined &&
      (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
    if (message.contractState) {
      obj.contractState = message.contractState.map((e) => (e ? Model.toJSON(e) : undefined));
    } else {
      obj.contractState = [];
    }
    if (message.contractCodeHistory) {
      obj.contractCodeHistory = message.contractCodeHistory.map((e) =>
        e ? ContractCodeHistoryEntry.toJSON(e) : undefined,
      );
    } else {
      obj.contractCodeHistory = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Contract>, I>>(object: I): Contract {
    const message = createBaseContract();
    message.contractAddress = object.contractAddress ?? "";
    if (object.contractInfo !== undefined && object.contractInfo !== null) {
      message.contractInfo = ContractInfo.fromPartial(object.contractInfo);
    }
    message.contractState = object.contractState?.map((e) => Model.fromPartial(e)) || [];
    message.contractCodeHistory =
      object.contractCodeHistory?.map((e) => ContractCodeHistoryEntry.fromPartial(e)) || [];
    return message;
  },
};
function createBaseSequence(): Sequence {
  return {
    idKey: new Uint8Array(),
    value: BigInt(0),
  };
}
export const Sequence = {
  typeUrl: "/cosmwasm.wasm.v1.Sequence",
  encode(message: Sequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.idKey.length !== 0) {
      writer.uint32(10).bytes(message.idKey);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idKey = reader.bytes();
          break;
        case 2:
          message.value = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Sequence {
    const obj = createBaseSequence();
    if (isSet(object.idKey)) obj.idKey = bytesFromBase64(object.idKey);
    if (isSet(object.value)) obj.value = BigInt(object.value.toString());
    return obj;
  },
  toJSON(message: Sequence): JsonSafe<Sequence> {
    const obj: any = {};
    message.idKey !== undefined &&
      (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Sequence>, I>>(object: I): Sequence {
    const message = createBaseSequence();
    message.idKey = object.idKey ?? new Uint8Array();
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value.toString());
    }
    return message;
  },
};
