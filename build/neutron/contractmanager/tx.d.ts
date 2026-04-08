import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.contractmanager";
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.47
 */
export interface MsgUpdateParams {
    /** Authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/contractmanager parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.47
 */
export interface MsgUpdateParamsResponse {
}
/** MsgResubmitFailure - contract that has failed acknowledgement can resubmit its failure */
export interface MsgResubmitFailure {
    /** sender is the contract which failure to acknowledge is resubmitted. */
    sender: string;
    /** failure_id is id of failure to resubmit */
    failureId: bigint;
}
export interface MsgResubmitFailureResponse {
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
export declare const MsgResubmitFailure: {
    typeUrl: string;
    encode(message: MsgResubmitFailure, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgResubmitFailure;
    fromJSON(object: any): MsgResubmitFailure;
    toJSON(message: MsgResubmitFailure): JsonSafe<MsgResubmitFailure>;
    fromPartial<I extends Exact<DeepPartial<MsgResubmitFailure>, I>>(object: I): MsgResubmitFailure;
};
export declare const MsgResubmitFailureResponse: {
    typeUrl: string;
    encode(_: MsgResubmitFailureResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgResubmitFailureResponse;
    fromJSON(_: any): MsgResubmitFailureResponse;
    toJSON(_: MsgResubmitFailureResponse): JsonSafe<MsgResubmitFailureResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgResubmitFailureResponse>, I>>(_: I): MsgResubmitFailureResponse;
};
