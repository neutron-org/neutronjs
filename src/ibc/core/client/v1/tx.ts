//@ts-nocheck
/* eslint-disable */
import { Any } from "../../../../google/protobuf/any";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { Params } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.core.client.v1";
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
  /** light client state */
  clientState?: Any;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensusState?: Any;
  /** signer address */
  signer: string;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 */
export interface MsgUpdateClient {
  /** client unique identifier */
  clientId: string;
  /** client message to update the light client */
  clientMessage?: Any;
  /** signer address */
  signer: string;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
  /** client unique identifier */
  clientId: string;
  /** upgraded client state */
  clientState?: Any;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensusState?: Any;
  /** proof that old chain committed to new client */
  proofUpgradeClient: Uint8Array;
  /** proof that old chain committed to new consensus state */
  proofUpgradeConsensusState: Uint8Array;
  /** signer address */
  signer: string;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 */
/** @deprecated */
export interface MsgSubmitMisbehaviour {
  /** client unique identifier */
  clientId: string;
  /** misbehaviour used for freezing the light client */
  misbehaviour?: Any;
  /** signer address */
  signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {}
/** MsgRecoverClient defines the message used to recover a frozen or expired client. */
export interface MsgRecoverClient {
  /** the client identifier for the client to be updated if the proposal passes */
  subjectClientId: string;
  /**
   * the substitute client identifier for the client which will replace the subject
   * client
   */
  substituteClientId: string;
  /** signer address */
  signer: string;
}
/** MsgRecoverClientResponse defines the Msg/RecoverClient response type. */
export interface MsgRecoverClientResponse {}
/** MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal */
export interface MsgIBCSoftwareUpgrade {
  plan: Plan;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades. Correspondingly, the UpgradedClientState field has been
   * deprecated in the Cosmos SDK to allow for this logic to exist solely in
   * the 02-client module.
   */
  upgradedClientState?: Any;
  /** signer address */
  signer: string;
}
/** MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type. */
export interface MsgIBCSoftwareUpgradeResponse {}
/** MsgUpdateParams defines the sdk.Msg type to update the client parameters. */
export interface MsgUpdateParams {
  /** signer address */
  signer: string;
  /**
   * params defines the client parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/** MsgUpdateParamsResponse defines the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {}
function createBaseMsgCreateClient(): MsgCreateClient {
  return {
    clientState: undefined,
    consensusState: undefined,
    signer: "",
  };
}
export const MsgCreateClient = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClient",
  encode(message: MsgCreateClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
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
  fromJSON(object: any): MsgCreateClient {
    const obj = createBaseMsgCreateClient();
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    if (isSet(object.consensusState)) obj.consensusState = Any.fromJSON(object.consensusState);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgCreateClient): JsonSafe<MsgCreateClient> {
    const obj: any = {};
    message.clientState !== undefined &&
      (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateClient>, I>>(object: I): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgCreateClientAmino): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgCreateClient): MsgCreateClientAmino {
    const obj: any = {};
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClientAminoMsg): MsgCreateClient {
    return MsgCreateClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClient): MsgCreateClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateClient",
      value: MsgCreateClient.toAmino(message),
    };
  },
};
function createBaseMsgCreateClientResponse(): MsgCreateClientResponse {
  return {};
}
export const MsgCreateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
  encode(_: MsgCreateClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClientResponse();
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
  fromJSON(_: any): MsgCreateClientResponse {
    const obj = createBaseMsgCreateClientResponse();
    return obj;
  },
  toJSON(_: MsgCreateClientResponse): JsonSafe<MsgCreateClientResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateClientResponse>, I>>(_: I): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    return message;
  },
  fromAmino(_: MsgCreateClientResponseAmino): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    return message;
  },
  toAmino(_: MsgCreateClientResponse): MsgCreateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateClientResponseAminoMsg): MsgCreateClientResponse {
    return MsgCreateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateClientResponse",
      value: MsgCreateClientResponse.toAmino(message),
    };
  },
};
function createBaseMsgUpdateClient(): MsgUpdateClient {
  return {
    clientId: "",
    clientMessage: undefined,
    signer: "",
  };
}
export const MsgUpdateClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
  encode(message: MsgUpdateClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientMessage !== undefined) {
      Any.encode(message.clientMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMessage = Any.decode(reader, reader.uint32());
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
  fromJSON(object: any): MsgUpdateClient {
    const obj = createBaseMsgUpdateClient();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.clientMessage)) obj.clientMessage = Any.fromJSON(object.clientMessage);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgUpdateClient): JsonSafe<MsgUpdateClient> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientMessage !== undefined &&
      (obj.clientMessage = message.clientMessage ? Any.toJSON(message.clientMessage) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateClient>, I>>(object: I): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    message.clientId = object.clientId ?? "";
    if (object.clientMessage !== undefined && object.clientMessage !== null) {
      message.clientMessage = Any.fromPartial(object.clientMessage);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClientAmino): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.client_message !== undefined && object.client_message !== null) {
      message.clientMessage = Any.fromAmino(object.client_message);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgUpdateClient): MsgUpdateClientAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.client_message = message.clientMessage ? Any.toAmino(message.clientMessage) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientAminoMsg): MsgUpdateClient {
    return MsgUpdateClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClient): MsgUpdateClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClient",
      value: MsgUpdateClient.toAmino(message),
    };
  },
};
function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
  return {};
}
export const MsgUpdateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
  encode(_: MsgUpdateClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();
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
  fromJSON(_: any): MsgUpdateClientResponse {
    const obj = createBaseMsgUpdateClientResponse();
    return obj;
  },
  toJSON(_: MsgUpdateClientResponse): JsonSafe<MsgUpdateClientResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateClientResponse>, I>>(_: I): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClientResponseAmino): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  toAmino(_: MsgUpdateClientResponse): MsgUpdateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientResponseAminoMsg): MsgUpdateClientResponse {
    return MsgUpdateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.toAmino(message),
    };
  },
};
function createBaseMsgUpgradeClient(): MsgUpgradeClient {
  return {
    clientId: "",
    clientState: undefined,
    consensusState: undefined,
    proofUpgradeClient: new Uint8Array(),
    proofUpgradeConsensusState: new Uint8Array(),
    signer: "",
  };
}
export const MsgUpgradeClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
  encode(message: MsgUpgradeClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }
    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;
        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
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
  fromJSON(object: any): MsgUpgradeClient {
    const obj = createBaseMsgUpgradeClient();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    if (isSet(object.consensusState)) obj.consensusState = Any.fromJSON(object.consensusState);
    if (isSet(object.proofUpgradeClient)) obj.proofUpgradeClient = bytesFromBase64(object.proofUpgradeClient);
    if (isSet(object.proofUpgradeConsensusState))
      obj.proofUpgradeConsensusState = bytesFromBase64(object.proofUpgradeConsensusState);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgUpgradeClient): JsonSafe<MsgUpgradeClient> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientState !== undefined &&
      (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.proofUpgradeClient !== undefined &&
      (obj.proofUpgradeClient = base64FromBytes(
        message.proofUpgradeClient !== undefined ? message.proofUpgradeClient : new Uint8Array(),
      ));
    message.proofUpgradeConsensusState !== undefined &&
      (obj.proofUpgradeConsensusState = base64FromBytes(
        message.proofUpgradeConsensusState !== undefined
          ? message.proofUpgradeConsensusState
          : new Uint8Array(),
      ));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpgradeClient>, I>>(object: I): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    message.clientId = object.clientId ?? "";
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    }
    message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array();
    message.proofUpgradeConsensusState = object.proofUpgradeConsensusState ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUpgradeClientAmino): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    if (object.proof_upgrade_client !== undefined && object.proof_upgrade_client !== null) {
      message.proofUpgradeClient = bytesFromBase64(object.proof_upgrade_client);
    }
    if (object.proof_upgrade_consensus_state !== undefined && object.proof_upgrade_consensus_state !== null) {
      message.proofUpgradeConsensusState = bytesFromBase64(object.proof_upgrade_consensus_state);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgUpgradeClient): MsgUpgradeClientAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    obj.proof_upgrade_client = message.proofUpgradeClient
      ? base64FromBytes(message.proofUpgradeClient)
      : undefined;
    obj.proof_upgrade_consensus_state = message.proofUpgradeConsensusState
      ? base64FromBytes(message.proofUpgradeConsensusState)
      : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeClientAminoMsg): MsgUpgradeClient {
    return MsgUpgradeClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpgradeClient): MsgUpgradeClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpgradeClient",
      value: MsgUpgradeClient.toAmino(message),
    };
  },
};
function createBaseMsgUpgradeClientResponse(): MsgUpgradeClientResponse {
  return {};
}
export const MsgUpgradeClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
  encode(_: MsgUpgradeClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClientResponse();
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
  fromJSON(_: any): MsgUpgradeClientResponse {
    const obj = createBaseMsgUpgradeClientResponse();
    return obj;
  },
  toJSON(_: MsgUpgradeClientResponse): JsonSafe<MsgUpgradeClientResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpgradeClientResponse>, I>>(_: I): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  fromAmino(_: MsgUpgradeClientResponseAmino): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  toAmino(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeClientResponseAminoMsg): MsgUpgradeClientResponse {
    return MsgUpgradeClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.toAmino(message),
    };
  },
};
function createBaseMsgSubmitMisbehaviour(): MsgSubmitMisbehaviour {
  return {
    clientId: "",
    misbehaviour: undefined,
    signer: "",
  };
}
export const MsgSubmitMisbehaviour = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
  encode(message: MsgSubmitMisbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.misbehaviour !== undefined) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32());
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
  fromJSON(object: any): MsgSubmitMisbehaviour {
    const obj = createBaseMsgSubmitMisbehaviour();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.misbehaviour)) obj.misbehaviour = Any.fromJSON(object.misbehaviour);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgSubmitMisbehaviour): JsonSafe<MsgSubmitMisbehaviour> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.misbehaviour !== undefined &&
      (obj.misbehaviour = message.misbehaviour ? Any.toJSON(message.misbehaviour) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitMisbehaviour>, I>>(object: I): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    message.clientId = object.clientId ?? "";
    if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
      message.misbehaviour = Any.fromPartial(object.misbehaviour);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitMisbehaviourAmino): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
      message.misbehaviour = Any.fromAmino(object.misbehaviour);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.misbehaviour = message.misbehaviour ? Any.toAmino(message.misbehaviour) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMisbehaviourAminoMsg): MsgSubmitMisbehaviour {
    return MsgSubmitMisbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.toAmino(message),
    };
  },
};
function createBaseMsgSubmitMisbehaviourResponse(): MsgSubmitMisbehaviourResponse {
  return {};
}
export const MsgSubmitMisbehaviourResponse = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
  encode(_: MsgSubmitMisbehaviourResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviourResponse();
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
  fromJSON(_: any): MsgSubmitMisbehaviourResponse {
    const obj = createBaseMsgSubmitMisbehaviourResponse();
    return obj;
  },
  toJSON(_: MsgSubmitMisbehaviourResponse): JsonSafe<MsgSubmitMisbehaviourResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitMisbehaviourResponse>, I>>(
    _: I,
  ): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  fromAmino(_: MsgSubmitMisbehaviourResponseAmino): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  toAmino(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMisbehaviourResponseAminoMsg): MsgSubmitMisbehaviourResponse {
    return MsgSubmitMisbehaviourResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.toAmino(message),
    };
  },
};
function createBaseMsgRecoverClient(): MsgRecoverClient {
  return {
    subjectClientId: "",
    substituteClientId: "",
    signer: "",
  };
}
export const MsgRecoverClient = {
  typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
  encode(message: MsgRecoverClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subjectClientId !== "") {
      writer.uint32(10).string(message.subjectClientId);
    }
    if (message.substituteClientId !== "") {
      writer.uint32(18).string(message.substituteClientId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectClientId = reader.string();
          break;
        case 2:
          message.substituteClientId = reader.string();
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
  fromJSON(object: any): MsgRecoverClient {
    const obj = createBaseMsgRecoverClient();
    if (isSet(object.subjectClientId)) obj.subjectClientId = String(object.subjectClientId);
    if (isSet(object.substituteClientId)) obj.substituteClientId = String(object.substituteClientId);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgRecoverClient): JsonSafe<MsgRecoverClient> {
    const obj: any = {};
    message.subjectClientId !== undefined && (obj.subjectClientId = message.subjectClientId);
    message.substituteClientId !== undefined && (obj.substituteClientId = message.substituteClientId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRecoverClient>, I>>(object: I): MsgRecoverClient {
    const message = createBaseMsgRecoverClient();
    message.subjectClientId = object.subjectClientId ?? "";
    message.substituteClientId = object.substituteClientId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRecoverClientAmino): MsgRecoverClient {
    const message = createBaseMsgRecoverClient();
    if (object.subject_client_id !== undefined && object.subject_client_id !== null) {
      message.subjectClientId = object.subject_client_id;
    }
    if (object.substitute_client_id !== undefined && object.substitute_client_id !== null) {
      message.substituteClientId = object.substitute_client_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRecoverClient): MsgRecoverClientAmino {
    const obj: any = {};
    obj.subject_client_id = message.subjectClientId === "" ? undefined : message.subjectClientId;
    obj.substitute_client_id = message.substituteClientId === "" ? undefined : message.substituteClientId;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRecoverClientAminoMsg): MsgRecoverClient {
    return MsgRecoverClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecoverClient): MsgRecoverClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecoverClient",
      value: MsgRecoverClient.toAmino(message),
    };
  },
};
function createBaseMsgRecoverClientResponse(): MsgRecoverClientResponse {
  return {};
}
export const MsgRecoverClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
  encode(_: MsgRecoverClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverClientResponse();
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
  fromJSON(_: any): MsgRecoverClientResponse {
    const obj = createBaseMsgRecoverClientResponse();
    return obj;
  },
  toJSON(_: MsgRecoverClientResponse): JsonSafe<MsgRecoverClientResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRecoverClientResponse>, I>>(_: I): MsgRecoverClientResponse {
    const message = createBaseMsgRecoverClientResponse();
    return message;
  },
  fromAmino(_: MsgRecoverClientResponseAmino): MsgRecoverClientResponse {
    const message = createBaseMsgRecoverClientResponse();
    return message;
  },
  toAmino(_: MsgRecoverClientResponse): MsgRecoverClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRecoverClientResponseAminoMsg): MsgRecoverClientResponse {
    return MsgRecoverClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecoverClientResponse): MsgRecoverClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecoverClientResponse",
      value: MsgRecoverClientResponse.toAmino(message),
    };
  },
};
function createBaseMsgIBCSoftwareUpgrade(): MsgIBCSoftwareUpgrade {
  return {
    plan: Plan.fromPartial({}),
    upgradedClientState: undefined,
    signer: "",
  };
}
export const MsgIBCSoftwareUpgrade = {
  typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
  encode(message: MsgIBCSoftwareUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSoftwareUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
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
  fromJSON(object: any): MsgIBCSoftwareUpgrade {
    const obj = createBaseMsgIBCSoftwareUpgrade();
    if (isSet(object.plan)) obj.plan = Plan.fromJSON(object.plan);
    if (isSet(object.upgradedClientState)) obj.upgradedClientState = Any.fromJSON(object.upgradedClientState);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgIBCSoftwareUpgrade): JsonSafe<MsgIBCSoftwareUpgrade> {
    const obj: any = {};
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    message.upgradedClientState !== undefined &&
      (obj.upgradedClientState = message.upgradedClientState
        ? Any.toJSON(message.upgradedClientState)
        : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgIBCSoftwareUpgrade>, I>>(object: I): MsgIBCSoftwareUpgrade {
    const message = createBaseMsgIBCSoftwareUpgrade();
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    }
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromPartial(object.upgradedClientState);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgIBCSoftwareUpgradeAmino): MsgIBCSoftwareUpgrade {
    const message = createBaseMsgIBCSoftwareUpgrade();
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
      message.upgradedClientState = Any.fromAmino(object.upgraded_client_state);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeAmino {
    const obj: any = {};
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    obj.upgraded_client_state = message.upgradedClientState
      ? Any.toAmino(message.upgradedClientState)
      : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgIBCSoftwareUpgradeAminoMsg): MsgIBCSoftwareUpgrade {
    return MsgIBCSoftwareUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeAminoMsg {
    return {
      type: "cosmos-sdk/MsgIBCSoftwareUpgrade",
      value: MsgIBCSoftwareUpgrade.toAmino(message),
    };
  },
};
function createBaseMsgIBCSoftwareUpgradeResponse(): MsgIBCSoftwareUpgradeResponse {
  return {};
}
export const MsgIBCSoftwareUpgradeResponse = {
  typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
  encode(_: MsgIBCSoftwareUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSoftwareUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
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
  fromJSON(_: any): MsgIBCSoftwareUpgradeResponse {
    const obj = createBaseMsgIBCSoftwareUpgradeResponse();
    return obj;
  },
  toJSON(_: MsgIBCSoftwareUpgradeResponse): JsonSafe<MsgIBCSoftwareUpgradeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgIBCSoftwareUpgradeResponse>, I>>(
    _: I,
  ): MsgIBCSoftwareUpgradeResponse {
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgIBCSoftwareUpgradeResponseAmino): MsgIBCSoftwareUpgradeResponse {
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
    return message;
  },
  toAmino(_: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIBCSoftwareUpgradeResponseAminoMsg): MsgIBCSoftwareUpgradeResponse {
    return MsgIBCSoftwareUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse",
      value: MsgIBCSoftwareUpgradeResponse.toAmino(message),
    };
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    signer: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
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
          message.signer = reader.string();
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
    if (isSet(object.signer)) obj.signer = String(object.signer);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.signer = object.signer ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
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
  typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
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
