//@ts-nocheck
/* eslint-disable */
import { Permissions } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.circuit.v1";
/** MsgAuthorizeCircuitBreaker defines the Msg/AuthorizeCircuitBreaker request type. */
export interface MsgAuthorizeCircuitBreaker {
  /**
   * granter is the granter of the circuit breaker permissions and must have
   * LEVEL_SUPER_ADMIN.
   */
  granter: string;
  /** grantee is the account authorized with the provided permissions. */
  grantee: string;
  /**
   * permissions are the circuit breaker permissions that the grantee receives.
   * These will overwrite any existing permissions. LEVEL_NONE_UNSPECIFIED can
   * be specified to revoke all permissions.
   */
  permissions?: Permissions;
}
/** MsgAuthorizeCircuitBreakerResponse defines the Msg/AuthorizeCircuitBreaker response type. */
export interface MsgAuthorizeCircuitBreakerResponse {
  success: boolean;
}
/** MsgTripCircuitBreaker defines the Msg/TripCircuitBreaker request type. */
export interface MsgTripCircuitBreaker {
  /** authority is the account authorized to trip the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of type URLs to immediately stop processing.
   * IF IT IS LEFT EMPTY, ALL MSG PROCESSING WILL STOP IMMEDIATELY.
   * This value is validated against the authority's permissions and if the
   * authority does not have permissions to trip the specified msg type URLs
   * (or all URLs), the operation will fail.
   */
  msgTypeUrls: string[];
}
/** MsgTripCircuitBreakerResponse defines the Msg/TripCircuitBreaker response type. */
export interface MsgTripCircuitBreakerResponse {
  success: boolean;
}
/** MsgResetCircuitBreaker defines the Msg/ResetCircuitBreaker request type. */
export interface MsgResetCircuitBreaker {
  /** authority is the account authorized to trip or reset the circuit breaker. */
  authority: string;
  /**
   * msg_type_urls specifies a list of Msg type URLs to resume processing. If
   * it is left empty all Msg processing for type URLs that the account is
   * authorized to trip will resume.
   */
  msgTypeUrls: string[];
}
/** MsgResetCircuitBreakerResponse defines the Msg/ResetCircuitBreaker response type. */
export interface MsgResetCircuitBreakerResponse {
  success: boolean;
}
function createBaseMsgAuthorizeCircuitBreaker(): MsgAuthorizeCircuitBreaker {
  return {
    granter: "",
    grantee: "",
    permissions: undefined,
  };
}
export const MsgAuthorizeCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker",
  encode(message: MsgAuthorizeCircuitBreaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.permissions !== undefined) {
      Permissions.encode(message.permissions, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAuthorizeCircuitBreaker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.permissions = Permissions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAuthorizeCircuitBreaker {
    const obj = createBaseMsgAuthorizeCircuitBreaker();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.permissions)) obj.permissions = Permissions.fromJSON(object.permissions);
    return obj;
  },
  toJSON(message: MsgAuthorizeCircuitBreaker): JsonSafe<MsgAuthorizeCircuitBreaker> {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.permissions !== undefined &&
      (obj.permissions = message.permissions ? Permissions.toJSON(message.permissions) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAuthorizeCircuitBreaker>, I>>(
    object: I,
  ): MsgAuthorizeCircuitBreaker {
    const message = createBaseMsgAuthorizeCircuitBreaker();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = Permissions.fromPartial(object.permissions);
    }
    return message;
  },
  fromAmino(object: MsgAuthorizeCircuitBreakerAmino): MsgAuthorizeCircuitBreaker {
    const message = createBaseMsgAuthorizeCircuitBreaker();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.permissions !== undefined && object.permissions !== null) {
      message.permissions = Permissions.fromAmino(object.permissions);
    }
    return message;
  },
  toAmino(message: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.permissions = message.permissions ? Permissions.toAmino(message.permissions) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgAuthorizeCircuitBreakerAminoMsg): MsgAuthorizeCircuitBreaker {
    return MsgAuthorizeCircuitBreaker.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAuthorizeCircuitBreaker): MsgAuthorizeCircuitBreakerAminoMsg {
    return {
      type: "cosmos-sdk/MsgAuthorizeCircuitBreaker",
      value: MsgAuthorizeCircuitBreaker.toAmino(message),
    };
  },
};
function createBaseMsgAuthorizeCircuitBreakerResponse(): MsgAuthorizeCircuitBreakerResponse {
  return {
    success: false,
  };
}
export const MsgAuthorizeCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse",
  encode(
    message: MsgAuthorizeCircuitBreakerResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAuthorizeCircuitBreakerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAuthorizeCircuitBreakerResponse {
    const obj = createBaseMsgAuthorizeCircuitBreakerResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgAuthorizeCircuitBreakerResponse): JsonSafe<MsgAuthorizeCircuitBreakerResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAuthorizeCircuitBreakerResponse>, I>>(
    object: I,
  ): MsgAuthorizeCircuitBreakerResponse {
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgAuthorizeCircuitBreakerResponseAmino): MsgAuthorizeCircuitBreakerResponse {
    const message = createBaseMsgAuthorizeCircuitBreakerResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgAuthorizeCircuitBreakerResponseAminoMsg): MsgAuthorizeCircuitBreakerResponse {
    return MsgAuthorizeCircuitBreakerResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAuthorizeCircuitBreakerResponse): MsgAuthorizeCircuitBreakerResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgAuthorizeCircuitBreakerResponse",
      value: MsgAuthorizeCircuitBreakerResponse.toAmino(message),
    };
  },
};
function createBaseMsgTripCircuitBreaker(): MsgTripCircuitBreaker {
  return {
    authority: "",
    msgTypeUrls: [],
  };
}
export const MsgTripCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker",
  encode(message: MsgTripCircuitBreaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.msgTypeUrls) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTripCircuitBreaker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTripCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTripCircuitBreaker {
    const obj = createBaseMsgTripCircuitBreaker();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (Array.isArray(object?.msgTypeUrls)) obj.msgTypeUrls = object.msgTypeUrls.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MsgTripCircuitBreaker): JsonSafe<MsgTripCircuitBreaker> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.msgTypeUrls) {
      obj.msgTypeUrls = message.msgTypeUrls.map((e) => e);
    } else {
      obj.msgTypeUrls = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTripCircuitBreaker>, I>>(object: I): MsgTripCircuitBreaker {
    const message = createBaseMsgTripCircuitBreaker();
    message.authority = object.authority ?? "";
    message.msgTypeUrls = object.msgTypeUrls?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: MsgTripCircuitBreakerAmino): MsgTripCircuitBreaker {
    const message = createBaseMsgTripCircuitBreaker();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.msgTypeUrls = object.msg_type_urls?.map((e) => e) || [];
    return message;
  },
  toAmino(message: MsgTripCircuitBreaker): MsgTripCircuitBreakerAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map((e) => e);
    } else {
      obj.msg_type_urls = message.msgTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object: MsgTripCircuitBreakerAminoMsg): MsgTripCircuitBreaker {
    return MsgTripCircuitBreaker.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTripCircuitBreaker): MsgTripCircuitBreakerAminoMsg {
    return {
      type: "cosmos-sdk/MsgTripCircuitBreaker",
      value: MsgTripCircuitBreaker.toAmino(message),
    };
  },
};
function createBaseMsgTripCircuitBreakerResponse(): MsgTripCircuitBreakerResponse {
  return {
    success: false,
  };
}
export const MsgTripCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse",
  encode(message: MsgTripCircuitBreakerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTripCircuitBreakerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTripCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTripCircuitBreakerResponse {
    const obj = createBaseMsgTripCircuitBreakerResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgTripCircuitBreakerResponse): JsonSafe<MsgTripCircuitBreakerResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTripCircuitBreakerResponse>, I>>(
    object: I,
  ): MsgTripCircuitBreakerResponse {
    const message = createBaseMsgTripCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgTripCircuitBreakerResponseAmino): MsgTripCircuitBreakerResponse {
    const message = createBaseMsgTripCircuitBreakerResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgTripCircuitBreakerResponseAminoMsg): MsgTripCircuitBreakerResponse {
    return MsgTripCircuitBreakerResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTripCircuitBreakerResponse): MsgTripCircuitBreakerResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTripCircuitBreakerResponse",
      value: MsgTripCircuitBreakerResponse.toAmino(message),
    };
  },
};
function createBaseMsgResetCircuitBreaker(): MsgResetCircuitBreaker {
  return {
    authority: "",
    msgTypeUrls: [],
  };
}
export const MsgResetCircuitBreaker = {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker",
  encode(message: MsgResetCircuitBreaker, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.msgTypeUrls) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResetCircuitBreaker {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetCircuitBreaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 3:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgResetCircuitBreaker {
    const obj = createBaseMsgResetCircuitBreaker();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (Array.isArray(object?.msgTypeUrls)) obj.msgTypeUrls = object.msgTypeUrls.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MsgResetCircuitBreaker): JsonSafe<MsgResetCircuitBreaker> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.msgTypeUrls) {
      obj.msgTypeUrls = message.msgTypeUrls.map((e) => e);
    } else {
      obj.msgTypeUrls = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgResetCircuitBreaker>, I>>(object: I): MsgResetCircuitBreaker {
    const message = createBaseMsgResetCircuitBreaker();
    message.authority = object.authority ?? "";
    message.msgTypeUrls = object.msgTypeUrls?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: MsgResetCircuitBreakerAmino): MsgResetCircuitBreaker {
    const message = createBaseMsgResetCircuitBreaker();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.msgTypeUrls = object.msg_type_urls?.map((e) => e) || [];
    return message;
  },
  toAmino(message: MsgResetCircuitBreaker): MsgResetCircuitBreakerAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map((e) => e);
    } else {
      obj.msg_type_urls = message.msgTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object: MsgResetCircuitBreakerAminoMsg): MsgResetCircuitBreaker {
    return MsgResetCircuitBreaker.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResetCircuitBreaker): MsgResetCircuitBreakerAminoMsg {
    return {
      type: "cosmos-sdk/MsgResetCircuitBreaker",
      value: MsgResetCircuitBreaker.toAmino(message),
    };
  },
};
function createBaseMsgResetCircuitBreakerResponse(): MsgResetCircuitBreakerResponse {
  return {
    success: false,
  };
}
export const MsgResetCircuitBreakerResponse = {
  typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse",
  encode(
    message: MsgResetCircuitBreakerResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgResetCircuitBreakerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgResetCircuitBreakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgResetCircuitBreakerResponse {
    const obj = createBaseMsgResetCircuitBreakerResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: MsgResetCircuitBreakerResponse): JsonSafe<MsgResetCircuitBreakerResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgResetCircuitBreakerResponse>, I>>(
    object: I,
  ): MsgResetCircuitBreakerResponse {
    const message = createBaseMsgResetCircuitBreakerResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: MsgResetCircuitBreakerResponseAmino): MsgResetCircuitBreakerResponse {
    const message = createBaseMsgResetCircuitBreakerResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: MsgResetCircuitBreakerResponseAminoMsg): MsgResetCircuitBreakerResponse {
    return MsgResetCircuitBreakerResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgResetCircuitBreakerResponse): MsgResetCircuitBreakerResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgResetCircuitBreakerResponse",
      value: MsgResetCircuitBreakerResponse.toAmino(message),
    };
  },
};
