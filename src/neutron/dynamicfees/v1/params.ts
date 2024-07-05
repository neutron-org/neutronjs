//@ts-nocheck
/* eslint-disable */
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "neutron.dynamicfees.v1";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * List of asset prices by the NTRN
   * it's used in cooperation with feemarket module
   * ntrn_prices is a data source to convert gas_price from feemarket's base_denom (untrn)
   * into a given asset
   */
  ntrnPrices: DecCoin[];
}
function createBaseParams(): Params {
  return {
    ntrnPrices: [],
  };
}
export const Params = {
  typeUrl: "/neutron.dynamicfees.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ntrnPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.ntrnPrices.push(DecCoin.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.ntrnPrices))
      obj.ntrnPrices = object.ntrnPrices.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.ntrnPrices) {
      obj.ntrnPrices = message.ntrnPrices.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.ntrnPrices = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.ntrnPrices = object.ntrnPrices?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
