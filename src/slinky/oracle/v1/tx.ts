/* eslint-disable */
import { CurrencyPair } from "../../types/v1/currency_pair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "slinky.oracle.v1";
/**
 * Given an authority + a set of CurrencyPairs, the x/oracle module will
 * check to see that the authority has permissions to update the set of
 * CurrencyPairs tracked in the oracle, and add the given CurrencyPairs to be
 * tracked in each VoteExtension
 */
export interface MsgAddCurrencyPairs {
  /**
   * authority is the address of the account that is authorized to update the
   * x/oracle's CurrencyPairs
   */
  authority: string;
  /**
   * set of CurrencyPairs to be added to the module (+ prices if they are to be
   * set)
   */
  currencyPairs: CurrencyPair[];
}
export interface MsgAddCurrencyPairsResponse {}
/**
 * Given an authority + a set of CurrencyPairIDs, the x/oracle module's message
 * service will remove all of the CurrencyPairs identified by each
 * CurrencyPairID in the request from state. Notice, if a given currency-pair
 * does not exist in state, the module ignores that currency-pair and continues
 * removing the rest.
 */
export interface MsgRemoveCurrencyPairs {
  /**
   * authority is the address of the account that is authorized to update the
   * x/oracle's CurrencyPairs
   */
  authority: string;
  /**
   * currency_pair_ids are the stringified representation of a currency-pairs
   * (base/quote) to be removed from the module's state
   */
  currencyPairIds: string[];
}
export interface MsgRemoveCurrencyPairsResponse {}
function createBaseMsgAddCurrencyPairs(): MsgAddCurrencyPairs {
  return {
    authority: "",
    currencyPairs: [],
  };
}
export const MsgAddCurrencyPairs = {
  typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairs",
  encode(message: MsgAddCurrencyPairs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.currencyPairs) {
      CurrencyPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddCurrencyPairs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCurrencyPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.currencyPairs.push(CurrencyPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddCurrencyPairs {
    const obj = createBaseMsgAddCurrencyPairs();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (Array.isArray(object?.currencyPairs))
      obj.currencyPairs = object.currencyPairs.map((e: any) => CurrencyPair.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgAddCurrencyPairs): JsonSafe<MsgAddCurrencyPairs> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.currencyPairs) {
      obj.currencyPairs = message.currencyPairs.map((e) => (e ? CurrencyPair.toJSON(e) : undefined));
    } else {
      obj.currencyPairs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddCurrencyPairs>, I>>(object: I): MsgAddCurrencyPairs {
    const message = createBaseMsgAddCurrencyPairs();
    message.authority = object.authority ?? "";
    message.currencyPairs = object.currencyPairs?.map((e) => CurrencyPair.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgAddCurrencyPairsResponse(): MsgAddCurrencyPairsResponse {
  return {};
}
export const MsgAddCurrencyPairsResponse = {
  typeUrl: "/slinky.oracle.v1.MsgAddCurrencyPairsResponse",
  encode(_: MsgAddCurrencyPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddCurrencyPairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCurrencyPairsResponse();
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
  fromJSON(_: any): MsgAddCurrencyPairsResponse {
    const obj = createBaseMsgAddCurrencyPairsResponse();
    return obj;
  },
  toJSON(_: MsgAddCurrencyPairsResponse): JsonSafe<MsgAddCurrencyPairsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAddCurrencyPairsResponse>, I>>(
    _: I,
  ): MsgAddCurrencyPairsResponse {
    const message = createBaseMsgAddCurrencyPairsResponse();
    return message;
  },
};
function createBaseMsgRemoveCurrencyPairs(): MsgRemoveCurrencyPairs {
  return {
    authority: "",
    currencyPairIds: [],
  };
}
export const MsgRemoveCurrencyPairs = {
  typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairs",
  encode(message: MsgRemoveCurrencyPairs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.currencyPairIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCurrencyPairs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCurrencyPairs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.currencyPairIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveCurrencyPairs {
    const obj = createBaseMsgRemoveCurrencyPairs();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (Array.isArray(object?.currencyPairIds))
      obj.currencyPairIds = object.currencyPairIds.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MsgRemoveCurrencyPairs): JsonSafe<MsgRemoveCurrencyPairs> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    if (message.currencyPairIds) {
      obj.currencyPairIds = message.currencyPairIds.map((e) => e);
    } else {
      obj.currencyPairIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveCurrencyPairs>, I>>(object: I): MsgRemoveCurrencyPairs {
    const message = createBaseMsgRemoveCurrencyPairs();
    message.authority = object.authority ?? "";
    message.currencyPairIds = object.currencyPairIds?.map((e) => e) || [];
    return message;
  },
};
function createBaseMsgRemoveCurrencyPairsResponse(): MsgRemoveCurrencyPairsResponse {
  return {};
}
export const MsgRemoveCurrencyPairsResponse = {
  typeUrl: "/slinky.oracle.v1.MsgRemoveCurrencyPairsResponse",
  encode(_: MsgRemoveCurrencyPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveCurrencyPairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveCurrencyPairsResponse();
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
  fromJSON(_: any): MsgRemoveCurrencyPairsResponse {
    const obj = createBaseMsgRemoveCurrencyPairsResponse();
    return obj;
  },
  toJSON(_: MsgRemoveCurrencyPairsResponse): JsonSafe<MsgRemoveCurrencyPairsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRemoveCurrencyPairsResponse>, I>>(
    _: I,
  ): MsgRemoveCurrencyPairsResponse {
    const message = createBaseMsgRemoveCurrencyPairsResponse();
    return message;
  },
};
/** Msg is the message service for the x/oracle module. */
export interface Msg {
  /**
   * AddCurrencyPairs will be used only by governance to update the set of
   * available CurrencyPairs. Given a set of CurrencyPair objects, update
   * the available currency pairs in the module .
   */
  AddCurrencyPairs(request: MsgAddCurrencyPairs): Promise<MsgAddCurrencyPairsResponse>;
  /**
   * RemoveCurrencyPairs will be used explicitly by governance to remove the
   * given set of currency-pairs from the module's state. Thus these
   * CurrencyPairs will no longer have price-data available from this module.
   */
  RemoveCurrencyPairs(request: MsgRemoveCurrencyPairs): Promise<MsgRemoveCurrencyPairsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddCurrencyPairs = this.AddCurrencyPairs.bind(this);
    this.RemoveCurrencyPairs = this.RemoveCurrencyPairs.bind(this);
  }
  AddCurrencyPairs(request: MsgAddCurrencyPairs): Promise<MsgAddCurrencyPairsResponse> {
    const data = MsgAddCurrencyPairs.encode(request).finish();
    const promise = this.rpc.request("slinky.oracle.v1.Msg", "AddCurrencyPairs", data);
    return promise.then((data) => MsgAddCurrencyPairsResponse.decode(new BinaryReader(data)));
  }
  RemoveCurrencyPairs(request: MsgRemoveCurrencyPairs): Promise<MsgRemoveCurrencyPairsResponse> {
    const data = MsgRemoveCurrencyPairs.encode(request).finish();
    const promise = this.rpc.request("slinky.oracle.v1.Msg", "RemoveCurrencyPairs", data);
    return promise.then((data) => MsgRemoveCurrencyPairsResponse.decode(new BinaryReader(data)));
  }
}
