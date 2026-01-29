//@ts-nocheck
/* eslint-disable */
import { CurrencyPair } from "../../types/v1/currency_pair";
import { QuotePrice } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, isObject } from "../../../helpers";
export const protobufPackage = "slinky.oracle.v1";
export interface GetAllCurrencyPairsRequest {}
/**
 * GetAllCurrencyPairsResponse returns all CurrencyPairs that the module is
 * currently tracking.
 */
export interface GetAllCurrencyPairsResponse {
  currencyPairs: CurrencyPair[];
}
/**
 * GetPriceRequest either takes a CurrencyPair, or an identifier for the
 * CurrencyPair in the format base/quote.
 */
export interface GetPriceRequest {
  /** CurrencyPair represents the pair that the user wishes to query. */
  currencyPair: CurrencyPair;
}
/**
 * GetPriceResponse is the response from the GetPrice grpc method exposed from
 * the x/oracle query service.
 */
export interface GetPriceResponse {
  /**
   * QuotePrice represents the quote-price for the CurrencyPair given in
   * GetPriceRequest (possibly nil if no update has been made)
   */
  price?: QuotePrice;
  /** nonce represents the nonce for the CurrencyPair if it exists in state */
  nonce: bigint;
  /**
   * decimals represents the number of decimals that the quote-price is
   * represented in. For Pairs where ETHEREUM is the quote this will be 18,
   * otherwise it will be 8.
   */
  decimals: bigint;
  /** ID represents the identifier for the CurrencyPair. */
  id: bigint;
}
/**
 * GetPricesRequest takes an identifier for the CurrencyPair
 * in the format base/quote.
 */
export interface GetPricesRequest {
  currencyPairIds: string[];
}
/**
 * GetPricesResponse is the response from the GetPrices grpc method exposed from
 * the x/oracle query service.
 */
