//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "neutron.coinfactory.v1beta1";
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
}
function createBaseParams(): Params {
  return {
    denomCreationFee: [],
    denomCreationGasConsume: undefined,
    feeCollectorAddress: "",
  };
}
export const Params = {
  typeUrl: "/neutron.coinfactory.v1beta1.Params",
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
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.denomCreationFee = object.denomCreationFee?.map((e) => Coin.fromPartial(e)) || [];
    if (object.denomCreationGasConsume !== undefined && object.denomCreationGasConsume !== null) {
      message.denomCreationGasConsume = BigInt(object.denomCreationGasConsume.toString());
    }
    message.feeCollectorAddress = object.feeCollectorAddress ?? "";
    return message;
  },
};
