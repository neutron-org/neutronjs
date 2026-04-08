import { Params, QueryRequest } from "./host.js";
import { BinaryReader, BinaryWriter } from "../../../../../binary.js";
import { DeepPartial, Exact } from "../../../../../helpers.js";
import { JsonSafe } from "../../../../../json-safe.js";
export declare const protobufPackage = "ibc.applications.interchain_accounts.host.v1";
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParams {
    /** signer address */
    signer: string;
    /**
     * params defines the 27-interchain-accounts/host parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponse {
}
/** MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafe {
    /** signer address */
    signer: string;
    /** requests defines the module safe queries to execute. */
    requests: QueryRequest[];
}
/** MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe */
export interface MsgModuleQuerySafeResponse {
    /** height at which the responses were queried */
    height: bigint;
    /** protobuf encoded responses for each query */
    responses: Uint8Array[];
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse;
};
export declare const MsgModuleQuerySafe: {
    typeUrl: string;
    encode(message: MsgModuleQuerySafe, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgModuleQuerySafe;
    fromJSON(object: any): MsgModuleQuerySafe;
    toJSON(message: MsgModuleQuerySafe): JsonSafe<MsgModuleQuerySafe>;
    fromPartial<I extends Exact<DeepPartial<MsgModuleQuerySafe>, I>>(object: I): MsgModuleQuerySafe;
};
export declare const MsgModuleQuerySafeResponse: {
    typeUrl: string;
    encode(message: MsgModuleQuerySafeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgModuleQuerySafeResponse;
    fromJSON(object: any): MsgModuleQuerySafeResponse;
    toJSON(message: MsgModuleQuerySafeResponse): JsonSafe<MsgModuleQuerySafeResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgModuleQuerySafeResponse>, I>>(object: I): MsgModuleQuerySafeResponse;
};
