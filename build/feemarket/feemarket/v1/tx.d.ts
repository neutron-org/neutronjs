import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "feemarket.feemarket.v1";
/**
 * MsgParams defines the Msg/Params request type. It contains the
 * new parameters for the feemarket module.
 */
export interface MsgParams {
    /** Params defines the new parameters for the feemarket module. */
    params: Params;
    /**
     * Authority defines the authority that is updating the feemarket module
     * parameters.
     */
    authority: string;
}
/** MsgParamsResponse defines the Msg/Params response type. */
export interface MsgParamsResponse {
}
export declare const MsgParams: {
    typeUrl: string;
    encode(message: MsgParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgParams;
    fromJSON(object: any): MsgParams;
    toJSON(message: MsgParams): JsonSafe<MsgParams>;
    fromPartial<I extends Exact<DeepPartial<MsgParams>, I>>(object: I): MsgParams;
};
export declare const MsgParamsResponse: {
    typeUrl: string;
    encode(_: MsgParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgParamsResponse;
    fromJSON(_: any): MsgParamsResponse;
    toJSON(_: MsgParamsResponse): JsonSafe<MsgParamsResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgParamsResponse>, I>>(_: I): MsgParamsResponse;
};
