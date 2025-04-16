//@ts-nocheck
/* eslint-disable */
import { Channel, Packet, State, stateFromJSON, stateToJSON } from "./channel";
import { Height, Params } from "../../client/v1/client";
import { UpgradeFields, Upgrade, ErrorReceipt } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.core.channel.v1";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export enum ResponseResultType {
  /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
  RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
  /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
  RESPONSE_RESULT_TYPE_NOOP = 1,
  /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
  RESPONSE_RESULT_TYPE_SUCCESS = 2,
  /** RESPONSE_RESULT_TYPE_FAILURE - The message was executed unsuccessfully */
  RESPONSE_RESULT_TYPE_FAILURE = 3,
  UNRECOGNIZED = -1,
}
export function responseResultTypeFromJSON(object: any): ResponseResultType {
  switch (object) {
    case 0:
    case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
      return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
    case 1:
    case "RESPONSE_RESULT_TYPE_NOOP":
      return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
    case 2:
    case "RESPONSE_RESULT_TYPE_SUCCESS":
      return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
    case 3:
    case "RESPONSE_RESULT_TYPE_FAILURE":
      return ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseResultType.UNRECOGNIZED;
  }
}
export function responseResultTypeToJSON(object: ResponseResultType): string {
  switch (object) {
    case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
      return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
      return "RESPONSE_RESULT_TYPE_NOOP";
    case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
      return "RESPONSE_RESULT_TYPE_SUCCESS";
    case ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE:
      return "RESPONSE_RESULT_TYPE_FAILURE";
    case ResponseResultType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
  portId: string;
  channel: Channel;
  signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
  channelId: string;
  version: string;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTry {
  portId: string;
  /** Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC. */
  /** @deprecated */
  previousChannelId: string;
  /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
  channel: Channel;
  counterpartyVersion: string;
  proofInit: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
  version: string;
  channelId: string;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 * WARNING: a channel upgrade MUST NOT initialize an upgrade for this channel
 * in the same block as executing this message otherwise the counterparty will
 * be incapable of opening.
 */
export interface MsgChannelOpenAck {
  portId: string;
  channelId: string;
  counterpartyChannelId: string;
  counterpartyVersion: string;
  proofTry: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
  portId: string;
  channelId: string;
  proofAck: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
  portId: string;
  channelId: string;
  signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
  portId: string;
  channelId: string;
  proofInit: Uint8Array;
  proofHeight: Height;
  signer: string;
  counterpartyUpgradeSequence: bigint;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
  packet: Packet;
  proofCommitment: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
  result: ResponseResultType;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: bigint;
  signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
  result: ResponseResultType;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
  packet: Packet;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight: Height;
  nextSequenceRecv: bigint;
  signer: string;
  counterpartyUpgradeSequence: bigint;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
  result: ResponseResultType;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
  packet: Packet;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
  result: ResponseResultType;
}
/**
 * MsgChannelUpgradeInit defines the request type for the ChannelUpgradeInit rpc
 * WARNING: Initializing a channel upgrade in the same block as opening the channel
 * may result in the counterparty being incapable of opening.
 */
export interface MsgChannelUpgradeInit {
  portId: string;
  channelId: string;
  fields: UpgradeFields;
  signer: string;
}
/** MsgChannelUpgradeInitResponse defines the MsgChannelUpgradeInit response type */
export interface MsgChannelUpgradeInitResponse {
  upgrade: Upgrade;
  upgradeSequence: bigint;
}
/** MsgChannelUpgradeTry defines the request type for the ChannelUpgradeTry rpc */
export interface MsgChannelUpgradeTry {
  portId: string;
  channelId: string;
  proposedUpgradeConnectionHops: string[];
  counterpartyUpgradeFields: UpgradeFields;
  counterpartyUpgradeSequence: bigint;
  proofChannel: Uint8Array;
  proofUpgrade: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgChannelUpgradeTryResponse defines the MsgChannelUpgradeTry response type */
export interface MsgChannelUpgradeTryResponse {
  upgrade: Upgrade;
  upgradeSequence: bigint;
  result: ResponseResultType;
}
/** MsgChannelUpgradeAck defines the request type for the ChannelUpgradeAck rpc */
export interface MsgChannelUpgradeAck {
  portId: string;
  channelId: string;
  counterpartyUpgrade: Upgrade;
  proofChannel: Uint8Array;
  proofUpgrade: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgChannelUpgradeAckResponse defines MsgChannelUpgradeAck response type */
export interface MsgChannelUpgradeAckResponse {
  result: ResponseResultType;
}
/** MsgChannelUpgradeConfirm defines the request type for the ChannelUpgradeConfirm rpc */
export interface MsgChannelUpgradeConfirm {
  portId: string;
  channelId: string;
  counterpartyChannelState: State;
  counterpartyUpgrade: Upgrade;
  proofChannel: Uint8Array;
  proofUpgrade: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgChannelUpgradeConfirmResponse defines MsgChannelUpgradeConfirm response type */
export interface MsgChannelUpgradeConfirmResponse {
  result: ResponseResultType;
}
/** MsgChannelUpgradeOpen defines the request type for the ChannelUpgradeOpen rpc */
export interface MsgChannelUpgradeOpen {
  portId: string;
  channelId: string;
  counterpartyChannelState: State;
  counterpartyUpgradeSequence: bigint;
  proofChannel: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgChannelUpgradeOpenResponse defines the MsgChannelUpgradeOpen response type */
export interface MsgChannelUpgradeOpenResponse {}
/** MsgChannelUpgradeTimeout defines the request type for the ChannelUpgradeTimeout rpc */
export interface MsgChannelUpgradeTimeout {
  portId: string;
  channelId: string;
  counterpartyChannel: Channel;
  proofChannel: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgChannelUpgradeTimeoutRepsonse defines the MsgChannelUpgradeTimeout response type */
export interface MsgChannelUpgradeTimeoutResponse {}
/** MsgChannelUpgradeCancel defines the request type for the ChannelUpgradeCancel rpc */
export interface MsgChannelUpgradeCancel {
  portId: string;
  channelId: string;
  errorReceipt: ErrorReceipt;
  proofErrorReceipt: Uint8Array;
  proofHeight: Height;
  signer: string;
}
/** MsgChannelUpgradeCancelResponse defines the MsgChannelUpgradeCancel response type */
export interface MsgChannelUpgradeCancelResponse {}
/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the channel parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {}
/** MsgPruneAcknowledgements defines the request type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgements {
  portId: string;
  channelId: string;
  limit: bigint;
  signer: string;
}
/** MsgPruneAcknowledgementsResponse defines the response type for the PruneAcknowledgements rpc. */
export interface MsgPruneAcknowledgementsResponse {
  /** Number of sequences pruned (includes both packet acknowledgements and packet receipts where appropriate). */
  totalPrunedSequences: bigint;
  /** Number of sequences left after pruning. */
  totalRemainingSequences: bigint;
}
function createBaseMsgChannelOpenInit(): MsgChannelOpenInit {
  return {
    portId: "",
    channel: Channel.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelOpenInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
  encode(message: MsgChannelOpenInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenInit {
    const obj = createBaseMsgChannelOpenInit();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channel)) obj.channel = Channel.fromJSON(object.channel);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelOpenInit): JsonSafe<MsgChannelOpenInit> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channel !== undefined &&
      (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenInit>, I>>(object: I): MsgChannelOpenInit {
    const message = createBaseMsgChannelOpenInit();
    message.portId = object.portId ?? "";
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromPartial(object.channel);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenInitAmino): MsgChannelOpenInit {
    const message = createBaseMsgChannelOpenInit();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromAmino(object.channel);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenInit): MsgChannelOpenInitAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenInitAminoMsg): MsgChannelOpenInit {
    return MsgChannelOpenInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenInit",
      value: MsgChannelOpenInit.toAmino(message),
    };
  },
};
function createBaseMsgChannelOpenInitResponse(): MsgChannelOpenInitResponse {
  return {
    channelId: "",
    version: "",
  };
}
export const MsgChannelOpenInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
  encode(message: MsgChannelOpenInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
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
  fromJSON(object: any): MsgChannelOpenInitResponse {
    const obj = createBaseMsgChannelOpenInitResponse();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.version)) obj.version = String(object.version);
    return obj;
  },
  toJSON(message: MsgChannelOpenInitResponse): JsonSafe<MsgChannelOpenInitResponse> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenInitResponse>, I>>(
    object: I,
  ): MsgChannelOpenInitResponse {
    const message = createBaseMsgChannelOpenInitResponse();
    message.channelId = object.channelId ?? "";
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenInitResponseAmino): MsgChannelOpenInitResponse {
    const message = createBaseMsgChannelOpenInitResponse();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.version = message.version === "" ? undefined : message.version;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenInitResponseAminoMsg): MsgChannelOpenInitResponse {
    return MsgChannelOpenInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenInitResponse",
      value: MsgChannelOpenInitResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelOpenTry(): MsgChannelOpenTry {
  return {
    portId: "",
    previousChannelId: "",
    channel: Channel.fromPartial({}),
    counterpartyVersion: "",
    proofInit: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelOpenTry = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
  encode(message: MsgChannelOpenTry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenTry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.previousChannelId = reader.string();
          break;
        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenTry {
    const obj = createBaseMsgChannelOpenTry();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.previousChannelId)) obj.previousChannelId = String(object.previousChannelId);
    if (isSet(object.channel)) obj.channel = Channel.fromJSON(object.channel);
    if (isSet(object.counterpartyVersion)) obj.counterpartyVersion = String(object.counterpartyVersion);
    if (isSet(object.proofInit)) obj.proofInit = bytesFromBase64(object.proofInit);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelOpenTry): JsonSafe<MsgChannelOpenTry> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.previousChannelId !== undefined && (obj.previousChannelId = message.previousChannelId);
    message.channel !== undefined &&
      (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofInit !== undefined &&
      (obj.proofInit = base64FromBytes(
        message.proofInit !== undefined ? message.proofInit : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenTry>, I>>(object: I): MsgChannelOpenTry {
    const message = createBaseMsgChannelOpenTry();
    message.portId = object.portId ?? "";
    message.previousChannelId = object.previousChannelId ?? "";
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromPartial(object.channel);
    }
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenTryAmino): MsgChannelOpenTry {
    const message = createBaseMsgChannelOpenTry();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.previous_channel_id !== undefined && object.previous_channel_id !== null) {
      message.previousChannelId = object.previous_channel_id;
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromAmino(object.channel);
    }
    if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
      message.counterpartyVersion = object.counterparty_version;
    }
    if (object.proof_init !== undefined && object.proof_init !== null) {
      message.proofInit = bytesFromBase64(object.proof_init);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenTry): MsgChannelOpenTryAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.previous_channel_id = message.previousChannelId === "" ? undefined : message.previousChannelId;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    obj.counterparty_version = message.counterpartyVersion === "" ? undefined : message.counterpartyVersion;
    obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenTryAminoMsg): MsgChannelOpenTry {
    return MsgChannelOpenTry.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenTry",
      value: MsgChannelOpenTry.toAmino(message),
    };
  },
};
function createBaseMsgChannelOpenTryResponse(): MsgChannelOpenTryResponse {
  return {
    version: "",
    channelId: "",
  };
}
export const MsgChannelOpenTryResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
  encode(message: MsgChannelOpenTryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenTryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
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
  fromJSON(object: any): MsgChannelOpenTryResponse {
    const obj = createBaseMsgChannelOpenTryResponse();
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    return obj;
  },
  toJSON(message: MsgChannelOpenTryResponse): JsonSafe<MsgChannelOpenTryResponse> {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenTryResponse>, I>>(
    object: I,
  ): MsgChannelOpenTryResponse {
    const message = createBaseMsgChannelOpenTryResponse();
    message.version = object.version ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenTryResponseAmino): MsgChannelOpenTryResponse {
    const message = createBaseMsgChannelOpenTryResponse();
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAmino {
    const obj: any = {};
    obj.version = message.version === "" ? undefined : message.version;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenTryResponseAminoMsg): MsgChannelOpenTryResponse {
    return MsgChannelOpenTryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenTryResponse",
      value: MsgChannelOpenTryResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelOpenAck(): MsgChannelOpenAck {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelId: "",
    counterpartyVersion: "",
    proofTry: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelOpenAck = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
  encode(message: MsgChannelOpenAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelId !== "") {
      writer.uint32(26).string(message.counterpartyChannelId);
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelId = reader.string();
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofTry = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenAck {
    const obj = createBaseMsgChannelOpenAck();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.counterpartyChannelId)) obj.counterpartyChannelId = String(object.counterpartyChannelId);
    if (isSet(object.counterpartyVersion)) obj.counterpartyVersion = String(object.counterpartyVersion);
    if (isSet(object.proofTry)) obj.proofTry = bytesFromBase64(object.proofTry);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelOpenAck): JsonSafe<MsgChannelOpenAck> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelId !== undefined &&
      (obj.counterpartyChannelId = message.counterpartyChannelId);
    message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofTry !== undefined &&
      (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenAck>, I>>(object: I): MsgChannelOpenAck {
    const message = createBaseMsgChannelOpenAck();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelId = object.counterpartyChannelId ?? "";
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofTry = object.proofTry ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenAckAmino): MsgChannelOpenAck {
    const message = createBaseMsgChannelOpenAck();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel_id !== undefined && object.counterparty_channel_id !== null) {
      message.counterpartyChannelId = object.counterparty_channel_id;
    }
    if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
      message.counterpartyVersion = object.counterparty_version;
    }
    if (object.proof_try !== undefined && object.proof_try !== null) {
      message.proofTry = bytesFromBase64(object.proof_try);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenAck): MsgChannelOpenAckAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.counterparty_channel_id =
      message.counterpartyChannelId === "" ? undefined : message.counterpartyChannelId;
    obj.counterparty_version = message.counterpartyVersion === "" ? undefined : message.counterpartyVersion;
    obj.proof_try = message.proofTry ? base64FromBytes(message.proofTry) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenAckAminoMsg): MsgChannelOpenAck {
    return MsgChannelOpenAck.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenAck",
      value: MsgChannelOpenAck.toAmino(message),
    };
  },
};
function createBaseMsgChannelOpenAckResponse(): MsgChannelOpenAckResponse {
  return {};
}
export const MsgChannelOpenAckResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
  encode(_: MsgChannelOpenAckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenAckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelOpenAckResponse {
    const obj = createBaseMsgChannelOpenAckResponse();
    return obj;
  },
  toJSON(_: MsgChannelOpenAckResponse): JsonSafe<MsgChannelOpenAckResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenAckResponse>, I>>(_: I): MsgChannelOpenAckResponse {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  },
  fromAmino(_: MsgChannelOpenAckResponseAmino): MsgChannelOpenAckResponse {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  },
  toAmino(_: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenAckResponseAminoMsg): MsgChannelOpenAckResponse {
    return MsgChannelOpenAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenAckResponse",
      value: MsgChannelOpenAckResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelOpenConfirm(): MsgChannelOpenConfirm {
  return {
    portId: "",
    channelId: "",
    proofAck: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelOpenConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
  encode(message: MsgChannelOpenConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofAck = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenConfirm {
    const obj = createBaseMsgChannelOpenConfirm();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.proofAck)) obj.proofAck = bytesFromBase64(object.proofAck);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelOpenConfirm): JsonSafe<MsgChannelOpenConfirm> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofAck !== undefined &&
      (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenConfirm>, I>>(object: I): MsgChannelOpenConfirm {
    const message = createBaseMsgChannelOpenConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelOpenConfirmAmino): MsgChannelOpenConfirm {
    const message = createBaseMsgChannelOpenConfirm();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.proof_ack !== undefined && object.proof_ack !== null) {
      message.proofAck = bytesFromBase64(object.proof_ack);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.proof_ack = message.proofAck ? base64FromBytes(message.proofAck) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenConfirmAminoMsg): MsgChannelOpenConfirm {
    return MsgChannelOpenConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenConfirm",
      value: MsgChannelOpenConfirm.toAmino(message),
    };
  },
};
function createBaseMsgChannelOpenConfirmResponse(): MsgChannelOpenConfirmResponse {
  return {};
}
export const MsgChannelOpenConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
  encode(_: MsgChannelOpenConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelOpenConfirmResponse {
    const obj = createBaseMsgChannelOpenConfirmResponse();
    return obj;
  },
  toJSON(_: MsgChannelOpenConfirmResponse): JsonSafe<MsgChannelOpenConfirmResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelOpenConfirmResponse>, I>>(
    _: I,
  ): MsgChannelOpenConfirmResponse {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  },
  fromAmino(_: MsgChannelOpenConfirmResponseAmino): MsgChannelOpenConfirmResponse {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  },
  toAmino(_: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenConfirmResponseAminoMsg): MsgChannelOpenConfirmResponse {
    return MsgChannelOpenConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
      value: MsgChannelOpenConfirmResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelCloseInit(): MsgChannelCloseInit {
  return {
    portId: "",
    channelId: "",
    signer: "",
  };
}
export const MsgChannelCloseInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
  encode(message: MsgChannelCloseInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelCloseInit {
    const obj = createBaseMsgChannelCloseInit();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelCloseInit): JsonSafe<MsgChannelCloseInit> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseInit>, I>>(object: I): MsgChannelCloseInit {
    const message = createBaseMsgChannelCloseInit();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelCloseInitAmino): MsgChannelCloseInit {
    const message = createBaseMsgChannelCloseInit();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelCloseInit): MsgChannelCloseInitAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseInitAminoMsg): MsgChannelCloseInit {
    return MsgChannelCloseInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseInit",
      value: MsgChannelCloseInit.toAmino(message),
    };
  },
};
function createBaseMsgChannelCloseInitResponse(): MsgChannelCloseInitResponse {
  return {};
}
export const MsgChannelCloseInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
  encode(_: MsgChannelCloseInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelCloseInitResponse {
    const obj = createBaseMsgChannelCloseInitResponse();
    return obj;
  },
  toJSON(_: MsgChannelCloseInitResponse): JsonSafe<MsgChannelCloseInitResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseInitResponse>, I>>(
    _: I,
  ): MsgChannelCloseInitResponse {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  },
  fromAmino(_: MsgChannelCloseInitResponseAmino): MsgChannelCloseInitResponse {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  },
  toAmino(_: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseInitResponseAminoMsg): MsgChannelCloseInitResponse {
    return MsgChannelCloseInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseInitResponse",
      value: MsgChannelCloseInitResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelCloseConfirm(): MsgChannelCloseConfirm {
  return {
    portId: "",
    channelId: "",
    proofInit: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
    counterpartyUpgradeSequence: BigInt(0),
  };
}
export const MsgChannelCloseConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
  encode(message: MsgChannelCloseConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(48).uint64(message.counterpartyUpgradeSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofInit = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        case 6:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelCloseConfirm {
    const obj = createBaseMsgChannelCloseConfirm();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.proofInit)) obj.proofInit = bytesFromBase64(object.proofInit);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.counterpartyUpgradeSequence))
      obj.counterpartyUpgradeSequence = BigInt(object.counterpartyUpgradeSequence.toString());
    return obj;
  },
  toJSON(message: MsgChannelCloseConfirm): JsonSafe<MsgChannelCloseConfirm> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofInit !== undefined &&
      (obj.proofInit = base64FromBytes(
        message.proofInit !== undefined ? message.proofInit : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    message.counterpartyUpgradeSequence !== undefined &&
      (obj.counterpartyUpgradeSequence = (message.counterpartyUpgradeSequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseConfirm>, I>>(object: I): MsgChannelCloseConfirm {
    const message = createBaseMsgChannelCloseConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    if (object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterpartyUpgradeSequence.toString());
    }
    return message;
  },
  fromAmino(object: MsgChannelCloseConfirmAmino): MsgChannelCloseConfirm {
    const message = createBaseMsgChannelCloseConfirm();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.proof_init !== undefined && object.proof_init !== null) {
      message.proofInit = bytesFromBase64(object.proof_init);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    return message;
  },
  toAmino(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.counterparty_upgrade_sequence =
      message.counterpartyUpgradeSequence !== BigInt(0)
        ? message.counterpartyUpgradeSequence?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseConfirmAminoMsg): MsgChannelCloseConfirm {
    return MsgChannelCloseConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseConfirm",
      value: MsgChannelCloseConfirm.toAmino(message),
    };
  },
};
function createBaseMsgChannelCloseConfirmResponse(): MsgChannelCloseConfirmResponse {
  return {};
}
export const MsgChannelCloseConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
  encode(_: MsgChannelCloseConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelCloseConfirmResponse {
    const obj = createBaseMsgChannelCloseConfirmResponse();
    return obj;
  },
  toJSON(_: MsgChannelCloseConfirmResponse): JsonSafe<MsgChannelCloseConfirmResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelCloseConfirmResponse>, I>>(
    _: I,
  ): MsgChannelCloseConfirmResponse {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  },
  fromAmino(_: MsgChannelCloseConfirmResponseAmino): MsgChannelCloseConfirmResponse {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  },
  toAmino(_: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseConfirmResponseAminoMsg): MsgChannelCloseConfirmResponse {
    return MsgChannelCloseConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
      value: MsgChannelCloseConfirmResponse.toAmino(message),
    };
  },
};
function createBaseMsgRecvPacket(): MsgRecvPacket {
  return {
    packet: Packet.fromPartial({}),
    proofCommitment: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgRecvPacket = {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
  encode(message: MsgRecvPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecvPacket {
    const obj = createBaseMsgRecvPacket();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.proofCommitment)) obj.proofCommitment = bytesFromBase64(object.proofCommitment);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgRecvPacket): JsonSafe<MsgRecvPacket> {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofCommitment !== undefined &&
      (obj.proofCommitment = base64FromBytes(
        message.proofCommitment !== undefined ? message.proofCommitment : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRecvPacket>, I>>(object: I): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRecvPacketAmino): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_commitment !== undefined && object.proof_commitment !== null) {
      message.proofCommitment = bytesFromBase64(object.proof_commitment);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRecvPacket): MsgRecvPacketAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_commitment = message.proofCommitment ? base64FromBytes(message.proofCommitment) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRecvPacketAminoMsg): MsgRecvPacket {
    return MsgRecvPacket.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecvPacket): MsgRecvPacketAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecvPacket",
      value: MsgRecvPacket.toAmino(message),
    };
  },
};
function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {
    result: 0,
  };
}
export const MsgRecvPacketResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
  encode(message: MsgRecvPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecvPacketResponse {
    const obj = createBaseMsgRecvPacketResponse();
    if (isSet(object.result)) obj.result = responseResultTypeFromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgRecvPacketResponse): JsonSafe<MsgRecvPacketResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRecvPacketResponse>, I>>(object: I): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgRecvPacketResponseAmino): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgRecvPacketResponse): MsgRecvPacketResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgRecvPacketResponseAminoMsg): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.toAmino(message),
    };
  },
};
function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    nextSequenceRecv: BigInt(0),
    signer: "",
  };
}
export const MsgTimeout = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeout",
  encode(message: MsgTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.nextSequenceRecv = reader.uint64();
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTimeout {
    const obj = createBaseMsgTimeout();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.proofUnreceived)) obj.proofUnreceived = bytesFromBase64(object.proofUnreceived);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.nextSequenceRecv)) obj.nextSequenceRecv = BigInt(object.nextSequenceRecv.toString());
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgTimeout): JsonSafe<MsgTimeout> {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined &&
      (obj.proofUnreceived = base64FromBytes(
        message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined &&
      (obj.nextSequenceRecv = (message.nextSequenceRecv || BigInt(0)).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTimeout>, I>>(object: I): MsgTimeout {
    const message = createBaseMsgTimeout();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = BigInt(object.nextSequenceRecv.toString());
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgTimeoutAmino): MsgTimeout {
    const message = createBaseMsgTimeout();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proof_unreceived);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
      message.nextSequenceRecv = BigInt(object.next_sequence_recv);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgTimeout): MsgTimeoutAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_unreceived = message.proofUnreceived ? base64FromBytes(message.proofUnreceived) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.next_sequence_recv =
      message.nextSequenceRecv !== BigInt(0) ? message.nextSequenceRecv?.toString() : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutAminoMsg): MsgTimeout {
    return MsgTimeout.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeout): MsgTimeoutAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeout",
      value: MsgTimeout.toAmino(message),
    };
  },
};
function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return {
    result: 0,
  };
}
export const MsgTimeoutResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
  encode(message: MsgTimeoutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTimeoutResponse {
    const obj = createBaseMsgTimeoutResponse();
    if (isSet(object.result)) obj.result = responseResultTypeFromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgTimeoutResponse): JsonSafe<MsgTimeoutResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTimeoutResponse>, I>>(object: I): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgTimeoutResponseAmino): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgTimeoutResponse): MsgTimeoutResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutResponseAminoMsg): MsgTimeoutResponse {
    return MsgTimeoutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutResponse",
      value: MsgTimeoutResponse.toAmino(message),
    };
  },
};
function createBaseMsgTimeoutOnClose(): MsgTimeoutOnClose {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    nextSequenceRecv: BigInt(0),
    signer: "",
    counterpartyUpgradeSequence: BigInt(0),
  };
}
export const MsgTimeoutOnClose = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
  encode(message: MsgTimeoutOnClose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.nextSequenceRecv !== BigInt(0)) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(56).uint64(message.counterpartyUpgradeSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutOnClose {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = reader.uint64();
          break;
        case 6:
          message.signer = reader.string();
          break;
        case 7:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTimeoutOnClose {
    const obj = createBaseMsgTimeoutOnClose();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.proofUnreceived)) obj.proofUnreceived = bytesFromBase64(object.proofUnreceived);
    if (isSet(object.proofClose)) obj.proofClose = bytesFromBase64(object.proofClose);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.nextSequenceRecv)) obj.nextSequenceRecv = BigInt(object.nextSequenceRecv.toString());
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.counterpartyUpgradeSequence))
      obj.counterpartyUpgradeSequence = BigInt(object.counterpartyUpgradeSequence.toString());
    return obj;
  },
  toJSON(message: MsgTimeoutOnClose): JsonSafe<MsgTimeoutOnClose> {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined &&
      (obj.proofUnreceived = base64FromBytes(
        message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array(),
      ));
    message.proofClose !== undefined &&
      (obj.proofClose = base64FromBytes(
        message.proofClose !== undefined ? message.proofClose : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined &&
      (obj.nextSequenceRecv = (message.nextSequenceRecv || BigInt(0)).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    message.counterpartyUpgradeSequence !== undefined &&
      (obj.counterpartyUpgradeSequence = (message.counterpartyUpgradeSequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTimeoutOnClose>, I>>(object: I): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofClose = object.proofClose ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    if (object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null) {
      message.nextSequenceRecv = BigInt(object.nextSequenceRecv.toString());
    }
    message.signer = object.signer ?? "";
    if (object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterpartyUpgradeSequence.toString());
    }
    return message;
  },
  fromAmino(object: MsgTimeoutOnCloseAmino): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proof_unreceived);
    }
    if (object.proof_close !== undefined && object.proof_close !== null) {
      message.proofClose = bytesFromBase64(object.proof_close);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
      message.nextSequenceRecv = BigInt(object.next_sequence_recv);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    return message;
  },
  toAmino(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_unreceived = message.proofUnreceived ? base64FromBytes(message.proofUnreceived) : undefined;
    obj.proof_close = message.proofClose ? base64FromBytes(message.proofClose) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.next_sequence_recv =
      message.nextSequenceRecv !== BigInt(0) ? message.nextSequenceRecv?.toString() : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.counterparty_upgrade_sequence =
      message.counterpartyUpgradeSequence !== BigInt(0)
        ? message.counterpartyUpgradeSequence?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutOnCloseAminoMsg): MsgTimeoutOnClose {
    return MsgTimeoutOnClose.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutOnClose",
      value: MsgTimeoutOnClose.toAmino(message),
    };
  },
};
function createBaseMsgTimeoutOnCloseResponse(): MsgTimeoutOnCloseResponse {
  return {
    result: 0,
  };
}
export const MsgTimeoutOnCloseResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
  encode(message: MsgTimeoutOnCloseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnCloseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTimeoutOnCloseResponse {
    const obj = createBaseMsgTimeoutOnCloseResponse();
    if (isSet(object.result)) obj.result = responseResultTypeFromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgTimeoutOnCloseResponse): JsonSafe<MsgTimeoutOnCloseResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgTimeoutOnCloseResponse>, I>>(
    object: I,
  ): MsgTimeoutOnCloseResponse {
    const message = createBaseMsgTimeoutOnCloseResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgTimeoutOnCloseResponseAmino): MsgTimeoutOnCloseResponse {
    const message = createBaseMsgTimeoutOnCloseResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutOnCloseResponseAminoMsg): MsgTimeoutOnCloseResponse {
    return MsgTimeoutOnCloseResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
      value: MsgTimeoutOnCloseResponse.toAmino(message),
    };
  },
};
function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: Packet.fromPartial({}),
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgAcknowledgement = {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
  encode(message: MsgAcknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAcknowledgement {
    const obj = createBaseMsgAcknowledgement();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.acknowledgement)) obj.acknowledgement = bytesFromBase64(object.acknowledgement);
    if (isSet(object.proofAcked)) obj.proofAcked = bytesFromBase64(object.proofAcked);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgAcknowledgement): JsonSafe<MsgAcknowledgement> {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.acknowledgement !== undefined &&
      (obj.acknowledgement = base64FromBytes(
        message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array(),
      ));
    message.proofAcked !== undefined &&
      (obj.proofAcked = base64FromBytes(
        message.proofAcked !== undefined ? message.proofAcked : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAcknowledgement>, I>>(object: I): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgAcknowledgementAmino): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    if (object.proof_acked !== undefined && object.proof_acked !== null) {
      message.proofAcked = bytesFromBase64(object.proof_acked);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgAcknowledgement): MsgAcknowledgementAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
    obj.proof_acked = message.proofAcked ? base64FromBytes(message.proofAcked) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgementAminoMsg): MsgAcknowledgement {
    return MsgAcknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgement): MsgAcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/MsgAcknowledgement",
      value: MsgAcknowledgement.toAmino(message),
    };
  },
};
function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {
    result: 0,
  };
}
export const MsgAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
  encode(message: MsgAcknowledgementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAcknowledgementResponse {
    const obj = createBaseMsgAcknowledgementResponse();
    if (isSet(object.result)) obj.result = responseResultTypeFromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgAcknowledgementResponse): JsonSafe<MsgAcknowledgementResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAcknowledgementResponse>, I>>(
    object: I,
  ): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgAcknowledgementResponseAmino): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgementResponseAminoMsg): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeInit(): MsgChannelUpgradeInit {
  return {
    portId: "",
    channelId: "",
    fields: UpgradeFields.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelUpgradeInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInit",
  encode(message: MsgChannelUpgradeInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.fields !== undefined) {
      UpgradeFields.encode(message.fields, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.fields = UpgradeFields.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeInit {
    const obj = createBaseMsgChannelUpgradeInit();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.fields)) obj.fields = UpgradeFields.fromJSON(object.fields);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelUpgradeInit): JsonSafe<MsgChannelUpgradeInit> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.fields !== undefined &&
      (obj.fields = message.fields ? UpgradeFields.toJSON(message.fields) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeInit>, I>>(object: I): MsgChannelUpgradeInit {
    const message = createBaseMsgChannelUpgradeInit();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    if (object.fields !== undefined && object.fields !== null) {
      message.fields = UpgradeFields.fromPartial(object.fields);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeInitAmino): MsgChannelUpgradeInit {
    const message = createBaseMsgChannelUpgradeInit();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.fields !== undefined && object.fields !== null) {
      message.fields = UpgradeFields.fromAmino(object.fields);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeInit): MsgChannelUpgradeInitAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.fields = message.fields ? UpgradeFields.toAmino(message.fields) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeInitAminoMsg): MsgChannelUpgradeInit {
    return MsgChannelUpgradeInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeInit): MsgChannelUpgradeInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeInit",
      value: MsgChannelUpgradeInit.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeInitResponse(): MsgChannelUpgradeInitResponse {
  return {
    upgrade: Upgrade.fromPartial({}),
    upgradeSequence: BigInt(0),
  };
}
export const MsgChannelUpgradeInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeInitResponse",
  encode(message: MsgChannelUpgradeInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upgrade !== undefined) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgradeSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.upgradeSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradeSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeInitResponse {
    const obj = createBaseMsgChannelUpgradeInitResponse();
    if (isSet(object.upgrade)) obj.upgrade = Upgrade.fromJSON(object.upgrade);
    if (isSet(object.upgradeSequence)) obj.upgradeSequence = BigInt(object.upgradeSequence.toString());
    return obj;
  },
  toJSON(message: MsgChannelUpgradeInitResponse): JsonSafe<MsgChannelUpgradeInitResponse> {
    const obj: any = {};
    message.upgrade !== undefined &&
      (obj.upgrade = message.upgrade ? Upgrade.toJSON(message.upgrade) : undefined);
    message.upgradeSequence !== undefined &&
      (obj.upgradeSequence = (message.upgradeSequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeInitResponse>, I>>(
    object: I,
  ): MsgChannelUpgradeInitResponse {
    const message = createBaseMsgChannelUpgradeInitResponse();
    if (object.upgrade !== undefined && object.upgrade !== null) {
      message.upgrade = Upgrade.fromPartial(object.upgrade);
    }
    if (object.upgradeSequence !== undefined && object.upgradeSequence !== null) {
      message.upgradeSequence = BigInt(object.upgradeSequence.toString());
    }
    return message;
  },
  fromAmino(object: MsgChannelUpgradeInitResponseAmino): MsgChannelUpgradeInitResponse {
    const message = createBaseMsgChannelUpgradeInitResponse();
    if (object.upgrade !== undefined && object.upgrade !== null) {
      message.upgrade = Upgrade.fromAmino(object.upgrade);
    }
    if (object.upgrade_sequence !== undefined && object.upgrade_sequence !== null) {
      message.upgradeSequence = BigInt(object.upgrade_sequence);
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeInitResponse): MsgChannelUpgradeInitResponseAmino {
    const obj: any = {};
    obj.upgrade = message.upgrade ? Upgrade.toAmino(message.upgrade) : undefined;
    obj.upgrade_sequence =
      message.upgradeSequence !== BigInt(0) ? message.upgradeSequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeInitResponseAminoMsg): MsgChannelUpgradeInitResponse {
    return MsgChannelUpgradeInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeInitResponse): MsgChannelUpgradeInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeInitResponse",
      value: MsgChannelUpgradeInitResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeTry(): MsgChannelUpgradeTry {
  return {
    portId: "",
    channelId: "",
    proposedUpgradeConnectionHops: [],
    counterpartyUpgradeFields: UpgradeFields.fromPartial({}),
    counterpartyUpgradeSequence: BigInt(0),
    proofChannel: new Uint8Array(),
    proofUpgrade: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelUpgradeTry = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTry",
  encode(message: MsgChannelUpgradeTry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    for (const v of message.proposedUpgradeConnectionHops) {
      writer.uint32(26).string(v!);
    }
    if (message.counterpartyUpgradeFields !== undefined) {
      UpgradeFields.encode(message.counterpartyUpgradeFields, writer.uint32(34).fork()).ldelim();
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(40).uint64(message.counterpartyUpgradeSequence);
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(50).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(58).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(66).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(74).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proposedUpgradeConnectionHops.push(reader.string());
          break;
        case 4:
          message.counterpartyUpgradeFields = UpgradeFields.decode(reader, reader.uint32());
          break;
        case 5:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        case 6:
          message.proofChannel = reader.bytes();
          break;
        case 7:
          message.proofUpgrade = reader.bytes();
          break;
        case 8:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 9:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeTry {
    const obj = createBaseMsgChannelUpgradeTry();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (Array.isArray(object?.proposedUpgradeConnectionHops))
      obj.proposedUpgradeConnectionHops = object.proposedUpgradeConnectionHops.map((e: any) => String(e));
    if (isSet(object.counterpartyUpgradeFields))
      obj.counterpartyUpgradeFields = UpgradeFields.fromJSON(object.counterpartyUpgradeFields);
    if (isSet(object.counterpartyUpgradeSequence))
      obj.counterpartyUpgradeSequence = BigInt(object.counterpartyUpgradeSequence.toString());
    if (isSet(object.proofChannel)) obj.proofChannel = bytesFromBase64(object.proofChannel);
    if (isSet(object.proofUpgrade)) obj.proofUpgrade = bytesFromBase64(object.proofUpgrade);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelUpgradeTry): JsonSafe<MsgChannelUpgradeTry> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    if (message.proposedUpgradeConnectionHops) {
      obj.proposedUpgradeConnectionHops = message.proposedUpgradeConnectionHops.map((e) => e);
    } else {
      obj.proposedUpgradeConnectionHops = [];
    }
    message.counterpartyUpgradeFields !== undefined &&
      (obj.counterpartyUpgradeFields = message.counterpartyUpgradeFields
        ? UpgradeFields.toJSON(message.counterpartyUpgradeFields)
        : undefined);
    message.counterpartyUpgradeSequence !== undefined &&
      (obj.counterpartyUpgradeSequence = (message.counterpartyUpgradeSequence || BigInt(0)).toString());
    message.proofChannel !== undefined &&
      (obj.proofChannel = base64FromBytes(
        message.proofChannel !== undefined ? message.proofChannel : new Uint8Array(),
      ));
    message.proofUpgrade !== undefined &&
      (obj.proofUpgrade = base64FromBytes(
        message.proofUpgrade !== undefined ? message.proofUpgrade : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeTry>, I>>(object: I): MsgChannelUpgradeTry {
    const message = createBaseMsgChannelUpgradeTry();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proposedUpgradeConnectionHops = object.proposedUpgradeConnectionHops?.map((e) => e) || [];
    if (object.counterpartyUpgradeFields !== undefined && object.counterpartyUpgradeFields !== null) {
      message.counterpartyUpgradeFields = UpgradeFields.fromPartial(object.counterpartyUpgradeFields);
    }
    if (object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterpartyUpgradeSequence.toString());
    }
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeTryAmino): MsgChannelUpgradeTry {
    const message = createBaseMsgChannelUpgradeTry();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    message.proposedUpgradeConnectionHops = object.proposed_upgrade_connection_hops?.map((e) => e) || [];
    if (object.counterparty_upgrade_fields !== undefined && object.counterparty_upgrade_fields !== null) {
      message.counterpartyUpgradeFields = UpgradeFields.fromAmino(object.counterparty_upgrade_fields);
    }
    if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    if (object.proof_channel !== undefined && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_upgrade !== undefined && object.proof_upgrade !== null) {
      message.proofUpgrade = bytesFromBase64(object.proof_upgrade);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeTry): MsgChannelUpgradeTryAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    if (message.proposedUpgradeConnectionHops) {
      obj.proposed_upgrade_connection_hops = message.proposedUpgradeConnectionHops.map((e) => e);
    } else {
      obj.proposed_upgrade_connection_hops = message.proposedUpgradeConnectionHops;
    }
    obj.counterparty_upgrade_fields = message.counterpartyUpgradeFields
      ? UpgradeFields.toAmino(message.counterpartyUpgradeFields)
      : undefined;
    obj.counterparty_upgrade_sequence =
      message.counterpartyUpgradeSequence !== BigInt(0)
        ? message.counterpartyUpgradeSequence?.toString()
        : undefined;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : undefined;
    obj.proof_upgrade = message.proofUpgrade ? base64FromBytes(message.proofUpgrade) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeTryAminoMsg): MsgChannelUpgradeTry {
    return MsgChannelUpgradeTry.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeTry): MsgChannelUpgradeTryAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTry",
      value: MsgChannelUpgradeTry.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeTryResponse(): MsgChannelUpgradeTryResponse {
  return {
    upgrade: Upgrade.fromPartial({}),
    upgradeSequence: BigInt(0),
    result: 0,
  };
}
export const MsgChannelUpgradeTryResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTryResponse",
  encode(message: MsgChannelUpgradeTryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upgrade !== undefined) {
      Upgrade.encode(message.upgrade, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgradeSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.upgradeSequence);
    }
    if (message.result !== 0) {
      writer.uint32(24).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradeSequence = reader.uint64();
          break;
        case 3:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeTryResponse {
    const obj = createBaseMsgChannelUpgradeTryResponse();
    if (isSet(object.upgrade)) obj.upgrade = Upgrade.fromJSON(object.upgrade);
    if (isSet(object.upgradeSequence)) obj.upgradeSequence = BigInt(object.upgradeSequence.toString());
    if (isSet(object.result)) obj.result = responseResultTypeFromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgChannelUpgradeTryResponse): JsonSafe<MsgChannelUpgradeTryResponse> {
    const obj: any = {};
    message.upgrade !== undefined &&
      (obj.upgrade = message.upgrade ? Upgrade.toJSON(message.upgrade) : undefined);
    message.upgradeSequence !== undefined &&
      (obj.upgradeSequence = (message.upgradeSequence || BigInt(0)).toString());
    message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeTryResponse>, I>>(
    object: I,
  ): MsgChannelUpgradeTryResponse {
    const message = createBaseMsgChannelUpgradeTryResponse();
    if (object.upgrade !== undefined && object.upgrade !== null) {
      message.upgrade = Upgrade.fromPartial(object.upgrade);
    }
    if (object.upgradeSequence !== undefined && object.upgradeSequence !== null) {
      message.upgradeSequence = BigInt(object.upgradeSequence.toString());
    }
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgChannelUpgradeTryResponseAmino): MsgChannelUpgradeTryResponse {
    const message = createBaseMsgChannelUpgradeTryResponse();
    if (object.upgrade !== undefined && object.upgrade !== null) {
      message.upgrade = Upgrade.fromAmino(object.upgrade);
    }
    if (object.upgrade_sequence !== undefined && object.upgrade_sequence !== null) {
      message.upgradeSequence = BigInt(object.upgrade_sequence);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeTryResponse): MsgChannelUpgradeTryResponseAmino {
    const obj: any = {};
    obj.upgrade = message.upgrade ? Upgrade.toAmino(message.upgrade) : undefined;
    obj.upgrade_sequence =
      message.upgradeSequence !== BigInt(0) ? message.upgradeSequence?.toString() : undefined;
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeTryResponseAminoMsg): MsgChannelUpgradeTryResponse {
    return MsgChannelUpgradeTryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeTryResponse): MsgChannelUpgradeTryResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTryResponse",
      value: MsgChannelUpgradeTryResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeAck(): MsgChannelUpgradeAck {
  return {
    portId: "",
    channelId: "",
    counterpartyUpgrade: Upgrade.fromPartial({}),
    proofChannel: new Uint8Array(),
    proofUpgrade: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelUpgradeAck = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAck",
  encode(message: MsgChannelUpgradeAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyUpgrade !== undefined) {
      Upgrade.encode(message.counterpartyUpgrade, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(34).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyUpgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofChannel = reader.bytes();
          break;
        case 5:
          message.proofUpgrade = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeAck {
    const obj = createBaseMsgChannelUpgradeAck();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.counterpartyUpgrade))
      obj.counterpartyUpgrade = Upgrade.fromJSON(object.counterpartyUpgrade);
    if (isSet(object.proofChannel)) obj.proofChannel = bytesFromBase64(object.proofChannel);
    if (isSet(object.proofUpgrade)) obj.proofUpgrade = bytesFromBase64(object.proofUpgrade);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelUpgradeAck): JsonSafe<MsgChannelUpgradeAck> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyUpgrade !== undefined &&
      (obj.counterpartyUpgrade = message.counterpartyUpgrade
        ? Upgrade.toJSON(message.counterpartyUpgrade)
        : undefined);
    message.proofChannel !== undefined &&
      (obj.proofChannel = base64FromBytes(
        message.proofChannel !== undefined ? message.proofChannel : new Uint8Array(),
      ));
    message.proofUpgrade !== undefined &&
      (obj.proofUpgrade = base64FromBytes(
        message.proofUpgrade !== undefined ? message.proofUpgrade : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeAck>, I>>(object: I): MsgChannelUpgradeAck {
    const message = createBaseMsgChannelUpgradeAck();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    if (object.counterpartyUpgrade !== undefined && object.counterpartyUpgrade !== null) {
      message.counterpartyUpgrade = Upgrade.fromPartial(object.counterpartyUpgrade);
    }
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeAckAmino): MsgChannelUpgradeAck {
    const message = createBaseMsgChannelUpgradeAck();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_upgrade !== undefined && object.counterparty_upgrade !== null) {
      message.counterpartyUpgrade = Upgrade.fromAmino(object.counterparty_upgrade);
    }
    if (object.proof_channel !== undefined && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_upgrade !== undefined && object.proof_upgrade !== null) {
      message.proofUpgrade = bytesFromBase64(object.proof_upgrade);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeAck): MsgChannelUpgradeAckAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.counterparty_upgrade = message.counterpartyUpgrade
      ? Upgrade.toAmino(message.counterpartyUpgrade)
      : undefined;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : undefined;
    obj.proof_upgrade = message.proofUpgrade ? base64FromBytes(message.proofUpgrade) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeAckAminoMsg): MsgChannelUpgradeAck {
    return MsgChannelUpgradeAck.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeAck): MsgChannelUpgradeAckAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeAck",
      value: MsgChannelUpgradeAck.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeAckResponse(): MsgChannelUpgradeAckResponse {
  return {
    result: 0,
  };
}
export const MsgChannelUpgradeAckResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeAckResponse",
  encode(message: MsgChannelUpgradeAckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeAckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeAckResponse {
    const obj = createBaseMsgChannelUpgradeAckResponse();
    if (isSet(object.result)) obj.result = responseResultTypeFromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgChannelUpgradeAckResponse): JsonSafe<MsgChannelUpgradeAckResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeAckResponse>, I>>(
    object: I,
  ): MsgChannelUpgradeAckResponse {
    const message = createBaseMsgChannelUpgradeAckResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgChannelUpgradeAckResponseAmino): MsgChannelUpgradeAckResponse {
    const message = createBaseMsgChannelUpgradeAckResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeAckResponse): MsgChannelUpgradeAckResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeAckResponseAminoMsg): MsgChannelUpgradeAckResponse {
    return MsgChannelUpgradeAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeAckResponse): MsgChannelUpgradeAckResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeAckResponse",
      value: MsgChannelUpgradeAckResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeConfirm(): MsgChannelUpgradeConfirm {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelState: 0,
    counterpartyUpgrade: Upgrade.fromPartial({}),
    proofChannel: new Uint8Array(),
    proofUpgrade: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelUpgradeConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirm",
  encode(message: MsgChannelUpgradeConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelState !== 0) {
      writer.uint32(24).int32(message.counterpartyChannelState);
    }
    if (message.counterpartyUpgrade !== undefined) {
      Upgrade.encode(message.counterpartyUpgrade, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(42).bytes(message.proofChannel);
    }
    if (message.proofUpgrade.length !== 0) {
      writer.uint32(50).bytes(message.proofUpgrade);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(66).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelState = reader.int32() as any;
          break;
        case 4:
          message.counterpartyUpgrade = Upgrade.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofChannel = reader.bytes();
          break;
        case 6:
          message.proofUpgrade = reader.bytes();
          break;
        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeConfirm {
    const obj = createBaseMsgChannelUpgradeConfirm();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.counterpartyChannelState))
      obj.counterpartyChannelState = stateFromJSON(object.counterpartyChannelState);
    if (isSet(object.counterpartyUpgrade))
      obj.counterpartyUpgrade = Upgrade.fromJSON(object.counterpartyUpgrade);
    if (isSet(object.proofChannel)) obj.proofChannel = bytesFromBase64(object.proofChannel);
    if (isSet(object.proofUpgrade)) obj.proofUpgrade = bytesFromBase64(object.proofUpgrade);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelUpgradeConfirm): JsonSafe<MsgChannelUpgradeConfirm> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelState !== undefined &&
      (obj.counterpartyChannelState = stateToJSON(message.counterpartyChannelState));
    message.counterpartyUpgrade !== undefined &&
      (obj.counterpartyUpgrade = message.counterpartyUpgrade
        ? Upgrade.toJSON(message.counterpartyUpgrade)
        : undefined);
    message.proofChannel !== undefined &&
      (obj.proofChannel = base64FromBytes(
        message.proofChannel !== undefined ? message.proofChannel : new Uint8Array(),
      ));
    message.proofUpgrade !== undefined &&
      (obj.proofUpgrade = base64FromBytes(
        message.proofUpgrade !== undefined ? message.proofUpgrade : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeConfirm>, I>>(
    object: I,
  ): MsgChannelUpgradeConfirm {
    const message = createBaseMsgChannelUpgradeConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
    if (object.counterpartyUpgrade !== undefined && object.counterpartyUpgrade !== null) {
      message.counterpartyUpgrade = Upgrade.fromPartial(object.counterpartyUpgrade);
    }
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    message.proofUpgrade = object.proofUpgrade ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeConfirmAmino): MsgChannelUpgradeConfirm {
    const message = createBaseMsgChannelUpgradeConfirm();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel_state !== undefined && object.counterparty_channel_state !== null) {
      message.counterpartyChannelState = object.counterparty_channel_state;
    }
    if (object.counterparty_upgrade !== undefined && object.counterparty_upgrade !== null) {
      message.counterpartyUpgrade = Upgrade.fromAmino(object.counterparty_upgrade);
    }
    if (object.proof_channel !== undefined && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_upgrade !== undefined && object.proof_upgrade !== null) {
      message.proofUpgrade = bytesFromBase64(object.proof_upgrade);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeConfirm): MsgChannelUpgradeConfirmAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.counterparty_channel_state =
      message.counterpartyChannelState === 0 ? undefined : message.counterpartyChannelState;
    obj.counterparty_upgrade = message.counterpartyUpgrade
      ? Upgrade.toAmino(message.counterpartyUpgrade)
      : undefined;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : undefined;
    obj.proof_upgrade = message.proofUpgrade ? base64FromBytes(message.proofUpgrade) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeConfirmAminoMsg): MsgChannelUpgradeConfirm {
    return MsgChannelUpgradeConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeConfirm): MsgChannelUpgradeConfirmAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeConfirm",
      value: MsgChannelUpgradeConfirm.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeConfirmResponse(): MsgChannelUpgradeConfirmResponse {
  return {
    result: 0,
  };
}
export const MsgChannelUpgradeConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeConfirmResponse",
  encode(
    message: MsgChannelUpgradeConfirmResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeConfirmResponse {
    const obj = createBaseMsgChannelUpgradeConfirmResponse();
    if (isSet(object.result)) obj.result = responseResultTypeFromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgChannelUpgradeConfirmResponse): JsonSafe<MsgChannelUpgradeConfirmResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeConfirmResponse>, I>>(
    object: I,
  ): MsgChannelUpgradeConfirmResponse {
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgChannelUpgradeConfirmResponseAmino): MsgChannelUpgradeConfirmResponse {
    const message = createBaseMsgChannelUpgradeConfirmResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeConfirmResponse): MsgChannelUpgradeConfirmResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeConfirmResponseAminoMsg): MsgChannelUpgradeConfirmResponse {
    return MsgChannelUpgradeConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeConfirmResponse): MsgChannelUpgradeConfirmResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeConfirmResponse",
      value: MsgChannelUpgradeConfirmResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeOpen(): MsgChannelUpgradeOpen {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelState: 0,
    counterpartyUpgradeSequence: BigInt(0),
    proofChannel: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelUpgradeOpen = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpen",
  encode(message: MsgChannelUpgradeOpen, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelState !== 0) {
      writer.uint32(24).int32(message.counterpartyChannelState);
    }
    if (message.counterpartyUpgradeSequence !== BigInt(0)) {
      writer.uint32(32).uint64(message.counterpartyUpgradeSequence);
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(42).bytes(message.proofChannel);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeOpen {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeOpen();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelState = reader.int32() as any;
          break;
        case 4:
          message.counterpartyUpgradeSequence = reader.uint64();
          break;
        case 5:
          message.proofChannel = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeOpen {
    const obj = createBaseMsgChannelUpgradeOpen();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.counterpartyChannelState))
      obj.counterpartyChannelState = stateFromJSON(object.counterpartyChannelState);
    if (isSet(object.counterpartyUpgradeSequence))
      obj.counterpartyUpgradeSequence = BigInt(object.counterpartyUpgradeSequence.toString());
    if (isSet(object.proofChannel)) obj.proofChannel = bytesFromBase64(object.proofChannel);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelUpgradeOpen): JsonSafe<MsgChannelUpgradeOpen> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelState !== undefined &&
      (obj.counterpartyChannelState = stateToJSON(message.counterpartyChannelState));
    message.counterpartyUpgradeSequence !== undefined &&
      (obj.counterpartyUpgradeSequence = (message.counterpartyUpgradeSequence || BigInt(0)).toString());
    message.proofChannel !== undefined &&
      (obj.proofChannel = base64FromBytes(
        message.proofChannel !== undefined ? message.proofChannel : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeOpen>, I>>(object: I): MsgChannelUpgradeOpen {
    const message = createBaseMsgChannelUpgradeOpen();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelState = object.counterpartyChannelState ?? 0;
    if (object.counterpartyUpgradeSequence !== undefined && object.counterpartyUpgradeSequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterpartyUpgradeSequence.toString());
    }
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeOpenAmino): MsgChannelUpgradeOpen {
    const message = createBaseMsgChannelUpgradeOpen();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel_state !== undefined && object.counterparty_channel_state !== null) {
      message.counterpartyChannelState = object.counterparty_channel_state;
    }
    if (object.counterparty_upgrade_sequence !== undefined && object.counterparty_upgrade_sequence !== null) {
      message.counterpartyUpgradeSequence = BigInt(object.counterparty_upgrade_sequence);
    }
    if (object.proof_channel !== undefined && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeOpen): MsgChannelUpgradeOpenAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.counterparty_channel_state =
      message.counterpartyChannelState === 0 ? undefined : message.counterpartyChannelState;
    obj.counterparty_upgrade_sequence =
      message.counterpartyUpgradeSequence !== BigInt(0)
        ? message.counterpartyUpgradeSequence?.toString()
        : undefined;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeOpenAminoMsg): MsgChannelUpgradeOpen {
    return MsgChannelUpgradeOpen.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeOpen): MsgChannelUpgradeOpenAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeOpen",
      value: MsgChannelUpgradeOpen.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeOpenResponse(): MsgChannelUpgradeOpenResponse {
  return {};
}
export const MsgChannelUpgradeOpenResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeOpenResponse",
  encode(_: MsgChannelUpgradeOpenResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeOpenResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeOpenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelUpgradeOpenResponse {
    const obj = createBaseMsgChannelUpgradeOpenResponse();
    return obj;
  },
  toJSON(_: MsgChannelUpgradeOpenResponse): JsonSafe<MsgChannelUpgradeOpenResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeOpenResponse>, I>>(
    _: I,
  ): MsgChannelUpgradeOpenResponse {
    const message = createBaseMsgChannelUpgradeOpenResponse();
    return message;
  },
  fromAmino(_: MsgChannelUpgradeOpenResponseAmino): MsgChannelUpgradeOpenResponse {
    const message = createBaseMsgChannelUpgradeOpenResponse();
    return message;
  },
  toAmino(_: MsgChannelUpgradeOpenResponse): MsgChannelUpgradeOpenResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeOpenResponseAminoMsg): MsgChannelUpgradeOpenResponse {
    return MsgChannelUpgradeOpenResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeOpenResponse): MsgChannelUpgradeOpenResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeOpenResponse",
      value: MsgChannelUpgradeOpenResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeTimeout(): MsgChannelUpgradeTimeout {
  return {
    portId: "",
    channelId: "",
    counterpartyChannel: Channel.fromPartial({}),
    proofChannel: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelUpgradeTimeout = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeout",
  encode(message: MsgChannelUpgradeTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannel !== undefined) {
      Channel.encode(message.counterpartyChannel, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofChannel.length !== 0) {
      writer.uint32(34).bytes(message.proofChannel);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofChannel = reader.bytes();
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeTimeout {
    const obj = createBaseMsgChannelUpgradeTimeout();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.counterpartyChannel))
      obj.counterpartyChannel = Channel.fromJSON(object.counterpartyChannel);
    if (isSet(object.proofChannel)) obj.proofChannel = bytesFromBase64(object.proofChannel);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelUpgradeTimeout): JsonSafe<MsgChannelUpgradeTimeout> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannel !== undefined &&
      (obj.counterpartyChannel = message.counterpartyChannel
        ? Channel.toJSON(message.counterpartyChannel)
        : undefined);
    message.proofChannel !== undefined &&
      (obj.proofChannel = base64FromBytes(
        message.proofChannel !== undefined ? message.proofChannel : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeTimeout>, I>>(
    object: I,
  ): MsgChannelUpgradeTimeout {
    const message = createBaseMsgChannelUpgradeTimeout();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    if (object.counterpartyChannel !== undefined && object.counterpartyChannel !== null) {
      message.counterpartyChannel = Channel.fromPartial(object.counterpartyChannel);
    }
    message.proofChannel = object.proofChannel ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeTimeoutAmino): MsgChannelUpgradeTimeout {
    const message = createBaseMsgChannelUpgradeTimeout();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.counterparty_channel !== undefined && object.counterparty_channel !== null) {
      message.counterpartyChannel = Channel.fromAmino(object.counterparty_channel);
    }
    if (object.proof_channel !== undefined && object.proof_channel !== null) {
      message.proofChannel = bytesFromBase64(object.proof_channel);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeTimeout): MsgChannelUpgradeTimeoutAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.counterparty_channel = message.counterpartyChannel
      ? Channel.toAmino(message.counterpartyChannel)
      : undefined;
    obj.proof_channel = message.proofChannel ? base64FromBytes(message.proofChannel) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeTimeoutAminoMsg): MsgChannelUpgradeTimeout {
    return MsgChannelUpgradeTimeout.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeTimeout): MsgChannelUpgradeTimeoutAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTimeout",
      value: MsgChannelUpgradeTimeout.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeTimeoutResponse(): MsgChannelUpgradeTimeoutResponse {
  return {};
}
export const MsgChannelUpgradeTimeoutResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeTimeoutResponse",
  encode(_: MsgChannelUpgradeTimeoutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeTimeoutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelUpgradeTimeoutResponse {
    const obj = createBaseMsgChannelUpgradeTimeoutResponse();
    return obj;
  },
  toJSON(_: MsgChannelUpgradeTimeoutResponse): JsonSafe<MsgChannelUpgradeTimeoutResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeTimeoutResponse>, I>>(
    _: I,
  ): MsgChannelUpgradeTimeoutResponse {
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
    return message;
  },
  fromAmino(_: MsgChannelUpgradeTimeoutResponseAmino): MsgChannelUpgradeTimeoutResponse {
    const message = createBaseMsgChannelUpgradeTimeoutResponse();
    return message;
  },
  toAmino(_: MsgChannelUpgradeTimeoutResponse): MsgChannelUpgradeTimeoutResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeTimeoutResponseAminoMsg): MsgChannelUpgradeTimeoutResponse {
    return MsgChannelUpgradeTimeoutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeTimeoutResponse): MsgChannelUpgradeTimeoutResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeTimeoutResponse",
      value: MsgChannelUpgradeTimeoutResponse.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeCancel(): MsgChannelUpgradeCancel {
  return {
    portId: "",
    channelId: "",
    errorReceipt: ErrorReceipt.fromPartial({}),
    proofErrorReceipt: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgChannelUpgradeCancel = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancel",
  encode(message: MsgChannelUpgradeCancel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.errorReceipt !== undefined) {
      ErrorReceipt.encode(message.errorReceipt, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofErrorReceipt.length !== 0) {
      writer.uint32(34).bytes(message.proofErrorReceipt);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeCancel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeCancel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.errorReceipt = ErrorReceipt.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofErrorReceipt = reader.bytes();
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelUpgradeCancel {
    const obj = createBaseMsgChannelUpgradeCancel();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.errorReceipt)) obj.errorReceipt = ErrorReceipt.fromJSON(object.errorReceipt);
    if (isSet(object.proofErrorReceipt)) obj.proofErrorReceipt = bytesFromBase64(object.proofErrorReceipt);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgChannelUpgradeCancel): JsonSafe<MsgChannelUpgradeCancel> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.errorReceipt !== undefined &&
      (obj.errorReceipt = message.errorReceipt ? ErrorReceipt.toJSON(message.errorReceipt) : undefined);
    message.proofErrorReceipt !== undefined &&
      (obj.proofErrorReceipt = base64FromBytes(
        message.proofErrorReceipt !== undefined ? message.proofErrorReceipt : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeCancel>, I>>(object: I): MsgChannelUpgradeCancel {
    const message = createBaseMsgChannelUpgradeCancel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    if (object.errorReceipt !== undefined && object.errorReceipt !== null) {
      message.errorReceipt = ErrorReceipt.fromPartial(object.errorReceipt);
    }
    message.proofErrorReceipt = object.proofErrorReceipt ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgChannelUpgradeCancelAmino): MsgChannelUpgradeCancel {
    const message = createBaseMsgChannelUpgradeCancel();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.error_receipt !== undefined && object.error_receipt !== null) {
      message.errorReceipt = ErrorReceipt.fromAmino(object.error_receipt);
    }
    if (object.proof_error_receipt !== undefined && object.proof_error_receipt !== null) {
      message.proofErrorReceipt = bytesFromBase64(object.proof_error_receipt);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgChannelUpgradeCancel): MsgChannelUpgradeCancelAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.error_receipt = message.errorReceipt ? ErrorReceipt.toAmino(message.errorReceipt) : undefined;
    obj.proof_error_receipt = message.proofErrorReceipt
      ? base64FromBytes(message.proofErrorReceipt)
      : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeCancelAminoMsg): MsgChannelUpgradeCancel {
    return MsgChannelUpgradeCancel.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeCancel): MsgChannelUpgradeCancelAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeCancel",
      value: MsgChannelUpgradeCancel.toAmino(message),
    };
  },
};
function createBaseMsgChannelUpgradeCancelResponse(): MsgChannelUpgradeCancelResponse {
  return {};
}
export const MsgChannelUpgradeCancelResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelUpgradeCancelResponse",
  encode(_: MsgChannelUpgradeCancelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelUpgradeCancelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelUpgradeCancelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelUpgradeCancelResponse {
    const obj = createBaseMsgChannelUpgradeCancelResponse();
    return obj;
  },
  toJSON(_: MsgChannelUpgradeCancelResponse): JsonSafe<MsgChannelUpgradeCancelResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChannelUpgradeCancelResponse>, I>>(
    _: I,
  ): MsgChannelUpgradeCancelResponse {
    const message = createBaseMsgChannelUpgradeCancelResponse();
    return message;
  },
  fromAmino(_: MsgChannelUpgradeCancelResponseAmino): MsgChannelUpgradeCancelResponse {
    const message = createBaseMsgChannelUpgradeCancelResponse();
    return message;
  },
  toAmino(_: MsgChannelUpgradeCancelResponse): MsgChannelUpgradeCancelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelUpgradeCancelResponseAminoMsg): MsgChannelUpgradeCancelResponse {
    return MsgChannelUpgradeCancelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelUpgradeCancelResponse): MsgChannelUpgradeCancelResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelUpgradeCancelResponse",
      value: MsgChannelUpgradeCancelResponse.toAmino(message),
    };
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/ibc.core.channel.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message),
    };
  },
};
function createBaseMsgPruneAcknowledgements(): MsgPruneAcknowledgements {
  return {
    portId: "",
    channelId: "",
    limit: BigInt(0),
    signer: "",
  };
}
export const MsgPruneAcknowledgements = {
  typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgements",
  encode(message: MsgPruneAcknowledgements, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(24).uint64(message.limit);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAcknowledgements {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAcknowledgements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.limit = reader.uint64();
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPruneAcknowledgements {
    const obj = createBaseMsgPruneAcknowledgements();
    if (isSet(object.portId)) obj.portId = String(object.portId);
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.limit)) obj.limit = BigInt(object.limit.toString());
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgPruneAcknowledgements): JsonSafe<MsgPruneAcknowledgements> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPruneAcknowledgements>, I>>(
    object: I,
  ): MsgPruneAcknowledgements {
    const message = createBaseMsgPruneAcknowledgements();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit.toString());
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgPruneAcknowledgementsAmino): MsgPruneAcknowledgements {
    const message = createBaseMsgPruneAcknowledgements();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgPruneAcknowledgements): MsgPruneAcknowledgementsAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgPruneAcknowledgementsAminoMsg): MsgPruneAcknowledgements {
    return MsgPruneAcknowledgements.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneAcknowledgements): MsgPruneAcknowledgementsAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneAcknowledgements",
      value: MsgPruneAcknowledgements.toAmino(message),
    };
  },
};
function createBaseMsgPruneAcknowledgementsResponse(): MsgPruneAcknowledgementsResponse {
  return {
    totalPrunedSequences: BigInt(0),
    totalRemainingSequences: BigInt(0),
  };
}
export const MsgPruneAcknowledgementsResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgPruneAcknowledgementsResponse",
  encode(
    message: MsgPruneAcknowledgementsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.totalPrunedSequences !== BigInt(0)) {
      writer.uint32(8).uint64(message.totalPrunedSequences);
    }
    if (message.totalRemainingSequences !== BigInt(0)) {
      writer.uint32(16).uint64(message.totalRemainingSequences);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneAcknowledgementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalPrunedSequences = reader.uint64();
          break;
        case 2:
          message.totalRemainingSequences = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPruneAcknowledgementsResponse {
    const obj = createBaseMsgPruneAcknowledgementsResponse();
    if (isSet(object.totalPrunedSequences))
      obj.totalPrunedSequences = BigInt(object.totalPrunedSequences.toString());
    if (isSet(object.totalRemainingSequences))
      obj.totalRemainingSequences = BigInt(object.totalRemainingSequences.toString());
    return obj;
  },
  toJSON(message: MsgPruneAcknowledgementsResponse): JsonSafe<MsgPruneAcknowledgementsResponse> {
    const obj: any = {};
    message.totalPrunedSequences !== undefined &&
      (obj.totalPrunedSequences = (message.totalPrunedSequences || BigInt(0)).toString());
    message.totalRemainingSequences !== undefined &&
      (obj.totalRemainingSequences = (message.totalRemainingSequences || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgPruneAcknowledgementsResponse>, I>>(
    object: I,
  ): MsgPruneAcknowledgementsResponse {
    const message = createBaseMsgPruneAcknowledgementsResponse();
    if (object.totalPrunedSequences !== undefined && object.totalPrunedSequences !== null) {
      message.totalPrunedSequences = BigInt(object.totalPrunedSequences.toString());
    }
    if (object.totalRemainingSequences !== undefined && object.totalRemainingSequences !== null) {
      message.totalRemainingSequences = BigInt(object.totalRemainingSequences.toString());
    }
    return message;
  },
  fromAmino(object: MsgPruneAcknowledgementsResponseAmino): MsgPruneAcknowledgementsResponse {
    const message = createBaseMsgPruneAcknowledgementsResponse();
    if (object.total_pruned_sequences !== undefined && object.total_pruned_sequences !== null) {
      message.totalPrunedSequences = BigInt(object.total_pruned_sequences);
    }
    if (object.total_remaining_sequences !== undefined && object.total_remaining_sequences !== null) {
      message.totalRemainingSequences = BigInt(object.total_remaining_sequences);
    }
    return message;
  },
  toAmino(message: MsgPruneAcknowledgementsResponse): MsgPruneAcknowledgementsResponseAmino {
    const obj: any = {};
    obj.total_pruned_sequences =
      message.totalPrunedSequences !== BigInt(0) ? message.totalPrunedSequences?.toString() : undefined;
    obj.total_remaining_sequences =
      message.totalRemainingSequences !== BigInt(0) ? message.totalRemainingSequences?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgPruneAcknowledgementsResponseAminoMsg): MsgPruneAcknowledgementsResponse {
    return MsgPruneAcknowledgementsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneAcknowledgementsResponse): MsgPruneAcknowledgementsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneAcknowledgementsResponse",
      value: MsgPruneAcknowledgementsResponse.toAmino(message),
    };
  },
};
