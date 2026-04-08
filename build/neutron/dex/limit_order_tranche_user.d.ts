import { TradePairID } from "./trade_pair_id.js";
import { LimitOrderType } from "./tx.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface LimitOrderTrancheUser {
    tradePairId?: TradePairID;
    tickIndexTakerToMaker: bigint;
    trancheKey: string;
    address: string;
    sharesOwned: string;
    sharesWithdrawn: string;
    /** TODO: remove this in next release. It is no longer used */
    sharesCancelled: string;
    orderType: LimitOrderType;
}
export declare const LimitOrderTrancheUser: {
    typeUrl: string;
    encode(message: LimitOrderTrancheUser, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LimitOrderTrancheUser;
    fromJSON(object: any): LimitOrderTrancheUser;
    toJSON(message: LimitOrderTrancheUser): JsonSafe<LimitOrderTrancheUser>;
    fromPartial<I extends Exact<DeepPartial<LimitOrderTrancheUser>, I>>(object: I): LimitOrderTrancheUser;
};
