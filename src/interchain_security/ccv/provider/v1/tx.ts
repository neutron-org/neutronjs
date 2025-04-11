/* eslint-disable */
import { Misbehaviour, Header } from "../../../../ibc/lightclients/tendermint/v1/tendermint";
import { DuplicateVoteEvidence } from "../../../../tendermint/types/evidence";
import { Height, Params } from "../../../../ibc/core/client/v1/client";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import {
  isSet,
  DeepPartial,
  Exact,
  bytesFromBase64,
  fromJsonTimestamp,
  base64FromBytes,
  fromTimestamp,
} from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "interchain_security.ccv.provider.v1";
export interface MsgAssignConsumerKey {
  /** The chain id of the consumer chain to assign a consensus public key to */
  chainId: string;
  /** The validator address on the provider */
  providerAddr: string;
  /**
   * The consensus public key to use on the consumer.
   * in json string format corresponding to proto-any, ex:
   * `{"@type":"/cosmos.crypto.ed25519.PubKey","key":"Ui5Gf1+mtWUdH8u3xlmzdKID+F3PK0sfXZ73GZ6q6is="}`
   */
  consumerKey: string;
  /** Tx signer address */
  signer: string;
}
export interface MsgAssignConsumerKeyResponse {}
/**
 * MsgSubmitConsumerMisbehaviour defines a message that reports a light client attack,
 * also known as a misbehaviour, observed on a consumer chain
 */
export interface MsgSubmitConsumerMisbehaviour {
  submitter: string;
  /**
   * The Misbehaviour of the consumer chain wrapping
   * two conflicting IBC headers
   */
  misbehaviour?: Misbehaviour;
}
export interface MsgSubmitConsumerMisbehaviourResponse {}
/**
 * MsgSubmitConsumerDoubleVoting defines a message that reports
 * a double signing infraction observed on a consumer chain
 */
export interface MsgSubmitConsumerDoubleVoting {
  submitter: string;
  /**
   * The equivocation of the consumer chain wrapping
   * an evidence of a validator that signed two conflicting votes
   */
  duplicateVoteEvidence?: DuplicateVoteEvidence;
  /** The light client header of the infraction block */
  infractionBlockHeader?: Header;
}
export interface MsgSubmitConsumerDoubleVotingResponse {}
/** MsgUpdateParams is the Msg/UpdateParams request type */
export interface MsgUpdateParams {
  /** signer is the address of the governance account. */
  authority: string;
  /** params defines the x/provider parameters to update. */
  params: Params;
}
export interface MsgUpdateParamsResponse {}
/**
 * MsgConsumerAddition defines the message used to spawn a new consumer chain using a v1 governance proposal.
 * If it passes, then all validators on the provider chain are expected to validate
 * the consumer chain at spawn time or get slashed.
 * It is recommended that spawn time occurs after the proposal end time.
 *
 * Note: this replaces ConsumerAdditionProposal which is deprecated and will be removed soon
 */
export interface MsgConsumerAddition {
  /**
   * the proposed chain-id of the new consumer chain, must be different from all
   * other consumer chain ids of the executing provider chain.
   */
  chainId: string;
  /**
   * the proposed initial height of new consumer chain.
   * For a completely new chain, this will be {0,1}. However, it may be
   * different if this is a chain that is converting to a consumer chain.
   */
  initialHeight: Height;
  /**
   * The hash of the consumer chain genesis state without the consumer CCV
   * module genesis params. It is used for off-chain confirmation of
   * genesis.json validity by validators and other parties.
   */
  genesisHash: Uint8Array;
  /**
   * The hash of the consumer chain binary that should be run by validators on
   * chain initialization. It is used for off-chain confirmation of binary
   * validity by validators and other parties.
   */
  binaryHash: Uint8Array;
  /**
   * spawn time is the time on the provider chain at which the consumer chain
   * genesis is finalized and all validators will be responsible for starting
   * their consumer chain validator node.
   */
  spawnTime: Timestamp;
  /**
   * Unbonding period for the consumer,
   * which should be smaller than that of the provider in general.
   */
  unbondingPeriod: Duration;
  /** Sent CCV related IBC packets will timeout after this duration */
  ccvTimeoutPeriod: Duration;
  /** Sent transfer related IBC packets will timeout after this duration */
  transferTimeoutPeriod: Duration;
  /**
   * The fraction of tokens allocated to the consumer redistribution address
   * during distribution events. The fraction is a string representing a
   * decimal number. For example "0.75" would represent 75%.
   */
  consumerRedistributionFraction: string;
  /**
   * BlocksPerDistributionTransmission is the number of blocks between
   * ibc-token-transfers from the consumer chain to the provider chain. On
   * sending transmission event, `consumer_redistribution_fraction` of the
   * accumulated tokens are sent to the consumer redistribution address.
   */
  blocksPerDistributionTransmission: bigint;
  /**
   * The number of historical info entries to persist in store.
   * This param is a part of the cosmos sdk staking module. In the case of
   * a ccv enabled consumer chain, the ccv module acts as the staking module.
   */
  historicalEntries: bigint;
  /**
   * The ID of a token transfer channel used for the Reward Distribution
   * sub-protocol. If DistributionTransmissionChannel == "", a new transfer
   * channel is created on top of the same connection as the CCV channel.
   * Note that transfer_channel_id is the ID of the channel end on the consumer
   * chain. it is most relevant for chains performing a sovereign to consumer
   * changeover in order to maintan the existing ibc transfer channel
   */
  distributionTransmissionChannel: string;
  /**
   * Corresponds to the percentage of validators that have to validate the chain under the Top N case.
   * For example, 53 corresponds to a Top 53% chain, meaning that the top 53% provider validators by voting power
   * have to validate the proposed consumer chain. top_N can either be 0 or any value in [50, 100].
   * A chain can join with top_N == 0 as an Opt In chain, or with top_N ∈ [50, 100] as a Top N chain.
   */
  topN: number;
  /**
   * Corresponds to the maximum power (percentage-wise) a validator can have on the consumer chain. For instance, if
   * `validators_power_cap` is set to 32, it means that no validator can have more than 32% of the voting power on the
   * consumer chain. Note that this might not be feasible. For example, think of a consumer chain with only
   * 5 validators and with `validators_power_cap` set to 10%. In such a scenario, at least one validator would need
   * to have more than 20% of the total voting power. Therefore, `validators_power_cap` operates on a best-effort basis.
   */
  validatorsPowerCap: number;
  /**
   * Corresponds to the maximum number of validators that can validate a consumer chain.
   * Only applicable to Opt In chains. Setting `validator_set_cap` on a Top N chain is a no-op.
   */
  validatorSetCap: number;
  /**
   * Corresponds to a list of provider consensus addresses of validators that are the ONLY ones that can validate
   * the consumer chain.
   */
  allowlist: string[];
  /** Corresponds to a list of provider consensus addresses of validators that CANNOT validate the consumer chain. */
  denylist: string[];
  /** signer address */
  authority: string;
}
/** MsgConsumerAdditionResponse defines response type for MsgConsumerAddition messages */
export interface MsgConsumerAdditionResponse {}
/**
 * MsgConsumerRemoval message contains a governance proposal on the provider chain to
 * remove (and stop) a consumer chain. If it passes, all the consumer chain's
 * state is removed from the provider chain. The outstanding unbonding operation
 * funds are released.
 *
 * Note: this replaces ConsumerRemovalProposal which is deprecated and will be removed soon
 */
