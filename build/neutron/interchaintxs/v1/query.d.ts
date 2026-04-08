import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { JsonSafe } from "../../../json-safe.js";
import { DeepPartial, Exact } from "../../../helpers.js";
export declare const protobufPackage = "neutron.interchaintxs.v1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryInterchainAccountAddressRequest {
    /**
     * owner_address is the owner of the interchain account on the controller
     * chain
     */
    ownerAddress: string;
    /**
     * interchain_account_id is an identifier of your interchain account from
     * which you want to execute msgs
     */
    interchainAccountId: string;
    /**
     * connection_id is an IBC connection identifier between Neutron and remote
     * chain
     */
    connectionId: string;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponse {
    /** The corresponding interchain account address on the host chain */
    interchainAccountAddress: string;
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
export declare const QueryInterchainAccountAddressRequest: {
    typeUrl: string;
    encode(message: QueryInterchainAccountAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountAddressRequest;
    fromJSON(object: any): QueryInterchainAccountAddressRequest;
    toJSON(message: QueryInterchainAccountAddressRequest): JsonSafe<QueryInterchainAccountAddressRequest>;
    fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountAddressRequest>, I>>(object: I): QueryInterchainAccountAddressRequest;
};
export declare const QueryInterchainAccountAddressResponse: {
    typeUrl: string;
    encode(message: QueryInterchainAccountAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountAddressResponse;
    fromJSON(object: any): QueryInterchainAccountAddressResponse;
    toJSON(message: QueryInterchainAccountAddressResponse): JsonSafe<QueryInterchainAccountAddressResponse>;
    fromPartial<I extends Exact<DeepPartial<QueryInterchainAccountAddressResponse>, I>>(object: I): QueryInterchainAccountAddressResponse;
};
