//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Permissions, GenesisAccountPermissions } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.circuit.v1";
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  address: string;
}
/** AccountResponse is the response type for the Query/Account RPC method. */
export interface AccountResponse {
  permission?: Permissions;
}
/** QueryAccountsRequest is the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
/** AccountsResponse is the response type for the Query/Accounts RPC method. */
export interface AccountsResponse {
  accounts: GenesisAccountPermissions[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryDisableListRequest is the request type for the Query/DisabledList RPC method. */
export interface QueryDisabledListRequest {}
/** DisabledListResponse is the response type for the Query/DisabledList RPC method. */
export interface DisabledListResponse {
  disabledList: string[];
}
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: "",
  };
}
export const QueryAccountRequest = {
  typeUrl: "/cosmos.circuit.v1.QueryAccountRequest",
  encode(message: QueryAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
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
  fromJSON(object: any): QueryAccountRequest {
    const obj = createBaseQueryAccountRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryAccountRequest): JsonSafe<QueryAccountRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountRequest>, I>>(object: I): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountRequest): QueryAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest {
    return QueryAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountRequest): QueryAccountRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountRequest",
      value: QueryAccountRequest.toAmino(message),
    };
  },
};
function createBaseAccountResponse(): AccountResponse {
  return {
    permission: undefined,
  };
}
export const AccountResponse = {
  typeUrl: "/cosmos.circuit.v1.AccountResponse",
  encode(message: AccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.permission !== undefined) {
      Permissions.encode(message.permission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = Permissions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountResponse {
    const obj = createBaseAccountResponse();
    if (isSet(object.permission)) obj.permission = Permissions.fromJSON(object.permission);
    return obj;
  },
  toJSON(message: AccountResponse): JsonSafe<AccountResponse> {
    const obj: any = {};
    message.permission !== undefined &&
      (obj.permission = message.permission ? Permissions.toJSON(message.permission) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccountResponse>, I>>(object: I): AccountResponse {
    const message = createBaseAccountResponse();
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = Permissions.fromPartial(object.permission);
    }
    return message;
  },
  fromAmino(object: AccountResponseAmino): AccountResponse {
    const message = createBaseAccountResponse();
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = Permissions.fromAmino(object.permission);
    }
    return message;
  },
  toAmino(message: AccountResponse): AccountResponseAmino {
    const obj: any = {};
    obj.permission = message.permission ? Permissions.toAmino(message.permission) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountResponseAminoMsg): AccountResponse {
    return AccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountResponse): AccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/AccountResponse",
      value: AccountResponse.toAmino(message),
    };
  },
};
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAccountsRequest = {
  typeUrl: "/cosmos.circuit.v1.QueryAccountsRequest",
  encode(message: QueryAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountsRequest {
    const obj = createBaseQueryAccountsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAccountsRequest): JsonSafe<QueryAccountsRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAccountsRequest>, I>>(object: I): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountsRequest): QueryAccountsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountsRequest",
      value: QueryAccountsRequest.toAmino(message),
    };
  },
};
function createBaseAccountsResponse(): AccountsResponse {
  return {
    accounts: [],
    pagination: undefined,
  };
}
export const AccountsResponse = {
  typeUrl: "/cosmos.circuit.v1.AccountsResponse",
  encode(message: AccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      GenesisAccountPermissions.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(GenesisAccountPermissions.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountsResponse {
    const obj = createBaseAccountsResponse();
    if (Array.isArray(object?.accounts))
      obj.accounts = object.accounts.map((e: any) => GenesisAccountPermissions.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: AccountsResponse): JsonSafe<AccountsResponse> {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => (e ? GenesisAccountPermissions.toJSON(e) : undefined));
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccountsResponse>, I>>(object: I): AccountsResponse {
    const message = createBaseAccountsResponse();
    message.accounts = object.accounts?.map((e) => GenesisAccountPermissions.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: AccountsResponseAmino): AccountsResponse {
    const message = createBaseAccountsResponse();
    message.accounts = object.accounts?.map((e) => GenesisAccountPermissions.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: AccountsResponse): AccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => (e ? GenesisAccountPermissions.toAmino(e) : undefined));
    } else {
      obj.accounts = message.accounts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: AccountsResponseAminoMsg): AccountsResponse {
    return AccountsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AccountsResponse): AccountsResponseAminoMsg {
    return {
      type: "cosmos-sdk/AccountsResponse",
      value: AccountsResponse.toAmino(message),
    };
  },
};
function createBaseQueryDisabledListRequest(): QueryDisabledListRequest {
  return {};
}
export const QueryDisabledListRequest = {
  typeUrl: "/cosmos.circuit.v1.QueryDisabledListRequest",
  encode(_: QueryDisabledListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDisabledListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDisabledListRequest();
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
  fromJSON(_: any): QueryDisabledListRequest {
    const obj = createBaseQueryDisabledListRequest();
    return obj;
  },
  toJSON(_: QueryDisabledListRequest): JsonSafe<QueryDisabledListRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryDisabledListRequest>, I>>(_: I): QueryDisabledListRequest {
    const message = createBaseQueryDisabledListRequest();
    return message;
  },
  fromAmino(_: QueryDisabledListRequestAmino): QueryDisabledListRequest {
    const message = createBaseQueryDisabledListRequest();
    return message;
  },
  toAmino(_: QueryDisabledListRequest): QueryDisabledListRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryDisabledListRequestAminoMsg): QueryDisabledListRequest {
    return QueryDisabledListRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDisabledListRequest): QueryDisabledListRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDisabledListRequest",
      value: QueryDisabledListRequest.toAmino(message),
    };
  },
};
function createBaseDisabledListResponse(): DisabledListResponse {
  return {
    disabledList: [],
  };
}
export const DisabledListResponse = {
  typeUrl: "/cosmos.circuit.v1.DisabledListResponse",
  encode(message: DisabledListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.disabledList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DisabledListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisabledListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disabledList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DisabledListResponse {
    const obj = createBaseDisabledListResponse();
    if (Array.isArray(object?.disabledList))
      obj.disabledList = object.disabledList.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: DisabledListResponse): JsonSafe<DisabledListResponse> {
    const obj: any = {};
    if (message.disabledList) {
      obj.disabledList = message.disabledList.map((e) => e);
    } else {
      obj.disabledList = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DisabledListResponse>, I>>(object: I): DisabledListResponse {
    const message = createBaseDisabledListResponse();
    message.disabledList = object.disabledList?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: DisabledListResponseAmino): DisabledListResponse {
    const message = createBaseDisabledListResponse();
    message.disabledList = object.disabled_list?.map((e) => e) || [];
    return message;
  },
  toAmino(message: DisabledListResponse): DisabledListResponseAmino {
    const obj: any = {};
    if (message.disabledList) {
      obj.disabled_list = message.disabledList.map((e) => e);
    } else {
      obj.disabled_list = message.disabledList;
    }
    return obj;
  },
  fromAminoMsg(object: DisabledListResponseAminoMsg): DisabledListResponse {
    return DisabledListResponse.fromAmino(object.value);
  },
  toAminoMsg(message: DisabledListResponse): DisabledListResponseAminoMsg {
    return {
      type: "cosmos-sdk/DisabledListResponse",
      value: DisabledListResponse.toAmino(message),
    };
  },
};
