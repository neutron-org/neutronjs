//@ts-nocheck
/* eslint-disable */
import { Proposal as Proposal1 } from "../../gov/v1/gov.js";
import { Proposal as Proposal2 } from "../../gov/v1beta1/gov.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export const protobufPackage = "cosmos.adminmodule.adminmodule";
/**
 * @name QueryAdminsRequest
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryAdminsRequest
 */
export interface QueryAdminsRequest {}
/**
 * @name QueryAdminsResponse
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryAdminsResponse
 */
export interface QueryAdminsResponse {
  admins: string[];
}
/**
 * @name QueryArchivedProposalsRequest
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryArchivedProposalsRequest
 */
export interface QueryArchivedProposalsRequest {}
/**
 * @name QueryArchivedProposalsLegacyRequest
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryArchivedProposalsLegacyRequest
 */
export interface QueryArchivedProposalsLegacyRequest {}
/**
 * @name QueryProposalsResponse
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryProposalsResponse
 */
export interface QueryProposalsResponse {
  proposals: Proposal1[];
}
/**
 * @name QueryArchivedProposalsResponse
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryArchivedProposalsResponse
 */
export interface QueryArchivedProposalsResponse {
  proposals: Proposal1[];
}
/**
 * @name QueryArchivedProposalsLegacyResponse
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryArchivedProposalsLegacyResponse
 */
export interface QueryArchivedProposalsLegacyResponse {
  proposalsLegacy: Proposal2[];
}
function createBaseQueryAdminsRequest(): QueryAdminsRequest {
  return {};
}
/**
 * @name QueryAdminsRequest
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryAdminsRequest
 */
