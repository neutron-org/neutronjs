import { PoolReserves } from "./pool_reserves.js";
import { LimitOrderTranche } from "./limit_order_tranche.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface TickLiquidity {
    poolReserves?: PoolReserves;
    limitOrderTranche?: LimitOrderTranche;
}
export declare const TickLiquidity: {
    typeUrl: string;
    encode(message: TickLiquidity, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TickLiquidity;
    fromJSON(object: any): TickLiquidity;
    toJSON(message: TickLiquidity): JsonSafe<TickLiquidity>;
    fromPartial<I extends Exact<DeepPartial<TickLiquidity>, I>>(object: I): TickLiquidity;
};