export interface MsgConsumerRemoval {
  /** the chain-id of the consumer chain to be stopped */
  chainId: string;
  /**
   * the time on the provider chain at which all validators are responsible to
   * stop their consumer chain validator node
   */
  stopTime: Timestamp;
  /** signer address */
  authority: string;
}
/** MsgConsumerRemovalResponse defines response type for MsgConsumerRemoval messages */
export interface MsgConsumerRemovalResponse {}
/**
 * ChangeRewardDenomsProposal is a governance proposal on the provider chain to
 * mutate the set of denoms accepted by the provider as rewards.
 *
 * Note: this replaces ChangeRewardDenomsProposal which is deprecated and will be removed soon
 */
export interface MsgChangeRewardDenoms {
  /** the list of consumer reward denoms to add */
  denomsToAdd: string[];
  /** the list of consumer reward denoms to remove */
  denomsToRemove: string[];
  /** signer address */
  authority: string;
}
/** MsgChangeRewardDenomsResponse defines response type for MsgChangeRewardDenoms messages */
export interface MsgChangeRewardDenomsResponse {}
export interface MsgOptIn {
  /** the chain id of the consumer chain to opt in to */
  chainId: string;
  /** the validator address on the provider */
  providerAddr: string;
  /**
   * (optional) The consensus public key to use on the consumer in json string format corresponding to proto-any,
   * for example `{"@type":"/cosmos.crypto.ed25519.PubKey","key":"Ui5Gf1+mtWUdH8u3xlmzdKID+F3PK0sfXZ73GZ6q6is="}`.
   * This field is optional and can remain empty (i.e., `consumer_key = ""`). A validator can always change the
   * consumer public key at a later stage by issuing a `MsgAssignConsumerKey` message.
   */
  consumerKey: string;
  /** signer address */
  signer: string;
}
export interface MsgOptInResponse {}
export interface MsgOptOut {
  /** the chain id of the consumer chain to opt out from */
  chainId: string;
  /** the validator address on the provider */
  providerAddr: string;
  /** signer address */
  signer: string;
}
export interface MsgOptOutResponse {}
/**
 * MsgSetConsumerCommissionRate allows validators to set
 * a per-consumer chain commission rate
 */
export interface MsgSetConsumerCommissionRate {
  /** The validator address on the provider */
  providerAddr: string;
  /** The chain id of the consumer chain to set a commission rate */
  chainId: string;
  /**
   * The rate to charge delegators on the consumer chain, as a fraction
   * TODO: migrate rate from sdk.Dec to math.LegacyDec
   */
  rate: string;
  /** signer address */
  signer: string;
}
export interface MsgSetConsumerCommissionRateResponse {}
/**
 * MsgConsumerModification message contains a governance proposal on the provider chain to
 * modify a running consumer chain. If it passes, the consumer chain's
 * parameters are updated.
 *
 * Note: this replaces ConsumerModificationProposal which is deprecated and will be removed soon
 */
