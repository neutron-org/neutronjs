/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, isObject } from "../../../helpers";
export const protobufPackage = "sdk.mempool.v1";
/**
 * GetTxDistributionRequest is the request type for the Service.GetTxDistribution
 * RPC method.
 */
export interface GetTxDistributionRequest {}
export interface GetTxDistributionResponse_DistributionEntry {
  key: string;
  value: bigint;
}
/**
 * GetTxDistributionResponse is the response type for the Service.GetTxDistribution
 * RPC method.
 */
export interface GetTxDistributionResponse {
  /** Distribution is a map of lane to the number of transactions in the mempool for that lane. */
  distribution: {
    [key: string]: bigint;
  };
}
function createBaseGetTxDistributionRequest(): GetTxDistributionRequest {
  return {};
}
export const GetTxDistributionRequest = {
  typeUrl: "/sdk.mempool.v1.GetTxDistributionRequest",
  encode(_: GetTxDistributionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxDistributionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDistributionRequest();
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
  fromJSON(_: any): GetTxDistributionRequest {
    const obj = createBaseGetTxDistributionRequest();
    return obj;
  },
  toJSON(_: GetTxDistributionRequest): JsonSafe<GetTxDistributionRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTxDistributionRequest>, I>>(_: I): GetTxDistributionRequest {
    const message = createBaseGetTxDistributionRequest();
    return message;
  },
};
function createBaseGetTxDistributionResponse_DistributionEntry(): GetTxDistributionResponse_DistributionEntry {
  return {
    key: "",
    value: BigInt(0),
  };
}
export const GetTxDistributionResponse_DistributionEntry = {
  encode(
    message: GetTxDistributionResponse_DistributionEntry,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== BigInt(0)) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxDistributionResponse_DistributionEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDistributionResponse_DistributionEntry();
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
  fromJSON(object: any): GetTxDistributionResponse_DistributionEntry {
    const obj = createBaseGetTxDistributionResponse_DistributionEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = BigInt(object.value.toString());
    return obj;
  },
  toJSON(
    message: GetTxDistributionResponse_DistributionEntry,
  ): JsonSafe<GetTxDistributionResponse_DistributionEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTxDistributionResponse_DistributionEntry>, I>>(
    object: I,
  ): GetTxDistributionResponse_DistributionEntry {
    const message = createBaseGetTxDistributionResponse_DistributionEntry();
    message.key = object.key ?? "";
    if (object.value !== undefined && object.value !== null) {
      message.value = BigInt(object.value.toString());
    }
    return message;
  },
};
function createBaseGetTxDistributionResponse(): GetTxDistributionResponse {
  return {
    distribution: {},
  };
}
export const GetTxDistributionResponse = {
  typeUrl: "/sdk.mempool.v1.GetTxDistributionResponse",
  encode(message: GetTxDistributionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.distribution).forEach(([key, value]) => {
      GetTxDistributionResponse_DistributionEntry.encode(
        {
          key: key as any,
          value,
        },
        writer.uint32(8).fork(),
      ).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxDistributionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDistributionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = GetTxDistributionResponse_DistributionEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.distribution[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTxDistributionResponse {
    const obj = createBaseGetTxDistributionResponse();
    if (isObject(object.distribution))
      obj.distribution = Object.entries(object.distribution).reduce<{
        [key: string]: bigint;
      }>((acc, [key, value]) => {
        acc[key] = BigInt((value as bigint | string).toString());
        return acc;
      }, {});
    return obj;
  },
  toJSON(message: GetTxDistributionResponse): JsonSafe<GetTxDistributionResponse> {
    const obj: any = {};
    obj.distribution = {};
    if (message.distribution) {
      Object.entries(message.distribution).forEach(([k, v]) => {
        obj.distribution[k] = v.toString();
      });
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTxDistributionResponse>, I>>(
    object: I,
  ): GetTxDistributionResponse {
    const message = createBaseGetTxDistributionResponse();
    message.distribution = Object.entries(object.distribution ?? {}).reduce<{
      [key: string]: bigint;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = BigInt(value.toString());
      }
      return acc;
    }, {});
    return message;
  },
};
