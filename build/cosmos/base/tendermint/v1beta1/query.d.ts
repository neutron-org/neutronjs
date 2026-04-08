import { PageRequest, PageResponse } from "../../query/v1beta1/pagination.js";
import { Any } from "../../../../google/protobuf/any.js";
import { BlockID } from "../../../../tendermint/types/types.js";
import { Block as Block1 } from "../../../../tendermint/types/block.js";
import { Block as Block2 } from "./types.js";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types.js";
import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { DeepPartial, Exact } from "../../../../helpers.js";
import { JsonSafe } from "../../../../json-safe.js";
export declare const protobufPackage = "cosmos.base.tendermint.v1beta1";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
    height: bigint;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
    blockHeight: bigint;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
    blockHeight: bigint;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** Validator is the type for the validator-set. */
export interface Validator {
    address: string;
    pubKey?: Any;
    votingPower: bigint;
    proposerPriority: bigint;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
    height: bigint;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
    blockId?: BlockID;
    /** Deprecated: please use `sdk_block` instead */
    block?: Block1;
    sdkBlock?: Block2;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
    blockId?: BlockID;
    /** Deprecated: please use `sdk_block` instead */
    block?: Block1;
    sdkBlock?: Block2;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
    syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
    defaultNodeInfo?: DefaultNodeInfo;
    applicationVersion?: VersionInfo;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
    name: string;
    appName: string;
    version: string;
    gitCommit: string;
    buildTags: string;
    goVersion: string;
    buildDeps: Module[];
    cosmosSdkVersion: string;
}
/** Module is the type for VersionInfo */
export interface Module {
    /** module path */
    path: string;
    /** module version */
    version: string;
    /** checksum */
    sum: string;
}
/** ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query. */
export interface ABCIQueryRequest {
    data: Uint8Array;
    path: string;
    height: bigint;
    prove: boolean;
}
/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 */
export interface ABCIQueryResponse {
    code: number;
    /** nondeterministic */
    log: string;
    /** nondeterministic */
    info: string;
    index: bigint;
    key: Uint8Array;
    value: Uint8Array;
    proofOps?: ProofOps;
    height: bigint;
    codespace: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 */
export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 */
export interface ProofOps {
    ops: ProofOp[];
}
export declare const GetValidatorSetByHeightRequest: {
    typeUrl: string;
    encode(message: GetValidatorSetByHeightRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetValidatorSetByHeightRequest;
    fromJSON(object: any): GetValidatorSetByHeightRequest;
    toJSON(message: GetValidatorSetByHeightRequest): JsonSafe<GetValidatorSetByHeightRequest>;
    fromPartial<I extends Exact<DeepPartial<GetValidatorSetByHeightRequest>, I>>(object: I): GetValidatorSetByHeightRequest;
};
export declare const GetValidatorSetByHeightResponse: {
    typeUrl: string;
    encode(message: GetValidatorSetByHeightResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetValidatorSetByHeightResponse;
    fromJSON(object: any): GetValidatorSetByHeightResponse;
    toJSON(message: GetValidatorSetByHeightResponse): JsonSafe<GetValidatorSetByHeightResponse>;
    fromPartial<I extends Exact<DeepPartial<GetValidatorSetByHeightResponse>, I>>(object: I): GetValidatorSetByHeightResponse;
};
export declare const GetLatestValidatorSetRequest: {
    typeUrl: string;
    encode(message: GetLatestValidatorSetRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetLatestValidatorSetRequest;
    fromJSON(object: any): GetLatestValidatorSetRequest;
    toJSON(message: GetLatestValidatorSetRequest): JsonSafe<GetLatestValidatorSetRequest>;
    fromPartial<I extends Exact<DeepPartial<GetLatestValidatorSetRequest>, I>>(object: I): GetLatestValidatorSetRequest;
};
export declare const GetLatestValidatorSetResponse: {
    typeUrl: string;
    encode(message: GetLatestValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetLatestValidatorSetResponse;
    fromJSON(object: any): GetLatestValidatorSetResponse;
    toJSON(message: GetLatestValidatorSetResponse): JsonSafe<GetLatestValidatorSetResponse>;
    fromPartial<I extends Exact<DeepPartial<GetLatestValidatorSetResponse>, I>>(object: I): GetLatestValidatorSetResponse;
};
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): JsonSafe<Validator>;
    fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator;
};
export declare const GetBlockByHeightRequest: {
    typeUrl: string;
    encode(message: GetBlockByHeightRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetBlockByHeightRequest;
    fromJSON(object: any): GetBlockByHeightRequest;
    toJSON(message: GetBlockByHeightRequest): JsonSafe<GetBlockByHeightRequest>;
    fromPartial<I extends Exact<DeepPartial<GetBlockByHeightRequest>, I>>(object: I): GetBlockByHeightRequest;
};
export declare const GetBlockByHeightResponse: {
    typeUrl: string;
    encode(message: GetBlockByHeightResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetBlockByHeightResponse;
    fromJSON(object: any): GetBlockByHeightResponse;
    toJSON(message: GetBlockByHeightResponse): JsonSafe<GetBlockByHeightResponse>;
    fromPartial<I extends Exact<DeepPartial<GetBlockByHeightResponse>, I>>(object: I): GetBlockByHeightResponse;
};
export declare const GetLatestBlockRequest: {
    typeUrl: string;
    encode(_: GetLatestBlockRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetLatestBlockRequest;
    fromJSON(_: any): GetLatestBlockRequest;
    toJSON(_: GetLatestBlockRequest): JsonSafe<GetLatestBlockRequest>;
    fromPartial<I extends Exact<DeepPartial<GetLatestBlockRequest>, I>>(_: I): GetLatestBlockRequest;
};
export declare const GetLatestBlockResponse: {
    typeUrl: string;
    encode(message: GetLatestBlockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetLatestBlockResponse;
    fromJSON(object: any): GetLatestBlockResponse;
    toJSON(message: GetLatestBlockResponse): JsonSafe<GetLatestBlockResponse>;
    fromPartial<I extends Exact<DeepPartial<GetLatestBlockResponse>, I>>(object: I): GetLatestBlockResponse;
};
export declare const GetSyncingRequest: {
    typeUrl: string;
    encode(_: GetSyncingRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetSyncingRequest;
    fromJSON(_: any): GetSyncingRequest;
    toJSON(_: GetSyncingRequest): JsonSafe<GetSyncingRequest>;
    fromPartial<I extends Exact<DeepPartial<GetSyncingRequest>, I>>(_: I): GetSyncingRequest;
};
export declare const GetSyncingResponse: {
    typeUrl: string;
    encode(message: GetSyncingResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetSyncingResponse;
    fromJSON(object: any): GetSyncingResponse;
    toJSON(message: GetSyncingResponse): JsonSafe<GetSyncingResponse>;
    fromPartial<I extends Exact<DeepPartial<GetSyncingResponse>, I>>(object: I): GetSyncingResponse;
};
export declare const GetNodeInfoRequest: {
    typeUrl: string;
    encode(_: GetNodeInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetNodeInfoRequest;
    fromJSON(_: any): GetNodeInfoRequest;
    toJSON(_: GetNodeInfoRequest): JsonSafe<GetNodeInfoRequest>;
    fromPartial<I extends Exact<DeepPartial<GetNodeInfoRequest>, I>>(_: I): GetNodeInfoRequest;
};
export declare const GetNodeInfoResponse: {
    typeUrl: string;
    encode(message: GetNodeInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GetNodeInfoResponse;
    fromJSON(object: any): GetNodeInfoResponse;
    toJSON(message: GetNodeInfoResponse): JsonSafe<GetNodeInfoResponse>;
    fromPartial<I extends Exact<DeepPartial<GetNodeInfoResponse>, I>>(object: I): GetNodeInfoResponse;
};
export declare const VersionInfo: {
    typeUrl: string;
    encode(message: VersionInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VersionInfo;
    fromJSON(object: any): VersionInfo;
    toJSON(message: VersionInfo): JsonSafe<VersionInfo>;
    fromPartial<I extends Exact<DeepPartial<VersionInfo>, I>>(object: I): VersionInfo;
};
export declare const Module: {
    typeUrl: string;
    encode(message: Module, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): JsonSafe<Module>;
    fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module;
};
export declare const ABCIQueryRequest: {
    typeUrl: string;
    encode(message: ABCIQueryRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ABCIQueryRequest;
    fromJSON(object: any): ABCIQueryRequest;
    toJSON(message: ABCIQueryRequest): JsonSafe<ABCIQueryRequest>;
    fromPartial<I extends Exact<DeepPartial<ABCIQueryRequest>, I>>(object: I): ABCIQueryRequest;
};
export declare const ABCIQueryResponse: {
    typeUrl: string;
    encode(message: ABCIQueryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ABCIQueryResponse;
    fromJSON(object: any): ABCIQueryResponse;
    toJSON(message: ABCIQueryResponse): JsonSafe<ABCIQueryResponse>;
    fromPartial<I extends Exact<DeepPartial<ABCIQueryResponse>, I>>(object: I): ABCIQueryResponse;
};
export declare const ProofOp: {
    typeUrl: string;
    encode(message: ProofOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOp;
    fromJSON(object: any): ProofOp;
    toJSON(message: ProofOp): JsonSafe<ProofOp>;
    fromPartial<I extends Exact<DeepPartial<ProofOp>, I>>(object: I): ProofOp;
};
export declare const ProofOps: {
    typeUrl: string;
    encode(message: ProofOps, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofOps;
    fromJSON(object: any): ProofOps;
    toJSON(message: ProofOps): JsonSafe<ProofOps>;
    fromPartial<I extends Exact<DeepPartial<ProofOps>, I>>(object: I): ProofOps;
};
