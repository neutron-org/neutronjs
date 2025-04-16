//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "sdk.auction.v1";
/**
 * MsgAuctionBid defines a request type for sending bids to the x/auction
 * module.
 */
export interface MsgAuctionBid {
  /**
   * bidder is the address of the account that is submitting a bid to the
   * auction.
   */
  bidder: string;
  /**
   * bid is the amount of coins that the bidder is bidding to participate in the
   * auction.
   */
  bid: Coin;
  /**
   * transactions are the bytes of the transactions that the bidder wants to
   * bundle together.
   */
  transactions: Uint8Array[];
}
/** MsgAuctionBidResponse defines the Msg/AuctionBid response type. */
export interface MsgAuctionBidResponse {}
/**
 * MsgUpdateParams defines a request type for updating the x/auction module
 * parameters.
 */
export interface MsgUpdateParams {
  /**
   * authority is the address of the account that is authorized to update the
   * x/auction module parameters.
   */
  authority: string;
  /** params is the new parameters for the x/auction module. */
  params: Params;
}
/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {}
function createBaseMsgAuctionBid(): MsgAuctionBid {
  return {
    bidder: "",
    bid: Coin.fromPartial({}),
    transactions: [],
  };
}
export const MsgAuctionBid = {
  typeUrl: "/sdk.auction.v1.MsgAuctionBid",
  encode(message: MsgAuctionBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidder !== "") {
      writer.uint32(10).string(message.bidder);
    }
    if (message.bid !== undefined) {
      Coin.encode(message.bid, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.transactions) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAuctionBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuctionBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidder = reader.string();
          break;
        case 2:
          message.bid = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.transactions.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAuctionBid {
    const obj = createBaseMsgAuctionBid();
    if (isSet(object.bidder)) obj.bidder = String(object.bidder);
    if (isSet(object.bid)) obj.bid = Coin.fromJSON(object.bid);
    if (Array.isArray(object?.transactions))
      obj.transactions = object.transactions.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: MsgAuctionBid): JsonSafe<MsgAuctionBid> {
    const obj: any = {};
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.bid !== undefined && (obj.bid = message.bid ? Coin.toJSON(message.bid) : undefined);
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.transactions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAuctionBid>, I>>(object: I): MsgAuctionBid {
    const message = createBaseMsgAuctionBid();
    message.bidder = object.bidder ?? "";
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Coin.fromPartial(object.bid);
    }
    message.transactions = object.transactions?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: MsgAuctionBidAmino): MsgAuctionBid {
    const message = createBaseMsgAuctionBid();
    if (object.bidder !== undefined && object.bidder !== null) {
      message.bidder = object.bidder;
    }
    if (object.bid !== undefined && object.bid !== null) {
      message.bid = Coin.fromAmino(object.bid);
    }
    message.transactions = object.transactions?.map((e) => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgAuctionBid): MsgAuctionBidAmino {
    const obj: any = {};
    obj.bidder = message.bidder === "" ? undefined : message.bidder;
    obj.bid = message.bid ? Coin.toAmino(message.bid) : Coin.toAmino(Coin.fromPartial({}));
    if (message.transactions) {
      obj.transactions = message.transactions.map((e) => base64FromBytes(e));
    } else {
      obj.transactions = message.transactions;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAuctionBidAminoMsg): MsgAuctionBid {
    return MsgAuctionBid.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAuctionBid): MsgAuctionBidAminoMsg {
    return {
      type: "block-sdk/x/auction/MsgAuctionBid",
      value: MsgAuctionBid.toAmino(message),
    };
  },
};
function createBaseMsgAuctionBidResponse(): MsgAuctionBidResponse {
  return {};
}
export const MsgAuctionBidResponse = {
  typeUrl: "/sdk.auction.v1.MsgAuctionBidResponse",
  encode(_: MsgAuctionBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAuctionBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuctionBidResponse();
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
  fromJSON(_: any): MsgAuctionBidResponse {
    const obj = createBaseMsgAuctionBidResponse();
    return obj;
  },
  toJSON(_: MsgAuctionBidResponse): JsonSafe<MsgAuctionBidResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAuctionBidResponse>, I>>(_: I): MsgAuctionBidResponse {
    const message = createBaseMsgAuctionBidResponse();
    return message;
  },
  fromAmino(_: MsgAuctionBidResponseAmino): MsgAuctionBidResponse {
    const message = createBaseMsgAuctionBidResponse();
    return message;
  },
  toAmino(_: MsgAuctionBidResponse): MsgAuctionBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAuctionBidResponseAminoMsg): MsgAuctionBidResponse {
    return MsgAuctionBidResponse.fromAmino(object.value);
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/sdk.auction.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "block-sdk/x/auction/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/sdk.auction.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
};
