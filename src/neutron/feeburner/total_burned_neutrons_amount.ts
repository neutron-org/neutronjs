/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.feeburner";
/** TotalBurnedNeutronsAmount defines total amount of burned neutron fees */
export interface TotalBurnedNeutronsAmount {
  coin: Coin;
}
function createBaseTotalBurnedNeutronsAmount(): TotalBurnedNeutronsAmount {
  return {
    coin: Coin.fromPartial({}),
  };
}
export const TotalBurnedNeutronsAmount = {
  typeUrl: "/neutron.feeburner.TotalBurnedNeutronsAmount",
  encode(message: TotalBurnedNeutronsAmount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TotalBurnedNeutronsAmount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTotalBurnedNeutronsAmount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TotalBurnedNeutronsAmount {
    const obj = createBaseTotalBurnedNeutronsAmount();
    if (isSet(object.coin)) obj.coin = Coin.fromJSON(object.coin);
    return obj;
  },
  toJSON(message: TotalBurnedNeutronsAmount): JsonSafe<TotalBurnedNeutronsAmount> {
    const obj: any = {};
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TotalBurnedNeutronsAmount>, I>>(
    object: I,
  ): TotalBurnedNeutronsAmount {
    const message = createBaseTotalBurnedNeutronsAmount();
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    }
    return message;
  },
};