export interface GetPricesResponse {
  prices: GetPriceResponse[];
}
/** GetCurrencyPairMappingRequest is the GetCurrencyPairMapping request type. */
export interface GetCurrencyPairMappingRequest {}
export interface GetCurrencyPairMappingResponse_CurrencyPairMappingEntry {
  key: bigint;
  value?: CurrencyPair;
}
/** GetCurrencyPairMappingResponse is the GetCurrencyPairMapping response type. */
export interface GetCurrencyPairMappingResponse {
  /**
   * currency_pair_mapping is a mapping of the id representing the currency pair
   * to the currency pair itself.
   */
  currencyPairMapping: {
    [key: bigint]: CurrencyPair;
  };
}
/** GetCurrencyPairMappingRequest is the GetCurrencyPairMapping request type. */
export interface GetCurrencyPairMappingListRequest {}
export interface CurrencyPairMapping {
  /** ID is the unique identifier for this currency pair string. */
  id: bigint;
  /** CurrencyPair is the human-readable representation of the currency pair. */
  currencyPair: CurrencyPair;
}
/** GetCurrencyPairMappingResponse is the GetCurrencyPairMapping response type. */
export interface GetCurrencyPairMappingListResponse {
  /**
   * mappings is a list of the id representing the currency pair
   * to the currency pair itself.
   */
  mappings: CurrencyPairMapping[];
}
function createBaseGetAllCurrencyPairsRequest(): GetAllCurrencyPairsRequest {
  return {};
}
export const GetAllCurrencyPairsRequest = {
  typeUrl: "/slinky.oracle.v1.GetAllCurrencyPairsRequest",
  encode(_: GetAllCurrencyPairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAllCurrencyPairsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllCurrencyPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetAllCurrencyPairsRequest {
    const obj = createBaseGetAllCurrencyPairsRequest();
    return obj;
  },
  toJSON(_: GetAllCurrencyPairsRequest): JsonSafe<GetAllCurrencyPairsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAllCurrencyPairsRequest>, I>>(_: I): GetAllCurrencyPairsRequest {
    const message = createBaseGetAllCurrencyPairsRequest();
    return message;
  },
};
function createBaseGetAllCurrencyPairsResponse(): GetAllCurrencyPairsResponse {
  return {
    currencyPairs: [],
  };
}
export const GetAllCurrencyPairsResponse = {
  typeUrl: "/slinky.oracle.v1.GetAllCurrencyPairsResponse",
  encode(message: GetAllCurrencyPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.currencyPairs) {
      CurrencyPair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAllCurrencyPairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllCurrencyPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currencyPairs.push(CurrencyPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetAllCurrencyPairsResponse {
    const obj = createBaseGetAllCurrencyPairsResponse();
    if (Array.isArray(object?.currencyPairs))
      obj.currencyPairs = object.currencyPairs.map((e: any) => CurrencyPair.fromJSON(e));
    return obj;
  },
  toJSON(message: GetAllCurrencyPairsResponse): JsonSafe<GetAllCurrencyPairsResponse> {
    const obj: any = {};
    if (message.currencyPairs) {
      obj.currencyPairs = message.currencyPairs.map((e) => (e ? CurrencyPair.toJSON(e) : undefined));
    } else {
      obj.currencyPairs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAllCurrencyPairsResponse>, I>>(
    object: I,
  ): GetAllCurrencyPairsResponse {
    const message = createBaseGetAllCurrencyPairsResponse();
    message.currencyPairs = object.currencyPairs?.map((e) => CurrencyPair.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGetPriceRequest(): GetPriceRequest {
  return {
    currencyPair: CurrencyPair.fromPartial({}),
  };
}
export const GetPriceRequest = {
  typeUrl: "/slinky.oracle.v1.GetPriceRequest",
  encode(message: GetPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currencyPair !== undefined) {
      CurrencyPair.encode(message.currencyPair, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currencyPair = CurrencyPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetPriceRequest {
    const obj = createBaseGetPriceRequest();
    if (isSet(object.currencyPair)) obj.currencyPair = CurrencyPair.fromJSON(object.currencyPair);
    return obj;
  },
  toJSON(message: GetPriceRequest): JsonSafe<GetPriceRequest> {
    const obj: any = {};
    message.currencyPair !== undefined &&
      (obj.currencyPair = message.currencyPair ? CurrencyPair.toJSON(message.currencyPair) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetPriceRequest>, I>>(object: I): GetPriceRequest {
    const message = createBaseGetPriceRequest();
    if (object.currencyPair !== undefined && object.currencyPair !== null) {
      message.currencyPair = CurrencyPair.fromPartial(object.currencyPair);
    }
    return message;
  },
};
function createBaseGetPriceResponse(): GetPriceResponse {
  return {
    price: undefined,
    nonce: BigInt(0),
    decimals: BigInt(0),
    id: BigInt(0),
  };
}
export const GetPriceResponse = {
  typeUrl: "/slinky.oracle.v1.GetPriceResponse",
  encode(message: GetPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      QuotePrice.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.nonce);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(24).uint64(message.decimals);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPriceResponse();
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
          message.decimals = reader.uint64();
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
  fromJSON(object: any): GetPriceResponse {
    const obj = createBaseGetPriceResponse();
    if (isSet(object.price)) obj.price = QuotePrice.fromJSON(object.price);
    if (isSet(object.nonce)) obj.nonce = BigInt(object.nonce.toString());
    if (isSet(object.decimals)) obj.decimals = BigInt(object.decimals.toString());
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: GetPriceResponse): JsonSafe<GetPriceResponse> {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? QuotePrice.toJSON(message.price) : undefined);
    message.nonce !== undefined && (obj.nonce = (message.nonce || BigInt(0)).toString());
    message.decimals !== undefined && (obj.decimals = (message.decimals || BigInt(0)).toString());
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetPriceResponse>, I>>(object: I): GetPriceResponse {
    const message = createBaseGetPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = QuotePrice.fromPartial(object.price);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce.toString());
    }
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals.toString());
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
function createBaseGetPricesRequest(): GetPricesRequest {
  return {
    currencyPairIds: [],
  };
}
export const GetPricesRequest = {
  typeUrl: "/slinky.oracle.v1.GetPricesRequest",
  encode(message: GetPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.currencyPairIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currencyPairIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetPricesRequest {
    const obj = createBaseGetPricesRequest();
    if (Array.isArray(object?.currencyPairIds))
      obj.currencyPairIds = object.currencyPairIds.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: GetPricesRequest): JsonSafe<GetPricesRequest> {
    const obj: any = {};
    if (message.currencyPairIds) {
      obj.currencyPairIds = message.currencyPairIds.map((e) => e);
    } else {
      obj.currencyPairIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetPricesRequest>, I>>(object: I): GetPricesRequest {
    const message = createBaseGetPricesRequest();
    message.currencyPairIds = object.currencyPairIds?.map((e) => e) || [];
    return message;
  },
};
function createBaseGetPricesResponse(): GetPricesResponse {
  return {
    prices: [],
  };
}
export const GetPricesResponse = {
  typeUrl: "/slinky.oracle.v1.GetPricesResponse",
  encode(message: GetPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      GetPriceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(GetPriceResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetPricesResponse {
    const obj = createBaseGetPricesResponse();
    if (Array.isArray(object?.prices))
      obj.prices = object.prices.map((e: any) => GetPriceResponse.fromJSON(e));
    return obj;
  },
  toJSON(message: GetPricesResponse): JsonSafe<GetPricesResponse> {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) => (e ? GetPriceResponse.toJSON(e) : undefined));
    } else {
      obj.prices = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetPricesResponse>, I>>(object: I): GetPricesResponse {
    const message = createBaseGetPricesResponse();
    message.prices = object.prices?.map((e) => GetPriceResponse.fromPartial(e)) || [];
    return message;
  },
};
function createBaseGetCurrencyPairMappingRequest(): GetCurrencyPairMappingRequest {
  return {};
}
export const GetCurrencyPairMappingRequest = {
  typeUrl: "/slinky.oracle.v1.GetCurrencyPairMappingRequest",
  encode(_: GetCurrencyPairMappingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetCurrencyPairMappingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrencyPairMappingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetCurrencyPairMappingRequest {
    const obj = createBaseGetCurrencyPairMappingRequest();
    return obj;
  },
  toJSON(_: GetCurrencyPairMappingRequest): JsonSafe<GetCurrencyPairMappingRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetCurrencyPairMappingRequest>, I>>(
    _: I,
  ): GetCurrencyPairMappingRequest {
    const message = createBaseGetCurrencyPairMappingRequest();
    return message;
  },
};
function createBaseGetCurrencyPairMappingResponse_CurrencyPairMappingEntry(): GetCurrencyPairMappingResponse_CurrencyPairMappingEntry {
  return {
    key: BigInt(0),
    value: undefined,
  };
}
export const GetCurrencyPairMappingResponse_CurrencyPairMappingEntry = {
  encode(
    message: GetCurrencyPairMappingResponse_CurrencyPairMappingEntry,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).uint64(message.key);
    }
    if (message.value !== undefined) {
      CurrencyPair.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetCurrencyPairMappingResponse_CurrencyPairMappingEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrencyPairMappingResponse_CurrencyPairMappingEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.uint64();
          break;
        case 2:
          message.value = CurrencyPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetCurrencyPairMappingResponse_CurrencyPairMappingEntry {
    const obj = createBaseGetCurrencyPairMappingResponse_CurrencyPairMappingEntry();
    if (isSet(object.key)) obj.key = BigInt(object.key.toString());
    if (isSet(object.value)) obj.value = CurrencyPair.fromJSON(object.value);
    return obj;
  },
  toJSON(
    message: GetCurrencyPairMappingResponse_CurrencyPairMappingEntry,
  ): JsonSafe<GetCurrencyPairMappingResponse_CurrencyPairMappingEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = (message.key || BigInt(0)).toString());
    message.value !== undefined &&
      (obj.value = message.value ? CurrencyPair.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetCurrencyPairMappingResponse_CurrencyPairMappingEntry>, I>>(
    object: I,
  ): GetCurrencyPairMappingResponse_CurrencyPairMappingEntry {
    const message = createBaseGetCurrencyPairMappingResponse_CurrencyPairMappingEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key.toString());
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = CurrencyPair.fromPartial(object.value);
    }
    return message;
  },
};
function createBaseGetCurrencyPairMappingResponse(): GetCurrencyPairMappingResponse {
  return {
    currencyPairMapping: {},
  };
}
export const GetCurrencyPairMappingResponse = {
  typeUrl: "/slinky.oracle.v1.GetCurrencyPairMappingResponse",
  encode(
    message: GetCurrencyPairMappingResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    Object.entries(message.currencyPairMapping).forEach(([key, value]) => {
      GetCurrencyPairMappingResponse_CurrencyPairMappingEntry.encode(
        {
          key: key as any,
          value,
        },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetCurrencyPairMappingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrencyPairMappingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = GetCurrencyPairMappingResponse_CurrencyPairMappingEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.currencyPairMapping[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetCurrencyPairMappingResponse {
    const obj = createBaseGetCurrencyPairMappingResponse();
    if (isObject(object.currencyPairMapping))
      obj.currencyPairMapping = Object.entries(object.currencyPairMapping).reduce<{
        [key: bigint]: CurrencyPair;
      }>((acc, [key, value]) => {
        acc[Number(key)] = CurrencyPair.fromJSON(value);
        return acc;
      }, {});
    return obj;
  },
  toJSON(message: GetCurrencyPairMappingResponse): JsonSafe<GetCurrencyPairMappingResponse> {
    const obj: any = {};
    obj.currencyPairMapping = {};
    if (message.currencyPairMapping) {
      Object.entries(message.currencyPairMapping).forEach(([k, v]) => {
        obj.currencyPairMapping[k] = CurrencyPair.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetCurrencyPairMappingResponse>, I>>(
    object: I,
  ): GetCurrencyPairMappingResponse {
    const message = createBaseGetCurrencyPairMappingResponse();
    message.currencyPairMapping = Object.entries(object.currencyPairMapping ?? {}).reduce<{
      [key: bigint]: CurrencyPair;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = CurrencyPair.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};
function createBaseGetCurrencyPairMappingListRequest(): GetCurrencyPairMappingListRequest {
  return {};
}
export const GetCurrencyPairMappingListRequest = {
  typeUrl: "/slinky.oracle.v1.GetCurrencyPairMappingListRequest",
  encode(_: GetCurrencyPairMappingListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetCurrencyPairMappingListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrencyPairMappingListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetCurrencyPairMappingListRequest {
    const obj = createBaseGetCurrencyPairMappingListRequest();
    return obj;
  },
  toJSON(_: GetCurrencyPairMappingListRequest): JsonSafe<GetCurrencyPairMappingListRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetCurrencyPairMappingListRequest>, I>>(
    _: I,
  ): GetCurrencyPairMappingListRequest {
    const message = createBaseGetCurrencyPairMappingListRequest();
    return message;
  },
};
function createBaseCurrencyPairMapping(): CurrencyPairMapping {
  return {
    id: BigInt(0),
    currencyPair: CurrencyPair.fromPartial({}),
  };
}
export const CurrencyPairMapping = {
  typeUrl: "/slinky.oracle.v1.CurrencyPairMapping",
  encode(message: CurrencyPairMapping, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.currencyPair !== undefined) {
      CurrencyPair.encode(message.currencyPair, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CurrencyPairMapping {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyPairMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.currencyPair = CurrencyPair.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CurrencyPairMapping {
    const obj = createBaseCurrencyPairMapping();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.currencyPair)) obj.currencyPair = CurrencyPair.fromJSON(object.currencyPair);
    return obj;
  },
  toJSON(message: CurrencyPairMapping): JsonSafe<CurrencyPairMapping> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.currencyPair !== undefined &&
      (obj.currencyPair = message.currencyPair ? CurrencyPair.toJSON(message.currencyPair) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CurrencyPairMapping>, I>>(object: I): CurrencyPairMapping {
    const message = createBaseCurrencyPairMapping();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.currencyPair !== undefined && object.currencyPair !== null) {
      message.currencyPair = CurrencyPair.fromPartial(object.currencyPair);
    }
    return message;
  },
};
function createBaseGetCurrencyPairMappingListResponse(): GetCurrencyPairMappingListResponse {
  return {
    mappings: [],
  };
}
export const GetCurrencyPairMappingListResponse = {
  typeUrl: "/slinky.oracle.v1.GetCurrencyPairMappingListResponse",
  encode(
    message: GetCurrencyPairMappingListResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.mappings) {
      CurrencyPairMapping.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetCurrencyPairMappingListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrencyPairMappingListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mappings.push(CurrencyPairMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetCurrencyPairMappingListResponse {
    const obj = createBaseGetCurrencyPairMappingListResponse();
    if (Array.isArray(object?.mappings))
      obj.mappings = object.mappings.map((e: any) => CurrencyPairMapping.fromJSON(e));
    return obj;
  },
  toJSON(message: GetCurrencyPairMappingListResponse): JsonSafe<GetCurrencyPairMappingListResponse> {
    const obj: any = {};
    if (message.mappings) {
      obj.mappings = message.mappings.map((e) => (e ? CurrencyPairMapping.toJSON(e) : undefined));
    } else {
      obj.mappings = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetCurrencyPairMappingListResponse>, I>>(
    object: I,
  ): GetCurrencyPairMappingListResponse {
    const message = createBaseGetCurrencyPairMappingListResponse();
    message.mappings = object.mappings?.map((e) => CurrencyPairMapping.fromPartial(e)) || [];
    return message;
  },
};
