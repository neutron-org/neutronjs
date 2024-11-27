/* eslint-disable */
import { Height } from "../../../../ibc/core/client/v1/client";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { Equivocation } from "../../../../cosmos/evidence/v1beta1/evidence";
import { ClientState } from "../../../../ibc/lightclients/tendermint/v1/tendermint";
import { Coin, DecCoin } from "../../../../cosmos/base/v1beta1/coin";
import { ValidatorSetChangePacketData } from "../../v1/wire";
import { PublicKey } from "../../../../tendermint/crypto/keys";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import {
  isSet,
  bytesFromBase64,
  fromJsonTimestamp,
  base64FromBytes,
  fromTimestamp,
  DeepPartial,
  Exact,
} from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "interchain_security.ccv.provider.v1";
/**
 * ConsumerAdditionProposal is a governance proposal on the provider chain to
 * spawn a new consumer chain. If it passes, then all validators on the provider
 * chain are expected to validate the consumer chain at spawn time or get
 * slashed. It is recommended that spawn time occurs after the proposal end
 * time.
 * Use MsgConsumerAddition to submit this proposal type.
 */
export interface ConsumerAdditionProposal {
  /** the title of the proposal */
  title: string;
  /** the description of the proposal */
  description: string;
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
   * changeover in order to maintain the existing ibc transfer channel
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
}
/**
 * ConsumerRemovalProposal is a governance proposal on the provider chain to
 * remove (and stop) a consumer chain. If it passes, all the consumer chain's
 * state is removed from the provider chain. The outstanding unbonding operation
 * funds are released.
 * Use MsgConsumerRemoval to submit this proposal type.
 */
export interface ConsumerRemovalProposal {
  /** the title of the proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the chain-id of the consumer chain to be stopped */
  chainId: string;
  /**
   * the time on the provider chain at which all validators are responsible to
   * stop their consumer chain validator node
   */
  stopTime: Timestamp;
}
/**
 * ConsumerModificationProposal is a governance proposal on the provider chain to modify parameters of a running
 * consumer chain. If it passes, the consumer chain's state is updated to take into account the newest params.
 */
export interface ConsumerModificationProposal {
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
}
/**
 * EquivocationProposal is a governance proposal on the provider chain to
 * punish a validator for equivocation on a consumer chain.
 *
 * This type is only used internally to the consumer CCV module.
 * WARNING: This message is deprecated now that equivocations can be submitted
 * and verified automatically on the provider. (see SubmitConsumerDoubleVoting in proto/interchain-security/ccv/provider/v1/tx.proto).
 */
/** @deprecated */
export interface EquivocationProposal {
  /** the title of the proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the list of equivocations that will be processed */
  equivocations: Equivocation[];
}
/**
 * ChangeRewardDenomsProposal is a governance proposal on the provider chain to
 * mutate the set of denoms accepted by the provider as rewards.
 * Use MsgChangeRewardDenoms to submit this proposal type.
 */
export interface ChangeRewardDenomsProposal {
  /** the title of the proposal */
  title: string;
  /** the description of the proposal */
  description: string;
  /** the list of consumer reward denoms to add */
  denomsToAdd: string[];
  /** the list of consumer reward denoms to remove */
  denomsToRemove: string[];
}
/**
 * A persisted queue entry indicating that a slash packet data instance needs to
 * be handled. This type belongs in the "global" queue, to coordinate slash
 * packet handling times between consumers.
 */
export interface GlobalSlashEntry {
  /**
   * Block time that slash packet was received by provider chain.
   * This field is used for store key iteration ordering.
   */
  recvTime: Timestamp;
  /** The consumer that sent a slash packet. */
  consumerChainId: string;
  /**
   * The IBC sequence number of the recv packet.
   * This field is used in the store key to ensure uniqueness.
   */
  ibcSeqNum: bigint;
  /**
   * The provider's consensus address of the validator being slashed.
   * This field is used to obtain validator power in HandleThrottleQueues.
   *
   * This field is not used in the store key, but is persisted in value bytes,
   * see QueueGlobalSlashEntry.
   */
  providerValConsAddr: Uint8Array;
}
/** Params defines the parameters for CCV Provider module */
export interface Params {
  templateClient?: ClientState;
  /**
   * TrustingPeriodFraction is used to compute the consumer and provider IBC
   * client's TrustingPeriod from the chain defined UnbondingPeriod
   */
  trustingPeriodFraction: string;
  /** Sent IBC packets will timeout after this duration */
  ccvTimeoutPeriod: Duration;
  /**
   * The channel initialization (IBC channel opening handshake) will timeout
   * after this duration
   */
  initTimeoutPeriod: Duration;
  /**
   * The VSC packets sent by the provider will timeout after this duration.
   * Note that unlike ccv_timeout_period which is an IBC param,
   * the vsc_timeout_period is a provider-side param that enables the provider
   * to timeout VSC packets even when a consumer chain is not live.
   */
  vscTimeoutPeriod: Duration;
  /** The period for which the slash meter is replenished */
  slashMeterReplenishPeriod: Duration;
  /**
   * The fraction of total voting power that is replenished to the slash meter
   * every replenish period. This param also serves as a maximum fraction of
   * total voting power that the slash meter can hold.
   */
  slashMeterReplenishFraction: string;
  /** The fee required to be paid to add a reward denom */
  consumerRewardDenomRegistrationFee: Coin;
  /** The number of blocks that comprise an epoch. */
  blocksPerEpoch: bigint;
  /** The number of epochs a validator has to validate a consumer chain in order to start receiving rewards from that chain. */
  numberOfEpochsToStartReceivingRewards: bigint;
}
/**
 * SlashAcks contains cons addresses of consumer chain validators
 * successfully slashed on the provider chain.
 */
export interface SlashAcks {
  addresses: string[];
}
/**
 * ConsumerAdditionProposals holds pending governance proposals on the provider
 * chain to spawn a new chain.
 */
export interface ConsumerAdditionProposals {
  /** proposals waiting for spawn_time to pass */
  pending: ConsumerAdditionProposal[];
}
/**
 * ConsumerRemovalProposals holds pending governance proposals on the provider
 * chain to remove (and stop) a consumer chain.
 */
export interface ConsumerRemovalProposals {
  /** proposals waiting for stop_time to pass */
  pending: ConsumerRemovalProposal[];
}
/** AddressList contains a list of consensus addresses */
export interface AddressList {
  addresses: Uint8Array[];
}
/** ChannelToChain is used to map a CCV channel ID to the consumer chainID */
export interface ChannelToChain {
  channelId: string;
  chainId: string;
}
/**
 * VscUnbondingOps contains the IDs of unbonding operations that are waiting for
 * at least one VSCMaturedPacket with vscID from a consumer chain
 */
