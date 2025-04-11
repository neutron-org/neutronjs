/* eslint-disable */
import { ConsumerGenesisState } from "../../v1/shared_consumer";
import { ConsumerAdditionProposals, ConsumerRemovalProposals, Params, VscSendTimestamp } from "./provider";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { PublicKey } from "../../../../tendermint/crypto/keys";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact, fromJsonTimestamp, fromTimestamp } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "interchain_security.ccv.provider.v1";
export interface QueryConsumerGenesisRequest {
  chainId: string;
}
export interface QueryConsumerGenesisResponse {
  genesisState: ConsumerGenesisState;
}
export interface QueryConsumerChainsRequest {}
export interface QueryConsumerChainsResponse {
  chains: Chain[];
}
export interface QueryConsumerChainStartProposalsRequest {}
export interface QueryConsumerChainStartProposalsResponse {
  proposals?: ConsumerAdditionProposals;
}
export interface QueryConsumerChainStopProposalsRequest {}
export interface QueryConsumerChainStopProposalsResponse {
  proposals?: ConsumerRemovalProposals;
}
export interface Chain {
  chainId: string;
  clientId: string;
  /** If chain with `chainID` is a Top-N chain, i.e., enforces at least one validator to validate chain `chainID` */
  topN: number;
  /**
   * If the chain is a Top-N chain, this is the minimum power required to be in the top N.
   * Otherwise, this is -1.
   */
  minPowerInTopN: bigint;
  /** Corresponds to the maximum power (percentage-wise) a validator can have on the consumer chain. */
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
export interface QueryValidatorConsumerAddrRequest {
  /** The id of the consumer chain */
  chainId: string;
  /** The consensus address of the validator on the provider chain */
  providerAddress: string;
}
export interface QueryValidatorConsumerAddrResponse {
  /** The address of the validator on the consumer chain */
  consumerAddress: string;
}
export interface QueryValidatorProviderAddrRequest {
  /** The id of the provider chain */
  chainId: string;
  /** The consensus address of the validator on the consumer chain */
  consumerAddress: string;
}
export interface QueryValidatorProviderAddrResponse {
  /** The address of the validator on the provider chain */
  providerAddress: string;
}
export interface QueryThrottleStateRequest {}
export interface QueryThrottleStateResponse {
  /** current slash_meter state */
  slashMeter: bigint;
  /**
   * allowance of voting power units (int) that the slash meter is given per
   * replenish period this also serves as the max value for the meter.
   */
  slashMeterAllowance: bigint;
  /**
   * next time the slash meter could potentially be replenished, iff it's not
   * full
   */
  nextReplenishCandidate: Timestamp;
}
export interface QueryRegisteredConsumerRewardDenomsRequest {}
export interface QueryRegisteredConsumerRewardDenomsResponse {
  denoms: string[];
}
export interface QueryProposedChainIDsRequest {}
export interface QueryProposedChainIDsResponse {
  proposedChains: ProposedChain[];
}
export interface ProposedChain {
  chainID: string;
  proposalID: bigint;
}
export interface QueryAllPairsValConAddrByConsumerChainIDRequest {
  /** The id of the consumer chain */
  chainId: string;
}
export interface QueryAllPairsValConAddrByConsumerChainIDResponse {
  pairValConAddr: PairValConAddrProviderAndConsumer[];
}
export interface PairValConAddrProviderAndConsumer {
  /** The consensus address of the validator on the provider chain */
  providerAddress: string;
  /** The consensus address of the validator on the consumer chain */
  consumerAddress: string;
  consumerKey?: PublicKey;
}
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryConsumerChainOptedInValidatorsRequest {
  chainId: string;
}
export interface QueryConsumerChainOptedInValidatorsResponse {
  /** The consensus addresses of the validators on the provider chain */
  validatorsProviderAddresses: string[];
}
export interface QueryConsumerValidatorsRequest {
  chainId: string;
}
export interface QueryConsumerValidatorsValidator {
  /** The consensus address of the validator on the provider chain */
  providerAddress: string;
  /** The consumer public key of the validator used on the consumer chain */
  consumerKey?: PublicKey;
  /** The power of the validator used on the consumer chain */
  power: bigint;
}
export interface QueryConsumerValidatorsResponse {
  validators: QueryConsumerValidatorsValidator[];
}
export interface QueryConsumerChainsValidatorHasToValidateRequest {
  /** The consensus address of the validator on the provider chain */
  providerAddress: string;
}
export interface QueryConsumerChainsValidatorHasToValidateResponse {
  consumerChainIds: string[];
}
export interface QueryValidatorConsumerCommissionRateRequest {
  chainId: string;
  /** The consensus address of the validator on the provider chain */
  providerAddress: string;
}
export interface QueryValidatorConsumerCommissionRateResponse {
  /** The rate to charge delegators on the consumer chain, as a fraction */
  rate: string;
}
export interface QueryOldestUnconfirmedVscRequest {
  chainId: string;
}
export interface QueryOldestUnconfirmedVscResponse {
  vscSendTimestamp: VscSendTimestamp;
}
function createBaseQueryConsumerGenesisRequest(): QueryConsumerGenesisRequest {
  return {
    chainId: "",
  };
}
export const QueryConsumerGenesisRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerGenesisRequest",
  encode(message: QueryConsumerGenesisRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerGenesisRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerGenesisRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerGenesisRequest {
    const obj = createBaseQueryConsumerGenesisRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: QueryConsumerGenesisRequest): JsonSafe<QueryConsumerGenesisRequest> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerGenesisRequest>, I>>(
    object: I,
  ): QueryConsumerGenesisRequest {
    const message = createBaseQueryConsumerGenesisRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryConsumerGenesisResponse(): QueryConsumerGenesisResponse {
  return {
    genesisState: ConsumerGenesisState.fromPartial({}),
  };
}
export const QueryConsumerGenesisResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerGenesisResponse",
  encode(message: QueryConsumerGenesisResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.genesisState !== undefined) {
      ConsumerGenesisState.encode(message.genesisState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerGenesisResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerGenesisResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.genesisState = ConsumerGenesisState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerGenesisResponse {
    const obj = createBaseQueryConsumerGenesisResponse();
    if (isSet(object.genesisState)) obj.genesisState = ConsumerGenesisState.fromJSON(object.genesisState);
    return obj;
  },
  toJSON(message: QueryConsumerGenesisResponse): JsonSafe<QueryConsumerGenesisResponse> {
    const obj: any = {};
    message.genesisState !== undefined &&
      (obj.genesisState = message.genesisState
        ? ConsumerGenesisState.toJSON(message.genesisState)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerGenesisResponse>, I>>(
    object: I,
  ): QueryConsumerGenesisResponse {
    const message = createBaseQueryConsumerGenesisResponse();
    if (object.genesisState !== undefined && object.genesisState !== null) {
      message.genesisState = ConsumerGenesisState.fromPartial(object.genesisState);
    }
    return message;
  },
};
function createBaseQueryConsumerChainsRequest(): QueryConsumerChainsRequest {
  return {};
}
export const QueryConsumerChainsRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerChainsRequest",
  encode(_: QueryConsumerChainsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerChainsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerChainsRequest();
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
  fromJSON(_: any): QueryConsumerChainsRequest {
    const obj = createBaseQueryConsumerChainsRequest();
    return obj;
  },
  toJSON(_: QueryConsumerChainsRequest): JsonSafe<QueryConsumerChainsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerChainsRequest>, I>>(_: I): QueryConsumerChainsRequest {
    const message = createBaseQueryConsumerChainsRequest();
    return message;
  },
};
function createBaseQueryConsumerChainsResponse(): QueryConsumerChainsResponse {
  return {
    chains: [],
  };
}
export const QueryConsumerChainsResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerChainsResponse",
  encode(message: QueryConsumerChainsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.chains) {
      Chain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerChainsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerChainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chains.push(Chain.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerChainsResponse {
    const obj = createBaseQueryConsumerChainsResponse();
    if (Array.isArray(object?.chains)) obj.chains = object.chains.map((e: any) => Chain.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryConsumerChainsResponse): JsonSafe<QueryConsumerChainsResponse> {
    const obj: any = {};
    if (message.chains) {
      obj.chains = message.chains.map((e) => (e ? Chain.toJSON(e) : undefined));
    } else {
      obj.chains = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerChainsResponse>, I>>(
    object: I,
  ): QueryConsumerChainsResponse {
    const message = createBaseQueryConsumerChainsResponse();
    message.chains = object.chains?.map((e) => Chain.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryConsumerChainStartProposalsRequest(): QueryConsumerChainStartProposalsRequest {
  return {};
}
export const QueryConsumerChainStartProposalsRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerChainStartProposalsRequest",
  encode(
    _: QueryConsumerChainStartProposalsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerChainStartProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerChainStartProposalsRequest();
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
  fromJSON(_: any): QueryConsumerChainStartProposalsRequest {
    const obj = createBaseQueryConsumerChainStartProposalsRequest();
    return obj;
  },
  toJSON(_: QueryConsumerChainStartProposalsRequest): JsonSafe<QueryConsumerChainStartProposalsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerChainStartProposalsRequest>, I>>(
    _: I,
  ): QueryConsumerChainStartProposalsRequest {
    const message = createBaseQueryConsumerChainStartProposalsRequest();
    return message;
  },
};
function createBaseQueryConsumerChainStartProposalsResponse(): QueryConsumerChainStartProposalsResponse {
  return {
    proposals: undefined,
  };
}
export const QueryConsumerChainStartProposalsResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerChainStartProposalsResponse",
  encode(
    message: QueryConsumerChainStartProposalsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.proposals !== undefined) {
      ConsumerAdditionProposals.encode(message.proposals, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerChainStartProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerChainStartProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals = ConsumerAdditionProposals.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerChainStartProposalsResponse {
    const obj = createBaseQueryConsumerChainStartProposalsResponse();
    if (isSet(object.proposals)) obj.proposals = ConsumerAdditionProposals.fromJSON(object.proposals);
    return obj;
  },
  toJSON(
    message: QueryConsumerChainStartProposalsResponse,
  ): JsonSafe<QueryConsumerChainStartProposalsResponse> {
    const obj: any = {};
    message.proposals !== undefined &&
      (obj.proposals = message.proposals ? ConsumerAdditionProposals.toJSON(message.proposals) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerChainStartProposalsResponse>, I>>(
    object: I,
  ): QueryConsumerChainStartProposalsResponse {
    const message = createBaseQueryConsumerChainStartProposalsResponse();
    if (object.proposals !== undefined && object.proposals !== null) {
      message.proposals = ConsumerAdditionProposals.fromPartial(object.proposals);
    }
    return message;
  },
};
function createBaseQueryConsumerChainStopProposalsRequest(): QueryConsumerChainStopProposalsRequest {
  return {};
}
export const QueryConsumerChainStopProposalsRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerChainStopProposalsRequest",
  encode(
    _: QueryConsumerChainStopProposalsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerChainStopProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerChainStopProposalsRequest();
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
  fromJSON(_: any): QueryConsumerChainStopProposalsRequest {
    const obj = createBaseQueryConsumerChainStopProposalsRequest();
    return obj;
  },
  toJSON(_: QueryConsumerChainStopProposalsRequest): JsonSafe<QueryConsumerChainStopProposalsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerChainStopProposalsRequest>, I>>(
    _: I,
  ): QueryConsumerChainStopProposalsRequest {
    const message = createBaseQueryConsumerChainStopProposalsRequest();
    return message;
  },
};
function createBaseQueryConsumerChainStopProposalsResponse(): QueryConsumerChainStopProposalsResponse {
  return {
    proposals: undefined,
  };
}
export const QueryConsumerChainStopProposalsResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerChainStopProposalsResponse",
  encode(
    message: QueryConsumerChainStopProposalsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.proposals !== undefined) {
      ConsumerRemovalProposals.encode(message.proposals, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerChainStopProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerChainStopProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals = ConsumerRemovalProposals.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerChainStopProposalsResponse {
    const obj = createBaseQueryConsumerChainStopProposalsResponse();
    if (isSet(object.proposals)) obj.proposals = ConsumerRemovalProposals.fromJSON(object.proposals);
    return obj;
  },
  toJSON(
    message: QueryConsumerChainStopProposalsResponse,
  ): JsonSafe<QueryConsumerChainStopProposalsResponse> {
    const obj: any = {};
    message.proposals !== undefined &&
      (obj.proposals = message.proposals ? ConsumerRemovalProposals.toJSON(message.proposals) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerChainStopProposalsResponse>, I>>(
    object: I,
  ): QueryConsumerChainStopProposalsResponse {
    const message = createBaseQueryConsumerChainStopProposalsResponse();
    if (object.proposals !== undefined && object.proposals !== null) {
      message.proposals = ConsumerRemovalProposals.fromPartial(object.proposals);
    }
    return message;
  },
};
function createBaseChain(): Chain {
  return {
    chainId: "",
    clientId: "",
    topN: 0,
    minPowerInTopN: BigInt(0),
    validatorsPowerCap: 0,
    validatorSetCap: 0,
    allowlist: [],
    denylist: [],
  };
}
export const Chain = {
  typeUrl: "/interchain_security.ccv.provider.v1.Chain",
  encode(message: Chain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    if (message.topN !== 0) {
      writer.uint32(24).uint32(message.topN);
    }
    if (message.minPowerInTopN !== BigInt(0)) {
      writer.uint32(32).int64(message.minPowerInTopN);
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
  decode(input: BinaryReader | Uint8Array, length?: number): Chain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.clientId = reader.string();
          break;
        case 3:
          message.topN = reader.uint32();
          break;
        case 4:
          message.minPowerInTopN = reader.int64();
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
  fromJSON(object: any): Chain {
    const obj = createBaseChain();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.topN)) obj.topN = Number(object.topN);
    if (isSet(object.minPowerInTopN)) obj.minPowerInTopN = BigInt(object.minPowerInTopN.toString());
    if (isSet(object.validatorsPowerCap)) obj.validatorsPowerCap = Number(object.validatorsPowerCap);
    if (isSet(object.validatorSetCap)) obj.validatorSetCap = Number(object.validatorSetCap);
    if (Array.isArray(object?.allowlist)) obj.allowlist = object.allowlist.map((e: any) => String(e));
    if (Array.isArray(object?.denylist)) obj.denylist = object.denylist.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Chain): JsonSafe<Chain> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.topN !== undefined && (obj.topN = Math.round(message.topN));
    message.minPowerInTopN !== undefined &&
      (obj.minPowerInTopN = (message.minPowerInTopN || BigInt(0)).toString());
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
  fromPartial<I extends Exact<DeepPartial<Chain>, I>>(object: I): Chain {
    const message = createBaseChain();
    message.chainId = object.chainId ?? "";
    message.clientId = object.clientId ?? "";
    message.topN = object.topN ?? 0;
    if (object.minPowerInTopN !== undefined && object.minPowerInTopN !== null) {
      message.minPowerInTopN = BigInt(object.minPowerInTopN.toString());
    }
    message.validatorsPowerCap = object.validatorsPowerCap ?? 0;
    message.validatorSetCap = object.validatorSetCap ?? 0;
    message.allowlist = object.allowlist?.map((e) => e) || [];
    message.denylist = object.denylist?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryValidatorConsumerAddrRequest(): QueryValidatorConsumerAddrRequest {
  return {
    chainId: "",
    providerAddress: "",
  };
}
export const QueryValidatorConsumerAddrRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryValidatorConsumerAddrRequest",
  encode(
    message: QueryValidatorConsumerAddrRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.providerAddress !== "") {
      writer.uint32(18).string(message.providerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorConsumerAddrRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorConsumerAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.providerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorConsumerAddrRequest {
    const obj = createBaseQueryValidatorConsumerAddrRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.providerAddress)) obj.providerAddress = String(object.providerAddress);
    return obj;
  },
  toJSON(message: QueryValidatorConsumerAddrRequest): JsonSafe<QueryValidatorConsumerAddrRequest> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.providerAddress !== undefined && (obj.providerAddress = message.providerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorConsumerAddrRequest>, I>>(
    object: I,
  ): QueryValidatorConsumerAddrRequest {
    const message = createBaseQueryValidatorConsumerAddrRequest();
    message.chainId = object.chainId ?? "";
    message.providerAddress = object.providerAddress ?? "";
    return message;
  },
};
function createBaseQueryValidatorConsumerAddrResponse(): QueryValidatorConsumerAddrResponse {
  return {
    consumerAddress: "",
  };
}
export const QueryValidatorConsumerAddrResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryValidatorConsumerAddrResponse",
  encode(
    message: QueryValidatorConsumerAddrResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.consumerAddress !== "") {
      writer.uint32(10).string(message.consumerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorConsumerAddrResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorConsumerAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorConsumerAddrResponse {
    const obj = createBaseQueryValidatorConsumerAddrResponse();
    if (isSet(object.consumerAddress)) obj.consumerAddress = String(object.consumerAddress);
    return obj;
  },
  toJSON(message: QueryValidatorConsumerAddrResponse): JsonSafe<QueryValidatorConsumerAddrResponse> {
    const obj: any = {};
    message.consumerAddress !== undefined && (obj.consumerAddress = message.consumerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorConsumerAddrResponse>, I>>(
    object: I,
  ): QueryValidatorConsumerAddrResponse {
    const message = createBaseQueryValidatorConsumerAddrResponse();
    message.consumerAddress = object.consumerAddress ?? "";
    return message;
  },
};
function createBaseQueryValidatorProviderAddrRequest(): QueryValidatorProviderAddrRequest {
  return {
    chainId: "",
    consumerAddress: "",
  };
}
export const QueryValidatorProviderAddrRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryValidatorProviderAddrRequest",
  encode(
    message: QueryValidatorProviderAddrRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.consumerAddress !== "") {
      writer.uint32(18).string(message.consumerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorProviderAddrRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorProviderAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.consumerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorProviderAddrRequest {
    const obj = createBaseQueryValidatorProviderAddrRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.consumerAddress)) obj.consumerAddress = String(object.consumerAddress);
    return obj;
  },
  toJSON(message: QueryValidatorProviderAddrRequest): JsonSafe<QueryValidatorProviderAddrRequest> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.consumerAddress !== undefined && (obj.consumerAddress = message.consumerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorProviderAddrRequest>, I>>(
    object: I,
  ): QueryValidatorProviderAddrRequest {
    const message = createBaseQueryValidatorProviderAddrRequest();
    message.chainId = object.chainId ?? "";
    message.consumerAddress = object.consumerAddress ?? "";
    return message;
  },
};
function createBaseQueryValidatorProviderAddrResponse(): QueryValidatorProviderAddrResponse {
  return {
    providerAddress: "",
  };
}
export const QueryValidatorProviderAddrResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryValidatorProviderAddrResponse",
  encode(
    message: QueryValidatorProviderAddrResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.providerAddress !== "") {
      writer.uint32(10).string(message.providerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorProviderAddrResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorProviderAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorProviderAddrResponse {
    const obj = createBaseQueryValidatorProviderAddrResponse();
    if (isSet(object.providerAddress)) obj.providerAddress = String(object.providerAddress);
    return obj;
  },
  toJSON(message: QueryValidatorProviderAddrResponse): JsonSafe<QueryValidatorProviderAddrResponse> {
    const obj: any = {};
    message.providerAddress !== undefined && (obj.providerAddress = message.providerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorProviderAddrResponse>, I>>(
    object: I,
  ): QueryValidatorProviderAddrResponse {
    const message = createBaseQueryValidatorProviderAddrResponse();
    message.providerAddress = object.providerAddress ?? "";
    return message;
  },
};
function createBaseQueryThrottleStateRequest(): QueryThrottleStateRequest {
  return {};
}
export const QueryThrottleStateRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryThrottleStateRequest",
  encode(_: QueryThrottleStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThrottleStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThrottleStateRequest();
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
  fromJSON(_: any): QueryThrottleStateRequest {
    const obj = createBaseQueryThrottleStateRequest();
    return obj;
  },
  toJSON(_: QueryThrottleStateRequest): JsonSafe<QueryThrottleStateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryThrottleStateRequest>, I>>(_: I): QueryThrottleStateRequest {
    const message = createBaseQueryThrottleStateRequest();
    return message;
  },
};
function createBaseQueryThrottleStateResponse(): QueryThrottleStateResponse {
  return {
    slashMeter: BigInt(0),
    slashMeterAllowance: BigInt(0),
    nextReplenishCandidate: Timestamp.fromPartial({}),
  };
}
export const QueryThrottleStateResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryThrottleStateResponse",
  encode(message: QueryThrottleStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.slashMeter !== BigInt(0)) {
      writer.uint32(8).int64(message.slashMeter);
    }
    if (message.slashMeterAllowance !== BigInt(0)) {
      writer.uint32(16).int64(message.slashMeterAllowance);
    }
    if (message.nextReplenishCandidate !== undefined) {
      Timestamp.encode(message.nextReplenishCandidate, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryThrottleStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryThrottleStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashMeter = reader.int64();
          break;
        case 2:
          message.slashMeterAllowance = reader.int64();
          break;
        case 3:
          message.nextReplenishCandidate = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryThrottleStateResponse {
    const obj = createBaseQueryThrottleStateResponse();
    if (isSet(object.slashMeter)) obj.slashMeter = BigInt(object.slashMeter.toString());
    if (isSet(object.slashMeterAllowance))
      obj.slashMeterAllowance = BigInt(object.slashMeterAllowance.toString());
    if (isSet(object.nextReplenishCandidate))
      obj.nextReplenishCandidate = fromJsonTimestamp(object.nextReplenishCandidate);
    return obj;
  },
  toJSON(message: QueryThrottleStateResponse): JsonSafe<QueryThrottleStateResponse> {
    const obj: any = {};
    message.slashMeter !== undefined && (obj.slashMeter = (message.slashMeter || BigInt(0)).toString());
    message.slashMeterAllowance !== undefined &&
      (obj.slashMeterAllowance = (message.slashMeterAllowance || BigInt(0)).toString());
    message.nextReplenishCandidate !== undefined &&
      (obj.nextReplenishCandidate = fromTimestamp(message.nextReplenishCandidate).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryThrottleStateResponse>, I>>(
    object: I,
  ): QueryThrottleStateResponse {
    const message = createBaseQueryThrottleStateResponse();
    if (object.slashMeter !== undefined && object.slashMeter !== null) {
      message.slashMeter = BigInt(object.slashMeter.toString());
    }
    if (object.slashMeterAllowance !== undefined && object.slashMeterAllowance !== null) {
      message.slashMeterAllowance = BigInt(object.slashMeterAllowance.toString());
    }
    if (object.nextReplenishCandidate !== undefined && object.nextReplenishCandidate !== null) {
      message.nextReplenishCandidate = Timestamp.fromPartial(object.nextReplenishCandidate);
    }
    return message;
  },
};
function createBaseQueryRegisteredConsumerRewardDenomsRequest(): QueryRegisteredConsumerRewardDenomsRequest {
  return {};
}
export const QueryRegisteredConsumerRewardDenomsRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryRegisteredConsumerRewardDenomsRequest",
  encode(
    _: QueryRegisteredConsumerRewardDenomsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredConsumerRewardDenomsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredConsumerRewardDenomsRequest();
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
  fromJSON(_: any): QueryRegisteredConsumerRewardDenomsRequest {
    const obj = createBaseQueryRegisteredConsumerRewardDenomsRequest();
    return obj;
  },
  toJSON(
    _: QueryRegisteredConsumerRewardDenomsRequest,
  ): JsonSafe<QueryRegisteredConsumerRewardDenomsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRegisteredConsumerRewardDenomsRequest>, I>>(
    _: I,
  ): QueryRegisteredConsumerRewardDenomsRequest {
    const message = createBaseQueryRegisteredConsumerRewardDenomsRequest();
    return message;
  },
};
function createBaseQueryRegisteredConsumerRewardDenomsResponse(): QueryRegisteredConsumerRewardDenomsResponse {
  return {
    denoms: [],
  };
}
export const QueryRegisteredConsumerRewardDenomsResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryRegisteredConsumerRewardDenomsResponse",
  encode(
    message: QueryRegisteredConsumerRewardDenomsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredConsumerRewardDenomsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredConsumerRewardDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRegisteredConsumerRewardDenomsResponse {
    const obj = createBaseQueryRegisteredConsumerRewardDenomsResponse();
    if (Array.isArray(object?.denoms)) obj.denoms = object.denoms.map((e: any) => String(e));
    return obj;
  },
  toJSON(
    message: QueryRegisteredConsumerRewardDenomsResponse,
  ): JsonSafe<QueryRegisteredConsumerRewardDenomsResponse> {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRegisteredConsumerRewardDenomsResponse>, I>>(
    object: I,
  ): QueryRegisteredConsumerRewardDenomsResponse {
    const message = createBaseQueryRegisteredConsumerRewardDenomsResponse();
    message.denoms = object.denoms?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryProposedChainIDsRequest(): QueryProposedChainIDsRequest {
  return {};
}
export const QueryProposedChainIDsRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryProposedChainIDsRequest",
  encode(_: QueryProposedChainIDsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposedChainIDsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposedChainIDsRequest();
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
  fromJSON(_: any): QueryProposedChainIDsRequest {
    const obj = createBaseQueryProposedChainIDsRequest();
    return obj;
  },
  toJSON(_: QueryProposedChainIDsRequest): JsonSafe<QueryProposedChainIDsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposedChainIDsRequest>, I>>(
    _: I,
  ): QueryProposedChainIDsRequest {
    const message = createBaseQueryProposedChainIDsRequest();
    return message;
  },
};
function createBaseQueryProposedChainIDsResponse(): QueryProposedChainIDsResponse {
  return {
    proposedChains: [],
  };
}
export const QueryProposedChainIDsResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryProposedChainIDsResponse",
  encode(message: QueryProposedChainIDsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposedChains) {
      ProposedChain.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposedChainIDsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposedChainIDsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposedChains.push(ProposedChain.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposedChainIDsResponse {
    const obj = createBaseQueryProposedChainIDsResponse();
    if (Array.isArray(object?.proposedChains))
      obj.proposedChains = object.proposedChains.map((e: any) => ProposedChain.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryProposedChainIDsResponse): JsonSafe<QueryProposedChainIDsResponse> {
    const obj: any = {};
    if (message.proposedChains) {
      obj.proposedChains = message.proposedChains.map((e) => (e ? ProposedChain.toJSON(e) : undefined));
    } else {
      obj.proposedChains = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProposedChainIDsResponse>, I>>(
    object: I,
  ): QueryProposedChainIDsResponse {
    const message = createBaseQueryProposedChainIDsResponse();
    message.proposedChains = object.proposedChains?.map((e) => ProposedChain.fromPartial(e)) || [];
    return message;
  },
};
function createBaseProposedChain(): ProposedChain {
  return {
    chainID: "",
    proposalID: BigInt(0),
  };
}
export const ProposedChain = {
  typeUrl: "/interchain_security.ccv.provider.v1.ProposedChain",
  encode(message: ProposedChain, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainID !== "") {
      writer.uint32(10).string(message.chainID);
    }
    if (message.proposalID !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProposedChain {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposedChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainID = reader.string();
          break;
        case 2:
          message.proposalID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProposedChain {
    const obj = createBaseProposedChain();
    if (isSet(object.chainID)) obj.chainID = String(object.chainID);
    if (isSet(object.proposalID)) obj.proposalID = BigInt(object.proposalID.toString());
    return obj;
  },
  toJSON(message: ProposedChain): JsonSafe<ProposedChain> {
    const obj: any = {};
    message.chainID !== undefined && (obj.chainID = message.chainID);
    message.proposalID !== undefined && (obj.proposalID = (message.proposalID || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProposedChain>, I>>(object: I): ProposedChain {
    const message = createBaseProposedChain();
    message.chainID = object.chainID ?? "";
    if (object.proposalID !== undefined && object.proposalID !== null) {
      message.proposalID = BigInt(object.proposalID.toString());
    }
    return message;
  },
};
function createBaseQueryAllPairsValConAddrByConsumerChainIDRequest(): QueryAllPairsValConAddrByConsumerChainIDRequest {
  return {
    chainId: "",
  };
}
export const QueryAllPairsValConAddrByConsumerChainIDRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryAllPairsValConAddrByConsumerChainIDRequest",
  encode(
    message: QueryAllPairsValConAddrByConsumerChainIDRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllPairsValConAddrByConsumerChainIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPairsValConAddrByConsumerChainIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPairsValConAddrByConsumerChainIDRequest {
    const obj = createBaseQueryAllPairsValConAddrByConsumerChainIDRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(
    message: QueryAllPairsValConAddrByConsumerChainIDRequest,
  ): JsonSafe<QueryAllPairsValConAddrByConsumerChainIDRequest> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPairsValConAddrByConsumerChainIDRequest>, I>>(
    object: I,
  ): QueryAllPairsValConAddrByConsumerChainIDRequest {
    const message = createBaseQueryAllPairsValConAddrByConsumerChainIDRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryAllPairsValConAddrByConsumerChainIDResponse(): QueryAllPairsValConAddrByConsumerChainIDResponse {
  return {
    pairValConAddr: [],
  };
}
export const QueryAllPairsValConAddrByConsumerChainIDResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryAllPairsValConAddrByConsumerChainIDResponse",
  encode(
    message: QueryAllPairsValConAddrByConsumerChainIDResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.pairValConAddr) {
      PairValConAddrProviderAndConsumer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAllPairsValConAddrByConsumerChainIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllPairsValConAddrByConsumerChainIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairValConAddr.push(PairValConAddrProviderAndConsumer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllPairsValConAddrByConsumerChainIDResponse {
    const obj = createBaseQueryAllPairsValConAddrByConsumerChainIDResponse();
    if (Array.isArray(object?.pairValConAddr))
      obj.pairValConAddr = object.pairValConAddr.map((e: any) =>
        PairValConAddrProviderAndConsumer.fromJSON(e),
      );
    return obj;
  },
  toJSON(
    message: QueryAllPairsValConAddrByConsumerChainIDResponse,
  ): JsonSafe<QueryAllPairsValConAddrByConsumerChainIDResponse> {
    const obj: any = {};
    if (message.pairValConAddr) {
      obj.pairValConAddr = message.pairValConAddr.map((e) =>
        e ? PairValConAddrProviderAndConsumer.toJSON(e) : undefined,
      );
    } else {
      obj.pairValConAddr = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllPairsValConAddrByConsumerChainIDResponse>, I>>(
    object: I,
  ): QueryAllPairsValConAddrByConsumerChainIDResponse {
    const message = createBaseQueryAllPairsValConAddrByConsumerChainIDResponse();
    message.pairValConAddr =
      object.pairValConAddr?.map((e) => PairValConAddrProviderAndConsumer.fromPartial(e)) || [];
    return message;
  },
};
function createBasePairValConAddrProviderAndConsumer(): PairValConAddrProviderAndConsumer {
  return {
    providerAddress: "",
    consumerAddress: "",
    consumerKey: undefined,
  };
}
export const PairValConAddrProviderAndConsumer = {
  typeUrl: "/interchain_security.ccv.provider.v1.PairValConAddrProviderAndConsumer",
  encode(
    message: PairValConAddrProviderAndConsumer,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.providerAddress !== "") {
      writer.uint32(10).string(message.providerAddress);
    }
    if (message.consumerAddress !== "") {
      writer.uint32(18).string(message.consumerAddress);
    }
    if (message.consumerKey !== undefined) {
      PublicKey.encode(message.consumerKey, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PairValConAddrProviderAndConsumer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePairValConAddrProviderAndConsumer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerAddress = reader.string();
          break;
        case 2:
          message.consumerAddress = reader.string();
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
  fromJSON(object: any): PairValConAddrProviderAndConsumer {
    const obj = createBasePairValConAddrProviderAndConsumer();
    if (isSet(object.providerAddress)) obj.providerAddress = String(object.providerAddress);
    if (isSet(object.consumerAddress)) obj.consumerAddress = String(object.consumerAddress);
    if (isSet(object.consumerKey)) obj.consumerKey = PublicKey.fromJSON(object.consumerKey);
    return obj;
  },
  toJSON(message: PairValConAddrProviderAndConsumer): JsonSafe<PairValConAddrProviderAndConsumer> {
    const obj: any = {};
    message.providerAddress !== undefined && (obj.providerAddress = message.providerAddress);
    message.consumerAddress !== undefined && (obj.consumerAddress = message.consumerAddress);
    message.consumerKey !== undefined &&
      (obj.consumerKey = message.consumerKey ? PublicKey.toJSON(message.consumerKey) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PairValConAddrProviderAndConsumer>, I>>(
    object: I,
  ): PairValConAddrProviderAndConsumer {
    const message = createBasePairValConAddrProviderAndConsumer();
    message.providerAddress = object.providerAddress ?? "";
    message.consumerAddress = object.consumerAddress ?? "";
    if (object.consumerKey !== undefined && object.consumerKey !== null) {
      message.consumerKey = PublicKey.fromPartial(object.consumerKey);
    }
    return message;
  },
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryConsumerChainOptedInValidatorsRequest(): QueryConsumerChainOptedInValidatorsRequest {
  return {
    chainId: "",
  };
}
export const QueryConsumerChainOptedInValidatorsRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerChainOptedInValidatorsRequest",
  encode(
    message: QueryConsumerChainOptedInValidatorsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerChainOptedInValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerChainOptedInValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerChainOptedInValidatorsRequest {
    const obj = createBaseQueryConsumerChainOptedInValidatorsRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(
    message: QueryConsumerChainOptedInValidatorsRequest,
  ): JsonSafe<QueryConsumerChainOptedInValidatorsRequest> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerChainOptedInValidatorsRequest>, I>>(
    object: I,
  ): QueryConsumerChainOptedInValidatorsRequest {
    const message = createBaseQueryConsumerChainOptedInValidatorsRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryConsumerChainOptedInValidatorsResponse(): QueryConsumerChainOptedInValidatorsResponse {
  return {
    validatorsProviderAddresses: [],
  };
}
export const QueryConsumerChainOptedInValidatorsResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerChainOptedInValidatorsResponse",
  encode(
    message: QueryConsumerChainOptedInValidatorsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.validatorsProviderAddresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerChainOptedInValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerChainOptedInValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorsProviderAddresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerChainOptedInValidatorsResponse {
    const obj = createBaseQueryConsumerChainOptedInValidatorsResponse();
    if (Array.isArray(object?.validatorsProviderAddresses))
      obj.validatorsProviderAddresses = object.validatorsProviderAddresses.map((e: any) => String(e));
    return obj;
  },
  toJSON(
    message: QueryConsumerChainOptedInValidatorsResponse,
  ): JsonSafe<QueryConsumerChainOptedInValidatorsResponse> {
    const obj: any = {};
    if (message.validatorsProviderAddresses) {
      obj.validatorsProviderAddresses = message.validatorsProviderAddresses.map((e) => e);
    } else {
      obj.validatorsProviderAddresses = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerChainOptedInValidatorsResponse>, I>>(
    object: I,
  ): QueryConsumerChainOptedInValidatorsResponse {
    const message = createBaseQueryConsumerChainOptedInValidatorsResponse();
    message.validatorsProviderAddresses = object.validatorsProviderAddresses?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryConsumerValidatorsRequest(): QueryConsumerValidatorsRequest {
  return {
    chainId: "",
  };
}
export const QueryConsumerValidatorsRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerValidatorsRequest",
  encode(
    message: QueryConsumerValidatorsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerValidatorsRequest {
    const obj = createBaseQueryConsumerValidatorsRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: QueryConsumerValidatorsRequest): JsonSafe<QueryConsumerValidatorsRequest> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerValidatorsRequest>, I>>(
    object: I,
  ): QueryConsumerValidatorsRequest {
    const message = createBaseQueryConsumerValidatorsRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryConsumerValidatorsValidator(): QueryConsumerValidatorsValidator {
  return {
    providerAddress: "",
    consumerKey: undefined,
    power: BigInt(0),
  };
}
export const QueryConsumerValidatorsValidator = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerValidatorsValidator",
  encode(
    message: QueryConsumerValidatorsValidator,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.providerAddress !== "") {
      writer.uint32(10).string(message.providerAddress);
    }
    if (message.consumerKey !== undefined) {
      PublicKey.encode(message.consumerKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerValidatorsValidator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerValidatorsValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerAddress = reader.string();
          break;
        case 2:
          message.consumerKey = PublicKey.decode(reader, reader.uint32());
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
  fromJSON(object: any): QueryConsumerValidatorsValidator {
    const obj = createBaseQueryConsumerValidatorsValidator();
    if (isSet(object.providerAddress)) obj.providerAddress = String(object.providerAddress);
    if (isSet(object.consumerKey)) obj.consumerKey = PublicKey.fromJSON(object.consumerKey);
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    return obj;
  },
  toJSON(message: QueryConsumerValidatorsValidator): JsonSafe<QueryConsumerValidatorsValidator> {
    const obj: any = {};
    message.providerAddress !== undefined && (obj.providerAddress = message.providerAddress);
    message.consumerKey !== undefined &&
      (obj.consumerKey = message.consumerKey ? PublicKey.toJSON(message.consumerKey) : undefined);
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerValidatorsValidator>, I>>(
    object: I,
  ): QueryConsumerValidatorsValidator {
    const message = createBaseQueryConsumerValidatorsValidator();
    message.providerAddress = object.providerAddress ?? "";
    if (object.consumerKey !== undefined && object.consumerKey !== null) {
      message.consumerKey = PublicKey.fromPartial(object.consumerKey);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    return message;
  },
};
function createBaseQueryConsumerValidatorsResponse(): QueryConsumerValidatorsResponse {
  return {
    validators: [],
  };
}
export const QueryConsumerValidatorsResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerValidatorsResponse",
  encode(
    message: QueryConsumerValidatorsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.validators) {
      QueryConsumerValidatorsValidator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsumerValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(QueryConsumerValidatorsValidator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerValidatorsResponse {
    const obj = createBaseQueryConsumerValidatorsResponse();
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => QueryConsumerValidatorsValidator.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryConsumerValidatorsResponse): JsonSafe<QueryConsumerValidatorsResponse> {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? QueryConsumerValidatorsValidator.toJSON(e) : undefined,
      );
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerValidatorsResponse>, I>>(
    object: I,
  ): QueryConsumerValidatorsResponse {
    const message = createBaseQueryConsumerValidatorsResponse();
    message.validators = object.validators?.map((e) => QueryConsumerValidatorsValidator.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryConsumerChainsValidatorHasToValidateRequest(): QueryConsumerChainsValidatorHasToValidateRequest {
  return {
    providerAddress: "",
  };
}
export const QueryConsumerChainsValidatorHasToValidateRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerChainsValidatorHasToValidateRequest",
  encode(
    message: QueryConsumerChainsValidatorHasToValidateRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.providerAddress !== "") {
      writer.uint32(10).string(message.providerAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryConsumerChainsValidatorHasToValidateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerChainsValidatorHasToValidateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerChainsValidatorHasToValidateRequest {
    const obj = createBaseQueryConsumerChainsValidatorHasToValidateRequest();
    if (isSet(object.providerAddress)) obj.providerAddress = String(object.providerAddress);
    return obj;
  },
  toJSON(
    message: QueryConsumerChainsValidatorHasToValidateRequest,
  ): JsonSafe<QueryConsumerChainsValidatorHasToValidateRequest> {
    const obj: any = {};
    message.providerAddress !== undefined && (obj.providerAddress = message.providerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerChainsValidatorHasToValidateRequest>, I>>(
    object: I,
  ): QueryConsumerChainsValidatorHasToValidateRequest {
    const message = createBaseQueryConsumerChainsValidatorHasToValidateRequest();
    message.providerAddress = object.providerAddress ?? "";
    return message;
  },
};
function createBaseQueryConsumerChainsValidatorHasToValidateResponse(): QueryConsumerChainsValidatorHasToValidateResponse {
  return {
    consumerChainIds: [],
  };
}
export const QueryConsumerChainsValidatorHasToValidateResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryConsumerChainsValidatorHasToValidateResponse",
  encode(
    message: QueryConsumerChainsValidatorHasToValidateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.consumerChainIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryConsumerChainsValidatorHasToValidateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsumerChainsValidatorHasToValidateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consumerChainIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsumerChainsValidatorHasToValidateResponse {
    const obj = createBaseQueryConsumerChainsValidatorHasToValidateResponse();
    if (Array.isArray(object?.consumerChainIds))
      obj.consumerChainIds = object.consumerChainIds.map((e: any) => String(e));
    return obj;
  },
  toJSON(
    message: QueryConsumerChainsValidatorHasToValidateResponse,
  ): JsonSafe<QueryConsumerChainsValidatorHasToValidateResponse> {
    const obj: any = {};
    if (message.consumerChainIds) {
      obj.consumerChainIds = message.consumerChainIds.map((e) => e);
    } else {
      obj.consumerChainIds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsumerChainsValidatorHasToValidateResponse>, I>>(
    object: I,
  ): QueryConsumerChainsValidatorHasToValidateResponse {
    const message = createBaseQueryConsumerChainsValidatorHasToValidateResponse();
    message.consumerChainIds = object.consumerChainIds?.map((e) => e) || [];
    return message;
  },
};
function createBaseQueryValidatorConsumerCommissionRateRequest(): QueryValidatorConsumerCommissionRateRequest {
  return {
    chainId: "",
    providerAddress: "",
  };
}
export const QueryValidatorConsumerCommissionRateRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryValidatorConsumerCommissionRateRequest",
  encode(
    message: QueryValidatorConsumerCommissionRateRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.providerAddress !== "") {
      writer.uint32(18).string(message.providerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorConsumerCommissionRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorConsumerCommissionRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.providerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorConsumerCommissionRateRequest {
    const obj = createBaseQueryValidatorConsumerCommissionRateRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.providerAddress)) obj.providerAddress = String(object.providerAddress);
    return obj;
  },
  toJSON(
    message: QueryValidatorConsumerCommissionRateRequest,
  ): JsonSafe<QueryValidatorConsumerCommissionRateRequest> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.providerAddress !== undefined && (obj.providerAddress = message.providerAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorConsumerCommissionRateRequest>, I>>(
    object: I,
  ): QueryValidatorConsumerCommissionRateRequest {
    const message = createBaseQueryValidatorConsumerCommissionRateRequest();
    message.chainId = object.chainId ?? "";
    message.providerAddress = object.providerAddress ?? "";
    return message;
  },
};
function createBaseQueryValidatorConsumerCommissionRateResponse(): QueryValidatorConsumerCommissionRateResponse {
  return {
    rate: "",
  };
}
export const QueryValidatorConsumerCommissionRateResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryValidatorConsumerCommissionRateResponse",
  encode(
    message: QueryValidatorConsumerCommissionRateResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.rate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.rate, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorConsumerCommissionRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorConsumerCommissionRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorConsumerCommissionRateResponse {
    const obj = createBaseQueryValidatorConsumerCommissionRateResponse();
    if (isSet(object.rate)) obj.rate = String(object.rate);
    return obj;
  },
  toJSON(
    message: QueryValidatorConsumerCommissionRateResponse,
  ): JsonSafe<QueryValidatorConsumerCommissionRateResponse> {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryValidatorConsumerCommissionRateResponse>, I>>(
    object: I,
  ): QueryValidatorConsumerCommissionRateResponse {
    const message = createBaseQueryValidatorConsumerCommissionRateResponse();
    message.rate = object.rate ?? "";
    return message;
  },
};
function createBaseQueryOldestUnconfirmedVscRequest(): QueryOldestUnconfirmedVscRequest {
  return {
    chainId: "",
  };
}
export const QueryOldestUnconfirmedVscRequest = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryOldestUnconfirmedVscRequest",
  encode(
    message: QueryOldestUnconfirmedVscRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOldestUnconfirmedVscRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOldestUnconfirmedVscRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOldestUnconfirmedVscRequest {
    const obj = createBaseQueryOldestUnconfirmedVscRequest();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    return obj;
  },
  toJSON(message: QueryOldestUnconfirmedVscRequest): JsonSafe<QueryOldestUnconfirmedVscRequest> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOldestUnconfirmedVscRequest>, I>>(
    object: I,
  ): QueryOldestUnconfirmedVscRequest {
    const message = createBaseQueryOldestUnconfirmedVscRequest();
    message.chainId = object.chainId ?? "";
    return message;
  },
};
function createBaseQueryOldestUnconfirmedVscResponse(): QueryOldestUnconfirmedVscResponse {
  return {
    vscSendTimestamp: VscSendTimestamp.fromPartial({}),
  };
}
export const QueryOldestUnconfirmedVscResponse = {
  typeUrl: "/interchain_security.ccv.provider.v1.QueryOldestUnconfirmedVscResponse",
  encode(
    message: QueryOldestUnconfirmedVscResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.vscSendTimestamp !== undefined) {
      VscSendTimestamp.encode(message.vscSendTimestamp, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOldestUnconfirmedVscResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOldestUnconfirmedVscResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vscSendTimestamp = VscSendTimestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOldestUnconfirmedVscResponse {
    const obj = createBaseQueryOldestUnconfirmedVscResponse();
    if (isSet(object.vscSendTimestamp))
      obj.vscSendTimestamp = VscSendTimestamp.fromJSON(object.vscSendTimestamp);
    return obj;
  },
  toJSON(message: QueryOldestUnconfirmedVscResponse): JsonSafe<QueryOldestUnconfirmedVscResponse> {
    const obj: any = {};
    message.vscSendTimestamp !== undefined &&
      (obj.vscSendTimestamp = message.vscSendTimestamp
        ? VscSendTimestamp.toJSON(message.vscSendTimestamp)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOldestUnconfirmedVscResponse>, I>>(
    object: I,
  ): QueryOldestUnconfirmedVscResponse {
    const message = createBaseQueryOldestUnconfirmedVscResponse();
    if (object.vscSendTimestamp !== undefined && object.vscSendTimestamp !== null) {
      message.vscSendTimestamp = VscSendTimestamp.fromPartial(object.vscSendTimestamp);
    }
    return message;
  },
};
