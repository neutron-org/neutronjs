//@ts-nocheck
/* eslint-disable */
import { Plan, ModuleVersion } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.upgrade.v1beta1";
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
  /** plan is the current upgrade plan. */
  plan?: Plan;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
  /** name is the name of the applied plan to query for. */
  name: string;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
  /** height is the block height at which the plan was applied. */
  height: bigint;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateRequest {
  /**
   * last height of the current chain must be sent in request
   * as this is the height under which next consensus state is stored
   */
  lastHeight: bigint;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateResponse {
  /** Since: cosmos-sdk 0.43 */
  upgradedConsensusState: Uint8Array;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequest {
  /**
   * module_name is a field to query a specific module
   * consensus version from state. Leaving this empty will
   * fetch the full list of module versions from state
   */
  moduleName: string;
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponse {
  /** module_versions is a list of module names with their consensus versions. */
  moduleVersions: ModuleVersion[];
}
/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequest {}
/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponse {
  address: string;
}
function createBaseQueryCurrentPlanRequest(): QueryCurrentPlanRequest {
  return {};
}
export const QueryCurrentPlanRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest",
  encode(_: QueryCurrentPlanRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentPlanRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanRequest();
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
  fromJSON(_: any): QueryCurrentPlanRequest {
    const obj = createBaseQueryCurrentPlanRequest();
    return obj;
  },
  toJSON(_: QueryCurrentPlanRequest): JsonSafe<QueryCurrentPlanRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCurrentPlanRequest>, I>>(_: I): QueryCurrentPlanRequest {
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  },
  fromAmino(_: QueryCurrentPlanRequestAmino): QueryCurrentPlanRequest {
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  },
  toAmino(_: QueryCurrentPlanRequest): QueryCurrentPlanRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentPlanRequestAminoMsg): QueryCurrentPlanRequest {
    return QueryCurrentPlanRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCurrentPlanRequest): QueryCurrentPlanRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCurrentPlanRequest",
      value: QueryCurrentPlanRequest.toAmino(message),
    };
  },
};
function createBaseQueryCurrentPlanResponse(): QueryCurrentPlanResponse {
  return {
    plan: undefined,
  };
}
export const QueryCurrentPlanResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse",
  encode(message: QueryCurrentPlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentPlanResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentPlanResponse {
    const obj = createBaseQueryCurrentPlanResponse();
    if (isSet(object.plan)) obj.plan = Plan.fromJSON(object.plan);
    return obj;
  },
  toJSON(message: QueryCurrentPlanResponse): JsonSafe<QueryCurrentPlanResponse> {
    const obj: any = {};
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCurrentPlanResponse>, I>>(
    object: I,
  ): QueryCurrentPlanResponse {
    const message = createBaseQueryCurrentPlanResponse();
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    }
    return message;
  },
  fromAmino(object: QueryCurrentPlanResponseAmino): QueryCurrentPlanResponse {
    const message = createBaseQueryCurrentPlanResponse();
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseAmino {
    const obj: any = {};
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentPlanResponseAminoMsg): QueryCurrentPlanResponse {
    return QueryCurrentPlanResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCurrentPlanResponse",
      value: QueryCurrentPlanResponse.toAmino(message),
    };
  },
};
function createBaseQueryAppliedPlanRequest(): QueryAppliedPlanRequest {
  return {
    name: "",
  };
}
export const QueryAppliedPlanRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest",
  encode(message: QueryAppliedPlanRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAppliedPlanRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAppliedPlanRequest {
    const obj = createBaseQueryAppliedPlanRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: QueryAppliedPlanRequest): JsonSafe<QueryAppliedPlanRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAppliedPlanRequest>, I>>(object: I): QueryAppliedPlanRequest {
    const message = createBaseQueryAppliedPlanRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryAppliedPlanRequestAmino): QueryAppliedPlanRequest {
    const message = createBaseQueryAppliedPlanRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryAppliedPlanRequestAminoMsg): QueryAppliedPlanRequest {
    return QueryAppliedPlanRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAppliedPlanRequest",
      value: QueryAppliedPlanRequest.toAmino(message),
    };
  },
};
function createBaseQueryAppliedPlanResponse(): QueryAppliedPlanResponse {
  return {
    height: BigInt(0),
  };
}
export const QueryAppliedPlanResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse",
  encode(message: QueryAppliedPlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAppliedPlanResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAppliedPlanResponse {
    const obj = createBaseQueryAppliedPlanResponse();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: QueryAppliedPlanResponse): JsonSafe<QueryAppliedPlanResponse> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAppliedPlanResponse>, I>>(
    object: I,
  ): QueryAppliedPlanResponse {
    const message = createBaseQueryAppliedPlanResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
  fromAmino(object: QueryAppliedPlanResponseAmino): QueryAppliedPlanResponse {
    const message = createBaseQueryAppliedPlanResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAppliedPlanResponseAminoMsg): QueryAppliedPlanResponse {
    return QueryAppliedPlanResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAppliedPlanResponse",
      value: QueryAppliedPlanResponse.toAmino(message),
    };
  },
};
function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return {
    lastHeight: BigInt(0),
  };
}
export const QueryUpgradedConsensusStateRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest",
  encode(
    message: QueryUpgradedConsensusStateRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.lastHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.lastHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedConsensusStateRequest {
    const obj = createBaseQueryUpgradedConsensusStateRequest();
    if (isSet(object.lastHeight)) obj.lastHeight = BigInt(object.lastHeight.toString());
    return obj;
  },
  toJSON(message: QueryUpgradedConsensusStateRequest): JsonSafe<QueryUpgradedConsensusStateRequest> {
    const obj: any = {};
    message.lastHeight !== undefined && (obj.lastHeight = (message.lastHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUpgradedConsensusStateRequest>, I>>(
    object: I,
  ): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    if (object.lastHeight !== undefined && object.lastHeight !== null) {
      message.lastHeight = BigInt(object.lastHeight.toString());
    }
    return message;
  },
  fromAmino(object: QueryUpgradedConsensusStateRequestAmino): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    if (object.last_height !== undefined && object.last_height !== null) {
      message.lastHeight = BigInt(object.last_height);
    }
    return message;
  },
  toAmino(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAmino {
    const obj: any = {};
    obj.last_height = message.lastHeight !== BigInt(0) ? message.lastHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedConsensusStateRequestAminoMsg): QueryUpgradedConsensusStateRequest {
    return QueryUpgradedConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
      value: QueryUpgradedConsensusStateRequest.toAmino(message),
    };
  },
};
function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    upgradedConsensusState: new Uint8Array(),
  };
}
export const QueryUpgradedConsensusStateResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
  encode(
    message: QueryUpgradedConsensusStateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.upgradedConsensusState.length !== 0) {
      writer.uint32(18).bytes(message.upgradedConsensusState);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.upgradedConsensusState = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    const obj = createBaseQueryUpgradedConsensusStateResponse();
    if (isSet(object.upgradedConsensusState))
      obj.upgradedConsensusState = bytesFromBase64(object.upgradedConsensusState);
    return obj;
  },
  toJSON(message: QueryUpgradedConsensusStateResponse): JsonSafe<QueryUpgradedConsensusStateResponse> {
    const obj: any = {};
    message.upgradedConsensusState !== undefined &&
      (obj.upgradedConsensusState = base64FromBytes(
        message.upgradedConsensusState !== undefined ? message.upgradedConsensusState : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUpgradedConsensusStateResponse>, I>>(
    object: I,
  ): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryUpgradedConsensusStateResponseAmino): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    if (object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null) {
      message.upgradedConsensusState = bytesFromBase64(object.upgraded_consensus_state);
    }
    return message;
  },
  toAmino(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAmino {
    const obj: any = {};
    obj.upgraded_consensus_state = message.upgradedConsensusState
      ? base64FromBytes(message.upgradedConsensusState)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedConsensusStateResponseAminoMsg): QueryUpgradedConsensusStateResponse {
    return QueryUpgradedConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
      value: QueryUpgradedConsensusStateResponse.toAmino(message),
    };
  },
};
function createBaseQueryModuleVersionsRequest(): QueryModuleVersionsRequest {
  return {
    moduleName: "",
  };
}
export const QueryModuleVersionsRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest",
  encode(message: QueryModuleVersionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleVersionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleVersionsRequest {
    const obj = createBaseQueryModuleVersionsRequest();
    if (isSet(object.moduleName)) obj.moduleName = String(object.moduleName);
    return obj;
  },
  toJSON(message: QueryModuleVersionsRequest): JsonSafe<QueryModuleVersionsRequest> {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryModuleVersionsRequest>, I>>(
    object: I,
  ): QueryModuleVersionsRequest {
    const message = createBaseQueryModuleVersionsRequest();
    message.moduleName = object.moduleName ?? "";
    return message;
  },
  fromAmino(object: QueryModuleVersionsRequestAmino): QueryModuleVersionsRequest {
    const message = createBaseQueryModuleVersionsRequest();
    if (object.module_name !== undefined && object.module_name !== null) {
      message.moduleName = object.module_name;
    }
    return message;
  },
  toAmino(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestAmino {
    const obj: any = {};
    obj.module_name = message.moduleName === "" ? undefined : message.moduleName;
    return obj;
  },
  fromAminoMsg(object: QueryModuleVersionsRequestAminoMsg): QueryModuleVersionsRequest {
    return QueryModuleVersionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryModuleVersionsRequest",
      value: QueryModuleVersionsRequest.toAmino(message),
    };
  },
};
function createBaseQueryModuleVersionsResponse(): QueryModuleVersionsResponse {
  return {
    moduleVersions: [],
  };
}
export const QueryModuleVersionsResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse",
  encode(message: QueryModuleVersionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.moduleVersions) {
      ModuleVersion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleVersionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleVersions.push(ModuleVersion.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleVersionsResponse {
    const obj = createBaseQueryModuleVersionsResponse();
    if (Array.isArray(object?.moduleVersions))
      obj.moduleVersions = object.moduleVersions.map((e: any) => ModuleVersion.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryModuleVersionsResponse): JsonSafe<QueryModuleVersionsResponse> {
    const obj: any = {};
    if (message.moduleVersions) {
      obj.moduleVersions = message.moduleVersions.map((e) => (e ? ModuleVersion.toJSON(e) : undefined));
    } else {
      obj.moduleVersions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryModuleVersionsResponse>, I>>(
    object: I,
  ): QueryModuleVersionsResponse {
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = object.moduleVersions?.map((e) => ModuleVersion.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryModuleVersionsResponseAmino): QueryModuleVersionsResponse {
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = object.module_versions?.map((e) => ModuleVersion.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseAmino {
    const obj: any = {};
    if (message.moduleVersions) {
      obj.module_versions = message.moduleVersions.map((e) => (e ? ModuleVersion.toAmino(e) : undefined));
    } else {
      obj.module_versions = message.moduleVersions;
    }
    return obj;
  },
  fromAminoMsg(object: QueryModuleVersionsResponseAminoMsg): QueryModuleVersionsResponse {
    return QueryModuleVersionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryModuleVersionsResponse",
      value: QueryModuleVersionsResponse.toAmino(message),
    };
  },
};
function createBaseQueryAuthorityRequest(): QueryAuthorityRequest {
  return {};
}
export const QueryAuthorityRequest = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest",
  encode(_: QueryAuthorityRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthorityRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityRequest();
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
  fromJSON(_: any): QueryAuthorityRequest {
    const obj = createBaseQueryAuthorityRequest();
    return obj;
  },
  toJSON(_: QueryAuthorityRequest): JsonSafe<QueryAuthorityRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuthorityRequest>, I>>(_: I): QueryAuthorityRequest {
    const message = createBaseQueryAuthorityRequest();
    return message;
  },
  fromAmino(_: QueryAuthorityRequestAmino): QueryAuthorityRequest {
    const message = createBaseQueryAuthorityRequest();
    return message;
  },
  toAmino(_: QueryAuthorityRequest): QueryAuthorityRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAuthorityRequestAminoMsg): QueryAuthorityRequest {
    return QueryAuthorityRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAuthorityRequest): QueryAuthorityRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAuthorityRequest",
      value: QueryAuthorityRequest.toAmino(message),
    };
  },
};
function createBaseQueryAuthorityResponse(): QueryAuthorityResponse {
  return {
    address: "",
  };
}
export const QueryAuthorityResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse",
  encode(message: QueryAuthorityResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthorityResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuthorityResponse {
    const obj = createBaseQueryAuthorityResponse();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryAuthorityResponse): JsonSafe<QueryAuthorityResponse> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuthorityResponse>, I>>(object: I): QueryAuthorityResponse {
    const message = createBaseQueryAuthorityResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAuthorityResponseAmino): QueryAuthorityResponse {
    const message = createBaseQueryAuthorityResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAuthorityResponse): QueryAuthorityResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAuthorityResponseAminoMsg): QueryAuthorityResponse {
    return QueryAuthorityResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAuthorityResponse): QueryAuthorityResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAuthorityResponse",
      value: QueryAuthorityResponse.toAmino(message),
    };
  },
};
