import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, Exact } from "../../../helpers.js";
import { JsonSafe } from "../../../json-safe.js";
export declare const protobufPackage = "sdk.proposals.v1";
export interface ProposalInfo_TxsByLaneEntry {
    key: string;
    value: bigint;
}
/**
 * ProposalInfo contains the metadata about a given proposal that was built by
 * the block-sdk. This is used to verify and consilidate proposal data across
 * the network.
 */
export interface ProposalInfo {
    /**
     * TxsByLane contains information about how each partial proposal
     * was constructed by the block-sdk lanes.
     */
    txsByLane: {
        [key: string]: bigint;
    };
    /**
     * MaxBlockSize corresponds to the upper bound on the size of the
     * block that was used to construct this block proposal.
     */
    maxBlockSize: bigint;
    /**
     * MaxGasLimit corresponds to the upper bound on the gas limit of the
     * block that was used to construct this block proposal.
     */
    maxGasLimit: bigint;
    /** BlockSize corresponds to the size of this block proposal. */
    blockSize: bigint;
    /** GasLimit corresponds to the gas limit of this block proposal. */
    gasLimit: bigint;
}
export declare const ProposalInfo_TxsByLaneEntry: {
    encode(message: ProposalInfo_TxsByLaneEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProposalInfo_TxsByLaneEntry;
    fromJSON(object: any): ProposalInfo_TxsByLaneEntry;
    toJSON(message: ProposalInfo_TxsByLaneEntry): JsonSafe<ProposalInfo_TxsByLaneEntry>;
    fromPartial<I extends Exact<DeepPartial<ProposalInfo_TxsByLaneEntry>, I>>(object: I): ProposalInfo_TxsByLaneEntry;
};
export declare const ProposalInfo: {
    typeUrl: string;
    encode(message: ProposalInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProposalInfo;
    fromJSON(object: any): ProposalInfo;
    toJSON(message: ProposalInfo): JsonSafe<ProposalInfo>;
    fromPartial<I extends Exact<DeepPartial<ProposalInfo>, I>>(object: I): ProposalInfo;
};
