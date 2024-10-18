/* eslint-disable */
import { ValidatorUpdate, Validator } from "../../../tendermint/abci/types";
import { Infraction, infractionFromJSON, infractionToJSON } from "../../../cosmos/staking/v1beta1/staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "interchain_security.ccv.v1";
/** ConsumerPacketType indicates interchain security specific packet types. */
export enum ConsumerPacketDataType {
  /** CONSUMER_PACKET_TYPE_UNSPECIFIED - UNSPECIFIED packet type */
  CONSUMER_PACKET_TYPE_UNSPECIFIED = 0,
  /** CONSUMER_PACKET_TYPE_SLASH - Slash packet */
  CONSUMER_PACKET_TYPE_SLASH = 1,
  /** CONSUMER_PACKET_TYPE_VSCM - VSCMatured packet */
  CONSUMER_PACKET_TYPE_VSCM = 2,
  UNRECOGNIZED = -1,
}
export function consumerPacketDataTypeFromJSON(object: any): ConsumerPacketDataType {
  switch (object) {
    case 0:
    case "CONSUMER_PACKET_TYPE_UNSPECIFIED":
      return ConsumerPacketDataType.CONSUMER_PACKET_TYPE_UNSPECIFIED;
    case 1:
    case "CONSUMER_PACKET_TYPE_SLASH":
      return ConsumerPacketDataType.CONSUMER_PACKET_TYPE_SLASH;
    case 2:
    case "CONSUMER_PACKET_TYPE_VSCM":
      return ConsumerPacketDataType.CONSUMER_PACKET_TYPE_VSCM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConsumerPacketDataType.UNRECOGNIZED;
  }
}
export function consumerPacketDataTypeToJSON(object: ConsumerPacketDataType): string {
  switch (object) {
    case ConsumerPacketDataType.CONSUMER_PACKET_TYPE_UNSPECIFIED:
      return "CONSUMER_PACKET_TYPE_UNSPECIFIED";
    case ConsumerPacketDataType.CONSUMER_PACKET_TYPE_SLASH:
      return "CONSUMER_PACKET_TYPE_SLASH";
    case ConsumerPacketDataType.CONSUMER_PACKET_TYPE_VSCM:
      return "CONSUMER_PACKET_TYPE_VSCM";
    case ConsumerPacketDataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * InfractionType indicates the infraction type a validator committed.
 * Note ccv.InfractionType to maintain compatibility between ICS versions
 * using different versions of the cosmos-sdk and ibc-go modules.
 */
export enum InfractionType {
  /** INFRACTION_TYPE_UNSPECIFIED - UNSPECIFIED defines an empty infraction type. */
  INFRACTION_TYPE_UNSPECIFIED = 0,
  /** INFRACTION_TYPE_DOUBLE_SIGN - DOUBLE_SIGN defines a validator that double-signs a block. */
  INFRACTION_TYPE_DOUBLE_SIGN = 1,
  /** INFRACTION_TYPE_DOWNTIME - DOWNTIME defines a validator that missed signing too many blocks. */
  INFRACTION_TYPE_DOWNTIME = 2,
  UNRECOGNIZED = -1,
}
export function infractionTypeFromJSON(object: any): InfractionType {
  switch (object) {
    case 0:
    case "INFRACTION_TYPE_UNSPECIFIED":
      return InfractionType.INFRACTION_TYPE_UNSPECIFIED;
    case 1:
    case "INFRACTION_TYPE_DOUBLE_SIGN":
      return InfractionType.INFRACTION_TYPE_DOUBLE_SIGN;
    case 2:
    case "INFRACTION_TYPE_DOWNTIME":
      return InfractionType.INFRACTION_TYPE_DOWNTIME;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InfractionType.UNRECOGNIZED;
  }
}
export function infractionTypeToJSON(object: InfractionType): string {
  switch (object) {
    case InfractionType.INFRACTION_TYPE_UNSPECIFIED:
      return "INFRACTION_TYPE_UNSPECIFIED";
    case InfractionType.INFRACTION_TYPE_DOUBLE_SIGN:
      return "INFRACTION_TYPE_DOUBLE_SIGN";
    case InfractionType.INFRACTION_TYPE_DOWNTIME:
      return "INFRACTION_TYPE_DOWNTIME";
    case InfractionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * This packet is sent from provider chain to consumer chain if the validator
 * set for consumer chain changes (due to new bonding/unbonding messages or
 * slashing events) A VSCMatured packet from consumer chain will be sent
 * asynchronously once unbonding period is over, and this will function as
 * `UnbondingOver` message for this packet.
 */
export interface ValidatorSetChangePacketData {
  validatorUpdates: ValidatorUpdate[];
  valsetUpdateId: bigint;
  /**
   * consensus address of consumer chain validators
   * successfully slashed on the provider chain
   */
  slashAcks: string[];
}
/**
 * This packet is sent from the consumer chain to the provider chain
 * to notify that a VSC packet reached maturity on the consumer chain.
 */
export interface VSCMaturedPacketData {
  /** the id of the VSC packet that reached maturity */
  valsetUpdateId: bigint;
}
/**
 * This packet is sent from the consumer chain to the provider chain
 * to request the slashing of a validator as a result of an infraction
 * committed on the consumer chain.
 */
export interface SlashPacketData {
  validator: Validator;
  /** map to the infraction block height on the provider */
  valsetUpdateId: bigint;
  /** tell if the slashing is for a downtime or a double-signing infraction */
  infraction: Infraction;
}
/** ConsumerPacketData contains a consumer packet data and a type tag */
export interface ConsumerPacketData {
  type: ConsumerPacketDataType;
  slashPacketData?: SlashPacketData;
  vscMaturedPacketData?: VSCMaturedPacketData;
}
/** Note this type is used during IBC handshake methods for both the consumer and provider */
export interface HandshakeMetadata {
  providerFeePoolAddr: string;
  version: string;
}
/**
 * ConsumerPacketData contains a consumer packet data and a type tag
 * that is compatible with ICS v1 and v2 over the wire. It is not used for internal storage.
 */
export interface ConsumerPacketDataV1 {
  type: ConsumerPacketDataType;
  slashPacketData?: SlashPacketDataV1;
  vscMaturedPacketData?: VSCMaturedPacketData;
}
/**
 * This packet is sent from the consumer chain to the provider chain
 * It is backward compatible with the ICS v1 and v2 version of the packet.
 */
export interface SlashPacketDataV1 {
  validator: Validator;
  /** map to the infraction block height on the provider */
  valsetUpdateId: bigint;
  /** tell if the slashing is for a downtime or a double-signing infraction */
  infraction: InfractionType;
}
function createBaseValidatorSetChangePacketData(): ValidatorSetChangePacketData {
  return {
    validatorUpdates: [],
    valsetUpdateId: BigInt(0),
    slashAcks: [],
  };
}
export const ValidatorSetChangePacketData = {
  typeUrl: "/interchain_security.ccv.v1.ValidatorSetChangePacketData",
  encode(message: ValidatorSetChangePacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validatorUpdates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.valsetUpdateId !== BigInt(0)) {
      writer.uint32(16).uint64(message.valsetUpdateId);
    }
    for (const v of message.slashAcks) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSetChangePacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSetChangePacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorUpdates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.valsetUpdateId = reader.uint64();
          break;
        case 3:
          message.slashAcks.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSetChangePacketData {
    const obj = createBaseValidatorSetChangePacketData();
    if (Array.isArray(object?.validatorUpdates))
      obj.validatorUpdates = object.validatorUpdates.map((e: any) => ValidatorUpdate.fromJSON(e));
    if (isSet(object.valsetUpdateId)) obj.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    if (Array.isArray(object?.slashAcks)) obj.slashAcks = object.slashAcks.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ValidatorSetChangePacketData): JsonSafe<ValidatorSetChangePacketData> {
    const obj: any = {};
    if (message.validatorUpdates) {
      obj.validatorUpdates = message.validatorUpdates.map((e) => (e ? ValidatorUpdate.toJSON(e) : undefined));
    } else {
      obj.validatorUpdates = [];
    }
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = (message.valsetUpdateId || BigInt(0)).toString());
    if (message.slashAcks) {
      obj.slashAcks = message.slashAcks.map((e) => e);
    } else {
      obj.slashAcks = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorSetChangePacketData>, I>>(
    object: I,
  ): ValidatorSetChangePacketData {
    const message = createBaseValidatorSetChangePacketData();
    message.validatorUpdates = object.validatorUpdates?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    }
    message.slashAcks = object.slashAcks?.map((e) => e) || [];
    return message;
  },
};
function createBaseVSCMaturedPacketData(): VSCMaturedPacketData {
  return {
    valsetUpdateId: BigInt(0),
  };
}
export const VSCMaturedPacketData = {
  typeUrl: "/interchain_security.ccv.v1.VSCMaturedPacketData",
  encode(message: VSCMaturedPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valsetUpdateId !== BigInt(0)) {
      writer.uint32(8).uint64(message.valsetUpdateId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VSCMaturedPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVSCMaturedPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsetUpdateId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VSCMaturedPacketData {
    const obj = createBaseVSCMaturedPacketData();
    if (isSet(object.valsetUpdateId)) obj.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    return obj;
  },
  toJSON(message: VSCMaturedPacketData): JsonSafe<VSCMaturedPacketData> {
    const obj: any = {};
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = (message.valsetUpdateId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VSCMaturedPacketData>, I>>(object: I): VSCMaturedPacketData {
    const message = createBaseVSCMaturedPacketData();
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    }
    return message;
  },
};
function createBaseSlashPacketData(): SlashPacketData {
  return {
    validator: Validator.fromPartial({}),
    valsetUpdateId: BigInt(0),
    infraction: 0,
  };
}
export const SlashPacketData = {
  typeUrl: "/interchain_security.ccv.v1.SlashPacketData",
  encode(message: SlashPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.valsetUpdateId !== BigInt(0)) {
      writer.uint32(16).uint64(message.valsetUpdateId);
    }
    if (message.infraction !== 0) {
      writer.uint32(24).int32(message.infraction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SlashPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.valsetUpdateId = reader.uint64();
          break;
        case 3:
          message.infraction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SlashPacketData {
    const obj = createBaseSlashPacketData();
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    if (isSet(object.valsetUpdateId)) obj.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    if (isSet(object.infraction)) obj.infraction = infractionFromJSON(object.infraction);
    return obj;
  },
  toJSON(message: SlashPacketData): JsonSafe<SlashPacketData> {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = (message.valsetUpdateId || BigInt(0)).toString());
    message.infraction !== undefined && (obj.infraction = infractionToJSON(message.infraction));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SlashPacketData>, I>>(object: I): SlashPacketData {
    const message = createBaseSlashPacketData();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    }
    message.infraction = object.infraction ?? 0;
    return message;
  },
};
function createBaseConsumerPacketData(): ConsumerPacketData {
  return {
    type: 0,
    slashPacketData: undefined,
    vscMaturedPacketData: undefined,
  };
}
export const ConsumerPacketData = {
  typeUrl: "/interchain_security.ccv.v1.ConsumerPacketData",
  encode(message: ConsumerPacketData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.slashPacketData !== undefined) {
      SlashPacketData.encode(message.slashPacketData, writer.uint32(18).fork()).ldelim();
    }
    if (message.vscMaturedPacketData !== undefined) {
      VSCMaturedPacketData.encode(message.vscMaturedPacketData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.slashPacketData = SlashPacketData.decode(reader, reader.uint32());
          break;
        case 3:
          message.vscMaturedPacketData = VSCMaturedPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerPacketData {
    const obj = createBaseConsumerPacketData();
    if (isSet(object.type)) obj.type = consumerPacketDataTypeFromJSON(object.type);
    if (isSet(object.slashPacketData)) obj.slashPacketData = SlashPacketData.fromJSON(object.slashPacketData);
    if (isSet(object.vscMaturedPacketData))
      obj.vscMaturedPacketData = VSCMaturedPacketData.fromJSON(object.vscMaturedPacketData);
    return obj;
  },
  toJSON(message: ConsumerPacketData): JsonSafe<ConsumerPacketData> {
    const obj: any = {};
    message.type !== undefined && (obj.type = consumerPacketDataTypeToJSON(message.type));
    message.slashPacketData !== undefined &&
      (obj.slashPacketData = message.slashPacketData
        ? SlashPacketData.toJSON(message.slashPacketData)
        : undefined);
    message.vscMaturedPacketData !== undefined &&
      (obj.vscMaturedPacketData = message.vscMaturedPacketData
        ? VSCMaturedPacketData.toJSON(message.vscMaturedPacketData)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerPacketData>, I>>(object: I): ConsumerPacketData {
    const message = createBaseConsumerPacketData();
    message.type = object.type ?? 0;
    if (object.slashPacketData !== undefined && object.slashPacketData !== null) {
      message.slashPacketData = SlashPacketData.fromPartial(object.slashPacketData);
    }
    if (object.vscMaturedPacketData !== undefined && object.vscMaturedPacketData !== null) {
      message.vscMaturedPacketData = VSCMaturedPacketData.fromPartial(object.vscMaturedPacketData);
    }
    return message;
  },
};
function createBaseHandshakeMetadata(): HandshakeMetadata {
  return {
    providerFeePoolAddr: "",
    version: "",
  };
}
export const HandshakeMetadata = {
  typeUrl: "/interchain_security.ccv.v1.HandshakeMetadata",
  encode(message: HandshakeMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.providerFeePoolAddr !== "") {
      writer.uint32(10).string(message.providerFeePoolAddr);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HandshakeMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHandshakeMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerFeePoolAddr = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HandshakeMetadata {
    const obj = createBaseHandshakeMetadata();
    if (isSet(object.providerFeePoolAddr)) obj.providerFeePoolAddr = String(object.providerFeePoolAddr);
    if (isSet(object.version)) obj.version = String(object.version);
    return obj;
  },
  toJSON(message: HandshakeMetadata): JsonSafe<HandshakeMetadata> {
    const obj: any = {};
    message.providerFeePoolAddr !== undefined && (obj.providerFeePoolAddr = message.providerFeePoolAddr);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<HandshakeMetadata>, I>>(object: I): HandshakeMetadata {
    const message = createBaseHandshakeMetadata();
    message.providerFeePoolAddr = object.providerFeePoolAddr ?? "";
    message.version = object.version ?? "";
    return message;
  },
};
function createBaseConsumerPacketDataV1(): ConsumerPacketDataV1 {
  return {
    type: 0,
    slashPacketData: undefined,
    vscMaturedPacketData: undefined,
  };
}
export const ConsumerPacketDataV1 = {
  typeUrl: "/interchain_security.ccv.v1.ConsumerPacketDataV1",
  encode(message: ConsumerPacketDataV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.slashPacketData !== undefined) {
      SlashPacketDataV1.encode(message.slashPacketData, writer.uint32(18).fork()).ldelim();
    }
    if (message.vscMaturedPacketData !== undefined) {
      VSCMaturedPacketData.encode(message.vscMaturedPacketData, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerPacketDataV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerPacketDataV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.slashPacketData = SlashPacketDataV1.decode(reader, reader.uint32());
          break;
        case 3:
          message.vscMaturedPacketData = VSCMaturedPacketData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerPacketDataV1 {
    const obj = createBaseConsumerPacketDataV1();
    if (isSet(object.type)) obj.type = consumerPacketDataTypeFromJSON(object.type);
    if (isSet(object.slashPacketData))
      obj.slashPacketData = SlashPacketDataV1.fromJSON(object.slashPacketData);
    if (isSet(object.vscMaturedPacketData))
      obj.vscMaturedPacketData = VSCMaturedPacketData.fromJSON(object.vscMaturedPacketData);
    return obj;
  },
  toJSON(message: ConsumerPacketDataV1): JsonSafe<ConsumerPacketDataV1> {
    const obj: any = {};
    message.type !== undefined && (obj.type = consumerPacketDataTypeToJSON(message.type));
    message.slashPacketData !== undefined &&
      (obj.slashPacketData = message.slashPacketData
        ? SlashPacketDataV1.toJSON(message.slashPacketData)
        : undefined);
    message.vscMaturedPacketData !== undefined &&
      (obj.vscMaturedPacketData = message.vscMaturedPacketData
        ? VSCMaturedPacketData.toJSON(message.vscMaturedPacketData)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerPacketDataV1>, I>>(object: I): ConsumerPacketDataV1 {
    const message = createBaseConsumerPacketDataV1();
    message.type = object.type ?? 0;
    if (object.slashPacketData !== undefined && object.slashPacketData !== null) {
      message.slashPacketData = SlashPacketDataV1.fromPartial(object.slashPacketData);
    }
    if (object.vscMaturedPacketData !== undefined && object.vscMaturedPacketData !== null) {
      message.vscMaturedPacketData = VSCMaturedPacketData.fromPartial(object.vscMaturedPacketData);
    }
    return message;
  },
};
function createBaseSlashPacketDataV1(): SlashPacketDataV1 {
  return {
    validator: Validator.fromPartial({}),
    valsetUpdateId: BigInt(0),
    infraction: 0,
  };
}
export const SlashPacketDataV1 = {
  typeUrl: "/interchain_security.ccv.v1.SlashPacketDataV1",
  encode(message: SlashPacketDataV1, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    if (message.valsetUpdateId !== BigInt(0)) {
      writer.uint32(16).uint64(message.valsetUpdateId);
    }
    if (message.infraction !== 0) {
      writer.uint32(24).int32(message.infraction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SlashPacketDataV1 {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashPacketDataV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;
        case 2:
          message.valsetUpdateId = reader.uint64();
          break;
        case 3:
          message.infraction = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SlashPacketDataV1 {
    const obj = createBaseSlashPacketDataV1();
    if (isSet(object.validator)) obj.validator = Validator.fromJSON(object.validator);
    if (isSet(object.valsetUpdateId)) obj.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    if (isSet(object.infraction)) obj.infraction = infractionTypeFromJSON(object.infraction);
    return obj;
  },
  toJSON(message: SlashPacketDataV1): JsonSafe<SlashPacketDataV1> {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    message.valsetUpdateId !== undefined &&
      (obj.valsetUpdateId = (message.valsetUpdateId || BigInt(0)).toString());
    message.infraction !== undefined && (obj.infraction = infractionTypeToJSON(message.infraction));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SlashPacketDataV1>, I>>(object: I): SlashPacketDataV1 {
    const message = createBaseSlashPacketDataV1();
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = Validator.fromPartial(object.validator);
    }
    if (object.valsetUpdateId !== undefined && object.valsetUpdateId !== null) {
      message.valsetUpdateId = BigInt(object.valsetUpdateId.toString());
    }
    message.infraction = object.infraction ?? 0;
    return message;
  },
};
