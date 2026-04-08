import { BinaryReader, BinaryWriter } from "../../binary.js";
import { DeepPartial, Exact } from "../../helpers.js";
import { JsonSafe } from "../../json-safe.js";
export declare const protobufPackage = "neutron.revenue";
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
export interface MonthlyPaymentScheduleType {
}
/**
 * Periods defined by a specific number of blocks, with payments made when the required block
 * count is reached.
 */
export interface BlockBasedPaymentScheduleType {
    /** The number of blocks in a payment period. */
    blocksPerPeriod: bigint;
}
/** Endless periods with payments never made. */
export interface EmptyPaymentScheduleType {
}
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
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): JsonSafe<Params>;
    fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params;
};
export declare const RewardQuote: {
    typeUrl: string;
    encode(message: RewardQuote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RewardQuote;
    fromJSON(object: any): RewardQuote;
    toJSON(message: RewardQuote): JsonSafe<RewardQuote>;
    fromPartial<I extends Exact<DeepPartial<RewardQuote>, I>>(object: I): RewardQuote;
};
export declare const PaymentScheduleType: {
    typeUrl: string;
    encode(message: PaymentScheduleType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PaymentScheduleType;
    fromJSON(object: any): PaymentScheduleType;
    toJSON(message: PaymentScheduleType): JsonSafe<PaymentScheduleType>;
    fromPartial<I extends Exact<DeepPartial<PaymentScheduleType>, I>>(object: I): PaymentScheduleType;
};
export declare const MonthlyPaymentScheduleType: {
    typeUrl: string;
    encode(_: MonthlyPaymentScheduleType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MonthlyPaymentScheduleType;
    fromJSON(_: any): MonthlyPaymentScheduleType;
    toJSON(_: MonthlyPaymentScheduleType): JsonSafe<MonthlyPaymentScheduleType>;
    fromPartial<I extends Exact<DeepPartial<MonthlyPaymentScheduleType>, I>>(_: I): MonthlyPaymentScheduleType;
};
export declare const BlockBasedPaymentScheduleType: {
    typeUrl: string;
    encode(message: BlockBasedPaymentScheduleType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockBasedPaymentScheduleType;
    fromJSON(object: any): BlockBasedPaymentScheduleType;
    toJSON(message: BlockBasedPaymentScheduleType): JsonSafe<BlockBasedPaymentScheduleType>;
    fromPartial<I extends Exact<DeepPartial<BlockBasedPaymentScheduleType>, I>>(object: I): BlockBasedPaymentScheduleType;
};
export declare const EmptyPaymentScheduleType: {
    typeUrl: string;
    encode(_: EmptyPaymentScheduleType, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EmptyPaymentScheduleType;
    fromJSON(_: any): EmptyPaymentScheduleType;
    toJSON(_: EmptyPaymentScheduleType): JsonSafe<EmptyPaymentScheduleType>;
    fromPartial<I extends Exact<DeepPartial<EmptyPaymentScheduleType>, I>>(_: I): EmptyPaymentScheduleType;
};
export declare const PerformanceRequirement: {
    typeUrl: string;
    encode(message: PerformanceRequirement, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PerformanceRequirement;
    fromJSON(object: any): PerformanceRequirement;
    toJSON(message: PerformanceRequirement): JsonSafe<PerformanceRequirement>;
    fromPartial<I extends Exact<DeepPartial<PerformanceRequirement>, I>>(object: I): PerformanceRequirement;
};
