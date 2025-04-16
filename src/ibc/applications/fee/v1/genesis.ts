//@ts-nocheck
/* eslint-disable */
import { IdentifiedPacketFees } from "./fee";
import { PacketId } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { JsonSafe } from "../../../../json-safe";
import { DeepPartial, Exact, isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
  /** list of identified packet fees */
  identifiedFees: IdentifiedPacketFees[];
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** list of registered payees */
  registeredPayees: RegisteredPayee[];
  /** list of registered counterparty payees */
  registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
  /** list of forward relayer addresses */
  forwardRelayers: ForwardRelayerAddress[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
  /** the forward relayer address */
  address: string;
  /** unique packet identifer comprised of the channel ID, port ID and sequence */
  packetId: PacketId;
}
function createBaseGenesisState(): GenesisState {
  return {
    identifiedFees: [],
    feeEnabledChannels: [],
    registeredPayees: [],
    registeredCounterpartyPayees: [],
    forwardRelayers: [],
  };
}
export const GenesisState = {
  typeUrl: "/ibc.applications.fee.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.identifiedFees) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registeredPayees) {
      RegisteredPayee.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.registeredCounterpartyPayees) {
      RegisteredCounterpartyPayee.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forwardRelayers) {
      ForwardRelayerAddress.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.identifiedFees.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.registeredPayees.push(RegisteredPayee.decode(reader, reader.uint32()));
          break;
        case 4:
          message.registeredCounterpartyPayees.push(
            RegisteredCounterpartyPayee.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.forwardRelayers.push(ForwardRelayerAddress.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.identifiedFees))
      obj.identifiedFees = object.identifiedFees.map((e: any) => IdentifiedPacketFees.fromJSON(e));
    if (Array.isArray(object?.feeEnabledChannels))
      obj.feeEnabledChannels = object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e));
    if (Array.isArray(object?.registeredPayees))
      obj.registeredPayees = object.registeredPayees.map((e: any) => RegisteredPayee.fromJSON(e));
    if (Array.isArray(object?.registeredCounterpartyPayees))
      obj.registeredCounterpartyPayees = object.registeredCounterpartyPayees.map((e: any) =>
        RegisteredCounterpartyPayee.fromJSON(e),
      );
    if (Array.isArray(object?.forwardRelayers))
      obj.forwardRelayers = object.forwardRelayers.map((e: any) => ForwardRelayerAddress.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.identifiedFees) {
      obj.identifiedFees = message.identifiedFees.map((e) =>
        e ? IdentifiedPacketFees.toJSON(e) : undefined,
      );
    } else {
      obj.identifiedFees = [];
    }
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map((e) =>
        e ? FeeEnabledChannel.toJSON(e) : undefined,
      );
    } else {
      obj.feeEnabledChannels = [];
    }
    if (message.registeredPayees) {
      obj.registeredPayees = message.registeredPayees.map((e) => (e ? RegisteredPayee.toJSON(e) : undefined));
    } else {
      obj.registeredPayees = [];
    }
    if (message.registeredCounterpartyPayees) {
      obj.registeredCounterpartyPayees = message.registeredCounterpartyPayees.map((e) =>
        e ? RegisteredCounterpartyPayee.toJSON(e) : undefined,
      );
    } else {
      obj.registeredCounterpartyPayees = [];
    }
    if (message.forwardRelayers) {
      obj.forwardRelayers = message.forwardRelayers.map((e) =>
        e ? ForwardRelayerAddress.toJSON(e) : undefined,
      );
    } else {
      obj.forwardRelayers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.identifiedFees = object.identifiedFees?.map((e) => IdentifiedPacketFees.fromPartial(e)) || [];
    message.feeEnabledChannels =
      object.feeEnabledChannels?.map((e) => FeeEnabledChannel.fromPartial(e)) || [];
    message.registeredPayees = object.registeredPayees?.map((e) => RegisteredPayee.fromPartial(e)) || [];
    message.registeredCounterpartyPayees =
      object.registeredCounterpartyPayees?.map((e) => RegisteredCounterpartyPayee.fromPartial(e)) || [];
    message.forwardRelayers = object.forwardRelayers?.map((e) => ForwardRelayerAddress.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.identifiedFees = object.identified_fees?.map((e) => IdentifiedPacketFees.fromAmino(e)) || [];
    message.feeEnabledChannels =
      object.fee_enabled_channels?.map((e) => FeeEnabledChannel.fromAmino(e)) || [];
    message.registeredPayees = object.registered_payees?.map((e) => RegisteredPayee.fromAmino(e)) || [];
    message.registeredCounterpartyPayees =
      object.registered_counterparty_payees?.map((e) => RegisteredCounterpartyPayee.fromAmino(e)) || [];
    message.forwardRelayers = object.forward_relayers?.map((e) => ForwardRelayerAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.identifiedFees) {
      obj.identified_fees = message.identifiedFees.map((e) =>
        e ? IdentifiedPacketFees.toAmino(e) : undefined,
      );
    } else {
      obj.identified_fees = message.identifiedFees;
    }
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map((e) =>
        e ? FeeEnabledChannel.toAmino(e) : undefined,
      );
    } else {
      obj.fee_enabled_channels = message.feeEnabledChannels;
    }
    if (message.registeredPayees) {
      obj.registered_payees = message.registeredPayees.map((e) =>
        e ? RegisteredPayee.toAmino(e) : undefined,
      );
    } else {
      obj.registered_payees = message.registeredPayees;
    }
    if (message.registeredCounterpartyPayees) {
      obj.registered_counterparty_payees = message.registeredCounterpartyPayees.map((e) =>
        e ? RegisteredCounterpartyPayee.toAmino(e) : undefined,
      );
    } else {
      obj.registered_counterparty_payees = message.registeredCounterpartyPayees;
    }
    if (message.forwardRelayers) {
      obj.forward_relayers = message.forwardRelayers.map((e) =>
        e ? ForwardRelayerAddress.toAmino(e) : undefined,
      );
    } else {
      obj.forward_relayers = message.forwardRelayers;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message),
    };
  },
};
function createBaseFeeEnabledChannel(): FeeEnabledChannel {
  return {
    portId: "",
    channelId: "",
  };
}
export const FeeEnabledChannel = {
  typeUrl: "/ibc.applications.fee.v1.FeeEnabledChannel",
  encode(message: FeeEnabledChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeEnabledChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeEnabledChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeeEnabledChannel {
    const obj = createBaseFeeEnabledChannel();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    return obj;
  },
  toJSON(message: FeeEnabledChannel): JsonSafe<FeeEnabledChannel> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FeeEnabledChannel>, I>>(object: I): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: FeeEnabledChannelAmino): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: FeeEnabledChannel): FeeEnabledChannelAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: FeeEnabledChannelAminoMsg): FeeEnabledChannel {
    return FeeEnabledChannel.fromAmino(object.value);
  },
  toAminoMsg(message: FeeEnabledChannel): FeeEnabledChannelAminoMsg {
    return {
      type: "cosmos-sdk/FeeEnabledChannel",
      value: FeeEnabledChannel.toAmino(message),
    };
  },
};
function createBaseRegisteredPayee(): RegisteredPayee {
  return {
    channelId: "",
    relayer: "",
    payee: "",
  };
}
export const RegisteredPayee = {
  typeUrl: "/ibc.applications.fee.v1.RegisteredPayee",
  encode(message: RegisteredPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(26).string(message.payee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredPayee {
    const obj = createBaseRegisteredPayee();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    if (isSet(object.payee)) obj.payee = String(object.payee);
    return obj;
  },
  toJSON(message: RegisteredPayee): JsonSafe<RegisteredPayee> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredPayee>, I>>(object: I): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromAmino(object: RegisteredPayeeAmino): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.payee !== undefined && object.payee !== null) {
      message.payee = object.payee;
    }
    return message;
  },
  toAmino(message: RegisteredPayee): RegisteredPayeeAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.payee = message.payee === "" ? undefined : message.payee;
    return obj;
  },
  fromAminoMsg(object: RegisteredPayeeAminoMsg): RegisteredPayee {
    return RegisteredPayee.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredPayee): RegisteredPayeeAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredPayee",
      value: RegisteredPayee.toAmino(message),
    };
  },
};
function createBaseRegisteredCounterpartyPayee(): RegisteredCounterpartyPayee {
  return {
    channelId: "",
    relayer: "",
    counterpartyPayee: "",
  };
}
export const RegisteredCounterpartyPayee = {
  typeUrl: "/ibc.applications.fee.v1.RegisteredCounterpartyPayee",
  encode(message: RegisteredCounterpartyPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(26).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredCounterpartyPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredCounterpartyPayee {
    const obj = createBaseRegisteredCounterpartyPayee();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.relayer)) obj.relayer = String(object.relayer);
    if (isSet(object.counterpartyPayee)) obj.counterpartyPayee = String(object.counterpartyPayee);
    return obj;
  },
  toJSON(message: RegisteredCounterpartyPayee): JsonSafe<RegisteredCounterpartyPayee> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RegisteredCounterpartyPayee>, I>>(
    object: I,
  ): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromAmino(object: RegisteredCounterpartyPayeeAmino): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
      message.counterpartyPayee = object.counterparty_payee;
    }
    return message;
  },
  toAmino(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.counterparty_payee = message.counterpartyPayee === "" ? undefined : message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: RegisteredCounterpartyPayeeAminoMsg): RegisteredCounterpartyPayee {
    return RegisteredCounterpartyPayee.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredCounterpartyPayee",
      value: RegisteredCounterpartyPayee.toAmino(message),
    };
  },
};
function createBaseForwardRelayerAddress(): ForwardRelayerAddress {
  return {
    address: "",
    packetId: PacketId.fromPartial({}),
  };
}
export const ForwardRelayerAddress = {
  typeUrl: "/ibc.applications.fee.v1.ForwardRelayerAddress",
  encode(message: ForwardRelayerAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForwardRelayerAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardRelayerAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.packetId = PacketId.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ForwardRelayerAddress {
    const obj = createBaseForwardRelayerAddress();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.packetId)) obj.packetId = PacketId.fromJSON(object.packetId);
    return obj;
  },
  toJSON(message: ForwardRelayerAddress): JsonSafe<ForwardRelayerAddress> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.packetId !== undefined &&
      (obj.packetId = message.packetId ? PacketId.toJSON(message.packetId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ForwardRelayerAddress>, I>>(object: I): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    message.address = object.address ?? "";
    if (object.packetId !== undefined && object.packetId !== null) {
      message.packetId = PacketId.fromPartial(object.packetId);
    }
    return message;
  },
  fromAmino(object: ForwardRelayerAddressAmino): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.packet_id !== undefined && object.packet_id !== null) {
      message.packetId = PacketId.fromAmino(object.packet_id);
    }
    return message;
  },
  toAmino(message: ForwardRelayerAddress): ForwardRelayerAddressAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.packet_id = message.packetId ? PacketId.toAmino(message.packetId) : undefined;
    return obj;
  },
  fromAminoMsg(object: ForwardRelayerAddressAminoMsg): ForwardRelayerAddress {
    return ForwardRelayerAddress.fromAmino(object.value);
  },
  toAminoMsg(message: ForwardRelayerAddress): ForwardRelayerAddressAminoMsg {
    return {
      type: "cosmos-sdk/ForwardRelayerAddress",
      value: ForwardRelayerAddress.toAmino(message),
    };
  },
};