export interface MsgConsumerModification {
  /** the title of the proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the chain-id of the consumer chain to be modified */
  chainId: string;
  /**
   * Corresponds to the percentage of validators that have to validate the chain under the Top N case.
   * For example, 53 corresponds to a Top 53% chain, meaning that the top 53% provider validators by voting power
   * have to validate the proposed consumer chain. top_N can either be 0 or any value in [50, 100].
   * A chain can join with top_N == 0 as an Opt In chain, or with top_N ∈ [50, 100] as a Top N chain.
   */
  topN: number;
  /**
   * Corresponds to the maximum power (percentage-wise) a validator can have on the consumer chain. For instance, if
   * `validators_power_cap` is set to 32, it means that no validator can have more than 32% of the voting power on the
   * consumer chain. Note that this might not be feasible. For example, think of a consumer chain with only
   * 5 validators and with `validators_power_cap` set to 10%. In such a scenario, at least one validator would need
   * to have more than 20% of the total voting power. Therefore, `validators_power_cap` operates on a best-effort basis.
   */
  validatorsPowerCap: number;
  /**
   * Corresponds to the maximum number of validators that can validate a consumer chain.
   * Only applicable to Opt In chains. Setting `validator_set_cap` on a Top N chain is a no-op.
   */
  validatorSetCap: number;
  /**
   * Corresponds to a list of provider consensus addresses of validators that are the ONLY ones that can validate
   * the consumer chain.
   */
  allowlist: string[];
  /** Corresponds to a list of provider consensus addresses of validators that CANNOT validate the consumer chain. */
  denylist: string[];
  /** signer address */
  authority: string;
}
export interface MsgConsumerModificationResponse {}
function createBaseMsgAssignConsumerKey(): MsgAssignConsumerKey {
  return {
    chainId: "",
    providerAddr: "",
    consumerKey: "",
    signer: "",
  };
}
export const MsgAssignConsumerKey = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgAssignConsumerKey",
  encode(message: MsgAssignConsumerKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.providerAddr !== "") {
      writer.uint32(18).string(message.providerAddr);
    }
    if (message.consumerKey !== "") {
      writer.uint32(26).string(message.consumerKey);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAssignConsumerKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignConsumerKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.providerAddr = reader.string();
          break;
        case 3:
          message.consumerKey = reader.string();
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
  fromJSON(object: any): MsgAssignConsumerKey {
    const obj = createBaseMsgAssignConsumerKey();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.providerAddr)) obj.providerAddr = String(object.providerAddr);
    if (isSet(object.consumerKey)) obj.consumerKey = String(object.consumerKey);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgAssignConsumerKey): JsonSafe<MsgAssignConsumerKey> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.providerAddr !== undefined && (obj.providerAddr = message.providerAddr);
    message.consumerKey !== undefined && (obj.consumerKey = message.consumerKey);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAssignConsumerKey>, I>>(object: I): MsgAssignConsumerKey {
    const message = createBaseMsgAssignConsumerKey();
    message.chainId = object.chainId ?? "";
    message.providerAddr = object.providerAddr ?? "";
    message.consumerKey = object.consumerKey ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgAssignConsumerKeyResponse(): MsgAssignConsumerKeyResponse {
  return {};
}
export const MsgAssignConsumerKeyResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgAssignConsumerKeyResponse",
  encode(_: MsgAssignConsumerKeyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAssignConsumerKeyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAssignConsumerKeyResponse();
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
  fromJSON(_: any): MsgAssignConsumerKeyResponse {
    const obj = createBaseMsgAssignConsumerKeyResponse();
    return obj;
  },
  toJSON(_: MsgAssignConsumerKeyResponse): JsonSafe<MsgAssignConsumerKeyResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgAssignConsumerKeyResponse>, I>>(
    _: I,
  ): MsgAssignConsumerKeyResponse {
    const message = createBaseMsgAssignConsumerKeyResponse();
    return message;
  },
};
function createBaseMsgSubmitConsumerMisbehaviour(): MsgSubmitConsumerMisbehaviour {
  return {
    submitter: "",
    misbehaviour: undefined,
  };
}
export const MsgSubmitConsumerMisbehaviour = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgSubmitConsumerMisbehaviour",
  encode(message: MsgSubmitConsumerMisbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.misbehaviour !== undefined) {
      Misbehaviour.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitConsumerMisbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitConsumerMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.misbehaviour = Misbehaviour.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitConsumerMisbehaviour {
    const obj = createBaseMsgSubmitConsumerMisbehaviour();
    if (isSet(object.submitter)) obj.submitter = String(object.submitter);
    if (isSet(object.misbehaviour)) obj.misbehaviour = Misbehaviour.fromJSON(object.misbehaviour);
    return obj;
  },
  toJSON(message: MsgSubmitConsumerMisbehaviour): JsonSafe<MsgSubmitConsumerMisbehaviour> {
    const obj: any = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.misbehaviour !== undefined &&
      (obj.misbehaviour = message.misbehaviour ? Misbehaviour.toJSON(message.misbehaviour) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitConsumerMisbehaviour>, I>>(
    object: I,
  ): MsgSubmitConsumerMisbehaviour {
    const message = createBaseMsgSubmitConsumerMisbehaviour();
    message.submitter = object.submitter ?? "";
    if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
      message.misbehaviour = Misbehaviour.fromPartial(object.misbehaviour);
    }
    return message;
  },
};
function createBaseMsgSubmitConsumerMisbehaviourResponse(): MsgSubmitConsumerMisbehaviourResponse {
  return {};
}
export const MsgSubmitConsumerMisbehaviourResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgSubmitConsumerMisbehaviourResponse",
  encode(
    _: MsgSubmitConsumerMisbehaviourResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitConsumerMisbehaviourResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitConsumerMisbehaviourResponse();
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
  fromJSON(_: any): MsgSubmitConsumerMisbehaviourResponse {
    const obj = createBaseMsgSubmitConsumerMisbehaviourResponse();
    return obj;
  },
  toJSON(_: MsgSubmitConsumerMisbehaviourResponse): JsonSafe<MsgSubmitConsumerMisbehaviourResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitConsumerMisbehaviourResponse>, I>>(
    _: I,
  ): MsgSubmitConsumerMisbehaviourResponse {
    const message = createBaseMsgSubmitConsumerMisbehaviourResponse();
    return message;
  },
};
function createBaseMsgSubmitConsumerDoubleVoting(): MsgSubmitConsumerDoubleVoting {
  return {
    submitter: "",
    duplicateVoteEvidence: undefined,
    infractionBlockHeader: undefined,
  };
}
export const MsgSubmitConsumerDoubleVoting = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgSubmitConsumerDoubleVoting",
  encode(message: MsgSubmitConsumerDoubleVoting, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.submitter !== "") {
      writer.uint32(10).string(message.submitter);
    }
    if (message.duplicateVoteEvidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(18).fork()).ldelim();
    }
    if (message.infractionBlockHeader !== undefined) {
      Header.encode(message.infractionBlockHeader, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitConsumerDoubleVoting {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitConsumerDoubleVoting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.submitter = reader.string();
          break;
        case 2:
          message.duplicateVoteEvidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 3:
          message.infractionBlockHeader = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitConsumerDoubleVoting {
    const obj = createBaseMsgSubmitConsumerDoubleVoting();
    if (isSet(object.submitter)) obj.submitter = String(object.submitter);
    if (isSet(object.duplicateVoteEvidence))
      obj.duplicateVoteEvidence = DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence);
    if (isSet(object.infractionBlockHeader))
      obj.infractionBlockHeader = Header.fromJSON(object.infractionBlockHeader);
    return obj;
  },
  toJSON(message: MsgSubmitConsumerDoubleVoting): JsonSafe<MsgSubmitConsumerDoubleVoting> {
    const obj: any = {};
    message.submitter !== undefined && (obj.submitter = message.submitter);
    message.duplicateVoteEvidence !== undefined &&
      (obj.duplicateVoteEvidence = message.duplicateVoteEvidence
        ? DuplicateVoteEvidence.toJSON(message.duplicateVoteEvidence)
        : undefined);
    message.infractionBlockHeader !== undefined &&
      (obj.infractionBlockHeader = message.infractionBlockHeader
        ? Header.toJSON(message.infractionBlockHeader)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitConsumerDoubleVoting>, I>>(
    object: I,
  ): MsgSubmitConsumerDoubleVoting {
    const message = createBaseMsgSubmitConsumerDoubleVoting();
    message.submitter = object.submitter ?? "";
    if (object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null) {
      message.duplicateVoteEvidence = DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence);
    }
    if (object.infractionBlockHeader !== undefined && object.infractionBlockHeader !== null) {
      message.infractionBlockHeader = Header.fromPartial(object.infractionBlockHeader);
    }
    return message;
  },
};
function createBaseMsgSubmitConsumerDoubleVotingResponse(): MsgSubmitConsumerDoubleVotingResponse {
  return {};
}
export const MsgSubmitConsumerDoubleVotingResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgSubmitConsumerDoubleVotingResponse",
  encode(
    _: MsgSubmitConsumerDoubleVotingResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitConsumerDoubleVotingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitConsumerDoubleVotingResponse();
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
  fromJSON(_: any): MsgSubmitConsumerDoubleVotingResponse {
    const obj = createBaseMsgSubmitConsumerDoubleVotingResponse();
    return obj;
  },
  toJSON(_: MsgSubmitConsumerDoubleVotingResponse): JsonSafe<MsgSubmitConsumerDoubleVotingResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitConsumerDoubleVotingResponse>, I>>(
    _: I,
  ): MsgSubmitConsumerDoubleVotingResponse {
    const message = createBaseMsgSubmitConsumerDoubleVotingResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgUpdateParams",
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
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgUpdateParamsResponse",
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
};
function createBaseMsgConsumerAddition(): MsgConsumerAddition {
  return {
    chainId: "",
    initialHeight: Height.fromPartial({}),
    genesisHash: new Uint8Array(),
    binaryHash: new Uint8Array(),
    spawnTime: Timestamp.fromPartial({}),
    unbondingPeriod: Duration.fromPartial({}),
    ccvTimeoutPeriod: Duration.fromPartial({}),
    transferTimeoutPeriod: Duration.fromPartial({}),
    consumerRedistributionFraction: "",
    blocksPerDistributionTransmission: BigInt(0),
    historicalEntries: BigInt(0),
    distributionTransmissionChannel: "",
    topN: 0,
    validatorsPowerCap: 0,
    validatorSetCap: 0,
    allowlist: [],
    denylist: [],
    authority: "",
  };
}
export const MsgConsumerAddition = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgConsumerAddition",
  encode(message: MsgConsumerAddition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.initialHeight !== undefined) {
      Height.encode(message.initialHeight, writer.uint32(18).fork()).ldelim();
    }
    if (message.genesisHash.length !== 0) {
      writer.uint32(26).bytes(message.genesisHash);
    }
    if (message.binaryHash.length !== 0) {
      writer.uint32(34).bytes(message.binaryHash);
    }
    if (message.spawnTime !== undefined) {
      Timestamp.encode(message.spawnTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.unbondingPeriod !== undefined) {
      Duration.encode(message.unbondingPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.ccvTimeoutPeriod !== undefined) {
      Duration.encode(message.ccvTimeoutPeriod, writer.uint32(58).fork()).ldelim();
    }
    if (message.transferTimeoutPeriod !== undefined) {
      Duration.encode(message.transferTimeoutPeriod, writer.uint32(66).fork()).ldelim();
    }
    if (message.consumerRedistributionFraction !== "") {
      writer.uint32(74).string(message.consumerRedistributionFraction);
    }
    if (message.blocksPerDistributionTransmission !== BigInt(0)) {
      writer.uint32(80).int64(message.blocksPerDistributionTransmission);
    }
    if (message.historicalEntries !== BigInt(0)) {
      writer.uint32(88).int64(message.historicalEntries);
    }
    if (message.distributionTransmissionChannel !== "") {
      writer.uint32(98).string(message.distributionTransmissionChannel);
    }
    if (message.topN !== 0) {
      writer.uint32(104).uint32(message.topN);
    }
    if (message.validatorsPowerCap !== 0) {
      writer.uint32(112).uint32(message.validatorsPowerCap);
    }
    if (message.validatorSetCap !== 0) {
      writer.uint32(120).uint32(message.validatorSetCap);
    }
    for (const v of message.allowlist) {
      writer.uint32(130).string(v!);
    }
    for (const v of message.denylist) {
      writer.uint32(138).string(v!);
    }
    if (message.authority !== "") {
      writer.uint32(146).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConsumerAddition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConsumerAddition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.initialHeight = Height.decode(reader, reader.uint32());
          break;
        case 3:
          message.genesisHash = reader.bytes();
          break;
        case 4:
          message.binaryHash = reader.bytes();
          break;
        case 5:
          message.spawnTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.unbondingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.ccvTimeoutPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 8:
          message.transferTimeoutPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.consumerRedistributionFraction = reader.string();
          break;
        case 10:
          message.blocksPerDistributionTransmission = reader.int64();
          break;
        case 11:
          message.historicalEntries = reader.int64();
          break;
        case 12:
          message.distributionTransmissionChannel = reader.string();
          break;
        case 13:
          message.topN = reader.uint32();
          break;
        case 14:
          message.validatorsPowerCap = reader.uint32();
          break;
        case 15:
          message.validatorSetCap = reader.uint32();
          break;
        case 16:
          message.allowlist.push(reader.string());
          break;
        case 17:
          message.denylist.push(reader.string());
          break;
        case 18:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConsumerAddition {
    const obj = createBaseMsgConsumerAddition();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.initialHeight)) obj.initialHeight = Height.fromJSON(object.initialHeight);
    if (isSet(object.genesisHash)) obj.genesisHash = bytesFromBase64(object.genesisHash);
    if (isSet(object.binaryHash)) obj.binaryHash = bytesFromBase64(object.binaryHash);
    if (isSet(object.spawnTime)) obj.spawnTime = fromJsonTimestamp(object.spawnTime);
    if (isSet(object.unbondingPeriod)) obj.unbondingPeriod = Duration.fromJSON(object.unbondingPeriod);
    if (isSet(object.ccvTimeoutPeriod)) obj.ccvTimeoutPeriod = Duration.fromJSON(object.ccvTimeoutPeriod);
    if (isSet(object.transferTimeoutPeriod))
      obj.transferTimeoutPeriod = Duration.fromJSON(object.transferTimeoutPeriod);
    if (isSet(object.consumerRedistributionFraction))
      obj.consumerRedistributionFraction = String(object.consumerRedistributionFraction);
    if (isSet(object.blocksPerDistributionTransmission))
      obj.blocksPerDistributionTransmission = BigInt(object.blocksPerDistributionTransmission.toString());
    if (isSet(object.historicalEntries)) obj.historicalEntries = BigInt(object.historicalEntries.toString());
    if (isSet(object.distributionTransmissionChannel))
      obj.distributionTransmissionChannel = String(object.distributionTransmissionChannel);
    if (isSet(object.topN)) obj.topN = Number(object.topN);
    if (isSet(object.validatorsPowerCap)) obj.validatorsPowerCap = Number(object.validatorsPowerCap);
    if (isSet(object.validatorSetCap)) obj.validatorSetCap = Number(object.validatorSetCap);
    if (Array.isArray(object?.allowlist)) obj.allowlist = object.allowlist.map((e: any) => String(e));
    if (Array.isArray(object?.denylist)) obj.denylist = object.denylist.map((e: any) => String(e));
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgConsumerAddition): JsonSafe<MsgConsumerAddition> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.initialHeight !== undefined &&
      (obj.initialHeight = message.initialHeight ? Height.toJSON(message.initialHeight) : undefined);
    message.genesisHash !== undefined &&
      (obj.genesisHash = base64FromBytes(
        message.genesisHash !== undefined ? message.genesisHash : new Uint8Array(),
      ));
    message.binaryHash !== undefined &&
      (obj.binaryHash = base64FromBytes(
        message.binaryHash !== undefined ? message.binaryHash : new Uint8Array(),
      ));
    message.spawnTime !== undefined && (obj.spawnTime = fromTimestamp(message.spawnTime).toISOString());
    message.unbondingPeriod !== undefined &&
      (obj.unbondingPeriod = message.unbondingPeriod ? Duration.toJSON(message.unbondingPeriod) : undefined);
    message.ccvTimeoutPeriod !== undefined &&
      (obj.ccvTimeoutPeriod = message.ccvTimeoutPeriod
        ? Duration.toJSON(message.ccvTimeoutPeriod)
        : undefined);
    message.transferTimeoutPeriod !== undefined &&
      (obj.transferTimeoutPeriod = message.transferTimeoutPeriod
        ? Duration.toJSON(message.transferTimeoutPeriod)
        : undefined);
    message.consumerRedistributionFraction !== undefined &&
      (obj.consumerRedistributionFraction = message.consumerRedistributionFraction);
    message.blocksPerDistributionTransmission !== undefined &&
      (obj.blocksPerDistributionTransmission = (
        message.blocksPerDistributionTransmission || BigInt(0)
      ).toString());
    message.historicalEntries !== undefined &&
      (obj.historicalEntries = (message.historicalEntries || BigInt(0)).toString());
    message.distributionTransmissionChannel !== undefined &&
      (obj.distributionTransmissionChannel = message.distributionTransmissionChannel);
    message.topN !== undefined && (obj.topN = Math.round(message.topN));
    message.validatorsPowerCap !== undefined &&
      (obj.validatorsPowerCap = Math.round(message.validatorsPowerCap));
    message.validatorSetCap !== undefined && (obj.validatorSetCap = Math.round(message.validatorSetCap));
    if (message.allowlist) {
      obj.allowlist = message.allowlist.map((e) => e);
    } else {
      obj.allowlist = [];
    }
    if (message.denylist) {
      obj.denylist = message.denylist.map((e) => e);
    } else {
      obj.denylist = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConsumerAddition>, I>>(object: I): MsgConsumerAddition {
    const message = createBaseMsgConsumerAddition();
    message.chainId = object.chainId ?? "";
    if (object.initialHeight !== undefined && object.initialHeight !== null) {
      message.initialHeight = Height.fromPartial(object.initialHeight);
    }
    message.genesisHash = object.genesisHash ?? new Uint8Array();
    message.binaryHash = object.binaryHash ?? new Uint8Array();
    if (object.spawnTime !== undefined && object.spawnTime !== null) {
      message.spawnTime = Timestamp.fromPartial(object.spawnTime);
    }
    if (object.unbondingPeriod !== undefined && object.unbondingPeriod !== null) {
      message.unbondingPeriod = Duration.fromPartial(object.unbondingPeriod);
    }
    if (object.ccvTimeoutPeriod !== undefined && object.ccvTimeoutPeriod !== null) {
      message.ccvTimeoutPeriod = Duration.fromPartial(object.ccvTimeoutPeriod);
    }
    if (object.transferTimeoutPeriod !== undefined && object.transferTimeoutPeriod !== null) {
      message.transferTimeoutPeriod = Duration.fromPartial(object.transferTimeoutPeriod);
    }
    message.consumerRedistributionFraction = object.consumerRedistributionFraction ?? "";
    if (
      object.blocksPerDistributionTransmission !== undefined &&
      object.blocksPerDistributionTransmission !== null
    ) {
      message.blocksPerDistributionTransmission = BigInt(object.blocksPerDistributionTransmission.toString());
    }
    if (object.historicalEntries !== undefined && object.historicalEntries !== null) {
      message.historicalEntries = BigInt(object.historicalEntries.toString());
    }
    message.distributionTransmissionChannel = object.distributionTransmissionChannel ?? "";
    message.topN = object.topN ?? 0;
    message.validatorsPowerCap = object.validatorsPowerCap ?? 0;
    message.validatorSetCap = object.validatorSetCap ?? 0;
    message.allowlist = object.allowlist?.map((e) => e) || [];
    message.denylist = object.denylist?.map((e) => e) || [];
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseMsgConsumerAdditionResponse(): MsgConsumerAdditionResponse {
  return {};
}
export const MsgConsumerAdditionResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgConsumerAdditionResponse",
  encode(_: MsgConsumerAdditionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConsumerAdditionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConsumerAdditionResponse();
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
  fromJSON(_: any): MsgConsumerAdditionResponse {
    const obj = createBaseMsgConsumerAdditionResponse();
    return obj;
  },
  toJSON(_: MsgConsumerAdditionResponse): JsonSafe<MsgConsumerAdditionResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConsumerAdditionResponse>, I>>(
    _: I,
  ): MsgConsumerAdditionResponse {
    const message = createBaseMsgConsumerAdditionResponse();
    return message;
  },
};
function createBaseMsgConsumerRemoval(): MsgConsumerRemoval {
  return {
    chainId: "",
    stopTime: Timestamp.fromPartial({}),
    authority: "",
  };
}
export const MsgConsumerRemoval = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgConsumerRemoval",
  encode(message: MsgConsumerRemoval, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.stopTime !== undefined) {
      Timestamp.encode(message.stopTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConsumerRemoval {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConsumerRemoval();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.stopTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConsumerRemoval {
    const obj = createBaseMsgConsumerRemoval();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.stopTime)) obj.stopTime = fromJsonTimestamp(object.stopTime);
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgConsumerRemoval): JsonSafe<MsgConsumerRemoval> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.stopTime !== undefined && (obj.stopTime = fromTimestamp(message.stopTime).toISOString());
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConsumerRemoval>, I>>(object: I): MsgConsumerRemoval {
    const message = createBaseMsgConsumerRemoval();
    message.chainId = object.chainId ?? "";
    if (object.stopTime !== undefined && object.stopTime !== null) {
      message.stopTime = Timestamp.fromPartial(object.stopTime);
    }
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseMsgConsumerRemovalResponse(): MsgConsumerRemovalResponse {
  return {};
}
export const MsgConsumerRemovalResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgConsumerRemovalResponse",
  encode(_: MsgConsumerRemovalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConsumerRemovalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConsumerRemovalResponse();
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
  fromJSON(_: any): MsgConsumerRemovalResponse {
    const obj = createBaseMsgConsumerRemovalResponse();
    return obj;
  },
  toJSON(_: MsgConsumerRemovalResponse): JsonSafe<MsgConsumerRemovalResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConsumerRemovalResponse>, I>>(_: I): MsgConsumerRemovalResponse {
    const message = createBaseMsgConsumerRemovalResponse();
    return message;
  },
};
function createBaseMsgChangeRewardDenoms(): MsgChangeRewardDenoms {
  return {
    denomsToAdd: [],
    denomsToRemove: [],
    authority: "",
  };
}
export const MsgChangeRewardDenoms = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgChangeRewardDenoms",
  encode(message: MsgChangeRewardDenoms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomsToAdd) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.denomsToRemove) {
      writer.uint32(18).string(v!);
    }
    if (message.authority !== "") {
      writer.uint32(26).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeRewardDenoms {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeRewardDenoms();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomsToAdd.push(reader.string());
          break;
        case 2:
          message.denomsToRemove.push(reader.string());
          break;
        case 3:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChangeRewardDenoms {
    const obj = createBaseMsgChangeRewardDenoms();
    if (Array.isArray(object?.denomsToAdd)) obj.denomsToAdd = object.denomsToAdd.map((e: any) => String(e));
    if (Array.isArray(object?.denomsToRemove))
      obj.denomsToRemove = object.denomsToRemove.map((e: any) => String(e));
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgChangeRewardDenoms): JsonSafe<MsgChangeRewardDenoms> {
    const obj: any = {};
    if (message.denomsToAdd) {
      obj.denomsToAdd = message.denomsToAdd.map((e) => e);
    } else {
      obj.denomsToAdd = [];
    }
    if (message.denomsToRemove) {
      obj.denomsToRemove = message.denomsToRemove.map((e) => e);
    } else {
      obj.denomsToRemove = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChangeRewardDenoms>, I>>(object: I): MsgChangeRewardDenoms {
    const message = createBaseMsgChangeRewardDenoms();
    message.denomsToAdd = object.denomsToAdd?.map((e) => e) || [];
    message.denomsToRemove = object.denomsToRemove?.map((e) => e) || [];
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseMsgChangeRewardDenomsResponse(): MsgChangeRewardDenomsResponse {
  return {};
}
export const MsgChangeRewardDenomsResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgChangeRewardDenomsResponse",
  encode(_: MsgChangeRewardDenomsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeRewardDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChangeRewardDenomsResponse();
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
  fromJSON(_: any): MsgChangeRewardDenomsResponse {
    const obj = createBaseMsgChangeRewardDenomsResponse();
    return obj;
  },
  toJSON(_: MsgChangeRewardDenomsResponse): JsonSafe<MsgChangeRewardDenomsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgChangeRewardDenomsResponse>, I>>(
    _: I,
  ): MsgChangeRewardDenomsResponse {
    const message = createBaseMsgChangeRewardDenomsResponse();
    return message;
  },
};
function createBaseMsgOptIn(): MsgOptIn {
  return {
    chainId: "",
    providerAddr: "",
    consumerKey: "",
    signer: "",
  };
}
export const MsgOptIn = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgOptIn",
  encode(message: MsgOptIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.providerAddr !== "") {
      writer.uint32(18).string(message.providerAddr);
    }
    if (message.consumerKey !== "") {
      writer.uint32(26).string(message.consumerKey);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOptIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOptIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.providerAddr = reader.string();
          break;
        case 3:
          message.consumerKey = reader.string();
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
  fromJSON(object: any): MsgOptIn {
    const obj = createBaseMsgOptIn();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.providerAddr)) obj.providerAddr = String(object.providerAddr);
    if (isSet(object.consumerKey)) obj.consumerKey = String(object.consumerKey);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgOptIn): JsonSafe<MsgOptIn> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.providerAddr !== undefined && (obj.providerAddr = message.providerAddr);
    message.consumerKey !== undefined && (obj.consumerKey = message.consumerKey);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgOptIn>, I>>(object: I): MsgOptIn {
    const message = createBaseMsgOptIn();
    message.chainId = object.chainId ?? "";
    message.providerAddr = object.providerAddr ?? "";
    message.consumerKey = object.consumerKey ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgOptInResponse(): MsgOptInResponse {
  return {};
}
export const MsgOptInResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgOptInResponse",
  encode(_: MsgOptInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOptInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOptInResponse();
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
  fromJSON(_: any): MsgOptInResponse {
    const obj = createBaseMsgOptInResponse();
    return obj;
  },
  toJSON(_: MsgOptInResponse): JsonSafe<MsgOptInResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgOptInResponse>, I>>(_: I): MsgOptInResponse {
    const message = createBaseMsgOptInResponse();
    return message;
  },
};
function createBaseMsgOptOut(): MsgOptOut {
  return {
    chainId: "",
    providerAddr: "",
    signer: "",
  };
}
export const MsgOptOut = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgOptOut",
  encode(message: MsgOptOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.providerAddr !== "") {
      writer.uint32(18).string(message.providerAddr);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOptOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOptOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.providerAddr = reader.string();
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
  fromJSON(object: any): MsgOptOut {
    const obj = createBaseMsgOptOut();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.providerAddr)) obj.providerAddr = String(object.providerAddr);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgOptOut): JsonSafe<MsgOptOut> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.providerAddr !== undefined && (obj.providerAddr = message.providerAddr);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgOptOut>, I>>(object: I): MsgOptOut {
    const message = createBaseMsgOptOut();
    message.chainId = object.chainId ?? "";
    message.providerAddr = object.providerAddr ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgOptOutResponse(): MsgOptOutResponse {
  return {};
}
export const MsgOptOutResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgOptOutResponse",
  encode(_: MsgOptOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgOptOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOptOutResponse();
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
  fromJSON(_: any): MsgOptOutResponse {
    const obj = createBaseMsgOptOutResponse();
    return obj;
  },
  toJSON(_: MsgOptOutResponse): JsonSafe<MsgOptOutResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgOptOutResponse>, I>>(_: I): MsgOptOutResponse {
    const message = createBaseMsgOptOutResponse();
    return message;
  },
};
function createBaseMsgSetConsumerCommissionRate(): MsgSetConsumerCommissionRate {
  return {
    providerAddr: "",
    chainId: "",
    rate: "",
    signer: "",
  };
}
export const MsgSetConsumerCommissionRate = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgSetConsumerCommissionRate",
  encode(message: MsgSetConsumerCommissionRate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.providerAddr !== "") {
      writer.uint32(10).string(message.providerAddr);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.rate !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetConsumerCommissionRate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetConsumerCommissionRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerAddr = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromJSON(object: any): MsgSetConsumerCommissionRate {
    const obj = createBaseMsgSetConsumerCommissionRate();
    if (isSet(object.providerAddr)) obj.providerAddr = String(object.providerAddr);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.rate)) obj.rate = String(object.rate);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgSetConsumerCommissionRate): JsonSafe<MsgSetConsumerCommissionRate> {
    const obj: any = {};
    message.providerAddr !== undefined && (obj.providerAddr = message.providerAddr);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.rate !== undefined && (obj.rate = message.rate);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetConsumerCommissionRate>, I>>(
    object: I,
  ): MsgSetConsumerCommissionRate {
    const message = createBaseMsgSetConsumerCommissionRate();
    message.providerAddr = object.providerAddr ?? "";
    message.chainId = object.chainId ?? "";
    message.rate = object.rate ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
};
function createBaseMsgSetConsumerCommissionRateResponse(): MsgSetConsumerCommissionRateResponse {
  return {};
}
export const MsgSetConsumerCommissionRateResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgSetConsumerCommissionRateResponse",
  encode(
    _: MsgSetConsumerCommissionRateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetConsumerCommissionRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetConsumerCommissionRateResponse();
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
  fromJSON(_: any): MsgSetConsumerCommissionRateResponse {
    const obj = createBaseMsgSetConsumerCommissionRateResponse();
    return obj;
  },
  toJSON(_: MsgSetConsumerCommissionRateResponse): JsonSafe<MsgSetConsumerCommissionRateResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetConsumerCommissionRateResponse>, I>>(
    _: I,
  ): MsgSetConsumerCommissionRateResponse {
    const message = createBaseMsgSetConsumerCommissionRateResponse();
    return message;
  },
};
function createBaseMsgConsumerModification(): MsgConsumerModification {
  return {
    title: "",
    description: "",
    chainId: "",
    topN: 0,
    validatorsPowerCap: 0,
    validatorSetCap: 0,
    allowlist: [],
    denylist: [],
    authority: "",
  };
}
export const MsgConsumerModification = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgConsumerModification",
  encode(message: MsgConsumerModification, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.topN !== 0) {
      writer.uint32(32).uint32(message.topN);
    }
    if (message.validatorsPowerCap !== 0) {
      writer.uint32(40).uint32(message.validatorsPowerCap);
    }
    if (message.validatorSetCap !== 0) {
      writer.uint32(48).uint32(message.validatorSetCap);
    }
    for (const v of message.allowlist) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.denylist) {
      writer.uint32(66).string(v!);
    }
    if (message.authority !== "") {
      writer.uint32(74).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConsumerModification {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConsumerModification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.topN = reader.uint32();
          break;
        case 5:
          message.validatorsPowerCap = reader.uint32();
          break;
        case 6:
          message.validatorSetCap = reader.uint32();
          break;
        case 7:
          message.allowlist.push(reader.string());
          break;
        case 8:
          message.denylist.push(reader.string());
          break;
        case 9:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConsumerModification {
    const obj = createBaseMsgConsumerModification();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.topN)) obj.topN = Number(object.topN);
    if (isSet(object.validatorsPowerCap)) obj.validatorsPowerCap = Number(object.validatorsPowerCap);
    if (isSet(object.validatorSetCap)) obj.validatorSetCap = Number(object.validatorSetCap);
    if (Array.isArray(object?.allowlist)) obj.allowlist = object.allowlist.map((e: any) => String(e));
    if (Array.isArray(object?.denylist)) obj.denylist = object.denylist.map((e: any) => String(e));
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgConsumerModification): JsonSafe<MsgConsumerModification> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.topN !== undefined && (obj.topN = Math.round(message.topN));
    message.validatorsPowerCap !== undefined &&
      (obj.validatorsPowerCap = Math.round(message.validatorsPowerCap));
    message.validatorSetCap !== undefined && (obj.validatorSetCap = Math.round(message.validatorSetCap));
    if (message.allowlist) {
      obj.allowlist = message.allowlist.map((e) => e);
    } else {
      obj.allowlist = [];
    }
    if (message.denylist) {
      obj.denylist = message.denylist.map((e) => e);
    } else {
      obj.denylist = [];
    }
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConsumerModification>, I>>(object: I): MsgConsumerModification {
    const message = createBaseMsgConsumerModification();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    message.topN = object.topN ?? 0;
    message.validatorsPowerCap = object.validatorsPowerCap ?? 0;
    message.validatorSetCap = object.validatorSetCap ?? 0;
    message.allowlist = object.allowlist?.map((e) => e) || [];
    message.denylist = object.denylist?.map((e) => e) || [];
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseMsgConsumerModificationResponse(): MsgConsumerModificationResponse {
  return {};
}
export const MsgConsumerModificationResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.MsgConsumerModificationResponse",
  encode(_: MsgConsumerModificationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConsumerModificationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConsumerModificationResponse();
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
  fromJSON(_: any): MsgConsumerModificationResponse {
    const obj = createBaseMsgConsumerModificationResponse();
    return obj;
  },
  toJSON(_: MsgConsumerModificationResponse): JsonSafe<MsgConsumerModificationResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConsumerModificationResponse>, I>>(
    _: I,
  ): MsgConsumerModificationResponse {
    const message = createBaseMsgConsumerModificationResponse();
    return message;
  },
};
