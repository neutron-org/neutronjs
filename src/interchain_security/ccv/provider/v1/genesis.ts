/* eslint-disable */
import {
  UnbondingOp,
  MaturedUnbondingOps,
  ConsumerAdditionProposal,
  ConsumerRemovalProposal,
  Params,
  ValidatorConsumerPubKey,
  ValidatorByConsumerAddr,
  ConsumerAddrsToPrune,
  InitTimeoutTimestamp,
  ExportedVscSendTimestamp,
  VscUnbondingOps,
} from "./provider";
import { ConsumerGenesisState } from "../../v1/shared_consumer";
import { ValidatorSetChangePacketData } from "../../v1/wire";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "interchain_security.ccv.provider.v1";
/** GenesisState defines the CCV provider chain genesis state */
export interface GenesisState {
  /** strictly positive and set to 1 (DefaultValsetUpdateID) for a new chain */
  valsetUpdateId: bigint;
  /** empty for a new chain */
  consumerStates: ConsumerState[];
  /** empty for a new chain */
  unbondingOps: UnbondingOp[];
  /** empty for a new chain */
  matureUnbondingOps?: MaturedUnbondingOps;
  /** empty for a new chain */
  valsetUpdateIdToHeight: ValsetUpdateIdToHeight[];
  /** empty for a new chain */
  consumerAdditionProposals: ConsumerAdditionProposal[];
  /** empty for a new chain */
  consumerRemovalProposals: ConsumerRemovalProposal[];
  params: Params;
  /** empty for a new chain */
  validatorConsumerPubkeys: ValidatorConsumerPubKey[];
  /** empty for a new chain */
  validatorsByConsumerAddr: ValidatorByConsumerAddr[];
  /** empty for a new chain */
  consumerAddrsToPrune: ConsumerAddrsToPrune[];
  initTimeoutTimestamps: InitTimeoutTimestamp[];
  exportedVscSendTimestamps: ExportedVscSendTimestamp[];
}
/**
 * The provider CCV module's knowledge of consumer state.
 *
 * Note this type is only used internally to the provider CCV module.
 */
export interface ConsumerState {
  /** ChainID defines the chain ID for the consumer chain */
  chainId: string;
  /** ChannelID defines the IBC channel ID for the consumer chain */
  channelId: string;
  /** ClientID defines the IBC client ID for the consumer chain */
  clientId: string;
  /** InitalHeight defines the initial block height for the consumer chain */
  initialHeight: bigint;
  /** ConsumerGenesis defines the initial consumer chain genesis states */
  consumerGenesis: ConsumerGenesisState;
  pendingValsetChanges: ValidatorSetChangePacketData[];
  slashDowntimeAck: string[];
  unbondingOpsIndex: VscUnbondingOps[];
}
/**
 * ValsetUpdateIdToHeight defines the genesis information for the mapping
 * of each valset update id to a block height
 */
