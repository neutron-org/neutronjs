/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { Decimal } from "@cosmjs/math";
export const protobufPackage = "neutron.revenue";
/** Defines the parameters for the module. */
export interface Params {
  /**
   * The asset used in revenue payments to validators. Expected to be a native token of the chain
   * with its denom metadata registered in the bank module. The denom metadata must have a defined
   * symbol field and contain a denom unit with an alias equal to the symbol and a specified
   * exponent.
   */
  rewardAsset: string;
  /** Quotation of the reward asset. */
  rewardQuote?: RewardQuote;
  /**
   * Specifies performance requirements for validators in scope of blocks signing and creation. If
   * not met, the validator is not rewarded.
   */
  blocksPerformanceRequirement?: PerformanceRequirement;
  /**
   * Specifies performance requirements for validators in scope of the oracle price votes. If not
   * met, the validator is not rewarded.
   */
  oracleVotesPerformanceRequirement?: PerformanceRequirement;
  /** Indicates the currently active type of payment schedule. */
  paymentScheduleType?: PaymentScheduleType;
  /** The time window, in seconds, used to calculate the TWAP of the reward asset. */
  twapWindow: bigint;
}
/** Defines information about the reward quote. */
export interface RewardQuote {
  /**
   * The compensation amount measured in the quote asset. The amount is divided by the price of
   * the reward asset to determine the base revenue amount.
   */
  amount: bigint;
  /**
   * The name of the quote asset. It is used as a quote in price queries to the slinky oracle
   * module to determine the price of the reward asset.
   */
  asset: string;
}
/**
 * A model that contains information specific to the currently active payment schedule type. The
 * oneof implementations define the payment schedule that must be used currently.
 * This is a module's parameter. It's not updated automatically in runtime in contrast to the
 * payment schedule which is a state variable, but is updated via MsgUpdateParams.
 */
export interface PaymentScheduleType {
  monthlyPaymentScheduleType?: MonthlyPaymentScheduleType;
  blockBasedPaymentScheduleType?: BlockBasedPaymentScheduleType;
  emptyPaymentScheduleType?: EmptyPaymentScheduleType;
}
/** Monthly periods with payments made at the end of each month. */
export interface MonthlyPaymentScheduleType {}
/**
 * Periods defined by a specific number of blocks, with payments made when the required block
 * count is reached.
 */
