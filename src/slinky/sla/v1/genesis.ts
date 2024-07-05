//@ts-nocheck
/* eslint-disable */
import { CurrencyPair } from "../../types/v1/currency_pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "slinky.sla.v1";
/** GenesisState defines the sla module's genesis state. */
export interface GenesisState {
  /** SLAs are the SLAs that are currently active. */
  slas: PriceFeedSLA[];
  /** PrceFeeds are the price feeds that are currently active. */
  priceFeeds: PriceFeed[];
  /** Params are the parameters for the sla module. */
  params: Params;
}
/** Params defines the parameters for the sla module. */
export interface Params {
  /** Enabled is a flag to enable or disable the sla module. */
  enabled: boolean;
}
/**
 * PriceFeedSLA defines the the desired SLA for a given set of price feeds. A
 * price feed is defined to be a set of price prices for the same (currency
 * pair, validator).
 */
export interface PriceFeedSLA {
  /**
   * MaximumViableWindow is the maximum time window that we are interested
   * for the SLA. This is used to determine the moving window of blocks that
   * we are interested in.
   */
  maximumViableWindow: bigint;
  /**
   * ExpectedUptime is the expected uptime for the given validator and price
   * feed.
   */
  expectedUptime: string;
  /**
   * SlashConstant is the constant by which we will multiply the deviation from
   * the expected uptime.
   */
  slashConstant: string;
  /**
   * MinimumBlockUpdates is the minimum number of blocks that the
   * validator had to have voted on in the maximum viable window
   * in order to be considered for the SLA.
   */
  minimumBlockUpdates: bigint;
  /** Frequency is the frequency at which we will check the SLA. */
  frequency: bigint;
  /** ID is the unique identifier for the SLA. */
  id: string;
}
/**
 * PriceFeed defines the object type that will be utilized to monitor how
 * frequently validators are voting with price updates across the network.
 */
