import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "sdk.mempool.v1";
/**
 * GetTxDistributionRequest is the request type for the Service.GetTxDistribution
 * RPC method.
 */
export interface GetTxDistributionRequest {
}
export interface GetTxDistributionResponse_DistributionEntry {
    key: string;
    value: bigint;
}
/**
 * GetTxDistributionResponse is the response type for the Service.GetTxDistribution
 * RPC method.
 */
export interface GetTxDistributionResponse {
    /** Distribution is a map of lane to the number of transactions in the mempool for that lane. */
    distribution: {
        [key: string]: bigint;
    };
}
export declare const GetTxDistributionRequest: {
    typeUrl: string;
    encode(_: GetTxDistributionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxDistributionRequest;
    fromJSON(_: any): GetTxDistributionRequest;
    toJSON(_: GetTxDistributionRequest): JsonSafe<GetTxDistributionRequest>;
    fromPartial<I extends Exact<DeepPartial<GetTxDistributionRequest>, I>>(_: I): GetTxDistributionRequest;
};
export declare const GetTxDistributionResponse_DistributionEntry: {
    encode(message: GetTxDistributionResponse_DistributionEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxDistributionResponse_DistributionEntry;
    fromJSON(object: any): GetTxDistributionResponse_DistributionEntry;
    toJSON(message: GetTxDistributionResponse_DistributionEntry): JsonSafe<GetTxDistributionResponse_DistributionEntry>;
    fromPartial<I extends Exact<DeepPartial<GetTxDistributionResponse_DistributionEntry>, I>>(object: I): GetTxDistributionResponse_DistributionEntry;
};
export declare const GetTxDistributionResponse: {
    typeUrl: string;
    encode(message: GetTxDistributionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetTxDistributionResponse;
    fromJSON(object: any): GetTxDistributionResponse;
    toJSON(message: GetTxDistributionResponse): JsonSafe<GetTxDistributionResponse>;
    fromPartial<I extends Exact<DeepPartial<GetTxDistributionResponse>, I>>(object: I): GetTxDistributionResponse;
};