export interface BlockBasedPaymentScheduleType {
  /** The number of blocks in a payment period. */
  blocksPerPeriod: bigint;
}
/** Endless periods with payments never made. */
export interface EmptyPaymentScheduleType {}
/** Specifies a performance criteria that validators must meet to qualify for network rewards. */
export interface PerformanceRequirement {
  /**
   * The fraction of the total performance a validator can miss without affecting their reward.
   * Represented as a decimal value in the range [0.0, 1.0], where 1.0 corresponds to 100%.
   */
  allowedToMiss: string;
  /**
   * The minimum fraction of the total performance a validator must achieve to be eligible for
   * network rewards. Validators falling below this threshold will not receive any rewards.
   * Represented as a decimal value in the range [0.0, 1.0], where 1.0 corresponds to 100%.
   */
  requiredAtLeast: string;
}
function createBaseParams(): Params {
  return {
    rewardAsset: "",
    rewardQuote: undefined,
    blocksPerformanceRequirement: undefined,
    oracleVotesPerformanceRequirement: undefined,
    paymentScheduleType: undefined,
    twapWindow: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/neutron.revenue.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rewardAsset !== "") {
      writer.uint32(10).string(message.rewardAsset);
    }
    if (message.rewardQuote !== undefined) {
      RewardQuote.encode(message.rewardQuote, writer.uint32(18).fork()).ldelim();
    }
    if (message.blocksPerformanceRequirement !== undefined) {
      PerformanceRequirement.encode(message.blocksPerformanceRequirement, writer.uint32(26).fork()).ldelim();
    }
    if (message.oracleVotesPerformanceRequirement !== undefined) {
      PerformanceRequirement.encode(
        message.oracleVotesPerformanceRequirement,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.paymentScheduleType !== undefined) {
      PaymentScheduleType.encode(message.paymentScheduleType, writer.uint32(42).fork()).ldelim();
    }
    if (message.twapWindow !== BigInt(0)) {
      writer.uint32(48).int64(message.twapWindow);
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
          message.rewardAsset = reader.string();
          break;
        case 2:
          message.rewardQuote = RewardQuote.decode(reader, reader.uint32());
          break;
        case 3:
          message.blocksPerformanceRequirement = PerformanceRequirement.decode(reader, reader.uint32());
          break;
        case 4:
          message.oracleVotesPerformanceRequirement = PerformanceRequirement.decode(reader, reader.uint32());
          break;
        case 5:
          message.paymentScheduleType = PaymentScheduleType.decode(reader, reader.uint32());
          break;
        case 6:
          message.twapWindow = reader.int64();
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
    if (isSet(object.rewardAsset)) obj.rewardAsset = String(object.rewardAsset);
    if (isSet(object.rewardQuote)) obj.rewardQuote = RewardQuote.fromJSON(object.rewardQuote);
    if (isSet(object.blocksPerformanceRequirement))
      obj.blocksPerformanceRequirement = PerformanceRequirement.fromJSON(object.blocksPerformanceRequirement);
    if (isSet(object.oracleVotesPerformanceRequirement))
      obj.oracleVotesPerformanceRequirement = PerformanceRequirement.fromJSON(
        object.oracleVotesPerformanceRequirement,
      );
    if (isSet(object.paymentScheduleType))
      obj.paymentScheduleType = PaymentScheduleType.fromJSON(object.paymentScheduleType);
    if (isSet(object.twapWindow)) obj.twapWindow = BigInt(object.twapWindow.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.rewardAsset !== undefined && (obj.rewardAsset = message.rewardAsset);
    message.rewardQuote !== undefined &&
      (obj.rewardQuote = message.rewardQuote ? RewardQuote.toJSON(message.rewardQuote) : undefined);
    message.blocksPerformanceRequirement !== undefined &&
      (obj.blocksPerformanceRequirement = message.blocksPerformanceRequirement
        ? PerformanceRequirement.toJSON(message.blocksPerformanceRequirement)
        : undefined);
    message.oracleVotesPerformanceRequirement !== undefined &&
      (obj.oracleVotesPerformanceRequirement = message.oracleVotesPerformanceRequirement
        ? PerformanceRequirement.toJSON(message.oracleVotesPerformanceRequirement)
        : undefined);
    message.paymentScheduleType !== undefined &&
      (obj.paymentScheduleType = message.paymentScheduleType
        ? PaymentScheduleType.toJSON(message.paymentScheduleType)
        : undefined);
    message.twapWindow !== undefined && (obj.twapWindow = (message.twapWindow || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.rewardAsset = object.rewardAsset ?? "";
    if (object.rewardQuote !== undefined && object.rewardQuote !== null) {
      message.rewardQuote = RewardQuote.fromPartial(object.rewardQuote);
    }
    if (object.blocksPerformanceRequirement !== undefined && object.blocksPerformanceRequirement !== null) {
      message.blocksPerformanceRequirement = PerformanceRequirement.fromPartial(
        object.blocksPerformanceRequirement,
      );
    }
    if (
      object.oracleVotesPerformanceRequirement !== undefined &&
      object.oracleVotesPerformanceRequirement !== null
    ) {
      message.oracleVotesPerformanceRequirement = PerformanceRequirement.fromPartial(
        object.oracleVotesPerformanceRequirement,
      );
    }
    if (object.paymentScheduleType !== undefined && object.paymentScheduleType !== null) {
      message.paymentScheduleType = PaymentScheduleType.fromPartial(object.paymentScheduleType);
    }
    if (object.twapWindow !== undefined && object.twapWindow !== null) {
      message.twapWindow = BigInt(object.twapWindow.toString());
    }
    return message;
  },
};
function createBaseRewardQuote(): RewardQuote {
  return {
    amount: BigInt(0),
    asset: "",
  };
}
export const RewardQuote = {
  typeUrl: "/neutron.revenue.RewardQuote",
  encode(message: RewardQuote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    if (message.asset !== "") {
      writer.uint32(18).string(message.asset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardQuote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardQuote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        case 2:
          message.asset = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardQuote {
    const obj = createBaseRewardQuote();
    if (isSet(object.amount)) obj.amount = BigInt(object.amount.toString());
    if (isSet(object.asset)) obj.asset = String(object.asset);
    return obj;
  },
  toJSON(message: RewardQuote): JsonSafe<RewardQuote> {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    message.asset !== undefined && (obj.asset = message.asset);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RewardQuote>, I>>(object: I): RewardQuote {
    const message = createBaseRewardQuote();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    message.asset = object.asset ?? "";
    return message;
  },
};
function createBasePaymentScheduleType(): PaymentScheduleType {
  return {
    monthlyPaymentScheduleType: undefined,
    blockBasedPaymentScheduleType: undefined,
    emptyPaymentScheduleType: undefined,
  };
}
export const PaymentScheduleType = {
  typeUrl: "/neutron.revenue.PaymentScheduleType",
  encode(message: PaymentScheduleType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.monthlyPaymentScheduleType !== undefined) {
      MonthlyPaymentScheduleType.encode(
        message.monthlyPaymentScheduleType,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.blockBasedPaymentScheduleType !== undefined) {
      BlockBasedPaymentScheduleType.encode(
        message.blockBasedPaymentScheduleType,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.emptyPaymentScheduleType !== undefined) {
      EmptyPaymentScheduleType.encode(message.emptyPaymentScheduleType, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PaymentScheduleType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentScheduleType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.monthlyPaymentScheduleType = MonthlyPaymentScheduleType.decode(reader, reader.uint32());
          break;
        case 5:
          message.blockBasedPaymentScheduleType = BlockBasedPaymentScheduleType.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.emptyPaymentScheduleType = EmptyPaymentScheduleType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PaymentScheduleType {
    const obj = createBasePaymentScheduleType();
    if (isSet(object.monthlyPaymentScheduleType))
      obj.monthlyPaymentScheduleType = MonthlyPaymentScheduleType.fromJSON(object.monthlyPaymentScheduleType);
    if (isSet(object.blockBasedPaymentScheduleType))
      obj.blockBasedPaymentScheduleType = BlockBasedPaymentScheduleType.fromJSON(
        object.blockBasedPaymentScheduleType,
      );
    if (isSet(object.emptyPaymentScheduleType))
      obj.emptyPaymentScheduleType = EmptyPaymentScheduleType.fromJSON(object.emptyPaymentScheduleType);
    return obj;
  },
  toJSON(message: PaymentScheduleType): JsonSafe<PaymentScheduleType> {
    const obj: any = {};
    message.monthlyPaymentScheduleType !== undefined &&
      (obj.monthlyPaymentScheduleType = message.monthlyPaymentScheduleType
        ? MonthlyPaymentScheduleType.toJSON(message.monthlyPaymentScheduleType)
        : undefined);
    message.blockBasedPaymentScheduleType !== undefined &&
      (obj.blockBasedPaymentScheduleType = message.blockBasedPaymentScheduleType
        ? BlockBasedPaymentScheduleType.toJSON(message.blockBasedPaymentScheduleType)
        : undefined);
    message.emptyPaymentScheduleType !== undefined &&
      (obj.emptyPaymentScheduleType = message.emptyPaymentScheduleType
        ? EmptyPaymentScheduleType.toJSON(message.emptyPaymentScheduleType)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PaymentScheduleType>, I>>(object: I): PaymentScheduleType {
    const message = createBasePaymentScheduleType();
    if (object.monthlyPaymentScheduleType !== undefined && object.monthlyPaymentScheduleType !== null) {
      message.monthlyPaymentScheduleType = MonthlyPaymentScheduleType.fromPartial(
        object.monthlyPaymentScheduleType,
      );
    }
    if (object.blockBasedPaymentScheduleType !== undefined && object.blockBasedPaymentScheduleType !== null) {
      message.blockBasedPaymentScheduleType = BlockBasedPaymentScheduleType.fromPartial(
        object.blockBasedPaymentScheduleType,
      );
    }
    if (object.emptyPaymentScheduleType !== undefined && object.emptyPaymentScheduleType !== null) {
      message.emptyPaymentScheduleType = EmptyPaymentScheduleType.fromPartial(
        object.emptyPaymentScheduleType,
      );
    }
    return message;
  },
};
function createBaseMonthlyPaymentScheduleType(): MonthlyPaymentScheduleType {
  return {};
}
export const MonthlyPaymentScheduleType = {
  typeUrl: "/neutron.revenue.MonthlyPaymentScheduleType",
  encode(_: MonthlyPaymentScheduleType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MonthlyPaymentScheduleType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonthlyPaymentScheduleType();
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
  fromJSON(_: any): MonthlyPaymentScheduleType {
    const obj = createBaseMonthlyPaymentScheduleType();
    return obj;
  },
  toJSON(_: MonthlyPaymentScheduleType): JsonSafe<MonthlyPaymentScheduleType> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MonthlyPaymentScheduleType>, I>>(_: I): MonthlyPaymentScheduleType {
    const message = createBaseMonthlyPaymentScheduleType();
    return message;
  },
};
function createBaseBlockBasedPaymentScheduleType(): BlockBasedPaymentScheduleType {
  return {
    blocksPerPeriod: BigInt(0),
  };
}
export const BlockBasedPaymentScheduleType = {
  typeUrl: "/neutron.revenue.BlockBasedPaymentScheduleType",
  encode(message: BlockBasedPaymentScheduleType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blocksPerPeriod !== BigInt(0)) {
      writer.uint32(8).uint64(message.blocksPerPeriod);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockBasedPaymentScheduleType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockBasedPaymentScheduleType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blocksPerPeriod = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockBasedPaymentScheduleType {
    const obj = createBaseBlockBasedPaymentScheduleType();
    if (isSet(object.blocksPerPeriod)) obj.blocksPerPeriod = BigInt(object.blocksPerPeriod.toString());
    return obj;
  },
  toJSON(message: BlockBasedPaymentScheduleType): JsonSafe<BlockBasedPaymentScheduleType> {
    const obj: any = {};
    message.blocksPerPeriod !== undefined &&
      (obj.blocksPerPeriod = (message.blocksPerPeriod || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BlockBasedPaymentScheduleType>, I>>(
    object: I,
  ): BlockBasedPaymentScheduleType {
    const message = createBaseBlockBasedPaymentScheduleType();
    if (object.blocksPerPeriod !== undefined && object.blocksPerPeriod !== null) {
      message.blocksPerPeriod = BigInt(object.blocksPerPeriod.toString());
    }
    return message;
  },
};
function createBaseEmptyPaymentScheduleType(): EmptyPaymentScheduleType {
  return {};
}
export const EmptyPaymentScheduleType = {
  typeUrl: "/neutron.revenue.EmptyPaymentScheduleType",
  encode(_: EmptyPaymentScheduleType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EmptyPaymentScheduleType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmptyPaymentScheduleType();
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
  fromJSON(_: any): EmptyPaymentScheduleType {
    const obj = createBaseEmptyPaymentScheduleType();
    return obj;
  },
  toJSON(_: EmptyPaymentScheduleType): JsonSafe<EmptyPaymentScheduleType> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EmptyPaymentScheduleType>, I>>(_: I): EmptyPaymentScheduleType {
    const message = createBaseEmptyPaymentScheduleType();
    return message;
  },
};
function createBasePerformanceRequirement(): PerformanceRequirement {
  return {
    allowedToMiss: "",
    requiredAtLeast: "",
  };
}
export const PerformanceRequirement = {
  typeUrl: "/neutron.revenue.PerformanceRequirement",
  encode(message: PerformanceRequirement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowedToMiss !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.allowedToMiss, 18).atomics);
    }
    if (message.requiredAtLeast !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.requiredAtLeast, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PerformanceRequirement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePerformanceRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedToMiss = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.requiredAtLeast = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PerformanceRequirement {
    const obj = createBasePerformanceRequirement();
    if (isSet(object.allowedToMiss)) obj.allowedToMiss = String(object.allowedToMiss);
    if (isSet(object.requiredAtLeast)) obj.requiredAtLeast = String(object.requiredAtLeast);
    return obj;
  },
  toJSON(message: PerformanceRequirement): JsonSafe<PerformanceRequirement> {
    const obj: any = {};
    message.allowedToMiss !== undefined && (obj.allowedToMiss = message.allowedToMiss);
    message.requiredAtLeast !== undefined && (obj.requiredAtLeast = message.requiredAtLeast);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PerformanceRequirement>, I>>(object: I): PerformanceRequirement {
    const message = createBasePerformanceRequirement();
    message.allowedToMiss = object.allowedToMiss ?? "";
    message.requiredAtLeast = object.requiredAtLeast ?? "";
    return message;
  },
};
