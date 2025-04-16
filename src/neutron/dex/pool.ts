//@ts-nocheck
/* eslint-disable */
import { PoolReserves } from "./pool_reserves";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export interface Pool {
  id: bigint;
  lowerTick0?: PoolReserves;
  upperTick1?: PoolReserves;
}
function createBasePool(): Pool {
  return {
    id: BigInt(0),
    lowerTick0: undefined,
    upperTick1: undefined,
  };
}
export const Pool = {
  typeUrl: "/neutron.dex.Pool",
  encode(message: Pool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.lowerTick0 !== undefined) {
      PoolReserves.encode(message.lowerTick0, writer.uint32(18).fork()).ldelim();
    }
    if (message.upperTick1 !== undefined) {
      PoolReserves.encode(message.upperTick1, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Pool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.lowerTick0 = PoolReserves.decode(reader, reader.uint32());
          break;
        case 3:
          message.upperTick1 = PoolReserves.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Pool {
    const obj = createBasePool();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.lowerTick0)) obj.lowerTick0 = PoolReserves.fromJSON(object.lowerTick0);
    if (isSet(object.upperTick1)) obj.upperTick1 = PoolReserves.fromJSON(object.upperTick1);
    return obj;
  },
  toJSON(message: Pool): JsonSafe<Pool> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.lowerTick0 !== undefined &&
      (obj.lowerTick0 = message.lowerTick0 ? PoolReserves.toJSON(message.lowerTick0) : undefined);
    message.upperTick1 !== undefined &&
      (obj.upperTick1 = message.upperTick1 ? PoolReserves.toJSON(message.upperTick1) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.lowerTick0 !== undefined && object.lowerTick0 !== null) {
      message.lowerTick0 = PoolReserves.fromPartial(object.lowerTick0);
    }
    if (object.upperTick1 !== undefined && object.upperTick1 !== null) {
      message.upperTick1 = PoolReserves.fromPartial(object.upperTick1);
    }
    return message;
  },
  fromAmino(object: PoolAmino): Pool {
    const message = createBasePool();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.lower_tick0 !== undefined && object.lower_tick0 !== null) {
      message.lowerTick0 = PoolReserves.fromAmino(object.lower_tick0);
    }
    if (object.upper_tick1 !== undefined && object.upper_tick1 !== null) {
      message.upperTick1 = PoolReserves.fromAmino(object.upper_tick1);
    }
    return message;
  },
  toAmino(message: Pool): PoolAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.lower_tick0 = message.lowerTick0 ? PoolReserves.toAmino(message.lowerTick0) : undefined;
    obj.upper_tick1 = message.upperTick1 ? PoolReserves.toAmino(message.upperTick1) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolAminoMsg): Pool {
    return Pool.fromAmino(object.value);
  },
};
