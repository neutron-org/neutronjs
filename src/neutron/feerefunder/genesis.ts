//@ts-nocheck
/* eslint-disable */
import { Params } from "./params";
import { PacketID, Fee } from "./fee";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "neutron.feerefunder";
/** GenesisState defines the fee module's genesis state. */
export interface GenesisState {
  params: Params;
  feeInfos: FeeInfo[];
}
export interface FeeInfo {
  payer: string;
  packetId: PacketID;
  fee: Fee;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    feeInfos: [],
  };
}
export const GenesisState = {
  typeUrl: "/neutron.feerefunder.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeInfos) {
      FeeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.feeInfos.push(FeeInfo.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.feeInfos)) obj.feeInfos = object.feeInfos.map((e: any) => FeeInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.feeInfos) {
      obj.feeInfos = message.feeInfos.map((e) => (e ? FeeInfo.toJSON(e) : undefined));
    } else {
      obj.feeInfos = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.feeInfos = object.feeInfos?.map((e) => FeeInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.feeInfos = object.fee_infos?.map((e) => FeeInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.feeInfos) {
      obj.fee_infos = message.feeInfos.map((e) => (e ? FeeInfo.toAmino(e) : undefined));
    } else {
      obj.fee_infos = message.feeInfos;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
};
function createBaseFeeInfo(): FeeInfo {
  return {
    payer: "",
    packetId: PacketID.fromPartial({}),
    fee: Fee.fromPartial({}),
  };
}
export const FeeInfo = {
  typeUrl: "/neutron.feerefunder.FeeInfo",
  encode(message: FeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payer !== "") {
      writer.uint32(10).string(message.payer);
    }
    if (message.packetId !== undefined) {
      PacketID.encode(message.packetId, writer.uint32(18).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payer = reader.string();
          break;
        case 2:
          message.packetId = PacketID.decode(reader, reader.uint32());
          break;
        case 3:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeeInfo {
    const obj = createBaseFeeInfo();
    if (isSet(object.payer)) obj.payer = String(object.payer);
    if (isSet(object.packetId)) obj.packetId = PacketID.fromJSON(object.packetId);
    if (isSet(object.fee)) obj.fee = Fee.fromJSON(object.fee);
    return obj;
  },
  toJSON(message: FeeInfo): JsonSafe<FeeInfo> {
    const obj: any = {};
    message.payer !== undefined && (obj.payer = message.payer);
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketID.toJSON(message.packetId) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FeeInfo>, I>>(object: I): FeeInfo {
    const message = createBaseFeeInfo();
    message.payer = object.payer ?? "";
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketID.fromPartial(object.packetId);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromPartial(object.fee);
    }
    return message;
  },
  fromAmino(object: FeeInfoAmino): FeeInfo {
    const message = createBaseFeeInfo();
    if (object.payer !== undefined && object.payer !== null) {
      message.payer = object.payer;
    }
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketID.fromAmino(object.packet_id);
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Fee.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: FeeInfo): FeeInfoAmino {
    const obj: any = {};
    obj.payer = message.payer === "" ? undefined : message.payer;
    obj.packet_id = message.packetId ? PacketID.toAmino(message.packetId) : undefined;
    obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: FeeInfoAminoMsg): FeeInfo {
    return FeeInfo.fromAmino(object.value);
  },
};
