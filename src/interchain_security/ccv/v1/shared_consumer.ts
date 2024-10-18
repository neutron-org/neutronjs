/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import { ClientState, ConsensusState } from "../../../ibc/lightclients/tendermint/v1/tendermint";
import { ValidatorUpdate } from "../../../tendermint/abci/types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "interchain_security.ccv.v1";
/**
 * ConsumerParams defines the parameters for CCV consumer module.
 *
 * Note this type is referenced in both the consumer and provider CCV modules,
 * and persisted on the provider, see MakeConsumerGenesis and
 * SetConsumerGenesis.
 */
export interface ConsumerParams {
  /**
   * TODO: Remove enabled flag and find a better way to setup integration tests
   * See: https://github.com/cosmos/interchain-security/issues/339
   */
  enabled: boolean;
  /**
   * Distribution Params
   * Number of blocks between ibc-token-transfers from the consumer chain to
   * the provider chain. Note that at this transmission event a fraction of
   * the accumulated tokens are divided and sent consumer redistribution
   * address.
   */
  blocksPerDistributionTransmission: bigint;
  /**
   * Channel, and provider-chain receiving address to send distribution token
   * transfers over. These parameters is auto-set during the consumer <->
   * provider handshake procedure.
   */
  distributionTransmissionChannel: string;
  providerFeePoolAddrStr: string;
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
   * The number of historical info entries to persist in store.
   * This param is a part of the cosmos sdk staking module. In the case of
   * a ccv enabled consumer chain, the ccv module acts as the staking module.
   */
  historicalEntries: bigint;
  /**
   * Unbonding period for the consumer,
   * which should be smaller than that of the provider in general.
   */
  unbondingPeriod: Duration;
  /** !!! DEPRECATED !!! soft_opt_out_threshold is deprecated. see docs/docs/adrs/adr-015-partial-set-security.md */
  /** @deprecated */
  softOptOutThreshold: string;
  /**
   * Reward denoms. These are the denominations which are allowed to be sent to
   * the provider as rewards.
   */
  rewardDenoms: string[];
  /**
   * Provider-originated reward denoms. These are denoms coming from the
   * provider which are allowed to be used as rewards. e.g. "uatom"
   */
  providerRewardDenoms: string[];
  /** The period after which a consumer can retry sending a throttled packet. */
  retryDelayPeriod: Duration;
}
/**
 * ConsumerGenesisState defines shared genesis information between provider and
 * consumer
 */
export interface ConsumerGenesisState {
  params: ConsumerParams;
  provider: ProviderInfo;
  /** true for new chain, false for chain restart. */
  newChain: boolean;
}
/**
 * ProviderInfo defines all information a consumer needs from a provider
 * Shared data type between provider and consumer
 */
