/* eslint-disable */
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "gaia.globalfee.v1beta1";
/** Params defines the set of module parameters. */
export interface Params {
  /**
   * minimum_gas_prices stores the minimum gas price(s) for all TX on the chain.
   * When multiple coins are defined then they are accepted alternatively.
   * The list must be sorted by denoms asc. No duplicate denoms or zero amount
   * values allowed. For more information see
   * https://docs.cosmos.network/main/modules/auth#concepts
   */
  minimumGasPrices: DecCoin[];
  /**
   * bypass_min_fee_msg_types defines a list of message type urls
   * that are free of fee charge.
   */
  bypassMinFeeMsgTypes: string[];
  /**
   * max_total_bypass_min_fee_msg_gas_usage defines the total maximum gas usage
   * allowed for a transaction containing only messages of types in bypass_min_fee_msg_types
   * to bypass fee charge.
   */
  maxTotalBypassMinFeeMsgGasUsage: bigint;
}
function createBaseParams(): Params {
  return {
    minimumGasPrices: [],
    bypassMinFeeMsgTypes: [],
    maxTotalBypassMinFeeMsgGasUsage: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/gaia.globalfee.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minimumGasPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bypassMinFeeMsgTypes) {
      writer.uint32(18).string(v!);
    }
    if (message.maxTotalBypassMinFeeMsgGasUsage !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxTotalBypassMinFeeMsgGasUsage);
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
          message.minimumGasPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.bypassMinFeeMsgTypes.push(reader.string());
          break;
        case 3:
          message.maxTotalBypassMinFeeMsgGasUsage = reader.uint64();
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
    if (Array.isArray(object?.minimumGasPrices))
      obj.minimumGasPrices = object.minimumGasPrices.map((e: any) => DecCoin.fromJSON(e));
    if (Array.isArray(object?.bypassMinFeeMsgTypes))
      obj.bypassMinFeeMsgTypes = object.bypassMinFeeMsgTypes.map((e: any) => String(e));
    if (isSet(object.maxTotalBypassMinFeeMsgGasUsage))
      obj.maxTotalBypassMinFeeMsgGasUsage = BigInt(object.maxTotalBypassMinFeeMsgGasUsage.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.minimumGasPrices) {
      obj.minimumGasPrices = message.minimumGasPrices.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.minimumGasPrices = [];
    }
    if (message.bypassMinFeeMsgTypes) {
      obj.bypassMinFeeMsgTypes = message.bypassMinFeeMsgTypes.map((e) => e);
    } else {
      obj.bypassMinFeeMsgTypes = [];
    }
    message.maxTotalBypassMinFeeMsgGasUsage !== undefined &&
      (obj.maxTotalBypassMinFeeMsgGasUsage = (
        message.maxTotalBypassMinFeeMsgGasUsage || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.minimumGasPrices = object.minimumGasPrices?.map((e) => DecCoin.fromPartial(e)) || [];
    message.bypassMinFeeMsgTypes = object.bypassMinFeeMsgTypes?.map((e) => e) || [];
    if (
      object.maxTotalBypassMinFeeMsgGasUsage !== undefined &&
      object.maxTotalBypassMinFeeMsgGasUsage !== null
    ) {
      message.maxTotalBypassMinFeeMsgGasUsage = BigInt(object.maxTotalBypassMinFeeMsgGasUsage.toString());
    }
    return message;
  },
};
