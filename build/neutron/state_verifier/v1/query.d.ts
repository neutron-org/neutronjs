import { StorageValue } from "../../interchainqueries/tx.js";
import { ConsensusState } from "./genesis.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "neutron.state_verifier.v1";
/** Describes a structure to verify storage values from the chain state from a particular height in the past */
export interface QueryVerifyStateValuesRequest {
    /** Refers to the block height to which the storage values belong. */
    height: bigint;
    /** A slice of neutron.interchainqueries.StorageValue which relate to the specified height and must be verified against */
    storageValues: StorageValue[];
}
/** Describes a response structure for `VerifyStateValues` query */
export interface QueryVerifyStateValuesResponse {
    /** The field describes a validity of all the storage values passed to the request at a specific height */
    valid: boolean;
}
/** Describes a structure to query ConsensusState by the specified height */
export interface QueryConsensusStateRequest {
    /** Refers to the block height for which you want to query ConsensusState */
    height: bigint;
}
/** Describes a response structure for `QueryConsensusStateRequest` query */
export interface QueryConsensusStateResponse {
    /** ConsensusState defines the consensus state from the state-verifier module */
    cs?: ConsensusState;
}
export declare const QueryVerifyStateValuesRequest: {
    typeUrl: string;
    encode(message: QueryVerifyStateValuesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyStateValuesRequest;
    fromJSON(object: any): QueryVerifyStateValuesRequest;
    toJSON(message: QueryVerifyStateValuesRequest): JsonSafe<QueryVerifyStateValuesRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryVerifyStateValuesRequest>, I>>(object: I): QueryVerifyStateValuesRequest;
};
export declare const QueryVerifyStateValuesResponse: {
    typeUrl: string;
    encode(message: QueryVerifyStateValuesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyStateValuesResponse;
    fromJSON(object: any): QueryVerifyStateValuesResponse;
    toJSON(message: QueryVerifyStateValuesResponse): JsonSafe<QueryVerifyStateValuesResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryVerifyStateValuesResponse>, I>>(object: I): QueryVerifyStateValuesResponse;
};
export declare const QueryConsensusStateRequest: {
    typeUrl: string;
    encode(message: QueryConsensusStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStateRequest;
    fromJSON(object: any): QueryConsensusStateRequest;
    toJSON(message: QueryConsensusStateRequest): JsonSafe<QueryConsensusStateRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryConsensusStateRequest>, I>>(object: I): QueryConsensusStateRequest;
};
export declare const QueryConsensusStateResponse: {
    typeUrl: string;
    encode(message: QueryConsensusStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStateResponse;
    fromJSON(object: any): QueryConsensusStateResponse;
    toJSON(message: QueryConsensusStateResponse): JsonSafe<QueryConsensusStateResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryConsensusStateResponse>, I>>(object: I): QueryConsensusStateResponse;
};
