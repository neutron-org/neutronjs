/* eslint-disable */
import { Market } from "./market";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.marketmap.v1";
/**
 * MsgCreateMarkets defines a message carrying a payload for creating markets in
 * the x/marketmap module.
 */
export interface MsgCreateMarkets {
  /**
   * Authority is the signer of this transaction.  This authority must be
   * authorized by the module to execute the message.
   */
  authority: string;
  /**
   * CreateMarkets is the list of all markets to be created for the given
   * transaction.
   */
  createMarkets: Market[];
}
/** MsgUpdateMarketMapResponse is the response message for MsgUpdateMarketMap. */
export interface MsgCreateMarketsResponse {}
/**
 * MsgUpdateMarkets defines a message carrying a payload for updating the
 * x/marketmap module.
 */
export interface MsgUpdateMarkets {
  /**
   * Authority is the signer of this transaction.  This authority must be
   * authorized by the module to execute the message.
   */
  authority: string;
  /**
   * UpdateMarkets is the list of all markets to be updated for the given
   * transaction.
   */
  updateMarkets: Market[];
}
/** MsgUpdateMarketsResponse is the response message for MsgUpdateMarkets. */
export interface MsgUpdateMarketsResponse {}
/**
 * MsgParams defines the Msg/Params request type. It contains the
 * new parameters for the x/marketmap module.
 */
export interface MsgParams {
  /** Params defines the new parameters for the x/marketmap module. */
  params: Params;
  /**
   * Authority defines the authority that is updating the x/marketmap module
   * parameters.
   */
  authority: string;
}
/** MsgParamsResponse defines the Msg/Params response type. */
export interface MsgParamsResponse {}
/**
 * MsgRemoveMarketAuthorities defines the Msg/RemoveMarketAuthoritiesResponse
 * request type. It contains the new addresses to remove from the list of
 * authorities
 */
export interface MsgRemoveMarketAuthorities {
  /** RemoveAddresses is the list of addresses to remove. */
  removeAddresses: string[];
  /**
   * Admin defines the authority that is the x/marketmap
   * Admin account.  This account is set in the module parameters.
   */
  admin: string;
}
/**
 * MsgRemoveMarketAuthoritiesResponse defines the
 * Msg/RemoveMarketAuthoritiesResponse response type.
 */
