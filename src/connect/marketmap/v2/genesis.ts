/* eslint-disable */
import { MarketMap } from "./market";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "connect.marketmap.v2";
/** GenesisState defines the x/marketmap module's genesis state. */
export interface GenesisState {
  /**
   * MarketMap defines the global set of market configurations for all providers
   * and markets.
   */
  marketMap: MarketMap;
  /**
   * LastUpdated is the last block height that the market map was updated.
   * This field can be used as an optimization for clients checking if there
   * is a new update to the map.
   */
  lastUpdated: bigint;
  /** Params are the parameters for the x/marketmap module. */
  params: Params;
}
function createBaseGenesisState(): GenesisState {
  return {
    marketMap: MarketMap.fromPartial({}),
    lastUpdated: BigInt(0),
    params: Params.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/connect.marketmap.v2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.marketMap !== undefined) {
      MarketMap.encode(message.marketMap, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastUpdated !== BigInt(0)) {
      writer.uint32(16).uint64(message.lastUpdated);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
          message.marketMap = MarketMap.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastUpdated = reader.uint64();
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
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
    if (isSet(object.marketMap)) obj.marketMap = MarketMap.fromJSON(object.marketMap);
    if (isSet(object.lastUpdated)) obj.lastUpdated = BigInt(object.lastUpdated.toString());
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.marketMap !== undefined &&
      (obj.marketMap = message.marketMap ? MarketMap.toJSON(message.marketMap) : undefined);
    message.lastUpdated !== undefined && (obj.lastUpdated = (message.lastUpdated || BigInt(0)).toString());
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.marketMap !== undefined && object.marketMap !== null) {
      message.marketMap = MarketMap.fromPartial(object.marketMap);
    }
    if (object.lastUpdated !== undefined && object.lastUpdated !== null) {
      message.lastUpdated = BigInt(object.lastUpdated.toString());
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
