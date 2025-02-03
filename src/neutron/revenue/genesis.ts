/* eslint-disable */
import { Params } from "../../ibc/core/client/v1/client";
import { Any } from "../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "neutron.revenue";
/** Defines the revenue module's genesis state. */
export interface GenesisState {
  /** Revenue module parameters. */
  params: Params;
  /** Revenue module state. */
  state: State;
  /** Revenue module list of validators. */
  validators: ValidatorInfo[];
  /** CumulativePrices is accumulate prices of the Revenue denom to calculate TWAP price for a given period of time */
  cumulativePrices: CumulativePrice[];
}
/** Contains information about a validator. */
export interface ValidatorInfo {
  /** The validator's consensus node address. */
  consensusAddress: string;
  /** The number of blocks commited by the validator in the current payment period. */
  commitedBlocksInPeriod: bigint;
  /** The number of oracle votes commited by the validator in the current payment period. */
  commitedOracleVotesInPeriod: bigint;
}
/** Contains information about the current state of the revenue module. */
export interface State {
  /**
   * Information specific to the current payment schedule. This can represent different types of
   * payment schedules (e.g., monthly or block-based).
   */
  paymentSchedule?: Any;
}
/** Represents a payment schedule where revenue payments are processed once a month. */
export interface MonthlyPaymentSchedule {
  /** A numeric representation of the current month. */
  currentMonth: bigint;
  /** The block height at which the current month started. */
  currentMonthStartBlock: bigint;
}
/**
 * Represents a payment schedule where revenue payments are processed after a specified number
 * of blocks.
 */
export interface BlockBasedPaymentSchedule {
  /** The number of blocks in each payment period. */
  blocksPerPeriod: bigint;
  /** The block height at which the current payment period started. */
  currentPeriodStartBlock: bigint;
}
/** Represents a payment schedule where revenue is never distributed. */
export interface EmptyPaymentSchedule {}
/**
 * CumulativePrice is a structure that contains the cumulative price of an asset over the
 * entire observation period, as well as the last recorded asset price
 * and the timestamp at which this price is valid.
 *
 * It is used to calculate TWAP as:
 * twap_from_time_t(n)_to_time_t(n-1) = (cumulative_price_at_t(n) - cumulative_price_at_t(n-1))/(t(n) - t(n-1))
 */
