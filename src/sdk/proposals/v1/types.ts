/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, isObject } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "sdk.proposals.v1";
export interface ProposalInfo_TxsByLaneEntry {
  key: string;
  value: bigint;
}
/**
 * ProposalInfo contains the metadata about a given proposal that was built by
 * the block-sdk. This is used to verify and consilidate proposal data across
 * the network.
 */
export interface ProposalInfo {
  /**
   * TxsByLane contains information about how each partial proposal
   * was constructed by the block-sdk lanes.
   */
  txsByLane: {
    [key: string]: bigint;
  };
  /**
   * MaxBlockSize corresponds to the upper bound on the size of the
   * block that was used to construct this block proposal.
   */
  maxBlockSize: bigint;
  /**
   * MaxGasLimit corresponds to the upper bound on the gas limit of the
   * block that was used to construct this block proposal.
   */
  maxGasLimit: bigint;
  /** BlockSize corresponds to the size of this block proposal. */
  blockSize: bigint;
  /** GasLimit corresponds to the gas limit of this block proposal. */
  gasLimit: bigint;
}
function createBaseProposalInfo_TxsByLaneEntry(): ProposalInfo_TxsByLaneEntry {
  return {
    key: "",
    value: BigInt(0),
  };
}
export const ProposalInfo_TxsByLaneEntry = {
  encode(message: ProposalInfo_TxsByLaneEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalInfo_TxsByLaneEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalInfo_TxsByLaneEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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
  fromJSON(object: any): ProposalInfo_TxsByLaneEntry {
    const obj = createBaseProposalInfo_TxsByLaneEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = BigInt(object.value.toString());
    return obj;
  },
  toJSON(message: ProposalInfo_TxsByLaneEntry): JsonSafe<ProposalInfo_TxsByLaneEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProposalInfo_TxsByLaneEntry>, I>>(
    object: I,
  ): ProposalInfo_TxsByLaneEntry {
    const message = createBaseProposalInfo_TxsByLaneEntry();
    message.key = object.key ?? "";
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value.toString());
    }
    return message;
  },
};
function createBaseProposalInfo(): ProposalInfo {
  return {
    txsByLane: {},
    maxBlockSize: BigInt(0),
    maxGasLimit: BigInt(0),
    blockSize: BigInt(0),
    gasLimit: BigInt(0),
  };
}
export const ProposalInfo = {
  typeUrl: "/sdk.proposals.v1.ProposalInfo",
  encode(message: ProposalInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.txsByLane).forEach(([key, value]) => {
      ProposalInfo_TxsByLaneEntry.encode(
        {
          key: key as any,
          value,
        },
        writer.uint32(8).fork(),
      ).ldelim();
    });
    if (message.maxBlockSize !== BigInt(0)) {
      writer.uint32(16).int64(message.maxBlockSize);
    }
    if (message.maxGasLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxGasLimit);
    }
    if (message.blockSize !== BigInt(0)) {
      writer.uint32(32).int64(message.blockSize);
    }
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(40).uint64(message.gasLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposalInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = ProposalInfo_TxsByLaneEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.txsByLane[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.maxBlockSize = reader.int64();
          break;
        case 3:
          message.maxGasLimit = reader.uint64();
          break;
        case 4:
          message.blockSize = reader.int64();
          break;
        case 5:
          message.gasLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProposalInfo {
    const obj = createBaseProposalInfo();
    if (isObject(object.txsByLane))
      obj.txsByLane = Object.entries(object.txsByLane).reduce<{
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
        return acc;
      }, {});
    if (isSet(object.maxBlockSize)) obj.maxBlockSize = BigInt(object.maxBlockSize.toString());
    if (isSet(object.maxGasLimit)) obj.maxGasLimit = BigInt(object.maxGasLimit.toString());
    if (isSet(object.blockSize)) obj.blockSize = BigInt(object.blockSize.toString());
    if (isSet(object.gasLimit)) obj.gasLimit = BigInt(object.gasLimit.toString());
    return obj;
  },
  toJSON(message: ProposalInfo): JsonSafe<ProposalInfo> {
    const obj: any = {};
    obj.txsByLane = {};
    if (message.txsByLane) {
      Object.entries(message.txsByLane).forEach(([k, v]) => {
        obj.txsByLane[k] = v.toString();
      });
    }
    message.maxBlockSize !== undefined && (obj.maxBlockSize = (message.maxBlockSize || BigInt(0)).toString());
    message.maxGasLimit !== undefined && (obj.maxGasLimit = (message.maxGasLimit || BigInt(0)).toString());
    message.blockSize !== undefined && (obj.blockSize = (message.blockSize || BigInt(0)).toString());
    message.gasLimit !== undefined && (obj.gasLimit = (message.gasLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProposalInfo>, I>>(object: I): ProposalInfo {
    const message = createBaseProposalInfo();
    message.txsByLane = Object.entries(object.txsByLane ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    if (object.maxBlockSize !== undefined && object.maxBlockSize !== null) {
      message.maxBlockSize = BigInt(object.maxBlockSize.toString());
    }
    if (object.maxGasLimit !== undefined && object.maxGasLimit !== null) {
      message.maxGasLimit = BigInt(object.maxGasLimit.toString());
    }
    if (object.blockSize !== undefined && object.blockSize !== null) {
      message.blockSize = BigInt(object.blockSize.toString());
    }
    if (object.gasLimit !== undefined && object.gasLimit !== null) {
      message.gasLimit = BigInt(object.gasLimit.toString());
    }
    return message;
  },
};