export interface ValsetUpdateIdToHeight {
  valsetUpdateId: bigint;
  height: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    valsetUpdateId: BigInt(0),
    consumerStates: [],
    unbondingOps: [],
    matureUnbondingOps: undefined,
    valsetUpdateIdToHeight: [],
    consumerAdditionProposals: [],
    consumerRemovalProposals: [],
    params: Params.fromPartial({}),
    validatorConsumerPubkeys: [],
    validatorsByConsumerAddr: [],
    consumerAddrsToPrune: [],
    initTimeoutTimestamps: [],
    exportedVscSendTimestamps: [],
  };
}
export const GenesisState = {
  typeUrl: "/interchain_security.ccv.provider.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valsetUpdateId !== BigInt(0)) {
      writer.uint32(8).uint64(message.valsetUpdateId);
    }
    for (const v of message.consumerStates) {
      ConsumerState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.unbondingOps) {
      UnbondingOp.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.matureUnbondingOps !== undefined) {
      MaturedUnbondingOps.encode(message.matureUnbondingOps, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.valsetUpdateIdToHeight) {
      ValsetUpdateIdToHeight.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.consumerAdditionProposals) {
      ConsumerAdditionProposal.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.consumerRemovalProposals) {
      ConsumerRemovalProposal.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.validatorConsumerPubkeys) {
      ValidatorConsumerPubKey.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.validatorsByConsumerAddr) {
      ValidatorByConsumerAddr.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.consumerAddrsToPrune) {
      ConsumerAddrsToPrune.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.initTimeoutTimestamps) {
      InitTimeoutTimestamp.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.exportedVscSendTimestamps) {
      ExportedVscSendTimestamp.encode(v!, writer.uint32(106).fork()).ldelim();
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
          message.valsetUpdateId = reader.uint64();
          break;
        case 2:
          message.consumerStates.push(ConsumerState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.unbondingOps.push(UnbondingOp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.matureUnbondingOps = MaturedUnbondingOps.decode(reader, reader.uint32());
          break;
        case 5:
          message.valsetUpdateIdToHeight.push(ValsetUpdateIdToHeight.decode(reader, reader.uint32()));
          break;
        case 6:
          message.consumerAdditionProposals.push(ConsumerAdditionProposal.decode(reader, reader.uint32()));
          break;
        case 7:
          message.consumerRemovalProposals.push(ConsumerRemovalProposal.decode(reader, reader.uint32()));
          break;
        case 8:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 9:
          message.validatorConsumerPubkeys.push(ValidatorConsumerPubKey.decode(reader, reader.uint32()));
          break;
        case 10:
          message.validatorsByConsumerAddr.push(ValidatorByConsumerAddr.decode(reader, reader.uint32()));
          break;
        case 11:
          message.consumerAddrsToPrune.push(ConsumerAddrsToPrune.decode(reader, reader.uint32()));
          break;
        case 12:
          message.initTimeoutTimestamps.push(InitTimeoutTimestamp.decode(reader, reader.uint32()));
          break;
        case 13:
          message.exportedVscSendTimestamps.push(ExportedVscSendTimestamp.decode(reader, reader.uint32()));
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
    if (isSet(object.valsetUpdateId)) obj.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    if (Array.isArray(object?.consumerStates))
      obj.consumerStates = object.consumerStates.map((e: any) => ConsumerState.fromJSON(e));
    if (Array.isArray(object?.unbondingOps))
      obj.unbondingOps = object.unbondingOps.map((e: any) => UnbondingOp.fromJSON(e));
    if (isSet(object.matureUnbondingOps))
      obj.matureUnbondingOps = MaturedUnbondingOps.fromJSON(object.matureUnbondingOps);
    if (Array.isArray(object?.valsetUpdateIdToHeight))
      obj.valsetUpdateIdToHeight = object.valsetUpdateIdToHeight.map((e: any) =>
        ValsetUpdateIdToHeight.fromJSON(e),
      );
    if (Array.isArray(object?.consumerAdditionProposals))
      obj.consumerAdditionProposals = object.consumerAdditionProposals.map((e: any) =>
        ConsumerAdditionProposal.fromJSON(e),
      );
    if (Array.isArray(object?.consumerRemovalProposals))
      obj.consumerRemovalProposals = object.consumerRemovalProposals.map((e: any) =>
        ConsumerRemovalProposal.fromJSON(e),
      );
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.validatorConsumerPubkeys))
      obj.validatorConsumerPubkeys = object.validatorConsumerPubkeys.map((e: any) =>
        ValidatorConsumerPubKey.fromJSON(e),
      );
    if (Array.isArray(object?.validatorsByConsumerAddr))
      obj.validatorsByConsumerAddr = object.validatorsByConsumerAddr.map((e: any) =>
        ValidatorByConsumerAddr.fromJSON(e),
      );
    if (Array.isArray(object?.consumerAddrsToPrune))
      obj.consumerAddrsToPrune = object.consumerAddrsToPrune.map((e: any) =>
        ConsumerAddrsToPrune.fromJSON(e),
      );
    if (Array.isArray(object?.initTimeoutTimestamps))
      obj.initTimeoutTimestamps = object.initTimeoutTimestamps.map((e: any) =>
        InitTimeoutTimestamp.fromJSON(e),
      );
    if (Array.isArray(object?.exportedVscSendTimestamps))
      obj.exportedVscSendTimestamps = object.exportedVscSendTimestamps.map((e: any) =>
        ExportedVscSendTimestamp.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = (message.valsetUpdateId || BigInt(0)).toString());
    if (message.consumerStates) {
      obj.consumerStates = message.consumerStates.map((e) => (e ? ConsumerState.toJSON(e) : undefined));
    } else {
      obj.consumerStates = [];
    }
    if (message.unbondingOps) {
      obj.unbondingOps = message.unbondingOps.map((e) => (e ? UnbondingOp.toJSON(e) : undefined));
    } else {
      obj.unbondingOps = [];
    }
    message.matureUnbondingOps !== undefined &&
      (obj.matureUnbondingOps = message.matureUnbondingOps
        ? MaturedUnbondingOps.toJSON(message.matureUnbondingOps)
        : undefined);
    if (message.valsetUpdateIdToHeight) {
      obj.valsetUpdateIdToHeight = message.valsetUpdateIdToHeight.map((e) =>
        e ? ValsetUpdateIdToHeight.toJSON(e) : undefined,
      );
    } else {
      obj.valsetUpdateIdToHeight = [];
    }
    if (message.consumerAdditionProposals) {
      obj.consumerAdditionProposals = message.consumerAdditionProposals.map((e) =>
        e ? ConsumerAdditionProposal.toJSON(e) : undefined,
      );
    } else {
      obj.consumerAdditionProposals = [];
    }
    if (message.consumerRemovalProposals) {
      obj.consumerRemovalProposals = message.consumerRemovalProposals.map((e) =>
        e ? ConsumerRemovalProposal.toJSON(e) : undefined,
      );
    } else {
      obj.consumerRemovalProposals = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.validatorConsumerPubkeys) {
      obj.validatorConsumerPubkeys = message.validatorConsumerPubkeys.map((e) =>
        e ? ValidatorConsumerPubKey.toJSON(e) : undefined,
      );
    } else {
      obj.validatorConsumerPubkeys = [];
    }
    if (message.validatorsByConsumerAddr) {
      obj.validatorsByConsumerAddr = message.validatorsByConsumerAddr.map((e) =>
        e ? ValidatorByConsumerAddr.toJSON(e) : undefined,
      );
    } else {
      obj.validatorsByConsumerAddr = [];
    }
    if (message.consumerAddrsToPrune) {
      obj.consumerAddrsToPrune = message.consumerAddrsToPrune.map((e) =>
        e ? ConsumerAddrsToPrune.toJSON(e) : undefined,
      );
    } else {
      obj.consumerAddrsToPrune = [];
    }
    if (message.initTimeoutTimestamps) {
      obj.initTimeoutTimestamps = message.initTimeoutTimestamps.map((e) =>
        e ? InitTimeoutTimestamp.toJSON(e) : undefined,
      );
    } else {
      obj.initTimeoutTimestamps = [];
    }
    if (message.exportedVscSendTimestamps) {
      obj.exportedVscSendTimestamps = message.exportedVscSendTimestamps.map((e) =>
        e ? ExportedVscSendTimestamp.toJSON(e) : undefined,
      );
    } else {
      obj.exportedVscSendTimestamps = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    }
    message.consumerStates = object.consumerStates?.map((e) => ConsumerState.fromPartial(e)) || [];
    message.unbondingOps = object.unbondingOps?.map((e) => UnbondingOp.fromPartial(e)) || [];
    if (object.matureUnbondingOps !== undefined && object.matureUnbondingOps !== null) {
      message.matureUnbondingOps = MaturedUnbondingOps.fromPartial(object.matureUnbondingOps);
    }
    message.valsetUpdateIdToHeight =
      object.valsetUpdateIdToHeight?.map((e) => ValsetUpdateIdToHeight.fromPartial(e)) || [];
    message.consumerAdditionProposals =
      object.consumerAdditionProposals?.map((e) => ConsumerAdditionProposal.fromPartial(e)) || [];
    message.consumerRemovalProposals =
      object.consumerRemovalProposals?.map((e) => ConsumerRemovalProposal.fromPartial(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.validatorConsumerPubkeys =
      object.validatorConsumerPubkeys?.map((e) => ValidatorConsumerPubKey.fromPartial(e)) || [];
    message.validatorsByConsumerAddr =
      object.validatorsByConsumerAddr?.map((e) => ValidatorByConsumerAddr.fromPartial(e)) || [];
    message.consumerAddrsToPrune =
      object.consumerAddrsToPrune?.map((e) => ConsumerAddrsToPrune.fromPartial(e)) || [];
    message.initTimeoutTimestamps =
      object.initTimeoutTimestamps?.map((e) => InitTimeoutTimestamp.fromPartial(e)) || [];
    message.exportedVscSendTimestamps =
      object.exportedVscSendTimestamps?.map((e) => ExportedVscSendTimestamp.fromPartial(e)) || [];
    return message;
  },
};
function createBaseConsumerState(): ConsumerState {
  return {
    chainId: "",
    channelId: "",
    clientId: "",
    initialHeight: BigInt(0),
    consumerGenesis: ConsumerGenesisState.fromPartial({}),
    pendingValsetChanges: [],
    slashDowntimeAck: [],
    unbondingOpsIndex: [],
  };
}
export const ConsumerState = {
  typeUrl: "/interchain_security.ccv.provider.v1.ConsumerState",
  encode(message: ConsumerState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.clientId !== "") {
      writer.uint32(26).string(message.clientId);
    }
    if (message.initialHeight !== BigInt(0)) {
      writer.uint32(32).uint64(message.initialHeight);
    }
    if (message.consumerGenesis !== undefined) {
      ConsumerGenesisState.encode(message.consumerGenesis, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.pendingValsetChanges) {
      ValidatorSetChangePacketData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.slashDowntimeAck) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.unbondingOpsIndex) {
      VscUnbondingOps.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.clientId = reader.string();
          break;
        case 4:
          message.initialHeight = reader.uint64();
          break;
        case 5:
          message.consumerGenesis = ConsumerGenesisState.decode(reader, reader.uint32());
          break;
        case 6:
          message.pendingValsetChanges.push(ValidatorSetChangePacketData.decode(reader, reader.uint32()));
          break;
        case 7:
          message.slashDowntimeAck.push(reader.string());
          break;
        case 8:
          message.unbondingOpsIndex.push(VscUnbondingOps.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerState {
    const obj = createBaseConsumerState();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.initialHeight)) obj.initialHeight = BigInt(object.initialHeight.toString());
    if (isSet(object.consumerGenesis))
      obj.consumerGenesis = ConsumerGenesisState.fromJSON(object.consumerGenesis);
    if (Array.isArray(object?.pendingValsetChanges))
      obj.pendingValsetChanges = object.pendingValsetChanges.map((e: any) =>
        ValidatorSetChangePacketData.fromJSON(e),
      );
    if (Array.isArray(object?.slashDowntimeAck))
      obj.slashDowntimeAck = object.slashDowntimeAck.map((e: any) => String(e));
    if (Array.isArray(object?.unbondingOpsIndex))
      obj.unbondingOpsIndex = object.unbondingOpsIndex.map((e: any) => VscUnbondingOps.fromJSON(e));
    return obj;
  },
  toJSON(message: ConsumerState): JsonSafe<ConsumerState> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.initialHeight !== undefined &&
      (obj.initialHeight = (message.initialHeight || BigInt(0)).toString());
    message.consumerGenesis !== undefined &&
      (obj.consumerGenesis = message.consumerGenesis
        ? ConsumerGenesisState.toJSON(message.consumerGenesis)
        : undefined);
    if (message.pendingValsetChanges) {
      obj.pendingValsetChanges = message.pendingValsetChanges.map((e) =>
        e ? ValidatorSetChangePacketData.toJSON(e) : undefined,
      );
    } else {
      obj.pendingValsetChanges = [];
    }
    if (message.slashDowntimeAck) {
      obj.slashDowntimeAck = message.slashDowntimeAck.map((e) => e);
    } else {
      obj.slashDowntimeAck = [];
    }
    if (message.unbondingOpsIndex) {
      obj.unbondingOpsIndex = message.unbondingOpsIndex.map((e) =>
        e ? VscUnbondingOps.toJSON(e) : undefined,
      );
    } else {
      obj.unbondingOpsIndex = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerState>, I>>(object: I): ConsumerState {
    const message = createBaseConsumerState();
    message.chainId = object.chainId ?? "";
    message.channelId = object.channelId ?? "";
    message.clientId = object.clientId ?? "";
    if (object.initialHeight !== undefined && object.initialHeight !== null) {
      message.initialHeight = BigInt(object.initialHeight.toString());
    }
    if (object.consumerGenesis !== undefined && object.consumerGenesis !== null) {
      message.consumerGenesis = ConsumerGenesisState.fromPartial(object.consumerGenesis);
    }
    message.pendingValsetChanges =
      object.pendingValsetChanges?.map((e) => ValidatorSetChangePacketData.fromPartial(e)) || [];
    message.slashDowntimeAck = object.slashDowntimeAck?.map((e) => e) || [];
    message.unbondingOpsIndex = object.unbondingOpsIndex?.map((e) => VscUnbondingOps.fromPartial(e)) || [];
    return message;
  },
};
function createBaseValsetUpdateIdToHeight(): ValsetUpdateIdToHeight {
  return {
    valsetUpdateId: BigInt(0),
    height: BigInt(0),
  };
}
export const ValsetUpdateIdToHeight = {
  typeUrl: "/interchain_security.ccv.provider.v1.ValsetUpdateIdToHeight",
  encode(message: ValsetUpdateIdToHeight, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valsetUpdateId !== BigInt(0)) {
      writer.uint32(8).uint64(message.valsetUpdateId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValsetUpdateIdToHeight {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValsetUpdateIdToHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsetUpdateId = reader.uint64();
          break;
        case 2:
          message.height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValsetUpdateIdToHeight {
    const obj = createBaseValsetUpdateIdToHeight();
    if (isSet(object.valsetUpdateId)) obj.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: ValsetUpdateIdToHeight): JsonSafe<ValsetUpdateIdToHeight> {
    const obj: any = {};
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = (message.valsetUpdateId || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValsetUpdateIdToHeight>, I>>(object: I): ValsetUpdateIdToHeight {
    const message = createBaseValsetUpdateIdToHeight();
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