export interface ProviderInfo {
  /** ProviderClientState filled in on new chain, nil on restart. */
  clientState?: ClientState;
  /** ProviderConsensusState filled in on new chain, nil on restart. */
  consensusState?: ConsensusState;
  /** InitialValset filled in on new chain and on restart. */
  initialValSet: ValidatorUpdate[];
}
function createBaseConsumerParams(): ConsumerParams {
  return {
    enabled: false,
    blocksPerDistributionTransmission: BigInt(0),
    distributionTransmissionChannel: "",
    providerFeePoolAddrStr: "",
    ccvTimeoutPeriod: Duration.fromPartial({}),
    transferTimeoutPeriod: Duration.fromPartial({}),
    consumerRedistributionFraction: "",
    historicalEntries: BigInt(0),
    unbondingPeriod: Duration.fromPartial({}),
    softOptOutThreshold: "",
    rewardDenoms: [],
    providerRewardDenoms: [],
    retryDelayPeriod: Duration.fromPartial({}),
  };
}
export const ConsumerParams = {
  typeUrl: "/interchain_security.ccv.v1.ConsumerParams",
  encode(message: ConsumerParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.blocksPerDistributionTransmission !== BigInt(0)) {
      writer.uint32(16).int64(message.blocksPerDistributionTransmission);
    }
    if (message.distributionTransmissionChannel !== "") {
      writer.uint32(26).string(message.distributionTransmissionChannel);
    }
    if (message.providerFeePoolAddrStr !== "") {
      writer.uint32(34).string(message.providerFeePoolAddrStr);
    }
    if (message.ccvTimeoutPeriod !== undefined) {
      Duration.encode(message.ccvTimeoutPeriod, writer.uint32(42).fork()).ldelim();
    }
    if (message.transferTimeoutPeriod !== undefined) {
      Duration.encode(message.transferTimeoutPeriod, writer.uint32(50).fork()).ldelim();
    }
    if (message.consumerRedistributionFraction !== "") {
      writer.uint32(58).string(message.consumerRedistributionFraction);
    }
    if (message.historicalEntries !== BigInt(0)) {
      writer.uint32(64).int64(message.historicalEntries);
    }
    if (message.unbondingPeriod !== undefined) {
      Duration.encode(message.unbondingPeriod, writer.uint32(74).fork()).ldelim();
    }
    if (message.softOptOutThreshold !== "") {
      writer.uint32(82).string(message.softOptOutThreshold);
    }
    for (const v of message.rewardDenoms) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.providerRewardDenoms) {
      writer.uint32(98).string(v!);
    }
    if (message.retryDelayPeriod !== undefined) {
      Duration.encode(message.retryDelayPeriod, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enabled = reader.bool();
          break;
        case 2:
          message.blocksPerDistributionTransmission = reader.int64();
          break;
        case 3:
          message.distributionTransmissionChannel = reader.string();
          break;
        case 4:
          message.providerFeePoolAddrStr = reader.string();
          break;
        case 5:
          message.ccvTimeoutPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.transferTimeoutPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 7:
          message.consumerRedistributionFraction = reader.string();
          break;
        case 8:
          message.historicalEntries = reader.int64();
          break;
        case 9:
          message.unbondingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 10:
          message.softOptOutThreshold = reader.string();
          break;
        case 11:
          message.rewardDenoms.push(reader.string());
          break;
        case 12:
          message.providerRewardDenoms.push(reader.string());
          break;
        case 13:
          message.retryDelayPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerParams {
    const obj = createBaseConsumerParams();
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    if (isSet(object.blocksPerDistributionTransmission))
      obj.blocksPerDistributionTransmission = BigInt(object.blocksPerDistributionTransmission.toString());
    if (isSet(object.distributionTransmissionChannel))
      obj.distributionTransmissionChannel = String(object.distributionTransmissionChannel);
    if (isSet(object.providerFeePoolAddrStr))
      obj.providerFeePoolAddrStr = String(object.providerFeePoolAddrStr);
    if (isSet(object.ccvTimeoutPeriod)) obj.ccvTimeoutPeriod = Duration.fromJSON(object.ccvTimeoutPeriod);
    if (isSet(object.transferTimeoutPeriod))
      obj.transferTimeoutPeriod = Duration.fromJSON(object.transferTimeoutPeriod);
    if (isSet(object.consumerRedistributionFraction))
      obj.consumerRedistributionFraction = String(object.consumerRedistributionFraction);
    if (isSet(object.historicalEntries)) obj.historicalEntries = BigInt(object.historicalEntries.toString());
    if (isSet(object.unbondingPeriod)) obj.unbondingPeriod = Duration.fromJSON(object.unbondingPeriod);
    if (isSet(object.softOptOutThreshold)) obj.softOptOutThreshold = String(object.softOptOutThreshold);
    if (Array.isArray(object?.rewardDenoms))
      obj.rewardDenoms = object.rewardDenoms.map((e: any) => String(e));
    if (Array.isArray(object?.providerRewardDenoms))
      obj.providerRewardDenoms = object.providerRewardDenoms.map((e: any) => String(e));
    if (isSet(object.retryDelayPeriod)) obj.retryDelayPeriod = Duration.fromJSON(object.retryDelayPeriod);
    return obj;
  },
  toJSON(message: ConsumerParams): JsonSafe<ConsumerParams> {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.blocksPerDistributionTransmission !== undefined &&
      (obj.blocksPerDistributionTransmission = (
        message.blocksPerDistributionTransmission || BigInt(0)
      ).toString());
    message.distributionTransmissionChannel !== undefined &&
      (obj.distributionTransmissionChannel = message.distributionTransmissionChannel);
    message.providerFeePoolAddrStr !== undefined &&
      (obj.providerFeePoolAddrStr = message.providerFeePoolAddrStr);
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
    message.historicalEntries !== undefined &&
      (obj.historicalEntries = (message.historicalEntries || BigInt(0)).toString());
    message.unbondingPeriod !== undefined &&
      (obj.unbondingPeriod = message.unbondingPeriod ? Duration.toJSON(message.unbondingPeriod) : undefined);
    message.softOptOutThreshold !== undefined && (obj.softOptOutThreshold = message.softOptOutThreshold);
    if (message.rewardDenoms) {
      obj.rewardDenoms = message.rewardDenoms.map((e) => e);
    } else {
      obj.rewardDenoms = [];
    }
    if (message.providerRewardDenoms) {
      obj.providerRewardDenoms = message.providerRewardDenoms.map((e) => e);
    } else {
      obj.providerRewardDenoms = [];
    }
    message.retryDelayPeriod !== undefined &&
      (obj.retryDelayPeriod = message.retryDelayPeriod
        ? Duration.toJSON(message.retryDelayPeriod)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerParams>, I>>(object: I): ConsumerParams {
    const message = createBaseConsumerParams();
    message.enabled = object.enabled ?? false;
    if (
      object.blocksPerDistributionTransmission !== undefined &&
      object.blocksPerDistributionTransmission !== null
    ) {
      message.blocksPerDistributionTransmission = BigInt(object.blocksPerDistributionTransmission.toString());
    }
    message.distributionTransmissionChannel = object.distributionTransmissionChannel ?? "";
    message.providerFeePoolAddrStr = object.providerFeePoolAddrStr ?? "";
    if (object.ccvTimeoutPeriod !== undefined && object.ccvTimeoutPeriod !== null) {
      message.ccvTimeoutPeriod = Duration.fromPartial(object.ccvTimeoutPeriod);
    }
    if (object.transferTimeoutPeriod !== undefined && object.transferTimeoutPeriod !== null) {
      message.transferTimeoutPeriod = Duration.fromPartial(object.transferTimeoutPeriod);
    }
    message.consumerRedistributionFraction = object.consumerRedistributionFraction ?? "";
    if (object.historicalEntries !== undefined && object.historicalEntries !== null) {
      message.historicalEntries = BigInt(object.historicalEntries.toString());
    }
    if (object.unbondingPeriod !== undefined && object.unbondingPeriod !== null) {
      message.unbondingPeriod = Duration.fromPartial(object.unbondingPeriod);
    }
    message.softOptOutThreshold = object.softOptOutThreshold ?? "";
    message.rewardDenoms = object.rewardDenoms?.map((e) => e) || [];
    message.providerRewardDenoms = object.providerRewardDenoms?.map((e) => e) || [];
    if (object.retryDelayPeriod !== undefined && object.retryDelayPeriod !== null) {
      message.retryDelayPeriod = Duration.fromPartial(object.retryDelayPeriod);
    }
    return message;
  },
};
function createBaseConsumerGenesisState(): ConsumerGenesisState {
  return {
    params: ConsumerParams.fromPartial({}),
    provider: ProviderInfo.fromPartial({}),
    newChain: false,
  };
}
export const ConsumerGenesisState = {
  typeUrl: "/interchain_security.ccv.v1.ConsumerGenesisState",
  encode(message: ConsumerGenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      ConsumerParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.provider !== undefined) {
      ProviderInfo.encode(message.provider, writer.uint32(18).fork()).ldelim();
    }
    if (message.newChain === true) {
      writer.uint32(24).bool(message.newChain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerGenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = ConsumerParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.provider = ProviderInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.newChain = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsumerGenesisState {
    const obj = createBaseConsumerGenesisState();
    if (isSet(object.params)) obj.params = ConsumerParams.fromJSON(object.params);
    if (isSet(object.provider)) obj.provider = ProviderInfo.fromJSON(object.provider);
    if (isSet(object.newChain)) obj.newChain = Boolean(object.newChain);
    return obj;
  },
  toJSON(message: ConsumerGenesisState): JsonSafe<ConsumerGenesisState> {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? ConsumerParams.toJSON(message.params) : undefined);
    message.provider !== undefined &&
      (obj.provider = message.provider ? ProviderInfo.toJSON(message.provider) : undefined);
    message.newChain !== undefined && (obj.newChain = message.newChain);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsumerGenesisState>, I>>(object: I): ConsumerGenesisState {
    const message = createBaseConsumerGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = ConsumerParams.fromPartial(object.params);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = ProviderInfo.fromPartial(object.provider);
    }
    message.newChain = object.newChain ?? false;
    return message;
  },
};
function createBaseProviderInfo(): ProviderInfo {
  return {
    clientState: undefined,
    consensusState: undefined,
    initialValSet: [],
  };
}
export const ProviderInfo = {
  typeUrl: "/interchain_security.ccv.v1.ProviderInfo",
  encode(message: ProviderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientState !== undefined) {
      ClientState.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      ConsensusState.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.initialValSet) {
      ValidatorUpdate.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = ClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = ConsensusState.decode(reader, reader.uint32());
          break;
        case 3:
          message.initialValSet.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProviderInfo {
    const obj = createBaseProviderInfo();
    if (isSet(object.clientState)) obj.clientState = ClientState.fromJSON(object.clientState);
    if (isSet(object.consensusState)) obj.consensusState = ConsensusState.fromJSON(object.consensusState);
    if (Array.isArray(object?.initialValSet))
      obj.initialValSet = object.initialValSet.map((e: any) => ValidatorUpdate.fromJSON(e));
    return obj;
  },
  toJSON(message: ProviderInfo): JsonSafe<ProviderInfo> {
    const obj: any = {};
    message.clientState !== undefined &&
      (obj.clientState = message.clientState ? ClientState.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? ConsensusState.toJSON(message.consensusState)
        : undefined);
    if (message.initialValSet) {
      obj.initialValSet = message.initialValSet.map((e) => (e ? ValidatorUpdate.toJSON(e) : undefined));
    } else {
      obj.initialValSet = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProviderInfo>, I>>(object: I): ProviderInfo {
    const message = createBaseProviderInfo();
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = ClientState.fromPartial(object.clientState);
    }
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = ConsensusState.fromPartial(object.consensusState);
    }
    message.initialValSet = object.initialValSet?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
    return message;
  },
};
