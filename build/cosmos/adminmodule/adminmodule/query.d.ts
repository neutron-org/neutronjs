import { Proposal as Proposal1 } from "../../gov/v1/gov.js";
import { Proposal as Proposal2 } from "../../gov/v1beta1/gov.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "cosmos.adminmodule.adminmodule";
export interface QueryAdminsRequest {
}
export interface QueryAdminsResponse {
    admins: string[];
}
export interface QueryArchivedProposalsRequest {
}
export interface QueryArchivedProposalsLegacyRequest {
}
export interface QueryProposalsResponse {
    proposals: Proposal1[];
}
export interface QueryArchivedProposalsResponse {
    proposals: Proposal1[];
}
export interface QueryArchivedProposalsLegacyResponse {
    proposalsLegacy: Proposal2[];
}
export declare const QueryAdminsRequest: {
    typeUrl: string;
    encode(_: QueryAdminsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAdminsRequest;
    fromJSON(_: any): QueryAdminsRequest;
    toJSON(_: QueryAdminsRequest): JsonSafe<QueryAdminsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryAdminsRequest>, I>>(_: I): QueryAdminsRequest;
};
export declare const QueryAdminsResponse: {
    typeUrl: string;
    encode(message: QueryAdminsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAdminsResponse;
    fromJSON(object: any): QueryAdminsResponse;
    toJSON(message: QueryAdminsResponse): JsonSafe<QueryAdminsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryAdminsResponse>, I>>(object: I): QueryAdminsResponse;
};
export declare const QueryArchivedProposalsRequest: {
    typeUrl: string;
    encode(_: QueryArchivedProposalsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryArchivedProposalsRequest;
    fromJSON(_: any): QueryArchivedProposalsRequest;
    toJSON(_: QueryArchivedProposalsRequest): JsonSafe<QueryArchivedProposalsRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryArchivedProposalsRequest>, I>>(_: I): QueryArchivedProposalsRequest;
};
export declare const QueryArchivedProposalsLegacyRequest: {
    typeUrl: string;
    encode(_: QueryArchivedProposalsLegacyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryArchivedProposalsLegacyRequest;
    fromJSON(_: any): QueryArchivedProposalsLegacyRequest;
    toJSON(_: QueryArchivedProposalsLegacyRequest): JsonSafe<QueryArchivedProposalsLegacyRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryArchivedProposalsLegacyRequest>, I>>(_: I): QueryArchivedProposalsLegacyRequest;
};
export declare const QueryProposalsResponse: {
    typeUrl: string;
    encode(message: QueryProposalsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): JsonSafe<QueryProposalsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryProposalsResponse>, I>>(object: I): QueryProposalsResponse;
};
export declare const QueryArchivedProposalsResponse: {
    typeUrl: string;
    encode(message: QueryArchivedProposalsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryArchivedProposalsResponse;
    fromJSON(object: any): QueryArchivedProposalsResponse;
    toJSON(message: QueryArchivedProposalsResponse): JsonSafe<QueryArchivedProposalsResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryArchivedProposalsResponse>, I>>(object: I): QueryArchivedProposalsResponse;
};
export declare const QueryArchivedProposalsLegacyResponse: {
    typeUrl: string;
    encode(message: QueryArchivedProposalsLegacyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryArchivedProposalsLegacyResponse;
    fromJSON(object: any): QueryArchivedProposalsLegacyResponse;
    toJSON(message: QueryArchivedProposalsLegacyResponse): JsonSafe<QueryArchivedProposalsLegacyResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryArchivedProposalsLegacyResponse>, I>>(object: I): QueryArchivedProposalsLegacyResponse;
};
