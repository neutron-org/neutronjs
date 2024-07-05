/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { CurrencyPair } from "../../types/v1/currency_pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.oracle.v1";
/**
 * QuotePrice is the representation of the aggregated prices for a CurrencyPair,
 * where price represents the price of Base in terms of Quote
 */
export interface QuotePrice {
  price: string;
  /**
   * BlockTimestamp tracks the block height associated with this price update.
   * We include block timestamp alongside the price to ensure that smart
   * contracts and applications are not utilizing stale oracle prices
   */
  blockTimestamp: Timestamp;
  /** BlockHeight is height of block mentioned above */
  blockHeight: bigint;
}
/**
 * CurrencyPairState represents the stateful information tracked by the x/oracle
 * module per-currency-pair.
 */
export interface CurrencyPairState {
  /**
   * QuotePrice is the latest price for a currency-pair, notice this value can
   * be null in the case that no price exists for the currency-pair
   */
  price?: QuotePrice;
  /** Nonce is the number of updates this currency-pair has received */
  nonce: bigint;
  /** ID is the ID of the CurrencyPair */
  id: bigint;
}
/**
 * CurrencyPairGenesis is the information necessary for initialization of a
 * CurrencyPair.
 */
export interface CurrencyPairGenesis {
  /** The CurrencyPair to be added to module state */
  currencyPair: CurrencyPair;
  /**
   * A genesis price if one exists (note this will be empty, unless it results
   * from forking the state of this module)
   */
  currencyPairPrice?: QuotePrice;
  /**
   * nonce is the nonce (number of updates) for the CP (same case as above,
   * likely 0 unless it results from fork of module)
   */
  nonce: bigint;
  /** id is the ID of the CurrencyPair */
  id: bigint;
}
/**
 * GenesisState is the genesis-state for the x/oracle module, it takes a set of
 * predefined CurrencyPairGeneses
 */
