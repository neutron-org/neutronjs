/* eslint-disable */
import { Params } from "./params";
import { TotalBurnedNeutronsAmount } from "./total_burned_neutrons_amount";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.feeburner";
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisState {
  params: Params;
  totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    totalBurnedNeutronsAmount: TotalBurnedNeutronsAmount.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/neutron.feeburner.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalBurnedNeutronsAmount !== undefined) {
      TotalBurnedNeutronsAmount.encode(message.totalBurnedNeutronsAmount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.totalBurnedNeutronsAmount = TotalBurnedNeutronsAmount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.totalBurnedNeutronsAmount))
      obj.totalBurnedNeutronsAmount = TotalBurnedNeutronsAmount.fromJSON(object.totalBurnedNeutronsAmount);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.totalBurnedNeutronsAmount !== undefined &&
      (obj.totalBurnedNeutronsAmount = message.totalBurnedNeutronsAmount
        ? TotalBurnedNeutronsAmount.toJSON(message.totalBurnedNeutronsAmount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.totalBurnedNeutronsAmount !== undefined && object.totalBurnedNeutronsAmount !== null) {
      message.totalBurnedNeutronsAmount = TotalBurnedNeutronsAmount.fromPartial(
        object.totalBurnedNeutronsAmount,
      );
    }
    return message;
  },
};
