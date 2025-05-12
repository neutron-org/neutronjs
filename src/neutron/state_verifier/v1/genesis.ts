/* eslint-disable */
import { ConsensusState as ConsensusState1 } from "../../../ibc/lightclients/tendermint/v1/tendermint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "neutron.state_verifier.v1";
/** Describes a "light" consensus state of the chain at a particular height */
export interface ConsensusState {
  /** Describes a block height for which the consensus height is saved */
  height: bigint;
  /** ConsensusState defines the consensus state from Tendermint */
  cs?: ConsensusState1;
}
/** Defines the state verifier module's genesis state. */
export interface GenesisState {
  states: ConsensusState[];
}
function createBaseConsensusState(): ConsensusState {
  return {
    height: BigInt(0),
    cs: undefined,
  };
}
export const ConsensusState = {
  typeUrl: "/neutron.state_verifier.v1.ConsensusState",
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.cs !== undefined) {
      ConsensusState1.encode(message.cs, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.cs = ConsensusState1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    const obj = createBaseConsensusState();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.cs)) obj.cs = ConsensusState1.fromJSON(object.cs);
    return obj;
  },
  toJSON(message: ConsensusState): JsonSafe<ConsensusState> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.cs !== undefined && (obj.cs = message.cs ? ConsensusState1.toJSON(message.cs) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsensusState>, I>>(object: I): ConsensusState {
    const message = createBaseConsensusState();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.cs !== undefined && object.cs !== null) {
      message.cs = ConsensusState1.fromPartial(object.cs);
    }
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    states: [],
  };
}
export const GenesisState = {
  typeUrl: "/neutron.state_verifier.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.states) {
      ConsensusState.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.states.push(ConsensusState.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.states)) obj.states = object.states.map((e: any) => ConsensusState.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.states) {
      obj.states = message.states.map((e) => (e ? ConsensusState.toJSON(e) : undefined));
    } else {
      obj.states = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.states = object.states?.map((e) => ConsensusState.fromPartial(e)) || [];
    return message;
  },
};
