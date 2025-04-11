/* eslint-disable */
import { ConsumerParams } from "../../v1/shared_consumer";
import { SlashRecord } from "./consumer";
import { ConsumerPacketData } from "../../v1/wire";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "interchain_security.ccv.consumer.v1";
/** NextFeeDistributionEstimate holds information about next fee distribution */
export interface NextFeeDistributionEstimate {
  /** current block height at the time of querying */
  currentHeight: bigint;
  /** block height at which last distribution took place */
  lastHeight: bigint;
  /** block height at which next distribution will take place */
  nextHeight: bigint;
  /** ratio between consumer and provider fee distribution */
  distributionFraction: string;
  /** total accruead fees at the time of querying */
  total: string;
  /** amount distributed to provider chain */
  toProvider: string;
  /** amount distributed (kept) by consumer chain */
  toConsumer: string;
}
export interface QueryNextFeeDistributionEstimateRequest {}
export interface QueryNextFeeDistributionEstimateResponse {
  data?: NextFeeDistributionEstimate;
}
export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: ConsumerParams;
}
export interface QueryProviderInfoRequest {}
export interface QueryProviderInfoResponse {
  consumer: ChainInfo;
  provider: ChainInfo;
}
export interface QueryThrottleStateRequest {}
export interface QueryThrottleStateResponse {
  slashRecord?: SlashRecord;
  packetDataQueue: ConsumerPacketData[];
}
export interface ChainInfo {
  chainID: string;
  clientID: string;
  connectionID: string;
  channelID: string;
}
function createBaseNextFeeDistributionEstimate(): NextFeeDistributionEstimate {
  return {
    currentHeight: BigInt(0),
    lastHeight: BigInt(0),
    nextHeight: BigInt(0),
    distributionFraction: "",
    total: "",
    toProvider: "",
    toConsumer: "",
  };
}
export const NextFeeDistributionEstimate = {
  typeUrl: "/interchain_security.ccv.consumer.v1.NextFeeDistributionEstimate",
  encode(message: NextFeeDistributionEstimate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.currentHeight);
    }
    if (message.lastHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.lastHeight);
    }
    if (message.nextHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.nextHeight);
    }
    if (message.distributionFraction !== "") {
      writer.uint32(34).string(message.distributionFraction);
    }
    if (message.total !== "") {
      writer.uint32(42).string(message.total);
    }
    if (message.toProvider !== "") {
      writer.uint32(50).string(message.toProvider);
    }
    if (message.toConsumer !== "") {
      writer.uint32(58).string(message.toConsumer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NextFeeDistributionEstimate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextFeeDistributionEstimate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentHeight = reader.int64();
          break;
        case 2:
          message.lastHeight = reader.int64();
          break;
        case 3:
          message.nextHeight = reader.int64();
          break;
        case 4:
          message.distributionFraction = reader.string();
          break;
        case 5:
          message.total = reader.string();
          break;
        case 6:
          message.toProvider = reader.string();
          break;
        case 7:
          message.toConsumer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NextFeeDistributionEstimate {
    const obj = createBaseNextFeeDistributionEstimate();
    if (isSet(object.currentHeight)) obj.currentHeight = BigInt(object.currentHeight.toString());
    if (isSet(object.lastHeight)) obj.lastHeight = BigInt(object.lastHeight.toString());
    if (isSet(object.nextHeight)) obj.nextHeight = BigInt(object.nextHeight.toString());
    if (isSet(object.distributionFraction)) obj.distributionFraction = String(object.distributionFraction);
    if (isSet(object.total)) obj.total = String(object.total);
    if (isSet(object.toProvider)) obj.toProvider = String(object.toProvider);
    if (isSet(object.toConsumer)) obj.toConsumer = String(object.toConsumer);
    return obj;
  },
  toJSON(message: NextFeeDistributionEstimate): JsonSafe<NextFeeDistributionEstimate> {
    const obj: any = {};
    message.currentHeight !== undefined &&
      (obj.currentHeight = (message.currentHeight || BigInt(0)).toString());
    message.lastHeight !== undefined && (obj.lastHeight = (message.lastHeight || BigInt(0)).toString());
    message.nextHeight !== undefined && (obj.nextHeight = (message.nextHeight || BigInt(0)).toString());
    message.distributionFraction !== undefined && (obj.distributionFraction = message.distributionFraction);
    message.total !== undefined && (obj.total = message.total);
    message.toProvider !== undefined && (obj.toProvider = message.toProvider);
    message.toConsumer !== undefined && (obj.toConsumer = message.toConsumer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NextFeeDistributionEstimate>, I>>(
    object: I,
  ): NextFeeDistributionEstimate {
    const message = createBaseNextFeeDistributionEstimate();
    if (object.currentHeight !== undefined && object.currentHeight !== null) {
      message.currentHeight = BigInt(object.currentHeight.toString());
    }
    if (object.lastHeight !== undefined && object.lastHeight !== null) {
      message.lastHeight = BigInt(object.lastHeight.toString());
    }
    if (object.nextHeight !== undefined && object.nextHeight !== null) {
      message.nextHeight = BigInt(object.nextHeight.toString());
    }
    message.distributionFraction = object.distributionFraction ?? "";
    message.total = object.total ?? "";
    message.toProvider = object.toProvider ?? "";
    message.toConsumer = object.toConsumer ?? "";
    return message;
  },
};
function createBaseQueryNextFeeDistributionEstimateRequest(): QueryNextFeeDistributionEstimateRequest {
  return {};
}
export const QueryNextFeeDistributionEstimateRequest = {
  typeUrl: "/interchain_security.ccv.consumer.v1.QueryNextFeeDistributionEstimateRequest",
  encode(
    _: QueryNextFeeDistributionEstimateRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextFeeDistributionEstimateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextFeeDistributionEstimateRequest();
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
  fromJSON(_: any): QueryNextFeeDistributionEstimateRequest {
    const obj = createBaseQueryNextFeeDistributionEstimateRequest();
    return obj;
  },
  toJSON(_: QueryNextFeeDistributionEstimateRequest): JsonSafe<QueryNextFeeDistributionEstimateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryNextFeeDistributionEstimateRequest>, I>>(
    _: I,
  ): QueryNextFeeDistributionEstimateRequest {
    const message = createBaseQueryNextFeeDistributionEstimateRequest();
    return message;
  },
};
function createBaseQueryNextFeeDistributionEstimateResponse(): QueryNextFeeDistributionEstimateResponse {
  return {
    data: undefined,
  };
}
export const QueryNextFeeDistributionEstimateResponse = {
  typeUrl: "/interchain_security.ccv.consumer.v1.QueryNextFeeDistributionEstimateResponse",
  encode(
    message: QueryNextFeeDistributionEstimateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.data !== undefined) {
      NextFeeDistributionEstimate.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextFeeDistributionEstimateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextFeeDistributionEstimateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = NextFeeDistributionEstimate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNextFeeDistributionEstimateResponse {
    const obj = createBaseQueryNextFeeDistributionEstimateResponse();
    if (isSet(object.data)) obj.data = NextFeeDistributionEstimate.fromJSON(object.data);
    return obj;
  },
  toJSON(
    message: QueryNextFeeDistributionEstimateResponse,
  ): JsonSafe<QueryNextFeeDistributionEstimateResponse> {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? NextFeeDistributionEstimate.toJSON(message.data) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryNextFeeDistributionEstimateResponse>, I>>(
    object: I,
  ): QueryNextFeeDistributionEstimateResponse {
    const message = createBaseQueryNextFeeDistributionEstimateResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = NextFeeDistributionEstimate.fromPartial(object.data);
    }
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/interchain_security.ccv.consumer.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: ConsumerParams.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/interchain_security.ccv.consumer.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      ConsumerParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = ConsumerParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = ConsumerParams.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? ConsumerParams.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = ConsumerParams.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryProviderInfoRequest(): QueryProviderInfoRequest {
  return {};
}
export const QueryProviderInfoRequest = {
  typeUrl: "/interchain_security.ccv.consumer.v1.QueryProviderInfoRequest",
  encode(_: QueryProviderInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderInfoRequest();
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
  fromJSON(_: any): QueryProviderInfoRequest {
    const obj = createBaseQueryProviderInfoRequest();
    return obj;
  },
  toJSON(_: QueryProviderInfoRequest): JsonSafe<QueryProviderInfoRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderInfoRequest>, I>>(_: I): QueryProviderInfoRequest {
    const message = createBaseQueryProviderInfoRequest();
    return message;
  },
};
function createBaseQueryProviderInfoResponse(): QueryProviderInfoResponse {
  return {
    consumer: ChainInfo.fromPartial({}),
    provider: ChainInfo.fromPartial({}),
  };
}
export const QueryProviderInfoResponse = {
  typeUrl: "/interchain_security.ccv.consumer.v1.QueryProviderInfoResponse",
  encode(message: QueryProviderInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consumer !== undefined) {
      ChainInfo.encode(message.consumer, writer.uint32(10).fork()).ldelim();
    }
    if (message.provider !== undefined) {
      ChainInfo.encode(message.provider, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumer = ChainInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.provider = ChainInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderInfoResponse {
    const obj = createBaseQueryProviderInfoResponse();
    if (isSet(object.consumer)) obj.consumer = ChainInfo.fromJSON(object.consumer);
    if (isSet(object.provider)) obj.provider = ChainInfo.fromJSON(object.provider);
    return obj;
  },
  toJSON(message: QueryProviderInfoResponse): JsonSafe<QueryProviderInfoResponse> {
    const obj: any = {};
    message.consumer !== undefined &&
      (obj.consumer = message.consumer ? ChainInfo.toJSON(message.consumer) : undefined);
    message.provider !== undefined &&
      (obj.provider = message.provider ? ChainInfo.toJSON(message.provider) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderInfoResponse>, I>>(
    object: I,
  ): QueryProviderInfoResponse {
    const message = createBaseQueryProviderInfoResponse();
    if (object.consumer !== undefined && object.consumer !== null) {
      message.consumer = ChainInfo.fromPartial(object.consumer);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = ChainInfo.fromPartial(object.provider);
    }
    return message;
  },
};
function createBaseQueryThrottleStateRequest(): QueryThrottleStateRequest {
  return {};
}
export const QueryThrottleStateRequest = {
  typeUrl: "/interchain_security.ccv.consumer.v1.QueryThrottleStateRequest",
  encode(_: QueryThrottleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThrottleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThrottleStateRequest();
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
  fromJSON(_: any): QueryThrottleStateRequest {
    const obj = createBaseQueryThrottleStateRequest();
    return obj;
  },
  toJSON(_: QueryThrottleStateRequest): JsonSafe<QueryThrottleStateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryThrottleStateRequest>, I>>(_: I): QueryThrottleStateRequest {
    const message = createBaseQueryThrottleStateRequest();
    return message;
  },
};
function createBaseQueryThrottleStateResponse(): QueryThrottleStateResponse {
  return {
    slashRecord: undefined,
    packetDataQueue: [],
  };
}
export const QueryThrottleStateResponse = {
  typeUrl: "/interchain_security.ccv.consumer.v1.QueryThrottleStateResponse",
  encode(message: QueryThrottleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.slashRecord !== undefined) {
      SlashRecord.encode(message.slashRecord, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.packetDataQueue) {
      ConsumerPacketData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThrottleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThrottleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashRecord = SlashRecord.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetDataQueue.push(ConsumerPacketData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryThrottleStateResponse {
    const obj = createBaseQueryThrottleStateResponse();
    if (isSet(object.slashRecord)) obj.slashRecord = SlashRecord.fromJSON(object.slashRecord);
    if (Array.isArray(object?.packetDataQueue))
      obj.packetDataQueue = object.packetDataQueue.map((e: any) => ConsumerPacketData.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryThrottleStateResponse): JsonSafe<QueryThrottleStateResponse> {
    const obj: any = {};
    message.slashRecord !== undefined &&
      (obj.slashRecord = message.slashRecord ? SlashRecord.toJSON(message.slashRecord) : undefined);
    if (message.packetDataQueue) {
      obj.packetDataQueue = message.packetDataQueue.map((e) =>
        e ? ConsumerPacketData.toJSON(e) : undefined,
      );
    } else {
      obj.packetDataQueue = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryThrottleStateResponse>, I>>(
    object: I,
  ): QueryThrottleStateResponse {
    const message = createBaseQueryThrottleStateResponse();
    if (object.slashRecord !== undefined && object.slashRecord !== null) {
      message.slashRecord = SlashRecord.fromPartial(object.slashRecord);
    }
    message.packetDataQueue = object.packetDataQueue?.map((e) => ConsumerPacketData.fromPartial(e)) || [];
    return message;
  },
};
function createBaseChainInfo(): ChainInfo {
  return {
    chainID: "",
    clientID: "",
    connectionID: "",
    channelID: "",
  };
}
export const ChainInfo = {
  typeUrl: "/interchain_security.ccv.consumer.v1.ChainInfo",
  encode(message: ChainInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.clientID !== "") {
      writer.uint32(18).string(message.clientID);
    }
    if (message.connectionID !== "") {
      writer.uint32(26).string(message.connectionID);
    }
    if (message.channelID !== "") {
      writer.uint32(34).string(message.channelID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.clientID = reader.string();
          break;
        case 3:
          message.connectionID = reader.string();
          break;
        case 4:
          message.channelID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainInfo {
    const obj = createBaseChainInfo();
    if (isSet(object.chainID)) obj.chainID = String(object.chainID);
    if (isSet(object.clientID)) obj.clientID = String(object.clientID);
    if (isSet(object.connectionID)) obj.connectionID = String(object.connectionID);
    if (isSet(object.channelID)) obj.channelID = String(object.channelID);
    return obj;
  },
  toJSON(message: ChainInfo): JsonSafe<ChainInfo> {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.clientID !== undefined && (obj.clientID = message.clientID);
    message.connectionID !== undefined && (obj.connectionID = message.connectionID);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChainInfo>, I>>(object: I): ChainInfo {
    const message = createBaseChainInfo();
    message.chainID = object.chainID ?? "";
    message.clientID = object.clientID ?? "";
    message.connectionID = object.connectionID ?? "";
    message.channelID = object.channelID ?? "";
    return message;
  },
};
