/* eslint-disable */
import { Params } from "./params";
import { State, ValidatorInfo } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "neutron.revenue";
/** Request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** Response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** Contains all parameters of the module. */
  params: Params;
}
/** Request type for the Query/State RPC method. */
export interface QueryStateRequest {}
/** Response type for the Query/State RPC method. */
export interface QueryStateResponse {
  /** Contains the current state of the revenue module. */
  state: State;
}
/** Request type for the Query/ValidatorStats RPC method. */
export interface QueryValidatorStatsRequest {
  /** The validator's consensus node address. */
  consensusAddress: string;
}
/** Response type for the Query/ValidatorStats RPC method. */
export interface QueryValidatorStatsResponse {
  /** Contains the validator's information. */
  stats: ValidatorStats;
}
/** Request type for the Query/ValidatorsStats RPC method. */
export interface QueryValidatorsStatsRequest {}
/** Response type for the Query/ValidatorsStats RPC method. */
export interface QueryValidatorsStatsResponse {
  /** Contains the validators' information. */
  stats: ValidatorStats[];
}
/** Contains validator's info and their performance rating. */
export interface ValidatorStats {
  /** Contains the validator's information. */
  validatorInfo: ValidatorInfo;
  /** The validator's performance rating. Represented as a decimal value. */
  performanceRating: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/neutron.revenue.QueryParamsRequest",
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
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/neutron.revenue.QueryParamsResponse",
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
};
function createBaseQueryStateRequest(): QueryStateRequest {
  return {};
}
export const QueryStateRequest = {
  typeUrl: "/neutron.revenue.QueryStateRequest",
  encode(_: QueryStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStateRequest();
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
  fromJSON(_: any): QueryStateRequest {
    const obj = createBaseQueryStateRequest();
    return obj;
  },
  toJSON(_: QueryStateRequest): JsonSafe<QueryStateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStateRequest>, I>>(_: I): QueryStateRequest {
    const message = createBaseQueryStateRequest();
    return message;
  },
};
function createBaseQueryStateResponse(): QueryStateResponse {
  return {
    state: State.fromPartial({}),
  };
}
export const QueryStateResponse = {
  typeUrl: "/neutron.revenue.QueryStateResponse",
  encode(message: QueryStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = State.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryStateResponse {
    const obj = createBaseQueryStateResponse();
    if (isSet(object.state)) obj.state = State.fromJSON(object.state);
    return obj;
  },
  toJSON(message: QueryStateResponse): JsonSafe<QueryStateResponse> {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? State.toJSON(message.state) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryStateResponse>, I>>(object: I): QueryStateResponse {
    const message = createBaseQueryStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    }
    return message;
  },
};
function createBaseQueryValidatorStatsRequest(): QueryValidatorStatsRequest {
  return {
    consensusAddress: "",
  };
}
export const QueryValidatorStatsRequest = {
  typeUrl: "/neutron.revenue.QueryValidatorStatsRequest",
  encode(message: QueryValidatorStatsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensusAddress !== "") {
      writer.uint32(10).string(message.consensusAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorStatsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorStatsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorStatsRequest {
    const obj = createBaseQueryValidatorStatsRequest();
    if (isSet(object.consensusAddress)) obj.consensusAddress = String(object.consensusAddress);
    return obj;
  },
  toJSON(message: QueryValidatorStatsRequest): JsonSafe<QueryValidatorStatsRequest> {
    const obj: any = {};
    message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorStatsRequest>, I>>(
    object: I,
  ): QueryValidatorStatsRequest {
    const message = createBaseQueryValidatorStatsRequest();
    message.consensusAddress = object.consensusAddress ?? "";
    return message;
  },
};
function createBaseQueryValidatorStatsResponse(): QueryValidatorStatsResponse {
  return {
    stats: ValidatorStats.fromPartial({}),
  };
}
export const QueryValidatorStatsResponse = {
  typeUrl: "/neutron.revenue.QueryValidatorStatsResponse",
  encode(message: QueryValidatorStatsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stats !== undefined) {
      ValidatorStats.encode(message.stats, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorStatsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stats = ValidatorStats.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorStatsResponse {
    const obj = createBaseQueryValidatorStatsResponse();
    if (isSet(object.stats)) obj.stats = ValidatorStats.fromJSON(object.stats);
    return obj;
  },
  toJSON(message: QueryValidatorStatsResponse): JsonSafe<QueryValidatorStatsResponse> {
    const obj: any = {};
    message.stats !== undefined &&
      (obj.stats = message.stats ? ValidatorStats.toJSON(message.stats) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorStatsResponse>, I>>(
    object: I,
  ): QueryValidatorStatsResponse {
    const message = createBaseQueryValidatorStatsResponse();
    if (object.stats !== undefined && object.stats !== null) {
      message.stats = ValidatorStats.fromPartial(object.stats);
    }
    return message;
  },
};
function createBaseQueryValidatorsStatsRequest(): QueryValidatorsStatsRequest {
  return {};
}
export const QueryValidatorsStatsRequest = {
  typeUrl: "/neutron.revenue.QueryValidatorsStatsRequest",
  encode(_: QueryValidatorsStatsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsStatsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsStatsRequest();
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
  fromJSON(_: any): QueryValidatorsStatsRequest {
    const obj = createBaseQueryValidatorsStatsRequest();
    return obj;
  },
  toJSON(_: QueryValidatorsStatsRequest): JsonSafe<QueryValidatorsStatsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorsStatsRequest>, I>>(
    _: I,
  ): QueryValidatorsStatsRequest {
    const message = createBaseQueryValidatorsStatsRequest();
    return message;
  },
};
function createBaseQueryValidatorsStatsResponse(): QueryValidatorsStatsResponse {
  return {
    stats: [],
  };
}
export const QueryValidatorsStatsResponse = {
  typeUrl: "/neutron.revenue.QueryValidatorsStatsResponse",
  encode(message: QueryValidatorsStatsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stats) {
      ValidatorStats.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsStatsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsStatsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stats.push(ValidatorStats.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorsStatsResponse {
    const obj = createBaseQueryValidatorsStatsResponse();
    if (Array.isArray(object?.stats)) obj.stats = object.stats.map((e: any) => ValidatorStats.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryValidatorsStatsResponse): JsonSafe<QueryValidatorsStatsResponse> {
    const obj: any = {};
    if (message.stats) {
      obj.stats = message.stats.map((e) => (e ? ValidatorStats.toJSON(e) : undefined));
    } else {
      obj.stats = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorsStatsResponse>, I>>(
    object: I,
  ): QueryValidatorsStatsResponse {
    const message = createBaseQueryValidatorsStatsResponse();
    message.stats = object.stats?.map((e) => ValidatorStats.fromPartial(e)) || [];
    return message;
  },
};
function createBaseValidatorStats(): ValidatorStats {
  return {
    validatorInfo: ValidatorInfo.fromPartial({}),
    performanceRating: "",
  };
}
export const ValidatorStats = {
  typeUrl: "/neutron.revenue.ValidatorStats",
  encode(message: ValidatorStats, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorInfo !== undefined) {
      ValidatorInfo.encode(message.validatorInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.performanceRating !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.performanceRating, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorStats {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorInfo = ValidatorInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.performanceRating = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorStats {
    const obj = createBaseValidatorStats();
    if (isSet(object.validatorInfo)) obj.validatorInfo = ValidatorInfo.fromJSON(object.validatorInfo);
    if (isSet(object.performanceRating)) obj.performanceRating = String(object.performanceRating);
    return obj;
  },
  toJSON(message: ValidatorStats): JsonSafe<ValidatorStats> {
    const obj: any = {};
    message.validatorInfo !== undefined &&
      (obj.validatorInfo = message.validatorInfo ? ValidatorInfo.toJSON(message.validatorInfo) : undefined);
    message.performanceRating !== undefined && (obj.performanceRating = message.performanceRating);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorStats>, I>>(object: I): ValidatorStats {
    const message = createBaseValidatorStats();
    if (object.validatorInfo !== undefined && object.validatorInfo !== null) {
      message.validatorInfo = ValidatorInfo.fromPartial(object.validatorInfo);
    }
    message.performanceRating = object.performanceRating ?? "";
    return message;
  },
};
