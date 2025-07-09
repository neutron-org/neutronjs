//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.interchainqueries";
/** The parameters for the module. */
export interface Params {
  /**
   * The duration, measured in blocks, that must pass since the query's registration or its last
   * result submission before the query becomes eligible for removal by anyone. Is used to set
   * `submit_timeout` on Interchain Query registration.
   */
  querySubmitTimeout: bigint;
  /** Amount of coins required to be provided as deposit on Interchain Query registration. */
  queryDeposit: Coin[];
  /**
   * Amount of tx hashes to be removed during a single EndBlock. Can vary to balance between
   * network cleaning speed and EndBlock duration. A zero value means no limit.
   */
  txQueryRemovalLimit: bigint;
  /** Maximum amount of keys in a registered key value query */
  maxKvQueryKeysCount: bigint;
  /** max_transactions_filters defines maximum allowed amount of tx filters in msgRegisterInterchainQuery */
  maxTransactionsFilters: bigint;
}
function createBaseParams(): Params {
  return {
    querySubmitTimeout: BigInt(0),
    queryDeposit: [],
    txQueryRemovalLimit: BigInt(0),
    maxKvQueryKeysCount: BigInt(0),
    maxTransactionsFilters: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/neutron.interchainqueries.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.querySubmitTimeout !== BigInt(0)) {
      writer.uint32(8).uint64(message.querySubmitTimeout);
    }
    for (const v of message.queryDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.txQueryRemovalLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.txQueryRemovalLimit);
    }
    if (message.maxKvQueryKeysCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxKvQueryKeysCount);
    }
    if (message.maxTransactionsFilters !== BigInt(0)) {
      writer.uint32(40).uint64(message.maxTransactionsFilters);
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
          message.querySubmitTimeout = reader.uint64();
          break;
        case 2:
          message.queryDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.txQueryRemovalLimit = reader.uint64();
          break;
        case 4:
          message.maxKvQueryKeysCount = reader.uint64();
          break;
        case 5:
          message.maxTransactionsFilters = reader.uint64();
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
    if (isSet(object.querySubmitTimeout))
      obj.querySubmitTimeout = BigInt(object.querySubmitTimeout.toString());
    if (Array.isArray(object?.queryDeposit))
      obj.queryDeposit = object.queryDeposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.txQueryRemovalLimit))
      obj.txQueryRemovalLimit = BigInt(object.txQueryRemovalLimit.toString());
    if (isSet(object.maxKvQueryKeysCount))
      obj.maxKvQueryKeysCount = BigInt(object.maxKvQueryKeysCount.toString());
    if (isSet(object.maxTransactionsFilters))
      obj.maxTransactionsFilters = BigInt(object.maxTransactionsFilters.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.querySubmitTimeout !== undefined &&
      (obj.querySubmitTimeout = (message.querySubmitTimeout || BigInt(0)).toString());
    if (message.queryDeposit) {
      obj.queryDeposit = message.queryDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.queryDeposit = [];
    }
    message.txQueryRemovalLimit !== undefined &&
      (obj.txQueryRemovalLimit = (message.txQueryRemovalLimit || BigInt(0)).toString());
    message.maxKvQueryKeysCount !== undefined &&
      (obj.maxKvQueryKeysCount = (message.maxKvQueryKeysCount || BigInt(0)).toString());
    message.maxTransactionsFilters !== undefined &&
      (obj.maxTransactionsFilters = (message.maxTransactionsFilters || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.querySubmitTimeout !== undefined && object.querySubmitTimeout !== null) {
      message.querySubmitTimeout = BigInt(object.querySubmitTimeout.toString());
    }
    message.queryDeposit = object.queryDeposit?.map((e) => Coin.fromPartial(e)) || [];
    if (object.txQueryRemovalLimit !== undefined && object.txQueryRemovalLimit !== null) {
      message.txQueryRemovalLimit = BigInt(object.txQueryRemovalLimit.toString());
    }
    if (object.maxKvQueryKeysCount !== undefined && object.maxKvQueryKeysCount !== null) {
      message.maxKvQueryKeysCount = BigInt(object.maxKvQueryKeysCount.toString());
    }
    if (object.maxTransactionsFilters !== undefined && object.maxTransactionsFilters !== null) {
      message.maxTransactionsFilters = BigInt(object.maxTransactionsFilters.toString());
    }
    return message;
  },
};
