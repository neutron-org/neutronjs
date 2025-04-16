//@ts-nocheck
/* eslint-disable */
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.applications.fee.v1";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** block height at which to query */
  queryHeight: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
  /** list of identified fees for incentivized packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
  /** unique packet identifier comprised of channel ID, port ID and sequence */
  packetId: PacketId;
  /** block height at which to query */
  queryHeight: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
  /** the identified fees for the incentivized packet */
  incentivizedPacket: IdentifiedPacketFees;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  portId: string;
  channelId: string;
  /** Height to query at */
  queryHeight: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
  /** Map of all incentivized_packets */
  incentivizedPackets: IdentifiedPacketFees[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
  /** the total packet receive fees */
  recvFees: Coin[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
  /** the total packet acknowledgement fees */
  ackFees: Coin[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
  /** the packet identifier for the associated fees */
  packetId: PacketId;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
  /** the total packet timeout fees */
  timeoutFees: Coin[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the distribution address is registered */
  relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
  /** the payee address to which packet fees are paid out */
  payeeAddress: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address to which the counterparty is registered */
  relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
  /** the counterparty payee address used to compensate forward relaying */
  counterpartyPayee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
  /** block height at which to query */
  queryHeight: bigint;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
  /** boolean flag representing the fee enabled channel status */
  feeEnabled: boolean;
}
function createBaseQueryIncentivizedPacketsRequest(): QueryIncentivizedPacketsRequest {
  return {
    pagination: undefined,
    queryHeight: BigInt(0),
  };
}
export const QueryIncentivizedPacketsRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest",
  encode(
    message: QueryIncentivizedPacketsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsRequest {
    const obj = createBaseQueryIncentivizedPacketsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketsRequest): JsonSafe<QueryIncentivizedPacketsRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsRequest>, I>>(
    object: I,
  ): QueryIncentivizedPacketsRequest {
    const message = createBaseQueryIncentivizedPacketsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = BigInt(object.queryHeight.toString());
    }
    return message;
  },
  fromAmino(object: QueryIncentivizedPacketsRequestAmino): QueryIncentivizedPacketsRequest {
    const message = createBaseQueryIncentivizedPacketsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.query_height !== undefined && object.query_height !== null) {
      message.queryHeight = BigInt(object.query_height);
    }
    return message;
  },
  toAmino(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.query_height = message.queryHeight !== BigInt(0) ? message.queryHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsRequestAminoMsg): QueryIncentivizedPacketsRequest {
    return QueryIncentivizedPacketsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsRequest",
      value: QueryIncentivizedPacketsRequest.toAmino(message),
    };
  },
};
function createBaseQueryIncentivizedPacketsResponse(): QueryIncentivizedPacketsResponse {
  return {
    incentivizedPackets: [],
    pagination: undefined,
  };
}
export const QueryIncentivizedPacketsResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse",
  encode(
    message: QueryIncentivizedPacketsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsResponse {
    const obj = createBaseQueryIncentivizedPacketsResponse();
    if (Array.isArray(object?.incentivizedPackets))
      obj.incentivizedPackets = object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketsResponse): JsonSafe<QueryIncentivizedPacketsResponse> {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) =>
        e ? IdentifiedPacketFees.toJSON(e) : undefined,
      );
    } else {
      obj.incentivizedPackets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsResponse>, I>>(
    object: I,
  ): QueryIncentivizedPacketsResponse {
    const message = createBaseQueryIncentivizedPacketsResponse();
    message.incentivizedPackets =
      object.incentivizedPackets?.map((e) => IdentifiedPacketFees.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryIncentivizedPacketsResponseAmino): QueryIncentivizedPacketsResponse {
    const message = createBaseQueryIncentivizedPacketsResponse();
    message.incentivizedPackets =
      object.incentivized_packets?.map((e) => IdentifiedPacketFees.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAmino {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map((e) =>
        e ? IdentifiedPacketFees.toAmino(e) : undefined,
      );
    } else {
      obj.incentivized_packets = message.incentivizedPackets;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketsResponseAminoMsg): QueryIncentivizedPacketsResponse {
    return QueryIncentivizedPacketsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsResponse",
      value: QueryIncentivizedPacketsResponse.toAmino(message),
    };
  },
};
function createBaseQueryIncentivizedPacketRequest(): QueryIncentivizedPacketRequest {
  return {
    packetId: PacketId.fromPartial({}),
    queryHeight: BigInt(0),
  };
}
export const QueryIncentivizedPacketRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest",
  encode(
    message: QueryIncentivizedPacketRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketRequest {
    const obj = createBaseQueryIncentivizedPacketRequest();
    if (isSet(object.packetId)) obj.packetId = PacketId.fromJSON(object.packetId);
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketRequest): JsonSafe<QueryIncentivizedPacketRequest> {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketRequest>, I>>(
    object: I,
  ): QueryIncentivizedPacketRequest {
    const message = createBaseQueryIncentivizedPacketRequest();
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = BigInt(object.queryHeight.toString());
    }
    return message;
  },
  fromAmino(object: QueryIncentivizedPacketRequestAmino): QueryIncentivizedPacketRequest {
    const message = createBaseQueryIncentivizedPacketRequest();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    if (object.query_height !== undefined && object.query_height !== null) {
      message.queryHeight = BigInt(object.query_height);
    }
    return message;
  },
  toAmino(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    obj.query_height = message.queryHeight !== BigInt(0) ? message.queryHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketRequestAminoMsg): QueryIncentivizedPacketRequest {
    return QueryIncentivizedPacketRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketRequest",
      value: QueryIncentivizedPacketRequest.toAmino(message),
    };
  },
};
function createBaseQueryIncentivizedPacketResponse(): QueryIncentivizedPacketResponse {
  return {
    incentivizedPacket: IdentifiedPacketFees.fromPartial({}),
  };
}
export const QueryIncentivizedPacketResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse",
  encode(
    message: QueryIncentivizedPacketResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.incentivizedPacket !== undefined) {
      IdentifiedPacketFees.encode(message.incentivizedPacket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPacket = IdentifiedPacketFees.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketResponse {
    const obj = createBaseQueryIncentivizedPacketResponse();
    if (isSet(object.incentivizedPacket))
      obj.incentivizedPacket = IdentifiedPacketFees.fromJSON(object.incentivizedPacket);
    return obj;
  },
  toJSON(message: QueryIncentivizedPacketResponse): JsonSafe<QueryIncentivizedPacketResponse> {
    const obj: any = {};
    message.incentivizedPacket !== undefined &&
      (obj.incentivizedPacket = message.incentivizedPacket
        ? IdentifiedPacketFees.toJSON(message.incentivizedPacket)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketResponse>, I>>(
    object: I,
  ): QueryIncentivizedPacketResponse {
    const message = createBaseQueryIncentivizedPacketResponse();
    if (object.incentivizedPacket !== undefined && object.incentivizedPacket !== null) {
      message.incentivizedPacket = IdentifiedPacketFees.fromPartial(object.incentivizedPacket);
    }
    return message;
  },
  fromAmino(object: QueryIncentivizedPacketResponseAmino): QueryIncentivizedPacketResponse {
    const message = createBaseQueryIncentivizedPacketResponse();
    if (object.incentivized_packet !== undefined && object.incentivized_packet !== null) {
      message.incentivizedPacket = IdentifiedPacketFees.fromAmino(object.incentivized_packet);
    }
    return message;
  },
  toAmino(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAmino {
    const obj: any = {};
    obj.incentivized_packet = message.incentivizedPacket
      ? IdentifiedPacketFees.toAmino(message.incentivizedPacket)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPacketResponseAminoMsg): QueryIncentivizedPacketResponse {
    return QueryIncentivizedPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketResponse",
      value: QueryIncentivizedPacketResponse.toAmino(message),
    };
  },
};
function createBaseQueryIncentivizedPacketsForChannelRequest(): QueryIncentivizedPacketsForChannelRequest {
  return {
    pagination: undefined,
    portId: "",
    channelId: "",
    queryHeight: BigInt(0),
  };
}
export const QueryIncentivizedPacketsForChannelRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest",
  encode(
    message: QueryIncentivizedPacketsForChannelRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(18).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(26).string(message.channelId);
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.portId = reader.string();
          break;
        case 3:
          message.channelId = reader.string();
          break;
        case 4:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest {
    const obj = createBaseQueryIncentivizedPacketsForChannelRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(
    message: QueryIncentivizedPacketsForChannelRequest,
  ): JsonSafe<QueryIncentivizedPacketsForChannelRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsForChannelRequest>, I>>(
    object: I,
  ): QueryIncentivizedPacketsForChannelRequest {
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = BigInt(object.queryHeight.toString());
    }
    return message;
  },
  fromAmino(
    object: QueryIncentivizedPacketsForChannelRequestAmino,
  ): QueryIncentivizedPacketsForChannelRequest {
    const message = createBaseQueryIncentivizedPacketsForChannelRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.query_height !== undefined && object.query_height !== null) {
      message.queryHeight = BigInt(object.query_height);
    }
    return message;
  },
  toAmino(
    message: QueryIncentivizedPacketsForChannelRequest,
  ): QueryIncentivizedPacketsForChannelRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.query_height = message.queryHeight !== BigInt(0) ? message.queryHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryIncentivizedPacketsForChannelRequestAminoMsg,
  ): QueryIncentivizedPacketsForChannelRequest {
    return QueryIncentivizedPacketsForChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryIncentivizedPacketsForChannelRequest,
  ): QueryIncentivizedPacketsForChannelRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsForChannelRequest",
      value: QueryIncentivizedPacketsForChannelRequest.toAmino(message),
    };
  },
};
function createBaseQueryIncentivizedPacketsForChannelResponse(): QueryIncentivizedPacketsForChannelResponse {
  return {
    incentivizedPackets: [],
    pagination: undefined,
  };
}
export const QueryIncentivizedPacketsForChannelResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse",
  encode(
    message: QueryIncentivizedPacketsForChannelResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.incentivizedPackets) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPackets.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse {
    const obj = createBaseQueryIncentivizedPacketsForChannelResponse();
    if (Array.isArray(object?.incentivizedPackets))
      obj.incentivizedPackets = object.incentivizedPackets.map((e: any) => IdentifiedPacketFees.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: QueryIncentivizedPacketsForChannelResponse,
  ): JsonSafe<QueryIncentivizedPacketsForChannelResponse> {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivizedPackets = message.incentivizedPackets.map((e) =>
        e ? IdentifiedPacketFees.toJSON(e) : undefined,
      );
    } else {
      obj.incentivizedPackets = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIncentivizedPacketsForChannelResponse>, I>>(
    object: I,
  ): QueryIncentivizedPacketsForChannelResponse {
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    message.incentivizedPackets =
      object.incentivizedPackets?.map((e) => IdentifiedPacketFees.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(
    object: QueryIncentivizedPacketsForChannelResponseAmino,
  ): QueryIncentivizedPacketsForChannelResponse {
    const message = createBaseQueryIncentivizedPacketsForChannelResponse();
    message.incentivizedPackets =
      object.incentivized_packets?.map((e) => IdentifiedPacketFees.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(
    message: QueryIncentivizedPacketsForChannelResponse,
  ): QueryIncentivizedPacketsForChannelResponseAmino {
    const obj: any = {};
    if (message.incentivizedPackets) {
      obj.incentivized_packets = message.incentivizedPackets.map((e) =>
        e ? IdentifiedPacketFees.toAmino(e) : undefined,
      );
    } else {
      obj.incentivized_packets = message.incentivizedPackets;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(
    object: QueryIncentivizedPacketsForChannelResponseAminoMsg,
  ): QueryIncentivizedPacketsForChannelResponse {
    return QueryIncentivizedPacketsForChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryIncentivizedPacketsForChannelResponse,
  ): QueryIncentivizedPacketsForChannelResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryIncentivizedPacketsForChannelResponse",
      value: QueryIncentivizedPacketsForChannelResponse.toAmino(message),
    };
  },
};
function createBaseQueryTotalRecvFeesRequest(): QueryTotalRecvFeesRequest {
  return {
    packetId: PacketId.fromPartial({}),
  };
}
export const QueryTotalRecvFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest",
  encode(message: QueryTotalRecvFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalRecvFeesRequest {
    const obj = createBaseQueryTotalRecvFeesRequest();
    if (isSet(object.packetId)) obj.packetId = PacketId.fromJSON(object.packetId);
    return obj;
  },
  toJSON(message: QueryTotalRecvFeesRequest): JsonSafe<QueryTotalRecvFeesRequest> {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalRecvFeesRequest>, I>>(
    object: I,
  ): QueryTotalRecvFeesRequest {
    const message = createBaseQueryTotalRecvFeesRequest();
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    }
    return message;
  },
  fromAmino(object: QueryTotalRecvFeesRequestAmino): QueryTotalRecvFeesRequest {
    const message = createBaseQueryTotalRecvFeesRequest();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    return message;
  },
  toAmino(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalRecvFeesRequestAminoMsg): QueryTotalRecvFeesRequest {
    return QueryTotalRecvFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalRecvFeesRequest",
      value: QueryTotalRecvFeesRequest.toAmino(message),
    };
  },
};
function createBaseQueryTotalRecvFeesResponse(): QueryTotalRecvFeesResponse {
  return {
    recvFees: [],
  };
}
export const QueryTotalRecvFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse",
  encode(message: QueryTotalRecvFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.recvFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalRecvFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalRecvFeesResponse {
    const obj = createBaseQueryTotalRecvFeesResponse();
    if (Array.isArray(object?.recvFees)) obj.recvFees = object.recvFees.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalRecvFeesResponse): JsonSafe<QueryTotalRecvFeesResponse> {
    const obj: any = {};
    if (message.recvFees) {
      obj.recvFees = message.recvFees.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.recvFees = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalRecvFeesResponse>, I>>(
    object: I,
  ): QueryTotalRecvFeesResponse {
    const message = createBaseQueryTotalRecvFeesResponse();
    message.recvFees = object.recvFees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalRecvFeesResponseAmino): QueryTotalRecvFeesResponse {
    const message = createBaseQueryTotalRecvFeesResponse();
    message.recvFees = object.recv_fees?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAmino {
    const obj: any = {};
    if (message.recvFees) {
      obj.recv_fees = message.recvFees.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.recv_fees = message.recvFees;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalRecvFeesResponseAminoMsg): QueryTotalRecvFeesResponse {
    return QueryTotalRecvFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalRecvFeesResponse",
      value: QueryTotalRecvFeesResponse.toAmino(message),
    };
  },
};
function createBaseQueryTotalAckFeesRequest(): QueryTotalAckFeesRequest {
  return {
    packetId: PacketId.fromPartial({}),
  };
}
export const QueryTotalAckFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest",
  encode(message: QueryTotalAckFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalAckFeesRequest {
    const obj = createBaseQueryTotalAckFeesRequest();
    if (isSet(object.packetId)) obj.packetId = PacketId.fromJSON(object.packetId);
    return obj;
  },
  toJSON(message: QueryTotalAckFeesRequest): JsonSafe<QueryTotalAckFeesRequest> {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalAckFeesRequest>, I>>(
    object: I,
  ): QueryTotalAckFeesRequest {
    const message = createBaseQueryTotalAckFeesRequest();
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    }
    return message;
  },
  fromAmino(object: QueryTotalAckFeesRequestAmino): QueryTotalAckFeesRequest {
    const message = createBaseQueryTotalAckFeesRequest();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    return message;
  },
  toAmino(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalAckFeesRequestAminoMsg): QueryTotalAckFeesRequest {
    return QueryTotalAckFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalAckFeesRequest",
      value: QueryTotalAckFeesRequest.toAmino(message),
    };
  },
};
function createBaseQueryTotalAckFeesResponse(): QueryTotalAckFeesResponse {
  return {
    ackFees: [],
  };
}
export const QueryTotalAckFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse",
  encode(message: QueryTotalAckFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ackFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalAckFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ackFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalAckFeesResponse {
    const obj = createBaseQueryTotalAckFeesResponse();
    if (Array.isArray(object?.ackFees)) obj.ackFees = object.ackFees.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalAckFeesResponse): JsonSafe<QueryTotalAckFeesResponse> {
    const obj: any = {};
    if (message.ackFees) {
      obj.ackFees = message.ackFees.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.ackFees = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalAckFeesResponse>, I>>(
    object: I,
  ): QueryTotalAckFeesResponse {
    const message = createBaseQueryTotalAckFeesResponse();
    message.ackFees = object.ackFees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalAckFeesResponseAmino): QueryTotalAckFeesResponse {
    const message = createBaseQueryTotalAckFeesResponse();
    message.ackFees = object.ack_fees?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAmino {
    const obj: any = {};
    if (message.ackFees) {
      obj.ack_fees = message.ackFees.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.ack_fees = message.ackFees;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalAckFeesResponseAminoMsg): QueryTotalAckFeesResponse {
    return QueryTotalAckFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalAckFeesResponse",
      value: QueryTotalAckFeesResponse.toAmino(message),
    };
  },
};
function createBaseQueryTotalTimeoutFeesRequest(): QueryTotalTimeoutFeesRequest {
  return {
    packetId: PacketId.fromPartial({}),
  };
}
export const QueryTotalTimeoutFeesRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest",
  encode(message: QueryTotalTimeoutFeesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalTimeoutFeesRequest {
    const obj = createBaseQueryTotalTimeoutFeesRequest();
    if (isSet(object.packetId)) obj.packetId = PacketId.fromJSON(object.packetId);
    return obj;
  },
  toJSON(message: QueryTotalTimeoutFeesRequest): JsonSafe<QueryTotalTimeoutFeesRequest> {
    const obj: any = {};
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalTimeoutFeesRequest>, I>>(
    object: I,
  ): QueryTotalTimeoutFeesRequest {
    const message = createBaseQueryTotalTimeoutFeesRequest();
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    }
    return message;
  },
  fromAmino(object: QueryTotalTimeoutFeesRequestAmino): QueryTotalTimeoutFeesRequest {
    const message = createBaseQueryTotalTimeoutFeesRequest();
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    return message;
  },
  toAmino(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAmino {
    const obj: any = {};
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalTimeoutFeesRequestAminoMsg): QueryTotalTimeoutFeesRequest {
    return QueryTotalTimeoutFeesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTimeoutFeesRequest",
      value: QueryTotalTimeoutFeesRequest.toAmino(message),
    };
  },
};
function createBaseQueryTotalTimeoutFeesResponse(): QueryTotalTimeoutFeesResponse {
  return {
    timeoutFees: [],
  };
}
export const QueryTotalTimeoutFeesResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse",
  encode(message: QueryTotalTimeoutFeesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.timeoutFees) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTimeoutFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timeoutFees.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalTimeoutFeesResponse {
    const obj = createBaseQueryTotalTimeoutFeesResponse();
    if (Array.isArray(object?.timeoutFees))
      obj.timeoutFees = object.timeoutFees.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryTotalTimeoutFeesResponse): JsonSafe<QueryTotalTimeoutFeesResponse> {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeoutFees = message.timeoutFees.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.timeoutFees = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryTotalTimeoutFeesResponse>, I>>(
    object: I,
  ): QueryTotalTimeoutFeesResponse {
    const message = createBaseQueryTotalTimeoutFeesResponse();
    message.timeoutFees = object.timeoutFees?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalTimeoutFeesResponseAmino): QueryTotalTimeoutFeesResponse {
    const message = createBaseQueryTotalTimeoutFeesResponse();
    message.timeoutFees = object.timeout_fees?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAmino {
    const obj: any = {};
    if (message.timeoutFees) {
      obj.timeout_fees = message.timeoutFees.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.timeout_fees = message.timeoutFees;
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalTimeoutFeesResponseAminoMsg): QueryTotalTimeoutFeesResponse {
    return QueryTotalTimeoutFeesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTimeoutFeesResponse",
      value: QueryTotalTimeoutFeesResponse.toAmino(message),
    };
  },
};
function createBaseQueryPayeeRequest(): QueryPayeeRequest {
  return {
    channelId: "",
    relayer: "",
  };
}
export const QueryPayeeRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest",
  encode(message: QueryPayeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPayeeRequest {
    const obj = createBaseQueryPayeeRequest();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    return obj;
  },
  toJSON(message: QueryPayeeRequest): JsonSafe<QueryPayeeRequest> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPayeeRequest>, I>>(object: I): QueryPayeeRequest {
    const message = createBaseQueryPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
  fromAmino(object: QueryPayeeRequestAmino): QueryPayeeRequest {
    const message = createBaseQueryPayeeRequest();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    return message;
  },
  toAmino(message: QueryPayeeRequest): QueryPayeeRequestAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    return obj;
  },
  fromAminoMsg(object: QueryPayeeRequestAminoMsg): QueryPayeeRequest {
    return QueryPayeeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPayeeRequest): QueryPayeeRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPayeeRequest",
      value: QueryPayeeRequest.toAmino(message),
    };
  },
};
function createBaseQueryPayeeResponse(): QueryPayeeResponse {
  return {
    payeeAddress: "",
  };
}
export const QueryPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse",
  encode(message: QueryPayeeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payeeAddress !== "") {
      writer.uint32(10).string(message.payeeAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payeeAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPayeeResponse {
    const obj = createBaseQueryPayeeResponse();
    if (isSet(object.payeeAddress)) obj.payeeAddress = String(object.payeeAddress);
    return obj;
  },
  toJSON(message: QueryPayeeResponse): JsonSafe<QueryPayeeResponse> {
    const obj: any = {};
    message.payeeAddress !== undefined && (obj.payeeAddress = message.payeeAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryPayeeResponse>, I>>(object: I): QueryPayeeResponse {
    const message = createBaseQueryPayeeResponse();
    message.payeeAddress = object.payeeAddress ?? "";
    return message;
  },
  fromAmino(object: QueryPayeeResponseAmino): QueryPayeeResponse {
    const message = createBaseQueryPayeeResponse();
    if (object.payee_address !== undefined && object.payee_address !== null) {
      message.payeeAddress = object.payee_address;
    }
    return message;
  },
  toAmino(message: QueryPayeeResponse): QueryPayeeResponseAmino {
    const obj: any = {};
    obj.payee_address = message.payeeAddress === "" ? undefined : message.payeeAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPayeeResponseAminoMsg): QueryPayeeResponse {
    return QueryPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPayeeResponse): QueryPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPayeeResponse",
      value: QueryPayeeResponse.toAmino(message),
    };
  },
};
function createBaseQueryCounterpartyPayeeRequest(): QueryCounterpartyPayeeRequest {
  return {
    channelId: "",
    relayer: "",
  };
}
export const QueryCounterpartyPayeeRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest",
  encode(message: QueryCounterpartyPayeeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCounterpartyPayeeRequest {
    const obj = createBaseQueryCounterpartyPayeeRequest();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    return obj;
  },
  toJSON(message: QueryCounterpartyPayeeRequest): JsonSafe<QueryCounterpartyPayeeRequest> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCounterpartyPayeeRequest>, I>>(
    object: I,
  ): QueryCounterpartyPayeeRequest {
    const message = createBaseQueryCounterpartyPayeeRequest();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    return message;
  },
  fromAmino(object: QueryCounterpartyPayeeRequestAmino): QueryCounterpartyPayeeRequest {
    const message = createBaseQueryCounterpartyPayeeRequest();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    return message;
  },
  toAmino(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    return obj;
  },
  fromAminoMsg(object: QueryCounterpartyPayeeRequestAminoMsg): QueryCounterpartyPayeeRequest {
    return QueryCounterpartyPayeeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCounterpartyPayeeRequest",
      value: QueryCounterpartyPayeeRequest.toAmino(message),
    };
  },
};
function createBaseQueryCounterpartyPayeeResponse(): QueryCounterpartyPayeeResponse {
  return {
    counterpartyPayee: "",
  };
}
export const QueryCounterpartyPayeeResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse",
  encode(
    message: QueryCounterpartyPayeeResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.counterpartyPayee !== "") {
      writer.uint32(10).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCounterpartyPayeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCounterpartyPayeeResponse {
    const obj = createBaseQueryCounterpartyPayeeResponse();
    if (isSet(object.counterpartyPayee)) obj.counterpartyPayee = String(object.counterpartyPayee);
    return obj;
  },
  toJSON(message: QueryCounterpartyPayeeResponse): JsonSafe<QueryCounterpartyPayeeResponse> {
    const obj: any = {};
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCounterpartyPayeeResponse>, I>>(
    object: I,
  ): QueryCounterpartyPayeeResponse {
    const message = createBaseQueryCounterpartyPayeeResponse();
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromAmino(object: QueryCounterpartyPayeeResponseAmino): QueryCounterpartyPayeeResponse {
    const message = createBaseQueryCounterpartyPayeeResponse();
    if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
      message.counterpartyPayee = object.counterparty_payee;
    }
    return message;
  },
  toAmino(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAmino {
    const obj: any = {};
    obj.counterparty_payee = message.counterpartyPayee === "" ? undefined : message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: QueryCounterpartyPayeeResponseAminoMsg): QueryCounterpartyPayeeResponse {
    return QueryCounterpartyPayeeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCounterpartyPayeeResponse",
      value: QueryCounterpartyPayeeResponse.toAmino(message),
    };
  },
};
function createBaseQueryFeeEnabledChannelsRequest(): QueryFeeEnabledChannelsRequest {
  return {
    pagination: undefined,
    queryHeight: BigInt(0),
  };
}
export const QueryFeeEnabledChannelsRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest",
  encode(
    message: QueryFeeEnabledChannelsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.queryHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.queryHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.queryHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelsRequest {
    const obj = createBaseQueryFeeEnabledChannelsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    if (isSet(object.queryHeight)) obj.queryHeight = BigInt(object.queryHeight.toString());
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelsRequest): JsonSafe<QueryFeeEnabledChannelsRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.queryHeight !== undefined && (obj.queryHeight = (message.queryHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelsRequest>, I>>(
    object: I,
  ): QueryFeeEnabledChannelsRequest {
    const message = createBaseQueryFeeEnabledChannelsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    if (object.queryHeight !== undefined && object.queryHeight !== null) {
      message.queryHeight = BigInt(object.queryHeight.toString());
    }
    return message;
  },
  fromAmino(object: QueryFeeEnabledChannelsRequestAmino): QueryFeeEnabledChannelsRequest {
    const message = createBaseQueryFeeEnabledChannelsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.query_height !== undefined && object.query_height !== null) {
      message.queryHeight = BigInt(object.query_height);
    }
    return message;
  },
  toAmino(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.query_height = message.queryHeight !== BigInt(0) ? message.queryHeight?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelsRequestAminoMsg): QueryFeeEnabledChannelsRequest {
    return QueryFeeEnabledChannelsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelsRequest",
      value: QueryFeeEnabledChannelsRequest.toAmino(message),
    };
  },
};
function createBaseQueryFeeEnabledChannelsResponse(): QueryFeeEnabledChannelsResponse {
  return {
    feeEnabledChannels: [],
    pagination: undefined,
  };
}
export const QueryFeeEnabledChannelsResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse",
  encode(
    message: QueryFeeEnabledChannelsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelsResponse {
    const obj = createBaseQueryFeeEnabledChannelsResponse();
    if (Array.isArray(object?.feeEnabledChannels))
      obj.feeEnabledChannels = object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelsResponse): JsonSafe<QueryFeeEnabledChannelsResponse> {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map((e) =>
        e ? FeeEnabledChannel.toJSON(e) : undefined,
      );
    } else {
      obj.feeEnabledChannels = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelsResponse>, I>>(
    object: I,
  ): QueryFeeEnabledChannelsResponse {
    const message = createBaseQueryFeeEnabledChannelsResponse();
    message.feeEnabledChannels =
      object.feeEnabledChannels?.map((e) => FeeEnabledChannel.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryFeeEnabledChannelsResponseAmino): QueryFeeEnabledChannelsResponse {
    const message = createBaseQueryFeeEnabledChannelsResponse();
    message.feeEnabledChannels =
      object.fee_enabled_channels?.map((e) => FeeEnabledChannel.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAmino {
    const obj: any = {};
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map((e) =>
        e ? FeeEnabledChannel.toAmino(e) : undefined,
      );
    } else {
      obj.fee_enabled_channels = message.feeEnabledChannels;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelsResponseAminoMsg): QueryFeeEnabledChannelsResponse {
    return QueryFeeEnabledChannelsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelsResponse",
      value: QueryFeeEnabledChannelsResponse.toAmino(message),
    };
  },
};
function createBaseQueryFeeEnabledChannelRequest(): QueryFeeEnabledChannelRequest {
  return {
    portId: "",
    channelId: "",
  };
}
export const QueryFeeEnabledChannelRequest = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest",
  encode(message: QueryFeeEnabledChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelRequest {
    const obj = createBaseQueryFeeEnabledChannelRequest();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelRequest): JsonSafe<QueryFeeEnabledChannelRequest> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelRequest>, I>>(
    object: I,
  ): QueryFeeEnabledChannelRequest {
    const message = createBaseQueryFeeEnabledChannelRequest();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: QueryFeeEnabledChannelRequestAmino): QueryFeeEnabledChannelRequest {
    const message = createBaseQueryFeeEnabledChannelRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelRequestAminoMsg): QueryFeeEnabledChannelRequest {
    return QueryFeeEnabledChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelRequest",
      value: QueryFeeEnabledChannelRequest.toAmino(message),
    };
  },
};
function createBaseQueryFeeEnabledChannelResponse(): QueryFeeEnabledChannelResponse {
  return {
    feeEnabled: false,
  };
}
export const QueryFeeEnabledChannelResponse = {
  typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse",
  encode(
    message: QueryFeeEnabledChannelResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.feeEnabled === true) {
      writer.uint32(8).bool(message.feeEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeEnabledChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFeeEnabledChannelResponse {
    const obj = createBaseQueryFeeEnabledChannelResponse();
    if (isSet(object.feeEnabled)) obj.feeEnabled = Boolean(object.feeEnabled);
    return obj;
  },
  toJSON(message: QueryFeeEnabledChannelResponse): JsonSafe<QueryFeeEnabledChannelResponse> {
    const obj: any = {};
    message.feeEnabled !== undefined && (obj.feeEnabled = message.feeEnabled);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFeeEnabledChannelResponse>, I>>(
    object: I,
  ): QueryFeeEnabledChannelResponse {
    const message = createBaseQueryFeeEnabledChannelResponse();
    message.feeEnabled = object.feeEnabled ?? false;
    return message;
  },
  fromAmino(object: QueryFeeEnabledChannelResponseAmino): QueryFeeEnabledChannelResponse {
    const message = createBaseQueryFeeEnabledChannelResponse();
    if (object.fee_enabled !== undefined && object.fee_enabled !== null) {
      message.feeEnabled = object.fee_enabled;
    }
    return message;
  },
  toAmino(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAmino {
    const obj: any = {};
    obj.fee_enabled = message.feeEnabled === false ? undefined : message.feeEnabled;
    return obj;
  },
  fromAminoMsg(object: QueryFeeEnabledChannelResponseAminoMsg): QueryFeeEnabledChannelResponse {
    return QueryFeeEnabledChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryFeeEnabledChannelResponse",
      value: QueryFeeEnabledChannelResponse.toAmino(message),
    };
  },
};
