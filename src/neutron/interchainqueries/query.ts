//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { RegisteredQuery } from "./genesis";
import { QueryResult } from "./tx";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export const protobufPackage = "neutron.interchainqueries";
/** Request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** Response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** Contains all parameters of the module. */
  params: Params;
}
/** Request type for the Query/RegisteredQueries RPC method. */
export interface QueryRegisteredQueriesRequest {
  /**
   * A list of owners of Interchain Queries. Query response will contain only Interchain Queries
   * that are owned by one of the owners in the list. If none, Interchain Queries are not filtered
   * out by the owner field.
   */
  owners: string[];
  /**
   * IBC connection ID. Query response will contain only Interchain Queries that have the same IBC
   * connection ID parameter. If none, Interchain Queries are not filtered out by the connection ID
   * field.
   */
  connectionId: string;
  /**
   * Pagination parameters for the request. Use values from previous response in the next request
   * in consecutive requests with paginated responses.
   */
  pagination?: PageRequest;
}
/** Response type for the Query/RegisteredQueries RPC method. */
export interface QueryRegisteredQueriesResponse {
  /** A list of registered Interchain Queries. */
  registeredQueries: RegisteredQuery[];
  /**
   * Current page information. Use values from previous response in the next request in consecutive
   * requests with paginated responses.
   */
  pagination?: PageResponse;
}
/** Request type for the Query/RegisteredQuery RPC method. */
export interface QueryRegisteredQueryRequest {
  /** ID of an Interchain Query. */
  queryId: bigint;
}
/** Response type for the Query/RegisteredQuery RPC method. */
export interface QueryRegisteredQueryResponse {
  /** A registered Interchain Query. */
  registeredQuery?: RegisteredQuery;
}
/** Request type for the Query/QueryResult RPC method. */
export interface QueryRegisteredQueryResultRequest {
  /** ID of an Interchain Query. */
  queryId: bigint;
}
/** Response type for the Query/QueryResult RPC method. */
export interface QueryRegisteredQueryResultResponse {
  /** The last successfully submitted result of an Interchain Query. */
  result?: QueryResult;
}
export interface Transaction {
  id: bigint;
  height: bigint;
  data: Uint8Array;
}
/** Request type for the Query/LastRemoteHeight RPC method. */
export interface QueryLastRemoteHeight {
  /**
   * Connection ID of an IBC connection to a remote chain. Determines the IBC client used in query
   * handling.
   */
  connectionId: string;
}
/** Response type for the Query/LastRemoteHeight RPC method. */
export interface QueryLastRemoteHeightResponse {
  /** The height of the chain that the IBC client is currently on. */
  height: bigint;
  /** The revision of the chain that the IBC client is currently on. */
  revision: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.interchainqueries.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/neutron.interchainqueries.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
};
function createBaseQueryRegisteredQueriesRequest(): QueryRegisteredQueriesRequest {
  return {
    owners: [],
    connectionId: "",
    pagination: undefined,
  };
}
export const QueryRegisteredQueriesRequest = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesRequest",
  encode(message: QueryRegisteredQueriesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.owners) {
      writer.uint32(10).string(v!);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueriesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owners.push(reader.string());
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRegisteredQueriesRequest {
    const obj = createBaseQueryRegisteredQueriesRequest();
    if (Array.isArray(object?.owners)) obj.owners = object.owners.map((e: any) => String(e));
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryRegisteredQueriesRequest): JsonSafe<QueryRegisteredQueriesRequest> {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map((e) => e);
    } else {
      obj.owners = [];
    }
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueriesRequest>, I>>(
    object: I,
  ): QueryRegisteredQueriesRequest {
    const message = createBaseQueryRegisteredQueriesRequest();
    message.owners = object.owners?.map((e) => e) || [];
    message.connectionId = object.connectionId ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryRegisteredQueriesRequestAmino): QueryRegisteredQueriesRequest {
    const message = createBaseQueryRegisteredQueriesRequest();
    message.owners = object.owners?.map((e) => e) || [];
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRegisteredQueriesRequest): QueryRegisteredQueriesRequestAmino {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map((e) => e);
    } else {
      obj.owners = message.owners;
    }
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueriesRequestAminoMsg): QueryRegisteredQueriesRequest {
    return QueryRegisteredQueriesRequest.fromAmino(object.value);
  },
};
function createBaseQueryRegisteredQueriesResponse(): QueryRegisteredQueriesResponse {
  return {
    registeredQueries: [],
    pagination: undefined,
  };
}
export const QueryRegisteredQueriesResponse = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueriesResponse",
  encode(
    message: QueryRegisteredQueriesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.registeredQueries) {
      RegisteredQuery.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueriesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registeredQueries.push(RegisteredQuery.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryRegisteredQueriesResponse {
    const obj = createBaseQueryRegisteredQueriesResponse();
    if (Array.isArray(object?.registeredQueries))
      obj.registeredQueries = object.registeredQueries.map((e: any) => RegisteredQuery.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryRegisteredQueriesResponse): JsonSafe<QueryRegisteredQueriesResponse> {
    const obj: any = {};
    if (message.registeredQueries) {
      obj.registeredQueries = message.registeredQueries.map((e) =>
        e ? RegisteredQuery.toJSON(e) : undefined,
      );
    } else {
      obj.registeredQueries = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueriesResponse>, I>>(
    object: I,
  ): QueryRegisteredQueriesResponse {
    const message = createBaseQueryRegisteredQueriesResponse();
    message.registeredQueries = object.registeredQueries?.map((e) => RegisteredQuery.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryRegisteredQueriesResponseAmino): QueryRegisteredQueriesResponse {
    const message = createBaseQueryRegisteredQueriesResponse();
    message.registeredQueries = object.registered_queries?.map((e) => RegisteredQuery.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRegisteredQueriesResponse): QueryRegisteredQueriesResponseAmino {
    const obj: any = {};
    if (message.registeredQueries) {
      obj.registered_queries = message.registeredQueries.map((e) =>
        e ? RegisteredQuery.toAmino(e) : undefined,
      );
    } else {
      obj.registered_queries = message.registeredQueries;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueriesResponseAminoMsg): QueryRegisteredQueriesResponse {
    return QueryRegisteredQueriesResponse.fromAmino(object.value);
  },
};
function createBaseQueryRegisteredQueryRequest(): QueryRegisteredQueryRequest {
  return {
    queryId: BigInt(0),
  };
}
export const QueryRegisteredQueryRequest = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryRequest",
  encode(message: QueryRegisteredQueryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.queryId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRegisteredQueryRequest {
    const obj = createBaseQueryRegisteredQueryRequest();
    if (isSet(object.queryId)) obj.queryId = BigInt(object.queryId.toString());
    return obj;
  },
  toJSON(message: QueryRegisteredQueryRequest): JsonSafe<QueryRegisteredQueryRequest> {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = (message.queryId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryRequest>, I>>(
    object: I,
  ): QueryRegisteredQueryRequest {
    const message = createBaseQueryRegisteredQueryRequest();
    if (object.queryId !== undefined && object.queryId !== null) {
      message.queryId = BigInt(object.queryId.toString());
    }
    return message;
  },
  fromAmino(object: QueryRegisteredQueryRequestAmino): QueryRegisteredQueryRequest {
    const message = createBaseQueryRegisteredQueryRequest();
    if (object.query_id !== undefined && object.query_id !== null) {
      message.queryId = BigInt(object.query_id);
    }
    return message;
  },
  toAmino(message: QueryRegisteredQueryRequest): QueryRegisteredQueryRequestAmino {
    const obj: any = {};
    obj.query_id = message.queryId !== BigInt(0) ? message.queryId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueryRequestAminoMsg): QueryRegisteredQueryRequest {
    return QueryRegisteredQueryRequest.fromAmino(object.value);
  },
};
function createBaseQueryRegisteredQueryResponse(): QueryRegisteredQueryResponse {
  return {
    registeredQuery: undefined,
  };
}
export const QueryRegisteredQueryResponse = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResponse",
  encode(message: QueryRegisteredQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.registeredQuery !== undefined) {
      RegisteredQuery.encode(message.registeredQuery, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.registeredQuery = RegisteredQuery.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRegisteredQueryResponse {
    const obj = createBaseQueryRegisteredQueryResponse();
    if (isSet(object.registeredQuery)) obj.registeredQuery = RegisteredQuery.fromJSON(object.registeredQuery);
    return obj;
  },
  toJSON(message: QueryRegisteredQueryResponse): JsonSafe<QueryRegisteredQueryResponse> {
    const obj: any = {};
    message.registeredQuery !== undefined &&
      (obj.registeredQuery = message.registeredQuery
        ? RegisteredQuery.toJSON(message.registeredQuery)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryResponse>, I>>(
    object: I,
  ): QueryRegisteredQueryResponse {
    const message = createBaseQueryRegisteredQueryResponse();
    if (object.registeredQuery !== undefined && object.registeredQuery !== null) {
      message.registeredQuery = RegisteredQuery.fromPartial(object.registeredQuery);
    }
    return message;
  },
  fromAmino(object: QueryRegisteredQueryResponseAmino): QueryRegisteredQueryResponse {
    const message = createBaseQueryRegisteredQueryResponse();
    if (object.registered_query !== undefined && object.registered_query !== null) {
      message.registeredQuery = RegisteredQuery.fromAmino(object.registered_query);
    }
    return message;
  },
  toAmino(message: QueryRegisteredQueryResponse): QueryRegisteredQueryResponseAmino {
    const obj: any = {};
    obj.registered_query = message.registeredQuery
      ? RegisteredQuery.toAmino(message.registeredQuery)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueryResponseAminoMsg): QueryRegisteredQueryResponse {
    return QueryRegisteredQueryResponse.fromAmino(object.value);
  },
};
function createBaseQueryRegisteredQueryResultRequest(): QueryRegisteredQueryResultRequest {
  return {
    queryId: BigInt(0),
  };
}
export const QueryRegisteredQueryResultRequest = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultRequest",
  encode(
    message: QueryRegisteredQueryResultRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.queryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.queryId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueryResultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueryResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRegisteredQueryResultRequest {
    const obj = createBaseQueryRegisteredQueryResultRequest();
    if (isSet(object.queryId)) obj.queryId = BigInt(object.queryId.toString());
    return obj;
  },
  toJSON(message: QueryRegisteredQueryResultRequest): JsonSafe<QueryRegisteredQueryResultRequest> {
    const obj: any = {};
    message.queryId !== undefined && (obj.queryId = (message.queryId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryResultRequest>, I>>(
    object: I,
  ): QueryRegisteredQueryResultRequest {
    const message = createBaseQueryRegisteredQueryResultRequest();
    if (object.queryId !== undefined && object.queryId !== null) {
      message.queryId = BigInt(object.queryId.toString());
    }
    return message;
  },
  fromAmino(object: QueryRegisteredQueryResultRequestAmino): QueryRegisteredQueryResultRequest {
    const message = createBaseQueryRegisteredQueryResultRequest();
    if (object.query_id !== undefined && object.query_id !== null) {
      message.queryId = BigInt(object.query_id);
    }
    return message;
  },
  toAmino(message: QueryRegisteredQueryResultRequest): QueryRegisteredQueryResultRequestAmino {
    const obj: any = {};
    obj.query_id = message.queryId !== BigInt(0) ? message.queryId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueryResultRequestAminoMsg): QueryRegisteredQueryResultRequest {
    return QueryRegisteredQueryResultRequest.fromAmino(object.value);
  },
};
function createBaseQueryRegisteredQueryResultResponse(): QueryRegisteredQueryResultResponse {
  return {
    result: undefined,
  };
}
export const QueryRegisteredQueryResultResponse = {
  typeUrl: "/neutron.interchainqueries.QueryRegisteredQueryResultResponse",
  encode(
    message: QueryRegisteredQueryResultResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.result !== undefined) {
      QueryResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredQueryResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredQueryResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = QueryResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRegisteredQueryResultResponse {
    const obj = createBaseQueryRegisteredQueryResultResponse();
    if (isSet(object.result)) obj.result = QueryResult.fromJSON(object.result);
    return obj;
  },
  toJSON(message: QueryRegisteredQueryResultResponse): JsonSafe<QueryRegisteredQueryResultResponse> {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = message.result ? QueryResult.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRegisteredQueryResultResponse>, I>>(
    object: I,
  ): QueryRegisteredQueryResultResponse {
    const message = createBaseQueryRegisteredQueryResultResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = QueryResult.fromPartial(object.result);
    }
    return message;
  },
  fromAmino(object: QueryRegisteredQueryResultResponseAmino): QueryRegisteredQueryResultResponse {
    const message = createBaseQueryRegisteredQueryResultResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = QueryResult.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: QueryRegisteredQueryResultResponse): QueryRegisteredQueryResultResponseAmino {
    const obj: any = {};
    obj.result = message.result ? QueryResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredQueryResultResponseAminoMsg): QueryRegisteredQueryResultResponse {
    return QueryRegisteredQueryResultResponse.fromAmino(object.value);
  },
};
function createBaseTransaction(): Transaction {
  return {
    id: BigInt(0),
    height: BigInt(0),
    data: new Uint8Array(),
  };
}
export const Transaction = {
  typeUrl: "/neutron.interchainqueries.Transaction",
  encode(message: Transaction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Transaction {
    const obj = createBaseTransaction();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: Transaction): JsonSafe<Transaction> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TransactionAmino): Transaction {
    const message = createBaseTransaction();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: Transaction): TransactionAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransactionAminoMsg): Transaction {
    return Transaction.fromAmino(object.value);
  },
};
function createBaseQueryLastRemoteHeight(): QueryLastRemoteHeight {
  return {
    connectionId: "",
  };
}
export const QueryLastRemoteHeight = {
  typeUrl: "/neutron.interchainqueries.QueryLastRemoteHeight",
  encode(message: QueryLastRemoteHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastRemoteHeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastRemoteHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastRemoteHeight {
    const obj = createBaseQueryLastRemoteHeight();
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    return obj;
  },
  toJSON(message: QueryLastRemoteHeight): JsonSafe<QueryLastRemoteHeight> {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLastRemoteHeight>, I>>(object: I): QueryLastRemoteHeight {
    const message = createBaseQueryLastRemoteHeight();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: QueryLastRemoteHeightAmino): QueryLastRemoteHeight {
    const message = createBaseQueryLastRemoteHeight();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message: QueryLastRemoteHeight): QueryLastRemoteHeightAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    return obj;
  },
  fromAminoMsg(object: QueryLastRemoteHeightAminoMsg): QueryLastRemoteHeight {
    return QueryLastRemoteHeight.fromAmino(object.value);
  },
};
function createBaseQueryLastRemoteHeightResponse(): QueryLastRemoteHeightResponse {
  return {
    height: BigInt(0),
    revision: BigInt(0),
  };
}
export const QueryLastRemoteHeightResponse = {
  typeUrl: "/neutron.interchainqueries.QueryLastRemoteHeightResponse",
  encode(message: QueryLastRemoteHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.revision !== BigInt(0)) {
      writer.uint32(16).uint64(message.revision);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLastRemoteHeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastRemoteHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.revision = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastRemoteHeightResponse {
    const obj = createBaseQueryLastRemoteHeightResponse();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.revision)) obj.revision = BigInt(object.revision.toString());
    return obj;
  },
  toJSON(message: QueryLastRemoteHeightResponse): JsonSafe<QueryLastRemoteHeightResponse> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.revision !== undefined && (obj.revision = (message.revision || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryLastRemoteHeightResponse>, I>>(
    object: I,
  ): QueryLastRemoteHeightResponse {
    const message = createBaseQueryLastRemoteHeightResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.revision !== undefined && object.revision !== null) {
      message.revision = BigInt(object.revision.toString());
    }
    return message;
  },
  fromAmino(object: QueryLastRemoteHeightResponseAmino): QueryLastRemoteHeightResponse {
    const message = createBaseQueryLastRemoteHeightResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.revision !== undefined && object.revision !== null) {
      message.revision = BigInt(object.revision);
    }
    return message;
  },
  toAmino(message: QueryLastRemoteHeightResponse): QueryLastRemoteHeightResponseAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.revision = message.revision !== BigInt(0) ? message.revision?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastRemoteHeightResponseAminoMsg): QueryLastRemoteHeightResponse {
    return QueryLastRemoteHeightResponse.fromAmino(object.value);
  },
};
