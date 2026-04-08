import { Timestamp } from "../../google/protobuf/timestamp.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface LimitOrderExpiration {
    /** see limitOrderTranche.proto for details on expiration_time */
    expirationTime: Timestamp;
    trancheRef: Uint8Array;
}
export declare const LimitOrderExpiration: {
    typeUrl: string;
    encode(message: LimitOrderExpiration, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LimitOrderExpiration;
    fromJSON(object: any): LimitOrderExpiration;
    toJSON(message: LimitOrderExpiration): JsonSafe<LimitOrderExpiration>;
    fromPartial<I extends Exact<DeepPartial<LimitOrderExpiration>, I>>(object: I): LimitOrderExpiration;
};
