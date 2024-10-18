/* eslint-disable */
import { ConsumerParams, ProviderInfo } from "../../v1/shared_consumer";
import { ClientState, ConsensusState } from "../../../../ibc/lightclients/tendermint/v1/tendermint";
import { ValidatorUpdate } from "../../../../tendermint/abci/types";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { ConsumerPacketData } from "../../v1/wire";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "interchain_security.ccv.consumer.v1";
/**
 * GenesisState defines the CCV consumer genesis state
 *
 * Note: this type is only used on consumer side and references shared types with
 * provider
 */
export interface GenesisState {
  /** ConsumerParams is a shared type with provider module */
  params: ConsumerParams;
  /** Client ID of the provider. Empty for a new chain, filled in on restart. */
  providerClientId: string;
  /** Channel ID of the provider. Empty for a new chain, filled in on restart. */
  providerChannelId: string;
  /** true for new chain, false for chain restart. */
  newChain: boolean;
  /** !!! DEPRECATED !!! ProviderClientState is deprecated. Use provider.client_state instead */
  /** @deprecated */
  providerClientState?: ClientState;
  /** !!! DEPRECATED !!! ProviderConsensusState is deprecated. Use provider.consensus_state instead */
  /** @deprecated */
  providerConsensusState?: ConsensusState;
  /** MaturingPackets nil on new chain, filled in on restart. */
  maturingPackets: MaturingVSCPacket[];
  /** !!! DEPRECATED !!!! InitialValset is deprecated. Use provider.initial_val_set instead */
  /** @deprecated */
  initialValSet: ValidatorUpdate[];
  /** HeightToValsetUpdateId nil on new chain, filled in on restart. */
  heightToValsetUpdateId: HeightToValsetUpdateID[];
  /** OutstandingDowntimes nil on new chain, filled  in on restart. */
  outstandingDowntimeSlashing: OutstandingDowntime[];
  /** PendingConsumerPackets nil on new chain, filled in on restart. */
  pendingConsumerPackets: ConsumerPacketDataList;
  /** LastTransmissionBlockHeight nil on new chain, filled in on restart. */
  lastTransmissionBlockHeight: LastTransmissionBlockHeight;
  /** flag indicating whether the consumer CCV module starts in pre-CCV state */
  preCCV: boolean;
  provider: ProviderInfo;
}
/**
 * HeightValsetUpdateID represents a mapping internal to the consumer CCV module
 * which links a block height to each recv valset update id.
 */
export interface HeightToValsetUpdateID {
  height: bigint;
  valsetUpdateId: bigint;
}
/**
 * OutstandingDowntime defines the type used internally to the consumer CCV
 * module and is used in order to not send multiple slashing requests for
 * the same downtime infraction.
 */
export interface OutstandingDowntime {
  validatorConsensusAddress: string;
}
/**
 * LastTransmissionBlockHeight is the last time validator holding
 * pools were transmitted to the provider chain. This type is used internally
 * to the consumer CCV module.
 */
export interface LastTransmissionBlockHeight {
  height: bigint;
}
/**
 * MaturingVSCPacket represents a vsc packet that is maturing internal to the
 * consumer CCV module, where the consumer has not yet relayed a VSCMatured
 * packet back to the provider.
 */
export interface MaturingVSCPacket {
  vscId: bigint;
  maturityTime: Timestamp;
}
/**
 * ConsumerPacketDataList is a list of consumer packet data packets.
 *
 * Note this type is used internally to the consumer CCV module
 * for exporting / importing state in InitGenesis and ExportGenesis.
 */