export interface PriceFeed {
  /** UpdateMap represents the relevant moving window of price feed updates. */
  updateMap: Uint8Array;
  /**
   * InclusionMap represents the relevant moving window of blocks that the
   * validator has voted on.
   */
  inclusionMap: Uint8Array;
  /** Index corresponds to the current index into the bitmap. */
  index: bigint;
  /** Validator represents the validator that this SLA corresponds to. */
  validator: Uint8Array;
  /** CurrencyPair represents the currency pair that this SLA corresponds to. */
  currencyPair: CurrencyPair;
  /**
   * MaximumViableWindow represents the maximum number of blocks that can be
   * represented by the bit map.
   */
  maximumViableWindow: bigint;
  /** ID corresponds to the SLA ID that this price feed corresponds to. */
  id: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    slas: [],
    priceFeeds: [],
    params: Params.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/slinky.sla.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.slas) {
      PriceFeedSLA.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.priceFeeds) {
      PriceFeed.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.slas.push(PriceFeedSLA.decode(reader, reader.uint32()));
          break;
        case 2:
          message.priceFeeds.push(PriceFeed.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.slas)) obj.slas = object.slas.map((e: any) => PriceFeedSLA.fromJSON(e));
    if (Array.isArray(object?.priceFeeds))
      obj.priceFeeds = object.priceFeeds.map((e: any) => PriceFeed.fromJSON(e));
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.slas) {
      obj.slas = message.slas.map((e) => (e ? PriceFeedSLA.toJSON(e) : undefined));
    } else {
      obj.slas = [];
    }
    if (message.priceFeeds) {
      obj.priceFeeds = message.priceFeeds.map((e) => (e ? PriceFeed.toJSON(e) : undefined));
    } else {
      obj.priceFeeds = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.slas = object.slas?.map((e) => PriceFeedSLA.fromPartial(e)) || [];
    message.priceFeeds = object.priceFeeds?.map((e) => PriceFeed.fromPartial(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseParams(): Params {
  return {
    enabled: false,
  };
}
export const Params = {
  typeUrl: "/slinky.sla.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    return message;
  },
};
function createBasePriceFeedSLA(): PriceFeedSLA {
  return {
    maximumViableWindow: BigInt(0),
    expectedUptime: "",
    slashConstant: "",
    minimumBlockUpdates: BigInt(0),
    frequency: BigInt(0),
    id: "",
  };
}
export const PriceFeedSLA = {
  typeUrl: "/slinky.sla.v1.PriceFeedSLA",
  encode(message: PriceFeedSLA, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maximumViableWindow !== BigInt(0)) {
      writer.uint32(8).uint64(message.maximumViableWindow);
    }
    if (message.expectedUptime !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.expectedUptime, 18).atomics);
    }
    if (message.slashConstant !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.slashConstant, 18).atomics);
    }
    if (message.minimumBlockUpdates !== BigInt(0)) {
      writer.uint32(32).uint64(message.minimumBlockUpdates);
    }
    if (message.frequency !== BigInt(0)) {
      writer.uint32(40).uint64(message.frequency);
    }
    if (message.id !== "") {
      writer.uint32(50).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceFeedSLA {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceFeedSLA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maximumViableWindow = reader.uint64();
          break;
        case 2:
          message.expectedUptime = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.slashConstant = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.minimumBlockUpdates = reader.uint64();
          break;
        case 5:
          message.frequency = reader.uint64();
          break;
        case 6:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PriceFeedSLA {
    const obj = createBasePriceFeedSLA();
    if (isSet(object.maximumViableWindow))
      obj.maximumViableWindow = BigInt(object.maximumViableWindow.toString());
    if (isSet(object.expectedUptime)) obj.expectedUptime = String(object.expectedUptime);
    if (isSet(object.slashConstant)) obj.slashConstant = String(object.slashConstant);
    if (isSet(object.minimumBlockUpdates))
      obj.minimumBlockUpdates = BigInt(object.minimumBlockUpdates.toString());
    if (isSet(object.frequency)) obj.frequency = BigInt(object.frequency.toString());
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: PriceFeedSLA): JsonSafe<PriceFeedSLA> {
    const obj: any = {};
    message.maximumViableWindow !== undefined &&
      (obj.maximumViableWindow = (message.maximumViableWindow || BigInt(0)).toString());
    message.expectedUptime !== undefined && (obj.expectedUptime = message.expectedUptime);
    message.slashConstant !== undefined && (obj.slashConstant = message.slashConstant);
    message.minimumBlockUpdates !== undefined &&
      (obj.minimumBlockUpdates = (message.minimumBlockUpdates || BigInt(0)).toString());
    message.frequency !== undefined && (obj.frequency = (message.frequency || BigInt(0)).toString());
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PriceFeedSLA>, I>>(object: I): PriceFeedSLA {
    const message = createBasePriceFeedSLA();
    if (object.maximumViableWindow !== undefined && object.maximumViableWindow !== null) {
      message.maximumViableWindow = BigInt(object.maximumViableWindow.toString());
    }
    message.expectedUptime = object.expectedUptime ?? "";
    message.slashConstant = object.slashConstant ?? "";
    if (object.minimumBlockUpdates !== undefined && object.minimumBlockUpdates !== null) {
      message.minimumBlockUpdates = BigInt(object.minimumBlockUpdates.toString());
    }
    if (object.frequency !== undefined && object.frequency !== null) {
      message.frequency = BigInt(object.frequency.toString());
    }
    message.id = object.id ?? "";
    return message;
  },
};
function createBasePriceFeed(): PriceFeed {
  return {
    updateMap: new Uint8Array(),
    inclusionMap: new Uint8Array(),
    index: BigInt(0),
    validator: new Uint8Array(),
    currencyPair: CurrencyPair.fromPartial({}),
    maximumViableWindow: BigInt(0),
    id: "",
  };
}
export const PriceFeed = {
  typeUrl: "/slinky.sla.v1.PriceFeed",
  encode(message: PriceFeed, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.updateMap.length !== 0) {
      writer.uint32(10).bytes(message.updateMap);
    }
    if (message.inclusionMap.length !== 0) {
      writer.uint32(18).bytes(message.inclusionMap);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(24).uint64(message.index);
    }
    if (message.validator.length !== 0) {
      writer.uint32(34).bytes(message.validator);
    }
    if (message.currencyPair !== undefined) {
      CurrencyPair.encode(message.currencyPair, writer.uint32(42).fork()).ldelim();
    }
    if (message.maximumViableWindow !== BigInt(0)) {
      writer.uint32(48).uint64(message.maximumViableWindow);
    }
    if (message.id !== "") {
      writer.uint32(58).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PriceFeed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceFeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.updateMap = reader.bytes();
          break;
        case 2:
          message.inclusionMap = reader.bytes();
          break;
        case 3:
          message.index = reader.uint64();
          break;
        case 4:
          message.validator = reader.bytes();
          break;
        case 5:
          message.currencyPair = CurrencyPair.decode(reader, reader.uint32());
          break;
        case 6:
          message.maximumViableWindow = reader.uint64();
          break;
        case 7:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PriceFeed {
    const obj = createBasePriceFeed();
    if (isSet(object.updateMap)) obj.updateMap = bytesFromBase64(object.updateMap);
    if (isSet(object.inclusionMap)) obj.inclusionMap = bytesFromBase64(object.inclusionMap);
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.validator)) obj.validator = bytesFromBase64(object.validator);
    if (isSet(object.currencyPair)) obj.currencyPair = CurrencyPair.fromJSON(object.currencyPair);
    if (isSet(object.maximumViableWindow))
      obj.maximumViableWindow = BigInt(object.maximumViableWindow.toString());
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: PriceFeed): JsonSafe<PriceFeed> {
    const obj: any = {};
    message.updateMap !== undefined &&
      (obj.updateMap = base64FromBytes(
        message.updateMap !== undefined ? message.updateMap : new Uint8Array(),
      ));
    message.inclusionMap !== undefined &&
      (obj.inclusionMap = base64FromBytes(
        message.inclusionMap !== undefined ? message.inclusionMap : new Uint8Array(),
      ));
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.validator !== undefined &&
      (obj.validator = base64FromBytes(
        message.validator !== undefined ? message.validator : new Uint8Array(),
      ));
    message.currencyPair !== undefined &&
      (obj.currencyPair = message.currencyPair ? CurrencyPair.toJSON(message.currencyPair) : undefined);
    message.maximumViableWindow !== undefined &&
      (obj.maximumViableWindow = (message.maximumViableWindow || BigInt(0)).toString());
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PriceFeed>, I>>(object: I): PriceFeed {
    const message = createBasePriceFeed();
    message.updateMap = object.updateMap ?? new Uint8Array();
    message.inclusionMap = object.inclusionMap ?? new Uint8Array();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    message.validator = object.validator ?? new Uint8Array();
    if (object.currencyPair !== undefined && object.currencyPair !== null) {
      message.currencyPair = CurrencyPair.fromPartial(object.currencyPair);
    }
    if (object.maximumViableWindow !== undefined && object.maximumViableWindow !== null) {
      message.maximumViableWindow = BigInt(object.maximumViableWindow.toString());
    }
    message.id = object.id ?? "";
    return message;
  },
};
