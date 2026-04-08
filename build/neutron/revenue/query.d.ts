import { Params } from "./params.js";
import { PaymentSchedule, ValidatorInfo } from "./genesis.js";
import { Coin } from "../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { JsonSafe } from "../../json-safe.js";
import { DeepPartial, Exact } from "../../helpers.js";
export declare const protobufPackage = "neutron.revenue";
/** Request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** Response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** Contains all parameters of the module. */
    params: Params;
}
/** Request type for the Query/PaymentInfo RPC method. */
export interface QueryPaymentInfoRequest {
}
/** Response type for the Query/PaymentInfo RPC method. */
export interface QueryPaymentInfoResponse {
    /** The current payment schedule. */
    paymentSchedule: PaymentSchedule;
    /** Revenue amount multiplier value that corresponds to the effective payment period progress. */
    effectivePeriodProgress: string;
    /**
     * The current TWAP of the reward asset in quote asset. Is calculated as:
     * twap_from_time_t(n)_to_time_t(m) = (cumulative_price_at_t(n) - cumulative_price_at_t(m)) / (t(n) - t(m))
     */
    rewardAssetTwap: string;
    /**
     * The current evaluation of the base revenue amount. This is the maximum amount a validator can
     * receive in the current price condition if not affected with reducing factors (e.g. imperfect
     * performance, incomplete payment period, partial validator set presence).
     */
    baseRevenueAmount: Coin;
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
export interface QueryValidatorsStatsRequest {
}
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
     * Contains expected revenue for the validator based on their performance rating in the current
     * payment period, current reward asset TWAP, and duration of validator's presence in the active
     * validator set. Does not take into account effective payment period progress.
     */
    expectedRevenue: Coin;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse;
};
export declare const QueryPaymentInfoRequest: {
    typeUrl: string;
    encode(_: QueryPaymentInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentInfoRequest;
    fromJSON(_: any): QueryPaymentInfoRequest;
    toJSON(_: QueryPaymentInfoRequest): JsonSafe<QueryPaymentInfoRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryPaymentInfoRequest>, I>>(_: I): QueryPaymentInfoRequest;
};
export declare const QueryPaymentInfoResponse: {
    typeUrl: string;
    encode(message: QueryPaymentInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPaymentInfoResponse;
    fromJSON(object: any): QueryPaymentInfoResponse;
    toJSON(message: QueryPaymentInfoResponse): JsonSafe<QueryPaymentInfoResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryPaymentInfoResponse>, I>>(object: I): QueryPaymentInfoResponse;
};
export declare const QueryValidatorStatsRequest: {
    typeUrl: string;
    encode(message: QueryValidatorStatsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorStatsRequest;
    fromJSON(object: any): QueryValidatorStatsRequest;
    toJSON(message: QueryValidatorStatsRequest): JsonSafe<QueryValidatorStatsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryValidatorStatsRequest>, I>>(object: I): QueryValidatorStatsRequest;
};
export declare const QueryValidatorStatsResponse: {
    typeUrl: string;
    encode(message: QueryValidatorStatsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorStatsResponse;
    fromJSON(object: any): QueryValidatorStatsResponse;
    toJSON(message: QueryValidatorStatsResponse): JsonSafe<QueryValidatorStatsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryValidatorStatsResponse>, I>>(object: I): QueryValidatorStatsResponse;
};
export declare const QueryValidatorsStatsRequest: {
    typeUrl: string;
    encode(_: QueryValidatorsStatsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsStatsRequest;
    fromJSON(_: any): QueryValidatorsStatsRequest;
    toJSON(_: QueryValidatorsStatsRequest): JsonSafe<QueryValidatorsStatsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryValidatorsStatsRequest>, I>>(_: I): QueryValidatorsStatsRequest;
};
export declare const QueryValidatorsStatsResponse: {
    typeUrl: string;
    encode(message: QueryValidatorsStatsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsStatsResponse;
    fromJSON(object: any): QueryValidatorsStatsResponse;
    toJSON(message: QueryValidatorsStatsResponse): JsonSafe<QueryValidatorsStatsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryValidatorsStatsResponse>, I>>(object: I): QueryValidatorsStatsResponse;
};
export declare const ValidatorStats: {
    typeUrl: string;
    encode(message: ValidatorStats, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorStats;
    fromJSON(object: any): ValidatorStats;
    toJSON(message: ValidatorStats): JsonSafe<ValidatorStats>;
    fromPartial<I extends Exact<DeepPartial<ValidatorStats>, I>>(object: I): ValidatorStats;
};
