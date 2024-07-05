/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "neutron.interchaintxs.v1";
/** Params defines the parameters for the module. */
export interface Params {
  /** Defines maximum amount of messages to be passed in MsgSubmitTx */
  msgSubmitTxMaxMessages: bigint;
  /** Defines a minimum fee required to register interchain account */
  registerFee: Coin[];
}
function createBaseParams(): Params {
  return {
    msgSubmitTxMaxMessages: BigInt(0),
    registerFee: [],
  };
}
export const Params = {
  typeUrl: "/neutron.interchaintxs.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgSubmitTxMaxMessages !== BigInt(0)) {
      writer.uint32(8).uint64(message.msgSubmitTxMaxMessages);
    }
    for (const v of message.registerFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.msgSubmitTxMaxMessages = reader.uint64();
          break;
        case 2:
          message.registerFee.push(Coin.decode(reader, reader.uint32()));
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
    if (isSet(object.msgSubmitTxMaxMessages))
      obj.msgSubmitTxMaxMessages = BigInt(object.msgSubmitTxMaxMessages.toString());
    if (Array.isArray(object?.registerFee))
      obj.registerFee = object.registerFee.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.msgSubmitTxMaxMessages !== undefined &&
      (obj.msgSubmitTxMaxMessages = (message.msgSubmitTxMaxMessages || BigInt(0)).toString());
    if (message.registerFee) {
      obj.registerFee = message.registerFee.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.registerFee = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.msgSubmitTxMaxMessages !== undefined && object.msgSubmitTxMaxMessages !== null) {
      message.msgSubmitTxMaxMessages = BigInt(object.msgSubmitTxMaxMessages.toString());
    }
    message.registerFee = object.registerFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
