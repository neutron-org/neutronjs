import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination.js";
import { Params } from "./params.js";
import { Schedule } from "./schedule.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { JsonSafe } from "../../json-safe.js";
import { DeepPartial, Exact } from "../../helpers.js";
export declare const protobufPackage = "neutron.cron";
/** The request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** The response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
/** The request type for the Query/Schedule RPC method. */
export interface QueryGetScheduleRequest {
    name: string;
}
/** The response type for the Query/Params RPC method. */
export interface QueryGetScheduleResponse {
    schedule: Schedule;
}
/** The request type for the Query/Schedules RPC method. */
export interface QuerySchedulesRequest {
    pagination?: PageRequest;
}
/** The response type for the Query/Params RPC method. */
export interface QuerySchedulesResponse {
    schedules: Schedule[];
    pagination?: PageResponse;
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
export declare const QueryGetScheduleRequest: {
    typeUrl: string;
    encode(message: QueryGetScheduleRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetScheduleRequest;
    fromJSON(object: any): QueryGetScheduleRequest;
    toJSON(message: QueryGetScheduleRequest): JsonSafe<QueryGetScheduleRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryGetScheduleRequest>, I>>(object: I): QueryGetScheduleRequest;
};
export declare const QueryGetScheduleResponse: {
    typeUrl: string;
    encode(message: QueryGetScheduleResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetScheduleResponse;
    fromJSON(object: any): QueryGetScheduleResponse;
    toJSON(message: QueryGetScheduleResponse): JsonSafe<QueryGetScheduleResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryGetScheduleResponse>, I>>(object: I): QueryGetScheduleResponse;
};
export declare const QuerySchedulesRequest: {
    typeUrl: string;
    encode(message: QuerySchedulesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySchedulesRequest;
    fromJSON(object: any): QuerySchedulesRequest;
    toJSON(message: QuerySchedulesRequest): JsonSafe<QuerySchedulesRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySchedulesRequest>, I>>(object: I): QuerySchedulesRequest;
};
export declare const QuerySchedulesResponse: {
    typeUrl: string;
    encode(message: QuerySchedulesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySchedulesResponse;
    fromJSON(object: any): QuerySchedulesResponse;
    toJSON(message: QuerySchedulesResponse): JsonSafe<QuerySchedulesResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySchedulesResponse>, I>>(object: I): QuerySchedulesResponse;
};
