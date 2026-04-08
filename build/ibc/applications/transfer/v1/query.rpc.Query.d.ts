import { Rpc } from "../../../../helpers.js";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomsRequest, QueryDenomsResponse, QueryDenomRequest, QueryDenomResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query.js";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params queries all parameters of the ibc-transfer module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Denoms queries all denominations */
    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    /** Denom queries a denomination */
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    /** DenomHash queries a denomination hash information. */
    denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    totalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    totalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denoms(request?: QueryDenomsRequest): Promise<QueryDenomsResponse>;
    denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
    denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    totalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
};