export interface MsgRemoveMarketAuthoritiesResponse {}
function createBaseMsgCreateMarkets(): MsgCreateMarkets {
  return {
    authority: "",
    createMarkets: [],
  };
}
export const MsgCreateMarkets = {
  typeUrl: "/slinky.marketmap.v1.MsgCreateMarkets",
  encode(message: MsgCreateMarkets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.createMarkets) {
      Market.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMarkets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMarkets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.createMarkets.push(Market.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateMarkets {
    const obj = createBaseMsgCreateMarkets();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (Array.isArray(object?.createMarkets))
      obj.createMarkets = object.createMarkets.map((e: any) => Market.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgCreateMarkets): JsonSafe<MsgCreateMarkets> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.createMarkets) {
      obj.createMarkets = message.createMarkets.map((e) => (e ? Market.toJSON(e) : undefined));
    } else {
      obj.createMarkets = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateMarkets>, I>>(object: I): MsgCreateMarkets {
    const message = createBaseMsgCreateMarkets();
    message.authority = object.authority ?? "";
    message.createMarkets = object.createMarkets?.map((e) => Market.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgCreateMarketsResponse(): MsgCreateMarketsResponse {
  return {};
}
export const MsgCreateMarketsResponse = {
  typeUrl: "/slinky.marketmap.v1.MsgCreateMarketsResponse",
  encode(_: MsgCreateMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMarketsResponse();
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
  fromJSON(_: any): MsgCreateMarketsResponse {
    const obj = createBaseMsgCreateMarketsResponse();
    return obj;
  },
  toJSON(_: MsgCreateMarketsResponse): JsonSafe<MsgCreateMarketsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateMarketsResponse>, I>>(_: I): MsgCreateMarketsResponse {
    const message = createBaseMsgCreateMarketsResponse();
    return message;
  },
};
function createBaseMsgUpdateMarkets(): MsgUpdateMarkets {
  return {
    authority: "",
    updateMarkets: [],
  };
}
export const MsgUpdateMarkets = {
  typeUrl: "/slinky.marketmap.v1.MsgUpdateMarkets",
  encode(message: MsgUpdateMarkets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.updateMarkets) {
      Market.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMarkets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMarkets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.updateMarkets.push(Market.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateMarkets {
    const obj = createBaseMsgUpdateMarkets();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (Array.isArray(object?.updateMarkets))
      obj.updateMarkets = object.updateMarkets.map((e: any) => Market.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgUpdateMarkets): JsonSafe<MsgUpdateMarkets> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.updateMarkets) {
      obj.updateMarkets = message.updateMarkets.map((e) => (e ? Market.toJSON(e) : undefined));
    } else {
      obj.updateMarkets = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMarkets>, I>>(object: I): MsgUpdateMarkets {
    const message = createBaseMsgUpdateMarkets();
    message.authority = object.authority ?? "";
    message.updateMarkets = object.updateMarkets?.map((e) => Market.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgUpdateMarketsResponse(): MsgUpdateMarketsResponse {
  return {};
}
export const MsgUpdateMarketsResponse = {
  typeUrl: "/slinky.marketmap.v1.MsgUpdateMarketsResponse",
  encode(_: MsgUpdateMarketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateMarketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMarketsResponse();
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
  fromJSON(_: any): MsgUpdateMarketsResponse {
    const obj = createBaseMsgUpdateMarketsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateMarketsResponse): JsonSafe<MsgUpdateMarketsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateMarketsResponse>, I>>(_: I): MsgUpdateMarketsResponse {
    const message = createBaseMsgUpdateMarketsResponse();
    return message;
  },
};
function createBaseMsgParams(): MsgParams {
  return {
    params: Params.fromPartial({}),
    authority: "",
  };
}
export const MsgParams = {
  typeUrl: "/slinky.marketmap.v1.MsgParams",
  encode(message: MsgParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgParams {
    const obj = createBaseMsgParams();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgParams): JsonSafe<MsgParams> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgParams>, I>>(object: I): MsgParams {
    const message = createBaseMsgParams();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseMsgParamsResponse(): MsgParamsResponse {
  return {};
}
export const MsgParamsResponse = {
  typeUrl: "/slinky.marketmap.v1.MsgParamsResponse",
  encode(_: MsgParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgParamsResponse();
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
  fromJSON(_: any): MsgParamsResponse {
    const obj = createBaseMsgParamsResponse();
    return obj;
  },
  toJSON(_: MsgParamsResponse): JsonSafe<MsgParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgParamsResponse>, I>>(_: I): MsgParamsResponse {
    const message = createBaseMsgParamsResponse();
    return message;
  },
};
function createBaseMsgRemoveMarketAuthorities(): MsgRemoveMarketAuthorities {
  return {
    removeAddresses: [],
    admin: "",
  };
}
export const MsgRemoveMarketAuthorities = {
  typeUrl: "/slinky.marketmap.v1.MsgRemoveMarketAuthorities",
  encode(message: MsgRemoveMarketAuthorities, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.removeAddresses) {
      writer.uint32(10).string(v!);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveMarketAuthorities {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMarketAuthorities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.removeAddresses.push(reader.string());
          break;
        case 2:
          message.admin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveMarketAuthorities {
    const obj = createBaseMsgRemoveMarketAuthorities();
    if (Array.isArray(object?.removeAddresses))
      obj.removeAddresses = object.removeAddresses.map((e: any) => String(e));
    if (isSet(object.admin)) obj.admin = String(object.admin);
    return obj;
  },
  toJSON(message: MsgRemoveMarketAuthorities): JsonSafe<MsgRemoveMarketAuthorities> {
    const obj: any = {};
    if (message.removeAddresses) {
      obj.removeAddresses = message.removeAddresses.map((e) => e);
    } else {
      obj.removeAddresses = [];
    }
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveMarketAuthorities>, I>>(
    object: I,
  ): MsgRemoveMarketAuthorities {
    const message = createBaseMsgRemoveMarketAuthorities();
    message.removeAddresses = object.removeAddresses?.map((e) => e) || [];
    message.admin = object.admin ?? "";
    return message;
  },
};
function createBaseMsgRemoveMarketAuthoritiesResponse(): MsgRemoveMarketAuthoritiesResponse {
  return {};
}
export const MsgRemoveMarketAuthoritiesResponse = {
  typeUrl: "/slinky.marketmap.v1.MsgRemoveMarketAuthoritiesResponse",
  encode(_: MsgRemoveMarketAuthoritiesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveMarketAuthoritiesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMarketAuthoritiesResponse();
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
  fromJSON(_: any): MsgRemoveMarketAuthoritiesResponse {
    const obj = createBaseMsgRemoveMarketAuthoritiesResponse();
    return obj;
  },
  toJSON(_: MsgRemoveMarketAuthoritiesResponse): JsonSafe<MsgRemoveMarketAuthoritiesResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveMarketAuthoritiesResponse>, I>>(
    _: I,
  ): MsgRemoveMarketAuthoritiesResponse {
    const message = createBaseMsgRemoveMarketAuthoritiesResponse();
    return message;
  },
};