export interface VscUnbondingOps {
  vscId: bigint;
  unbondingOpIds: bigint[];
}
/**
 * UnbondingOp contains the ids of consumer chains that need to unbond before
 * the unbonding operation with the given ID can unbond
 */
export interface UnbondingOp {
  id: bigint;
  /** consumer chains that are still unbonding */
  unbondingConsumerChains: string[];
}
export interface InitTimeoutTimestamp {
  chainId: string;
  timestamp: bigint;
}
export interface VscSendTimestamp {
  vscId: bigint;
  timestamp: Timestamp;
}
/** ValidatorSetChangePackets is a pb list of ccv.ValidatorSetChangePacketData. */
export interface ValidatorSetChangePackets {
  list: ValidatorSetChangePacketData[];
}
/**
 * MaturedUnbondingOps defines a list of ids corresponding to ids of matured
 * unbonding operations.
 */
export interface MaturedUnbondingOps {
  ids: bigint[];
}
/** ExportedVscSendTimestamps is VscSendTimestamp with chainID info for exporting to genesis */
export interface ExportedVscSendTimestamp {
  chainId: string;
  vscSendTimestamps: VscSendTimestamp[];
}
export interface KeyAssignmentReplacement {
  providerAddr: Uint8Array;
  prevCKey?: PublicKey;
  power: bigint;
}
/**
 * Used to serialize the ValidatorConsumerPubKey index from key assignment
 * ValidatorConsumerPubKey: (chainID, providerAddr consAddr) -> consumerKey
 * tmprotocrypto.PublicKey
 */
export interface ValidatorConsumerPubKey {
  chainId: string;
  providerAddr: Uint8Array;
  consumerKey?: PublicKey;
}
/**
 * Used to serialize the ValidatorConsumerAddr index from key assignment
 * ValidatorByConsumerAddr: (chainID, consumerAddr consAddr) -> providerAddr
 * consAddr
 */
export interface ValidatorByConsumerAddr {
  chainId: string;
  consumerAddr: Uint8Array;
  providerAddr: Uint8Array;
}
/**
 * Used to serialize the ConsumerAddrsToPrune index from key assignment
 * ConsumerAddrsToPrune: (chainID, vscID uint64) -> consumerAddrs AddressList
 */
export interface ConsumerAddrsToPrune {
  chainId: string;
  vscId: bigint;
  consumerAddrs?: AddressList;
}
/**
 * ConsumerValidator is used to facilitate epoch-based transitions. It contains relevant info for
 * a validator that is expected to validate on a consumer chain during an epoch.
 */
export interface ConsumerValidator {
  /** validator's consensus address on the provider chain */
  providerConsAddr: Uint8Array;
  /** voting power the validator has during this epoch */
  power: bigint;
  /** public key the validator uses on the consumer chain during this epoch */
  consumerPublicKey?: PublicKey;
  /**
   * height the validator had when it FIRST became a consumer validator
   * If a validator becomes a consumer validator at height `H` and is continuously a consumer validator for all the upcoming
   * epochs, then the height of the validator SHOULD remain `H`. This height only resets to a different height if a validator
   * stops being a consumer validator during an epoch and later becomes again a consumer validator.
   */
  joinHeight: bigint;
}
/**
 * ConsumerRewardsAllocation stores the rewards allocated by a consumer chain
 * to the consumer rewards pool. It is used to allocate the tokens to the consumer
 * opted-in validators and the community pool during BeginBlock.
 */
