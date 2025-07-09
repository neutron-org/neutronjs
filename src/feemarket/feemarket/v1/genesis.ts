//@ts-nocheck
/* eslint-disable */
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "feemarket.feemarket.v1";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
  /**
   * Params are the parameters for the feemarket module. These parameters
   * can be utilized to implement both the base EIP-1559 fee market and
   * and the AIMD EIP-1559 fee market.
   */
  params: Params;
  /** State contains the current state of the AIMD fee market. */
  state: State;
}
/**
 * State is utilized to track the current state of the fee market. This includes
 * the current base fee, learning rate, and block utilization within the
 * specified AIMD window.
 */
export interface State {
  /**
   * BaseGasPrice is the current base fee. This is denominated in the fee per
   * gas unit.
   */
  baseGasPrice: string;
  /** LearningRate is the current learning rate. */
  learningRate: string;
  /**
   * Window contains a list of the last blocks' utilization values. This is used
   * to calculate the next base fee. This stores the number of units of gas
   * consumed per block.
   */
  window: bigint[];
  /** Index is the index of the current block in the block utilization window. */
  index: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    state: State.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/feemarket.feemarket.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(18).fork()).ldelim();
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
          message.state = State.decode(reader, reader.uint32());
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
    if (isSet(object.state)) obj.state = State.fromJSON(object.state);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.state !== undefined && (obj.state = message.state ? State.toJSON(message.state) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    }
    return message;
  },
};
function createBaseState(): State {
  return {
    baseGasPrice: "",
    learningRate: "",
    window: [],
    index: BigInt(0),
  };
}
export const State = {
  typeUrl: "/feemarket.feemarket.v1.State",
  encode(message: State, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseGasPrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.baseGasPrice, 18).atomics);
    }
    if (message.learningRate !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.learningRate, 18).atomics);
    }
    writer.uint32(26).fork();
    for (const v of message.window) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.index !== BigInt(0)) {
      writer.uint32(32).uint64(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): State {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseGasPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.learningRate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.window.push(reader.uint64());
            }
          } else {
            message.window.push(reader.uint64());
          }
          break;
        case 4:
          message.index = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): State {
    const obj = createBaseState();
    if (isSet(object.baseGasPrice)) obj.baseGasPrice = String(object.baseGasPrice);
    if (isSet(object.learningRate)) obj.learningRate = String(object.learningRate);
    if (Array.isArray(object?.window)) obj.window = object.window.map((e: any) => BigInt(e.toString()));
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    return obj;
  },
  toJSON(message: State): JsonSafe<State> {
    const obj: any = {};
    message.baseGasPrice !== undefined && (obj.baseGasPrice = message.baseGasPrice);
    message.learningRate !== undefined && (obj.learningRate = message.learningRate);
    if (message.window) {
      obj.window = message.window.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.window = [];
    }
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    message.baseGasPrice = object.baseGasPrice ?? "";
    message.learningRate = object.learningRate ?? "";
    message.window = object.window?.map((e) => BigInt(e.toString())) || [];
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    return message;
  },
};