export const QueryAdminsRequest = {
  typeUrl: "/cosmos.adminmodule.adminmodule.QueryAdminsRequest",
  encode(_: QueryAdminsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAdminsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminsRequest();
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
  fromJSON(_: any): QueryAdminsRequest {
    const obj = createBaseQueryAdminsRequest();
    return obj;
  },
  toJSON(_: QueryAdminsRequest): JsonSafe<QueryAdminsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAdminsRequest>, I>>(_: I): QueryAdminsRequest {
    const message = createBaseQueryAdminsRequest();
    return message;
  },
};
function createBaseQueryAdminsResponse(): QueryAdminsResponse {
  return {
    admins: [],
  };
}
/**
 * @name QueryAdminsResponse
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryAdminsResponse
 */
export const QueryAdminsResponse = {
  typeUrl: "/cosmos.adminmodule.adminmodule.QueryAdminsResponse",
  encode(message: QueryAdminsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.admins) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAdminsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAdminsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.admins.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAdminsResponse {
    const obj = createBaseQueryAdminsResponse();
    if (Array.isArray(object?.admins)) obj.admins = object.admins.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryAdminsResponse): JsonSafe<QueryAdminsResponse> {
    const obj: any = {};
    if (message.admins) {
      obj.admins = message.admins.map((e) => e);
    } else {
      obj.admins = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAdminsResponse>, I>>(object: I): QueryAdminsResponse {
    const message = createBaseQueryAdminsResponse();
    message.admins = object.admins?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryArchivedProposalsRequest(): QueryArchivedProposalsRequest {
  return {};
}
/**
 * @name QueryArchivedProposalsRequest
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryArchivedProposalsRequest
 */
export const QueryArchivedProposalsRequest = {
  typeUrl: "/cosmos.adminmodule.adminmodule.QueryArchivedProposalsRequest",
  encode(_: QueryArchivedProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArchivedProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArchivedProposalsRequest();
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
  fromJSON(_: any): QueryArchivedProposalsRequest {
    const obj = createBaseQueryArchivedProposalsRequest();
    return obj;
  },
  toJSON(_: QueryArchivedProposalsRequest): JsonSafe<QueryArchivedProposalsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryArchivedProposalsRequest>, I>>(
    _: I,
  ): QueryArchivedProposalsRequest {
    const message = createBaseQueryArchivedProposalsRequest();
    return message;
  },
};
function createBaseQueryArchivedProposalsLegacyRequest(): QueryArchivedProposalsLegacyRequest {
  return {};
}
/**
 * @name QueryArchivedProposalsLegacyRequest
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryArchivedProposalsLegacyRequest
 */
export const QueryArchivedProposalsLegacyRequest = {
  typeUrl: "/cosmos.adminmodule.adminmodule.QueryArchivedProposalsLegacyRequest",
  encode(_: QueryArchivedProposalsLegacyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArchivedProposalsLegacyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArchivedProposalsLegacyRequest();
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
  fromJSON(_: any): QueryArchivedProposalsLegacyRequest {
    const obj = createBaseQueryArchivedProposalsLegacyRequest();
    return obj;
  },
  toJSON(_: QueryArchivedProposalsLegacyRequest): JsonSafe<QueryArchivedProposalsLegacyRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryArchivedProposalsLegacyRequest>, I>>(
    _: I,
  ): QueryArchivedProposalsLegacyRequest {
    const message = createBaseQueryArchivedProposalsLegacyRequest();
    return message;
  },
};
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
  };
}
/**
 * @name QueryProposalsResponse
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryProposalsResponse
 */
export const QueryProposalsResponse = {
  typeUrl: "/cosmos.adminmodule.adminmodule.QueryProposalsResponse",
  encode(message: QueryProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal1.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsResponse {
    const obj = createBaseQueryProposalsResponse();
    if (Array.isArray(object?.proposals))
      obj.proposals = object.proposals.map((e: any) => Proposal1.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryProposalsResponse): JsonSafe<QueryProposalsResponse> {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => (e ? Proposal1.toJSON(e) : undefined));
    } else {
      obj.proposals = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposalsResponse>, I>>(object: I): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map((e) => Proposal1.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryArchivedProposalsResponse(): QueryArchivedProposalsResponse {
  return {
    proposals: [],
  };
}
/**
 * @name QueryArchivedProposalsResponse
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryArchivedProposalsResponse
 */
export const QueryArchivedProposalsResponse = {
  typeUrl: "/cosmos.adminmodule.adminmodule.QueryArchivedProposalsResponse",
  encode(
    message: QueryArchivedProposalsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.proposals) {
      Proposal1.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArchivedProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArchivedProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal1.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryArchivedProposalsResponse {
    const obj = createBaseQueryArchivedProposalsResponse();
    if (Array.isArray(object?.proposals))
      obj.proposals = object.proposals.map((e: any) => Proposal1.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryArchivedProposalsResponse): JsonSafe<QueryArchivedProposalsResponse> {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => (e ? Proposal1.toJSON(e) : undefined));
    } else {
      obj.proposals = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryArchivedProposalsResponse>, I>>(
    object: I,
  ): QueryArchivedProposalsResponse {
    const message = createBaseQueryArchivedProposalsResponse();
    message.proposals = object.proposals?.map((e) => Proposal1.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryArchivedProposalsLegacyResponse(): QueryArchivedProposalsLegacyResponse {
  return {
    proposalsLegacy: [],
  };
}
/**
 * @name QueryArchivedProposalsLegacyResponse
 * @package cosmos.adminmodule.adminmodule
 * @see proto type: cosmos.adminmodule.adminmodule.QueryArchivedProposalsLegacyResponse
 */
export const QueryArchivedProposalsLegacyResponse = {
  typeUrl: "/cosmos.adminmodule.adminmodule.QueryArchivedProposalsLegacyResponse",
  encode(
    message: QueryArchivedProposalsLegacyResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.proposalsLegacy) {
      Proposal2.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryArchivedProposalsLegacyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArchivedProposalsLegacyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalsLegacy.push(Proposal2.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryArchivedProposalsLegacyResponse {
    const obj = createBaseQueryArchivedProposalsLegacyResponse();
    if (Array.isArray(object?.proposalsLegacy))
      obj.proposalsLegacy = object.proposalsLegacy.map((e: any) => Proposal2.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryArchivedProposalsLegacyResponse): JsonSafe<QueryArchivedProposalsLegacyResponse> {
    const obj: any = {};
    if (message.proposalsLegacy) {
      obj.proposalsLegacy = message.proposalsLegacy.map((e) => (e ? Proposal2.toJSON(e) : undefined));
    } else {
      obj.proposalsLegacy = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryArchivedProposalsLegacyResponse>, I>>(
    object: I,
  ): QueryArchivedProposalsLegacyResponse {
    const message = createBaseQueryArchivedProposalsLegacyResponse();
    message.proposalsLegacy = object.proposalsLegacy?.map((e) => Proposal2.fromPartial(e)) || [];
    return message;
  },
};