export interface ConsumerRewardsAllocation {
  rewards: DecCoin[];
}
function createBaseConsumerAdditionProposal(): ConsumerAdditionProposal {
  return {
    title: "",
    description: "",
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
  };
}
export const ConsumerAdditionProposal = {
  typeUrl: "/interchain_security.ccv.provider.v1.ConsumerAdditionProposal",
  encode(message: ConsumerAdditionProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.initialHeight !== undefined) {
      Height.encode(message.initialHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.genesisHash.length !== 0) {
      writer.uint32(42).bytes(message.genesisHash);
    }
    if (message.binaryHash.length !== 0) {
      writer.uint32(50).bytes(message.binaryHash);
    }
    if (message.spawnTime !== undefined) {
      Timestamp.encode(message.spawnTime, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbondingPeriod !== undefined) {
      Duration.encode(message.unbondingPeriod, writer.uint32(66).fork()).ldelim();
    }
    if (message.ccvTimeoutPeriod !== undefined) {
      Duration.encode(message.ccvTimeoutPeriod, writer.uint32(74).fork()).ldelim();
    }
    if (message.transferTimeoutPeriod !== undefined) {
      Duration.encode(message.transferTimeoutPeriod, writer.uint32(82).fork()).ldelim();
    }
    if (message.consumerRedistributionFraction !== "") {
      writer.uint32(90).string(message.consumerRedistributionFraction);
    }
    if (message.blocksPerDistributionTransmission !== BigInt(0)) {
      writer.uint32(96).int64(message.blocksPerDistributionTransmission);
    }
    if (message.historicalEntries !== BigInt(0)) {
      writer.uint32(104).int64(message.historicalEntries);
    }
    if (message.distributionTransmissionChannel !== "") {
      writer.uint32(114).string(message.distributionTransmissionChannel);
    }
    if (message.topN !== 0) {
      writer.uint32(120).uint32(message.topN);
    }
    if (message.validatorsPowerCap !== 0) {
      writer.uint32(128).uint32(message.validatorsPowerCap);
    }
    if (message.validatorSetCap !== 0) {
      writer.uint32(136).uint32(message.validatorSetCap);
    }
    for (const v of message.allowlist) {
      writer.uint32(146).string(v!);
    }
    for (const v of message.denylist) {
      writer.uint32(154).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerAdditionProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerAdditionProposal();
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
          message.initialHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.genesisHash = reader.bytes();
          break;
        case 6:
          message.binaryHash = reader.bytes();
          break;
        case 7:
          message.spawnTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 8:
          message.unbondingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 9:
          message.ccvTimeoutPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 10:
          message.transferTimeoutPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 11:
          message.consumerRedistributionFraction = reader.string();
          break;
        case 12:
          message.blocksPerDistributionTransmission = reader.int64();
          break;
        case 13:
          message.historicalEntries = reader.int64();
          break;
        case 14:
          message.distributionTransmissionChannel = reader.string();
          break;
        case 15:
          message.topN = reader.uint32();
          break;
        case 16:
          message.validatorsPowerCap = reader.uint32();
          break;
        case 17:
          message.validatorSetCap = reader.uint32();
          break;
        case 18:
          message.allowlist.push(reader.string());
          break;
        case 19:
          message.denylist.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerAdditionProposal {
    const obj = createBaseConsumerAdditionProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
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
    return obj;
  },
  toJSON(message: ConsumerAdditionProposal): JsonSafe<ConsumerAdditionProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
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
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerAdditionProposal>, I>>(
    object: I,
  ): ConsumerAdditionProposal {
    const message = createBaseConsumerAdditionProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
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
    return message;
  },
};
function createBaseConsumerRemovalProposal(): ConsumerRemovalProposal {
  return {
    title: "",
    description: "",
    chainId: "",
    stopTime: Timestamp.fromPartial({}),
  };
}
export const ConsumerRemovalProposal = {
  typeUrl: "/interchain_security.ccv.provider.v1.ConsumerRemovalProposal",
  encode(message: ConsumerRemovalProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.stopTime !== undefined) {
      Timestamp.encode(message.stopTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerRemovalProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerRemovalProposal();
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
          message.stopTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerRemovalProposal {
    const obj = createBaseConsumerRemovalProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.stopTime)) obj.stopTime = fromJsonTimestamp(object.stopTime);
    return obj;
  },
  toJSON(message: ConsumerRemovalProposal): JsonSafe<ConsumerRemovalProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.stopTime !== undefined && (obj.stopTime = fromTimestamp(message.stopTime).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerRemovalProposal>, I>>(object: I): ConsumerRemovalProposal {
    const message = createBaseConsumerRemovalProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    if (object.stopTime !== undefined && object.stopTime !== null) {
      message.stopTime = Timestamp.fromPartial(object.stopTime);
    }
    return message;
  },
};
function createBaseConsumerModificationProposal(): ConsumerModificationProposal {
  return {
    title: "",
    description: "",
    chainId: "",
    topN: 0,
    validatorsPowerCap: 0,
    validatorSetCap: 0,
    allowlist: [],
    denylist: [],
  };
}
export const ConsumerModificationProposal = {
  typeUrl: "/interchain_security.ccv.provider.v1.ConsumerModificationProposal",
  encode(message: ConsumerModificationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerModificationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerModificationProposal();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerModificationProposal {
    const obj = createBaseConsumerModificationProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.topN)) obj.topN = Number(object.topN);
    if (isSet(object.validatorsPowerCap)) obj.validatorsPowerCap = Number(object.validatorsPowerCap);
    if (isSet(object.validatorSetCap)) obj.validatorSetCap = Number(object.validatorSetCap);
    if (Array.isArray(object?.allowlist)) obj.allowlist = object.allowlist.map((e: any) => String(e));
    if (Array.isArray(object?.denylist)) obj.denylist = object.denylist.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ConsumerModificationProposal): JsonSafe<ConsumerModificationProposal> {
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
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerModificationProposal>, I>>(
    object: I,
  ): ConsumerModificationProposal {
    const message = createBaseConsumerModificationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.chainId = object.chainId ?? "";
    message.topN = object.topN ?? 0;
    message.validatorsPowerCap = object.validatorsPowerCap ?? 0;
    message.validatorSetCap = object.validatorSetCap ?? 0;
    message.allowlist = object.allowlist?.map((e) => e) || [];
    message.denylist = object.denylist?.map((e) => e) || [];
    return message;
  },
};
function createBaseEquivocationProposal(): EquivocationProposal {
  return {
    title: "",
    description: "",
    equivocations: [],
  };
}
export const EquivocationProposal = {
  typeUrl: "/interchain_security.ccv.provider.v1.EquivocationProposal",
  encode(message: EquivocationProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.equivocations) {
      Equivocation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EquivocationProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquivocationProposal();
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
          message.equivocations.push(Equivocation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EquivocationProposal {
    const obj = createBaseEquivocationProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.equivocations))
      obj.equivocations = object.equivocations.map((e: any) => Equivocation.fromJSON(e));
    return obj;
  },
  toJSON(message: EquivocationProposal): JsonSafe<EquivocationProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.equivocations) {
      obj.equivocations = message.equivocations.map((e) => (e ? Equivocation.toJSON(e) : undefined));
    } else {
      obj.equivocations = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EquivocationProposal>, I>>(object: I): EquivocationProposal {
    const message = createBaseEquivocationProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.equivocations = object.equivocations?.map((e) => Equivocation.fromPartial(e)) || [];
    return message;
  },
};
function createBaseChangeRewardDenomsProposal(): ChangeRewardDenomsProposal {
  return {
    title: "",
    description: "",
    denomsToAdd: [],
    denomsToRemove: [],
  };
}
export const ChangeRewardDenomsProposal = {
  typeUrl: "/interchain_security.ccv.provider.v1.ChangeRewardDenomsProposal",
  encode(message: ChangeRewardDenomsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.denomsToAdd) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.denomsToRemove) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChangeRewardDenomsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChangeRewardDenomsProposal();
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
          message.denomsToAdd.push(reader.string());
          break;
        case 4:
          message.denomsToRemove.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChangeRewardDenomsProposal {
    const obj = createBaseChangeRewardDenomsProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.denomsToAdd)) obj.denomsToAdd = object.denomsToAdd.map((e: any) => String(e));
    if (Array.isArray(object?.denomsToRemove))
      obj.denomsToRemove = object.denomsToRemove.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ChangeRewardDenomsProposal): JsonSafe<ChangeRewardDenomsProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
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
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChangeRewardDenomsProposal>, I>>(
    object: I,
  ): ChangeRewardDenomsProposal {
    const message = createBaseChangeRewardDenomsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denomsToAdd = object.denomsToAdd?.map((e) => e) || [];
    message.denomsToRemove = object.denomsToRemove?.map((e) => e) || [];
    return message;
  },
};
function createBaseGlobalSlashEntry(): GlobalSlashEntry {
  return {
    recvTime: Timestamp.fromPartial({}),
    consumerChainId: "",
    ibcSeqNum: BigInt(0),
    providerValConsAddr: new Uint8Array(),
  };
}
export const GlobalSlashEntry = {
  typeUrl: "/interchain_security.ccv.provider.v1.GlobalSlashEntry",
  encode(message: GlobalSlashEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.recvTime !== undefined) {
      Timestamp.encode(message.recvTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.consumerChainId !== "") {
      writer.uint32(18).string(message.consumerChainId);
    }
    if (message.ibcSeqNum !== BigInt(0)) {
      writer.uint32(24).uint64(message.ibcSeqNum);
    }
    if (message.providerValConsAddr.length !== 0) {
      writer.uint32(34).bytes(message.providerValConsAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GlobalSlashEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGlobalSlashEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recvTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.consumerChainId = reader.string();
          break;
        case 3:
          message.ibcSeqNum = reader.uint64();
          break;
        case 4:
          message.providerValConsAddr = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GlobalSlashEntry {
    const obj = createBaseGlobalSlashEntry();
    if (isSet(object.recvTime)) obj.recvTime = fromJsonTimestamp(object.recvTime);
    if (isSet(object.consumerChainId)) obj.consumerChainId = String(object.consumerChainId);
    if (isSet(object.ibcSeqNum)) obj.ibcSeqNum = BigInt(object.ibcSeqNum.toString());
    if (isSet(object.providerValConsAddr))
      obj.providerValConsAddr = bytesFromBase64(object.providerValConsAddr);
    return obj;
  },
  toJSON(message: GlobalSlashEntry): JsonSafe<GlobalSlashEntry> {
    const obj: any = {};
    message.recvTime !== undefined && (obj.recvTime = fromTimestamp(message.recvTime).toISOString());
    message.consumerChainId !== undefined && (obj.consumerChainId = message.consumerChainId);
    message.ibcSeqNum !== undefined && (obj.ibcSeqNum = (message.ibcSeqNum || BigInt(0)).toString());
    message.providerValConsAddr !== undefined &&
      (obj.providerValConsAddr = base64FromBytes(
        message.providerValConsAddr !== undefined ? message.providerValConsAddr : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GlobalSlashEntry>, I>>(object: I): GlobalSlashEntry {
    const message = createBaseGlobalSlashEntry();
    if (object.recvTime !== undefined && object.recvTime !== null) {
      message.recvTime = Timestamp.fromPartial(object.recvTime);
    }
    message.consumerChainId = object.consumerChainId ?? "";
    if (object.ibcSeqNum !== undefined && object.ibcSeqNum !== null) {
      message.ibcSeqNum = BigInt(object.ibcSeqNum.toString());
    }
    message.providerValConsAddr = object.providerValConsAddr ?? new Uint8Array();
    return message;
  },
};
function createBaseParams(): Params {
  return {
    templateClient: undefined,
    trustingPeriodFraction: "",
    ccvTimeoutPeriod: Duration.fromPartial({}),
    initTimeoutPeriod: Duration.fromPartial({}),
    vscTimeoutPeriod: Duration.fromPartial({}),
    slashMeterReplenishPeriod: Duration.fromPartial({}),
    slashMeterReplenishFraction: "",
    consumerRewardDenomRegistrationFee: Coin.fromPartial({}),
    blocksPerEpoch: BigInt(0),
    numberOfEpochsToStartReceivingRewards: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/interchain_security.ccv.provider.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.templateClient !== undefined) {
      ClientState.encode(message.templateClient, writer.uint32(10).fork()).ldelim();
    }
    if (message.trustingPeriodFraction !== "") {
      writer.uint32(18).string(message.trustingPeriodFraction);
    }
    if (message.ccvTimeoutPeriod !== undefined) {
      Duration.encode(message.ccvTimeoutPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.initTimeoutPeriod !== undefined) {
      Duration.encode(message.initTimeoutPeriod, writer.uint32(34).fork()).ldelim();
    }
    if (message.vscTimeoutPeriod !== undefined) {
      Duration.encode(message.vscTimeoutPeriod, writer.uint32(42).fork()).ldelim();
    }
    if (message.slashMeterReplenishPeriod !== undefined) {
      Duration.encode(message.slashMeterReplenishPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.slashMeterReplenishFraction !== "") {
      writer.uint32(58).string(message.slashMeterReplenishFraction);
    }
    if (message.consumerRewardDenomRegistrationFee !== undefined) {
      Coin.encode(message.consumerRewardDenomRegistrationFee, writer.uint32(74).fork()).ldelim();
    }
    if (message.blocksPerEpoch !== BigInt(0)) {
      writer.uint32(80).int64(message.blocksPerEpoch);
    }
    if (message.numberOfEpochsToStartReceivingRewards !== BigInt(0)) {
      writer.uint32(88).int64(message.numberOfEpochsToStartReceivingRewards);
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
          message.templateClient = ClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.trustingPeriodFraction = reader.string();
          break;
        case 3:
          message.ccvTimeoutPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.initTimeoutPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.vscTimeoutPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.slashMeterReplenishPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.slashMeterReplenishFraction = reader.string();
          break;
        case 9:
          message.consumerRewardDenomRegistrationFee = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.blocksPerEpoch = reader.int64();
          break;
        case 11:
          message.numberOfEpochsToStartReceivingRewards = reader.int64();
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
    if (isSet(object.templateClient)) obj.templateClient = ClientState.fromJSON(object.templateClient);
    if (isSet(object.trustingPeriodFraction))
      obj.trustingPeriodFraction = String(object.trustingPeriodFraction);
    if (isSet(object.ccvTimeoutPeriod)) obj.ccvTimeoutPeriod = Duration.fromJSON(object.ccvTimeoutPeriod);
    if (isSet(object.initTimeoutPeriod)) obj.initTimeoutPeriod = Duration.fromJSON(object.initTimeoutPeriod);
    if (isSet(object.vscTimeoutPeriod)) obj.vscTimeoutPeriod = Duration.fromJSON(object.vscTimeoutPeriod);
    if (isSet(object.slashMeterReplenishPeriod))
      obj.slashMeterReplenishPeriod = Duration.fromJSON(object.slashMeterReplenishPeriod);
    if (isSet(object.slashMeterReplenishFraction))
      obj.slashMeterReplenishFraction = String(object.slashMeterReplenishFraction);
    if (isSet(object.consumerRewardDenomRegistrationFee))
      obj.consumerRewardDenomRegistrationFee = Coin.fromJSON(object.consumerRewardDenomRegistrationFee);
    if (isSet(object.blocksPerEpoch)) obj.blocksPerEpoch = BigInt(object.blocksPerEpoch.toString());
    if (isSet(object.numberOfEpochsToStartReceivingRewards))
      obj.numberOfEpochsToStartReceivingRewards = BigInt(
        object.numberOfEpochsToStartReceivingRewards.toString(),
      );
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.templateClient !== undefined &&
      (obj.templateClient = message.templateClient ? ClientState.toJSON(message.templateClient) : undefined);
    message.trustingPeriodFraction !== undefined &&
      (obj.trustingPeriodFraction = message.trustingPeriodFraction);
    message.ccvTimeoutPeriod !== undefined &&
      (obj.ccvTimeoutPeriod = message.ccvTimeoutPeriod
        ? Duration.toJSON(message.ccvTimeoutPeriod)
        : undefined);
    message.initTimeoutPeriod !== undefined &&
      (obj.initTimeoutPeriod = message.initTimeoutPeriod
        ? Duration.toJSON(message.initTimeoutPeriod)
        : undefined);
    message.vscTimeoutPeriod !== undefined &&
      (obj.vscTimeoutPeriod = message.vscTimeoutPeriod
        ? Duration.toJSON(message.vscTimeoutPeriod)
        : undefined);
    message.slashMeterReplenishPeriod !== undefined &&
      (obj.slashMeterReplenishPeriod = message.slashMeterReplenishPeriod
        ? Duration.toJSON(message.slashMeterReplenishPeriod)
        : undefined);
    message.slashMeterReplenishFraction !== undefined &&
      (obj.slashMeterReplenishFraction = message.slashMeterReplenishFraction);
    message.consumerRewardDenomRegistrationFee !== undefined &&
      (obj.consumerRewardDenomRegistrationFee = message.consumerRewardDenomRegistrationFee
        ? Coin.toJSON(message.consumerRewardDenomRegistrationFee)
        : undefined);
    message.blocksPerEpoch !== undefined &&
      (obj.blocksPerEpoch = (message.blocksPerEpoch || BigInt(0)).toString());
    message.numberOfEpochsToStartReceivingRewards !== undefined &&
      (obj.numberOfEpochsToStartReceivingRewards = (
        message.numberOfEpochsToStartReceivingRewards || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.templateClient !== undefined && object.templateClient !== null) {
      message.templateClient = ClientState.fromPartial(object.templateClient);
    }
    message.trustingPeriodFraction = object.trustingPeriodFraction ?? "";
    if (object.ccvTimeoutPeriod !== undefined && object.ccvTimeoutPeriod !== null) {
      message.ccvTimeoutPeriod = Duration.fromPartial(object.ccvTimeoutPeriod);
    }
    if (object.initTimeoutPeriod !== undefined && object.initTimeoutPeriod !== null) {
      message.initTimeoutPeriod = Duration.fromPartial(object.initTimeoutPeriod);
    }
    if (object.vscTimeoutPeriod !== undefined && object.vscTimeoutPeriod !== null) {
      message.vscTimeoutPeriod = Duration.fromPartial(object.vscTimeoutPeriod);
    }
    if (object.slashMeterReplenishPeriod !== undefined && object.slashMeterReplenishPeriod !== null) {
      message.slashMeterReplenishPeriod = Duration.fromPartial(object.slashMeterReplenishPeriod);
    }
    message.slashMeterReplenishFraction = object.slashMeterReplenishFraction ?? "";
    if (
      object.consumerRewardDenomRegistrationFee !== undefined &&
      object.consumerRewardDenomRegistrationFee !== null
    ) {
      message.consumerRewardDenomRegistrationFee = Coin.fromPartial(
        object.consumerRewardDenomRegistrationFee,
      );
    }
    if (object.blocksPerEpoch !== undefined && object.blocksPerEpoch !== null) {
      message.blocksPerEpoch = BigInt(object.blocksPerEpoch.toString());
    }
    if (
      object.numberOfEpochsToStartReceivingRewards !== undefined &&
      object.numberOfEpochsToStartReceivingRewards !== null
    ) {
      message.numberOfEpochsToStartReceivingRewards = BigInt(
        object.numberOfEpochsToStartReceivingRewards.toString(),
      );
    }
    return message;
  },
};
function createBaseSlashAcks(): SlashAcks {
  return {
    addresses: [],
  };
}
export const SlashAcks = {
  typeUrl: "/interchain_security.ccv.provider.v1.SlashAcks",
  encode(message: SlashAcks, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SlashAcks {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashAcks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SlashAcks {
    const obj = createBaseSlashAcks();
    if (Array.isArray(object?.addresses)) obj.addresses = object.addresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: SlashAcks): JsonSafe<SlashAcks> {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SlashAcks>, I>>(object: I): SlashAcks {
    const message = createBaseSlashAcks();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};
function createBaseConsumerAdditionProposals(): ConsumerAdditionProposals {
  return {
    pending: [],
  };
}
export const ConsumerAdditionProposals = {
  typeUrl: "/interchain_security.ccv.provider.v1.ConsumerAdditionProposals",
  encode(message: ConsumerAdditionProposals, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pending) {
      ConsumerAdditionProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerAdditionProposals {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerAdditionProposals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pending.push(ConsumerAdditionProposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerAdditionProposals {
    const obj = createBaseConsumerAdditionProposals();
    if (Array.isArray(object?.pending))
      obj.pending = object.pending.map((e: any) => ConsumerAdditionProposal.fromJSON(e));
    return obj;
  },
  toJSON(message: ConsumerAdditionProposals): JsonSafe<ConsumerAdditionProposals> {
    const obj: any = {};
    if (message.pending) {
      obj.pending = message.pending.map((e) => (e ? ConsumerAdditionProposal.toJSON(e) : undefined));
    } else {
      obj.pending = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerAdditionProposals>, I>>(
    object: I,
  ): ConsumerAdditionProposals {
    const message = createBaseConsumerAdditionProposals();
    message.pending = object.pending?.map((e) => ConsumerAdditionProposal.fromPartial(e)) || [];
    return message;
  },
};
function createBaseConsumerRemovalProposals(): ConsumerRemovalProposals {
  return {
    pending: [],
  };
}
export const ConsumerRemovalProposals = {
  typeUrl: "/interchain_security.ccv.provider.v1.ConsumerRemovalProposals",
  encode(message: ConsumerRemovalProposals, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pending) {
      ConsumerRemovalProposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerRemovalProposals {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerRemovalProposals();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pending.push(ConsumerRemovalProposal.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerRemovalProposals {
    const obj = createBaseConsumerRemovalProposals();
    if (Array.isArray(object?.pending))
      obj.pending = object.pending.map((e: any) => ConsumerRemovalProposal.fromJSON(e));
    return obj;
  },
  toJSON(message: ConsumerRemovalProposals): JsonSafe<ConsumerRemovalProposals> {
    const obj: any = {};
    if (message.pending) {
      obj.pending = message.pending.map((e) => (e ? ConsumerRemovalProposal.toJSON(e) : undefined));
    } else {
      obj.pending = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerRemovalProposals>, I>>(
    object: I,
  ): ConsumerRemovalProposals {
    const message = createBaseConsumerRemovalProposals();
    message.pending = object.pending?.map((e) => ConsumerRemovalProposal.fromPartial(e)) || [];
    return message;
  },
};
function createBaseAddressList(): AddressList {
  return {
    addresses: [],
  };
}
export const AddressList = {
  typeUrl: "/interchain_security.ccv.provider.v1.AddressList",
  encode(message: AddressList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddressList {
    const obj = createBaseAddressList();
    if (Array.isArray(object?.addresses))
      obj.addresses = object.addresses.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: AddressList): JsonSafe<AddressList> {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AddressList>, I>>(object: I): AddressList {
    const message = createBaseAddressList();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};
function createBaseChannelToChain(): ChannelToChain {
  return {
    channelId: "",
    chainId: "",
  };
}
export const ChannelToChain = {
  typeUrl: "/interchain_security.ccv.provider.v1.ChannelToChain",
  encode(message: ChannelToChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChannelToChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelToChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChannelToChain {
    const obj = createBaseChannelToChain();
    if (isSet(object.channelId)) obj.channelId = String(object.channelId);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: ChannelToChain): JsonSafe<ChannelToChain> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChannelToChain>, I>>(object: I): ChannelToChain {
    const message = createBaseChannelToChain();
    message.channelId = object.channelId ?? "";
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseVscUnbondingOps(): VscUnbondingOps {
  return {
    vscId: BigInt(0),
    unbondingOpIds: [],
  };
}
export const VscUnbondingOps = {
  typeUrl: "/interchain_security.ccv.provider.v1.VscUnbondingOps",
  encode(message: VscUnbondingOps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vscId !== BigInt(0)) {
      writer.uint32(8).uint64(message.vscId);
    }
    writer.uint32(18).fork();
    for (const v of message.unbondingOpIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VscUnbondingOps {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVscUnbondingOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vscId = reader.uint64();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unbondingOpIds.push(reader.uint64());
            }
          } else {
            message.unbondingOpIds.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VscUnbondingOps {
    const obj = createBaseVscUnbondingOps();
    if (isSet(object.vscId)) obj.vscId = BigInt(object.vscId.toString());
    if (Array.isArray(object?.unbondingOpIds))
      obj.unbondingOpIds = object.unbondingOpIds.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: VscUnbondingOps): JsonSafe<VscUnbondingOps> {
    const obj: any = {};
    message.vscId !== undefined && (obj.vscId = (message.vscId || BigInt(0)).toString());
    if (message.unbondingOpIds) {
      obj.unbondingOpIds = message.unbondingOpIds.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.unbondingOpIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VscUnbondingOps>, I>>(object: I): VscUnbondingOps {
    const message = createBaseVscUnbondingOps();
    if (object.vscId !== undefined && object.vscId !== null) {
      message.vscId = BigInt(object.vscId.toString());
    }
    message.unbondingOpIds = object.unbondingOpIds?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
function createBaseUnbondingOp(): UnbondingOp {
  return {
    id: BigInt(0),
    unbondingConsumerChains: [],
  };
}
export const UnbondingOp = {
  typeUrl: "/interchain_security.ccv.provider.v1.UnbondingOp",
  encode(message: UnbondingOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.unbondingConsumerChains) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnbondingOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.unbondingConsumerChains.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnbondingOp {
    const obj = createBaseUnbondingOp();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (Array.isArray(object?.unbondingConsumerChains))
      obj.unbondingConsumerChains = object.unbondingConsumerChains.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: UnbondingOp): JsonSafe<UnbondingOp> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    if (message.unbondingConsumerChains) {
      obj.unbondingConsumerChains = message.unbondingConsumerChains.map((e) => e);
    } else {
      obj.unbondingConsumerChains = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UnbondingOp>, I>>(object: I): UnbondingOp {
    const message = createBaseUnbondingOp();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.unbondingConsumerChains = object.unbondingConsumerChains?.map((e) => e) || [];
    return message;
  },
};
function createBaseInitTimeoutTimestamp(): InitTimeoutTimestamp {
  return {
    chainId: "",
    timestamp: BigInt(0),
  };
}
export const InitTimeoutTimestamp = {
  typeUrl: "/interchain_security.ccv.provider.v1.InitTimeoutTimestamp",
  encode(message: InitTimeoutTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InitTimeoutTimestamp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInitTimeoutTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InitTimeoutTimestamp {
    const obj = createBaseInitTimeoutTimestamp();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.timestamp)) obj.timestamp = BigInt(object.timestamp.toString());
    return obj;
  },
  toJSON(message: InitTimeoutTimestamp): JsonSafe<InitTimeoutTimestamp> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InitTimeoutTimestamp>, I>>(object: I): InitTimeoutTimestamp {
    const message = createBaseInitTimeoutTimestamp();
    message.chainId = object.chainId ?? "";
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
};
function createBaseVscSendTimestamp(): VscSendTimestamp {
  return {
    vscId: BigInt(0),
    timestamp: Timestamp.fromPartial({}),
  };
}
export const VscSendTimestamp = {
  typeUrl: "/interchain_security.ccv.provider.v1.VscSendTimestamp",
  encode(message: VscSendTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vscId !== BigInt(0)) {
      writer.uint32(8).uint64(message.vscId);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VscSendTimestamp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVscSendTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vscId = reader.uint64();
          break;
        case 2:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VscSendTimestamp {
    const obj = createBaseVscSendTimestamp();
    if (isSet(object.vscId)) obj.vscId = BigInt(object.vscId.toString());
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(message: VscSendTimestamp): JsonSafe<VscSendTimestamp> {
    const obj: any = {};
    message.vscId !== undefined && (obj.vscId = (message.vscId || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VscSendTimestamp>, I>>(object: I): VscSendTimestamp {
    const message = createBaseVscSendTimestamp();
    if (object.vscId !== undefined && object.vscId !== null) {
      message.vscId = BigInt(object.vscId.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
};
function createBaseValidatorSetChangePackets(): ValidatorSetChangePackets {
  return {
    list: [],
  };
}
export const ValidatorSetChangePackets = {
  typeUrl: "/interchain_security.ccv.provider.v1.ValidatorSetChangePackets",
  encode(message: ValidatorSetChangePackets, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.list) {
      ValidatorSetChangePacketData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSetChangePackets {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSetChangePackets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(ValidatorSetChangePacketData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSetChangePackets {
    const obj = createBaseValidatorSetChangePackets();
    if (Array.isArray(object?.list))
      obj.list = object.list.map((e: any) => ValidatorSetChangePacketData.fromJSON(e));
    return obj;
  },
  toJSON(message: ValidatorSetChangePackets): JsonSafe<ValidatorSetChangePackets> {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map((e) => (e ? ValidatorSetChangePacketData.toJSON(e) : undefined));
    } else {
      obj.list = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorSetChangePackets>, I>>(
    object: I,
  ): ValidatorSetChangePackets {
    const message = createBaseValidatorSetChangePackets();
    message.list = object.list?.map((e) => ValidatorSetChangePacketData.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMaturedUnbondingOps(): MaturedUnbondingOps {
  return {
    ids: [],
  };
}
export const MaturedUnbondingOps = {
  typeUrl: "/interchain_security.ccv.provider.v1.MaturedUnbondingOps",
  encode(message: MaturedUnbondingOps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MaturedUnbondingOps {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaturedUnbondingOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MaturedUnbondingOps {
    const obj = createBaseMaturedUnbondingOps();
    if (Array.isArray(object?.ids)) obj.ids = object.ids.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: MaturedUnbondingOps): JsonSafe<MaturedUnbondingOps> {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MaturedUnbondingOps>, I>>(object: I): MaturedUnbondingOps {
    const message = createBaseMaturedUnbondingOps();
    message.ids = object.ids?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
function createBaseExportedVscSendTimestamp(): ExportedVscSendTimestamp {
  return {
    chainId: "",
    vscSendTimestamps: [],
  };
}
export const ExportedVscSendTimestamp = {
  typeUrl: "/interchain_security.ccv.provider.v1.ExportedVscSendTimestamp",
  encode(message: ExportedVscSendTimestamp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    for (const v of message.vscSendTimestamps) {
      VscSendTimestamp.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExportedVscSendTimestamp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExportedVscSendTimestamp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.vscSendTimestamps.push(VscSendTimestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExportedVscSendTimestamp {
    const obj = createBaseExportedVscSendTimestamp();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (Array.isArray(object?.vscSendTimestamps))
      obj.vscSendTimestamps = object.vscSendTimestamps.map((e: any) => VscSendTimestamp.fromJSON(e));
    return obj;
  },
  toJSON(message: ExportedVscSendTimestamp): JsonSafe<ExportedVscSendTimestamp> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    if (message.vscSendTimestamps) {
      obj.vscSendTimestamps = message.vscSendTimestamps.map((e) =>
        e ? VscSendTimestamp.toJSON(e) : undefined,
      );
    } else {
      obj.vscSendTimestamps = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ExportedVscSendTimestamp>, I>>(
    object: I,
  ): ExportedVscSendTimestamp {
    const message = createBaseExportedVscSendTimestamp();
    message.chainId = object.chainId ?? "";
    message.vscSendTimestamps = object.vscSendTimestamps?.map((e) => VscSendTimestamp.fromPartial(e)) || [];
    return message;
  },
};
function createBaseKeyAssignmentReplacement(): KeyAssignmentReplacement {
  return {
    providerAddr: new Uint8Array(),
    prevCKey: undefined,
    power: BigInt(0),
  };
}
export const KeyAssignmentReplacement = {
  typeUrl: "/interchain_security.ccv.provider.v1.KeyAssignmentReplacement",
  encode(message: KeyAssignmentReplacement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.providerAddr.length !== 0) {
      writer.uint32(10).bytes(message.providerAddr);
    }
    if (message.prevCKey !== undefined) {
      PublicKey.encode(message.prevCKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): KeyAssignmentReplacement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyAssignmentReplacement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerAddr = reader.bytes();
          break;
        case 2:
          message.prevCKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): KeyAssignmentReplacement {
    const obj = createBaseKeyAssignmentReplacement();
    if (isSet(object.providerAddr)) obj.providerAddr = bytesFromBase64(object.providerAddr);
    if (isSet(object.prevCKey)) obj.prevCKey = PublicKey.fromJSON(object.prevCKey);
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    return obj;
  },
  toJSON(message: KeyAssignmentReplacement): JsonSafe<KeyAssignmentReplacement> {
    const obj: any = {};
    message.providerAddr !== undefined &&
      (obj.providerAddr = base64FromBytes(
        message.providerAddr !== undefined ? message.providerAddr : new Uint8Array(),
      ));
    message.prevCKey !== undefined &&
      (obj.prevCKey = message.prevCKey ? PublicKey.toJSON(message.prevCKey) : undefined);
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<KeyAssignmentReplacement>, I>>(
    object: I,
  ): KeyAssignmentReplacement {
    const message = createBaseKeyAssignmentReplacement();
    message.providerAddr = object.providerAddr ?? new Uint8Array();
    if (object.prevCKey !== undefined && object.prevCKey !== null) {
      message.prevCKey = PublicKey.fromPartial(object.prevCKey);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    return message;
  },
};
function createBaseValidatorConsumerPubKey(): ValidatorConsumerPubKey {
  return {
    chainId: "",
    providerAddr: new Uint8Array(),
    consumerKey: undefined,
  };
}
export const ValidatorConsumerPubKey = {
  typeUrl: "/interchain_security.ccv.provider.v1.ValidatorConsumerPubKey",
  encode(message: ValidatorConsumerPubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.providerAddr.length !== 0) {
      writer.uint32(18).bytes(message.providerAddr);
    }
    if (message.consumerKey !== undefined) {
      PublicKey.encode(message.consumerKey, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorConsumerPubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorConsumerPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.providerAddr = reader.bytes();
          break;
        case 3:
          message.consumerKey = PublicKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorConsumerPubKey {
    const obj = createBaseValidatorConsumerPubKey();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.providerAddr)) obj.providerAddr = bytesFromBase64(object.providerAddr);
    if (isSet(object.consumerKey)) obj.consumerKey = PublicKey.fromJSON(object.consumerKey);
    return obj;
  },
  toJSON(message: ValidatorConsumerPubKey): JsonSafe<ValidatorConsumerPubKey> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.providerAddr !== undefined &&
      (obj.providerAddr = base64FromBytes(
        message.providerAddr !== undefined ? message.providerAddr : new Uint8Array(),
      ));
    message.consumerKey !== undefined &&
      (obj.consumerKey = message.consumerKey ? PublicKey.toJSON(message.consumerKey) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorConsumerPubKey>, I>>(object: I): ValidatorConsumerPubKey {
    const message = createBaseValidatorConsumerPubKey();
    message.chainId = object.chainId ?? "";
    message.providerAddr = object.providerAddr ?? new Uint8Array();
    if (object.consumerKey !== undefined && object.consumerKey !== null) {
      message.consumerKey = PublicKey.fromPartial(object.consumerKey);
    }
    return message;
  },
};
function createBaseValidatorByConsumerAddr(): ValidatorByConsumerAddr {
  return {
    chainId: "",
    consumerAddr: new Uint8Array(),
    providerAddr: new Uint8Array(),
  };
}
export const ValidatorByConsumerAddr = {
  typeUrl: "/interchain_security.ccv.provider.v1.ValidatorByConsumerAddr",
  encode(message: ValidatorByConsumerAddr, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.consumerAddr.length !== 0) {
      writer.uint32(18).bytes(message.consumerAddr);
    }
    if (message.providerAddr.length !== 0) {
      writer.uint32(26).bytes(message.providerAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorByConsumerAddr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorByConsumerAddr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.consumerAddr = reader.bytes();
          break;
        case 3:
          message.providerAddr = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorByConsumerAddr {
    const obj = createBaseValidatorByConsumerAddr();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.consumerAddr)) obj.consumerAddr = bytesFromBase64(object.consumerAddr);
    if (isSet(object.providerAddr)) obj.providerAddr = bytesFromBase64(object.providerAddr);
    return obj;
  },
  toJSON(message: ValidatorByConsumerAddr): JsonSafe<ValidatorByConsumerAddr> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.consumerAddr !== undefined &&
      (obj.consumerAddr = base64FromBytes(
        message.consumerAddr !== undefined ? message.consumerAddr : new Uint8Array(),
      ));
    message.providerAddr !== undefined &&
      (obj.providerAddr = base64FromBytes(
        message.providerAddr !== undefined ? message.providerAddr : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorByConsumerAddr>, I>>(object: I): ValidatorByConsumerAddr {
    const message = createBaseValidatorByConsumerAddr();
    message.chainId = object.chainId ?? "";
    message.consumerAddr = object.consumerAddr ?? new Uint8Array();
    message.providerAddr = object.providerAddr ?? new Uint8Array();
    return message;
  },
};
function createBaseConsumerAddrsToPrune(): ConsumerAddrsToPrune {
  return {
    chainId: "",
    vscId: BigInt(0),
    consumerAddrs: undefined,
  };
}
export const ConsumerAddrsToPrune = {
  typeUrl: "/interchain_security.ccv.provider.v1.ConsumerAddrsToPrune",
  encode(message: ConsumerAddrsToPrune, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.vscId !== BigInt(0)) {
      writer.uint32(16).uint64(message.vscId);
    }
    if (message.consumerAddrs !== undefined) {
      AddressList.encode(message.consumerAddrs, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerAddrsToPrune {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerAddrsToPrune();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.vscId = reader.uint64();
          break;
        case 3:
          message.consumerAddrs = AddressList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerAddrsToPrune {
    const obj = createBaseConsumerAddrsToPrune();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.vscId)) obj.vscId = BigInt(object.vscId.toString());
    if (isSet(object.consumerAddrs)) obj.consumerAddrs = AddressList.fromJSON(object.consumerAddrs);
    return obj;
  },
  toJSON(message: ConsumerAddrsToPrune): JsonSafe<ConsumerAddrsToPrune> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.vscId !== undefined && (obj.vscId = (message.vscId || BigInt(0)).toString());
    message.consumerAddrs !== undefined &&
      (obj.consumerAddrs = message.consumerAddrs ? AddressList.toJSON(message.consumerAddrs) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerAddrsToPrune>, I>>(object: I): ConsumerAddrsToPrune {
    const message = createBaseConsumerAddrsToPrune();
    message.chainId = object.chainId ?? "";
    if (object.vscId !== undefined && object.vscId !== null) {
      message.vscId = BigInt(object.vscId.toString());
    }
    if (object.consumerAddrs !== undefined && object.consumerAddrs !== null) {
      message.consumerAddrs = AddressList.fromPartial(object.consumerAddrs);
    }
    return message;
  },
};
function createBaseConsumerValidator(): ConsumerValidator {
  return {
    providerConsAddr: new Uint8Array(),
    power: BigInt(0),
    consumerPublicKey: undefined,
    joinHeight: BigInt(0),
  };
}
export const ConsumerValidator = {
  typeUrl: "/interchain_security.ccv.provider.v1.ConsumerValidator",
  encode(message: ConsumerValidator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.providerConsAddr.length !== 0) {
      writer.uint32(10).bytes(message.providerConsAddr);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    if (message.consumerPublicKey !== undefined) {
      PublicKey.encode(message.consumerPublicKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.joinHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.joinHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerConsAddr = reader.bytes();
          break;
        case 2:
          message.power = reader.int64();
          break;
        case 3:
          message.consumerPublicKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 4:
          message.joinHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerValidator {
    const obj = createBaseConsumerValidator();
    if (isSet(object.providerConsAddr)) obj.providerConsAddr = bytesFromBase64(object.providerConsAddr);
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    if (isSet(object.consumerPublicKey)) obj.consumerPublicKey = PublicKey.fromJSON(object.consumerPublicKey);
    if (isSet(object.joinHeight)) obj.joinHeight = BigInt(object.joinHeight.toString());
    return obj;
  },
  toJSON(message: ConsumerValidator): JsonSafe<ConsumerValidator> {
    const obj: any = {};
    message.providerConsAddr !== undefined &&
      (obj.providerConsAddr = base64FromBytes(
        message.providerConsAddr !== undefined ? message.providerConsAddr : new Uint8Array(),
      ));
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    message.consumerPublicKey !== undefined &&
      (obj.consumerPublicKey = message.consumerPublicKey
        ? PublicKey.toJSON(message.consumerPublicKey)
        : undefined);
    message.joinHeight !== undefined && (obj.joinHeight = (message.joinHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerValidator>, I>>(object: I): ConsumerValidator {
    const message = createBaseConsumerValidator();
    message.providerConsAddr = object.providerConsAddr ?? new Uint8Array();
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    if (object.consumerPublicKey !== undefined && object.consumerPublicKey !== null) {
      message.consumerPublicKey = PublicKey.fromPartial(object.consumerPublicKey);
    }
    if (object.joinHeight !== undefined && object.joinHeight !== null) {
      message.joinHeight = BigInt(object.joinHeight.toString());
    }
    return message;
  },
};
function createBaseConsumerRewardsAllocation(): ConsumerRewardsAllocation {
  return {
    rewards: [],
  };
}
export const ConsumerRewardsAllocation = {
  typeUrl: "/interchain_security.ccv.provider.v1.ConsumerRewardsAllocation",
  encode(message: ConsumerRewardsAllocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerRewardsAllocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerRewardsAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerRewardsAllocation {
    const obj = createBaseConsumerRewardsAllocation();
    if (Array.isArray(object?.rewards)) obj.rewards = object.rewards.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: ConsumerRewardsAllocation): JsonSafe<ConsumerRewardsAllocation> {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerRewardsAllocation>, I>>(
    object: I,
  ): ConsumerRewardsAllocation {
    const message = createBaseConsumerRewardsAllocation();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};