export interface ConsumerPacketDataList {
  list: ConsumerPacketData[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: ConsumerParams.fromPartial({}),
    providerClientId: "",
    providerChannelId: "",
    newChain: false,
    providerClientState: undefined,
    providerConsensusState: undefined,
    maturingPackets: [],
    initialValSet: [],
    heightToValsetUpdateId: [],
    outstandingDowntimeSlashing: [],
    pendingConsumerPackets: ConsumerPacketDataList.fromPartial({}),
    lastTransmissionBlockHeight: LastTransmissionBlockHeight.fromPartial({}),
    preCCV: false,
    provider: ProviderInfo.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/interchain_security.ccv.consumer.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      ConsumerParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.providerClientId !== "") {
      writer.uint32(18).string(message.providerClientId);
    }
    if (message.providerChannelId !== "") {
      writer.uint32(26).string(message.providerChannelId);
    }
    if (message.newChain === true) {
      writer.uint32(32).bool(message.newChain);
    }
    if (message.providerClientState !== undefined) {
      ClientState.encode(message.providerClientState, writer.uint32(42).fork()).ldelim();
    }
    if (message.providerConsensusState !== undefined) {
      ConsensusState.encode(message.providerConsensusState, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.maturingPackets) {
      MaturingVSCPacket.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.initialValSet) {
      ValidatorUpdate.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.heightToValsetUpdateId) {
      HeightToValsetUpdateID.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.outstandingDowntimeSlashing) {
      OutstandingDowntime.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.pendingConsumerPackets !== undefined) {
      ConsumerPacketDataList.encode(message.pendingConsumerPackets, writer.uint32(90).fork()).ldelim();
    }
    if (message.lastTransmissionBlockHeight !== undefined) {
      LastTransmissionBlockHeight.encode(
        message.lastTransmissionBlockHeight,
        writer.uint32(98).fork(),
      ).ldelim();
    }
    if (message.preCCV === true) {
      writer.uint32(104).bool(message.preCCV);
    }
    if (message.provider !== undefined) {
      ProviderInfo.encode(message.provider, writer.uint32(114).fork()).ldelim();
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
          message.params = ConsumerParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.providerClientId = reader.string();
          break;
        case 3:
          message.providerChannelId = reader.string();
          break;
        case 4:
          message.newChain = reader.bool();
          break;
        case 5:
          message.providerClientState = ClientState.decode(reader, reader.uint32());
          break;
        case 6:
          message.providerConsensusState = ConsensusState.decode(reader, reader.uint32());
          break;
        case 7:
          message.maturingPackets.push(MaturingVSCPacket.decode(reader, reader.uint32()));
          break;
        case 8:
          message.initialValSet.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 9:
          message.heightToValsetUpdateId.push(HeightToValsetUpdateID.decode(reader, reader.uint32()));
          break;
        case 10:
          message.outstandingDowntimeSlashing.push(OutstandingDowntime.decode(reader, reader.uint32()));
          break;
        case 11:
          message.pendingConsumerPackets = ConsumerPacketDataList.decode(reader, reader.uint32());
          break;
        case 12:
          message.lastTransmissionBlockHeight = LastTransmissionBlockHeight.decode(reader, reader.uint32());
          break;
        case 13:
          message.preCCV = reader.bool();
          break;
        case 14:
          message.provider = ProviderInfo.decode(reader, reader.uint32());
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
    if (isSet(object.params)) obj.params = ConsumerParams.fromJSON(object.params);
    if (isSet(object.providerClientId)) obj.providerClientId = String(object.providerClientId);
    if (isSet(object.providerChannelId)) obj.providerChannelId = String(object.providerChannelId);
    if (isSet(object.newChain)) obj.newChain = Boolean(object.newChain);
    if (isSet(object.providerClientState))
      obj.providerClientState = ClientState.fromJSON(object.providerClientState);
    if (isSet(object.providerConsensusState))
      obj.providerConsensusState = ConsensusState.fromJSON(object.providerConsensusState);
    if (Array.isArray(object?.maturingPackets))
      obj.maturingPackets = object.maturingPackets.map((e: any) => MaturingVSCPacket.fromJSON(e));
    if (Array.isArray(object?.initialValSet))
      obj.initialValSet = object.initialValSet.map((e: any) => ValidatorUpdate.fromJSON(e));
    if (Array.isArray(object?.heightToValsetUpdateId))
      obj.heightToValsetUpdateId = object.heightToValsetUpdateId.map((e: any) =>
        HeightToValsetUpdateID.fromJSON(e),
      );
    if (Array.isArray(object?.outstandingDowntimeSlashing))
      obj.outstandingDowntimeSlashing = object.outstandingDowntimeSlashing.map((e: any) =>
        OutstandingDowntime.fromJSON(e),
      );
    if (isSet(object.pendingConsumerPackets))
      obj.pendingConsumerPackets = ConsumerPacketDataList.fromJSON(object.pendingConsumerPackets);
    if (isSet(object.lastTransmissionBlockHeight))
      obj.lastTransmissionBlockHeight = LastTransmissionBlockHeight.fromJSON(
        object.lastTransmissionBlockHeight,
      );
    if (isSet(object.preCCV)) obj.preCCV = Boolean(object.preCCV);
    if (isSet(object.provider)) obj.provider = ProviderInfo.fromJSON(object.provider);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? ConsumerParams.toJSON(message.params) : undefined);
    message.providerClientId !== undefined && (obj.providerClientId = message.providerClientId);
    message.providerChannelId !== undefined && (obj.providerChannelId = message.providerChannelId);
    message.newChain !== undefined && (obj.newChain = message.newChain);
    message.providerClientState !== undefined &&
      (obj.providerClientState = message.providerClientState
        ? ClientState.toJSON(message.providerClientState)
        : undefined);
    message.providerConsensusState !== undefined &&
      (obj.providerConsensusState = message.providerConsensusState
        ? ConsensusState.toJSON(message.providerConsensusState)
        : undefined);
    if (message.maturingPackets) {
      obj.maturingPackets = message.maturingPackets.map((e) => (e ? MaturingVSCPacket.toJSON(e) : undefined));
    } else {
      obj.maturingPackets = [];
    }
    if (message.initialValSet) {
      obj.initialValSet = message.initialValSet.map((e) => (e ? ValidatorUpdate.toJSON(e) : undefined));
    } else {
      obj.initialValSet = [];
    }
    if (message.heightToValsetUpdateId) {
      obj.heightToValsetUpdateId = message.heightToValsetUpdateId.map((e) =>
        e ? HeightToValsetUpdateID.toJSON(e) : undefined,
      );
    } else {
      obj.heightToValsetUpdateId = [];
    }
    if (message.outstandingDowntimeSlashing) {
      obj.outstandingDowntimeSlashing = message.outstandingDowntimeSlashing.map((e) =>
        e ? OutstandingDowntime.toJSON(e) : undefined,
      );
    } else {
      obj.outstandingDowntimeSlashing = [];
    }
    message.pendingConsumerPackets !== undefined &&
      (obj.pendingConsumerPackets = message.pendingConsumerPackets
        ? ConsumerPacketDataList.toJSON(message.pendingConsumerPackets)
        : undefined);
    message.lastTransmissionBlockHeight !== undefined &&
      (obj.lastTransmissionBlockHeight = message.lastTransmissionBlockHeight
        ? LastTransmissionBlockHeight.toJSON(message.lastTransmissionBlockHeight)
        : undefined);
    message.preCCV !== undefined && (obj.preCCV = message.preCCV);
    message.provider !== undefined &&
      (obj.provider = message.provider ? ProviderInfo.toJSON(message.provider) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = ConsumerParams.fromPartial(object.params);
    }
    message.providerClientId = object.providerClientId ?? "";
    message.providerChannelId = object.providerChannelId ?? "";
    message.newChain = object.newChain ?? false;
    if (object.providerClientState !== undefined && object.providerClientState !== null) {
      message.providerClientState = ClientState.fromPartial(object.providerClientState);
    }
    if (object.providerConsensusState !== undefined && object.providerConsensusState !== null) {
      message.providerConsensusState = ConsensusState.fromPartial(object.providerConsensusState);
    }
    message.maturingPackets = object.maturingPackets?.map((e) => MaturingVSCPacket.fromPartial(e)) || [];
    message.initialValSet = object.initialValSet?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    message.heightToValsetUpdateId =
      object.heightToValsetUpdateId?.map((e) => HeightToValsetUpdateID.fromPartial(e)) || [];
    message.outstandingDowntimeSlashing =
      object.outstandingDowntimeSlashing?.map((e) => OutstandingDowntime.fromPartial(e)) || [];
    if (object.pendingConsumerPackets !== undefined && object.pendingConsumerPackets !== null) {
      message.pendingConsumerPackets = ConsumerPacketDataList.fromPartial(object.pendingConsumerPackets);
    }
    if (object.lastTransmissionBlockHeight !== undefined && object.lastTransmissionBlockHeight !== null) {
      message.lastTransmissionBlockHeight = LastTransmissionBlockHeight.fromPartial(
        object.lastTransmissionBlockHeight,
      );
    }
    message.preCCV = object.preCCV ?? false;
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = ProviderInfo.fromPartial(object.provider);
    }
    return message;
  },
};
function createBaseHeightToValsetUpdateID(): HeightToValsetUpdateID {
  return {
    height: BigInt(0),
    valsetUpdateId: BigInt(0),
  };
}
export const HeightToValsetUpdateID = {
  typeUrl: "/interchain_security.ccv.consumer.v1.HeightToValsetUpdateID",
  encode(message: HeightToValsetUpdateID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.valsetUpdateId !== BigInt(0)) {
      writer.uint32(16).uint64(message.valsetUpdateId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HeightToValsetUpdateID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeightToValsetUpdateID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.valsetUpdateId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HeightToValsetUpdateID {
    const obj = createBaseHeightToValsetUpdateID();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.valsetUpdateId)) obj.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    return obj;
  },
  toJSON(message: HeightToValsetUpdateID): JsonSafe<HeightToValsetUpdateID> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = (message.valsetUpdateId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<HeightToValsetUpdateID>, I>>(object: I): HeightToValsetUpdateID {
    const message = createBaseHeightToValsetUpdateID();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    }
    return message;
  },
};
function createBaseOutstandingDowntime(): OutstandingDowntime {
  return {
    validatorConsensusAddress: "",
  };
}
export const OutstandingDowntime = {
  typeUrl: "/interchain_security.ccv.consumer.v1.OutstandingDowntime",
  encode(message: OutstandingDowntime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorConsensusAddress !== "") {
      writer.uint32(10).string(message.validatorConsensusAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OutstandingDowntime {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutstandingDowntime();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorConsensusAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OutstandingDowntime {
    const obj = createBaseOutstandingDowntime();
    if (isSet(object.validatorConsensusAddress))
      obj.validatorConsensusAddress = String(object.validatorConsensusAddress);
    return obj;
  },
  toJSON(message: OutstandingDowntime): JsonSafe<OutstandingDowntime> {
    const obj: any = {};
    message.validatorConsensusAddress !== undefined &&
      (obj.validatorConsensusAddress = message.validatorConsensusAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<OutstandingDowntime>, I>>(object: I): OutstandingDowntime {
    const message = createBaseOutstandingDowntime();
    message.validatorConsensusAddress = object.validatorConsensusAddress ?? "";
    return message;
  },
};
function createBaseLastTransmissionBlockHeight(): LastTransmissionBlockHeight {
  return {
    height: BigInt(0),
  };
}
export const LastTransmissionBlockHeight = {
  typeUrl: "/interchain_security.ccv.consumer.v1.LastTransmissionBlockHeight",
  encode(message: LastTransmissionBlockHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastTransmissionBlockHeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastTransmissionBlockHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LastTransmissionBlockHeight {
    const obj = createBaseLastTransmissionBlockHeight();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: LastTransmissionBlockHeight): JsonSafe<LastTransmissionBlockHeight> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LastTransmissionBlockHeight>, I>>(
    object: I,
  ): LastTransmissionBlockHeight {
    const message = createBaseLastTransmissionBlockHeight();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
function createBaseMaturingVSCPacket(): MaturingVSCPacket {
  return {
    vscId: BigInt(0),
    maturityTime: Timestamp.fromPartial({}),
  };
}
export const MaturingVSCPacket = {
  typeUrl: "/interchain_security.ccv.consumer.v1.MaturingVSCPacket",
  encode(message: MaturingVSCPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vscId !== BigInt(0)) {
      writer.uint32(8).uint64(message.vscId);
    }
    if (message.maturityTime !== undefined) {
      Timestamp.encode(message.maturityTime, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MaturingVSCPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaturingVSCPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vscId = reader.uint64();
          break;
        case 2:
          message.maturityTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MaturingVSCPacket {
    const obj = createBaseMaturingVSCPacket();
    if (isSet(object.vscId)) obj.vscId = BigInt(object.vscId.toString());
    if (isSet(object.maturityTime)) obj.maturityTime = fromJsonTimestamp(object.maturityTime);
    return obj;
  },
  toJSON(message: MaturingVSCPacket): JsonSafe<MaturingVSCPacket> {
    const obj: any = {};
    message.vscId !== undefined && (obj.vscId = (message.vscId || BigInt(0)).toString());
    message.maturityTime !== undefined &&
      (obj.maturityTime = fromTimestamp(message.maturityTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MaturingVSCPacket>, I>>(object: I): MaturingVSCPacket {
    const message = createBaseMaturingVSCPacket();
    if (object.vscId !== undefined && object.vscId !== null) {
      message.vscId = BigInt(object.vscId.toString());
    }
    if (object.maturityTime !== undefined && object.maturityTime !== null) {
      message.maturityTime = Timestamp.fromPartial(object.maturityTime);
    }
    return message;
  },
};
function createBaseConsumerPacketDataList(): ConsumerPacketDataList {
  return {
    list: [],
  };
}
export const ConsumerPacketDataList = {
  typeUrl: "/interchain_security.ccv.consumer.v1.ConsumerPacketDataList",
  encode(message: ConsumerPacketDataList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      ConsumerPacketData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerPacketDataList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerPacketDataList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(ConsumerPacketData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerPacketDataList {
    const obj = createBaseConsumerPacketDataList();
    if (Array.isArray(object?.list)) obj.list = object.list.map((e: any) => ConsumerPacketData.fromJSON(e));
    return obj;
  },
  toJSON(message: ConsumerPacketDataList): JsonSafe<ConsumerPacketDataList> {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map((e) => (e ? ConsumerPacketData.toJSON(e) : undefined));
    } else {
      obj.list = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerPacketDataList>, I>>(object: I): ConsumerPacketDataList {
    const message = createBaseConsumerPacketDataList();
    message.list = object.list?.map((e) => ConsumerPacketData.fromPartial(e)) || [];
    return message;
  },
};
