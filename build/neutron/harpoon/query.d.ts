import { HookType } from "./hooks.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.harpoon";
/** Request type for the Query/SubscribedContracts RPC method. */
export interface QuerySubscribedContractsRequest {
    /** The response will include only contract addresses for this hook type. */
    hookType: HookType;
}
/** Response type for the Query/SubscribedContracts RPC method. */
export interface QuerySubscribedContractsResponse {
    /** List of contract addresses subscribed to a specific hook. */
    contractAddresses: string[];
}
export declare const QuerySubscribedContractsRequest: {
    typeUrl: string;
    encode(message: QuerySubscribedContractsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscribedContractsRequest;
    fromJSON(object: any): QuerySubscribedContractsRequest;
    toJSON(message: QuerySubscribedContractsRequest): JsonSafe<QuerySubscribedContractsRequest>;
    fromPartial<I extends Exact<DeepPartial<QuerySubscribedContractsRequest>, I>>(object: I): QuerySubscribedContractsRequest;
};
export declare const QuerySubscribedContractsResponse: {
    typeUrl: string;
    encode(message: QuerySubscribedContractsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySubscribedContractsResponse;
    fromJSON(object: any): QuerySubscribedContractsResponse;
    toJSON(message: QuerySubscribedContractsResponse): JsonSafe<QuerySubscribedContractsResponse>;
    fromPartial<I extends Exact<DeepPartial<QuerySubscribedContractsResponse>, I>>(object: I): QuerySubscribedContractsResponse;
};
