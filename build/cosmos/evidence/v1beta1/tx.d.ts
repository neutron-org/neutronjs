import { Any } from "../../../google/protobuf/any.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "cosmos.evidence.v1beta1";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
    /** submitter is the signer account address of evidence. */
    submitter: string;
    /** evidence defines the evidence of misbehavior. */
    evidence?: Any;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
    /** hash defines the hash of the evidence. */
    hash: Uint8Array;
}
export declare const MsgSubmitEvidence: {
    typeUrl: string;
    encode(message: MsgSubmitEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidence;
    fromJSON(object: any): MsgSubmitEvidence;
    toJSON(message: MsgSubmitEvidence): JsonSafe<MsgSubmitEvidence>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitEvidence>, I>>(object: I): MsgSubmitEvidence;
};
export declare const MsgSubmitEvidenceResponse: {
    typeUrl: string;
    encode(message: MsgSubmitEvidenceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidenceResponse;
    fromJSON(object: any): MsgSubmitEvidenceResponse;
    toJSON(message: MsgSubmitEvidenceResponse): JsonSafe<MsgSubmitEvidenceResponse>;
    fromPartial<I extends Exact<DeepPartial<MsgSubmitEvidenceResponse>, I>>(object: I): MsgSubmitEvidenceResponse;
};
