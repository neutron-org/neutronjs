import { PairID } from "./pair_id.js";
import { Pool } from "./pool.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface DepositRecord {
    pairId?: PairID;
    sharesOwned: string;
    centerTickIndex: bigint;
    lowerTickIndex: bigint;
    upperTickIndex: bigint;
    fee: bigint;
    totalShares?: string;
    pool?: Pool;
}
export declare const DepositRecord: {
    typeUrl: string;
    encode(message: DepositRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DepositRecord;
    fromJSON(object: any): DepositRecord;
    toJSON(message: DepositRecord): JsonSafe<DepositRecord>;
    fromPartial<I extends Exact<DeepPartial<DepositRecord>, I>>(object: I): DepositRecord;
};
