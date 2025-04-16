//@ts-nocheck
/* eslint-disable */
import {
  RequestFinalizeBlock,
  ResponseFinalizeBlock,
  ResponseCommit,
} from "../../../../tendermint/abci/types";
import { StoreKVPair } from "../../v1beta1/listening";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "cosmos.store.streaming.abci";
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequest {
  req?: RequestFinalizeBlock;
  res?: ResponseFinalizeBlock;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponse {}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequest {
  /** explicitly pass in block height as ResponseCommit does not contain this info */
  blockHeight: bigint;
  res?: ResponseCommit;
  changeSet: StoreKVPair[];
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponse {}
function createBaseListenFinalizeBlockRequest(): ListenFinalizeBlockRequest {
  return {
    req: undefined,
    res: undefined,
  };
}
export const ListenFinalizeBlockRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
  encode(message: ListenFinalizeBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.req !== undefined) {
      RequestFinalizeBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
    }
    if (message.res !== undefined) {
      ResponseFinalizeBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenFinalizeBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenFinalizeBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.req = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.res = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListenFinalizeBlockRequest {
    const obj = createBaseListenFinalizeBlockRequest();
    if (isSet(object.req)) obj.req = RequestFinalizeBlock.fromJSON(object.req);
    if (isSet(object.res)) obj.res = ResponseFinalizeBlock.fromJSON(object.res);
    return obj;
  },
  toJSON(message: ListenFinalizeBlockRequest): JsonSafe<ListenFinalizeBlockRequest> {
    const obj: any = {};
    message.req !== undefined &&
      (obj.req = message.req ? RequestFinalizeBlock.toJSON(message.req) : undefined);
    message.res !== undefined &&
      (obj.res = message.res ? ResponseFinalizeBlock.toJSON(message.res) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListenFinalizeBlockRequest>, I>>(
    object: I,
  ): ListenFinalizeBlockRequest {
    const message = createBaseListenFinalizeBlockRequest();
    if (object.req !== undefined && object.req !== null) {
      message.req = RequestFinalizeBlock.fromPartial(object.req);
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = ResponseFinalizeBlock.fromPartial(object.res);
    }
    return message;
  },
  fromAmino(object: ListenFinalizeBlockRequestAmino): ListenFinalizeBlockRequest {
    const message = createBaseListenFinalizeBlockRequest();
    if (object.req !== undefined && object.req !== null) {
      message.req = RequestFinalizeBlock.fromAmino(object.req);
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = ResponseFinalizeBlock.fromAmino(object.res);
    }
    return message;
  },
  toAmino(message: ListenFinalizeBlockRequest): ListenFinalizeBlockRequestAmino {
    const obj: any = {};
    obj.req = message.req ? RequestFinalizeBlock.toAmino(message.req) : undefined;
    obj.res = message.res ? ResponseFinalizeBlock.toAmino(message.res) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListenFinalizeBlockRequestAminoMsg): ListenFinalizeBlockRequest {
    return ListenFinalizeBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListenFinalizeBlockRequest): ListenFinalizeBlockRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenFinalizeBlockRequest",
      value: ListenFinalizeBlockRequest.toAmino(message),
    };
  },
};
function createBaseListenFinalizeBlockResponse(): ListenFinalizeBlockResponse {
  return {};
}
export const ListenFinalizeBlockResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
  encode(_: ListenFinalizeBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenFinalizeBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenFinalizeBlockResponse();
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
  fromJSON(_: any): ListenFinalizeBlockResponse {
    const obj = createBaseListenFinalizeBlockResponse();
    return obj;
  },
  toJSON(_: ListenFinalizeBlockResponse): JsonSafe<ListenFinalizeBlockResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListenFinalizeBlockResponse>, I>>(
    _: I,
  ): ListenFinalizeBlockResponse {
    const message = createBaseListenFinalizeBlockResponse();
    return message;
  },
  fromAmino(_: ListenFinalizeBlockResponseAmino): ListenFinalizeBlockResponse {
    const message = createBaseListenFinalizeBlockResponse();
    return message;
  },
  toAmino(_: ListenFinalizeBlockResponse): ListenFinalizeBlockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListenFinalizeBlockResponseAminoMsg): ListenFinalizeBlockResponse {
    return ListenFinalizeBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListenFinalizeBlockResponse): ListenFinalizeBlockResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenFinalizeBlockResponse",
      value: ListenFinalizeBlockResponse.toAmino(message),
    };
  },
};
function createBaseListenCommitRequest(): ListenCommitRequest {
  return {
    blockHeight: BigInt(0),
    res: undefined,
    changeSet: [],
  };
}
export const ListenCommitRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
  encode(message: ListenCommitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    if (message.res !== undefined) {
      ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.changeSet) {
      StoreKVPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenCommitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenCommitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.res = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 3:
          message.changeSet.push(StoreKVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListenCommitRequest {
    const obj = createBaseListenCommitRequest();
    if (isSet(object.blockHeight)) obj.blockHeight = BigInt(object.blockHeight.toString());
    if (isSet(object.res)) obj.res = ResponseCommit.fromJSON(object.res);
    if (Array.isArray(object?.changeSet))
      obj.changeSet = object.changeSet.map((e: any) => StoreKVPair.fromJSON(e));
    return obj;
  },
  toJSON(message: ListenCommitRequest): JsonSafe<ListenCommitRequest> {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    message.res !== undefined && (obj.res = message.res ? ResponseCommit.toJSON(message.res) : undefined);
    if (message.changeSet) {
      obj.changeSet = message.changeSet.map((e) => (e ? StoreKVPair.toJSON(e) : undefined));
    } else {
      obj.changeSet = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListenCommitRequest>, I>>(object: I): ListenCommitRequest {
    const message = createBaseListenCommitRequest();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight.toString());
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = ResponseCommit.fromPartial(object.res);
    }
    message.changeSet = object.changeSet?.map((e) => StoreKVPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListenCommitRequestAmino): ListenCommitRequest {
    const message = createBaseListenCommitRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.res !== undefined && object.res !== null) {
      message.res = ResponseCommit.fromAmino(object.res);
    }
    message.changeSet = object.change_set?.map((e) => StoreKVPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ListenCommitRequest): ListenCommitRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    obj.res = message.res ? ResponseCommit.toAmino(message.res) : undefined;
    if (message.changeSet) {
      obj.change_set = message.changeSet.map((e) => (e ? StoreKVPair.toAmino(e) : undefined));
    } else {
      obj.change_set = message.changeSet;
    }
    return obj;
  },
  fromAminoMsg(object: ListenCommitRequestAminoMsg): ListenCommitRequest {
    return ListenCommitRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListenCommitRequest): ListenCommitRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenCommitRequest",
      value: ListenCommitRequest.toAmino(message),
    };
  },
};
function createBaseListenCommitResponse(): ListenCommitResponse {
  return {};
}
export const ListenCommitResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
  encode(_: ListenCommitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenCommitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenCommitResponse();
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
  fromJSON(_: any): ListenCommitResponse {
    const obj = createBaseListenCommitResponse();
    return obj;
  },
  toJSON(_: ListenCommitResponse): JsonSafe<ListenCommitResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ListenCommitResponse>, I>>(_: I): ListenCommitResponse {
    const message = createBaseListenCommitResponse();
    return message;
  },
  fromAmino(_: ListenCommitResponseAmino): ListenCommitResponse {
    const message = createBaseListenCommitResponse();
    return message;
  },
  toAmino(_: ListenCommitResponse): ListenCommitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListenCommitResponseAminoMsg): ListenCommitResponse {
    return ListenCommitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListenCommitResponse): ListenCommitResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenCommitResponse",
      value: ListenCommitResponse.toAmino(message),
    };
  },
};
