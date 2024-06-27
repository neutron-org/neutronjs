/* eslint-disable */
import { PoolReserves } from "./pool_reserves";
import { LimitOrderTranche } from "./limit_order_tranche";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.dex";
export interface TickLiquidity {
  poolReserves?: PoolReserves;
  limitOrderTranche?: LimitOrderTranche;
}
function createBaseTickLiquidity(): TickLiquidity {
  return {
    poolReserves: undefined,
    limitOrderTranche: undefined,
  };
}
export const TickLiquidity = {
  typeUrl: "/neutron.dex.TickLiquidity",
  encode(message: TickLiquidity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolReserves !== undefined) {
      PoolReserves.encode(message.poolReserves, writer.uint32(10).fork()).ldelim();
    }
    if (message.limitOrderTranche !== undefined) {
      LimitOrderTranche.encode(message.limitOrderTranche, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TickLiquidity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickLiquidity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolReserves = PoolReserves.decode(reader, reader.uint32());
          break;
        case 2:
          message.limitOrderTranche = LimitOrderTranche.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TickLiquidity {
    const obj = createBaseTickLiquidity();
    if (isSet(object.poolReserves)) obj.poolReserves = PoolReserves.fromJSON(object.poolReserves);
    if (isSet(object.limitOrderTranche))
      obj.limitOrderTranche = LimitOrderTranche.fromJSON(object.limitOrderTranche);
    return obj;
  },
  toJSON(message: TickLiquidity): JsonSafe<TickLiquidity> {
    const obj: any = {};
    message.poolReserves !== undefined &&
      (obj.poolReserves = message.poolReserves ? PoolReserves.toJSON(message.poolReserves) : undefined);
    message.limitOrderTranche !== undefined &&
      (obj.limitOrderTranche = message.limitOrderTranche
        ? LimitOrderTranche.toJSON(message.limitOrderTranche)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TickLiquidity>, I>>(object: I): TickLiquidity {
    const message = createBaseTickLiquidity();
    if (object.poolReserves !== undefined && object.poolReserves !== null) {
      message.poolReserves = PoolReserves.fromPartial(object.poolReserves);
    }
    if (object.limitOrderTranche !== undefined && object.limitOrderTranche !== null) {
      message.limitOrderTranche = LimitOrderTranche.fromPartial(object.limitOrderTranche);
    }
    return message;
  },
};
