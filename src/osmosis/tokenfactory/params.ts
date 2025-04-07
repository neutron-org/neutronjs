/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "osmosis.tokenfactory";
/**
 * WhitelistedHook describes a beforeSendHook which is allowed to be added and executed
 * SetBeforeSendHook can only be called on denoms where the denom creator and
 * code_id for the `contract_addr` match a WhitelistedHook
 */
export interface WhitelistedHook {
  codeId: bigint;
  denomCreator: string;
}
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
  /**
   * DenomCreationFee defines the fee to be charged on the creation of a new
   * denom. The fee is drawn from the MsgCreateDenom's sender account, and
   * transferred to the community pool.
   */
  denomCreationFee: Coin[];
  /**
   * DenomCreationGasConsume defines the gas cost for creating a new denom.
   * This is intended as a spam deterrence mechanism.
   *
   * See: https://github.com/CosmWasm/token-factory/issues/11
   */
  denomCreationGasConsume?: bigint;
  /**
   * FeeCollectorAddress is the address where fees collected from denom creation
   * are sent to
   */
  feeCollectorAddress: string;
  /** whitelisted_hooks is the list of hooks which are allowed to be added and executed */
  whitelistedHooks: WhitelistedHook[];
  /** Sets a limit on the gas that can be consumed by the before_send hook. */
  trackBeforeSendGasLimit: bigint;
}
function createBaseWhitelistedHook(): WhitelistedHook {
  return {
    codeId: BigInt(0),
    denomCreator: "",
  };
}
export const WhitelistedHook = {
  typeUrl: "/osmosis.tokenfactory.WhitelistedHook",
  encode(message: WhitelistedHook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.denomCreator !== "") {
      writer.uint32(18).string(message.denomCreator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WhitelistedHook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWhitelistedHook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.denomCreator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WhitelistedHook {
    const obj = createBaseWhitelistedHook();
    if (isSet(object.codeId)) obj.codeId = BigInt(object.codeId.toString());
    if (isSet(object.denomCreator)) obj.denomCreator = String(object.denomCreator);
    return obj;
  },
  toJSON(message: WhitelistedHook): JsonSafe<WhitelistedHook> {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.denomCreator !== undefined && (obj.denomCreator = message.denomCreator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<WhitelistedHook>, I>>(object: I): WhitelistedHook {
    const message = createBaseWhitelistedHook();
    if (object.codeId !== undefined && object.codeId !== null) {
      message.codeId = BigInt(object.codeId.toString());
    }
    message.denomCreator = object.denomCreator ?? "";
    return message;
  },
};
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    denomCreationGasConsume: undefined,
    feeCollectorAddress: "",
    whitelistedHooks: [],
    trackBeforeSendGasLimit: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/osmosis.tokenfactory.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomCreationGasConsume !== undefined) {
      writer.uint32(16).uint64(message.denomCreationGasConsume);
    }
    if (message.feeCollectorAddress !== "") {
      writer.uint32(26).string(message.feeCollectorAddress);
    }
    for (const v of message.whitelistedHooks) {
      WhitelistedHook.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.trackBeforeSendGasLimit !== BigInt(0)) {
      writer.uint32(40).uint64(message.trackBeforeSendGasLimit);
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
          message.denomCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.denomCreationGasConsume = reader.uint64();
          break;
        case 3:
          message.feeCollectorAddress = reader.string();
          break;
        case 4:
          message.whitelistedHooks.push(WhitelistedHook.decode(reader, reader.uint32()));
          break;
        case 5:
          message.trackBeforeSendGasLimit = reader.uint64();
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
    if (Array.isArray(object?.denomCreationFee))
      obj.denomCreationFee = object.denomCreationFee.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.denomCreationGasConsume))
      obj.denomCreationGasConsume = BigInt(object.denomCreationGasConsume.toString());
    if (isSet(object.feeCollectorAddress)) obj.feeCollectorAddress = String(object.feeCollectorAddress);
    if (Array.isArray(object?.whitelistedHooks))
      obj.whitelistedHooks = object.whitelistedHooks.map((e: any) => WhitelistedHook.fromJSON(e));
    if (isSet(object.trackBeforeSendGasLimit))
      obj.trackBeforeSendGasLimit = BigInt(object.trackBeforeSendGasLimit.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.denomCreationFee) {
      obj.denomCreationFee = message.denomCreationFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.denomCreationFee = [];
    }
    if (message.denomCreationGasConsume !== undefined) {
      obj.denomCreationGasConsume = message.denomCreationGasConsume.toString();
    }
    message.feeCollectorAddress !== undefined && (obj.feeCollectorAddress = message.feeCollectorAddress);
    if (message.whitelistedHooks) {
      obj.whitelistedHooks = message.whitelistedHooks.map((e) => (e ? WhitelistedHook.toJSON(e) : undefined));
    } else {
      obj.whitelistedHooks = [];
    }
    message.trackBeforeSendGasLimit !== undefined &&
      (obj.trackBeforeSendGasLimit = (message.trackBeforeSendGasLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    if (object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null) {
      message.denomCreationGasConsume = BigInt(object.denomCreationGasConsume.toString());
    }
    message.feeCollectorAddress = object.feeCollectorAddress ?? "";
    message.whitelistedHooks = object.whitelistedHooks?.map((e) => WhitelistedHook.fromPartial(e)) || [];
    if (object.trackBeforeSendGasLimit !== undefined && object.trackBeforeSendGasLimit !== null) {
      message.trackBeforeSendGasLimit = BigInt(object.trackBeforeSendGasLimit.toString());
    }
    return message;
  },
};
