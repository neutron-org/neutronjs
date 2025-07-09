//@ts-nocheck
/* eslint-disable */
import { HookType, hookTypeFromJSON, hookTypeToJSON } from "./hooks";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.harpoon";
/** Request type for the Query/SubscribedContracts RPC method. */
export interface QuerySubscribedContractsRequest {
  /** The response will include only contract addresses for this hook type. */
  hookType: HookType;
}
/** Response type for the Query/SubscribedContracts RPC method. */
export interface QuerySubscribedContractsResponse {
  /** List of contract addresses subscribed to a specific hook. */
  contractAddresses: string[];
}
function createBaseQuerySubscribedContractsRequest(): QuerySubscribedContractsRequest {
  return {
    hookType: 0,
  };
}
export const QuerySubscribedContractsRequest = {
  typeUrl: "/neutron.harpoon.QuerySubscribedContractsRequest",
  encode(
    message: QuerySubscribedContractsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.hookType !== 0) {
      writer.uint32(8).int32(message.hookType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscribedContractsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscribedContractsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hookType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubscribedContractsRequest {
    const obj = createBaseQuerySubscribedContractsRequest();
    if (isSet(object.hookType)) obj.hookType = hookTypeFromJSON(object.hookType);
    return obj;
  },
  toJSON(message: QuerySubscribedContractsRequest): JsonSafe<QuerySubscribedContractsRequest> {
    const obj: any = {};
    message.hookType !== undefined && (obj.hookType = hookTypeToJSON(message.hookType));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySubscribedContractsRequest>, I>>(
    object: I,
  ): QuerySubscribedContractsRequest {
    const message = createBaseQuerySubscribedContractsRequest();
    message.hookType = object.hookType ?? 0;
    return message;
  },
};
function createBaseQuerySubscribedContractsResponse(): QuerySubscribedContractsResponse {
  return {
    contractAddresses: [],
  };
}
export const QuerySubscribedContractsResponse = {
  typeUrl: "/neutron.harpoon.QuerySubscribedContractsResponse",
  encode(
    message: QuerySubscribedContractsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.contractAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscribedContractsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubscribedContractsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubscribedContractsResponse {
    const obj = createBaseQuerySubscribedContractsResponse();
    if (Array.isArray(object?.contractAddresses))
      obj.contractAddresses = object.contractAddresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QuerySubscribedContractsResponse): JsonSafe<QuerySubscribedContractsResponse> {
    const obj: any = {};
    if (message.contractAddresses) {
      obj.contractAddresses = message.contractAddresses.map((e) => e);
    } else {
      obj.contractAddresses = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuerySubscribedContractsResponse>, I>>(
    object: I,
  ): QuerySubscribedContractsResponse {
    const message = createBaseQuerySubscribedContractsResponse();
    message.contractAddresses = object.contractAddresses?.map((e) => e) || [];
    return message;
  },
};
