//@ts-nocheck
/* eslint-disable */
import { Params } from "./params.js";
import { TickLiquidity } from "./tick_liquidity.js";
import { LimitOrderTranche } from "./limit_order_tranche.js";
import { LimitOrderTrancheUser } from "./limit_order_tranche_user.js";
import { PoolMetadata } from "./pool_metadata.js";
import { BinaryReader, BinaryWriter } from "../../binary.js";
import { isSet, DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export const protobufPackage = "neutron.dex";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
  params: Params;
  tickLiquidityList?: TickLiquidity[];
  inactiveLimitOrderTrancheList?: LimitOrderTranche[];
  limitOrderTrancheUserList?: LimitOrderTrancheUser[];
  poolMetadataList: PoolMetadata[];
  poolCount: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tickLiquidityList: [],
    inactiveLimitOrderTrancheList: [],
    limitOrderTrancheUserList: [],
    poolMetadataList: [],
    poolCount: BigInt(0),
  };
}
export const GenesisState = {
  typeUrl: "/neutron.dex.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tickLiquidityList) {
      TickLiquidity.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.inactiveLimitOrderTrancheList) {
      LimitOrderTranche.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.limitOrderTrancheUserList) {
      LimitOrderTrancheUser.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.poolMetadataList) {
      PoolMetadata.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.poolCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.poolCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tickLiquidityList.push(TickLiquidity.decode(reader, reader.uint32()));
          break;
        case 3:
          message.inactiveLimitOrderTrancheList.push(LimitOrderTranche.decode(reader, reader.uint32()));
          break;
        case 4:
          message.limitOrderTrancheUserList.push(LimitOrderTrancheUser.decode(reader, reader.uint32()));
          break;
        case 5:
          message.poolMetadataList.push(PoolMetadata.decode(reader, reader.uint32()));
          break;
        case 6:
          message.poolCount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.tickLiquidityList))
      obj.tickLiquidityList = object.tickLiquidityList.map((e: any) => TickLiquidity.fromJSON(e));
    if (Array.isArray(object?.inactiveLimitOrderTrancheList))
      obj.inactiveLimitOrderTrancheList = object.inactiveLimitOrderTrancheList.map((e: any) =>
        LimitOrderTranche.fromJSON(e),
      );
    if (Array.isArray(object?.limitOrderTrancheUserList))
      obj.limitOrderTrancheUserList = object.limitOrderTrancheUserList.map((e: any) =>
        LimitOrderTrancheUser.fromJSON(e),
      );
    if (Array.isArray(object?.poolMetadataList))
      obj.poolMetadataList = object.poolMetadataList.map((e: any) => PoolMetadata.fromJSON(e));
    if (isSet(object.poolCount)) obj.poolCount = BigInt(object.poolCount.toString());
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tickLiquidityList) {
      obj.tickLiquidityList = message.tickLiquidityList.map((e) => (e ? TickLiquidity.toJSON(e) : undefined));
    } else {
      obj.tickLiquidityList = [];
    }
    if (message.inactiveLimitOrderTrancheList) {
      obj.inactiveLimitOrderTrancheList = message.inactiveLimitOrderTrancheList.map((e) =>
        e ? LimitOrderTranche.toJSON(e) : undefined,
      );
    } else {
      obj.inactiveLimitOrderTrancheList = [];
    }
    if (message.limitOrderTrancheUserList) {
      obj.limitOrderTrancheUserList = message.limitOrderTrancheUserList.map((e) =>
        e ? LimitOrderTrancheUser.toJSON(e) : undefined,
      );
    } else {
      obj.limitOrderTrancheUserList = [];
    }
    if (message.poolMetadataList) {
      obj.poolMetadataList = message.poolMetadataList.map((e) => (e ? PoolMetadata.toJSON(e) : undefined));
    } else {
      obj.poolMetadataList = [];
    }
    message.poolCount !== undefined && (obj.poolCount = (message.poolCount || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.tickLiquidityList = object.tickLiquidityList?.map((e) => TickLiquidity.fromPartial(e)) || [];
    message.inactiveLimitOrderTrancheList =
      object.inactiveLimitOrderTrancheList?.map((e) => LimitOrderTranche.fromPartial(e)) || [];
    message.limitOrderTrancheUserList =
      object.limitOrderTrancheUserList?.map((e) => LimitOrderTrancheUser.fromPartial(e)) || [];
    message.poolMetadataList = object.poolMetadataList?.map((e) => PoolMetadata.fromPartial(e)) || [];
    if (object.poolCount !== undefined && object.poolCount !== null) {
      message.poolCount = BigInt(object.poolCount.toString());
    }
    return message;
  },
};
