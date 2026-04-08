import { TradePairID } from "./trade_pair_id.js";
import { Timestamp } from "../../google/protobuf/timestamp.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface LimitOrderTrancheKey {
    tradePairId?: TradePairID;
    tickIndexTakerToMaker: bigint;
    trancheKey: string;
}
export interface LimitOrderTranche {
    key?: LimitOrderTrancheKey;
    /** DEPRECATED: reserves_maker_denom will be removed in future release, `dec_reserves_maker_denom` should always be used. */
    /** @deprecated */
    reservesMakerDenom: string;
    /** DEPRECATED: reserves_taker_denom will be removed in future release, `dec_reserves_taker_denom` should always be used. */
    /** @deprecated */
    reservesTakerDenom: string;
    totalMakerDenom: string;
    /** DEPRECATED: total_taker_denom will be removed in future release, `dec_total_taker_denom` should always be used. */
    /** @deprecated */
    totalTakerDenom: string;
    /**
     * JIT orders also use expiration_time to handle deletion but represent a special case
     * All JIT orders have a expiration_time of 0 and an exception is made to still treat these orders as live
     * Order deletion still functions the same and the orders will be deleted at the end of the block
     */
    expirationTime?: Timestamp;
    /** DEPRECATED: price_taker_to_maker will be removed in future release, `maker_price` should always be used. */
    /** @deprecated */
    priceTakerToMaker: string;
    /** This is the price of the LimitOrder denominated in the opposite token. (ie. 1 TokenA with a maker_price of 10 is worth 10 TokenB ) */
    makerPrice: string;
    decReservesMakerDenom: string;
    decReservesTakerDenom: string;
    decTotalTakerDenom: string;
}
export declare const LimitOrderTrancheKey: {
    typeUrl: string;
    encode(message: LimitOrderTrancheKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LimitOrderTrancheKey;
    fromJSON(object: any): LimitOrderTrancheKey;
    toJSON(message: LimitOrderTrancheKey): JsonSafe<LimitOrderTrancheKey>;
    fromPartial<I extends Exact<DeepPartial<LimitOrderTrancheKey>, I>>(object: I): LimitOrderTrancheKey;
};
export declare const LimitOrderTranche: {
    typeUrl: string;
    encode(message: LimitOrderTranche, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LimitOrderTranche;
    fromJSON(object: any): LimitOrderTranche;
    toJSON(message: LimitOrderTranche): JsonSafe<LimitOrderTranche>;
    fromPartial<I extends Exact<DeepPartial<LimitOrderTranche>, I>>(object: I): LimitOrderTranche;
};
