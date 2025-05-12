/* eslint-disable */
import { StorageValue } from "../../interchainqueries/tx";
import { ConsensusState } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "neutron.state_verifier.v1";
/** Describes a structure to verify storage values from the chain state from a particular height in the past */
export interface QueryVerifyStateValuesRequest {
  /** Refers to the block height to which the storage values belong. */
  height: bigint;
  /** A slice of neutron.interchainqueries.StorageValue which relate to the specified height and must be verified against */
  storageValues: StorageValue[];
}
/** Describes a response structure for `VerifyStateValues` query */
export interface QueryVerifyStateValuesResponse {
  /** The field describes a validity of all the storage values passed to the request at a specific height */
  valid: boolean;
}
/** Describes a structure to query ConsensusState by the specified height */
export interface QueryConsensusStateRequest {
  /** Refers to the block height for which you want to query ConsensusState */
  height: bigint;
}
/** Describes a response structure for `QueryConsensusStateRequest` query */
export interface QueryConsensusStateResponse {
  /** ConsensusState defines the consensus state from the state-verifier module */
  cs?: ConsensusState;
}
function createBaseQueryVerifyStateValuesRequest(): QueryVerifyStateValuesRequest {
  return {
    height: BigInt(0),
    storageValues: [],
  };
}
export const QueryVerifyStateValuesRequest = {
  typeUrl: "/neutron.state_verifier.v1.QueryVerifyStateValuesRequest",
  encode(message: QueryVerifyStateValuesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    for (const v of message.storageValues) {
      StorageValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyStateValuesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyStateValuesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.storageValues.push(StorageValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVerifyStateValuesRequest {
    const obj = createBaseQueryVerifyStateValuesRequest();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (Array.isArray(object?.storageValues))
      obj.storageValues = object.storageValues.map((e: any) => StorageValue.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryVerifyStateValuesRequest): JsonSafe<QueryVerifyStateValuesRequest> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    if (message.storageValues) {
      obj.storageValues = message.storageValues.map((e) => (e ? StorageValue.toJSON(e) : undefined));
    } else {
      obj.storageValues = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVerifyStateValuesRequest>, I>>(
    object: I,
  ): QueryVerifyStateValuesRequest {
    const message = createBaseQueryVerifyStateValuesRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.storageValues = object.storageValues?.map((e) => StorageValue.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryVerifyStateValuesResponse(): QueryVerifyStateValuesResponse {
  return {
    valid: false,
  };
}
export const QueryVerifyStateValuesResponse = {
  typeUrl: "/neutron.state_verifier.v1.QueryVerifyStateValuesResponse",
  encode(
    message: QueryVerifyStateValuesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.valid === true) {
      writer.uint32(8).bool(message.valid);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyStateValuesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyStateValuesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVerifyStateValuesResponse {
    const obj = createBaseQueryVerifyStateValuesResponse();
    if (isSet(object.valid)) obj.valid = Boolean(object.valid);
    return obj;
  },
  toJSON(message: QueryVerifyStateValuesResponse): JsonSafe<QueryVerifyStateValuesResponse> {
    const obj: any = {};
    message.valid !== undefined && (obj.valid = message.valid);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryVerifyStateValuesResponse>, I>>(
    object: I,
  ): QueryVerifyStateValuesResponse {
    const message = createBaseQueryVerifyStateValuesResponse();
    message.valid = object.valid ?? false;
    return message;
  },
};
function createBaseQueryConsensusStateRequest(): QueryConsensusStateRequest {
  return {
    height: BigInt(0),
  };
}
export const QueryConsensusStateRequest = {
  typeUrl: "/neutron.state_verifier.v1.QueryConsensusStateRequest",
  encode(message: QueryConsensusStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateRequest {
    const obj = createBaseQueryConsensusStateRequest();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: QueryConsensusStateRequest): JsonSafe<QueryConsensusStateRequest> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsensusStateRequest>, I>>(
    object: I,
  ): QueryConsensusStateRequest {
    const message = createBaseQueryConsensusStateRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
function createBaseQueryConsensusStateResponse(): QueryConsensusStateResponse {
  return {
    cs: undefined,
  };
}
export const QueryConsensusStateResponse = {
  typeUrl: "/neutron.state_verifier.v1.QueryConsensusStateResponse",
  encode(message: QueryConsensusStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cs !== undefined) {
      ConsensusState.encode(message.cs, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.cs = ConsensusState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateResponse {
    const obj = createBaseQueryConsensusStateResponse();
    if (isSet(object.cs)) obj.cs = ConsensusState.fromJSON(object.cs);
    return obj;
  },
  toJSON(message: QueryConsensusStateResponse): JsonSafe<QueryConsensusStateResponse> {
    const obj: any = {};
    message.cs !== undefined && (obj.cs = message.cs ? ConsensusState.toJSON(message.cs) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsensusStateResponse>, I>>(
    object: I,
  ): QueryConsensusStateResponse {
    const message = createBaseQueryConsensusStateResponse();
    if (object.cs !== undefined && object.cs !== null) {
      message.cs = ConsensusState.fromPartial(object.cs);
    }
    return message;
  },
};
