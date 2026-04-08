import { TradePairID } from "./trade_pair_id.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface PoolReservesKey {
    tradePairId?: TradePairID;
    tickIndexTakerToMaker: bigint;
    fee: bigint;
}
export interface PoolReserves {
    key?: PoolReservesKey;
    /** DEPRECATED: reserves_maker_denom will be removed in future release, `dec_reserves_maker_denom` should always be used. */
    /** @deprecated */
    reservesMakerDenom: string;
    /** DEPRECATED: price_taker_to_maker will be removed in future release, `maker_price` should always be used. */
    /** @deprecated */
    priceTakerToMaker: string;
    /**
     * DEPRECATED: price_opposite_taker_maker was an internal implementation detail and will be removed in a future release.
     * It is being kept strictly for backwards compatibility. The actual field value is unused.
     */
    /** @deprecated */
    priceOppositeTakerToMaker: string;
    /** This is the price of the PoolReserves denominated in the opposite token. (ie. 1 TokenA with a maker_price of 10 is worth 10 TokenB ) */
    makerPrice: string;
    decReservesMakerDenom: string;
}
export declare const PoolReservesKey: {
    typeUrl: string;
    encode(message: PoolReservesKey, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolReservesKey;
    fromJSON(object: any): PoolReservesKey;
    toJSON(message: PoolReservesKey): JsonSafe<PoolReservesKey>;
    fromPartial<I extends Exact<DeepPartial<PoolReservesKey>, I>>(object: I): PoolReservesKey;
};
export declare const PoolReserves: {
    typeUrl: string;
    encode(message: PoolReserves, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolReserves;
    fromJSON(object: any): PoolReserves;
    toJSON(message: PoolReserves): JsonSafe<PoolReserves>;
    fromPartial<I extends Exact<DeepPartial<PoolReserves>, I>>(object: I): PoolReserves;
};
