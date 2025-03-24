/* eslint-disable */
import { Params } from "./params";
import { PaymentSchedule, ValidatorInfo } from "./genesis";
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
/** Request type for the Query/PaymentInfo RPC method. */
export interface QueryPaymentInfoRequest {}
/** Response type for the Query/PaymentInfo RPC method. */
export interface QueryPaymentInfoResponse {
  /** The current payment schedule. */
  paymentSchedule: PaymentSchedule;
  /** The denom used in revenue payments. */
  rewardDenom: string;
  /**
   * The current TWAP of the reward denom in USD. Is calculated as:
   * twap_from_time_t(n)_to_time_t(m) = (cumulative_price_at_t(n) - cumulative_price_at_t(m)) / (t(n) - t(m))
   */
  rewardDenomTwap: string;
  /**
   * The current evaluation of the base revenue amount. This whole amount will be paid to the
   * validators with impeccable performance (at least as good as allowed_to_miss). For the others
   * this amount will be multiplied by their performance rating.
   */
  baseRevenueAmount: string;
}
/** Request type for the Query/ValidatorStats RPC method. */
export interface QueryValidatorStatsRequest {
  /** The validator's node operator address. */
  valOperAddress: string;
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
  /** The total number of blocks produced by the chain in the current payment period. */
  totalProducedBlocksInPeriod: bigint;
  /** The validator's performance rating. Represented as a decimal value. */
  performanceRating: string;
  /**
   * Contains expected revenue for the validator
   * based on performance rating of ongoing performance window and current TWAP.
   */
  expectedRevenue: string;
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
function createBaseQueryPaymentInfoRequest(): QueryPaymentInfoRequest {
  return {};
}
export const QueryPaymentInfoRequest = {
  typeUrl: "/neutron.revenue.QueryPaymentInfoRequest",
  encode(_: QueryPaymentInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentInfoRequest();
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
  fromJSON(_: any): QueryPaymentInfoRequest {
    const obj = createBaseQueryPaymentInfoRequest();
    return obj;
  },
  toJSON(_: QueryPaymentInfoRequest): JsonSafe<QueryPaymentInfoRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentInfoRequest>, I>>(_: I): QueryPaymentInfoRequest {
    const message = createBaseQueryPaymentInfoRequest();
    return message;
  },
};
function createBaseQueryPaymentInfoResponse(): QueryPaymentInfoResponse {
  return {
    paymentSchedule: PaymentSchedule.fromPartial({}),
    rewardDenom: "",
    rewardDenomTwap: "",
    baseRevenueAmount: "",
  };
}
export const QueryPaymentInfoResponse = {
  typeUrl: "/neutron.revenue.QueryPaymentInfoResponse",
  encode(message: QueryPaymentInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paymentSchedule !== undefined) {
      PaymentSchedule.encode(message.paymentSchedule, writer.uint32(10).fork()).ldelim();
    }
    if (message.rewardDenom !== "") {
      writer.uint32(18).string(message.rewardDenom);
    }
    if (message.rewardDenomTwap !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rewardDenomTwap, 18).atomics);
    }
    if (message.baseRevenueAmount !== "") {
      writer.uint32(34).string(message.baseRevenueAmount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPaymentInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentSchedule = PaymentSchedule.decode(reader, reader.uint32());
          break;
        case 2:
          message.rewardDenom = reader.string();
          break;
        case 3:
          message.rewardDenomTwap = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.baseRevenueAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPaymentInfoResponse {
    const obj = createBaseQueryPaymentInfoResponse();
    if (isSet(object.paymentSchedule)) obj.paymentSchedule = PaymentSchedule.fromJSON(object.paymentSchedule);
    if (isSet(object.rewardDenom)) obj.rewardDenom = String(object.rewardDenom);
    if (isSet(object.rewardDenomTwap)) obj.rewardDenomTwap = String(object.rewardDenomTwap);
    if (isSet(object.baseRevenueAmount)) obj.baseRevenueAmount = String(object.baseRevenueAmount);
    return obj;
  },
  toJSON(message: QueryPaymentInfoResponse): JsonSafe<QueryPaymentInfoResponse> {
    const obj: any = {};
    message.paymentSchedule !== undefined &&
      (obj.paymentSchedule = message.paymentSchedule
        ? PaymentSchedule.toJSON(message.paymentSchedule)
        : undefined);
    message.rewardDenom !== undefined && (obj.rewardDenom = message.rewardDenom);
    message.rewardDenomTwap !== undefined && (obj.rewardDenomTwap = message.rewardDenomTwap);
    message.baseRevenueAmount !== undefined && (obj.baseRevenueAmount = message.baseRevenueAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPaymentInfoResponse>, I>>(
    object: I,
  ): QueryPaymentInfoResponse {
    const message = createBaseQueryPaymentInfoResponse();
    if (object.paymentSchedule !== undefined && object.paymentSchedule !== null) {
      message.paymentSchedule = PaymentSchedule.fromPartial(object.paymentSchedule);
    }
    message.rewardDenom = object.rewardDenom ?? "";
    message.rewardDenomTwap = object.rewardDenomTwap ?? "";
    message.baseRevenueAmount = object.baseRevenueAmount ?? "";
    return message;
  },
};
function createBaseQueryValidatorStatsRequest(): QueryValidatorStatsRequest {
  return {
    valOperAddress: "",
  };
}
export const QueryValidatorStatsRequest = {
  typeUrl: "/neutron.revenue.QueryValidatorStatsRequest",
  encode(message: QueryValidatorStatsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valOperAddress !== "") {
      writer.uint32(10).string(message.valOperAddress);
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
          message.valOperAddress = reader.string();
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
    if (isSet(object.valOperAddress)) obj.valOperAddress = String(object.valOperAddress);
    return obj;
  },
  toJSON(message: QueryValidatorStatsRequest): JsonSafe<QueryValidatorStatsRequest> {
    const obj: any = {};
    message.valOperAddress !== undefined && (obj.valOperAddress = message.valOperAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorStatsRequest>, I>>(
    object: I,
  ): QueryValidatorStatsRequest {
    const message = createBaseQueryValidatorStatsRequest();
    message.valOperAddress = object.valOperAddress ?? "";
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
    totalProducedBlocksInPeriod: BigInt(0),
    performanceRating: "",
    expectedRevenue: "",
  };
}
export const ValidatorStats = {
  typeUrl: "/neutron.revenue.ValidatorStats",
  encode(message: ValidatorStats, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorInfo !== undefined) {
      ValidatorInfo.encode(message.validatorInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalProducedBlocksInPeriod !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalProducedBlocksInPeriod);
    }
    if (message.performanceRating !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.performanceRating, 18).atomics);
    }
    if (message.expectedRevenue !== "") {
      writer.uint32(34).string(message.expectedRevenue);
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
          message.totalProducedBlocksInPeriod = reader.uint64();
          break;
        case 3:
          message.performanceRating = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.expectedRevenue = reader.string();
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
    if (isSet(object.totalProducedBlocksInPeriod))
      obj.totalProducedBlocksInPeriod = BigInt(object.totalProducedBlocksInPeriod.toString());
    if (isSet(object.performanceRating)) obj.performanceRating = String(object.performanceRating);
    if (isSet(object.expectedRevenue)) obj.expectedRevenue = String(object.expectedRevenue);
    return obj;
  },
  toJSON(message: ValidatorStats): JsonSafe<ValidatorStats> {
    const obj: any = {};
    message.validatorInfo !== undefined &&
      (obj.validatorInfo = message.validatorInfo ? ValidatorInfo.toJSON(message.validatorInfo) : undefined);
    message.totalProducedBlocksInPeriod !== undefined &&
      (obj.totalProducedBlocksInPeriod = (message.totalProducedBlocksInPeriod || BigInt(0)).toString());
    message.performanceRating !== undefined && (obj.performanceRating = message.performanceRating);
    message.expectedRevenue !== undefined && (obj.expectedRevenue = message.expectedRevenue);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorStats>, I>>(object: I): ValidatorStats {
    const message = createBaseValidatorStats();
    if (object.validatorInfo !== undefined && object.validatorInfo !== null) {
      message.validatorInfo = ValidatorInfo.fromPartial(object.validatorInfo);
    }
    if (object.totalProducedBlocksInPeriod !== undefined && object.totalProducedBlocksInPeriod !== null) {
      message.totalProducedBlocksInPeriod = BigInt(object.totalProducedBlocksInPeriod.toString());
    }
    message.performanceRating = object.performanceRating ?? "";
    message.expectedRevenue = object.expectedRevenue ?? "";
    return message;
  },
};
