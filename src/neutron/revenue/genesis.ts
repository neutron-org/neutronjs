//@ts-nocheck
/* eslint-disable */
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "neutron.revenue";
/** Defines the revenue module's genesis state. */
export interface GenesisState {
  /** Revenue module parameters. */
  params: Params;
  /**
   * The current payment schedule. If nil, the module will use the respective payment schedule for
   * the payment schedule type specified in the params.
   */
  paymentSchedule?: PaymentSchedule;
  /** Revenue module list of validators. */
  validators: ValidatorInfo[];
}
/**
 * A model that contains information specific to the currently active payment schedule. The oneof
 * implementations define conditions for payment periods ending and track the progress of the
 * current payment period. This is a module's state variable.
 * The inner oneof must correspond with the respective payment schedule type defined in the module
 * params. In runtime, on a mismatch due to e.g. MsgUpdateParams execution, the module will switch
 * to the payment schedule that corresponds to the payment schedule type automatically.
 */
export interface PaymentSchedule {
  monthlyPaymentSchedule?: MonthlyPaymentSchedule;
  blockBasedPaymentSchedule?: BlockBasedPaymentSchedule;
  emptyPaymentSchedule?: EmptyPaymentSchedule;
}
/** Contains information about a validator. */
export interface ValidatorInfo {
  /** The validator's node operator address. */
  valOperAddress: string;
  /** The number of blocks the validator has committed in the current payment period. */
  commitedBlocksInPeriod: bigint;
  /** The number of oracle votes the validator has submitted in the current payment period. */
  commitedOracleVotesInPeriod: bigint;
  /**
   * The number of blocks the validator has remained in the active validator set for in the
   * current payment period.
   */
  inActiveValsetForBlocksInPeriod: bigint;
}
/** Represents a payment schedule where revenue payments are processed once a month. */
export interface MonthlyPaymentSchedule {
  /** The block height at which the current month started. */
  currentMonthStartBlock: bigint;
  /** The timestamp of the block at which the current month started. */
  currentMonthStartBlockTs: bigint;
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
 * Represents a data structure that tracks the cumulative price of an asset over the entire
 * observation period, along with the last absolute asset price and the timestamp when this
 * price was last recorded.
 */
export interface RewardAssetPrice {
  /**
   * The cumulative price of the reward asset within the TWAP window. It is calculated as:
   * `cumulative_price_at_timestamp_t(n)` = `last_price_at_t(n-1)` * (t(n) - t(n-1)) + `cumulative_price_at_timestamp_t(n-1)`
   */
  cumulativePrice: string;
  /** The price of the reward asset in reward quote asset that corresponds to the timestamp. */
  absolutePrice: string;
  /** The timestamp of the last update of the absolute and cumulative price. */
  timestamp: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    paymentSchedule: undefined,
    validators: [],
  };
}
export const GenesisState = {
  typeUrl: "/neutron.revenue.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.paymentSchedule !== undefined) {
      PaymentSchedule.encode(message.paymentSchedule, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.validators) {
      ValidatorInfo.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.paymentSchedule = PaymentSchedule.decode(reader, reader.uint32());
          break;
        case 3:
          message.validators.push(ValidatorInfo.decode(reader, reader.uint32()));
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
    if (isSet(object.paymentSchedule)) obj.paymentSchedule = PaymentSchedule.fromJSON(object.paymentSchedule);
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => ValidatorInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.paymentSchedule !== undefined &&
      (obj.paymentSchedule = message.paymentSchedule
        ? PaymentSchedule.toJSON(message.paymentSchedule)
        : undefined);
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? ValidatorInfo.toJSON(e) : undefined));
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.paymentSchedule !== undefined && object.paymentSchedule !== null) {
      message.paymentSchedule = PaymentSchedule.fromPartial(object.paymentSchedule);
    }
    message.validators = object.validators?.map((e) => ValidatorInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.payment_schedule !== undefined && object.payment_schedule !== null) {
      message.paymentSchedule = PaymentSchedule.fromAmino(object.payment_schedule);
    }
    message.validators = object.validators?.map((e) => ValidatorInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.payment_schedule = message.paymentSchedule
      ? PaymentSchedule.toAmino(message.paymentSchedule)
      : undefined;
    if (message.validators) {
      obj.validators = message.validators.map((e) => (e ? ValidatorInfo.toAmino(e) : undefined));
    } else {
      obj.validators = message.validators;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
};
function createBasePaymentSchedule(): PaymentSchedule {
  return {
    monthlyPaymentSchedule: undefined,
    blockBasedPaymentSchedule: undefined,
    emptyPaymentSchedule: undefined,
  };
}
export const PaymentSchedule = {
  typeUrl: "/neutron.revenue.PaymentSchedule",
  encode(message: PaymentSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.monthlyPaymentSchedule !== undefined) {
      MonthlyPaymentSchedule.encode(message.monthlyPaymentSchedule, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockBasedPaymentSchedule !== undefined) {
      BlockBasedPaymentSchedule.encode(message.blockBasedPaymentSchedule, writer.uint32(18).fork()).ldelim();
    }
    if (message.emptyPaymentSchedule !== undefined) {
      EmptyPaymentSchedule.encode(message.emptyPaymentSchedule, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PaymentSchedule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monthlyPaymentSchedule = MonthlyPaymentSchedule.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockBasedPaymentSchedule = BlockBasedPaymentSchedule.decode(reader, reader.uint32());
          break;
        case 3:
          message.emptyPaymentSchedule = EmptyPaymentSchedule.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PaymentSchedule {
    const obj = createBasePaymentSchedule();
    if (isSet(object.monthlyPaymentSchedule))
      obj.monthlyPaymentSchedule = MonthlyPaymentSchedule.fromJSON(object.monthlyPaymentSchedule);
    if (isSet(object.blockBasedPaymentSchedule))
      obj.blockBasedPaymentSchedule = BlockBasedPaymentSchedule.fromJSON(object.blockBasedPaymentSchedule);
    if (isSet(object.emptyPaymentSchedule))
      obj.emptyPaymentSchedule = EmptyPaymentSchedule.fromJSON(object.emptyPaymentSchedule);
    return obj;
  },
  toJSON(message: PaymentSchedule): JsonSafe<PaymentSchedule> {
    const obj: any = {};
    message.monthlyPaymentSchedule !== undefined &&
      (obj.monthlyPaymentSchedule = message.monthlyPaymentSchedule
        ? MonthlyPaymentSchedule.toJSON(message.monthlyPaymentSchedule)
        : undefined);
    message.blockBasedPaymentSchedule !== undefined &&
      (obj.blockBasedPaymentSchedule = message.blockBasedPaymentSchedule
        ? BlockBasedPaymentSchedule.toJSON(message.blockBasedPaymentSchedule)
        : undefined);
    message.emptyPaymentSchedule !== undefined &&
      (obj.emptyPaymentSchedule = message.emptyPaymentSchedule
        ? EmptyPaymentSchedule.toJSON(message.emptyPaymentSchedule)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PaymentSchedule>, I>>(object: I): PaymentSchedule {
    const message = createBasePaymentSchedule();
    if (object.monthlyPaymentSchedule !== undefined && object.monthlyPaymentSchedule !== null) {
      message.monthlyPaymentSchedule = MonthlyPaymentSchedule.fromPartial(object.monthlyPaymentSchedule);
    }
    if (object.blockBasedPaymentSchedule !== undefined && object.blockBasedPaymentSchedule !== null) {
      message.blockBasedPaymentSchedule = BlockBasedPaymentSchedule.fromPartial(
        object.blockBasedPaymentSchedule,
      );
    }
    if (object.emptyPaymentSchedule !== undefined && object.emptyPaymentSchedule !== null) {
      message.emptyPaymentSchedule = EmptyPaymentSchedule.fromPartial(object.emptyPaymentSchedule);
    }
    return message;
  },
  fromAmino(object: PaymentScheduleAmino): PaymentSchedule {
    const message = createBasePaymentSchedule();
    if (object.monthly_payment_schedule !== undefined && object.monthly_payment_schedule !== null) {
      message.monthlyPaymentSchedule = MonthlyPaymentSchedule.fromAmino(object.monthly_payment_schedule);
    }
    if (object.block_based_payment_schedule !== undefined && object.block_based_payment_schedule !== null) {
      message.blockBasedPaymentSchedule = BlockBasedPaymentSchedule.fromAmino(
        object.block_based_payment_schedule,
      );
    }
    if (object.empty_payment_schedule !== undefined && object.empty_payment_schedule !== null) {
      message.emptyPaymentSchedule = EmptyPaymentSchedule.fromAmino(object.empty_payment_schedule);
    }
    return message;
  },
  toAmino(message: PaymentSchedule): PaymentScheduleAmino {
    const obj: any = {};
    obj.monthly_payment_schedule = message.monthlyPaymentSchedule
      ? MonthlyPaymentSchedule.toAmino(message.monthlyPaymentSchedule)
      : undefined;
    obj.block_based_payment_schedule = message.blockBasedPaymentSchedule
      ? BlockBasedPaymentSchedule.toAmino(message.blockBasedPaymentSchedule)
      : undefined;
    obj.empty_payment_schedule = message.emptyPaymentSchedule
      ? EmptyPaymentSchedule.toAmino(message.emptyPaymentSchedule)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: PaymentScheduleAminoMsg): PaymentSchedule {
    return PaymentSchedule.fromAmino(object.value);
  },
};
function createBaseValidatorInfo(): ValidatorInfo {
  return {
    valOperAddress: "",
    commitedBlocksInPeriod: BigInt(0),
    commitedOracleVotesInPeriod: BigInt(0),
    inActiveValsetForBlocksInPeriod: BigInt(0),
  };
}
export const ValidatorInfo = {
  typeUrl: "/neutron.revenue.ValidatorInfo",
  encode(message: ValidatorInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valOperAddress !== "") {
      writer.uint32(10).string(message.valOperAddress);
    }
    if (message.commitedBlocksInPeriod !== BigInt(0)) {
      writer.uint32(16).uint64(message.commitedBlocksInPeriod);
    }
    if (message.commitedOracleVotesInPeriod !== BigInt(0)) {
      writer.uint32(24).uint64(message.commitedOracleVotesInPeriod);
    }
    if (message.inActiveValsetForBlocksInPeriod !== BigInt(0)) {
      writer.uint32(32).uint64(message.inActiveValsetForBlocksInPeriod);
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
          message.valOperAddress = reader.string();
          break;
        case 2:
          message.commitedBlocksInPeriod = reader.uint64();
          break;
        case 3:
          message.commitedOracleVotesInPeriod = reader.uint64();
          break;
        case 4:
          message.inActiveValsetForBlocksInPeriod = reader.uint64();
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
    if (isSet(object.valOperAddress)) obj.valOperAddress = String(object.valOperAddress);
    if (isSet(object.commitedBlocksInPeriod))
      obj.commitedBlocksInPeriod = BigInt(object.commitedBlocksInPeriod.toString());
    if (isSet(object.commitedOracleVotesInPeriod))
      obj.commitedOracleVotesInPeriod = BigInt(object.commitedOracleVotesInPeriod.toString());
    if (isSet(object.inActiveValsetForBlocksInPeriod))
      obj.inActiveValsetForBlocksInPeriod = BigInt(object.inActiveValsetForBlocksInPeriod.toString());
    return obj;
  },
  toJSON(message: ValidatorInfo): JsonSafe<ValidatorInfo> {
    const obj: any = {};
    message.valOperAddress !== undefined && (obj.valOperAddress = message.valOperAddress);
    message.commitedBlocksInPeriod !== undefined &&
      (obj.commitedBlocksInPeriod = (message.commitedBlocksInPeriod || BigInt(0)).toString());
    message.commitedOracleVotesInPeriod !== undefined &&
      (obj.commitedOracleVotesInPeriod = (message.commitedOracleVotesInPeriod || BigInt(0)).toString());
    message.inActiveValsetForBlocksInPeriod !== undefined &&
      (obj.inActiveValsetForBlocksInPeriod = (
        message.inActiveValsetForBlocksInPeriod || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ValidatorInfo>, I>>(object: I): ValidatorInfo {
    const message = createBaseValidatorInfo();
    message.valOperAddress = object.valOperAddress ?? "";
    if (object.commitedBlocksInPeriod !== undefined && object.commitedBlocksInPeriod !== null) {
      message.commitedBlocksInPeriod = BigInt(object.commitedBlocksInPeriod.toString());
    }
    if (object.commitedOracleVotesInPeriod !== undefined && object.commitedOracleVotesInPeriod !== null) {
      message.commitedOracleVotesInPeriod = BigInt(object.commitedOracleVotesInPeriod.toString());
    }
    if (
      object.inActiveValsetForBlocksInPeriod !== undefined &&
      object.inActiveValsetForBlocksInPeriod !== null
    ) {
      message.inActiveValsetForBlocksInPeriod = BigInt(object.inActiveValsetForBlocksInPeriod.toString());
    }
    return message;
  },
  fromAmino(object: ValidatorInfoAmino): ValidatorInfo {
    const message = createBaseValidatorInfo();
    if (object.val_oper_address !== undefined && object.val_oper_address !== null) {
      message.valOperAddress = object.val_oper_address;
    }
    if (object.commited_blocks_in_period !== undefined && object.commited_blocks_in_period !== null) {
      message.commitedBlocksInPeriod = BigInt(object.commited_blocks_in_period);
    }
    if (
      object.commited_oracle_votes_in_period !== undefined &&
      object.commited_oracle_votes_in_period !== null
    ) {
      message.commitedOracleVotesInPeriod = BigInt(object.commited_oracle_votes_in_period);
    }
    if (
      object.in_active_valset_for_blocks_in_period !== undefined &&
      object.in_active_valset_for_blocks_in_period !== null
    ) {
      message.inActiveValsetForBlocksInPeriod = BigInt(object.in_active_valset_for_blocks_in_period);
    }
    return message;
  },
  toAmino(message: ValidatorInfo): ValidatorInfoAmino {
    const obj: any = {};
    obj.val_oper_address = message.valOperAddress === "" ? undefined : message.valOperAddress;
    obj.commited_blocks_in_period =
      message.commitedBlocksInPeriod !== BigInt(0) ? message.commitedBlocksInPeriod?.toString() : undefined;
    obj.commited_oracle_votes_in_period =
      message.commitedOracleVotesInPeriod !== BigInt(0)
        ? message.commitedOracleVotesInPeriod?.toString()
        : undefined;
    obj.in_active_valset_for_blocks_in_period =
      message.inActiveValsetForBlocksInPeriod !== BigInt(0)
        ? message.inActiveValsetForBlocksInPeriod?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorInfoAminoMsg): ValidatorInfo {
    return ValidatorInfo.fromAmino(object.value);
  },
};
function createBaseMonthlyPaymentSchedule(): MonthlyPaymentSchedule {
  return {
    currentMonthStartBlock: BigInt(0),
    currentMonthStartBlockTs: BigInt(0),
  };
}
export const MonthlyPaymentSchedule = {
  typeUrl: "/neutron.revenue.MonthlyPaymentSchedule",
  encode(message: MonthlyPaymentSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentMonthStartBlock !== BigInt(0)) {
      writer.uint32(8).uint64(message.currentMonthStartBlock);
    }
    if (message.currentMonthStartBlockTs !== BigInt(0)) {
      writer.uint32(16).uint64(message.currentMonthStartBlockTs);
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
          message.currentMonthStartBlock = reader.uint64();
          break;
        case 2:
          message.currentMonthStartBlockTs = reader.uint64();
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
    if (isSet(object.currentMonthStartBlock))
      obj.currentMonthStartBlock = BigInt(object.currentMonthStartBlock.toString());
    if (isSet(object.currentMonthStartBlockTs))
      obj.currentMonthStartBlockTs = BigInt(object.currentMonthStartBlockTs.toString());
    return obj;
  },
  toJSON(message: MonthlyPaymentSchedule): JsonSafe<MonthlyPaymentSchedule> {
    const obj: any = {};
    message.currentMonthStartBlock !== undefined &&
      (obj.currentMonthStartBlock = (message.currentMonthStartBlock || BigInt(0)).toString());
    message.currentMonthStartBlockTs !== undefined &&
      (obj.currentMonthStartBlockTs = (message.currentMonthStartBlockTs || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MonthlyPaymentSchedule>, I>>(object: I): MonthlyPaymentSchedule {
    const message = createBaseMonthlyPaymentSchedule();
    if (object.currentMonthStartBlock !== undefined && object.currentMonthStartBlock !== null) {
      message.currentMonthStartBlock = BigInt(object.currentMonthStartBlock.toString());
    }
    if (object.currentMonthStartBlockTs !== undefined && object.currentMonthStartBlockTs !== null) {
      message.currentMonthStartBlockTs = BigInt(object.currentMonthStartBlockTs.toString());
    }
    return message;
  },
  fromAmino(object: MonthlyPaymentScheduleAmino): MonthlyPaymentSchedule {
    const message = createBaseMonthlyPaymentSchedule();
    if (object.current_month_start_block !== undefined && object.current_month_start_block !== null) {
      message.currentMonthStartBlock = BigInt(object.current_month_start_block);
    }
    if (object.current_month_start_block_ts !== undefined && object.current_month_start_block_ts !== null) {
      message.currentMonthStartBlockTs = BigInt(object.current_month_start_block_ts);
    }
    return message;
  },
  toAmino(message: MonthlyPaymentSchedule): MonthlyPaymentScheduleAmino {
    const obj: any = {};
    obj.current_month_start_block =
      message.currentMonthStartBlock !== BigInt(0) ? message.currentMonthStartBlock?.toString() : undefined;
    obj.current_month_start_block_ts =
      message.currentMonthStartBlockTs !== BigInt(0)
        ? message.currentMonthStartBlockTs?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: MonthlyPaymentScheduleAminoMsg): MonthlyPaymentSchedule {
    return MonthlyPaymentSchedule.fromAmino(object.value);
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
  fromAmino(object: BlockBasedPaymentScheduleAmino): BlockBasedPaymentSchedule {
    const message = createBaseBlockBasedPaymentSchedule();
    if (object.blocks_per_period !== undefined && object.blocks_per_period !== null) {
      message.blocksPerPeriod = BigInt(object.blocks_per_period);
    }
    if (object.current_period_start_block !== undefined && object.current_period_start_block !== null) {
      message.currentPeriodStartBlock = BigInt(object.current_period_start_block);
    }
    return message;
  },
  toAmino(message: BlockBasedPaymentSchedule): BlockBasedPaymentScheduleAmino {
    const obj: any = {};
    obj.blocks_per_period =
      message.blocksPerPeriod !== BigInt(0) ? message.blocksPerPeriod?.toString() : undefined;
    obj.current_period_start_block =
      message.currentPeriodStartBlock !== BigInt(0) ? message.currentPeriodStartBlock?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockBasedPaymentScheduleAminoMsg): BlockBasedPaymentSchedule {
    return BlockBasedPaymentSchedule.fromAmino(object.value);
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
  fromAmino(_: EmptyPaymentScheduleAmino): EmptyPaymentSchedule {
    const message = createBaseEmptyPaymentSchedule();
    return message;
  },
  toAmino(_: EmptyPaymentSchedule): EmptyPaymentScheduleAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: EmptyPaymentScheduleAminoMsg): EmptyPaymentSchedule {
    return EmptyPaymentSchedule.fromAmino(object.value);
  },
};
function createBaseRewardAssetPrice(): RewardAssetPrice {
  return {
    cumulativePrice: "",
    absolutePrice: "",
    timestamp: BigInt(0),
  };
}
export const RewardAssetPrice = {
  typeUrl: "/neutron.revenue.RewardAssetPrice",
  encode(message: RewardAssetPrice, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cumulativePrice !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.cumulativePrice, 18).atomics);
    }
    if (message.absolutePrice !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.absolutePrice, 18).atomics);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).int64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardAssetPrice {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardAssetPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativePrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.absolutePrice = Decimal.fromAtomics(reader.string(), 18).toString();
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
  fromJSON(object: any): RewardAssetPrice {
    const obj = createBaseRewardAssetPrice();
    if (isSet(object.cumulativePrice)) obj.cumulativePrice = String(object.cumulativePrice);
    if (isSet(object.absolutePrice)) obj.absolutePrice = String(object.absolutePrice);
    if (isSet(object.timestamp)) obj.timestamp = BigInt(object.timestamp.toString());
    return obj;
  },
  toJSON(message: RewardAssetPrice): JsonSafe<RewardAssetPrice> {
    const obj: any = {};
    message.cumulativePrice !== undefined && (obj.cumulativePrice = message.cumulativePrice);
    message.absolutePrice !== undefined && (obj.absolutePrice = message.absolutePrice);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RewardAssetPrice>, I>>(object: I): RewardAssetPrice {
    const message = createBaseRewardAssetPrice();
    message.cumulativePrice = object.cumulativePrice ?? "";
    message.absolutePrice = object.absolutePrice ?? "";
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
  fromAmino(object: RewardAssetPriceAmino): RewardAssetPrice {
    const message = createBaseRewardAssetPrice();
    if (object.cumulative_price !== undefined && object.cumulative_price !== null) {
      message.cumulativePrice = object.cumulative_price;
    }
    if (object.absolute_price !== undefined && object.absolute_price !== null) {
      message.absolutePrice = object.absolute_price;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: RewardAssetPrice): RewardAssetPriceAmino {
    const obj: any = {};
    obj.cumulative_price = message.cumulativePrice === "" ? undefined : message.cumulativePrice;
    obj.absolute_price = message.absolutePrice === "" ? undefined : message.absolutePrice;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RewardAssetPriceAminoMsg): RewardAssetPrice {
    return RewardAssetPrice.fromAmino(object.value);
  },
};
