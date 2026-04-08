import { PoolReserves } from "./pool_reserves.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.dex";
export interface Pool {
    id: bigint;
    lowerTick0?: PoolReserves;
    upperTick1?: PoolReserves;
}
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): JsonSafe<Pool>;
    fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool;
};