export interface CumulativePrice {
  /**
   * Cumulative price of a denom from the start of monitoring to the last block
   * calculates as
   * `cumulative_price at timestamp t(n)` = `last_price at t(n-1)` * (t(n) - t(n-1)) + `cumulative_price at timestamp t(n-1)`
   */
  cumulativePrice: string;
  /** last_price is the price at the current timestamp */
  lastPrice: string;
  /** Timestamp when the price has been saved. */
  timestamp: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    state: State.fromPartial({}),
    validators: [],
    cumulativePrices: [],
  };
}
export const GenesisState = {
  typeUrl: "/neutron.revenue.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.cumulativePrices) {
      CumulativePrice.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = State.decode(reader, reader.uint32());
          break;
        case 3:
          message.validators.push(ValidatorInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.cumulativePrices.push(CumulativePrice.decode(reader, reader.uint32()));
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
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.state)) obj.state = State.fromJSON(object.state);
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => ValidatorInfo.fromJSON(e));
    if (Array.isArray(object?.cumulativePrices))
      obj.cumulativePrices = object.cumulativePrices.map((e: any) => CumulativePrice.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.state !== undefined && (obj.state = message.state ? State.toJSON(message.state) : undefined);
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? ValidatorInfo.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    if (message.cumulativePrices) {
      obj.cumulativePrices = message.cumulativePrices.map((e) => (e ? CumulativePrice.toJSON(e) : undefined));
    } else {
      obj.cumulativePrices = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    }
    message.validators = object.validators?.map((e) => ValidatorInfo.fromPartial(e)) || [];
    message.cumulativePrices = object.cumulativePrices?.map((e) => CumulativePrice.fromPartial(e)) || [];
    return message;
  },
};
function createBaseValidatorInfo(): ValidatorInfo {
  return {
    consensusAddress: "",
    commitedBlocksInPeriod: BigInt(0),
    commitedOracleVotesInPeriod: BigInt(0),
  };
}
export const ValidatorInfo = {
  typeUrl: "/neutron.revenue.ValidatorInfo",
  encode(message: ValidatorInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensusAddress !== "") {
      writer.uint32(10).string(message.consensusAddress);
    }
    if (message.commitedBlocksInPeriod !== BigInt(0)) {
      writer.uint32(16).uint64(message.commitedBlocksInPeriod);
    }
    if (message.commitedOracleVotesInPeriod !== BigInt(0)) {
      writer.uint32(24).uint64(message.commitedOracleVotesInPeriod);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusAddress = reader.string();
          break;
        case 2:
          message.commitedBlocksInPeriod = reader.uint64();
          break;
        case 3:
          message.commitedOracleVotesInPeriod = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorInfo {
    const obj = createBaseValidatorInfo();
    if (isSet(object.consensusAddress)) obj.consensusAddress = String(object.consensusAddress);
    if (isSet(object.commitedBlocksInPeriod))
      obj.commitedBlocksInPeriod = BigInt(object.commitedBlocksInPeriod.toString());
    if (isSet(object.commitedOracleVotesInPeriod))
      obj.commitedOracleVotesInPeriod = BigInt(object.commitedOracleVotesInPeriod.toString());
    return obj;
  },
  toJSON(message: ValidatorInfo): JsonSafe<ValidatorInfo> {
    const obj: any = {};
    message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
    message.commitedBlocksInPeriod !== undefined &&
      (obj.commitedBlocksInPeriod = (message.commitedBlocksInPeriod || BigInt(0)).toString());
    message.commitedOracleVotesInPeriod !== undefined &&
      (obj.commitedOracleVotesInPeriod = (message.commitedOracleVotesInPeriod || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorInfo>, I>>(object: I): ValidatorInfo {
    const message = createBaseValidatorInfo();
    message.consensusAddress = object.consensusAddress ?? "";
    if (object.commitedBlocksInPeriod !== undefined && object.commitedBlocksInPeriod !== null) {
      message.commitedBlocksInPeriod = BigInt(object.commitedBlocksInPeriod.toString());
    }
    if (object.commitedOracleVotesInPeriod !== undefined && object.commitedOracleVotesInPeriod !== null) {
      message.commitedOracleVotesInPeriod = BigInt(object.commitedOracleVotesInPeriod.toString());
    }
    return message;
  },
};
function createBaseState(): State {
  return {
    paymentSchedule: undefined,
  };
}
export const State = {
  typeUrl: "/neutron.revenue.State",
  encode(message: State, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paymentSchedule !== undefined) {
      Any.encode(message.paymentSchedule, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): State {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paymentSchedule = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): State {
    const obj = createBaseState();
    if (isSet(object.paymentSchedule)) obj.paymentSchedule = Any.fromJSON(object.paymentSchedule);
    return obj;
  },
  toJSON(message: State): JsonSafe<State> {
    const obj: any = {};
    message.paymentSchedule !== undefined &&
      (obj.paymentSchedule = message.paymentSchedule ? Any.toJSON(message.paymentSchedule) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    if (object.paymentSchedule !== undefined && object.paymentSchedule !== null) {
      message.paymentSchedule = Any.fromPartial(object.paymentSchedule);
    }
    return message;
  },
};
function createBaseMonthlyPaymentSchedule(): MonthlyPaymentSchedule {
  return {
    currentMonth: BigInt(0),
    currentMonthStartBlock: BigInt(0),
  };
}
export const MonthlyPaymentSchedule = {
  typeUrl: "/neutron.revenue.MonthlyPaymentSchedule",
  encode(message: MonthlyPaymentSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentMonth !== BigInt(0)) {
      writer.uint32(8).uint64(message.currentMonth);
    }
    if (message.currentMonthStartBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentMonthStartBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MonthlyPaymentSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonthlyPaymentSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentMonth = reader.uint64();
          break;
        case 2:
          message.currentMonthStartBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MonthlyPaymentSchedule {
    const obj = createBaseMonthlyPaymentSchedule();
    if (isSet(object.currentMonth)) obj.currentMonth = BigInt(object.currentMonth.toString());
    if (isSet(object.currentMonthStartBlock))
      obj.currentMonthStartBlock = BigInt(object.currentMonthStartBlock.toString());
    return obj;
  },
  toJSON(message: MonthlyPaymentSchedule): JsonSafe<MonthlyPaymentSchedule> {
    const obj: any = {};
    message.currentMonth !== undefined && (obj.currentMonth = (message.currentMonth || BigInt(0)).toString());
    message.currentMonthStartBlock !== undefined &&
      (obj.currentMonthStartBlock = (message.currentMonthStartBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MonthlyPaymentSchedule>, I>>(object: I): MonthlyPaymentSchedule {
    const message = createBaseMonthlyPaymentSchedule();
    if (object.currentMonth !== undefined && object.currentMonth !== null) {
      message.currentMonth = BigInt(object.currentMonth.toString());
    }
    if (object.currentMonthStartBlock !== undefined && object.currentMonthStartBlock !== null) {
      message.currentMonthStartBlock = BigInt(object.currentMonthStartBlock.toString());
    }
    return message;
  },
};
function createBaseBlockBasedPaymentSchedule(): BlockBasedPaymentSchedule {
  return {
    blocksPerPeriod: BigInt(0),
    currentPeriodStartBlock: BigInt(0),
  };
}
export const BlockBasedPaymentSchedule = {
  typeUrl: "/neutron.revenue.BlockBasedPaymentSchedule",
  encode(message: BlockBasedPaymentSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blocksPerPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.blocksPerPeriod);
    }
    if (message.currentPeriodStartBlock !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentPeriodStartBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockBasedPaymentSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockBasedPaymentSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocksPerPeriod = reader.uint64();
          break;
        case 2:
          message.currentPeriodStartBlock = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockBasedPaymentSchedule {
    const obj = createBaseBlockBasedPaymentSchedule();
    if (isSet(object.blocksPerPeriod)) obj.blocksPerPeriod = BigInt(object.blocksPerPeriod.toString());
    if (isSet(object.currentPeriodStartBlock))
      obj.currentPeriodStartBlock = BigInt(object.currentPeriodStartBlock.toString());
    return obj;
  },
  toJSON(message: BlockBasedPaymentSchedule): JsonSafe<BlockBasedPaymentSchedule> {
    const obj: any = {};
    message.blocksPerPeriod !== undefined &&
      (obj.blocksPerPeriod = (message.blocksPerPeriod || BigInt(0)).toString());
    message.currentPeriodStartBlock !== undefined &&
      (obj.currentPeriodStartBlock = (message.currentPeriodStartBlock || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BlockBasedPaymentSchedule>, I>>(
    object: I,
  ): BlockBasedPaymentSchedule {
    const message = createBaseBlockBasedPaymentSchedule();
    if (object.blocksPerPeriod !== undefined && object.blocksPerPeriod !== null) {
      message.blocksPerPeriod = BigInt(object.blocksPerPeriod.toString());
    }
    if (object.currentPeriodStartBlock !== undefined && object.currentPeriodStartBlock !== null) {
      message.currentPeriodStartBlock = BigInt(object.currentPeriodStartBlock.toString());
    }
    return message;
  },
};
function createBaseEmptyPaymentSchedule(): EmptyPaymentSchedule {
  return {};
}
export const EmptyPaymentSchedule = {
  typeUrl: "/neutron.revenue.EmptyPaymentSchedule",
  encode(_: EmptyPaymentSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EmptyPaymentSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyPaymentSchedule();
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
  fromJSON(_: any): EmptyPaymentSchedule {
    const obj = createBaseEmptyPaymentSchedule();
    return obj;
  },
  toJSON(_: EmptyPaymentSchedule): JsonSafe<EmptyPaymentSchedule> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EmptyPaymentSchedule>, I>>(_: I): EmptyPaymentSchedule {
    const message = createBaseEmptyPaymentSchedule();
    return message;
  },
};
function createBaseCumulativePrice(): CumulativePrice {
  return {
    cumulativePrice: "",
    lastPrice: "",
    timestamp: BigInt(0),
  };
}
export const CumulativePrice = {
  typeUrl: "/neutron.revenue.CumulativePrice",
  encode(message: CumulativePrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cumulativePrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.cumulativePrice, 18).atomics);
    }
    if (message.lastPrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.lastPrice, 18).atomics);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).int64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CumulativePrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCumulativePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.lastPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.timestamp = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CumulativePrice {
    const obj = createBaseCumulativePrice();
    if (isSet(object.cumulativePrice)) obj.cumulativePrice = String(object.cumulativePrice);
    if (isSet(object.lastPrice)) obj.lastPrice = String(object.lastPrice);
    if (isSet(object.timestamp)) obj.timestamp = BigInt(object.timestamp.toString());
    return obj;
  },
  toJSON(message: CumulativePrice): JsonSafe<CumulativePrice> {
    const obj: any = {};
    message.cumulativePrice !== undefined && (obj.cumulativePrice = message.cumulativePrice);
    message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CumulativePrice>, I>>(object: I): CumulativePrice {
    const message = createBaseCumulativePrice();
    message.cumulativePrice = object.cumulativePrice ?? "";
    message.lastPrice = object.lastPrice ?? "";
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
};
