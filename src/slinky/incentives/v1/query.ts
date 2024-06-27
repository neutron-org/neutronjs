/* eslint-disable */
import { IncentivesByType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.incentives.v1";
/**
 * GetIncentivesByTypeRequest is the request type for the
 * Query/GetIncentivesByType RPC method.
 */
export interface GetIncentivesByTypeRequest {
  /**
   * IncentiveType is the incentive type i.e. (BadPriceIncentiveType,
   * GoodPriceIncentiveType).
   */
  incentiveType: string;
}
/**
 * GetIncentivesByTypeResponse is the response type for the
 * Query/GetIncentivesByType RPC method.
 */
export interface GetIncentivesByTypeResponse {
  /** Entries is the list of incentives of the given type. */
  entries: Uint8Array[];
}
/**
 * GetAllIncentivesRequest is the request type for the Query/GetAllIncentives
 * RPC method.
 */
export interface GetAllIncentivesRequest {}
/**
 * GetAllIncentivesResponse is the response type for the Query/GetAllIncentives
 * RPC method.
 */
export interface GetAllIncentivesResponse {
  /** Registry is the list of all incentives, grouped by type. */
  registry: IncentivesByType[];
}
function createBaseGetIncentivesByTypeRequest(): GetIncentivesByTypeRequest {
  return {
    incentiveType: "",
  };
}
export const GetIncentivesByTypeRequest = {
  typeUrl: "/slinky.incentives.v1.GetIncentivesByTypeRequest",
  encode(message: GetIncentivesByTypeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.incentiveType !== "") {
      writer.uint32(10).string(message.incentiveType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetIncentivesByTypeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetIncentivesByTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentiveType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetIncentivesByTypeRequest {
    const obj = createBaseGetIncentivesByTypeRequest();
    if (isSet(object.incentiveType)) obj.incentiveType = String(object.incentiveType);
    return obj;
  },
  toJSON(message: GetIncentivesByTypeRequest): JsonSafe<GetIncentivesByTypeRequest> {
    const obj: any = {};
    message.incentiveType !== undefined && (obj.incentiveType = message.incentiveType);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetIncentivesByTypeRequest>, I>>(
    object: I,
  ): GetIncentivesByTypeRequest {
    const message = createBaseGetIncentivesByTypeRequest();
    message.incentiveType = object.incentiveType ?? "";
    return message;
  },
};
function createBaseGetIncentivesByTypeResponse(): GetIncentivesByTypeResponse {
  return {
    entries: [],
  };
}
export const GetIncentivesByTypeResponse = {
  typeUrl: "/slinky.incentives.v1.GetIncentivesByTypeResponse",
  encode(message: GetIncentivesByTypeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetIncentivesByTypeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetIncentivesByTypeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetIncentivesByTypeResponse {
    const obj = createBaseGetIncentivesByTypeResponse();
    if (Array.isArray(object?.entries)) obj.entries = object.entries.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: GetIncentivesByTypeResponse): JsonSafe<GetIncentivesByTypeResponse> {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetIncentivesByTypeResponse>, I>>(
    object: I,
  ): GetIncentivesByTypeResponse {
    const message = createBaseGetIncentivesByTypeResponse();
    message.entries = object.entries?.map((e) => e) || [];
    return message;
  },
};
function createBaseGetAllIncentivesRequest(): GetAllIncentivesRequest {
  return {};
}
export const GetAllIncentivesRequest = {
  typeUrl: "/slinky.incentives.v1.GetAllIncentivesRequest",
  encode(_: GetAllIncentivesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAllIncentivesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllIncentivesRequest();
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
  fromJSON(_: any): GetAllIncentivesRequest {
    const obj = createBaseGetAllIncentivesRequest();
    return obj;
  },
  toJSON(_: GetAllIncentivesRequest): JsonSafe<GetAllIncentivesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAllIncentivesRequest>, I>>(_: I): GetAllIncentivesRequest {
    const message = createBaseGetAllIncentivesRequest();
    return message;
  },
};
function createBaseGetAllIncentivesResponse(): GetAllIncentivesResponse {
  return {
    registry: [],
  };
}
export const GetAllIncentivesResponse = {
  typeUrl: "/slinky.incentives.v1.GetAllIncentivesResponse",
  encode(message: GetAllIncentivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.registry) {
      IncentivesByType.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAllIncentivesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllIncentivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registry.push(IncentivesByType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetAllIncentivesResponse {
    const obj = createBaseGetAllIncentivesResponse();
    if (Array.isArray(object?.registry))
      obj.registry = object.registry.map((e: any) => IncentivesByType.fromJSON(e));
    return obj;
  },
  toJSON(message: GetAllIncentivesResponse): JsonSafe<GetAllIncentivesResponse> {
    const obj: any = {};
    if (message.registry) {
      obj.registry = message.registry.map((e) => (e ? IncentivesByType.toJSON(e) : undefined));
    } else {
      obj.registry = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAllIncentivesResponse>, I>>(
    object: I,
  ): GetAllIncentivesResponse {
    const message = createBaseGetAllIncentivesResponse();
    message.registry = object.registry?.map((e) => IncentivesByType.fromPartial(e)) || [];
    return message;
  },
};
/** Query is the query service for the x/incentives module. */
export interface Query {
  /**
   * GetIncentivesByType returns all incentives of a given type. If the type is
   * not registered with the module, an error is returned.
   */
  GetIncentivesByType(request: GetIncentivesByTypeRequest): Promise<GetIncentivesByTypeResponse>;
  /** GetAllIncentives returns all incentives. */
  GetAllIncentives(request?: GetAllIncentivesRequest): Promise<GetAllIncentivesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetIncentivesByType = this.GetIncentivesByType.bind(this);
    this.GetAllIncentives = this.GetAllIncentives.bind(this);
  }
  GetIncentivesByType(request: GetIncentivesByTypeRequest): Promise<GetIncentivesByTypeResponse> {
    const data = GetIncentivesByTypeRequest.encode(request).finish();
    const promise = this.rpc.request("slinky.incentives.v1.Query", "GetIncentivesByType", data);
    return promise.then((data) => GetIncentivesByTypeResponse.decode(new BinaryReader(data)));
  }
  GetAllIncentives(request: GetAllIncentivesRequest = {}): Promise<GetAllIncentivesResponse> {
    const data = GetAllIncentivesRequest.encode(request).finish();
    const promise = this.rpc.request("slinky.incentives.v1.Query", "GetAllIncentives", data);
    return promise.then((data) => GetAllIncentivesResponse.decode(new BinaryReader(data)));
  }
}