export interface GenesisState {
  /**
   * CurrencyPairGenesis is the set of CurrencyPairGeneses for the module. I.e
   * the starting set of CurrencyPairs for the module + information regarding
   * their latest update.
   */
  currencyPairGenesis: CurrencyPairGenesis[];
  /** NextID is the next ID to be used for a CurrencyPair */
  nextId: bigint;
}
function createBaseQuotePrice(): QuotePrice {
  return {
    price: "",
    blockTimestamp: Timestamp.fromPartial({}),
    blockHeight: BigInt(0),
  };
}
export const QuotePrice = {
  typeUrl: "/slinky.oracle.v1.QuotePrice",
  encode(message: QuotePrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.blockTimestamp !== undefined) {
      Timestamp.encode(message.blockTimestamp, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotePrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.blockTimestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.blockHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuotePrice {
    const obj = createBaseQuotePrice();
    if (isSet(object.price)) obj.price = String(object.price);
    if (isSet(object.blockTimestamp)) obj.blockTimestamp = fromJsonTimestamp(object.blockTimestamp);
    if (isSet(object.blockHeight)) obj.blockHeight = BigInt(object.blockHeight.toString());
    return obj;
  },
  toJSON(message: QuotePrice): JsonSafe<QuotePrice> {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price);
    message.blockTimestamp !== undefined &&
      (obj.blockTimestamp = fromTimestamp(message.blockTimestamp).toISOString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QuotePrice>, I>>(object: I): QuotePrice {
    const message = createBaseQuotePrice();
    message.price = object.price ?? "";
    if (object.blockTimestamp !== undefined && object.blockTimestamp !== null) {
      message.blockTimestamp = Timestamp.fromPartial(object.blockTimestamp);
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight.toString());
    }
    return message;
  },
};
function createBaseCurrencyPairState(): CurrencyPairState {
  return {
    price: undefined,
    nonce: BigInt(0),
    id: BigInt(0),
  };
}
export const CurrencyPairState = {
  typeUrl: "/slinky.oracle.v1.CurrencyPairState",
  encode(message: CurrencyPairState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      QuotePrice.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurrencyPairState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyPairState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = QuotePrice.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonce = reader.uint64();
          break;
        case 3:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CurrencyPairState {
    const obj = createBaseCurrencyPairState();
    if (isSet(object.price)) obj.price = QuotePrice.fromJSON(object.price);
    if (isSet(object.nonce)) obj.nonce = BigInt(object.nonce.toString());
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: CurrencyPairState): JsonSafe<CurrencyPairState> {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? QuotePrice.toJSON(message.price) : undefined);
    message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CurrencyPairState>, I>>(object: I): CurrencyPairState {
    const message = createBaseCurrencyPairState();
    if (object.price !== undefined && object.price !== null) {
      message.price = QuotePrice.fromPartial(object.price);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce.toString());
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
function createBaseCurrencyPairGenesis(): CurrencyPairGenesis {
  return {
    currencyPair: CurrencyPair.fromPartial({}),
    currencyPairPrice: undefined,
    nonce: BigInt(0),
    id: BigInt(0),
  };
}
export const CurrencyPairGenesis = {
  typeUrl: "/slinky.oracle.v1.CurrencyPairGenesis",
  encode(message: CurrencyPairGenesis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currencyPair !== undefined) {
      CurrencyPair.encode(message.currencyPair, writer.uint32(10).fork()).ldelim();
    }
    if (message.currencyPairPrice !== undefined) {
      QuotePrice.encode(message.currencyPairPrice, writer.uint32(18).fork()).ldelim();
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.nonce);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurrencyPairGenesis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyPairGenesis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currencyPair = CurrencyPair.decode(reader, reader.uint32());
          break;
        case 2:
          message.currencyPairPrice = QuotePrice.decode(reader, reader.uint32());
          break;
        case 3:
          message.nonce = reader.uint64();
          break;
        case 4:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CurrencyPairGenesis {
    const obj = createBaseCurrencyPairGenesis();
    if (isSet(object.currencyPair)) obj.currencyPair = CurrencyPair.fromJSON(object.currencyPair);
    if (isSet(object.currencyPairPrice))
      obj.currencyPairPrice = QuotePrice.fromJSON(object.currencyPairPrice);
    if (isSet(object.nonce)) obj.nonce = BigInt(object.nonce.toString());
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: CurrencyPairGenesis): JsonSafe<CurrencyPairGenesis> {
    const obj: any = {};
    message.currencyPair !== undefined &&
      (obj.currencyPair = message.currencyPair ? CurrencyPair.toJSON(message.currencyPair) : undefined);
    message.currencyPairPrice !== undefined &&
      (obj.currencyPairPrice = message.currencyPairPrice
        ? QuotePrice.toJSON(message.currencyPairPrice)
        : undefined);
    message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CurrencyPairGenesis>, I>>(object: I): CurrencyPairGenesis {
    const message = createBaseCurrencyPairGenesis();
    if (object.currencyPair !== undefined && object.currencyPair !== null) {
      message.currencyPair = CurrencyPair.fromPartial(object.currencyPair);
    }
    if (object.currencyPairPrice !== undefined && object.currencyPairPrice !== null) {
      message.currencyPairPrice = QuotePrice.fromPartial(object.currencyPairPrice);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce.toString());
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    currencyPairGenesis: [],
    nextId: BigInt(0),
  };
}
export const GenesisState = {
  typeUrl: "/slinky.oracle.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.currencyPairGenesis) {
      CurrencyPairGenesis.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextId !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextId);
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
          message.currencyPairGenesis.push(CurrencyPairGenesis.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextId = reader.uint64();
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
    if (Array.isArray(object?.currencyPairGenesis))
      obj.currencyPairGenesis = object.currencyPairGenesis.map((e: any) => CurrencyPairGenesis.fromJSON(e));
    if (isSet(object.nextId)) obj.nextId = BigInt(object.nextId.toString());
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.currencyPairGenesis) {
      obj.currencyPairGenesis = message.currencyPairGenesis.map((e) =>
        e ? CurrencyPairGenesis.toJSON(e) : undefined,
      );
    } else {
      obj.currencyPairGenesis = [];
    }
    message.nextId !== undefined && (obj.nextId = (message.nextId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.currencyPairGenesis =
      object.currencyPairGenesis?.map((e) => CurrencyPairGenesis.fromPartial(e)) || [];
    if (object.nextId !== undefined && object.nextId !== null) {
      message.nextId = BigInt(object.nextId.toString());
    }
    return message;
  },
};
